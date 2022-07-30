import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('shows zero for days, hours, minutes and seconds when the input is zero', () => {
        const formattedValue = new Formatter().format(0);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes and 0 seconds');
    });

    it('shows seconds when when the input is less than a minute', () => {
        const formattedValue = new Formatter().format(1);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes and 1 seconds');
    });

    it('shows minutes and seconds when the input is greater than a minute', () => {
        const formattedValue = new Formatter().format(62);

        expect(formattedValue).toEqual('0 days, 0 hours, 1 minutes and 2 seconds');
    });

    it('shows hours, minutes and seconds when the input is greater than an hour', () => {
        const formattedValue = new Formatter().format(60 * 60 + 2 * 60 + 3);

        expect(formattedValue).toEqual('0 days, 1 hours, 2 minutes and 3 seconds');
    });
});
