/* eslint-disable react/jsx-one-expression-per-line */
import { Box, Link } from '@chakra-ui/core';

const Footer = (props) => {
  return (
    <Box borderTopWidth="1px" p="5" textAlign="center">
      <Box fontSize="12px">
        <Box pb={3}>
          Made in NYC{' '}
          <span role="img" aria-label="Statue of Liberty Emoji">
            🗽
          </span>
        </Box>
        <Box>Released under the MIT License.</Box>
        <Box>
          Copyright &copy; 2020{' '}
          <Link href="https://twitter.com/theivoson" isExternal>
            Ivo Ilić
          </Link>
        </Box>
        <Box pt={3}>
          Chakra Themes makes use of Chakra UI which is distributed under the MIT license.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
