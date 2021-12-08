import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

export const CompanyForm = (props) => {
    const [companyName, setCompanyName] = useState('')
    const [revenueSources, setRevenueSources] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setCompanyData({
            'companyName': companyName, 
            'revenueSources': revenueSources
        });
    }
    const sourceSelection = Object.entries(props.revenueSources).reduce((res, source) => {
        const formattedSources = source[1].map((subsource) => {
            return `${source[0]}.${subsource}`
        })
        return [...res, ...formattedSources]
    }, [])
  
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
                <Select 
                value={revenueSources}
                multiple
                onChange={(e) => setRevenueSources([...e.target.value])}
                sx = {{ marginLeft: '20px' }}
                >
                {sourceSelection.map((source) => (
                    <MenuItem value={source}>{source}</MenuItem>
                    ))}
                </Select>
                <IconButton
                onClick={() => setRevenueSources([])}
                >
                    <BackspaceIcon />
                </IconButton>
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
