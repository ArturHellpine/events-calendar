import { useEffect, useState } from "react";
import axios from "axios";

const useGetHolidays = () => {
    const [holidays, setHolidays] = useState([])

    useEffect(() => {
        const getHolidays = async () => {
            try {
                const response = await axios.get('https://date.nager.at/api/v3/NextPublicHolidaysWorldwide')
                setHolidays(response.data)
            } catch (error) {

            }
        }
        getHolidays()
    }, [])

    return { holidays, setHolidays }
}

export default useGetHolidays
