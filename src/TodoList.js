import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './main.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'hello!',
            list: ['123'],
            show: true
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleSubmit.bind(this)}>submit</button>
                </div>
                <div>
                    <CSSTransition
                        in={this.state.show}
                        timeout={1000}
                        classNames="fade"
                    >
                        <ul>
                            {
                                this.state.list.map(item => {
                                    return (
                                        <div key={item}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                            <li>learn Vue</li>
                            <li>learn React</li>
                        </ul>
                    </CSSTransition>
                    <button onClick={this.handleShowChange.bind(this)}>
                        change
                    </button>
                </div>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleShowChange() {
        this.setState(() => {
            console.log(!this.state.show)
            return { show: !this.state.show }
        })
    }

    handleSubmit() {
        this.setState(() => {
            let list = [...this.state.list]
            list.push(this.state.inputValue)
            return { list }
        })
    }
}

export default TodoList
