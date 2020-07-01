import { useContext } from 'react';
import { TestThemeContext } from 'components/TestThemeContext';

const useTestTheme = () => {
  const [testTheme, setTestTheme] = useContext(TestThemeContext);
  return { testTheme, setTestTheme };
};

export default useTestTheme;
