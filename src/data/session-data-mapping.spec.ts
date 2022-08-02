import {SessionData} from './session-data';
import {mapSessionDataToRounds} from './session-data-mapping';

describe('session data mapping', () => {
    it('raw session data is mapped to a list of rounds', () => {
        const sessionData: SessionData = [{
            title: 'Hungary',
            sessions: [
                { title: 'Practice 1', date: '2022-07-29T12:00:00Z' },
                { title: 'Practice 2', date: '2022-07-29T15:00:00Z' },
                { title: 'Practice 3', date: '2022-07-30T11:00:00Z' },
                { title: 'Qualifying', date: '2022-07-30T14:00:00Z' },
                { title: 'Race', date: '2022-07-31T13:00:00Z' }
            ]
        }];

        const rounds = mapSessionDataToRounds(sessionData);

        expect(rounds).toEqual([{
            title: 'Hungary',
            sessions: [
                { title: 'Practice 1', date: new Date('2022-07-29T12:00:00Z') },
                { title: 'Practice 2', date: new Date('2022-07-29T15:00:00Z') },
                { title: 'Practice 3', date: new Date('2022-07-30T11:00:00Z') },
                { title: 'Qualifying', date: new Date('2022-07-30T14:00:00Z') },
                { title: 'Race', date: new Date('2022-07-31T13:00:00Z') }
            ]
        }]);
    });
});