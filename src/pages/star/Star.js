import {React,useState} from 'react'
import axios from 'axios'
import "./star.css"
import { FaStar } from "react-icons/fa";
import badrinath from "../../assets/packages_images/badrinath.jpeg"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Star = () => {
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
    setVal({ ...star, [e.target.name]: e.target.value });
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
    axios.post("http://localhost:3004/ratings", val).then((result) => {});
  };
  return (
  <div>
    
    <h1>Review your trip !!</h1>
<div class="base">
<form onSubmit={handleSubmit}>
    <div class="card rounded-5" style={{ width:" 20rem"}}>
        <img src= {badrinath} class="card-img-top p-3 rounded-5" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Badrinath</h5>

        <h3> {cap}</h3>
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
        <br/>
        <div class="mb-3">
        <label for="" class="form-label"></label>
        <textarea class="form-control" name="feedback" id="" rows="3"  onChange={(e) => handleChange(e)}/>
        </div>
        <button  class="btn btn-primary" type="submit">Submit</button>
        </div>
    </div>
    </form>
</div>  

</div>
    
  )
}

export default Star
