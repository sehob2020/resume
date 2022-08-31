import React from 'react';
import { VStack } from '@chakra-ui/layout'

import Techs from '../components/Techs'

function About() {

  return (
    <VStack display="flex" alignItems="center" justifyContent="center" h="full" w="100%">
        <Techs />
    </VStack>
  );
}

export default About;
