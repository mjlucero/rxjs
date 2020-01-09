import { range } from "rxjs";
import { tap, map } from "rxjs/operators";
import "../assets/css/style.css";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap(x => console.log("tap", x)),
    map(value => value * 10)
  )
  .subscribe(value => console.log("subs", value));
