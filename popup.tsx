import { Button, Form, Input } from "antd";
import { useStorage } from "@plasmohq/storage/hook"
import {Storage} from "@plasmohq/storage"
import React, { useEffect, useState } from "react"



const IndexPopup: React.FC = () => {
  const [ipAddress, setIpAddress] = useStorage("ipAddress",(v) => v === null ? "nothing": v)
  // const loadData = async (storage:Storage) => {
  //   const data = await storage.get("ipAddress")
  //   console.log(data)
  //   setIpAddress(data)
  // }
  // const saveToStorage = async (storage:Storage,ipAddress:string) => {
  //   await storage.set("ipAddress", ipAddress)
  //   setIpAddress(ipAddress)
  // }
  // const storage = new Storage()
//  useEffect(()=>{
//   console.log(`IP is ${ipAddress}`)
//   loadData(storage)})
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Please Enter Your Printer IP Address<p />
        <p />
        now save on {ipAddress != null ? ipAddress : "no data saved"}
        <p />

      </h2>
      <Form onFinish={(values)=>{
        console.log(`ip is ${values.ipaddress}`)
        setIpAddress(values.ipaddress)}}>
        <Form.Item label="IP Address" name="ipaddress">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">save</Button>
        </Form.Item>
      </Form>


    </div>

  )
}

export default IndexPopup
