import React from 'react'
import {renderIntoDocument, cleanup} from 'react-testing-library';
import {App} from 'timer'

afterEach(cleanup)

describe('Buttons', () => {
    describe('Up button', () => {
        
       /*  it('Displays on screen', () => {
            const component = ReactTestUtils.renderIntoDocument(<increaseCounter />);    
            var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
             component, 'button'
            )
            }) */
        it('Displays on screen', () => {
            renderIntoDocument(<App />);
            
        });
    })
})