import {FindNextSession} from './find-next-session';
import {Round} from '../round';

describe('find next session', () => {
    it('finds details for the next session', () => {
        const rounds: Round[] = [{
            title: 'Hungary',
            sessions: [{
                title: 'Practice 1',
                date: new Date('2022-07-29T12:00:00Z')
            }]
        }];
        const useCase = new FindNextSession(rounds);

        const nextSession = useCase.findNextSession(new Date('2022-01-01T12:00:00Z'));

        expect(nextSession).toEqual({
            roundTitle: 'Hungary',
            sessionTitle: 'Practice 1',
            date: new Date('2022-07-29T12:00:00Z')
        });
    });
});
