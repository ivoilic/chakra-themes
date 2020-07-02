import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/core';
import Footer from 'components/Footer';

const Page = (props) => {
  const { children, title } = props;
  const pageTitle = title ? `Charka Themes | ${title}` : 'Charka Themes';
  return (
    <Flex direction="column" minH="100vh" pos="relative">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Box flex="1 1 auto">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Page;
