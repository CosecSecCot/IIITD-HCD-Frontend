import ResearchPage from "./Research";
import HomePage from "./Home";


/**
 * @typedef {Object} routerType
 * @property {string} title
 * @property {string} path
 * @property {JSX.Element} element
 */

/** @type {routerType[]} */
const pagesData = [
  
    {
        path: "/research",
        element: <ResearchPage />,
        title: "Research",
    },
    {
        path: "/",
        element: <HomePage />,
        title: "HCD",
    },
];

export default pagesData;
