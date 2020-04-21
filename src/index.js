import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
    constructor () {
        super()
        this.state = {
            value: '',
            selected: 'lime'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        alert("Submitted: " + this.state.value)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <lable>
                    Name:
                </lable>
                <input type= "text" value= {this.state.value} onChange= {this.handleChange} />
                <button type= "text" value= "submit"  >
                    Submit
                </button>
                <select >
                    <option value="grapefruit" >Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango" selected= {this.state.selected}>Mango</option>
                </select>
                <input type= "file"/> 
            </form>
        )
    }
}

ReactDOM.render(<NameForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
