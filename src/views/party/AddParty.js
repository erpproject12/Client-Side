// material-ui

// project imports
import React,{useState} from 'react'
import MainCard from 'ui-component/cards/MainCard';

import {Insert_Party} from '../../global'
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





const SamplePage = () =>{
  const [party,setParty]=useState({})

  const Change=(e)=>{
  setParty({...party,[e.target.name]:e.target.value})
  }
  
  const onSubmit=(e)=>{
    e.preventDefault();//this is used for from tag
      // console.log();
      Insert_Party(party)
      .then((res)=>{
        console.log(res)
      })
  .catch((error)=>{
  console.log("Error :"+ error)
  })
  }

return(

  <MainCard title="Add Party Details">
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" onChange={Change} label="Party Name" name='party_name' variant="outlined" />
        <TextField id="outlined-basic" onChange={Change}  label="Party Contect Number" name='party_phone' variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" onChange={Change} label="Party Email" name='party_email' variant="outlined" />
        <TextField id="outlined-basic" onChange={Change}  label="Party address" name='party_address' variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" onChange={Change} label="Party Street" name='party_street' variant="outlined" />
        <TextField id="outlined-basic" onChange={Change} label="Party City" name='party_city' variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
         <TextField id="outlined-basic" onChange={Change} label="Party Pincode" name='party_pincode' variant="outlined" />
        <TextField id="outlined-basic" onChange={Change}  label="Party State" name='party_state' variant="outlined" />
      </Box>
    </FormControl>
    
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
           <InputLabel id="demo-simple-select-label">Unit of Measure</InputLabel>
          <Select
          onChange={Change} 
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            name='unit_of_masure'
            label="Tax Percentage"
          >
            <MenuItem value={10}>20%</MenuItem>
            <MenuItem value={20}>10%</MenuItem>
            <MenuItem value={30}>3%</MenuItem>
          </Select>
      
      </Box>
    </FormControl>

    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
           
      
        <TextField id="outlined-basic" onChange={Change}  label="Party Country" name='party_country' variant="outlined" />
      </Box>
    </FormControl>
   
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
      
        <TextField id="outlined-basic" onChange={Change}  label="GST Number" name='party_GST' variant="outlined" />
      </Box>
    </FormControl>

    
    

    

    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >




        <TextField id="outlined-basic" onChange={Change}  label="Credit Limit" name='party_creadit_limit' variant="outlined" />
      </Box>
    </FormControl>
    <FormControl>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' }
        }}
      >
        <TextField id="outlined-basic" onChange={Change}  label="Credit Days" name='party_creadit_days' variant="outlined" />
        {/* <TextField id="outlined-basic" onChange={Change}  label="Manufacturer" name='manufactures' variant="outlined" /> */}
      </Box>
    </FormControl>
   
    
<Box>
    <Button variant="contained"  onClick={onSubmit} disableElevation fullWidth>
  Add Party
</Button>
</Box>
  </MainCard>
)};

export default SamplePage;
