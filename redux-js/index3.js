const redux=require('redux');
const reduxLogger=require('redux-logger')

const logger=reduxLogger.createLogger();

const applyMiddleware=redux.applyMiddleware;

const createStore=redux.createStore;
const combineReducers=redux.combineReducers;


const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';



function buyCake(){
    return {
        type:BUY_CAKE
    }
}

function buyIcecream(){
    return {
        type:BUY_ICECREAM
    }
}

//reducer (state, function)=>{}

const initialCakeState={
    numOfCakes:10
}

const initialIcecreamState={
    numOfIcecreams:20
}

const cakeReducer=(state=initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default: return state
    }
}

const icecreamReducer=(state=initialIcecreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams:state.numOfIcecreams-1
        }
        default: return state
    }
}

const rootReducer=combineReducers({
    cakes:cakeReducer,
    icreams: icecreamReducer
})

const store=createStore(rootReducer,applyMiddleware(logger));
console.log('initial state',store.getState());

const unsubscribe = store.subscribe(()=>{})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe()
