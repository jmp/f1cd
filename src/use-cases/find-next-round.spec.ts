import {Round} from '../models/round';
import {FindNextRound} from './find-next-round';

describe('find next round', () => {
    it('finds details for the next upcoming round', () => {
        const rounds: Round[] = [{
            title: 'Wrong round',
            startDate: new Date('2022-01-01T12:00:00Z'),
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-01T12:00:00Z')
            }]
        }, {
            title: 'Correct round',
            startDate: new Date('2022-01-07T12:00:00Z'),
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        }, {
            title: 'Wrong round',
            startDate: new Date('2022-01-14T12:00:00Z'),
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-14T12:00:00Z')
            }]
        }];
        const useCase = new FindNextRound(rounds);

        const nextRound = useCase.findNextRound(new Date('2022-01-05T12:00:00Z'));

        expect(nextRound).toEqual({
            title: 'Correct round',
            startDate: new Date('2022-01-07T12:00:00Z'),
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        });
    });

    it('finds details for the last round when there are no upcoming rounds', () => {
        const rounds: Round[] = [{
            title: 'Wrong round',
            startDate: new Date('2022-01-01T12:00:00Z'),
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-01T12:00:00Z')
            }]
        }, {
            title: 'Correct round',
            startDate: new Date('2022-01-07T12:00:00Z'),
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        }];
        const useCase = new FindNextRound(rounds);

        const nextRound = useCase.findNextRound(new Date('2022-01-14T12:00:00Z'));

        expect(nextRound).toEqual({
            title: 'Correct round',
            startDate: new Date('2022-01-07T12:00:00Z'),
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        });
    });
});
