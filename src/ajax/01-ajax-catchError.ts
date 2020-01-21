import "../assets/css/style.css";
import { ajax, AjaxError } from "rxjs/ajax";
import { pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

const url = "http://api.github.com/useXXXrs?per_page=5";

const errorHandler = (err: AjaxError) => {
  console.warn(err);
  return of([]);
};

ajax(url)
  .pipe(pluck("response"), catchError(errorHandler))
  .subscribe(console.log);
