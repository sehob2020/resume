import { Button } from '@chakra-ui/button';
import { Circle, Stack, Flex, Box, Text, Link } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';

function Header() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Stack>
            <Circle position="absolute" bg={isDark ? "blue.800" : "blue.200"} opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"} 
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize="5xl" fontWeight="light">Hello world, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, orange.400, pink.700, purple.600)" bgClip="text" >Sebastian Hoberg</Text>
                    <Text fontSize="5xl" bgGradient="linear(to-r, orange.400, pink.500, purple.600)" bgClip="text" letterSpacing="15px" >frontend developer</Text>
                    <Link mt={8} background="orange.500"  
                    href="https://drive.google.com/file/d/1N6k61uUVzAZcfQPSTUnlCssY1vlo5xmF/view"
                    target="_blank"
                    _hover={{
                    background: "orange.300",
                  }}>
                    <Button 
                    background="orange.500" 
                    _active={{
                        background: "orange.300"
                    }}
                    _hover={{
                    background: "orange.300"
                  }}>Download CV</Button></Link>
                </Box>
                <Circle alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} 
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="2xl"
                    boxSize="300px"/>
            </Flex>
        </Stack>
    )
}

export default Header;
