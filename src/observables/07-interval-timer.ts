import { interval, timer } from "rxjs";
import "../assets/css/style.css";

const observer = {
    next: value => console.log("Next: ", value),
    complete: () => console.log("Complete")
};

const todayInFive = new Date();
todayInFive.setSeconds(todayInFive.getSeconds() + 5);

const inteval$ = interval(1000);
//const timer$ = timer(2000);
//const timer$ = timer(2000, 1000);
const timer$ = timer(todayInFive);

//inteval$.subscribe(observer);
timer$.subscribe(observer);
