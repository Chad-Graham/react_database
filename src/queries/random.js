import database from '../components/database'

const styleObj = {
    fontSize: 13,
    background: "#282c34",
    color: "white",
    textAlign: "center",
    margin: 100,
    paddingTop: 2,
    paddingBottom: 5}

export const RANDOM = () => {

    var min = 0;
    var max = 138115;
    var random =
        Math.floor(Math.random() * (+max + 1 - +min)) + +min;

    const { city, city_latitude, city_longitude, country, date_time, duration, posted, record_id, report_link, shape, state, summary } = database[random]
    return (
        <><div style={styleObj}>
            <p>Record ID: {record_id} &nbsp;&nbsp;&nbsp;&nbsp; Date: {date_time} &nbsp;&nbsp;&nbsp;&nbsp; Posted: {posted}</p>{city}
            <p> </p></div></>
    )
} 