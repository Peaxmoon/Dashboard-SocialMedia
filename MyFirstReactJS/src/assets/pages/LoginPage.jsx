import { useReducer } from "react"

const reducer = (state, action) => {
    if (action.type === "username") {
        return { ...state, username: action.payload };
    } else if (action.type === "password") {
        return { ...state, password: action.payload };
    } else {
        return { ...state };
    }
}

const initialState = {
    username: "",
    password: "",
};

// function initialState1() {
//     return {
//         username: "",
//         password: "",
//     };
// }

export default function LoginPage() {
    const [formData, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        console.log(username);
        console.log(password);
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input 
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={(e) =>
                                dispatch({
                                    type: "username", payload: e.target.value
                                })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={(e) =>
                                dispatch({
                                    type: "password", payload: e.target.value
                                })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}