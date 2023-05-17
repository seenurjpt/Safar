import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../packages/Packages.css";
// import "../packages/search.css";
import bannerpack from "../../assets/packages_images/packages banner.jpg";

const Packages = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleBook = (data) => {
    navigate("/bookpackage", {
      state: {
        pack: data?.place,
      },
    });
  };

  const getApi = () => {
    axios.get("http://localhost:3004/packages").then((result) => {
      setData(result.data);
    });
  };
  const IMG = (imgName) => {
    return require(`../../assets/packages_images/${imgName}`);
  };

  useEffect(() => {
    getApi();
    console.log("Packages");
  }, []);

  return (
    <div className="background-color">
      <div>
        <div className="banner">
          <div className="pack-banner">
            <img src={bannerpack} alt="" />
          </div>

          <div className="abc1">
            <p className="pack-fade">Packages</p>
            <p className="pack-fade-text">Find Your Trip</p>
          </div>
        </div>
      </div>

      {/* <div id="wrap" style={{marginTop:"10rem", marginBottom:"-8rem", marginLeft:"35rem"}}>
  <form  autocomplete="on">
  <input id="search" name="search" type="text" placeholder="What're we looking for ?"/><input id="search_submit" value="Rechercher" type="submit"/>
  </form>
</div> */}

      <div className="wholee">
        {data.map((item) => {
          return (
            <div className="boss">
              <div className="rol">
                <article className="tx">
                  <p>{item.title}:</p>
                </article>
                <div className="pack_imag">
                  {item?.places.map((el) => {
                    return (
                      <>
                        <a
                          data-bs-target={`#${el.place}`}
                          data-bs-toggle="modal"
                        >
                          <img className="imag" src={IMG(el.img)} alt="" />
                        </a>
                        <div className="modal fade" id={el.place} tabIndex="-1">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <div>
                                  <h1 className="modal-title fs-1">
                                    {el.place}
                                  </h1>
                                  <a href={el.maploc}>📍{el.location}</a>
                                </div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="fl">
                                  <div className="ft">
                                    <p className="fs-6">⭐⭐⭐⭐⭐</p>
                                  </div>
                                  <hr />
                                  <article>
                                    <p>{el.description}</p>
                                  </article>
                                  <hr />
                                  <div className="fo">
                                    <p className="fs-5">
                                      <strong>{el.duration}</strong>
                                    </p>
                                    <p className="fs-5">
                                      <strong>₹ {el.price}/-</strong>
                                    </p>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                              <div className="modal-foote  d-flex justify-content-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => handleBook(el)}
                                  data-bs-target="#appoint"
                                  data-bs-dismiss="modal"
                                >
                                  Book
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
