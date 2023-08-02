import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import yoga from "../../assets/yoga.webp";
import bjj from "../../assets/bjj.jpg";
import boxing from "../../assets/boxing.webp";
import jujitsu from "../../assets/jujitsu.jpg";
import karate from "../../assets/karate.jpg";
import mma from "../../assets/mma.webp";
import taekwando from "../../assets/taekwando.webp";
import aerobic from "../../assets/aerobic.jpg";
import style from "./Training.module.css";
import { Button } from "@mui/material";

interface Image{
  url:string,
  text:string
}
const images: Image [] = [
  {
    url: yoga,
    text: "Yoga",
  },
  {
    url: aerobic,
    text: "Aerobic",
  },
  {
    url: boxing,
    text: "Boxing",
  },
  {
    url: bjj,
    text: "Brazilian Jiu-Jitsu (BJJ)",
  },
  {
    url: jujitsu,
    text: "Jujitsu",
  },
  {
    url: karate,
    text: "Karate",
  },

  {
    url: mma,
    text: "Mixed martial arts",
  }, {
    url: taekwando,
    text: "Taekwondo"},
];
function Training():JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const imageTOShow: Image [] = show ? images : images.slice(0, 4);

  return (
    <div className={style.main} style={{height:show?"100%":"100vh"}}>
        <div className={style.container}>
          <Navbar />

          {imageTOShow.map((item, index) => (
            <div key={index} className={style.card}>
              <img src={item.url} alt="image" />
              <p>{item.text}</p>
              <p> By Bhashkaracharya</p>
            </div>
          ))}
     
        </div>
        <div className={style.btn}>
        <Button variant="contained" onClick={() => setShow(!show)} >
            {!show?"Show More":"Show Less"}
          </Button>
          </div>
    </div>
  );
}

export default Training;
