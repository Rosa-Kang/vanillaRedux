import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

const ToDo = ({ text, onBtnClick, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    );
};

const mapStateToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        onBtnClick: () => dispatch(bindActionCreators.deleteToDo(ownProps.id)),
    };
};

export default connect(null, mapStateToProps)(ToDo);
