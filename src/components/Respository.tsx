import { useState } from "react";
import { GitIcon } from "../icons/Icons";
import { Card } from "./Card";
import { useGetRandomRepository } from "../hooks/useGetRandomRepository";
import { useGetLanguages } from "../hooks/useGetLanguages";

export default function RandomRepository() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const languages = useGetLanguages();

  const { loading, currentRepository, handleRefresh, error } =
    useGetRandomRepository({ language: selectedLanguage });

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-2 sm:w-1/2 p-5 mx-auto">
      <form action="" className="w-full space-y-2">
        <div className="flex items-center gap-2">
          <GitIcon color="white" />
          <label className="text-white font-medium">
            Github Repository Finder
          </label>
        </div>
        <select
          onChange={handleLanguageChange}
          name="language"
          className="w-full p-1 rounded-md cursor-pointer bg-slate-700 text-white"
        >
          <option value="">Select a language</option>
          {languages.map((language, index) => (
            <option key={index} value={language.value}>
              {language.title}
            </option>
          ))}
        </select>
      </form>
      {loading && (
        <div className="border-2 border-gray-700 min-h-20 rounded-md p-3 flex items-center justify-center">
          <p className="text-gray-200">Loading, please wait...</p>
        </div>
      )}
      {error && !currentRepository && (
        <div className="border-2 border-red-700 bg-red-400 min-h-20 rounded-md p-3 flex items-center justify-center">
          <p className="text-gray-200">{error}</p>
        </div>
      )}

      {!loading && !selectedLanguage && (
        <div className="border-2 border-gray-700 min-h-20 rounded-md p-3 flex items-center justify-center">
          <p className="text-gray-200">Please, select a language</p>
        </div>
      )}
      {!loading && currentRepository && <Card repository={currentRepository} />}

      {currentRepository && (
        <button
          className="bg-black text-white rounded-md py-1 px-2 hover:bg-black/50"
          onClick={handleRefresh}
          disabled={loading}
        >
          Refresh
        </button>
      )}

      {!currentRepository && error !== "" && (
        <button
          className="bg-red-600 text-white rounded-md py-1 px-2 hover:bg-red/50"
          onClick={handleRefresh}
          disabled={loading}
        >
          Click to retry
        </button>
      )}
    </div>
  );
}
