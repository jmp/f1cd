import {Clock} from './clock';

describe('clock', () => {
    it('is not in the past', () => {
        const pastDate = new Date();
        const clockDate = new Clock().getDate();

        expect(clockDate.getTime()).toBeGreaterThanOrEqual(pastDate.getTime());
    });

    it('is not in the future', () => {
        const clockDate = new Clock().getDate();
        const futureDate = new Date();

        expect(clockDate.getTime()).toBeLessThanOrEqual(futureDate.getTime());
    });
});
