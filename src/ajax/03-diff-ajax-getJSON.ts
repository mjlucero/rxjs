import "../assets/css/style.css";
import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const URL = "https://httpbinxx.org/delay/1";

const errorHandler = (res: AjaxError) => {
  console.warn(res.message);
  return of({
    ok: false,
    users: []
  });
};

const observable$ = ajax.getJSON(URL, {
  "Content-Type": "application/json",
  Authorization: "qwe123"
});

const ajax$ = ajax(URL);

/*observable$.pipe(catchError(errorHandler)).subscribe(console.log);
ajax$.pipe(catchError(errorHandler)).subscribe(console.log);*/

observable$.pipe(catchError(errorHandler)).subscribe({
  next: value => console.log(value),
  error: err => console.warn(err),
  complete: () => console.log("Complete")
});
//ajax$.subscribe(console.log);
