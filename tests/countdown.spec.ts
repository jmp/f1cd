import {Countdown} from '../src/countdown';

describe('countdown', () => {
    it('is zero when the dates are the same', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:00Z')
        );
        expect(countdown.seconds).toEqual(0);
    });

    it('is the difference in seconds when the dates are different', () => {
        const countdown = new Countdown(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:42Z')
        );
        expect(countdown.seconds).toEqual(42);
    });
});
