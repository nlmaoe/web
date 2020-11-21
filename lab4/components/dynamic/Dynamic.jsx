import React from 'react';
import Example from '../example/Example';
import States from '../states/States';
import './Dynamic.css'

const STATE = 'State';
const EXAMPLE = 'Example';

class Dynamic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: STATE,
        }
    }

    switchView = () => {
        var newState = this.state.view == STATE ? EXAMPLE : STATE;
        this.setState({view: newState});
    }

    render () {
        return (
            <div>
                <button className="btn" onClick={this.switchView}>
                        {`Switch to ${this.state.view == STATE ? EXAMPLE : STATE}`} 
                </button>
                {this.state.view == STATE ? <States /> : <Example />}
            </div>
        );
    }
}
export default Dynamic;