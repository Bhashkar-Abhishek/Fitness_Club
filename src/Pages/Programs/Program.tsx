import Navbar from '../../Components/Navbar/Navbar'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./Program.module.css"
import yoga from "../../assets/yoga.webp"
import bjj from "../../assets/bjj.jpg"
import boxing from "../../assets/boxing.webp"
import jujitsu from "../../assets/jujitsu.jpg"
import karate from "../../assets/karate.jpg"
import mma from "../../assets/mma.webp"
import taekwando from "../../assets/taekwando.webp"
import aerobic from "../../assets/aerobic.jpg"

interface Image{
  url:string,
  text:string
}
const images: Image[] = [
  {
    url: yoga,
    text: "It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body.Yoga is for everyone.",
  },
  {
    url: aerobic,
    text: "Aerobic exercise provides cardiovascular conditioning. The term aerobic actually means with oxygen, which means that breathing controls the amount of oxygen that can make it to the muscles to help them burn fuel and move.",
  },
  {
    url: boxing,
    text: "Sport, both amateur and professional, involving attack and defense with the fists. Matched in weight and ability, boxing contestants try to land blows hard and often with their fists, each attempting to avoid the blows of the opponent.",
  },
  {
    url: bjj,
    text: "Brazilian Jiu-Jitsu (BJJ) is a grappling-based martial art whose central theme is the skill of controlling a resisting opponent in ways that force him to submit.",
  },
  {
    url: jujitsu,
    text: "Jujitsu, Japanese jūjitsu (“gentle art”), form of martial art and method of fighting that makes use of few or no weapons and employs holds, throws, and paralyzing blows to subdue an opponent.",
  },
  {
    url: karate,
    text: "Karate, (Japanese: “empty hand”) unarmed martial-arts discipline employing kicking, striking, and defensive blocking with arms and legs.",
  },

  {
    url: mma,
    text: "Mixed martial arts (MMA), hybrid combat sport incorporating techniques from boxing, wrestling, judo, jujitsu, karate, Muay Thai (Thai boxing), and other disciplines.",
  }, {
    url: taekwando,
    text: "Taekwondo is one of the most systematic and scientific Korean traditional martial arts, that teaches more than physical fighting skills. It is a discipline that shows ways of enhancing our spirit and life through training our body and mind.",
  },
];
function Program(): JSX.Element {
  const settings={
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable:true,
    focusOnSelect:true,
    pauseOnDotHover:true,
    pauseOnHover:true,
    swipeToSlide:true,
  }
  return (
    <div className={style.container}>
      <Navbar/>
      <Slider {...settings}>
        {
          images.map((img,index)=>(
             <div key={index} className={style.image}>
              <img src={img.url} alt='image' />
              <p>{img.text} </p>
             </div>
          ))
        }
      </Slider>

    </div>
  )
}

export default Program