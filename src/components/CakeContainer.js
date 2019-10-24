import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {buyCake} from "../redux/index";

class CakeContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {numberOfCake} = this.props;
        return (
            <div>
                <h2>Number of cake {numberOfCake}</h2>
                <button onClick={this.props.buyCake}> Buy Cake</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numberOfCake: state.numberOfCake
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
        buyCake: buyCake
    },
    dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
