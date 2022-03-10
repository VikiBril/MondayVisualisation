import React, { useState, useEffect } from "react";

const employees = React.useMemo(() => {
    const filteredNames = new Set(localData.map((item) => item.column_values[1].text));
    console.log(filteredNames);
    
    return {
      labels: Array.from(filteredNames),
      datasets: localData.map((item) => {
        const { employees, projects } = item;
        //const hoursColumn = item.column_values.find(column => column.id === 'numbers');
        //console.log(hoursColumn);

        // const total = sumOfHours();
        // console.log(total);

        return {
          label: JSON.stringify(item.column_values[1].text),
           /*data: hoursColumn , */
          //backgroundColor: "rgba(155, 99, 132, 0.5)",
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
/*** */
// const employees = React.useMemo(() => {
//     const filteredNames = new Set(localData.map((item) => item.column_values[1].text));
//     console.log(filteredNames);
    
//     return {
//       labels: Array.from(filteredNames),
//       datasets: localData.map((item) => {
//         const { employees, projects } = item;
//         //const hoursColumn = item.column_values.find(column => column.id === 'numbers');
//         //console.log(hoursColumn);

//         // const total = sumOfHours();
//         // console.log(total);

//         return {
//           label: JSON.stringify(item.column_values[1].text),
//            /*data: hoursColumn , */
//           //backgroundColor: "rgba(155, 99, 132, 0.5)",
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//           ],
//           borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//           ],
//           borderWidth: 0.7
//         };
//       }),
//     };
//   }, [localData]);


  /****** */
//   const barData = React.useMemo(() => {
//     const filteredArr = new Set(localData.map((item) => item.group.title));
//     console.log(filteredArr);
    
//     return {
//       labels: Array.from(filteredArr),
//       datasets: localData.map((item) => {
//         const { group, hours } = item;
//         //const hoursColumn = item.column_values.find(column => column.id === 'numbers');
//         //console.log(hoursColumn);

//         // const total = sumOfHours();
//         // console.log(total);

//         return {
//           label: JSON.stringify(item.group.title),
//            /*data: hoursColumn , */
//           //backgroundColor: "rgba(155, 99, 132, 0.5)",
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//           ],
//           borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//           ],
//           borderWidth: 0.7
//         };
//       }),
//     };
//   }, [localData]);
//   //console.log("barData", barData);
  