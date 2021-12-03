const express = require('express');

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
    const data = {
    
    }
    // create metrics from goal and add to db
    res.json()
})

app.get('/company', async(req, res) => {
    const deviceId = req.params.device_id
    const query = db.collection('metrics').where('device_id', '==', deviceId).limit(1)
    response = await query.get();
    if (response.size < 1) {
        res.json({status: 'No metrics found for id'});
    }
    else {
        res.json(response.docs()[0].data());
    }
})
