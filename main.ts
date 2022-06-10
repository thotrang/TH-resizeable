import { Shape } from "./Shape";
import { Resizeable } from "./resizeable";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Square } from "./Square";
let percent = 1+Math.random();
let arr:Shape[]=[];
arr[0]=new Circle('red',3.5);
arr[1]=new Rectangle(5,6,'blue');
arr[2]=new Square('green',7);


    console.log((arr[0] as Circle).calculateArea());
    console.log((arr[0] as Circle).resize(percent));

    console.log((arr[1] as Rectangle).calculateArea());
    console.log((arr[1] as Rectangle).resize(percent));

    console.log((arr[2] as Square).calculateArea());
    console.log((arr[2] as Square).resize(percent));
    

