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
import AppLayout from "~/layouts";
import JobCard from "~/components/General/JobCard";
import FilterSearch from "~/components/General/FilterSearch";
import FallbackJobCard from "../components/General/_FallbackJobCard";
import PageTitle from "../components/General/PageTitle";

const HomePages = () => {
  // const [pageIndex, setPageIndex] = useState(1);
  // const [apiURL, setAPIURL] = useState(
  //   `/api/recruitment/positions.json?page=${pageIndex}`
  // );

  // const [jobsDatas, setJobsDatas] = useState([]);

  // const { data, isLoading, error } = useSWR(apiURL);

  // useEffect(() => {
  //   if (data) {
  //     setJobsDatas(jobsDatas.concat(data));
  //   }
  // }, [data]);

  const swr = useSWRInfinite(
    (index) => `/api/recruitment/positions.json?page=${index + 1}`
  );

  return (
    <AppLayout>
      <PageTitle title="Find Your Job Here" />

      <FilterSearch
        handleSearchAndFilter={(values) =>
          setAPIURL(
            `/api/recruitment/positions.json?description=${values?.description}&location=${values?.location}&full_time=${values?.full_time}`
          )
        }
      />

      <Card p="5" mt="14">
        <CardHeader>
          <Heading>Job Lists</Heading>
        </CardHeader>
        <CardBody>
          {swr.isLoading ? (
            Array.from(new Array(10)).map((_, i) => <FallbackJobCard key={i} />)
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
