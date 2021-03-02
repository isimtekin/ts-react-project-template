import React from 'react';

export interface GuessLayoutProps {
    children: JSX.Element;
}

const GuessLayout = ({ children }: GuessLayoutProps) => {
    return (
        <div>
            <div>Guess Layout</div>
            <div>{children}</div>
        </div>
    );
};

export default GuessLayout;
