import React, { useEffect, useState } from 'react';

const GetCompanyForm = (props) => {
  const handleSubmit = (data) => {

  }

  return (
      <div>
        <form>
          <label>
            Company:
            <input type="text" name="company" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

const CompanyList = (companies) => {
  return (
    <div>
      Company List 
      <li>
      {companies.map((company) => (
        <ul> {company.name} </ul>
      ))}
      </li>
    </div>
  )
}


 
const baseUrl = 'localhost:8080/company'
const CompanyView = (props) => {
  const [selectedCompany, setSelectedCompany] = useState('') 
  let data;

  useEffect(() => {
    data = fetch(baseUrl)
  }, [])

  return ( 
    <div>
      <GetCompanyForm setSelectedCompany={setSelectedCompany} />
      <CompanyList companies={data} />
      
    </div>
   );
}
 
export default CompanyView;

