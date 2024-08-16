"use client";
import CounterComponent from "@/app/components/CounterComponent/CounterComponent";

export default function Home() {
    
    const temItems = [1,2,3,4,5,6,7,8,9,10];
    
    function countChanged(count: number) {
      console.log(`event change count change to ${count}`);
    }
    
  return (
    <>
      Home Page
        <br/>
        <br/>
        <br/>
        <br/>
        
        {temItems.map((item, index) => (
            <CounterComponent initialCount={item} countChanged={countChanged} key={item}></CounterComponent>
        ))}
    </>
  );
}
