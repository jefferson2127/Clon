import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

const PostHeader = ({username, avatar}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex>
            <Avatar src={avatar} alt="user profile pic" size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={2} >
                {username}
                <Box color={"gray"}> - 1w </Box>
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
        
        <Text fontSize={12} color={"blue"} fontWeight={"bold"} _hover={{color: "black"}} transition={"0.2s ease-in-out"}>
            Unfollow
        </Text>
        
        </Box>
    </Flex>
  )
}

export default PostHeader