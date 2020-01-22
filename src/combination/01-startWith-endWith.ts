import "../assets/css/style.css";
import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const numbers$ = of(1, 2, 3);

numbers$.pipe(startWith(0), endWith(4)).subscribe(console.log);
