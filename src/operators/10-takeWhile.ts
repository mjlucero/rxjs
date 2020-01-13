import { of, fromEvent } from "rxjs";
import { tap, map, take, reduce, scan, first, takeWhile } from "rxjs/operators";
import "../assets/css/style.css";


const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  map(({x,y}) => ({x,y})),
  takeWhile(({y})=> y <= 150, true)
)
.subscribe({
  next: value => console.log("Next: ", value),
  complete: () => console.log("Complete")
});
