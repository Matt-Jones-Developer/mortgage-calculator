import React from 'react';
import SliderComponent from './common/SliderComponent';

const SliderSelect = ({ data, setData }) => {
  const loanLimit = 200000;

  if (data.loanAmount >= data.homeValue) {
    data.downPayment = 0;
  }

  return (
    <>
      <SliderComponent
        label={'Home Value'}
        defaultValue={data.homeValue}
        value={data.homeValue}
        amount={data.homeValue.toLocaleString()}
        min={10000}
        max={1000000}
        step={1000}
        unit='£'
        onChange={(event, value) => {
          setData({
            // copy old data values via ...
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          });
        }}
      />
      <SliderComponent
        label={'Down Payment'}
        defaultValue={data.downPayment}
        value={data.downPayment}
        amount={data.downPayment.toLocaleString()}
        min={0}
        max={data.homeValue}
        step={1000}
        unit='£'
        onChange={(event, value) => {
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          });
        }}
      />
      <SliderComponent
        label={'Loan Amount'}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={1000}
        max={loanLimit}
        step={1000}
        unit='£'
        amount={data.loanAmount.toLocaleString()}
        onChange={(event, value) => {
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          });
        }}
      />
      <SliderComponent
        label={'Interest Rate (%APR)'}
        defaultValue={data.interestRate}
        value={data.interestRate}
        amount={data.interestRate}
        min={2.2}
        max={18.5}
        step={0.1}
        unit='%'
        onChange={(event, value) => {
          setData({
            ...data,
            interestRate: value,
          });
        }}
      />
    </>
  );
};

export default SliderSelect;
