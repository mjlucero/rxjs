import "../assets/css/style.css";
import { of, from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

const numbers$ = of<number | string>(1, "1", 1, 1, 3, 3, 3, 3, 2, 4, 4, 4, 5, 3, 1);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: "Megaman" },
  { name: "Megaman" },
  { name: "Megaman" },
  { name: "X" },
  { name: "Zero" },
  { name: "Dr. Willy" },
  { name: "X" },
  { name: "Megaman" },
  { name: "Zero" }
];

from(characters)
  .pipe(distinctUntilKeyChanged("name"))
  .subscribe(console.log);
