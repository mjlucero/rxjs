import "../assets/css/style.css";
import { ajax } from "rxjs/ajax";

const URL = "https://httpbin.org/delay/1";

const observable$ = ajax.getJSON(URL, {
  "Content-Type": "application/json",
  token: "qwe123"
});

observable$.subscribe(console.log);
