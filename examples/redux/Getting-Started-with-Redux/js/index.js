/**
 * Created by simonesacchi on 19/12/2016.
 */

"use strict";

// reduces
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
}


// pass to the store the reducer
var store = Redux.createStore(counter);
// .getState()
// .dispatch()
// .subscribe()


document.getElementById("button").addEventListener("click", function () {
    store.dispatch({type : "INCREMENT"});
});
store.subscribe(render);
// render initial state once
render();

expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
expect(counter(2, { type: 'DECREMENT' })).toEqual(1);
expect(counter(1, { type: 'DECREMENT' })).toEqual(0);

// custom action returns the same state
expect(counter(1, { type: 'CUSTOM' })).toEqual(1);

// custom action returns the same state
expect(counter(undefined, {})).toEqual(0);

console.log('test passed!');
