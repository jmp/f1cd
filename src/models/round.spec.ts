import {Session} from './session';
import {Round} from './round';

describe('round', () => {
    describe('finding the next session', () => {
        it('finds the next session when there are upcoming sessions', () => {
            const round = new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [
                    new Session('Wrong session', new Date('2022-01-01T12:00:00Z')),
                    new Session('Correct session', new Date('2022-01-07T12:00:00Z')),
                    new Session('Wrong session', new Date('2022-01-14T12:00:00Z'))
                ]
            );
            const nextSession = round.findNextSession(new Date('2022-01-05T12:00:00Z'));

            expect(nextSession).toEqual(
                new Session('Correct session', new Date('2022-01-07T12:00:00Z'))
            );
        });

        it('finds the last session when there are no upcoming sessions', () => {
            const round = new Round(
                'Test session',
                new Date('2022-01-01T12:00:00Z'),
                [
                    new Session('Wrong session', new Date('2022-01-01T12:00:00Z')),
                    new Session('Correct session', new Date('2022-01-07T12:00:00Z'))
                ]
            );
            const nextSession = round.findNextSession(new Date('2022-01-14T12:00:00Z'));

            expect(nextSession).toEqual(
                new Session('Correct session', new Date('2022-01-07T12:00:00Z'))
            );
        });
    });

    describe('finding sessions before a given date', () => {
        it('finds nothing when the date is before the earliest session', () => {
            const round = new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Test session', new Date('2022-01-01T12:00:00Z'))]
            );
            const sessions = round.findSessionsBefore(new Date('2022-01-01T11:00:00Z'));

            expect(sessions).toEqual([]);
        });

        it('finds the sessions when the date is after the earliest session', () => {
            const round = new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Test session', new Date('2022-01-01T12:00:00Z'))]
            );
            const sessions = round.findSessionsBefore(new Date('2022-01-05T13:00:00Z'));

            expect(sessions).toEqual([
                new Session('Test session', new Date('2022-01-01T12:00:00Z'))
            ]);
        });
    });

    describe('finding sessions after a given date', () => {
        it('finds nothing when the date is after the last session', () => {
            const round = new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Test session', new Date('2022-01-01T12:00:00Z'))]
            );
            const sessions = round.findSessionsAfter(new Date('2022-01-01T13:00:00Z'));

            expect(sessions).toEqual([]);
        });

        it('finds the sessions when the date is before the last session', () => {
            const round = new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Test session', new Date('2022-01-01T12:00:00Z'))]
            );
            const sessions = round.findSessionsAfter(new Date('2022-01-01T11:00:00Z'));

            expect(sessions).toEqual([
                new Session('Test session', new Date('2022-01-01T12:00:00Z'))
            ]);
        });
    });
});
