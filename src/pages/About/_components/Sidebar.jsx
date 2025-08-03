import panel from "../../../assets/rightPanel.png";

/**
 * Page sidebar component for /about pages.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.description
 *
 * @returns {JSX.Element}
 */
const Sidebar = () => {
  return (
    <aside className="max-xl:hidden fixed top-0 left-[62.5vw] w-[37.5vw] h-[100vh] overflow-hidden">
      <img
        src={panel}
        alt="Right Panel"
        className="w-full h-full object-cover"
      />
    </aside>
  );
};
export default Sidebar;
