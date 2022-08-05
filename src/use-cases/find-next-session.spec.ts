import {FindNextSession} from './find-next-session';
import {Round} from '../models/round';

describe('find next session', () => {
    it('finds details for the next upcoming session', () => {
        const round: Round = {
            title: 'Test round',
            startDate: new Date('2022-01-07T12:00:00Z'),
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-01T12:00:00Z')
            }, {
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }, {
                title: 'Wrong session',
                date: new Date('2022-01-14T12:00:00Z')
            }]
        };
        const useCase = new FindNextSession(round);

        const nextSession = useCase.findNextSession(new Date('2022-01-05T12:00:00Z'));

        expect(nextSession).toEqual({
            title: 'Correct session',
            date: new Date('2022-01-07T12:00:00Z')
        });
    });

    it('finds details for the last session when there are no upcoming sessions', () => {
        const round: Round = {
            title: 'Test round',
            startDate: new Date('2022-01-01T12:00:00Z'),
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-01T12:00:00Z')
            }, {
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        };
        const useCase = new FindNextSession(round);

        const nextSession = useCase.findNextSession(new Date('2022-01-14T12:00:00Z'));

        expect(nextSession).toEqual({
            title: 'Correct session',
            date: new Date('2022-01-07T12:00:00Z')
        });
    });
});
