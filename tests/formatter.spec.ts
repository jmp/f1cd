import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('shows seconds when when the input is less than a minute', () => {
        const formattedValue = new Formatter().format(4);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes 4 seconds');
    });

    it('shows minutes and seconds when the input is greater than a minute', () => {
        const formattedValue = new Formatter().format(3 * 60 + 4);

        expect(formattedValue).toEqual('0 days, 0 hours, 3 minutes 4 seconds');
    });

    it('shows hours, minutes and seconds when the input is greater than an hour', () => {
        const formattedValue = new Formatter().format(2 * 60 * 60 + 3 * 60 + 4);

        expect(formattedValue).toEqual('0 days, 2 hours, 3 minutes 4 seconds');
    });

    it('shows days, hours, minutes and seconds when the input is greater than a day', () => {
        const formattedValue = new Formatter().format(24 * 60 * 60 + 2 * 60 * 60 + 3 * 60 + 4);

        expect(formattedValue).toEqual('1 days, 2 hours, 3 minutes 4 seconds');
    });
});
