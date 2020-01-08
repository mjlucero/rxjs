import { range, from } from "rxjs";
import { filter } from "rxjs/operators";
import "../assets/css/style.css";

range(1,10).pipe(filter(value => value % 2 === 1)).subscribe(console.log);

interface Character {
    type: string;
    name: string;
};

const characters: Character[] = [
    {
        type: "villain",
        name: "Joker"
    },
    {
        type: "hero",
        name: "Batman"
    },
    {
        type: "hero",
        name: "Robin"
    }
];

from(characters).pipe(filter(character => character.type !== "hero")).subscribe(console.log);



