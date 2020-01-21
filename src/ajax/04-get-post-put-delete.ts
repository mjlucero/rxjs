import "../assets/css/style.css";
import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const API_URL = "https://httpbin.org/delay/1";

const errorHandler = (res: AjaxError) => {
  console.warn(res.message);
  return of({
    ok: false,
    users: []
  });
};

ajax
  .post(
    API_URL,
    {
      id: 1,
      name: "Mauricio"
    },
    { token: "qwe123" }
  )
  .subscribe(console.log);

ajax({
  url: API_URL,
  method: "POST",
  headers: {
    token: "wqe123"
  },
  body: {
    id: 1,
    name: "Mauricio"
  }
}).subscribe(console.log);
