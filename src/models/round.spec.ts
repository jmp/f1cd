import {Session} from './session';
import {aRound} from './round.builder';
import {aSession} from './session.builder';

describe('round', () => {
    it('has a start date equal to the date of the first session', () => {
        const round = aRound()
            .session(aSession().date(new Date('2022-01-03T12:00Z')))
            .session(aSession().date(new Date('2022-01-01T12:00Z')))
            .session(aSession().date(new Date('2022-01-02T12:00Z')))
            .build();

        expect(round.startDate).toEqual(new Date('2022-01-01T00:00Z'));
    });

    it('has an end date equal to the date following the last session', () => {
        const round = aRound()
            .session(aSession().date(new Date('2022-01-01T12:00Z')))
            .session(aSession().date(new Date('2022-01-03T12:00Z')))
            .session(aSession().date(new Date('2022-01-02T12:00Z')))
            .build();

        expect(round.endDate).toEqual(new Date('2022-01-04T00:00Z'));
    });

    describe('finding the next session', () => {
        it('finds the first session after the given date', () => {
            const round = aRound()
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .session(aSession().date(new Date('2022-01-07T12:00Z')))
                .session(aSession().date(new Date('2022-01-14T12:00Z')))
                .build();
            const nextSession = round.findNextSession(new Date('2022-01-05T12:00Z'));

            expect(nextSession.date).toEqual(new Date('2022-01-07T12:00Z'));
        });

        it('finds the last session when there are no sessions after the given date', () => {
            const round = aRound()
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .session(aSession().date(new Date('2022-01-07T12:00Z')))
                .build();
            const nextSession = round.findNextSession(new Date('2022-01-14T12:00Z'));

            expect(nextSession.date).toEqual(new Date('2022-01-07T12:00Z'));
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
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .build();
            const sessions = round.findSessionsBefore(new Date('2022-01-05T13:00Z'));

            expect(sessions).toEqual([
                new Session(expect.anything(), new Date('2022-01-01T12:00Z'))
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
                .session(aSession().date(new Date('2022-01-01T12:00Z')))
                .build();
            const sessions = round.findSessionsAfter(new Date('2022-01-01T11:00Z'));

            expect(sessions).toEqual([
                new Session(expect.anything(), new Date('2022-01-01T12:00Z'))
            ]);
        });
    });
});
