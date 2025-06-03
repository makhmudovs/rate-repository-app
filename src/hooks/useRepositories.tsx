import { GET_REPOSITORIES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  // Flatten connection → array of nodes for easy consumption
  const repositories = useMemo(
    () => data?.repositories?.edges?.map((edge) => edge.node) ?? [],
    [data]
  );

  if (error) {
    // Central place to log or surface the error
    console.error("Error loading repositories:", error);
  }

  return { repositories, loading, refetch };
};

export default useRepositories;
