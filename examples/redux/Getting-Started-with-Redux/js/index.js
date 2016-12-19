/**
 * Created by simonesacchi on 19/12/2016.
 */


// reduces
function counter (state, action) {
    if (action.type === "INCREMENT") {
        return state + 1;
    } else if (action.type === "DECREMENT") {
        return state - 1;
    }
}

expect(counter(0, {type : "INCREMENT"})).toEqual(1);
expect(counter(1, {type : "INCREMENT"})).toEqual(2);
expect(counter(2, {type : "DECREMENT"})).toEqual(1);
expect(counter(1, {type : "DECREMENT"})).toEqual(0);

console.log("test passed!");