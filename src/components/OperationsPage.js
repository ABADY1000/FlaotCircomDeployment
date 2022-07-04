import React from 'react';
import { Input, Button, Grid, Icon } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals, faLessThan, faGreaterThan, faPlus, faMinus, faMultiply } from '@fortawesome/free-solid-svg-icons';
import CalculationsRow from "./CalculationsRow";
import Operations from '../utils/Enum';

function OperationsPage(props){

    const {callback, results} = props;
    return (
    <Grid columns={5} className="debug">
        {/* Addition */}
        <CalculationsRow opIcon={faPlus} resIcon={faEquals} callback={callback} op={Operations.ADD} result={results.add}/>
        <CalculationsRow opIcon={faMultiply} resIcon={faEquals} callback={callback} op={Operations.MUL} result={results.mul}/>
        <CalculationsRow opIcon={faGreaterThan} resIcon={faEquals} callback={callback} op={Operations.GREATER} result={results.gth}/>
        <CalculationsRow opIcon={faLessThan} resIcon={faEquals} callback={callback} op={Operations.LESS} result={results.lth}/>
        <CalculationsRow opIcon={faMinus} resIcon={faEquals} callback={callback} op={Operations.NEG} result={results.neg}/>
    </Grid>
    );
}

export default OperationsPage;

