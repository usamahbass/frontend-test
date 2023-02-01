import { useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Navigate, useParams, Link as RouterLink } from "react-router-dom";
import useSWR from "swr";
import AppLayout from "../layouts";
import FallBackImage from "~/assets/images/png/fallback.png";
import RenderHtml from "../components/General/RenderHTML";
import PageTitle from "../components/General/PageTitle";

const JobDetailPages = () => {
  const { id } = useParams();

  const {
    data: jobDetailData,
    isLoading,
    error: errorsDetail,
  } = useSWR(id ? `/api/recruitment/positions/${id}` : null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (errorsDetail) {
    return <Navigate to="/404" />;
  }

  return (
    <AppLayout>
      <PageTitle title={`${jobDetailData?.title ?? ""}`} />

      <Link
        to={`/`}
        fontSize="1.2rem"
        fontWeight={700}
        color="primary.500"
        as={RouterLink}
      >
        Back
      </Link>

      <Card mt="10" p="5">
        {isLoading ? (
          <Box
            py="10"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner />
          </Box>
        ) : (
          <>
            <CardHeader>
              <Stack>
                <Text color="#C4C4C4" fontSize="1.1rem">
                  {jobDetailData?.type}/{jobDetailData?.location}
                </Text>

                <Heading>{jobDetailData?.title}</Heading>
              </Stack>

              <Divider py="3" />
            </CardHeader>

            <CardBody>
              <Flex
                mt="5"
                flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
                gap={10}
              >
                <Box w={["full", "full", "full", "55%"]}>
                  <RenderHtml html={jobDetailData?.description} />
                </Box>

                <Stack w={["full", "full", "full", "40%"]} spacing={7}>
                  <Card>
                    <CardHeader
                      borderBottomWidth="1px"
                      fontSize="1.1rem"
                      fontWeight={600}
                    >
                      {jobDetailData?.company}
                    </CardHeader>

                    <CardBody>
                      <Image
                        mb="3"
                        w="full"
                        h="300px"
                        fallbackSrc={FallBackImage}
                        src={jobDetailData?.company_logo}
                        alt={jobDetailData?.company}
                      />

                      <Link
                        target="_blank"
                        color="primary.500"
                        href={jobDetailData?.company_url}
                      >
                        {jobDetailData?.company_url}
                      </Link>
                    </CardBody>
                  </Card>

                  <Card bg="#FEFDF3">
                    <CardHeader
                      borderBottomWidth="1px"
                      fontSize="1.1rem"
                      fontWeight={600}
                    >
                      How to apply
                    </CardHeader>

                    <CardBody>
                      <RenderHtml html={jobDetailData?.how_to_apply} />
                    </CardBody>
                  </Card>
                </Stack>
              </Flex>
            </CardBody>
          </>
        )}
      </Card>
    </AppLayout>
  );
};

export default JobDetailPages;
