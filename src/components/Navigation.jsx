import React from "react";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="blue.500" color="white" p={3} align="center">
      <Box p="2">ChatGPT-4 Desktop App</Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        {}
      </Box>
    </Flex>
  );
};

export default Navigation;
