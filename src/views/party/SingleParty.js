// material-ui
import { Typography } from '@mui/material';
import {Single_Party} from '../../global'
import { useParams } from 'react-router';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useState } from 'react';
import { useEffect } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    let params = useParams();
const [product,setProduct]=useState({})
useEffect(()=>{
    Single_Party(params.id)
    .then((res)=>{
        console.log("Single Product Display :" +JSON.stringify(res.data))
        setProduct(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
})
console.log(product)
return(
  <MainCard title="Sample Card">

    <Typography variant="body2">
    party_name:{product.party_name}
    party_phone:{product.party_phone}
    party_email:{product.party_email}
    party_address:{product.party_address}
    party_street:{product.party_street}
    party_city:{product.party_city}
    party_state:{product.party_state}
    party_pincode:{product.
party_pincode
}
party_country:{product.party_country}
party_GST:{product.
party_GST
}
party_account_type:{product.

party_account_type

}
party_creadit_limit:{product.

party_creadit_limit

}
party_creadit_days:{product.

party_creadit_days

}
     Product Name:{product.

date

}
     Product Name:{product.


updated_date

}
    </Typography>
  </MainCard>
)};

export default SamplePage;
