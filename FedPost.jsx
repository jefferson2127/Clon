import PoostFooter from "./PoostFooter"
import PostHeader from "./PostHeader"
import { Box, Image } from "@chakra-ui/react"


const FedPost = ({img, username, avatar}) => {
  return (
    <>
    <PostHeader username={username} avatar={avatar} />
    <Box my={4} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={username} />
    </Box>
    <PoostFooter username={username} />
    </>
  )
}

export default FedPost