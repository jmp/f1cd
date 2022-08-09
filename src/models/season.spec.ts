import {Round} from './round';
import {Session} from './session';
import {aRound} from './round.builder';
import {aSeason} from './season.builder';
import {aSession} from './session.builder';

describe('finding the next round after a given date', () => {
    it('finds the first round when there are rounds after the date', () => {
        const season = aSeason()
            .round(
                aRound()
                    .startDate(new Date('2022-01-01T12:00Z'))
                    .session(aSession().date(new Date('2022-01-01T12:00Z')))
            )
            .round(
                aRound()
                    .title('Correct round')
                    .startDate(new Date('2022-01-07T12:00Z'))
                    .session(aSession().title('Correct session').date(new Date('2022-01-07T12:00Z')))
            )
            .round(
                aRound()
                    .startDate(new Date('2022-01-14T12:00Z'))
                    .session(aSession().date(new Date('2022-01-14T12:00Z')))
            )
            .build();

        const nextRound = season.findNextRound(new Date('2022-01-05T12:00Z'));

        expect(nextRound).toEqual(new Round(
            'Correct round',
            new Date('2022-01-07T12:00Z'),
            [new Session('Correct session', new Date('2022-01-07T12:00Z'))]
        ));
    });

    it('finds the last round when there are no rounds after the date', () => {
        const season = aSeason()
            .round(
                aRound()
                    .startDate(new Date('2022-01-01T12:00Z'))
                    .session(aSession().date(new Date('2022-01-01T12:00Z')))
            )
            .round(
                aRound()
                    .title('Correct round')
                    .startDate(new Date('2022-01-07T12:00Z'))
                    .session(aSession().title('Correct session').date(new Date('2022-01-07T12:00Z')))
            )
            .build();

        const nextRound = season.findNextRound(new Date('2022-01-14T12:00Z'));

        expect(nextRound).toEqual(new Round(
            'Correct round',
            new Date('2022-01-07T12:00Z'),
            [new Session('Correct session', new Date('2022-01-07T12:00Z'))]
        ));
    });
});
