import { useTranslation } from 'react-i18next';

const LegalPage: React.FC = () => {
    const { t } = useTranslation('page', { keyPrefix: 'legal' });
    return (
        <>
            <h1>{t('title')}</h1>
            <div>{t('description')}</div>
        </>
    );
};

export default LegalPage;
