import React, { useEffect, useState } from 'react';
import { CompanyForm } from './components/companyform';
import { Chart } from './components/chart';
import axios from 'axios';
 
const baseUrl = 'http://localhost:8080'
export const CompanyView = () => {
  const [companyData, setCompanyData] = useState({}) 
  const [revenueSources, setRevenueSources] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(baseUrl + '/revenuesources').then((response) => setRevenueSources(response.data))
  }, []);
  
  useEffect(() => {
    async function createCompany() {
      let payload = companyData;
      let res = await axios.post(baseUrl + '/companyalignment', payload);
  
      setData(res.data);
    }
    if (Object.keys(companyData).length) {
      createCompany()
    }
  }, [companyData]);
  console.log(data)
  return ( 
    <div>
      <div>
        <CompanyForm setCompanyData={setCompanyData} revenueSources={revenueSources} />
      </div>
      <div>
        <Chart data={data} companyData={companyData} />
      </div>
    </div>
   );
}
