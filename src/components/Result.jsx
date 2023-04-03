import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
  // console.log(downPayment);
  // console.log(loanAmount);
  console.log(interestRate); // undefined?

  const totalLoanRepayments = loanTerm * 12;

  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanRepayments) /
    ((1 + interestPerMonth) ** totalLoanRepayments - 1);

  const totalInterest = monthlyPayment * totalLoanRepayments - loanAmount;

  const chartData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Principle Loan vs Interest',
        data: [homeValue, totalInterest],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={3}>
      <Typography textAlign={'center'} variant='h4'>
        Monthly Payment: £ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction={'row'} justifyContent='center'>
        <div>
          <Pie data={chartData}></Pie>
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
