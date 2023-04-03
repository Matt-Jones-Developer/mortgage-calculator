import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { Stack } from '@mui/system';
// import Slider from '@mui/material/Slider';

const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <>
      <Stack my={2}>
        <Stack gap={1}>
          <Typography>{label}</Typography>
          <Typography variant='h2'>
            {unit}
            {amount}
          </Typography>
        </Stack>
        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          aria-label='Default'
          valueLabelDisplay='auto'
          step={step}
          marks
          onChange={onChange}
          value={value}
        />
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='caption' color='text.secondary'>
            {unit} {min}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {unit} {max}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SliderComponent;
