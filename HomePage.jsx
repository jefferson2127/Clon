import { Box, Container, Flex } from "@chakra-ui/react"
import FeedPost from "../../components/FeedPost/FeedPost";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";


const HomePage = () => {
  return (
    <Container maxW={"container.lg"} >
      <Flex gap={15}>
        <Box flex={2} py={10} >
          <FeedPost />
        </Box>
        <Box flex={3} py={10} mr={20} display={{base:"none", lg:"block"}} maxW={"300px"} border={"1px solid red"}>
          <SuggestedUsers />
          </Box>
      </Flex>
      
    </Container>
  )
};

export default HomePage;
