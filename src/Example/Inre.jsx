import Counter from "./Pagination";

let Pagination=()=>{
return<>
<h1>hii</h1>
<Counter>
        <Counter.Number></Counter.Number>
    <Counter.Label>Page</Counter.Label>
    <Counter.Increment>+</Counter.Increment>
    <Counter.Decrement>-</Counter.Decrement>
    </Counter>
    <Counter>
    <Counter.Label>Page</Counter.Label>
    <Counter.Increment>⏮️</Counter.Increment>
    <Counter.Number></Counter.Number>
    <Counter.Decrement>⏭️</Counter.Decrement>
    </Counter></>
    
}
export default Pagination;