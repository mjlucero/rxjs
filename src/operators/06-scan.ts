import { fromEvent, interval, from } from "rxjs";
import { tap, map, take, reduce, scan } from "rxjs/operators";
import "../assets/css/style.css";


const numbers = [1,2,3,4,5];

/*const getTotal = (accumulator: number, current: number) => {
  return accumulator + current;
};*/

const getTotal = (accumulator: number, current: number) => accumulator + current;

//Reduce
from(numbers).pipe(
  reduce(getTotal)
).subscribe(console.log);

console.log("----------")

//Scan
from(numbers).pipe(
  scan(getTotal)
).subscribe(console.log);

//Redux
interface User {
  id?: string;
  isAuth?: boolean;
  token?: string;
  age?: number;
};

const users: User[] = [
  {id: "ab123", isAuth: false, token: null},
  {id: "ab123", isAuth: true, token: "ABC"},
  {id: "ab123", isAuth: true, token: "ABC123"},
];

const state$ = from(users).pipe(
  scan<User>((acc, curr) => ({...acc, ...curr}), {age: 25})
);

const id$ = state$.pipe(
  map(state => state.id)
);

id$.subscribe(console.log);