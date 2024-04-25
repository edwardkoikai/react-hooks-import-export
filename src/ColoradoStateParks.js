import React from "react";
import aDifferentName  from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain"
function ColoradoStateParks() {
  aDifferentName (); // => "42 parks!"
 

  return <h1>Colorado State Parks!
    {RMFunctions.trees}
    {RMFunctions.wildlife()}
  </h1>;
}

export default ColoradoStateParks
