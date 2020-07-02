import {
  Box,
  Image,
  ButtonGroup,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from '@chakra-ui/core';
import useTestTheme from 'hooks/useTestTheme';

const ThemeCard = (props) => {
  const { setTestTheme } = useTestTheme();
  const { theme } = props;
  const { title, thumbnail, author, packageName, github, repo } = theme;

  const toast = useToast();

  const activateTheme = async () => {
    console.log('click');
    const newTheme = await import(`../themes/${packageName}`);
    console.log(newTheme);
    setTestTheme(newTheme.default);
  };

  const copyThemePackageName = async () => {
    navigator.clipboard
      .writeText(packageName)
      .then(() =>
        toast({
          position: 'bottom-left',
          title: 'Copied the Package Name',
          description: 'Just type `yarn add` and paste away!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      )
      .catch((error) =>
        toast({
          position: 'bottom-left',
          title: 'Failed to Copy the Package Name',
          description: error,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      );
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box pos="relative">
        <Image src={thumbnail} alt={`${title} Preview`} pointerEvents="none" />
        <a href={`https://github.com/${github}`}>
          <Avatar
            pos="absolute"
            right={4}
            name={author}
            src={`https://github.com/${github}.png`}
            size="md"
            transform="translate(0,-50%)"
            borderWidth="3px"
          />
        </a>
      </Box>
      <Box p="4">
        <Box pb="4" fontWeight="semibold" as="h4" isTruncated>
          {title}
        </Box>
        <ButtonGroup d="flex" spacing={2}>
          <Menu w="100%">
            <MenuButton w="100%" as={Button} borderWidth="1px" background="transparent">
              ⋯
            </MenuButton>
            <MenuList>
              <MenuItem onClick={copyThemePackageName}>Use Theme</MenuItem>
              <MenuItem
                as="a"
                href={`https://www.npmjs.com/package/${packageName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                NPM
              </MenuItem>
              <MenuItem as="a" href={repo} target="_blank" rel="noopener noreferrer">
                Repo
              </MenuItem>
            </MenuList>
          </Menu>
          <Button w="100%" onClick={activateTheme}>
            Try
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ThemeCard;
