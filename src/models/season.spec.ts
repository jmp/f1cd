import {aRound} from './round.builder';
import {aSeason} from './season.builder';
import {aSession} from './session.builder';

describe('finding the next round after a given date', () => {
    it('has rounds ordered by date', () => {
        const season = aSeason()
            .round(aRound().session(aSession().date('2022-01-01T00:00Z')))
            .round(aRound().session(aSession().date('2022-03-01T00:00Z')))
            .round(aRound().session(aSession().date('2022-02-01T00:00Z')));

        expect(() => season.build()).toThrowError();
    });

    it('finds the next round when there are rounds after the date', () => {
        const season = aSeason()
            .round(aRound().session(aSession().date('2022-01-01T12:00Z')))
            .round(aRound().session(aSession().date('2022-01-07T12:00Z')).title('expected'))
            .round(aRound().session(aSession().date('2022-01-14T12:00Z')))
            .build();

        const nextRound = season.findNextRound(new Date('2022-01-05T12:00Z'));

        expect(nextRound.title).toEqual('expected');
    });

    it('finds the last round when there are no rounds after the date', () => {
        const season = aSeason()
            .round(aRound().session(aSession().date('2022-01-01T12:00Z')))
            .round(aRound().session(aSession().date('2022-01-07T12:00Z')).title('expected'))
            .build();

        const nextRound = season.findNextRound(new Date('2022-01-14T12:00Z'));

        expect(nextRound.title).toEqual('expected');
    });

    it('finds the round if the date is during race weekend', () => {
        const season = aSeason()
            .round(aRound().session(aSession().date('2022-08-26T12:00Z')).title('expected'))
            .round(aRound().session(aSession().date('2022-09-02T12:00Z')))
            .build();

        const nextRound = season.findNextRound(new Date('2022-08-26T23:59Z'));

        expect(nextRound.title).toEqual('expected');
    });
});
