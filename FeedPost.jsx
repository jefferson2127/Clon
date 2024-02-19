import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FedPost from "./FedPost";
import { useState } from "react";
import { useEffect } from "react";

const FeedPost = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FedPost img="/img.jpg" username="Elpulga65" avatar="/img.jpg" />
          <FedPost img="/img2.jpg" username="carlos49" avatar="/img2.jpg" />
          <FedPost img="/img3.jpg" username="Hetgar" avatar="/img3.jpg" />
          <FedPost img="/img4.jpg" username="Pai_2425" avatar="/img4.jpg" />
        </>
      )}
    </Container>
  );
};

export default FeedPost;
