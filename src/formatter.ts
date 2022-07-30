export class Formatter {
    format(totalSeconds: number): string {
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }
}