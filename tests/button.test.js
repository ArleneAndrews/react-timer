import React from 'react'
import {renderIntoDocument} from 'react-testing-library';
import App from '../timer';

// afterEach(cleanup)

describe('Buttons', () => {
    describe('Up button', () => {
        it('Displays on screen', () => {
        renderIntoDocument(<App />);
        expect(getByText('My Counter')).toBeTruthy();
        });
    })
})