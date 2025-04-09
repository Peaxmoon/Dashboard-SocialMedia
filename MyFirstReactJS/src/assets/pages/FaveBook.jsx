import { useReducer, useEffect, useState } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case "username": return { ...state, username: action.payload };
        case "password": return { ...state, password: action.payload };
        default: return state;
    }
}

export default function FaveBook() {
    const [formData, dispatch] = useReducer(reducer, { username: "", password: "" });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            // Add slight delay to glow follower for effect
            setTimeout(() => {
                setCursorGlow({ x: e.clientX, y: e.clientY });
            }, 100);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-500">
            {/* Cursor followers */}
            <div 
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,182,255,0.15), transparent 80%)`
                }}
            />
            <div 
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(300px at ${cursorGlow.x}px ${cursorGlow.y}px, rgba(255,255,255,0.1), transparent 80%)`
                }}
            />

            {/* Content container */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Animated background elements */}
                    <div className="animate-blob1 absolute top-1/4 -left-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                    <div className="animate-blob2 absolute top-1/3 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                    <div className="animate-blob3 absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                </div>

                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md
                            transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold mb-2 animate-text bg-gradient-to-r 
                                     from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            FaveBook
                        </h1>
                        <p className="text-gray-200 animate-fade-in">Welcome back!</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="group">
                            <input 
                                type="text"
                                placeholder="Username"
                                value={formData.username}
                                onChange={(e) => dispatch({ type: "username", payload: e.target.value })}
                                className="w-full bg-white/5 text-white border border-white/20 rounded-lg px-4 py-3
                                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                         transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                            />
                        </div>

                        <div className="group">
                            <input 
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
                                className="w-full bg-white/5 text-white border border-white/20 rounded-lg px-4 py-3
                                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                         transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                            />
                        </div>

                        <button 
                            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                                     text-white py-3 rounded-lg transition-all duration-300
                                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 
                                     active:scale-95 font-semibold"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}