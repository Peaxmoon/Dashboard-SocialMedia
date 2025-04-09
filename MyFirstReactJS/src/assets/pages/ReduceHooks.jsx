import React from 'react';


const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return { count: state.count < 10 ? state.count + 1 : 10};
    } else if (action.type === "DECREMENT") {
        return { count: state.count > 0 ? state.count - 1 : 0 };
    } else {
        return state;
    }
}


function ReduceHooks() {
    const [state, dispatch] = React.useReducer(reducer, 0);
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "purple" }}>
            <h1>Reduce Hooks</h1>

            <div>
                {state}
                <div>
                    <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
                </div>
            </div>
        </div>
    )
}

export default ReduceHooks