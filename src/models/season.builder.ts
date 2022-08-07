import {Round} from './round';
import {aRound, RoundBuilder} from './round.builder';
import {Season} from './season';

export class SeasonBuilder {
    private _rounds: Round[] = [];
    private _defaultRounds: Round[] = [];

    round(round: RoundBuilder): SeasonBuilder {
        this._rounds.push(round.build());
        return this;
    }

    defaultRound(round: RoundBuilder): SeasonBuilder {
        this._defaultRounds.push(round.build());
        return this;
    }

    build(): Season {
        return new Season(this._rounds.length === 0 ? this._defaultRounds : this._rounds);
    }
}

export function aSeason(): SeasonBuilder {
    return new SeasonBuilder()
        .defaultRound(aRound());
}
