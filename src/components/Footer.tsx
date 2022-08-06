import React from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <ul>
                <li><a data-testid='source-link' href='https://github.com/jmp/f1cd'>Source</a></li>
                <li><a data-testid='issues-link' href='https://github.com/jmp/f1cd/issues'>Bugs</a></li>
            </ul>
        </footer>
    );
}