export class Countdown {
    readonly seconds: number;

    constructor(from: Date, to: Date) {
        this.seconds = Math.max(0, to.getTime() - from.getTime()) / 1000;
    }
}