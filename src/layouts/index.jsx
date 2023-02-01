import { Container } from "@chakra-ui/react";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container mt="10" maxW="8xl">{children}</Container>
    </>
  );
};

export default AppLayout;
