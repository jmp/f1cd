import React, {useEffect, useState} from 'react';
import {FindNextSession} from './use-cases/find-next-session';
import {GetRemainingTime} from './use-cases/get-remaining-time';
import {FindNextRound} from './use-cases/find-next-round';
import {Round} from './models/round';
import './App.css';

type AppProps = {
    rounds: Round[],
    getDate: () => Date,
    updateInterval: number
}

function App({ rounds, getDate, updateInterval }: AppProps) {
    const nextRound = new FindNextRound(rounds).findNextRound(getDate());
    const nextSession = new FindNextSession(nextRound).findNextSession(getDate());
    const sessionsBefore = nextRound.sessions.filter(({date}) => date.getTime() < nextSession.date.getTime());
    const sessionsAfter = nextRound.sessions.filter(({date}) => date.getTime() >= nextSession.date.getTime());
    const getRemainingTime = new GetRemainingTime();
    const [remainingTime, setRemainingTime] = useState(getRemainingTime.getRemainingTime(getDate(), nextSession.date));

    useEffect(() => {
        const interval = setInterval(() => setRemainingTime(getRemainingTime.getRemainingTime(getDate(), nextSession.date)), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h1>Countdown</h1>
            <h2 data-testid='round'>{nextRound.title}</h2>
            <h3>Sessions</h3>
            <table data-testid='sessions'>
                <tbody>
                {
                    sessionsBefore.map(({title, date}) => (
                        <tr key={date.getTime()} className='before'>
                            <td>{title}</td>
                            <td>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                            <td>{date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}</td>
                        </tr>
                    ))
                }
                {
                    sessionsAfter.map(({title, date}) => (
                        <tr key={date.getTime()} className='after'>
                            <td>{title}</td>
                            <td>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                            <td>{date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <p id='tzinfo'>All times are UTC{new Date().toString().match(/([-+][0-9]+)\s/)![1]}</p>
            <h3>Next Session</h3>
            <p><span data-testid='session'>{nextSession.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
            <p><a href='https://github.com/jmp/f1cd'>View the source on GitHub</a></p>
        </div>
    );
}

export default App;
