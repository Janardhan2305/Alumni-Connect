import { useState } from "react";
import { KeyRound } from "lucide-react";

const LoginPage = ({ onLogin }) => {
    const [role, setRole] = useState('user');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // For admin, check the password. For this example, it's hardcoded.
        if (role === 'admin') {
            if (password === 'admin123') {
                onLogin(role);
            } else {
                setError('Incorrect admin password.');
            }
        } else {
            // For users/students, log in directly without a password.
            onLogin(role);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
                    <p className="mt-2 text-gray-600">Please log in to continue</p>
                </div>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Login as</label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                            <button type="button" onClick={() => setRole('user')} className={`px-4 py-2 w-1/2 rounded-l-md text-sm font-medium ${role === 'user' ? 'bg-indigo-600 text-white z-10' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                                Student / User
                            </button>
                            <button type="button" onClick={() => setRole('admin')} className={`-ml-px px-4 py-2 w-1/2 rounded-r-md text-sm font-medium ${role === 'admin' ? 'bg-indigo-600 text-white z-10' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                                Admin
                            </button>
                        </div>
                    </div>
                    
                    {role === 'admin' && (
                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-gray-700">Admin Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <KeyRound className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Password"/>
                            </div>
                        </div>
                    )}

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default LoginPage;
