const express = require('express');
const calc = require('./calc');
const stores = require('./stores')

const app = express();

app.use(express.json());
const port = process.env.PORT || '8080';
app.listen(port, () => {
    console.log(`SDG backend running on ${port}`);
});

app.get('/health', async(req, res) => {
    res.json({status: 'OK!'})
})

app.post('/company', async(req, res) => {
    const companyData = {
        name: req.body.companyName,
        revenueSources: req.body.revenueSources
    }
    const company = calc.calculateSDGAlignment(companyData)
    res.json(company)
})

app.get('/revenuesources', async(req, res) => {
    const hierarchy = stores.industryHierarchy
    res.json(hierarchy)
})
