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
                const testRenderer = TestRenderer.create(<App />);
                const up = this.button;
                ReactTestUtils.Simulate.click(up);
                })
    })
})