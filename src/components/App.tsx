import React, {ReactElement, useEffect, useState} from 'react';
import {FindNextSession} from '../use-cases/find-next-session';
import {GetRemainingTime} from '../use-cases/get-remaining-time';
import {FindNextRound} from '../use-cases/find-next-round';
import {Round} from '../models/round';
import {Session} from '../models/session';
import {Footer} from './Footer';
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
                    { formatSessions(sessionsBefore, 'before') }
                    { formatSessions(sessionsAfter, 'after') }
                </tbody>
            </table>
            <p id='tzinfo'>All times are {getTimezone()}</p>
            <h3>Next Session</h3>
            <p><span data-testid='session'>{nextSession.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
            <Footer />
        </div>
    );
}

function formatSessions(sessions: Session[], className: string): ReactElement[] {
    return sessions.map(({title, date}) => (
        <tr key={date.getTime()} className={className}>
            <td>{title}</td>
            <td>{formatDate(date)}</td>
            <td>{formatTime(date)}</td>
        </tr>
    ))
}

function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
}

function getTimezone(): string {
    return `UTC${new Date().toString().match(/([-+][0-9]+)\s/)![1]}`;
}

export default App;
