import {Eye,Pencil,Trash2,Search} from 'lucide-react';

const AlumniList = () => {
    const alumniData = [
        { usn: '1RV20IS034', name: 'Yashwanth', phone: '5689741230', status: 'Job', email: 'yash@gmail.com', university: 'Harvard', company: 'Google' },
        { usn: '1RV17IS006', name: 'Anup Kumar P', phone: '9551515261', status: 'Entrepreneur', email: 'anup@gmail.com', university: 'MIT', company: 'TCS' },
        { usn: '1RV18IS061', name: 'Arun', phone: '9086666666', status: 'Job', email: 'arun12345@gmail.com', university: '', company: '' },
        { usn: '1RV15IS143', name: 'Rohit Verma', phone: '8456173898', status: 'Job', email: 'rohitverma12351@gmail.com', university: 'ISB', company: 'Fivetran' },
    ];
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Alumni List</h3>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
                <input type="text" placeholder="Search based on USN, Name, Role, Specialization, University, degree, company name" className="w-full p-2 border-0 focus:ring-0"/>
                <button className="p-2 bg-gray-100 hover:bg-gray-200"><Search size={20} className="text-gray-600"/></button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['USN', 'Name', 'Phone', 'Status', 'Email', 'University', 'Company', 'Profile', 'Edit', 'Delete'].map(head => <th key={head} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{head}</th>)}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {alumniData.map(alumnus => (
                            <tr key={alumnus.usn}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alumnus.usn}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alumnus.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumnus.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumnus.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumnus.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumnus.university}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alumnus.company}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900"><Eye size={18}/></button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <button className="text-green-600 hover:text-green-900"><Pencil size={18}/></button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <button className="text-red-600 hover:text-red-900"><Trash2 size={18}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AlumniList;