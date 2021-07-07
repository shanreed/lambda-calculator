import React from "react";
import Numbers from '../ButtonComponents/NumberButtons/Numbers'

import Specials from '../ButtonComponents/SpecialButtons/Specials';

const Display = () => {
  return <div>
      <div className = 'input'>0</div>
      <div className = 'inside-container'>
    <Specials   /> 
  <Numbers /> {/* Display any props data here */}
  </div>
  </div>;
};

export default Display;
