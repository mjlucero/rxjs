import { asyncScheduler } from "rxjs";
import "../assets/css/style.css";

const greet = () => console.log("Hello rxjs");
const greetPerson = ({name, lastname}) => console.log(`Hello ${name} ${lastname}`);

//asyncScheduler.schedule(greet, 2000);
//asyncScheduler.schedule(greetPerson, 2000, {name: "Mauricio", lastname: "Lucero"});
const subscription = asyncScheduler.schedule(function(state) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

/*setTimeout(() => {
    subscription.unsubscribe();
}, 6000);*/


asyncScheduler.schedule(()=> subscription.unsubscribe(),6000);