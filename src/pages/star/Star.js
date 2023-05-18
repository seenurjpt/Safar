import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star.css";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Star() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [val, setVal] = useState({});
  const [star, setStar] = useState({});
  const [cap, setCap] = useState("Evaluate");

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouceOver = (value) => {
    setHoverValue(value);
  };
  const handleMouceLeave = () => {
    setHoverValue(undefined);
  };
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  const handleStar = (index) => {
    setStar({ ...val, Star: index + 1 });

    if (index + 1 === 1) {
      setCap("Bad");
    }else
    if (index + 1 === 2) {
      setCap("Average");
    }else
    if (index + 1 === 3) {
      setCap("Good");
    }else
    if (index + 1 === 4) {
      setCap("Very good");
    }else
    if (index + 1 === 5) {
      setCap("Excellent");
    } else {
      setCap("Evalute");
    }
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3004/ratings", star).then((result) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Star Rating in React</h1>
        </div>

        <div className="star">
          <textarea
            className="textarea"
            placeholder="What's your experience?"
            name="feedback"
            onChange={(e) => handleChange(e)}
          />
          <h2> {cap}</h2>
          <div>
            {stars.map((_, index) => {
              return (
                <>
                  <FaStar
                    key={index}
                    size={24}
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    onClick={() => {
                      handleClick(index + 1);
                      handleStar(index);
                    }}
                    onMouseOver={() => handleMouceOver(index + 1)}
                    onMouceOverLeave={handleMouceLeave}
                  />
                </>
              );
            })}
            <button
              className="button btn btn-primary"
              type="submit"
              // style={style.button}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// const style ={
//     container: {
//         display: "flex",
//         flexDirection:"column",
//         alignITEM:"center",
//     },
//     stars: {
//         display: "flex",
//         flexDirection: "row",
//       },
//       textarea: {

//         border: "1px solid #a9a9a9",
//         borderRadius: 5,
//         padding: 10,
//         margin: "20px 0",
//         minHeight: 100,
//         width: 300
//       },
//       button: {
//         border: "1px solid #a9a9a9",
//         borderRadius: 5,
//         width: 300,
//         padding: 10,
//       }

// }

export default Star;
