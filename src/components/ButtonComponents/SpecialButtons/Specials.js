import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';
import Operators from '../OperatorButtons/Operators';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialButtons, setSpecialButtons] = useState({specials})

  return (
    <div className = 'special-buttons'> 
      {specials.map(special => (
        <SpecialButton buttonSpecial = {special} /> 
      ))}
      <Operators />
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;