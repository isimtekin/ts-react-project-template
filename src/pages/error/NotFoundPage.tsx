import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const { t: translate } = useTranslation();
    return <div>{translate('error.notFoundPage')}</div>;
};

export default NotFoundPage;
