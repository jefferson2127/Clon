import { Button, Text, Flex, Input, Box, Image, VStack, } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authform = () => {
  const [isLogin, setUslogin] = useState(true);
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAuth = () => {
    if (!inputs.email || !inputs.password){
      alert("please fill out all fields");
      return;
    }
    navigate("/")
  };
  return (
    <>
      <Box border={"1px solid black"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={28}
            cursor={"pointer"}
            alt="Instagram logo"
          />
          <Input
            placeholder="Email"
            fontSize={"12"}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            fontSize={"12"}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {!isLogin ? (
            <Input
              placeholder="Confirn Your Password"
              fontSize={"12"}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text>Or</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx="2" color={"blue.500"}>
              Login in Google
            </Text>
          </Flex>
        </VStack>
        <Box
          border={"1px solid gray"}
          borderRadius={4}
          padding={2}
          marginTop={4}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
              {isLogin ? "Don't have account?" : "Already have an account"}
            </Box>
            <Box onClick={() => setUslogin(!isLogin)} color={"blue"}>
              {isLogin ? "Sign Up" : "Login"}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Authform;
