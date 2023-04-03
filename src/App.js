import { useState } from 'react';
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Container } from '@mui/system';
import { Button, Grid } from '@mui/material';
import Welcome from './components/Welcome';

function App() {

  // name, function
  // const [A, setA] = useState(15);
  // console.log(A)

  // setA(30); infinite loop
  // counter example
  // const [counter, setCounter] = useState(0);
  // making multiple useStates is bad practice
  // const [homeValue, setHomeValue] = useState(10000);
  // const [downPayment, setDownPayment] = useState(10000);

  // store our values in objects
  const [data, setData] = useState(
    {
      homeValue: 150000,
      downPayment: 150000 * 0.2,
      loanAmount: 10000,
      loanTerm: 5,
      interestRate: 5
    }
  )
  console.log(data);

  return (
    <div className='App'>
      <Navbar />
      <Welcome />
      {/* <Button onClick={() => { setCounter(counter - 1) }}>Decrement</Button>
      <p>{counter}</p>
      <Button onClick={() => { setCounter(counter + 1) }}>Decrement</Button> */}
      <Container maxWidth='xl' sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          {/* slider section */}
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          {/* pie chart section */}
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
