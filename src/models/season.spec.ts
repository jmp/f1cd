import {Round} from './round';
import {Session} from './session';
import {aRound} from './round.builder';
import {aSeason} from './season.builder';
import {aSession} from './session.builder';

describe('finding the next round after a given date', () => {
    it('finds the first round when there are rounds after the date', () => {
        const season = aSeason()
            .round(aRound().session(aSession().date(new Date('2022-01-01T12:00Z'))))
            .round(
                aRound()
                    .title('Correct round')
                    .session(aSession().title('Correct session').date(new Date('2022-01-07T12:00Z')))
            )
            .round(aRound().session(aSession().date(new Date('2022-01-14T12:00Z'))))
            .build();

        const nextRound = season.findNextRound(new Date('2022-01-05T12:00Z'));

        expect(nextRound).toEqual(new Round('Correct round', [new Session('Correct session', new Date('2022-01-07T12:00Z'))]));
    });

    it('finds the last round when there are no rounds after the date', () => {
        const season = aSeason()
            .round(aRound().session(aSession().date(new Date('2022-01-01T12:00Z'))))
            .round(
                aRound()
                    .title('Correct round')
                    .session(aSession().title('Correct session').date(new Date('2022-01-07T12:00Z')))
            )
            .build();

        const nextRound = season.findNextRound(new Date('2022-01-14T12:00Z'));

        expect(nextRound).toEqual(new Round('Correct round', [new Session('Correct session', new Date('2022-01-07T12:00Z'))]));
    });

    it('finds the round if the date is during race weekend', () => {
        const season = aSeason()
            .round(
                aRound()
                    .title('Correct round')
                    .session(aSession().title('Correct session').date(new Date('2022-08-26T12:00Z')))
            )
            .round(aRound().session(aSession().date(new Date('2022-09-02T12:00Z'))))
            .build();

        const nextRound = season.findNextRound(new Date('2022-08-27T09:00Z'));

        expect(nextRound).toEqual(new Round('Correct round', [new Session('Correct session', new Date('2022-08-26T12:00Z'))]));
    });
});
