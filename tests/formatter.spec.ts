import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('shows seconds when the input is less than a minute', () => {
        const formattedValue = new Formatter().format(5);

        expect(formattedValue).toEqual('5 seconds');
    });

    it('shows minutes and seconds when the input is greater than a minute', () => {
        const formattedValue = new Formatter().format(4 * 60 + 5);

        expect(formattedValue).toEqual('4 minutes 5 seconds');
    });

    it('shows hours, minutes and seconds when the input is greater than an hour', () => {
        const formattedValue = new Formatter().format(3 * 60 * 60 + 4 * 60 + 5);

        expect(formattedValue).toEqual('3 hours 4 minutes 5 seconds');
    });

    it('shows days, hours, minutes and seconds when the input is greater than a day', () => {
        const formattedValue = new Formatter().format(2 * 24 * 60 * 60 + 3 * 60 * 60 + 4 * 60 + 5);

        expect(formattedValue).toEqual('2 days 3 hours 4 minutes 5 seconds');
    });

    it('shows seconds in singular when there is exactly one second', () => {
        const formattedValue = new Formatter().format(1);

        expect(formattedValue).toEqual('1 second');
    });

    it('shows minutes in singular when there is exactly one minute', () => {
        const formattedValue = new Formatter().format(60);

        expect(formattedValue).toEqual('1 minute 0 seconds');
    });

    it('shows hours in singular when there is exactly one hour', () => {
        const formattedValue = new Formatter().format(60 * 60);

        expect(formattedValue).toEqual('1 hour 0 minutes 0 seconds');
    });

    it('shows days in singular when there is exactly one day', () => {
        const formattedValue = new Formatter().format(24 * 60 * 60);

        expect(formattedValue).toEqual('1 day 0 hours 0 minutes 0 seconds');
    });
});
