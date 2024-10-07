import React, { useEffect, useState } from 'react'
import './Emplolyee.css'

const Employees = () => {
  
  const [data, setData] = useState<any>([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {

    const fetchData = async () => {

      try {
        setLoading(true)
        const response = await fetch("http://localhost:5085/api/Employee/employeeGetAll", {
          method: "GET",
          headers: { 'content-type': 'application/json' }
        });

        if(response) {
          const result = await response.json();
          setLoading(false)
          setData(result)
        }
        
      } 
      
      catch (error) {
        console.error("Error fetching data:", error);
      }
      
    };
    
    fetchData(); // Call the async function to fetch data
  }, []); // Empty dependency array to run once on component mount
  console.log(data)

   // Accessing data after it is fetched
   if(!data) {
    return null
   }

  return (
    <>
      <div className="container">
        <div className="row w-50 mt-4">
          <h1>Employees List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Department ID</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((employee: any) => (
                  <tr key={employee?.employeeId}>
                    <td>{employee?.employeeId}</td>
                    <td>{employee?.firstName}</td>
                    <td>{employee?.lastName}</td>
                    <td>{employee?.dateOfBirth}</td>
                    <td>{employee?.phoneNumber}</td>
                    <td>{employee?.email}</td>
                    <td>{employee?.address}</td>
                    <td>{employee?.departmentId}</td>
                    <td>{employee?.position}</td>
                    <td>{employee?.salary}</td>
                    <td>{employee?.startDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Employees