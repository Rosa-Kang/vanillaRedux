import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../store';

const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText('');
    };

    return (
        <>
            <h1>To Dos</h1>
            <form action="submit" onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} id={toDo.id} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(add(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
