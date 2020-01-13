import { of } from "rxjs";
import { tap, map, take, reduce, scan } from "rxjs/operators";
import "../assets/css/style.css";


const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
  take(3)
)
.subscribe({
  next: value => console.log("Next: ", value),
  complete: () => console.log("Complete")
});

