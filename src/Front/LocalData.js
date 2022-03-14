import React, { useState, useEffect } from "react";
import { getEmployeeData } from "../Data/employeeData";

function LocalingData() {
    const [localData, setLocalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        function fetchData() {
            setIsLoading(true);
            getEmployeeData()
            .then((res) => {
                console.log(res);
                const dataManipulated = res.data2.map(item => {
                    return {
                        person_project: item.column_value[4].text,
                        person_name: item.column_value[1].text,
                        person_hours: Number(item.column_value[2].column_value.replace(/\"/g, ''))
                    }
                })
                console.log(dataManipulated);
                setLocalData(dataManipulated);
            })
            .catch((error)=> {
                console.log(error);
            })

        }
        fetchData();
        console.log(localData);
    },[]);
    useEffect(() => {
        console.log(localData,'local')
        const newData = localData.map(item => item.person_hours)
        console.log(newData)
    },[localData])

const barData = React.useMemo(()=> {
    const filteredData = new Set(localData.map((item => item.person_name)));
})


}
export default LocalingData;