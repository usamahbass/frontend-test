import { Box, Flex, Stack, Text, SkeletonText } from "@chakra-ui/react";

const FallbackJobCard = () => {
  return (
    <Box borderTopWidth="1px" py="5" borderBottomWidth="1px">
      <Flex justifyContent="space-between">
        <Stack spacing={10}>
          <SkeletonText w="300px" noOfLines={1}></SkeletonText>

          <Flex gap={3}>
            <SkeletonText w="100px" noOfLines={1}></SkeletonText>

            <SkeletonText
              w="100px"
              noOfLines={1}
              fontWeight={700}
            ></SkeletonText>
          </Flex>
        </Stack>

        <Stack textAlign="right" spacing={10}>
          <SkeletonText
            w="100px"
            noOfLines={1}
            color="#A2A2A3"
            fontWeight={700}
          ></SkeletonText>
          <SkeletonText w="100px" noOfLines={1} color="#A2A2A3"></SkeletonText>
        </Stack>
      </Flex>
    </Box>
  );
};

export default FallbackJobCard;
