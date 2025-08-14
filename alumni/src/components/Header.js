import { Menu, LogOut } from 'lucide-react';
import logo from '../images/logo.jpg';
import { Shield } from 'lucide-react';
import { User } from 'lucide-react';

const Header = ({ toggleSidebar, userRole, onLogout }) => (
    <header className="bg-gray-900 text-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="md:hidden p-2 rounded-md hover:bg-gray-700"><Menu size={24} /></button>
            <div className="flex items-center gap-3">
                <img src={logo} alt="PVP Logo" className="h-14 w-14 rounded-full border-2 border-white"/>
                <div>
                    <h1 className="text-2xl font-bold">Prasad V Potluri Siddhartha Institute of Technology</h1>
                    <p className="text-xs">Autonomous Institution affiliated to JNTUK, Kanuru</p>
                    <p className="text-xs">Approved By AICTE, New Delhi, Accredited By NBA, New Delhi</p>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                {userRole === 'admin' ? <Shield size={18} className="text-amber-400" /> : <User size={18} className="text-sky-400" />}
                <span className="text-sm capitalize">{userRole}</span>
            </div>
            <button onClick={onLogout} type="button" className="flex items-center gap-1 text-sm text-red-400 hover:text-red-500">
                <LogOut size={16} />
                Log out
            </button>
        </div>
    </header>
);

export default Header;