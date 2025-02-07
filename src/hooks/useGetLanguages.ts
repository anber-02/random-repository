import { useEffect, useState } from "react";
import { getLanguages } from "../api/api";

interface language {
  title: string;
  value: string;
}

export function useGetLanguages() {
  const [languages, setLanguages] = useState<language[]>([]);

  useEffect(() => {
    getLanguages().then((data) => {
      setLanguages(data);
    });
  }, []);

  return languages;
}
