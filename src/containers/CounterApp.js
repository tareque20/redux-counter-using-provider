import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = (state) => ({
    count: state.count <= 0 ? 0 : state.count // prevent negative value
});

const mapDispatchToProps = (dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
