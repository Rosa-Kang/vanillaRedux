import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDo }) => {
    const id = useParams();
    console.log(id);

    return;
    <>
        <h1>{toDo?.text}</h1>
        <p>created at: {toDo?.id}</p>
    </>;
};

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id },
        },
    } = ownProps;
    return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
