const express = require('express');
const cors = require('cors');
const calc = require('./calc');
const stores = require('./stores');
const { response } = require('express');

const app = express();
app.use(cors())

app.use(express.json());
const port = process.env.PORT || '8080';
app.listen(port, () => {
    console.log(`SDG backend running on ${port}`);
});

app.get('/health', async(req, res) => {
    res.json({status: 'OK!'})
})

app.post('/companyalignment', async(req, res) => {
    if (!Object.keys(req.body).length) {
        res.json({status: 'no data!'})
    } else {
        const companyData = {
            name: req.body.companyName,
            revenueSources: req.body.revenueSources
        }
        const companyalignments = calc.calculateSDGAlignment(companyData)
        res.json(companyalignments)
    }
});

app.get('/revenuesources', async(req, res) => {
    const hierarchy = stores.industryHierarchy
    res.json(hierarchy)
})
