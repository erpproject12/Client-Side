// material-ui

// project imports
import MainCard from 'ui-component/cards/MainCard';

import {
  Box,
    Button,
  //   Checkbox,
  //   Divider,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  //   FormControlLabel,
  //   FormHelperText,
  //   Grid,
  //   IconButton,
  //   InputAdornment,

  //   TextField,
  Typography
  //   useMediaQuery
} from '@mui/material';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Add Product Details">
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" label="Product Code" variant="outlined" />
        <TextField id="outlined-basic" label="Product Name" variant="outlined" />
      </Box>
    </FormControl>

    <FormControl sx={{ m: 1, width: '50ch', mt: 3 }}>
      <InputLabel id="demo-simple-select-label">Tax Percentage</InputLabel>
      <Select
        variant="outlined"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        //   value={age}
        label="Tax Percentage"
      >
        <MenuItem value={10}>20%</MenuItem>
        <MenuItem value={20}>10%</MenuItem>
        <MenuItem value={30}>3%</MenuItem>
      </Select>
    </FormControl>
    <Box sx={{ m: 1 }}>
      <FormControl fullWidth>
        <TextField id="outlined-multiline-static" label="Product Description....." multiline rows={4} />
      </FormControl>
    </Box>
    <Box>
      <Typography sx={{ m: 1 }}>Optional</Typography>
    </Box>

    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" label="Rack Number" variant="outlined" />
        <TextField id="outlined-basic" label="HSN" variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" label="Category" variant="outlined" />
        <TextField id="outlined-basic" label="Manufacturer" variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <FormControl sx={{ m: 1, width: '50ch' }}>
          <InputLabel id="demo-simple-select-label">Unit of Measure</InputLabel>
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Tax Percentage"
          >
            <MenuItem value={10}>20%</MenuItem>
            <MenuItem value={20}>10%</MenuItem>
            <MenuItem value={30}>3%</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Weight Dimension" variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" label="Variants" variant="outlined" />
        {/* <TextField id="outlined-basic" label="HSN" variant="outlined" /> */}
      </Box>
    </FormControl>
<Box>
    <Button variant="contained" disableElevation fullWidth>
  Add Product
</Button>
</Box>
  </MainCard>
);

export default SamplePage;
