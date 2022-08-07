import {Season} from './season';
import {Round} from './round';
import {Session} from './session';

describe('find next round', () => {
    it('finds an next round when there are upcoming rounds', () => {
        const season = new Season([
            new Round(
                'Wrong round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Wrong session', new Date('2022-01-01T12:00:00Z'))]
            ),
            new Round(
                'Correct round',
                new Date('2022-01-07T12:00:00Z'),
                [new Session('Correct session', new Date('2022-01-07T12:00:00Z'))]
            ),
            new Round(
                'Wrong round',
                new Date('2022-01-14T12:00:00Z'),
                [new Session('Wrong session', new Date('2022-01-14T12:00:00Z'))]
            )
        ]);

        const nextRound = season.findNextRound(new Date('2022-01-05T12:00:00Z'));

        expect(nextRound).toEqual(new Round(
            'Correct round',
            new Date('2022-01-07T12:00:00Z'),
            [new Session('Correct session', new Date('2022-01-07T12:00:00Z'))]
        ));
    });

    it('finds the last round when there are no upcoming rounds', () => {
        const season = new Season([
            new Round(
                'Wrong round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Wrong session', new Date('2022-01-01T12:00:00Z'))]
            ),
            new Round(
                'Correct round',
                new Date('2022-01-07T12:00:00Z'),
                [new Session('Correct session', new Date('2022-01-07T12:00:00Z'))]
            )
        ]);

        const nextRound = season.findNextRound(new Date('2022-01-14T12:00:00Z'));

        expect(nextRound).toEqual(new Round(
            'Correct round',
            new Date('2022-01-07T12:00:00Z'),
            [new Session('Correct session', new Date('2022-01-07T12:00:00Z'))]
        ));
    });
});
