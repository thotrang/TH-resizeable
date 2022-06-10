import { Shape } from "./Shape";
import { Resizeable } from "./resizeable";
export class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
        height: number,
        name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
    resize(percent: number) {
        return this.calculateArea() * percent;
    }
}
