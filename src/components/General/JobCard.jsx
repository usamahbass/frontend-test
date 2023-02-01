import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { convertFormatDistance } from "../../utils/helper";

const JobCard = ({ id, title, company, type, location, created_at }) => {
  return (
    <Box borderTopWidth="1px" py="5" borderBottomWidth="1px">
      <Flex justifyContent="space-between">
        <Stack spacing={2}>
          <Link
            to={`/job-detail/${id}`}
            fontSize="1.2rem"
            fontWeight={700}
            color="primary.500"
            as={RouterLink}
          >
            {title}
          </Link>

          <Flex gap={1}>
            <Text color="#D4D4D5">{company}</Text>
            <Text color="#D4D4D5">-</Text>
            <Text color="#85A278" fontWeight={700}>
              {type}
            </Text>
          </Flex>
        </Stack>

        <Stack textAlign="right" spacing={2}>
          <Text color="#A2A2A3" fontWeight={700}>
            {location}
          </Text>
          <Text color="#A2A2A3">{convertFormatDistance(created_at)}</Text>
        </Stack>
      </Flex>
    </Box>
  );
};

JobCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string,
  location: PropTypes.string,
  created_at: PropTypes.string,
};

export default JobCard;
