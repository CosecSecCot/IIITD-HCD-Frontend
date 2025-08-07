const GridLines = ({ count }) => {
  if (count < 2) return null;

  const lines = [];
  const left_bound_vw = 12.5;
  const right_bound_vw = 100 - 12.5;

  for (let i = 0; i < count; i++) {
    const position =
      left_bound_vw + ((right_bound_vw - left_bound_vw) * i) / (count - 1);
    lines.push(
      <div
        key={i}
        className="fixed z-[999] border border-black border-opacity-0 top-0 h-[100vh] pointer-events-none"
        style={{ left: `${position}vw` }}
      />,
    );
  }

  return <>{lines}</>;
};

export default GridLines;
