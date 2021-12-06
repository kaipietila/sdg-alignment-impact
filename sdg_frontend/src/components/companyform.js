import axios from 'axios';

export const CompanyForm = (props) => {
    const handleSubmit = (data) => {
        console.log(`submitted form with ${data}`)
        axios.post('localhost:8080/company', data={data}).then(response.body)
    }
  
    return (
        <div>
          <form onSubmit = {handleSubmit}>
            <input value = {companyName}></input>
            <input value = {revenueSource}></input>
            <button type = 'submit'>Submit company data</button>
        </form>
        </div>
      );
  }
