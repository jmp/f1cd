import {Round} from '../models/round';
import {Session} from '../models/session';
import {Season} from '../models/season';
import seasonData from './season-data.json';

export type SeasonData = {
    title: string;
    sessions: {
        title: string;
        date: string;
    }[];
}[];

export function mapSeasonDataToSeason(seasonData: SeasonData): Season {
    return new Season(
        seasonData.map(({title, sessions}) => new Round(title, sessions.map(({
                                                                                 title,
                                                                                 date
                                                                             }) => new Session(title, new Date(date)))))
    );
}

export const season = mapSeasonDataToSeason(seasonData);
