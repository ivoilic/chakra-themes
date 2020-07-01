import { Box, Image, Flex, Button, Avatar } from '@chakra-ui/core';
import useTestTheme from 'hooks/useTestTheme';

const ThemeCard = (props) => {
  const { setTestTheme } = useTestTheme();
  const { theme } = props;
  const { title, thumbnail, author, packageName } = theme;
  const activateTheme = async () => {
    console.log('click');
    const newTheme = await import(`../themes/${packageName}`);
    console.log(newTheme);
    setTestTheme(newTheme.default);
  };
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box pos="relative">
        <Image src={thumbnail} alt={`${title} Preview`} />
        <Avatar
          pos="absolute"
          right={4}
          name={author}
          size="md"
          transform="translate(0,-50%)"
          borderWidth="3px"
        />
      </Box>
      <Box p="4">
        <Box pb="4" fontWeight="semibold" as="h4" isTruncated>
          {title}
        </Box>
        <Flex>
          <Button w="100%" onClick={activateTheme}>
            Try
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ThemeCard;
