import { fromEvent, interval } from "rxjs";
import { tap, map, take, reduce } from "rxjs/operators";
import "../assets/css/style.css";


const numbers = [1,2,3,4,5];

const getTotal = (accumulator: number, current: number) => {
  return accumulator + current;
};

const total = numbers.reduce(getTotal,10);
console.log(total);

interval(500).pipe(
  take(6),
  tap(console.log),
  reduce(getTotal)
).subscribe({
  next: value => console.log("Next: ", value),
  complete: () => console.log("Complete")
})