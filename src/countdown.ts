export class Countdown {
    seconds: number;

    constructor(from: Date, to: Date) {
        this.seconds = (to.getTime() - from.getTime()) / 1000;
    }
}