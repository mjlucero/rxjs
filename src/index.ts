import { fromEvent } from "rxjs";
import { tap, map } from "rxjs/operators";
import "../assets/css/style.css";

/**Html references */
const bodyRef = document.querySelector("body");

/**Create elements */
const contentDiv = document.createElement("div");
contentDiv.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id molestie sem. Praesent sodales, quam at porttitor auctor, ligula velit sollicitudin neque, in convallis nibh justo facilisis odio. Nullam suscipit tortor nec laoreet pretium. Aenean feugiat varius ex, at vehicula mi efficitur ut. Fusce placerat ligula ullamcorper orci venenatis, sit amet iaculis ex mollis. Nullam vel eros id ante viverra sagittis. Nunc maximus vitae sapien ut cursus. Donec laoreet diam vitae neque volutpat, eu pellentesque neque lobortis. In porttitor massa non vulputate porta. Nunc vitae leo nisl. Quisque et erat malesuada, gravida ipsum non, aliquam arcu. Praesent hendrerit luctus pellentesque.
<br/><br/>
Integer laoreet orci risus, semper blandit diam mattis nec. Donec lacus dolor, tristique et sapien ut, placerat blandit mi. Aliquam elementum ante diam, in luctus libero convallis non. Duis volutpat tincidunt sem in rutrum. Morbi gravida sem posuere orci blandit consectetur quis vel nulla. Integer iaculis nisi porttitor ante laoreet sodales. Pellentesque posuere pulvinar turpis, nec egestas justo egestas sit amet. Morbi imperdiet, augue in semper commodo, lorem mi ultricies urna, eget laoreet augue metus id augue. Morbi velit lacus, feugiat vel dolor ac, suscipit vehicula turpis.
<br/><br/>
Proin iaculis, felis feugiat placerat eleifend, augue lorem mollis sapien, quis tristique ligula eros ut risus. Vivamus ac dui consectetur, posuere arcu non, finibus dolor. Quisque blandit elit id nisi gravida, in aliquam nibh efficitur. Aenean volutpat nunc nec risus feugiat, a sodales turpis finibus. Praesent semper dui sem, et blandit nulla aliquam ac. Phasellus placerat laoreet metus volutpat ultricies. Quisque tincidunt augue at erat interdum bibendum. Ut aliquam ac risus at faucibus. Aliquam scelerisque nunc lectus, id finibus diam porttitor a. Cras odio sem, accumsan vulputate mi quis, faucibus facilisis arcu. Duis laoreet vehicula neque eu suscipit. Nulla ullamcorper dui ac tortor finibus, nec maximus sem facilisis. Praesent ornare arcu nec molestie efficitur. Nullam luctus rutrum purus. Quisque eleifend massa nec lectus posuere varius. Nullam facilisis commodo lacus, nec laoreet massa dictum sed.
<br/><br/>
Pellentesque a fringilla nisi, at consequat quam. Integer maximus ante nec consequat sodales. Sed venenatis nec risus ac cursus. Donec dapibus lorem quis mauris rhoncus, vitae dapibus risus bibendum. Praesent feugiat ipsum non tellus faucibus ultricies. Vestibulum nec nulla non enim tincidunt consectetur. Fusce facilisis leo ut nunc finibus pharetra. Proin dignissim erat vitae arcu interdum viverra.
<br/><br/>
Maecenas in ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel volutpat risus, ut laoreet arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam id aliquet ipsum, sed iaculis nibh. Vestibulum pretium dignissim faucibus. Phasellus elementum congue mauris, ac ultrices leo venenatis ultricies. Curabitur nec vehicula enim, egestas congue lorem.`

const progressBarDiv = document.createElement("div");
progressBarDiv.setAttribute("class", "progress-bar");

/**Html appends */
bodyRef.append(progressBarDiv);
bodyRef.append(contentDiv);

const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe();

progress$.subscribe(percent => {
  progressBarDiv.style.width = `${percent}%`
});
