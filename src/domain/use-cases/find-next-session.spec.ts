import {FindNextSession} from './find-next-session';
import {Round} from '../round';

describe('find next session', () => {
    it('finds details for the next upcoming session', () => {
        const rounds: Round[] = [{
            title: 'Wrong round',
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-01T12:00:00Z')
            }]
        }, {
            title: 'Correct round',
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        }, {
            title: 'Wrong round',
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-14T12:00:00Z')
            }]
        }];
        const useCase = new FindNextSession(rounds);

        const nextSession = useCase.findNextSession(new Date('2022-01-05T12:00:00Z'));

        expect(nextSession).toEqual({
            roundTitle: 'Correct round',
            sessionTitle: 'Correct session',
            date: new Date('2022-01-07T12:00:00Z')
        });
    });

    it('finds details for the last round when there are no upcoming rounds', () => {
        const rounds: Round[] = [{
            title: 'Wrong round',
            sessions: [{
                title: 'Wrong session',
                date: new Date('2022-01-01T12:00:00Z')
            }]
        }, {
            title: 'Correct round',
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        }];
        const useCase = new FindNextSession(rounds);

        const nextSession = useCase.findNextSession(new Date('2022-01-14T12:00:00Z'));

        expect(nextSession).toEqual({
            roundTitle: 'Correct round',
            sessionTitle: 'Correct session',
            date: new Date('2022-01-07T12:00:00Z')
        });
    });
});
