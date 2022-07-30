import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('shows seconds when when the input is less than a minute', () => {
        const formattedValue = new Formatter().format(5);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes 5 seconds');
    });

    it('shows minutes and seconds when the input is greater than a minute', () => {
        const formattedValue = new Formatter().format(4 * 60 + 5);

        expect(formattedValue).toEqual('0 days, 0 hours, 4 minutes 5 seconds');
    });

    it('shows hours, minutes and seconds when the input is greater than an hour', () => {
        const formattedValue = new Formatter().format(3 * 60 * 60 + 4 * 60 + 5);

        expect(formattedValue).toEqual('0 days, 3 hours, 4 minutes 5 seconds');
    });

    it('shows days, hours, minutes and seconds when the input is greater than a day', () => {
        const formattedValue = new Formatter().format(2 * 24 * 60 * 60 + 3 * 60 * 60 + 4 * 60 + 5);

        expect(formattedValue).toEqual('2 days, 3 hours, 4 minutes 5 seconds');
    });
});
