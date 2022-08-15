import React, { useState, useEffect, } from 'react';
import './App.css';


 
function App() {
    const [data, getData] = useState([])
    const URL = 'https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
 
    return (
        <>
            <h1>Employees details list</h1>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Date_of_Birth</th>
                    <th>Address</th>
                    <th>Date_of_Joining</th>
                    <th>Salary</th>
                    <th>Designation</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td><a href="/https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/Alex">{item.id}</a></td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.date_of_birth}</td>
                        <td>{item.address}</td>
                        <td>{item.date_of_joining}</td>
                        <td>{item.salary}</td>
                        <td>{item.designation}</td>
                    </tr>
                ))}
                
            </tbody>
            
            
        </>
        
    );
}

export default App;