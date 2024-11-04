import {eachDayOfInterval, subDays} from "date-fns";
import styled from "styled-components";
import FilterData from "./Filter";
import Table from "./TableComponent";
import { H1 } from "./Cabins";
import {Area,CartesianGrid,XAxis,YAxis,AreaChart,Tooltip,ResponsiveContainer, Pie,PieChart, Legend, Cell} from 'recharts';
import { CabinData } from "../assets/Features/Cabins/Cabin";
//eslint-disable-next-line
const fakeChart=[
    { "label": "Feb 09", "TotalSales": 800, "extraSales": 800 },
    { "label": "Feb 10", "TotalSales": 750, "extraSales": 600 },
    { "label": "Feb 11", "TotalSales": 900, "extraSales": 700 },
    { "label": "Feb 12", "TotalSales": 820, "extraSales": 610 },
    { "label": "Feb 13", "TotalSales": 870, "extraSales": 680 },
    { "label": "Feb 14", "TotalSales": 920, "extraSales": 740 },
    { "label": "Feb 15", "TotalSales": 810, "extraSales": 650 },
    { "label": "Feb 16", "TotalSales": 860, "extraSales": 720 },
    { "label": "Feb 17", "TotalSales": 880, "extraSales": 730 },
    { "label": "Feb 18", "TotalSales": 930, "extraSales": 780 }
]
const PieCharts=[
    { days: "1 night", value: 5, color: "red" },
    { days: "2 nights", value: 7, color: "blue" },
    { days: "3 nights", value: 4, color: "green" },
    { days: "4 nights", value: 6, color: "yellow" },
    { days: "5 nights", value: 8, color: "purple" },
    { days: "6 nights", value: 9, color: "orange" },
    { days: "7 nights", value: 3, color: "pink" },
    { days: "8 nights", value: 10, color: "teal" },
    { days: "9 nights", value: 6, color: "brown" },
    { days: "10 nights", value: 5, color: "black" }
]



let Dashboard=()=>{
    let{isLoading,data}=CabinData();
    if(isLoading)return;
    console.log(data);
    let Div=styled.div`display:flex;
    justify-content:space-between;`;
    
    let days=eachDayOfInterval({start:subDays(new Date()-30).toUTCString(),end:new Date().toUTCString()});
    console.log(days);
    return <>
    <Div>
        <h1>Dashboard</h1>
        <div>
        <FilterData name={"dash"} options={[{value:"last 7days",label:"7"},{value:"last 90days",label:"90"},{value:"Today",label:"0"}]}/></div>
    </Div>
    <Table column={"repeat(4,1fr)"}>
        <Table.Header>
          <H1>Statistics</H1>
          <H1>TodaysActivity</H1>
          <H1>chart stay duration</H1>
          <H1>Chart sales</H1>
        </Table.Header>
    </Table>
  
    <p>Sales</p>
    <ResponsiveContainer width={"100%"} height={300}>
    <AreaChart data={data} >
    <Tooltip   contentStyle={{backgroundColor:"purple",color:"white"}} />
    <CartesianGrid  strokeDasharray={4}/>
    <XAxis dataKey={"TotalPrice"}  stroke="black"></XAxis>
    <YAxis unit={"$"}/>
    <Area dataKey={"capacity"} stroke="red" fill="orange" strokeWidth={2} name="Total Sales" unit={"$"}></Area>
    <Area dataKey={"discount"} stroke="blue" fill="red" name="Extra Sales"></Area>
    </AreaChart>
    <PieChart>
            <Pie  data={PieCharts} dataKey={"value"} nameKey={"days"} innerRadius={45} paddingAngle={3}   >\
             {PieCharts.map((entry)=>(<Cell fill={entry.color} key={entry.value}/>))}
            </Pie>
            <Tooltip/>
            <Legend verticalAlign="middle" layout="right"  />
        </PieChart>
    </ResponsiveContainer>
    

       
    </>
    
}
export default Dashboard;