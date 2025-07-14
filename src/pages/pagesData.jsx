import ResearchPage from "./Research";
import HomePage from "./Home";
import Departmentprojects from "./Departmentprojects"
import CourseListPage from "./CourseListPage";
import StudyPhDPage from "./StudyPhDPage";
import StudyBTechPage from "./StudyBTechPage";


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
    {
        path: "/course_list",
        element: <CourseListPage />,
        title: "Course List",
    },
    {
        path: "/study_phd",
        element: <StudyPhDPage />,
        title: "Study PhD",
    }
    ,
    {
        path: "/study_btech",
        element: <StudyBTechPage />,
        title: "Study BTech",
    }
];

export default pagesData;
