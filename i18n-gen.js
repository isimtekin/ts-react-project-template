require('dotenv').config({ path: './.env.local' });
const _ = require('lodash');
const jsonfile = require('jsonfile');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const ora = require('ora');

const credential = {
    googleSheetId: process.env.GOOGLE_SHEET_CLIENT_ID,
    client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

function asyncForEach(lineItems, asyncIterator) {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0, len = lineItems.length; len > i; i++) {
                const data = await asyncIterator(lineItems[i]);
                lineItems[i] = data;
                if (i >= len - 1) {
                    resolve(lineItems);
                }
            }
        } catch (err) {
            reject(err);
        }
    });
}

const doc = new GoogleSpreadsheet(credential.googleSheetId);

const auth = async () => {
    const spinner = ora('authenticating...').start();
    doc.useServiceAccountAuth({
        client_email: credential.client_email,
        private_key: credential.private_key,
    });
    await doc.loadInfo();
    spinner.succeed('authenticated!');
};

const getLangs = async () => {
    const spinner = ora('fetching languages...').start();
    let langs = [];

    await asyncForEach(doc.sheetsByIndex, async (sheet) => {
        if (sheet.title === 'langs') {
            const rows = await sheet.getRows();
            langs = rows.map((row) => row.key);
        }
    });
    spinner.succeed(`fetched languages: ${langs.join(', ')}`);
    return langs;
};

const generateI18n = async function () {
    const spinner = ora();

    await auth();
    const langs = await getLangs();

    const i18n = {};

    await asyncForEach(langs, async (lang) => {
        spinner.render();

        const spinneri18n = ora(`${lang}-i18n is generating...`).start();

        _.set(i18n, [lang], {});

        await asyncForEach(doc.sheetsByIndex, async (sheet) => {
            if (!sheet.title.startsWith('i18n:')) {
                return;
            }
            const i18nBase = sheet.title.replace('i18n:', '');
            _.set(i18n, [lang, i18nBase], {});
            const rows = await sheet.getRows();

            await asyncForEach(rows, async (row) => {
                const path = [lang, i18nBase, ...row.key.split('.')];
                _.set(i18n, path, row[lang] || `${lang}.${path.join('.')}`);
            });
        });
        await jsonfile.writeFileSync(
            `./public/assets/locales/${lang}.translation.json`,
            i18n[lang],
            { spaces: 2 },
            function (err) {
                if (err) console.error(err);
            }
        );
        spinneri18n.succeed(`${lang}-i18n is generated!`);
    });
    spinner.succeed('i18n generated!');
};

generateI18n();
