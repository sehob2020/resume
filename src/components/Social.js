import { HStack, VStack, Text } from '@chakra-ui/layout'
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import { Icon } from '@chakra-ui/icon'
import { useMediaQuery } from '@chakra-ui/media-query'
import { motion } from "framer-motion"

function Social() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Text fontWeight="thin" textAlign="center" fontSize="1xl" letterSpacing="5px" pb="9px">hoberg.sebastian@gmail.com</Text>
                <HStack spacing={isNotSmallerScreen ? "24" : "10"}>
                    <Icon as={FaLinkedin} boxSize="50" cursor="pointer" onClick={() => 
                        window.open("https://www.linkedin.com/in/sebastian-hoberg-ba2a77140/")
                    } />
                    <Icon as={FaGithub} boxSize="50" cursor="pointer" onClick={() => 
                        window.open("https://github.com/sehob2020")
                    } />
                    <Icon as={FaFacebookF} boxSize="50" cursor="pointer" onClick={() => 
                        window.open("https://www.facebook.com/sebastian.hoberg")
                    } />
                    <Icon as={FaGoogle} boxSize="50" cursor="pointer" onClick={() => 
                        window.open("mailto:hoberg.sebastian@gmail.com")
                    } />
                </HStack>
            </motion.div>
        </VStack>
    )
}

export default Social;
