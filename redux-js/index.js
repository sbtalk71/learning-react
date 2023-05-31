const redux=require('redux');
const createStore=redux.createStore;


const BUY_CAKE="BUY_CAKE";

const initialState={
    numOfCakes:10
}

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
    }
}

const store=createStore(reducer);
console.log('initial state',store.getState());
const unsubscribe=store.unsubscribe(()=>console.log('Updated state ',store.getState));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()