import logs from '../data/logs.js';
const Logs =()=>{
    return(
        <h1>
            <p>Logs greater than or equal to 4</p>
            <ul>
                {logs.filter(log => log.carbon >= 4).map((log, id) => (    
                    <li key={id}>{log.activity}: {log.carbon} kg CO2</li>           
))}
            </ul>
        </h1>
    )
}
export default Logs;