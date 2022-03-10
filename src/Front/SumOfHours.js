import React,{ useState, useEffect }  from 'react';
import {  getMondayData } from "../Data/myMondayData";
import { barData } from "../Front/Charts";



// export function sumOfHours(){
//     const sum = getMondayData();
//     console.log(getMondayData());
//     for(let i=0; i < sum.length;i++){
//         for(let j=1; j < sum.length;i++){
//             if(getMondayData.group.title[i] != getMondayData.group.title[j]){
//                 console.log(getMondayData.group.title[i]);
//                 console.log(getMondayData.group.title[j]);

//             }
//         }
//     }
    
    // function parshNumber() {
    //     for (let i=0; i < barData.length; i++){
    //         barData.length[i].hoursColumn = parshInt(hoursColumn);
    //     }
    //     return{ }
    // }
    // const total = props.data.reduce(total+currentValue,0);
    // console.log(total);
// };

  

  /*
   const barData = React.useMemo(() => {
    const filteredData = new Set(localData.map((item => item.person_name)));
    const filterProj = new Set(localData.map((item =>item.person_project)));
    return{ 
      labels: Array.from(filteredData),
      datasets: filteredData.map((item =>{
        const { project, hours } = item;
        project = filteredData.person_project;
        hours = filteredData.person_hours;
        let i=0;
        let j= i+1;
        const total =0;
        return {
          label:filterProj ,
          data: filteredData.reduce((total, person_hours) => {
            if(filteredData.person_name[i] == filteredData.person_name[j]) {
              total += person_hours[j];
              j++;
            }
            i++
            console.log(filteredData);
          }),
          backgroundColor:[
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ]
        }
      })
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(255, 99, 132, 0.2',
            borderColoer: 'rgb(255, 99, 132)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColoer:'rgb(255, 159, 64)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColoer:'rgb(255, 205, 86)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColoer:'rgb(75, 192, 192)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(54, 162, 235, 0.2)' ,
            borderColoer: 'rgb(54, 162, 235)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColoer: 'rgb(153, 102, 255)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(201, 203, 207, 0.2)',
            borderColoer:'rgb(201, 203, 207)'
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor:'rgba(297, 203, 207, 0.2)',
            borderColoer:'rgb(297, 203, 207)' ,
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(159, 203, 207, 0.2)',
            borderColoer:'rgb(159, 203, 207)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(222, 203, 207, 0.2)',
            borderColoer:'rgb(222, 203, 207)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(249, 203, 207, 0.2)',
            borderColoer:'rgb(249, 203, 207)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(195, 203, 207, 0.2)',
            borderColoer:'rgb(195, 203, 207)',
          },
          {
            label: filteredData.person_project.map(item => item.person_project),
            data: filteredData.person_hours.find(person =>person.text === person),
            backgroundColor: 'rgba(199, 203, 200, 0.2)',
            borderColoer:'rgb(199, 203, 200)',
          },
        ]

      },
      */