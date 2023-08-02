import Navbar from "../../Components/Navbar/Navbar";
import style from "./About.module.css";
import ReactPlayer from "react-player";

function About() {
  return (
    <div>
      <>
        <div className={style.container}>
        <Navbar />

          <div className={style.video}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-GvsnH0jt3g&pp=ygUOZ3ltIG1vdGl2YXRpb24%3D"
              controls={true}
              playing={true}
              muted={true}
              loop={true}
              width="55vw"
              height="38vh"
              
            />
           <div className={style.videoContent}>
           <h1>Fitness Motivation</h1>
            <p>
              {" "}
              Building a gym website becomes a piece of cake once you work with
              Bronx. This neat template has everything to present your gym of
              fitness facility online in the best possible light. Why complicate
              and do things from scratch if you don’t have to? Bronx also
              doesn’t require coding and design knowledge; it even sorts you out
              with hosting and domain. This all-in-one pack is for everyone, so
              take action and you can have a website live VERY quickly.
            </p>
           </div>
          </div>

          <div className={style.video}>
         <div className={style.videoContent}>
         <h1>Why Choose US</h1>
            <p>
              Do you offer fitness classes for your gym business? Perhaps you
              should consider building your online visibility to showcase how
              you train and inspire people. Windy City CrossFit is a cool
              example of a simple yet elegant gym website design. The header
              displays a simple menu like getting started, member sign in and an
              off-canvas menu. Of course, the stunning logo projects a
              professional image as it sticks to the header at the center.
              Moreover, the magnificent random display of imagery in a masonry
              type makes a striking effect and adds a touch of creativity to the
              website. What’s more? It also looks interesting to the visitors as
              it uses the awesome parallax effect.
            </p>
         </div>
           
            <ReactPlayer
              url="https://www.youtube.com/watch?v=f6t9TQqdUzg&pp=ygUOZ3ltIG1vdGl2YXRpb24%3D"
              controls={true}
              playing={true}
              muted={true}
              loop={true}
              height="38vh"
              width="65vw"
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
