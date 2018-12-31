import React from 'react';
import ReactDOM from 'react-dom';
//import {renderIntoDocument} from 'react-testing-library';
import App from '../timer';

// afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  
/* describe('Buttons', () => {
    describe('Up button', () => {
        it('Displays on screen', () => {
        renderIntoDocument(<App />);
        expect(getByText('My Counter')).toBeTruthy();
        });
    })
}) */