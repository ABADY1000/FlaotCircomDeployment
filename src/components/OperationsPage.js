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
            <CalculationsRow opIcon={faPlus} resIcon={faEquals} callback={callback} op={Operations.ADD} result={results.add} numberOfElements={2}/>
            <CalculationsRow opIcon={faMultiply} resIcon={faEquals} callback={callback} op={Operations.MUL} result={results.mul} numberOfElements={2}/>
            <CalculationsRow opIcon={faGreaterThan} resIcon={faEquals} callback={callback} op={Operations.GREATER} result={results.gth} numberOfElements={2}/>
            <CalculationsRow opIcon={faLessThan} resIcon={faEquals} callback={callback} op={Operations.LESS} result={results.lth} numberOfElements={2}/>
            <CalculationsRow opIcon={faMinus} resIcon={faEquals} callback={callback} op={Operations.NEG} result={results.neg} numberOfElements={1}/>
            <CalculationsRow opIcon={faLessThan} opIcon2={faLessThan} resIcon={faEquals} callback={callback} op={Operations.INRANGE} result={results.rng} numberOfElements={3}/>
        </Grid>
    );
}

export default OperationsPage;

