import {Session} from './session';
import {Round} from './round';

describe('find next session', () => {
    it('finds the next session when there are upcoming sessions', () => {
        const round = new Round(
            'Test round',
            new Date('2022-01-01T12:00:00Z'),
            [
                new Session('Wrong session', new Date('2022-01-01T12:00:00Z')),
                new Session('Correct session', new Date('2022-01-07T12:00:00Z')),
                new Session('Wrong session', new Date('2022-01-14T12:00:00Z'))
            ]
        );
        const nextSession = round.findNextSession(new Date('2022-01-05T12:00:00Z'));

        expect(nextSession).toEqual(
            new Session('Correct session', new Date('2022-01-07T12:00:00Z'))
        );
    });

    it('finds the last session when there are no upcoming sessions', () => {
        const round = new Round(
            'Test session',
            new Date('2022-01-01T12:00:00Z'),
            [
                new Session('Wrong session', new Date('2022-01-01T12:00:00Z')),
                new Session('Correct session', new Date('2022-01-07T12:00:00Z'))
            ]
        );
        const nextSession = round.findNextSession(new Date('2022-01-14T12:00:00Z'));

        expect(nextSession).toEqual(
            new Session('Correct session', new Date('2022-01-07T12:00:00Z'))
        );
    });
});
