import React from 'react'
import { HomeWrapper } from './style'
import { connect } from 'react-redux'

import { ButtonGroup, Button } from 'react-bootstrap'

import { counterUp, counterDown } from '../../actions/counter'

class Home extends React.Component {

    render() {
        const { count, counterUp, counterDown } = this.props

        return (
            <HomeWrapper>
                <h1>Hello world</h1>
                    Counter: {count}
                <div>
                    <ButtonGroup>
                        <Button onClick={counterUp}>Increment</Button>
                        <Button onClick={counterDown}>Decrement</Button>
                    </ButtonGroup>
                </div>

            </HomeWrapper>
        )
    }
}


const mapStateToProps = state => ({
    count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
    counterUp: () => dispatch(counterUp()),
    counterDown: () => dispatch(counterDown())
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
