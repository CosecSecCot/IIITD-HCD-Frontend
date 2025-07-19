/**
 * Computes the left position in vw for the given index.
 * @param {number} count - Total number of grid lines
 * @param {number} index - Index of the line (0-based)
 * @returns {number} Left position in vw
 */
export function getGridLinePosition(count, index) {
  if (count < 2) throw new Error("count must be at least 2");
  if (index < 0 || index >= count) throw new Error("index out of bounds");

  const left_bound_vw = 12.5;
  const right_bound_vw = 100 - 12.5; // 87.5

  const position =
    left_bound_vw + ((right_bound_vw - left_bound_vw) * index) / (count - 1);
  return position;
}

/**
 * Computes the width between grid lines (in vw) based on total count.
 * @param {number} count - Total number of grid lines
 * @returns {number} Width between each column in vw
 */
export function getGridColumnWidth(count) {
  if (count < 2) throw new Error("count must be at least 2");

  const left_bound_vw = 12.5;
  const right_bound_vw = 100 - 12.5; // 87.5

  const total_width = right_bound_vw - left_bound_vw; // 75vw
  const column_width = total_width / (count - 1);

  return column_width;
}
