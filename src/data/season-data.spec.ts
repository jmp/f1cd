import {mapSeasonDataToSeason, SeasonData} from './season-data';
import {Session} from '../models/session';
import {Round} from '../models/round';
import {Season} from '../models/season';

describe('season data mapping', () => {
    it('maps season data to a season', () => {
        const seasonData: SeasonData = [{
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

        const season = mapSeasonDataToSeason(seasonData);

        expect(season).toEqual(new Season([
            new Round(
            'Hungary',
            new Date('2022-07-29T12:00:00Z'),
            [
                new Session('Practice 1', new Date('2022-07-29T12:00:00Z')),
                new Session('Practice 2', new Date('2022-07-29T15:00:00Z')),
                new Session('Practice 3', new Date('2022-07-30T11:00:00Z')),
                new Session('Qualifying', new Date('2022-07-30T14:00:00Z')),
                new Session('Grand Prix', new Date('2022-07-31T13:00:00Z'))
            ]
        )]));
    });
});