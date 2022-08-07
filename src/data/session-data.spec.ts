import {mapSessionDataToRounds, SessionData} from './session-data';
import {Session} from '../models/session';

describe('session data mapping', () => {
    it('raw session data is mapped to a list of rounds', () => {
        const sessionData: SessionData = [{
            title: 'Hungary',
            startDate: '2022-07-29T12:00:00Z',
            sessions: [
                { title: 'Practice 1', date: '2022-07-29T12:00:00Z' },
                { title: 'Practice 2', date: '2022-07-29T15:00:00Z' },
                { title: 'Practice 3', date: '2022-07-30T11:00:00Z' },
                { title: 'Qualifying', date: '2022-07-30T14:00:00Z' },
                { title: 'Grand Prix', date: '2022-07-31T13:00:00Z' }
            ]
        }];

        const rounds = mapSessionDataToRounds(sessionData);

        expect(rounds).toEqual([{
            title: 'Hungary',
            startDate: new Date('2022-07-29T12:00:00Z'),
            sessions: [
                new Session('Practice 1', new Date('2022-07-29T12:00:00Z')),
                new Session('Practice 2', new Date('2022-07-29T15:00:00Z')),
                new Session('Practice 3', new Date('2022-07-30T11:00:00Z')),
                new Session('Qualifying', new Date('2022-07-30T14:00:00Z')),
                new Session('Grand Prix', new Date('2022-07-31T13:00:00Z'))
            ]
        }]);
    });
});