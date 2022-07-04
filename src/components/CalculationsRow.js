import React, { useId, useState, useEffect } from "react";
import { Input, Button, Grid} from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CalculationsRow(props) {
    
    const {opIcon, resIcon, op, callback, result} = props;

    const [i1, setI1 ] = useState(0);
    const [i2, setI2 ] = useState(0);
    const [i3, setI3 ] = useState(0);

    const inputHandler1 = e =>{
        setI1(e.target.value);
        console.log(i1);
    };
    const inputHandler2 = e =>{
        setI2(e.target.value);
        console.log(i2);
    };
    const inputHandler3 = e =>{
        setI3(e.target.value);
        console.log(i3);
    };

    const runCallback = ()=>{
        callback(i1, i2, op);
        setI3(result);
        console.log(`Callback: ${result}, ${i3}`);
    };

    useEffect(()=>{
        setI1(i1);
        setI2(i2);
        setI3(result);
        console.log(`UseEffect: ${i1} + ${i2} = ${result}, ${i3}`);
    }, [i1, i2, i3, result])
    return(
        <Grid.Row className="debug">
            
            <Grid.Column width={2} className="debug">
                <Button className="button-oprtaions" onClick={runCallback}>
                    Calculate
                </Button>
            </Grid.Column>

            <Grid.Column width={4} className="debug">
                <Input size="mini" placeholder="Float 1" className="input debug" value={i1} onChange={inputHandler1}/>
            </Grid.Column>

            <Grid.Column width={1} className="debug">
                <FontAwesomeIcon icon={opIcon} className="icon debug"/>
            </Grid.Column>

            <Grid.Column width={4} className="debug">
                <Input size="mini" placeholder="Float 2" value={i2} onChange={inputHandler2}/>
            </Grid.Column>

            <Grid.Column width={1} className="debug">
                <FontAwesomeIcon icon={resIcon} className="icon debug"/>
            </Grid.Column>

            <Grid.Column width={4} className="debug">
                <Input size="mini" placeholder="Result" value={i3} onChange={inputHandler3}/>
            </Grid.Column>

        </Grid.Row>
    );
}

export default CalculationsRow;