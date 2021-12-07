import { BarChart } from 'recharts';

export const Chart = (props) => {
    return (
        <>
            <h1>{props.companyData}</h1>
            <ResponsiveContainer>
                <BarChart data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                CHART GOES HERE with data
                {JSON.stringify(props.data)}
                {JSON.stringify(props.companyData)}
            </ResponsiveContainer>
        </>  
    )
}
