import {aSession} from './session.builder';

describe('session', () => {
    describe('remaining time to the beginning of the session', () => {
        it('is zero seconds when there is no time remaining', () => {
            const session = aSession()
                .date(new Date('2022-01-01T00:00Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('0 seconds');
        });

        it('is zero seconds when the session has already begun', () => {
            const session = aSession()
                .date(new Date('2022-01-01T00:00Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:30Z'));

            expect(remainingTime).toEqual('0 seconds');
        });

        it('is seconds when the remaining time is less than a minute', () => {
            const session = aSession()
                .date(new Date('2022-01-01T00:00:05Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('5 seconds');
        });

        it('is minutes and seconds when the remaining time is greater than a minute', () => {
            const session = aSession()
                .date(new Date('2022-01-01T00:04:05Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('4 minutes 5 seconds');
        });

        it('is hours, minutes and seconds when the remaining time is greater than an hour', () => {
            const session = aSession()
                .date(new Date('2022-01-01T03:04:05Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('3 hours 4 minutes 5 seconds');
        });

        it('is days, hours, minutes and seconds when the remaining time is greater than a day', () => {
            const session = aSession()
                .date(new Date('2022-01-03T03:04:05Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('2 days 3 hours 4 minutes 5 seconds');
        });

        it('is seconds in singular when there is exactly one second', () => {
            const session = aSession()
                .date(new Date('2022-01-01T00:00:01Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('1 second');
        });

        it('is minutes in singular when there is exactly one minute', () => {
            const session = aSession()
                .date(new Date('2022-01-01T00:01Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('1 minute 0 seconds');
        });

        it('is hours in singular when there is exactly one hour', () => {
            const session = aSession()
                .date(new Date('2022-01-01T01:00Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00Z'));

            expect(remainingTime).toEqual('1 hour 0 minutes 0 seconds');
        });

        it('is days in singular when there is exactly one day', () => {
            const session = aSession()
                .date(new Date('2022-01-02Z'))
                .build();

            const remainingTime = session.getRemainingTime(new Date('2022-01-01Z'));

            expect(remainingTime).toEqual('1 day 0 hours 0 minutes 0 seconds');
        });
    });
});
