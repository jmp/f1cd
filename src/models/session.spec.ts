import {Session} from './session';

describe('session', () => {
    describe('remaining time to the start of the session', () => {
        it('shows 0 seconds when the dates are the same', () => {
            const session = new Session('Test session', new Date('2022-01-01T00:00:00Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('0 seconds');
        });

        it('shows 0 seconds when "to" date is before the "from" date', () => {
            const session = new Session('Test session', new Date('2022-01-01T00:00:00Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:30Z'));

            expect(remainingTime).toEqual('0 seconds');
        });

        it('shows seconds when the remaining time is less than a minute', () => {
            const session = new Session('Test session', new Date('2022-01-01T00:00:05Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('5 seconds');
        });

        it('shows minutes and seconds when the remaining time is greater than a minute', () => {
            const session = new Session('Test session', new Date('2022-01-01T00:04:05Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('4 minutes 5 seconds');
        });

        it('shows hours, minutes and seconds when the remaining time is greater than an hour', () => {
            const session = new Session('Test session', new Date('2022-01-01T03:04:05Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('3 hours 4 minutes 5 seconds');
        });

        it('shows days, hours, minutes and seconds when the remaining time is greater than a day', () => {
            const session = new Session('Test session', new Date('2022-01-03T03:04:05Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('2 days 3 hours 4 minutes 5 seconds');
        });

        it('shows seconds in singular when there is exactly one second', () => {
            const session = new Session('Test session', new Date('2022-01-01T00:00:01Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('1 second');
        });

        it('shows minutes in singular when there is exactly one minute', () => {
            const session = new Session('Test session', new Date('2022-01-01T00:01:00Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('1 minute 0 seconds');
        });

        it('shows hours in singular when there is exactly one hour', () => {
            const session = new Session('Test session', new Date('2022-01-01T01:00:00Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('1 hour 0 minutes 0 seconds');
        });

        it('shows days in singular when there is exactly one day', () => {
            const session = new Session('Test session', new Date('2022-01-02T00:00:00Z'));

            const remainingTime = session.getRemainingTime(new Date('2022-01-01T00:00:00Z'));

            expect(remainingTime).toEqual('1 day 0 hours 0 minutes 0 seconds');
        });
    });
});
