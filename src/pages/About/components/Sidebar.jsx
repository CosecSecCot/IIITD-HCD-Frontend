import panel from "../../../assets/rightPanel.png";

const Sidebar = () => {
  return (
    <aside className="max-xl:hidden fixed top-0 left-[62.5vw] w-[37.5vw] h-[100vh] overflow-hidden">
      <img
        src={panel}
        alt="Right Panel"
        className="absolute inset-0 object-cover"
      />
    </aside>
  );
};
export default Sidebar;
