import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const totalPayMoney = Number(homeValue) + totalInterestGenerated;

  const pieChartData = {
    labels: ["本金", "利息"],
    datasets: [
      {
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        每月支付: ¥ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
      <Typography textAlign="center" variant="h5">
        连本带息共计: ¥ {totalPayMoney.toFixed(2)}
      </Typography>
    </Stack>
  );
};

export default Result;
