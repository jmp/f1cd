import {RoundFinder} from '../src/round-finder';

describe('round finder', () => {
    it('finds the next upcoming round', () => {
        const roundFinder = new RoundFinder([{
            title: 'Wrong round',
            sessions: [{
                title: 'Wrong session',
                date: '2022-01-01T12:00:00Z'
            }]
        }, {
            title: 'Correct round',
            sessions: [{
                title: 'Correct session',
                date: '2022-01-07T12:00:00Z'
            }]
        }, {
            title: 'Wrong round',
            sessions: [{
                title: 'Wrong session',
                date: '2022-01-14T12:00:00Z'
            }]
        }]);

        const fromDate = new Date('2022-01-05T12:00:00Z');
        const round = roundFinder.findNext(fromDate);

        expect(round).toEqual({
            title: 'Correct round',
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        })
    });

    it('finds the last round when there are no upcoming rounds', () => {
        const roundFinder = new RoundFinder([{
            title: 'Wrong round',
            sessions: [{
                title: 'Wrong session',
                date: '2022-01-01T12:00:00Z'
            }]
        }, {
            title: 'Correct round',
            sessions: [{
                title: 'Correct session',
                date: '2022-01-07T12:00:00Z'
            }]
        }]);
        const fromDate = new Date('2022-01-14T12:00:00Z');
        const round = roundFinder.findNext(fromDate);

        expect(round).toEqual({
            title: 'Correct round',
            sessions: [{
                title: 'Correct session',
                date: new Date('2022-01-07T12:00:00Z')
            }]
        })
    });
});