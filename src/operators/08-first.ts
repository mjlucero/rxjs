import { of, fromEvent } from "rxjs";
import { tap, map, take, reduce, scan, first } from "rxjs/operators";
import "../assets/css/style.css";


const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  first(event => event.clientY >= 150)
)
.subscribe({
  next: value => console.log("Next: ", value),
  complete: () => console.log("Complete")
  
});
