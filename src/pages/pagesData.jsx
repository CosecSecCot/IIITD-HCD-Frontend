import ResearchPage from "./Research";
import HomePage from "./Home";
import Departmentprojects from "./Departmentprojects";
import CourseListPage from "./CourseListPage";
import StudyPhDPage from "./StudyPhDPage";
import StudyBTechPage from "./StudyBTechPage";
import Publication from "./Publication";
import OverviewPage from "./Overview";
import PlacementPage from "./Placements";
import CollaborationsPage from "./Collaborations";
import NewsEventsPage from "./NewsEventsPage";
import OurWork from "./OurWork";
import ConnectPage from "./ConnectPage";

/**
 * @typedef {Object} routerType
 * @property {string} title
 * @property {string} path
 * @property {JSX.Element} element
 */

/** @type {routerType[]} */
const pagesData = [
  {
    path: "/",
    element: <HomePage />,
    title: "HCD",
  },
  {
    path: "/research/labs",
    element: <ResearchPage />,
    title: "Research",
  },
  {
    path: "/research/projects",
    element: <Departmentprojects />,
    title: "Department Projects",
  },
  {
    path: "/research/publications",
    element: <Publication />,
    title: "Publications",
  },
  {
    path: "/about/overview",
    element: <OverviewPage />,
    title: "Overview",
  },
  {
    path: "/about/collaborations",
    element: <CollaborationsPage />,
    title: "Collaborations",
  },
  {
    path: "/about/newsEvents",
    element: <NewsEventsPage />,
    title: "News & Events",
  },
  {
    path: "/about/placement",
    element: <PlacementPage />,
    title: "Placement",
  },
  {
    path: "/study/courses",
    element: <CourseListPage />,
    title: "Course List",
  },
  {
    path: "/study/phd",
    element: <StudyPhDPage />,
    title: "Study PhD",
  },
  {
    path: "/study/btech",
    element: <StudyBTechPage />,
    title: "Study BTech",
  },
  {
    path: "/our-work",
    element: <OurWork />,
    title: "Our Work",
  },
  {
    path: "/connect",
    element: <ConnectPage />,
    title: "Connect",
  },
];

export default pagesData;
