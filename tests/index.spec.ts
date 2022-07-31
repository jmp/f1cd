/** @jest-environment jsdom */

import {join} from 'node:path';
import {readFileSync} from 'node:fs';

describe('index', () => {
    beforeEach(() => {
        document.body.innerHTML = readFileSync(join(__dirname, '..', 'src', 'html', 'index.html'), 'utf-8')
    });

    afterEach(() => jest.resetModules());

    it('updates round name', () => {
        const roundEl = document.getElementById('round')!;

        require('../src/index');

        expect(roundEl.innerHTML).not.toEqual('');
    });

    it('updates session name', () => {
        const sessionEl = document.getElementById('session')!;

        require('../src/index');

        expect(sessionEl.innerHTML).not.toEqual('');
    });

    it('updates countdown', () => {
        const countdownEl = document.getElementById('countdown')!;

        require('../src/index');

        expect(countdownEl.innerHTML).not.toEqual('');
    });
});
