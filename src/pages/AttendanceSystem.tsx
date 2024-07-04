import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AttendanceSystemPage from 'src/components/pages/AttendanceSystem';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
    },
  };
}

export default AttendanceSystemPage;