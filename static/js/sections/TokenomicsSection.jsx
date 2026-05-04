import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const tokenomicsDetails = {
  totalSupply: "1,000,000,000,000",
  tokenSymbol: "$Apple",
  distribution: [{ category: "Community", percentage: 100 }],
  taxStructure: {
    buy: 5,
    sell: 5,
    transfer: 2,
  },
  lpBurn: "100%",
  tax: "0/0",
};

const COLORS = ["#0088FE", "#00C49F", "#FEBB60", "#FF8042", "#8884d8"];

const TokenomicsSection = ({ id }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section
      id={id}
      className="tokenomics-section tokenomics-force page-section"
    >
      <h2>Tokenomics</h2>
      <div className="tokenomics-details">
        <div className="left">
          <h3>Total Supply</h3>
          <p>
            {tokenomicsDetails.totalSupply} <b>$Apple</b>{" "}
          </p>

          <h3>Token symbol</h3>
          <p>{tokenomicsDetails?.tokenSymbol}</p>

          <h3>Tax</h3>
          <p>{tokenomicsDetails?.tax}</p>

          <h3>LP Burn</h3>
          <p>{tokenomicsDetails?.lpBurn}</p>

          <h3>Token Distribution</h3>
          <ul>
            {tokenomicsDetails.distribution.map((item, index) => (
              <li key={index}>
                {item.category}: {item.percentage}%
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tokenomicsDetails.distribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                height={"400px"}
                width={"400px"}
                fill="#8884d8"
                dataKey="percentage"
                label={renderCustomizedLabel}
                pointerEvents={"none"}
              >
                {tokenomicsDetails.distribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                formatter={(value, entry, index) =>
                  tokenomicsDetails.distribution[index].category
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
