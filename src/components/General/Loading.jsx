import { Box } from "@chakra-ui/react";
import ViteIcon from "~/icons/ViteIcon";

const Loading = () => {
  return (
    <Box
      mx="auto"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ViteIcon />
    </Box>
  );
};

export default Loading;
