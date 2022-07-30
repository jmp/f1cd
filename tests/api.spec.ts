import {countdown} from "../src/api";

describe('api', () => {
    it('returns the remaining time from today to the given date', () => {
        const result = countdown(
            new Date("2022-01-01T00:00:00Z"),
            new Date("2022-01-02T02:03:04Z"),
        );

        expect(result).toEqual('1 day 2 hours 3 minutes 4 seconds');
    });
});
