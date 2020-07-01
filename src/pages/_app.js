import { ColorModeProvider, ThemeProvider, GlobalStyle } from '@chakra-ui/system';
import CSSReset from '@chakra-ui/css-reset';
import { TestThemeProvider, TestThemeContext } from 'components/TestThemeContext';

const App = ({ Component, pageProps }) => {
  return (
    <TestThemeProvider>
      <TestThemeContext.Consumer>
        {(context) => (
          <ThemeProvider theme={context[0]}>
            <ColorModeProvider>
              <CSSReset />
              <GlobalStyle />
              <Component {...pageProps} />
            </ColorModeProvider>
          </ThemeProvider>
        )}
      </TestThemeContext.Consumer>
    </TestThemeProvider>
  );
};

export default App;
