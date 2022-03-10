import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
//import { getMondayData } from "../Data/myMondayData";
//import  { sumOfHours }  from "../Front/SumOfHours";
import { getEmployeeData } from "../Data/employeeData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const barOptions = {
  type: 'bar',
  options: {
    plugins: {
      title:{
        display: true,
        text: 'Monday Visualization'
      },
    },
    responsive: true,
    scales: {
      x:{
        stacked: true,
      },
      y:{
        stacked: true
      }
    }
  }
};

export default function Charts({}) {
  const [localData, setLocalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      getEmployeeData()
      //getMondayData()
        .then((res) => {
          console.log(res);
          const dataManipulated = res.data2.map(item => {
            return {
              person_project:item.column_values[4].text ,
              person_name: item.column_values[1].text,
              person_hours: Number(item.column_values[2].value.replace(/\"/g, ''))
            }
          })
          console.log(dataManipulated);
          // setLocalData(res.data2);
          setLocalData(dataManipulated);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    fetchData();
    console.log(localData);
  }, []);

  useEffect(() => {
    console.log(localData, 'local')
    const newData = localData.map(item => item.person_hours)
    console.log(newData)
  }, [localData])

 
const barData = React.useMemo(() => {
  const filteredData = new Set(localData.map((item => item.person_name)));
  // const filteredArr = new Set(localData.map((item) => item.column_values[1].text));
  // console.log(filteredArr);
  
  return {
    labels: Array.from(filteredData),
    datasets: localData.map((item) => {
      const { group, hours } = item;
      //const hoursColumn = item.column_values.find(column => column.id === 'numbers');
      //console.log(hoursColumn);

      // const total = sumOfHours();
      // console.log(total);

      console.log(item.person_project)
      return {
        // label: JSON.stringify(item.person_project),
        label: JSON.stringify(item.person_project),
        data: localData.map(item => item.person_hours),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 0.7
      };
    }),
  };
}, [localData]);
 
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <Bar data={barData} options={barOptions} height={400} width={600} />
    </div>
  );
}
