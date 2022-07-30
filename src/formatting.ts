export function format(totalSeconds: number) {
    const formatUnit = (value: number, unit: string) => value === 1 ? unit : `${unit}s`;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return [
        days, formatUnit(days, 'day'),
        hours, formatUnit(hours, 'hour'),
        minutes, formatUnit(minutes, 'minute'),
        seconds, formatUnit(seconds, 'second'),
    ].join(' ');
}
