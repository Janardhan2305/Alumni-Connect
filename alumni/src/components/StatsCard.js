
const StatsCard = ({ title, value, color }) => (
  <div className={`relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg text-white w-full md:w-56 h-40 bg-gray-800`}>
    <div className={`absolute -top-5 w-24 h-12 ${color} rounded-t-full`}></div>
    <div className="z-10 text-center"><h3 className="text-4xl font-bold">{value}</h3><p className="text-lg uppercase">{title}</p></div>
  </div>
);

export default StatsCard;