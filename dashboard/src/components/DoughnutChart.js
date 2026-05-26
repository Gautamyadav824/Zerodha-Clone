import React from "react";

export const DoughnutChart = ({ data }) => {
  const dataset = data?.datasets?.[0] || {};
  const values = dataset.data || [];
  const colors = dataset.backgroundColor || ["#ccc"];
  const total = values.reduce((a, b) => a + (Number(b) || 0), 0) || 1;
  const segments = values.map((v) => (Number(v) || 0) / total * 100);

  let accumulated = 0;
  const stops = segments
    .map((pct, i) => {
      const start = accumulated;
      accumulated += pct;
      return `${colors[i] || "#ccc"} ${start}% ${accumulated}%`;
    })
    .join(", ");

  const donutStyle = {
    width: 160,
    height: 160,
    borderRadius: "50%",
    background: `conic-gradient(${stops})`,
    display: "inline-block",
    position: "relative",
  };

  const holeStyle = {
    position: "absolute",
    top: "25%",
    left: "25%",
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    background: "#fff",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={donutStyle}>
        <div style={holeStyle}></div>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {data?.labels?.map((label, i) => (
          <li
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}
          >
            <span
              style={{ width: 12, height: 12, background: colors[i] || "#ccc", display: "inline-block", borderRadius: 2 }}
            ></span>
            <span style={{ fontSize: 14 }}>{label} — {Math.round(segments[i] || 0)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoughnutChart;
