import classes from './ChoresList.module.css';

export default function ChoresList() {
   return (
   <div>
   <p className={classes.choresHeading}>Here are my chores.</p>
      <ul>
         <li className={classes.choresText}>Wash dishes</li>
         <li className={classes.choresText}>do laundry</li>
         <li className={classes.choresText}>take trash out</li>
      </ul>
   </div>
   );
}