import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { Google as GoogleIcon, ArrowDown2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { getProfile, removeProfile, setProfile } from "../utils/auth";

const Header = () => {
  const { signIn } = useGoogleLogin({
    clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
    scope: "",
    onSuccess: (val) => {
      setProfile(val?.profileObj);
      window.location.reload();
    },
  });

  const { signOut } = useGoogleLogout({
    clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
    scope: "",
    onLogoutSuccess: (val) => {
      removeProfile(val?.profileObj);
      window.location.reload();
    },
  });

  const isProfile = getProfile();

  return (
    <Box bg="primary.500" h="90px" as="header">
      <Container maxW="8xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Flex py={5} gap={3}>
              <Text fontSize="2rem" fontWeight={700}>
                GitHub
              </Text>
              <Text fontSize="2rem">Jobs</Text>
            </Flex>
          </Link>

          {isProfile ? (
            <Menu>
              <MenuButton
                minW={0}
                rounded="full"
                variant="link"
                cursor="pointer"
              >
                <Flex alignItems="center" gap={3}>
                  <Avatar src={isProfile?.imageUrl} name={isProfile?.name} />
                  <Text color="white">{isProfile?.name?.toUpperCase()}</Text>
                  <ArrowDown2 color="white" />
                </Flex>
              </MenuButton>
              <MenuList
                w="224px"
                h="60px"
                borderRadius="20px"
                bg="white"
                ml="90px"
                color="#6E6E6E"
              >
                <MenuItem
                  textAlign="center"
                  fontSize="sm"
                  borderRadius="0 0 20px 20px"
                  color="dark.500"
                  h="40px"
                  _focus={{
                    backgroundColor: "transparent",
                  }}
                  _hover={{
                    color: "primary.500",
                    backgroundColor: "transparent",
                  }}
                  onClick={signOut}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button rightIcon={<GoogleIcon />} onClick={signIn}>
              Login with Google
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
