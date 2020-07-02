import { Heading, Grid, Box, Icon, Link, Flex } from '@chakra-ui/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import Page from 'components/Page';
import ThemeCard from 'components/ThemeCard';
import * as Themes from '../themes.json';

const PageHome = (props) => {
  const themes = Themes.themes.map((theme) => {
    return <ThemeCard key={theme.packageName} theme={theme} />;
  });
  return (
    <Page>
      <Box maxW="4xl" mx="auto" p={5}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading pt={4} pb={6}>
            Chakra Themes
          </Heading>
          <Link href="https://github.com/ivoilic/chakra-ui-themes" isExternal>
            <MarkGithubIcon size={24} />
          </Link>
        </Flex>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          {themes}
        </Grid>
      </Box>
    </Page>
  );
};

export default PageHome;
