import { UserPlus, GraduationCap,Users } from 'lucide-react';
import { Home, Calendar } from 'lucide-react';
import {  MessageSquare, Briefcase,  Mic } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, onNavigate, userRole }) => {
    const adminMenu = [ { title: "Dashboard", page: "Dashboard", icon: <Home size={20} /> }, { title: "Community", subItems: [ { name: "Discussion Forums", page: "Forums", icon: <MessageSquare size={18} /> },  { name: "Career Guidance", page: "Career", icon: <Briefcase size={18} /> }, ]}, { title: "Interaction Sessions", subItems: [ { name: "View Sessions", page: "EventList", icon: <Calendar size={18} /> }, { name: "Add New Session", page: "AddEvent", icon: <Mic size={18} /> }, ]}, { title: "Manage Users", subItems: [ { name: "Students List", page: "StudentsList", icon: <Users size={18} /> }, { name: "Alumni List", page: "AlumniList", icon: <GraduationCap size={18} /> }, { name: "Add Student", page: "AddStudent", icon: <UserPlus size={18} /> }, { name: "Add Alumni", page: "AddAlumni", icon: <GraduationCap size={18} /> }, ]}, ];
    const userMenu = [ { title: "Dashboard", page: "Dashboard", icon: <Home size={20} /> }, { title: "Community", subItems: [ { name: "Discussion Forums", page: "Forums", icon: <MessageSquare size={18} /> },  { name: "Career Guidance", page: "Career", icon: <Briefcase size={18} /> }, ]}, { title: "Interaction Sessions", subItems: [ { name: "View Sessions", page: "EventList", icon: <Calendar size={18} /> }, ]}, { title: "Directory", subItems: [ { name: "Students List", page: "StudentsList", icon: <Users size={18} /> }, { name: "Alumni List", page: "AlumniList", icon: <GraduationCap size={18} /> }, ]} ];
    const menuItems = userRole === 'admin' ? adminMenu : userMenu;
    return (
        <aside className={`bg-gray-800 text-gray-300 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-20`}>
            <div className="text-white text-xl font-semibold text-center">Alumni Connect</div>
            <nav> {menuItems.map((item, index) => ( <div key={index} className="mb-4"> {item.title && !item.subItems ? ( <button onClick={() => onNavigate(item.page)} className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold">{item.icon}<span>{item.title}</span></button> ) : ( <> <h3 className="px-4 mb-2 text-lg font-semibold">{item.title}</h3> <ul className="space-y-2"> {item.subItems.map((subItem, subIndex) => ( <li key={subIndex}><button onClick={() => onNavigate(subItem.page, {})} type="button" className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">{subItem.icon}<span>{subItem.name}</span></button></li> ))} </ul> </> )} </div> ))} </nav>
        </aside>
    );
};



export default Sidebar;