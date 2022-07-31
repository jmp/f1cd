import {SessionFinder} from '../src/session-finder';

describe('session finder', () => {
    it('fetches the next session from the given date', () => {
        const sessionFinder = new SessionFinder([{
            title: 'Test Grand Prix',
            sessions: [{
                title: 'Wrong session',
                date: '2022-01-01T12:00:00Z'
            }, {
                title: 'Correct session',
                date: '2022-01-02T12:00:00Z'
            }, {
                title: 'Wrong session',
                date: '2022-01-03T12:00:00Z'
            }]
        }]);
        const fromDate = new Date('2022-01-01T16:00:00Z');
        const session = sessionFinder.findNext(fromDate);

        expect(session).toEqual({
            round: 'Test Grand Prix',
            title: 'Correct session',
            date: new Date('2022-01-02T12:00:00Z')
        })
    });

    it('fetches the last session if there are no upcoming sessions', () => {
        const sessionFinder = new SessionFinder([{
            title: 'Test Grand Prix',
            sessions: [{
                title: 'Wrong session',
                date: '2022-01-01T12:00:00Z'
            }, {
                title: 'Correct session',
                date: '2022-01-02T12:00:00Z'
            }]
        }]);
        const fromDate = new Date('2022-01-03T12:00:00Z');
        const session = sessionFinder.findNext(fromDate);

        expect(session).toEqual({
            round: 'Test Grand Prix',
            title: 'Correct session',
            date: new Date('2022-01-02T12:00:00Z')
        })
    });
});