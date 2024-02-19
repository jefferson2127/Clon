import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react";
import Authform from "../../components/Authform/Authform";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={8}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={550} alt="Phone img" />
          </Box>


        <VStack spacing={4} align={"stretch"}>
          <Authform />
          <Box textAlign={"center"}>Get The App</Box>
          <Flex gap={4} justifyContent={"center"}>
            <Image src="/playstore.png" h={7} alt="Playstore" />
            <Image src="/microsoft.png" h={7} alt="Microsoft" />
          </Flex>
        </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
