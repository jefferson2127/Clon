import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants"

const PoostFooter = ({username}) => {
    const [liked, setliked] = useState(false)
    const [likes, setlikes] = useState(1000)

    const handlelike = () => {
        if (liked) {
            setliked(false)
            setlikes(likes - 1)
        } else {
            setliked(true)
            setlikes(likes + 1)
        }
    }

  return (
    <>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
            <Box onClick={handlelike} 
            cursor={"pointer"}
            fontSize={18}
            >{!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
            </Box>
            <Box cursor={"pointer"} fontSize={18}>
                <CommentLogo />
            </Box>
        </Flex>
            <Text fontWeight={600} fontSize={"sm"}>
                {likes} likes
            </Text>
            <Text fontSize="sm" fontWeight={700}>
                {username}{""}
                <Text as="span" fontWeight={400}>
                    Feeling good
                </Text>
            </Text>
            <Text fontSize="sm" color={"gray"}>
                View all 1,000 comments
            </Text>
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
           <InputGroup>
                <Input variant={"flushed"} placeholder={"add your comment..."} fontSize={14}/>
        <InputRightElement>
            <Button fontSize={14} color={"blue"} fontWeight={600} cursor={"pointer"} _hover={{color: "black"}} bg={"transparent"}>
                Post
            </Button>
        </InputRightElement>
              
           </InputGroup> 
        </Flex>
    </>
  );
};

export default PoostFooter