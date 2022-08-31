import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Spacer, HStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';

function Nav() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack w="full" h="full">
      <Flex  w="100%">
        <Spacer />
          <HStack as="nav" >
              <Button as={ReachLink} to="/resume">Home</Button>
              <Button as={ReachLink} to="/about">About</Button>
              <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
          </HStack>
      </Flex>
    </VStack>
  );
}

export default Nav;