import {
  LocationIcon,
  GitForkIcon,
  StarIcon,
  GitIssuesIcon,
} from "../icons/Icons";
import { Item } from "../types/repository";

interface Props {
  repository: Item;
}

export function Card({ repository }: Props) {
  return (
    <div className="border-2 border-gray-700 min-h-20 rounded-md p-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-200">{repository?.name}</h1>
        <a
          href={repository.html_url}
          target="_blank"
          className="hover:bg-black/10 p-2 rounded-md"
        >
          <LocationIcon color="gray" />
        </a>
      </div>
      <p className="text-gray-300">{repository?.description}</p>
      <div className="flex gap-2 mt-3 justify-between">
        <p className="text-sm text-gray-400 font-semibold">
          {repository?.language}
        </p>
        <p className="text-sm flex gap-2 items-center text-gray-400">
          <StarIcon color="gray" />
          {repository?.stargazers_count}
        </p>
        <p className="text-sm flex gap-2 items-center text-gray-400">
          <GitForkIcon color="gray" />
          {repository?.forks}
        </p>
        <p className="text-sm flex gap-2 items-center text-gray-400">
          <GitIssuesIcon color="gray" />
          {repository?.open_issues}
        </p>
      </div>
    </div>
  );
}
