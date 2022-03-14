import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
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

const barOptions = {
  type: 'bar',
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Monday Visualization'
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
}

export default function Charts({}){
  const [localData, setLocalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      getEmployeeData()
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

const barData = React.useMemo(() => {
  const filteredData = new Set(localData.map((item => item.person_name)));

    return{
      labels: Array.from(filteredData),
      datasets: localData.map((item) => {
        //const {client, hours } = item;
        console.log(item.person_project);
        return {
          label: JSON.stringify(item.person_project),
          data: localData.map(item => item.person_hours),
          stack: 'Stack 0',
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
  },[localData]);

  // const barOptions = {
  //   type: 'bar',
  //     options: {
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Monday Visualization'
  //         },
  //       },
  //       responsive: true,
  //       scales: {
  //         x: {
  //           stacked: true,
  //         },
  //         y: {
  //           stacked: true
  //         }
  //       }
  //     }
  // }

  if(isLoading){
      return <div>Loading...</div>
    }
    return(
      <div>
        <Bar data={barData} options={barOptions} height={400} width={600}/>
      </div>
    );

}
  

  

// const createBarChart = () => {


//   const labels = [1,2,3,4,5];
//   //const labelsText = [1,2,3];
//   //console.log(labelsText);
  
//   const data = {
//     labels: [1,2,3],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data:[10,20] ,
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         stack: 'Stack 0',
//       },
//       {
//         label: 'Dataset 2',
//         data: [10,20],
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         stack: 'Stack 0',
//       },
//       {
//         label: 'Dataset 3',
//         data: labels,
//         backgroundColor: 'rgba(255, 205, 86, 0.2)',
//         stack: 'Stack 0',
//       },
//     ]
//   };

//   const options = {
//     type: 'bar',
//     data: data,
//     options: {
//       plugins: {
//         title: {
//           display: true,
//           text: 'Bar Chart - Stacked'
//         },
//       },
//       responsive: true,
//       scales: {
//         x: {
//           stacked: true,
//         },
//         y: {
//           stacked: true
//         }
//       }
//     }
//   };

//   return {
//     //actions: actions,
//     options: options,
//     data
//   }
// }

// const chartConfiguration = createBarChart();
// console.log(chartConfiguration);


// const ChartComponent = () => {
// return (
//   <div>
//     <div>Title</div>
//     <div>content</div>
//     <Bar data={chartConfiguration.data} options={chartConfiguration.options} height={400} width={600} />
//   </div>
// )

// }

// export default ChartComponent;
