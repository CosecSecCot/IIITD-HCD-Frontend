import HomePage from "./Home";
import OverviewPage from "./About/Overview";
import CollaborationsPage from "./About/Collaborations";
import NewsEventsPage from "./About/News&Events";
import PlacementPage from "./About/Placements";
import ResearchLabsPage from "./Research/Labs";
import DepartmentprojectsPage from "./Research/Departmentprojects";
import PublicationPage from "./Research/Publication";
import CourseListPage from "./Study/CourseListPage";
import StudyPhDPage from "./Study/StudyPhDPage";
import StudyBTechPage from "./Study/StudyBTechPage";
import OurWorkPage from "./OurWork";
import ConnectPage from "./Connect";
import Portfoliostyle1 from "./Portfoliostyle1";
import Portfoliostyle2 from "./Portfoliostyle2";
import Portfoliostyle3 from "./Portfoliostyle3";
import Portfoliostyle4 from "./Portfoliostyle4";
import Portfoliostyle5 from "./Portfoliostyle5";

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
    element: <ResearchLabsPage />,
    title: "Research",
  },
  {
    path: "/research/projects",
    element: <DepartmentprojectsPage />,
    title: "Department Projects",
  },
  {
    path: "/research/publications",
    element: <PublicationPage />,
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
    path: "/ourwork",
    element: <OurWorkPage />,
    title: "Our Work",
  },
  {
    path: "/connect",
    element: <ConnectPage />,
    title: "Connect",
  },
  {
    path: "/portfolio1",
    element: <Portfoliostyle1 />,
    title: "Portfolio",
  },
  {
    path: "/portfolio2",
    element: <Portfoliostyle2 />,
    title: "Portfolio",
  },
  {
    path: "/portfolio3",
    element: <Portfoliostyle3 />,
    title: "Portfolio",
  },
  {
    path: "/portfolio4",
    element: <Portfoliostyle4 />,
    title: "Portfolio",
  },
  {
    path: "/portfolio5",
    element: <Portfoliostyle5 />,
    title: "Portfolio",
  },
];

export default pagesData;
