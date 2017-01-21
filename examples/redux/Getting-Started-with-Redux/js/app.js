/**
 * Created by simonesacchi on 19/12/2016.
 */


(function () {



    "use strict";


    // =============================================================================
    // The Reducer: pure function that takes the state and returns a new one
    // =============================================================================
    function counter(state, action) {

            // if the state is undefined, returns the initial state of the application
            if (typeof state === 'undefined') {
                return 0;
            }

            if (action.type === 'INCREMENT') {
                return state + 1;
            } else if (action.type === 'DECREMENT') {
                return state - 1;
            } else {
                return state;
        }
    }


    function render () {
        // update UI
        console.log(store.getState());
        document.getElementById("text").innerText = store.getState();
    }


    // pass to the store the reducer
    //var store = window.Redux.createStore(counter);
    var store = window.Redux.createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    // store has 3 methods
    // .getState()
    // .dispatch()
    // .subscribe()


    // AJAX CALL
    // 1. dispatch action that make an ajax call
    // 2. on ajax completed, dispatch another action that update the store


    // =============================================================================
    // The only way to change the state is to emit an ACTION,
    // an object describing what happened.
    // =============================================================================
    document.getElementById("button").addEventListener("click", function () {
        store.dispatch({type : "INCREMENT"});
    });


    store.subscribe(render);
    // render initial state once
    render();


    // =============================================================================
    // test
    // =============================================================================
    expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
    expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
    expect(counter(2, { type: 'DECREMENT' })).toEqual(1);
    expect(counter(1, { type: 'DECREMENT' })).toEqual(0);
    // custom action returns the same state
    expect(counter(1, { type: 'CUSTOM' })).toEqual(1);
    // custom action returns the same state
    expect(counter(undefined, {})).toEqual(0);
    console.log('test passed!');

}());