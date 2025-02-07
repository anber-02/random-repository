export const getLanguages = async function () {
  const result = await fetch(
    "/api/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return data;
};

export const getAllRepository = async (language: string) => {
  const param = language === "" ? "" : `%3A${language}`;
  const result = await fetch(
    `https://api.github.com/search/repositories?q=language${param}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return data;
};
