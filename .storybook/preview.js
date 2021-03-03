import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
const customViewports = {
    iPhone: {
        name: 'iPhone 6/7/8',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iPhonePluts: {
        name: 'iPhone 6/7/8 Plus',
        styles: {
            width: '414px',
            height: '736px',
        },
    },
    galaxyS5: {
        name: 'Galaxy S5',
        styles: {
            width: '330px',
            height: '640px',
        },
    },
    iPad: {
        name: 'iPad',
        styles: {
            width: '768',
            height: '1024px',
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
        viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
    },
};

export const decorators = [
    (Story) => (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'auto',
                }}
            >
                <Story />
            </div>
        </>
    ),
];
