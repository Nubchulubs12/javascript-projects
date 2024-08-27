import { useState } from 'react';

export default function StatusChange() {

   const [notes, setNote] = useState("");
   const [recipeStatus, setRecp] = useState(false);
   const handleChange = (event) => {
      setNote(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecp(true);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <form onSubmit={handleSubmit}>
            <label>
               Have you tried this recipe? Add your notes here:{" "}
               <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         {recipeStatus ? (
            <>
               <p>My Recipe Notes: {notes}</p>
               <p>Thank you for trying out this recipe!</p>
            </>
         ) : (
            <>
               <p>My Recipe Notes aren't here!</p>
               <p>I have not tried this recipe!</p>
            </>
         )}
      </div>
   );
}
