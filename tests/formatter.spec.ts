import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('shows zero for days, hours, minutes and seconds when the input is zero', () => {
        const formattedValue = new Formatter().format(0);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes and 0 seconds');
    });

    it('shows seconds when when the input is less than a minute', () => {
        const formattedValue = new Formatter().format(59);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes and 59 seconds');
    });

    it('shows minutes and seconds when when the input is greater than a minute', () => {
        const formattedValue = new Formatter().format(65);

        expect(formattedValue).toEqual('0 days, 0 hours, 1 minutes and 5 seconds');
    });
});
