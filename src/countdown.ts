import {Formatter} from './formatter';

export class Countdown {
    private readonly seconds: number;

    constructor(from: Date, to: Date, private readonly formatter: Formatter) {
        this.seconds = Math.max(0, to.getTime() - from.getTime()) / 1000;
    }

    format(): string {
        return this.formatter.format(this.seconds);
    }
}