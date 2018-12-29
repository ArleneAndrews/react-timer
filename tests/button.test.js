import TestRenderer from 'react-test-renderer';

describe('Buttons', () => {
    describe('Up button', () => {
        
       /*  it('Displays on screen', () => {
            const component = ReactTestUtils.renderIntoDocument(<increaseCounter />);    
            var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
             component, 'button'
            )
            }) */
        it('Increases count by one', () => {
            
            const makemevisible = TestRenderer.create(<App />);
            const up = makemevisible.this.button;
            ReactTestUtils.Simulate.click(up);
        });
    })
})