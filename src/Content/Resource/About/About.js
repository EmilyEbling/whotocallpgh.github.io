import React, { Component } from 'react'
import './about.css'
import { MdExpandMore } from 'react-icons/md'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (<div>
            <button onClick={(e) => this.togglePanel(e)} className='info'>
                More Information <MdExpandMore style={{ verticalAlign: 'middle' }} size="17px" />
            </button>
            {this.state.open ? (
                <div className='content'>
                        {this.props.description}
                </div>
            ) : null}
        </div>);
    }
}



export default About;