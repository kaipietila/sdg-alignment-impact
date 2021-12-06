export const Chart = (props) => {
    return (
        <div>
            CHART GOES HERE with data
            {JSON.stringify(props.data)}
            {JSON.stringify(props.companyData)}
        </div>
    )
}
