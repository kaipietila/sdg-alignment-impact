import { 
    BarChart, 
    ResponsiveContainer,
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    Legend, 
    ReferenceLine,
    Bar } from 'recharts';
import { Header } from './header';

export const Chart = (props) => {
    const CustomTooltip = ({ active, payload, label }) => {
        console.log(payload)
        if (active && payload && payload.length) {
          return (
            <div>
              <p back>{`${label} : ${payload[0].payload.verbose}`}</p>
            </div>
          );
        }
        return null;
      };
    let header;
    let subheader;
    if (props.companyData.companyName) {
        header = `SDG alignment for company: ${props.companyData.companyName}`
        subheader =`Calculated based on revenue sources: ${props.companyData.revenueSources}`
        
    } else {
        header = 'No company submitted!'
        subheader= ''
    }

    if (!props.data.length) {
        return (
            <Header header={header} />
        )
    } else {
        return (
            <>
                <Header header={header} subheader={subheader} />
                <ResponsiveContainer width="100%" height={900}>
                    <BarChart
                    width={500}
                    height={600}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 300,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="goal" angle={-35} interval={0} tickMargin={15} textAnchor="end"
                        />
                        <YAxis type='number' domain={['dataMin-2', 'dataMax+1']}/>
                        <Tooltip content={<CustomTooltip />}/>
                        <Legend verticalAlign="top"/>
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="alignment" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </>  
        )
                }
}
