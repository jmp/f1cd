import {Formatter} from '../src/formatter';

describe('formatter', () => {
    it('is zero when the dates are the same', () => {
        const formattedValue = new Formatter().format(0);

        expect(formattedValue).toEqual('0 days, 0 hours, 0 minutes and 0 seconds');
    });
});
