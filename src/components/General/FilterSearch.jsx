import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const FilterSearch = ({ handleSearchAndFilter }) => {
  const { register, handleSubmit, control } = useForm();

  return (
    <Flex
      gap={10}
      as="form"
      alignItems="center"
      flexDir={["column", "column", "column", "row"]}
      onSubmit={handleSubmit(handleSearchAndFilter)}
    >
      <FormControl>
        <FormLabel>Job Description</FormLabel>

        <Input
          size="lg"
          {...register("description", {
            setValueAs: (value) => value?.toLowerCase(),
          })}
          placeholder="Filter by title, benefit, companies, experties"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Location</FormLabel>

        <Input
          size="lg"
          {...register("location", {
            setValueAs: (value) => value?.toLowerCase(),
          })}
          placeholder="Filter by city, state, zip code or country"
        />
      </FormControl>

      <Flex w="60%" alignItems="center" pos="relative" top="13px" gap={5}>
        <FormControl>
          <Controller
            name="full_time"
            defaultValue={false}
            control={control}
            render={({ field: { onChange } }) => (
              <Checkbox size="lg" onChange={(e) => onChange(e.target.checked)}>
                Full Time Only
              </Checkbox>
            )}
          />
        </FormControl>

        <Button w="50%" h="50px" colorScheme="primary" type="submit">
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

FilterSearch.propTypes = {
  handleSearchAndFilter: PropTypes.func,
};

export default FilterSearch;
