import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Operator from "./Operator";
import Button from "@mui/material/Button";


function AppPage(){
    const [f1, setF1] = useState(0);
    const [f2, setF2] = useState(0);
    const [o, setO]   = useState(0);

    function handleClick(){
        // setO();
        WebAssembly.
    }
    return <div>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Button variant="contained" onClick={()=>{handleClick()}}>Contained</Button>
            <TextField id="outlined-basic" label="Float 1" variant="outlined" onChange={(e)=>{setF1(e.target.value)}}/>
            <Operator />
            <TextField id="outlined-basic" label="Float 2" variant="outlined" onChange={(e)=>{setF2(e.target.value)}}/>
            <Operator />
            <TextField id="standard-basic" label="=" variant="outlined" value={o} InputProps={{readOnly:true}}/>
        </Box>
    </div>;
}

export default AppPage;
// module.exports = AppPage;