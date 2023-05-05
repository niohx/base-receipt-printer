import { Button } from "antd";
import { useEffect, useState } from "react"
import { Storage } from "@plasmohq/storage"


const IndexPopup:React.FC=()=> {
  const [data, setData] = useState(null)
  useEffect(()=>{
    const strage = new Storage()
    
    strage.get("ip").then((res)=>{
      console.log(res)
      setData(res)})
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Please Enter Your Printer IP Address<p/>
        <p/>
        now save on {data!=null?data:"no data saved"}
        <p/>
        
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <Button onClick={()=>{
        const storage = new Storage()
        storage.set("ip",data)
      }}>save</Button>
    </div>
    
  )
}

export default IndexPopup
