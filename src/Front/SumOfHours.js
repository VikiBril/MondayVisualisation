import React,{ useState, useEffect }  from 'react';
import { data, getMondayData } from "../Data/myMondayData";
import { barData } from "../Front/Charts";



export function sumOfHours(data){
    const sum = getMondayData();
    console.log(getMondayData());
    for(let i=0; i < sum.length;i++){
        for(let j=1; j < sum.length;i++){
            if(getMondayData.group.title[i] != getMondayData.group.title[j]){
                console.log(getMondayData.group.title[i]);
                console.log(getMondayData.group.title[j]);

            }
        }
    }
    
    // function parshNumber() {
    //     for (let i=0; i < barData.length; i++){
    //         barData.length[i].hoursColumn = parshInt(hoursColumn);
    //     }
    //     return{ }
    // }
    // const total = props.data.reduce(total+currentValue,0);
    // console.log(total);
};