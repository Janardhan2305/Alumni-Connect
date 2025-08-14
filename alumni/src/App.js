import React, { useState, useEffect } from 'react';
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";
import ForumPage from './pages/ForumPage';
import ForumThreadPage from './pages/ForumThreadPage';
import LoginPage from './pages/LoginPage';


import { collection, onSnapshot } from "firebase/firestore";
import { db } from './firebase';


export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null); 
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Dashboard');
    const [pageProps, setPageProps] = useState({});
    
    const [students, setStudents] = useState([]);
    const [alumni, setAlumni] = useState([]);
    const [events, setEvents] = useState([]);
    const [forums, setForums] = useState([]);

    useEffect(() => {
        if (!isAuthenticated) return; 
        const unsubStudents = onSnapshot(collection(db, "students"), (s) => setStudents(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const unsubAlumni = onSnapshot(collection(db, "alumni"), (s) => setAlumni(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const unsubEvents = onSnapshot(collection(db, "events"), (s) => setEvents(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const unsubForums = onSnapshot(collection(db, "forums"), (s) => setForums(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { unsubStudents(); unsubAlumni(); unsubEvents(); unsubForums(); };
    }, [isAuthenticated]);

    const handleLogin = (role) => {
        setUserRole(role);
        setIsAuthenticated(true);
        setCurrentPage('Dashboard'); 
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
    };

    const handleNavigate = (page, props = {}) => {
        setCurrentPage(page);
        setPageProps(props);
    };

    const renderPage = () => {
        const adminPages = ['AddStudent', 'AddAlumni', 'AddEvent'];
        if (userRole !== 'admin' && adminPages.includes(currentPage)) {
            return <div className="text-center p-10 bg-white rounded-lg shadow-lg">Access Denied. You do not have permission to view this page.</div>;
        }
        switch (currentPage) {
            case 'Dashboard': return <Dashboard students={students} alumni={alumni} events={events} />;
            case 'Forums': return <ForumPage forums={forums} onNavigate={handleNavigate} />;
            case 'ForumThread': return <ForumThreadPage {...pageProps} db={db} userRole={userRole} />;
            case 'AddForumPost': return <FormPage title="Start New Discussion" fields={[ { name: 'title', label: 'Topic / Title', type: 'text' }, { name: 'question', label: 'Your Question', type: 'textarea' } ]} collectionName="forums" onNavigate={handleNavigate} db={db} />;
            case 'AddStudent': return <FormPage title="Add New Student" fields={[ { name: 'name', label: 'Student Name', type: 'text' }, { name: 'email', label: 'Email Address', type: 'email' }, { name: 'gradYear', label: 'Year of Graduation', type: 'number' } ]} collectionName="students" onNavigate={handleNavigate} db={db} />;
            case 'AddAlumni': return <FormPage title="Add New Alumni" fields={[ { name: 'name', label: 'Alumni Name', type: 'text' }, { name: 'email', label: 'Email Address', type: 'email' }, { name: 'gradYear', label: 'Year of Graduation', type: 'number' }, { name: 'company', label: 'Current Company', type: 'text' } ]} collectionName="alumni" onNavigate={handleNavigate} db={db} />;
            case 'AddEvent': return <FormPage title="Add New Session" fields={[ { name: 'name', label: 'Session Name', type: 'text' }, { name: 'type', label: 'Session Type', type: 'select', options: ['Alumni Meetup', 'Online Webinar', 'Panel Discussion', 'Career Guidance'], placeholder: 'Select a type' }, { name: 'date', label: 'Date', type: 'date' }, { name: 'location', label: 'Location / URL', type: 'text' } ]} collectionName="events" onNavigate={handleNavigate} db={db} />;
            case 'StudentsList': return <ListPage title="Students List" data={students} />;
            case 'AlumniList': return <ListPage title="Alumni List" data={alumni} />;
            case 'EventList': return <ListPage title="Interaction Sessions" data={events} />;
            case 'Mentorship': return <div className="text-center p-10 bg-white rounded-lg shadow-lg">Coming Soon: Mentorship Program</div>;
            case 'Career': return <div className="text-center p-10 bg-white rounded-lg shadow-lg">Coming Soon: Career Guidance</div>;
            default: return <Dashboard students={students} alumni={alumni} events={events} />;
        }
    };

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            <Sidebar isSidebarOpen={isSidebarOpen} onNavigate={handleNavigate} userRole={userRole} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} userRole={userRole} onLogout={handleLogout} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-10">
                    {renderPage()}
                </main>
            </div>
             {isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"></div>}
        </div>
    );
}
