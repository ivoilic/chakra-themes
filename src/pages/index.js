import { Heading, Grid, Box } from '@chakra-ui/core';
import Page from 'components/Page';
import ThemeCard from 'components/ThemeCard';
import * as Themes from '../themes.json';

const PageHome = (props) => {
  const themes = Themes.themes.map((theme) => {
    return (
      <ThemeCard
        key={theme.packageName}
        theme={{ ...theme, thumbnail: `https://picsum.photos/seed/wow/1600/900` }}
      />
    );
  });
  return (
    <Page>
      <Box maxW="4xl" mx="auto" p={5}>
        <Heading pt={4} pb={6}>
          Chakra UI Themes
        </Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          {themes}
        </Grid>
      </Box>
    </Page>
  );
};

export default PageHome;
