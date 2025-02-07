import { IconType } from "react-icons";
import { FaCodeFork, FaLocationArrow, FaStar, FaGithub } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";

export const GitForkIcon: IconType = (props) => <FaCodeFork {...props} />;
export const StarIcon: IconType = (props) => <FaStar {...props} />;
export const GitIssuesIcon: IconType = (props) => <FiAlertCircle {...props} />;
export const LocationIcon: IconType = (props) => <FaLocationArrow {...props} />;
export const GitIcon: IconType = (props) => <FaGithub {...props} />;
