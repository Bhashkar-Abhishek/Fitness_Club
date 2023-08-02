import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Button from "@mui/material/Button";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import style from "./Home.module.css"

const image=[image1,image2,image3,image4]

function Home() :JSX.Element {
const [index,setIndex]=useState<number>(0)
const logedIn=localStorage.getItem("isLogedIn")
const navigate=useNavigate()

useEffect(()=>{
  const interval=setInterval(()=>{
    setIndex(index<(image.length-1)?index+1:0)
  },2000);
  return ()=>clearInterval(interval)
})
 
  return (
    <div>
      <>
      <div className={style.container}>
      <Navbar/>

        <div className={style.image}>
          <img src={image[index]} draggable="true" alt="image"/>
        </div>

        <div className={style.btn}>
          <p>Empower yourself to make the changes you need to make</p>
          {!logedIn?<Button variant="contained" onClick={()=>navigate("/login")} >Join Us</Button>:null}
        </div>

      </div>
      </>

    </div>
  )
}

export default Home