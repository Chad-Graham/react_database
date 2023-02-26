import database from '../components/database'

export const RANDOM = () => {

    var min = 0;
    var max = 138115;
    var random =
        Math.floor(Math.random() * (+max + 1 - +min)) + +min;

    const { city, city_latitude, city_longitude, country, date_time, duration, posted, record_id, report_link, shape, state, summary } = database[random]
    return (
        <><p>Record ID: {record_id} &nbsp;&nbsp;&nbsp;&nbsp; Date: {date_time} &nbsp;&nbsp;&nbsp;&nbsp; Posted: {posted}</p>{city}</>
    )
} 