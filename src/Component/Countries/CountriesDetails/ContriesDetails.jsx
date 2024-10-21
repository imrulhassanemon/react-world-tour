import CountryData from "../../CountryData/CountryData";

const ContriesDetails = (props) => {
    return (
        <div>
            <h4>Country Details</h4>
            {/* <CountryData 
            con = {con}
            handel = {handel}
            handelVisitedFlag = {handelVisitedFlag}
            ></CountryData> */}
            <hr />
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default ContriesDetails;