import {GetRemainingTime} from './get-remaining-time';

describe('get remaining time between two dates', () => {
    it('returns 0 seconds when the dates are the same', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:00Z')
        );

        expect(remainingTime).toEqual('0 seconds');
    });

    it('returns 0 seconds when "to" date is before the "from" date', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:30Z'),
            new Date('2022-01-01T00:00:00Z')
        );

        expect(remainingTime).toEqual('0 seconds');
    });

    it('returns seconds when the remaining time is less than a minute', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:05Z')
        );

        expect(remainingTime).toEqual('5 seconds');
    });

    it('returns minutes and seconds when the remaining time is greater than a minute', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:04:05Z')
        );

        expect(remainingTime).toEqual('4 minutes 5 seconds');
    });

    it('returns hours, minutes and seconds when the remaining time is greater than an hour', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T03:04:05Z')
        );

        expect(remainingTime).toEqual('3 hours 4 minutes 5 seconds');
    });

    it('returns days, hours, minutes and seconds when the remaining time is greater than a day', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-03T03:04:05Z')
        );

        expect(remainingTime).toEqual('2 days 3 hours 4 minutes 5 seconds');
    });

    it('returns seconds in singular when there is exactly one second', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:00:01Z')
        );

        expect(remainingTime).toEqual('1 second');
    });

    it('returns minutes in singular when there is exactly one minute', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T00:01:00Z')
        );

        expect(remainingTime).toEqual('1 minute 0 seconds');
    });

    it('returns hours in singular when there is exactly one hour', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-01T01:00:00Z')
        );

        expect(remainingTime).toEqual('1 hour 0 minutes 0 seconds');
    });

    it('returns days in singular when there is exactly one day', () => {
        const useCase = new GetRemainingTime();

        const remainingTime = useCase.getRemainingTime(
            new Date('2022-01-01T00:00:00Z'),
            new Date('2022-01-02T00:00:00Z')
        );

        expect(remainingTime).toEqual('1 day 0 hours 0 minutes 0 seconds');
    });
});