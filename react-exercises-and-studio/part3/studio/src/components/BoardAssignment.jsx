import { useState } from 'react';

export default function BoardAssignment () {
   
   const boards = [{label:"Desserts", value:"desserts"}, {label:"Sweets", value:"sweets"},  {label:"Cookie", value:"cookie"} ];
   const [boardName, setName] = useState("no boards yet!");

   const handleChange = (event) => {
   setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
            <select value={boardName} onChange={handleChange}>
               <div>
                  <option key={boards.value} value={boards.value}>{boards.label}</option>
               </div>
            </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}
