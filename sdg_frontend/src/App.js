import React, { useEffect, useState } from 'react';
import { CompanyForm } from './components/companyform';
 
const baseUrl = 'localhost:8080'
const CompanyView = () => {
  const [companyData, setCompanyData] = useState({}) 
  let revenueSources = {};

  useEffect(() => {
    revenueSources = fetch(baseUrl + '/revenuesources')
  }, [])

  return ( 
    <div>
      <CompanyForm setCompanyData={setCompanyData} revenueSources={revenueSources} />
      <Chart companyData={companyData} />
    </div>
   );
}
 
export default CompanyView;

