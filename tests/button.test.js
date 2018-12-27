import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('Buttons', () => {
    describe('Up button', () => {
 
        it('Displays on screen', () => {
            const component = ReactTestUtils.renderIntoDocument(<increaseCounter />);    
            var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
             component, 'button'
            )
            })
       
    })
})