import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('shows zero for days, hours, minutes and seconds when the input is zero', () => {
        const formattedValue = new Formatter().format(0);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes and 0 seconds');
    });
});
