import logs from '../data/logs.js';
import Header from '../components/Header.jsx';
const Dashboard = () => {
    const totalCarbon = logs.reduce((total, log) => total + log.carbon, 0);
    return (
        <div>
            <Header title="Carbon Footprint Dashboard" />
            <h1>Your Total Carbon Footprint: {totalCarbon} kg CO2</h1>  
            <ul>
                {logs.map((log, id) => (
                    <li key={id}>{log.activity}: {log.carbon} kg CO2</li>
                ))}
            </ul>      
        </div>        
    )
}
export default Dashboard;