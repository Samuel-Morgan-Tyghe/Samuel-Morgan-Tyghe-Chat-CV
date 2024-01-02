// @ts-nocheck
import { Group } from "@vx/group";
import { Pattern as CustomPattern } from "@vx/pattern";
import { Bar } from "@vx/shape";
import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePageNumber } from "~/context/scrollContext";
import { getThemeFromPageNumber } from "./PageThemes";
const defaultMargin = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 80,
};

export type PatternProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
};

// const Patterns = [
//   ({ id, spring = 10, strokeColor }) => {
//     const width = 10;
//     const height = 10;

//     const duration = 10 / spring;

//     return (
//       <CustomPattern id={id} width={width} height={height}>
//         <animateTransform
//           attributeType="xml"
//           attributeName="patternTransform"
//           type="translate"
//           from="0 0"
//           to="50 0"
//           dur={`${duration}s`}
//           repeatCount="indefinite"
//         />
//         <path
//           d={`M 0 ${height / 2} c ${height / 8} ${-height / 4} , ${
//             (height * 3) / 8
//           } ${-height / 4} , ${height / 2} 0
//                c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${
//             height / 4
//           } , ${height / 2} 0 M ${-height / 2} ${height / 2}
//                c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${
//             height / 4
//           } , ${height / 2} 0 M ${height} ${height / 2}
//                c ${height / 8} ${-height / 4} , ${(height * 3) / 8} ${
//             -height / 4
//           } , ${height / 2} 0`}
//           fill="none"
//           stroke={strokeColor}
//           strokeWidth={1}
//         />
//       </CustomPattern>
//     );
//   },
// ];

export default function Example({
  width: svgWidth,
  height: svgHeight,
  margin = defaultMargin,
}: PatternProps) {
  const [springNumber, setSpringNumber] = useState(10);
  const numColumns = 3;
  const numRows = 1 / numColumns;
  const columnWidth = Math.max(
    (svgWidth - margin.left - margin.right) / numColumns,
    0
  );
  const rowHeight = Math.max(
    (svgHeight - margin.bottom - margin.top) / numRows,
    0
  );

  const { pageNumber } = usePageNumber();
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  useEffect(() => {
    setSpringNumber(pageNumber + 1);
  }, [pageNumber]);

  const columnIndex = pageNumber % numColumns;
  const rowIndex = Math.floor(pageNumber / numColumns);
  const id = `vx-pattern-demo-${pageNumber}`;

  const width = 10;
  const height = 10;

  const dur = 10 / (springNumber + 1) + 1;

  return svgWidth >= 10 ? (
    <svg width={svgWidth} height={svgHeight}>
      <rect
        x={0}
        y={0}
        width={svgWidth}
        height={svgHeight}
        fill="#f5f2e3"
        rx={14}
      />
      <Group top={0} left={0}>
        <CustomPattern id={id} width={width} height={height}>
          <animateTransform
            attributeType="xml"
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="50 0"
            dur={`${dur}s`}
            repeatCount="indefinite"
          />
          <path
            d={`M 0 ${height / 2} c ${height / 8} ${-height / 4} , ${
              (height * 3) / 8
            } ${-height / 4} , ${height / 2} 0
               c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${
              height / 4
            } , ${height / 2} 0 M ${-height / 2} ${height / 2}
               c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${
              height / 4
            } , ${height / 2} 0 M ${height} ${height / 2}
               c ${height / 8} ${-height / 4} , ${(height * 3) / 8} ${
              -height / 4
            } , ${height / 2} 0`}
            fill="none"
            stroke={getThemeFromPageNumber(pageNumber).accent}
            strokeWidth={1}
          />
        </CustomPattern>
        <Bar
          fill={`url(#${id})`}
          x={0}
          y={0}
          width={columnWidth}
          height={rowHeight}
          rx={14}
        />
      </Group>
    </svg>
  ) : null;
}
