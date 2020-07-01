import theme from '@chakra-ui/theme';

const TestThemeContext = React.createContext([theme, () => {}]);

const TestThemeProvider = (props) => {
  const [testTheme, setTestTheme] = React.useState(theme);
  const { children } = props;

  return (
    <TestThemeContext.Provider value={[testTheme, setTestTheme]}>
      {children}
    </TestThemeContext.Provider>
  );
};

export { TestThemeProvider, TestThemeContext };
