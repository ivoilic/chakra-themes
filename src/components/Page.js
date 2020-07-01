import Head from 'next/head';
import { Box } from '@chakra-ui/core';

const Page = (props) => {
  const { children, title } = props;
  const pageTitle = title ? `Charka UI Themes | ${title}` : 'Charka UI Themes';
  return (
    <Box>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Box>{children}</Box>
    </Box>
  );
};

export default Page;
