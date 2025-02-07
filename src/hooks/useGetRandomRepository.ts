import { useCallback, useEffect, useState } from "react";
import { Item, Repository } from "../types/repository";
import { getAllRepository } from "../api/api";

interface props {
  language: string;
}

export function useGetRandomRepository({ language }: props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository["items"]>([]);
  const [currentRepository, setCurrentRepository] = useState<Item | null>(null);
  const [error, setError] = useState<string | null>("");

  const getRandomRepository = (items: Item[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const fetchRepositories = useCallback(async (language: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllRepository(language);

      if (data?.errors) {
        setError(data.errors[0].message);
        return;
      }
      setRepositories(data.items);
      setCurrentRepository(getRandomRepository(data.items));
    } catch (err) {
      console.log("error", err);
      setRepositories([]);
      setCurrentRepository(null);
      setError("Error fetching repository");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(
    function () {
      if (language) {
        fetchRepositories(language);
      } else {
        setRepositories([]);
        setCurrentRepository(null);
      }
    },
    [language, fetchRepositories]
  );

  const handleRefresh = () => {
    if (repositories.length > 0) {
      setCurrentRepository(getRandomRepository(repositories));
    } else {
      fetchRepositories(language);
    }
  };

  return {
    loading,
    currentRepository,
    error,
    handleRefresh,
    fetchRepositories: () => fetchRepositories(language),
  };
}
