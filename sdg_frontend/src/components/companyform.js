import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

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
        <Box 
        sx={{
            marginTop: '20px',
            marginLeft: '20px',
        }}>
          <form onSubmit = {handleSubmit}>
                <TextField
                id="company-name"
                label="Company Name"
                defaultValue={companyName || ""}
                onChange={(e) => setCompanyName(e.target.value)}
                sx = {{ marginLeft: '20px' }}
                />
                <TextField
                id="revenue-source"
                label="Revenue Source"
                defaultValue={revenueSources || ""}
                onChange={(e) => setRevenueSources(e.target.value)}
                sx = {{ marginLeft: '20px' }}
                />
                <IconButton 
                sx = {{ marginLeft: '20px', paddingTop: '15px', paddingBottom: '15px'}}
                variant="outlined" 
                type='submit'>
                    <KeyboardReturnIcon />
                </IconButton>
        </form>
    </Box>
      );
  }
