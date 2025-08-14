

import StatsCard from '../components/StatsCard';
import { useState } from 'react';
import { ResponsiveContainer,BarChart,XAxis,YAxis } from 'recharts';
import { Tooltip,Legend,Bar,PieChart,Pie,Cell } from 'recharts';

const Dashboard = ({ students, alumni, events }) => {
    // --- DYNAMIC CHART DATA ---
    // Process events data for the bar chart
    const eventsByYear = events.reduce((acc, event) => {
        const year = new Date(event.date).getFullYear();
        if (year) {
            acc[year] = (acc[year] || 0) + 1;
        }
        return acc;
    }, {});

    const barChartData = Object.keys(eventsByYear).map(year => ({
        name: year,
        "No of Events": eventsByYear[year],
    }));

    // Process alumni data for the pie chart
    const workingAlumni = alumni.filter(a => a.company && a.company.trim() !== '').length;
    const otherAlumni = alumni.length - workingAlumni;

    const pieChartData = [
        { name: 'Working', value: workingAlumni },
        { name: 'Status Unknown', value: otherAlumni },
    ];
    const PIE_COLORS = ['#0088FE', '#FF8042'];

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => setActiveIndex(index);

    return (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 justify-items-center">
                <StatsCard title="Alumni" value={alumni.length} color="bg-gray-700" />
                <StatsCard title="Students" value={students.length} color="bg-blue-500" />
                <StatsCard title="Sessions" value={events.length} color="bg-gray-700" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Sessions by Year</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barChartData}>
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip wrapperClassName="!bg-gray-700 !border-0 !text-white !rounded-lg" />
                            <Legend />
                            <Bar dataKey="No of Events" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Status of Alumni</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Legend />
                            <Pie
                                activeIndex={activeIndex}
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Dashboard;