const redux = require('redux');
const createStore = redux.createStore;


// create action

const BUY_SWEET = 'BUY_SWEET';
const BUY_BREAD = 'BUY_BREAD';

function buySweet(){
    return{
        type : BUY_SWEET,
        info : 'First Sweet reducer app'
    }
}

function buyBread(){

    return{
        type : BUY_BREAD,
        info : 'second bread reducer app'
    }
}

// reducer

const intialState = {
    numOfSweets : 20,
    numOfBread : 10
}

const reducer = (state = intialState , action) =>{
    switch(action.type){
        case BUY_SWEET : return{
            ...state , numOfSweets : state.numOfSweets - 1
        }

        case BUY_BREAD : return{
            ...state , numOfBread : state.numOfBread - 2
        }
    }
}

// create store

const store = createStore(reducer);

const unSubscribe = store.subscribe(()=>console.log('Upgarde state' , store.getState()));

store.dispatch(buySweet);
store.dispatch(buyBread);
unSubscribe();