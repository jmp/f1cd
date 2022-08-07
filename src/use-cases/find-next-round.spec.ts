import {Round} from '../models/round';
import {FindNextRound} from './find-next-round';
import {Session} from '../models/session';

describe('find next round', () => {
    it('finds details for the next upcoming round', () => {
        const rounds: Round[] = [
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
        ];
        const useCase = new FindNextRound(rounds);

        const nextRound = useCase.findNextRound(new Date('2022-01-05T12:00:00Z'));

        expect(nextRound).toEqual(new Round(
            'Correct round',
            new Date('2022-01-07T12:00:00Z'),
            [new Session('Correct session', new Date('2022-01-07T12:00:00Z'))]
        ));
    });

    it('finds details for the last round when there are no upcoming rounds', () => {
        const rounds: Round[] = [
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
        ];
        const useCase = new FindNextRound(rounds);

        const nextRound = useCase.findNextRound(new Date('2022-01-14T12:00:00Z'));

        expect(nextRound).toEqual(new Round(
            'Correct round',
            new Date('2022-01-07T12:00:00Z'),
            [new Session('Correct session', new Date('2022-01-07T12:00:00Z'))]
        ));
    });
});
