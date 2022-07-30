import {Countdown} from '../src/countdown';
import {Formatter} from '../src/formatter';

describe('countdown', () => {
    const dummyFormatter: Formatter = {
        format: () => ''
    }

    it('is zero when the dates are the same', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:00Z'),
            dummyFormatter
        );
        expect(countdown.seconds).toEqual(0);
    });

    it('is zero when the "to" date is before "from" date', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:30Z'),
            new Date('2022-01-01T00:00:00Z'),
            dummyFormatter
        );
        expect(countdown.seconds).toEqual(0);
    });

    it('is the difference in seconds when the dates are different', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:42Z'),
            dummyFormatter
        );
        expect(countdown.seconds).toEqual(42);
    });

    it('formats the time using the given formatter', () => {
        const formatter: Formatter = {
            format: (seconds: number) => `formatted ${seconds}`
        }
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:42Z'),
            formatter
        );

        expect(countdown.format()).toEqual('formatted 42');
    });
});
