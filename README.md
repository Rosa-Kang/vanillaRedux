-   ⭐️ Redux is consist of actions, reducers, and store
-   ⭐️ A redux store is where you save your data which requires 'reducer'
-   ⭐️ A reducer is a function that modifies your data.
    : Reducer is the only thing that can change state, data
    : How? by using Action\*\*\*
-   ⭐️ Subscribe allows us to listen for changes in our store.

|1. Redux - intro|

```
const ADD = "ADD"
const MINUS = "MINUS"

const reducer = (state=[], action) => {

    switch (action.type) {
        case ADD :
            return [...state, {text: action.text}]
        case DELETE :
            return [];
        default :
            return state;
    }
}

const store = createStore(reducer);

store.dispatch({type:'ADD'})
```

|2. Redux - intermediate w/h Plane JS|

```
const reducer =( state=[], action)=> {
    switch(action.type){
        case ADD_TODO :
            return [...state, {text: action.text, id:Date.now()}];
        case DELETE_TODO :
            return state.filter((toDo)=> toDo.id !== action.id);
        default :
            return state;
    }
}

const store = createStore(reducer);

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDos = ()=> {
    const toDos = store.getState();
    ul.innerHTML = "",
    toDos.forEach(toDo=> {
        const li = document.createElement("li");
        const btn = document.createElement("button);
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value="",
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
```

|3. Redux - advanced w/h React.JS|
connect() : takes two argument which are 'state' and 'dispatch' || mapStateToProps and mapDispatchToProps

```
export default connect(mapStateToProps)(Home);
```

|4. Redux Toolkit - advanced|
Redux toolkit is a package with a lot of shortcuts to be able to have the same functionality with less code.
