import { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-swr-infinite-scroll";
import { request } from "~/utils/request";
import AppLayout from "~/layouts";
import JobCard from "~/components/General/JobCard";
import FilterSearch from "~/components/General/FilterSearch";
import PageTitle from "~/components/General/PageTitle";
import FallbackJobCard from "~/components/General/_FallbackJobCard";

const HomePages = () => {
  const swr = useSWRInfinite(
    (index) => `/api/recruitment/positions.json?page=${index + 1}`
  );

  const [searchResponse, setSearchResponse] = useState(null);

  const handleSearchAndFilter = async (values) => {
    try {
      const response = await request.get(
        `/api/recruitment/positions.json?description=${values?.description}&location=${values?.location}&full_time=${values?.full_time}`
      );

      setSearchResponse(response.data);
    } finally {
    }
  };

  return (
    <AppLayout>
      <PageTitle title="Find Your Job Here" />

      <FilterSearch handleSearchAndFilter={handleSearchAndFilter} />

      <Card p="5" mt="14">
        <CardHeader>
          <Heading>Job Lists</Heading>
        </CardHeader>
        <CardBody>
          {swr.isLoading ? (
            Array.from(new Array(10)).map((_, i) => <FallbackJobCard key={i} />)
          ) : searchResponse ? (
            searchResponse
              ?.filter((el) => el)
              .map((jobData, i) => <JobCard key={i} {...jobData} />)
          ) : (
            <InfiniteScroll
              swr={swr}
              isReachingEnd={swr.error}
              loadingIndicator={
                <Box
                  py="10"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Spinner />
                </Box>
              }
            >
              {(jobsDatas) =>
                jobsDatas
                  ?.filter((el) => el)
                  .map((jobData, i) => <JobCard key={i} {...jobData} />)
              }
            </InfiniteScroll>
          )}
        </CardBody>
      </Card>
    </AppLayout>
  );
};

export default HomePages;
