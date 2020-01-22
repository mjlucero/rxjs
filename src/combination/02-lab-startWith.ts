import "../assets/css/style.css";
import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";

const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Loading...";

ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true))
  .subscribe(res => {
    if (res === true) {
      document.body.append(loadingDiv);
    } else {
      document.querySelector(".loading").remove();
    }
    console.log(res);
  });
