import React, { useId, useState, useEffect } from "react";
import { Input, Button, Grid} from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CalculationsRow(props) {
    
    const {opIcon, resIcon, op, callback, result, numberOfElements, opIcon2} = props;

    const [i1, setI1 ] = useState(0);
    const [i2, setI2 ] = useState(0);
    const [i25, setI25]= useState(0);
    const [i3, setI3 ] = useState(0);

    const inputHandler1 = e =>{
        setI1(e.target.value);
        console.log(i1);
    };
    const inputHandler2 = e =>{
        setI2(e.target.value);
        console.log(i2);
    };
    const inputHandler25= e =>{
        setI25(e.target.value);
        console.log(i25);
    };
    const inputHandler3 = e =>{
        setI3(e.target.value);
        console.log(i3);
    };


    const runCallback = ()=>{
        callback(i1, i2, i25, op);
        setI3(result);
        console.log(`Callback: ${result}, ${i3}`);
    };

    useEffect(()=>{
        setI1(i1);
        setI2(i2);
        setI25(i25);
        setI3(result);
        console.log(`UseEffect: ${i1} + ${i2} = ${result}, ${i3}`);
    }, [i1, i2, i25, i3, result])

    if(numberOfElements === 2){
        return(
            <Grid.Row>
                <Grid.Column width={2}>
                    <Button className="button-oprtaions" onClick={runCallback}>
                        Calculate
                    </Button>
                </Grid.Column>
                <Grid.Column width={4} >
                    <Input size="mini" placeholder="Float 1" className="input" value={i1} onChange={inputHandler1}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={opIcon} className="icon"/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Input size="mini" placeholder="Float 2" value={i2} onChange={inputHandler2}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={resIcon} className="icon"/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Input size="mini" placeholder="Result" value={i3} onChange={inputHandler3}/>
                </Grid.Column>
            </Grid.Row>
        );
    }
    else if(numberOfElements === 1){
        return (
            <Grid.Row>
                <Grid.Column width={2}>
                    <Button className="button-oprtaions" onClick={runCallback}>
                        Calculate
                    </Button>
                </Grid.Column>
                <Grid.Column width={4} >
                    {/* <Input size="mini" placeholder="Float 1" className="input" value={i1} onChange={inputHandler1}/> */}
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={opIcon} className="icon"/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Input size="mini" placeholder="Float 2" value={i2} onChange={inputHandler2}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={resIcon} className="icon"/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Input size="mini" placeholder="Result" value={i3} onChange={inputHandler3}/>
                </Grid.Column>
            </Grid.Row>
        );
    }
    else if(numberOfElements === 3){
        return (
            <Grid.Row>
                <Grid.Column width={2}>
                    <Button className="button-oprtaions" onClick={runCallback}>
                        Calculate
                    </Button>
                </Grid.Column>
                <Grid.Column width={2} >
                    <Input size="mini" placeholder="Float 1" className="input" value={i1} onChange={inputHandler1}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={opIcon} className="icon"/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Input size="mini" placeholder="Float 2" value={i2} onChange={inputHandler2}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={opIcon2} className="icon"/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Input size="mini" placeholder="Float 3" value={i25} onChange={inputHandler25}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <FontAwesomeIcon icon={resIcon} className="icon"/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Input size="mini" placeholder="Result" value={i3} onChange={inputHandler3}/>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default CalculationsRow;