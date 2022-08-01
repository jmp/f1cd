import {Countdown} from './countdown';
import {Formatter} from './formatter';

describe('countdown', () => {
    const secondsFormatter: Formatter = {
        format: (seconds: number) => `${seconds} seconds`
    }

    it('is zero when the dates are the same', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:00Z'),
            secondsFormatter
        );
        expect(countdown.format()).toEqual('0 seconds');
    });

    it('is zero when the "to" date is before "from" date', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:30Z'),
            new Date('2022-01-01T00:00:00Z'),
            secondsFormatter
        );
        expect(countdown.format()).toEqual('0 seconds');
    });

    it('is the difference in seconds when the dates are different', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:42Z'),
            secondsFormatter
        );
        expect(countdown.format()).toEqual('42 seconds');
    });
});
