import React from "react";
import { Box, Container, Heading, Text, VStack, Image, HStack, IconButton, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} as="section" alignItems="flex-start">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">
            Theodore Roosevelt
          </Heading>
          <Text mt={2} fontSize="xl">
            Conservationist, Naturalist, Historian
          </Text>
        </Box>

        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585066039857-a33b12c14f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaGVvZG9yZSUyMFJvb3NldmVsdHxlbnwwfHx8fDE3MDk1NjYzODh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Theodore Roosevelt" mb={4} />

        <Text fontSize="lg" textAlign="justify">
          Theodore Roosevelt Jr. was an American statesman, politician, conservationist, naturalist, and writer who served as the 26th president of the United States from 1901 to 1909. He also served as the 25th vice president of the United States and as the 33rd governor of New York. Roosevelt emerged as a leader of the Republican Party and became a driving force for anti-trust and Progressive policies.
        </Text>

        <Divider my={6} />

        <Heading as="h2" size="lg">
          Get in Touch
        </Heading>
        <HStack>
          <Link href="https://twitter.com/theoroosevelt" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" variant="ghost" />
          </Link>
          <Link href="https://linkedin.com/in/theoroosevelt" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="linkedin" variant="ghost" />
          </Link>
          <Link href="https://github.com/theoroosevelt" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" colorScheme="gray" variant="ghost" />
          </Link>
          <Link href="mailto:theoroosevelt@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="red" variant="ghost" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
