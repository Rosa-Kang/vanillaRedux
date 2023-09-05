import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ToDo = ({ text, onBtnClick }) => {
    return (
        <li>
            {text} <button onClick={onBtnClick}>DEL</button>
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
