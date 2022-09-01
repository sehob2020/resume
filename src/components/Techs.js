import React from 'react';
import { HStack, VStack, Text } from '@chakra-ui/layout'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from 'react-icons/fa'
import { SiNextdotjs, SiChakraui, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import Icon from '@chakra-ui/icon'
import { motion } from "framer-motion"
import { useMediaQuery } from '@chakra-ui/media-query'

function Techs() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:500px)");

  return (
    <VStack
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="full"
      w="100%"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text
          display="flex"
          alignItems="center"
          justifyContent="center"
          pb="20px"
          letterSpacing={isNotSmallerScreen ? "5px" : "0px"}
          fontSize={isNotSmallerScreen ? "1xl" : "15"}
        >
          Frontend Developer - EC Utbildning Helsingborg 2020 / 2022
        </Text>

        <VStack
          display="flex"
          w="100%"
          spacing={isNotSmallerScreen ? "0" : "10"}
          flexDirection={isNotSmallerScreen ? "row" : "column"}
        >
          <HStack
            w="100%"
            mr="5"
            spacing="10"
            display="flex"
            alignItems="center"
            justifyContent={isNotSmallerScreen ? "flex-end" : "space-between"}
          >
            <Icon as={FaHtml5} boxSize="50" />
            <Icon as={FaCss3} boxSize="50" />
            <Icon as={FaJs} boxSize="50" />
            <Icon as={SiTypescript} boxSize="50" />
            <Icon as={FaReact} boxSize="50" />
          </HStack>

          <HStack
            w="100%"
            ml="5"
            spacing="10"
            display="flex"
            alignItems="center"
            justifyContent={isNotSmallerScreen ? "flex-start" : "space-between"}
          >
            <Icon as={FaNode} boxSize="50" />
            <Icon as={SiNextdotjs} boxSize="50" />
            <Icon as={SiChakraui} boxSize="50" />
            <Icon as={SiExpress} boxSize="50" />
            <Icon as={SiMongodb} boxSize="50" />
          </HStack>
        </VStack>
      </motion.div>
    </VStack>
  );
}

export default Techs;
