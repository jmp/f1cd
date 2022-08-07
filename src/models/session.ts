export class Session {
    constructor(
        readonly title: string,
        readonly date: Date
    ) {}

    getRemainingTime(fromDate: Date): string {
        const seconds = this.calculateDifferenceInSeconds(fromDate, this.date);
        return this.format(seconds);
    }

    private calculateDifferenceInSeconds(from: Date, to: Date): number {
        return Math.max(0, to.getTime() - from.getTime()) / 1000;
    }

    private format(totalSeconds: number): string {
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = Math.floor(totalSeconds % 60);

        let result = '';
        if (days > 0) {
            result += `${days} ${days === 1 ? 'day' : 'days'} `;
        }
        if (result || hours > 0) {
            result += `${hours} ${hours === 1 ? 'hour' : 'hours'} `;
        }
        if (result || minutes > 0) {
            result += `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} `;
        }
        result += `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        return result;
    }
}
