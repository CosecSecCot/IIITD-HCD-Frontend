import ResearchPage from "./Research";
import HomePage from "./Home";
import Departmentprojects from "./Departmentprojects"


/**
 * @typedef {Object} routerType
 * @property {string} title
 * @property {string} path
 * @property {JSX.Element} element
 */

/** @type {routerType[]} */
const pagesData = [
  
    {
        path: "/research_current",
        element: <ResearchPage />,
        title: "Research",
    },
    {
        path: "/",
        element: <HomePage />,
        title: "HCD",
    },
    {
        path: "/department_projects",
        element: <Departmentprojects />,
        title: "Department Projects",
    },
];

export default pagesData;
