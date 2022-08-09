import {Session} from './session';
import {aRound} from './round.builder';
import {aSession} from './session.builder';

describe('round', () => {
    describe('finding the next session', () => {
        it('finds the first session after the given date', () => {
            const round = aRound()
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .session(aSession().title('Correct session').date(new Date('2022-01-07T12:00Z')))
                .session(aSession().date(new Date('2022-01-14T12:00Z')))
                .build();
            const nextSession = round.findNextSession(new Date('2022-01-05T12:00Z'));

            expect(nextSession).toEqual(
                new Session('Correct session', new Date('2022-01-07T12:00Z'))
            );
        });

        it('finds the last session when there are no sessions after the given date', () => {
            const round = aRound()
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .session(aSession().title('Correct session').date(new Date('2022-01-07T12:00Z')))
                .build();
            const nextSession = round.findNextSession(new Date('2022-01-14T12:00Z'));

            expect(nextSession).toEqual(
                new Session('Correct session', new Date('2022-01-07T12:00Z'))
            );
        });
    });

    describe('finding sessions before a given date', () => {
        it('finds nothing when the date is before the earliest session', () => {
            const round = aRound()
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .build();
            const sessions = round.findSessionsBefore(new Date('2022-01-01T11:00Z'));

            expect(sessions).toEqual([]);
        });

        it('finds the sessions when the date is after the earliest session', () => {
            const round = aRound()
                .session(aSession().title('Test session').date(new Date('2022-01-01T12:00Z')))
                .build();
            const sessions = round.findSessionsBefore(new Date('2022-01-05T13:00Z'));

            expect(sessions).toEqual([
                new Session('Test session', new Date('2022-01-01T12:00Z'))
            ]);
        });
    });

    describe('finding sessions after a given date', () => {
        it('finds nothing when the date is after the last session', () => {
            const round = aRound()
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .build();
            const sessions = round.findSessionsAfter(new Date('2022-01-01T13:00Z'));

            expect(sessions).toEqual([]);
        });

        it('finds the sessions when the date is before the last session', () => {
            const round = aRound()
                .session(aSession().title('Test session').date(new Date('2022-01-01T12:00Z')))
                .build();
            const sessions = round.findSessionsAfter(new Date('2022-01-01T11:00Z'));

            expect(sessions).toEqual([
                new Session('Test session', new Date('2022-01-01T12:00Z'))
            ]);
        });
    });
});
