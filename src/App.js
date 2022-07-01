import React, { useEffect } from "react"; 
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const stars = () => {
    
    let allStarts = [];
    for (let index = 0; index < 500; index++) {
      let rightPosition;
      let topPosition;

     
      rightPosition = Math.floor(Math.random() * (700 - 10 + 1) + 10);
      topPosition = Math.floor(Math.random() * (200 - 10 + 1) + 10);

      console.log("rightPosition", rightPosition, "topPosition", topPosition);

      allStarts.push(
        <StarOutlineOutlinedIcon
          key={index}
          style={{ 
            top: parseInt(topPosition),
            right: parseInt(rightPosition),
          }}
          className="mini_start"
        />
      );
    }
    return allStarts;
  };

   

  return (
    <div className="main">
      <div className="card">
        {stars()}
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 70, right: 30 }}
          className="star1"
        />
        <StarOutlineOutlinedIcon
          style={{
            color: "#f9c971",
            position: "absolute",
            top: 120,
            right: 50,
          }}
          className="star6"
        />
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 90, right: 80 }}
          className="star4"
        />
        <StarOutlineOutlinedIcon
          style={{
            color: "#f9c971",
            position: "absolute",
            top: 80,
            right: 130,
          }}
          className="star2"
        />
        <StarOutlineOutlinedIcon
          style={{
            color: "#f9c971",
            position: "absolute",
            top: 20,
            right: 140,
          }}
          className="star3"
        />
        <StarOutlineOutlinedIcon
          style={{
            color: "#f9c971",
            position: "absolute",
            top: 40,
            right: 170,
          }}
          className="star5"
        />
{/* //=========================================== */}
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 70, left: 30 }}
          className="star3"
        />
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 120, left: 50 }}
          className="star6"
        />
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 90, left: 80 }}
          className="star1"
        />
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 80, left: 130 }}
          className="star4"
        />
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 20, left: 140 }}
          className="star5"
        />
        <StarOutlineOutlinedIcon
          style={{ color: "#f9c971", position: "absolute", top: 40, left: 170 }}
          className="star2"
        />
        <img
          src="/mosque.png"
          className="imageStyle"
          
        />
        <div className="greeting">
          <p
          className="title"
            
          >
            Eid Mubarak
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "'MonteCarlo', cursive",
              margin: 0,
            }}
          >
            {" "}
            May Allah show his forgiveness in return for your sacrifices.Wish
            you and your family showered with Rahmah on this blessed day. Happy
            Eid ul Adha to you!
          </p>
          {/* <br />
          <br />
          <br /> */}
        </div>

        <div className="moon">
          <img
            src="/moon.png"
            style={{
              width: "50px",
              position: "absolute",
              top: "-28px",
              left: "-19px",
            }}
          />
        </div>
        <div className="light1">
          <div
            style={{
              width: "1px",
              height: "70px",
              background: "#f9c971",
              position: "absolute",
              top: "-85px",
            }}
          ></div>
          <img
            src="/lamp.png"
            style={{
              width: "15px",
              position: "absolute",
              top: "-19px",
              left: "-7px",
            }}
          />
        </div>
        <div className="light2">
          <div
            style={{
              width: "1px",
              height: "70px",
              background: "#f9c971",
              position: "absolute",
              top: "-85px",
            }}
          ></div>
          <img
            src="/lamp.png"
            style={{
              width: "15px",
              position: "absolute",
              top: "-19px",
              left: "-7px",
            }}
          />
        </div>
        <div className="light3">
          <div
            style={{
              width: "1px",
              height: "70px",
              background: "#f9c971",
              position: "absolute",
              top: "-85px",
            }}
          ></div>
          <img
            src="/lamp.png"
            style={{
              width: "15px",
              position: "absolute",
              top: "-19px",
              left: "-7px",
            }}
          />
        </div>

        
      </div>
    </div>
  );
}

export default App;
