import { Heading } from '@chakra-ui/core';
import Page from 'components/Page';
import useTestTheme from 'hooks/useTestTheme';

const PageHome = (props) => {
  const { setTestTheme } = useTestTheme();
  return (
    <Page>
      <Heading>Chakra UI Themes</Heading>
    </Page>
  );
};

export default PageHome;
