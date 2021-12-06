import { useState } from 'react';

export const CompanyForm = (props) => {
    const [companyName, setCompanyName] = useState('')
    const [revenueSources, setRevenueSources] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setCompanyData({
            'companyName': companyName, 
            'revenueSources': [revenueSources]
        });
    }
  
    return (
        <div>
          <form onSubmit = {handleSubmit}>
            <label>
                Company name:
            <input
            type = 'text'
            defaultValue = {companyName || ""}
            onChange = {(e) => setCompanyName(e.target.value)}
            />
            </label>
            <label>
                Company revenue sources(enter e.g. fishing.fishFarming, fishing.tuna):
            <input 
            type = 'text'
            defaultValue = {revenueSources || ""}
            onChange = {(e) => setRevenueSources(e.target.value)}
            />
            </label>
            <button type = 'submit'>Submit company data</button>
        </form>
    </div>
      );
  }
