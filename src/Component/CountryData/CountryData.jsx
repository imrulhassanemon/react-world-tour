
const CountryData = ({con}) => {
    console.log(con);
    return (
        <div>
            <p><small>Country Data : {con.name.common}</small></p>
        </div>
    );
};

export default CountryData;