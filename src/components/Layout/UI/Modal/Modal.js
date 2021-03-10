import React, { Component } from 'react';

import classes from '../Modal/Modal.module.css';
import Aux from '../../../../hoc/ReactAux';
import Backdrop from '../Modal/Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log ('[Modal] WillUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.show ? '1' : '0'
                    }}>
                    {this.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;