import {Formatter} from './formatter';

export class Countdown {
    private readonly seconds: number;
    private readonly formatter: Formatter;

    constructor(from: Date, to: Date, formatter: Formatter) {
        this.seconds = Math.max(0, to.getTime() - from.getTime()) / 1000;
        this.formatter = formatter;
    }

    format(): string {
        return this.formatter.format(this.seconds);
    }
}