import React from "react";
import Numbers from '../ButtonComponents/NumberButtons/Numbers'

import Specials from '../ButtonComponents/SpecialButtons/Specials';

const Display = () => {
  return <div>
      <div className = 'input'>0</div>
    <Specials   /> 
  <Numbers /> {/* Display any props data here */}
  </div>;
};

export default Display;
