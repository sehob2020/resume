import React from 'react';
import { HStack } from '@chakra-ui/layout';

import Social from '../components/Social';

function Home() {
  return (
      <HStack display="flex" alignItems="center" justifyContent="center" h="full" w="100%">
          <Social />
      </HStack>
  );
}

export default Home;
