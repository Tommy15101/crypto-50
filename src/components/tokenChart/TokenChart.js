import React, { useState } from "react";
import Chart from "react-apexcharts";
import moment from "moment";
import { TokenChartContainer } from "./TokenChartStyles";

const TokenChart = ({ chartData }) => {
  const [options, setOptions] = useState({
    chart: {
      width: "100%",
      id: "basic-bar",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    xaxis: {
      categories: chartData.map((value) => moment(value.x).format("YYYY")),
      labels: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: chartData.map((value) => value.y),
      colors: ["#ffa500"],
      fill: {
        colors: ["#ffa500"],
      },
    },
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="500" />
        </div>
      </div>
    </div>
  );
};

export default TokenChart;
