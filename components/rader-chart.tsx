import { line, scaleLinear } from "d3";

const ANGLE_NUMBER = 6
const MAX_NUMBER = 5

const data = [
  { name: "A", value: 4 },
  { name: "B", value: 3 },
  { name: "C", value: 5 },
  { name: "D", value: 2 },
  { name: "E", value: 5 },
  { name: "F", value: 5 },
];

// gridラインの二次元配列を生成している[[1,1,1,1,1,1],[2,2,2,2,2,2]...]など
const gridPoints = Array.from({ length: MAX_NUMBER }, (_, i) =>
  Array.from({ length: ANGLE_NUMBER }, () => i + 1)
);

const labels = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
]

export const RaderChart = ({
  width = 600,
  height = 600,
}: Record<
  | "width"
  | "height",
  number
>) => {

  const rScale = scaleLinear().domain([0, MAX_NUMBER]).range([0, width / 2 - 50])

  const x = (value: number, index: number) => rScale(value) * Math.cos(2 * Math.PI / ANGLE_NUMBER * index - (Math.PI / 2)) + width / 2
  const y = (value: number, index: number) => rScale(value) * Math.sin(2 * Math.PI / ANGLE_NUMBER * index - (Math.PI / 2)) + height / 2

  const gridLine = line<number>()
    .x((d, i) => x(d, i))
    .y((d, i) => y(d, i))

  const resultline = line<{ name: string; value: number }>()
    .x((d, i) => x(d.value, i))
    .y((d, i) => y(d.value, i))


  return (
    <svg width={width} height={height}>
      <g>
        {
          gridPoints.map((grid, i) => (
            <path
              key={i}
              fill="none"
              stroke="currentColor"
              strokeDasharray="2"
              strokeWidth="2"
              d={`${gridLine(grid)} z`}
            />
          ))
        }
        {labels.map((label, i) => (
          <text
            key={label}
            fontSize="15px"
            x={x(MAX_NUMBER + 0.5, i)}
            y={y(MAX_NUMBER + 0.5, i)}
          >
            {label}
          </text>
        ))}
        <path
          fill="#F2690D"
          fillOpacity={0.3}
          stroke="#F2690D"
          strokeWidth="2"
          d={`${resultline(data)} z`}
        />
      </g>
    </svg>
  );
}
