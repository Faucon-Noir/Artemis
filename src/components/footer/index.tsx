import { Box, Link } from '@mui/material';
import { Legal } from 'pages/paths';
import { FooterStyle, NavStyle } from './style';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation('common', { keyPrefix: 'footer' });
    return (
        <Box sx={FooterStyle}>
            <h2 style={{ float: 'left' }}>Athena</h2>
            <Box sx={NavStyle}>
                <p>
                    <Link href={Legal}>{t('legal')}</Link>
                    {t('allRights')}
                </p>
            </Box>
        </Box>
    );
};
export default Footer;
