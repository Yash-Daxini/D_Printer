import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddNewLaptop = () => {
  const [obj, setObj] = useState({});
  const [previewObj, setPreviewObj] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="text-center container my-3">
      {previewObj === 0 ? <h1 className="my-3">Fill The Card To Add Laptop And It's Features</h1> : <h1 className="my-3">Your Card Preview</h1>}

      {previewObj === 0 ?
        <div className="container-md d-flex justify-content-center flex-column align-items-center">
          <div className="card my-3 mx-3 w-100 border-0">
            <div className="card-body">
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.LaptopImage}
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, LaptopImage: e.target.value });
                }}
              />
            </div>
            <div className="card-body text-black">
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Laptop Name
              </label>
              <input
                type="text"
                className="form-control"
                value={obj.LaptopName}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, LaptopName: e.target.value });
                }}
              />
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Laptop Model
              </label>
              <input
                type="text"
                className="form-control"
                value={obj.LaptopModel}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, LaptopModel: e.target.value });
                }}
              />
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Laptop Maker
              </label>
              <input
                type="text"
                className="form-control"
                value={obj.LaptopMaker}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, LaptopMaker: e.target.value });
                }}
              />
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Laptop Price
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.LaptopPrice}
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, LaptopPrice: e.target.value });
                }}
              />

            </div>
          </div>
          <div className="text-center w-100">
            <label htmlFor="exampleInputEmail1" className="form-label my-2">
              Enter Laptop Description
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={obj.LaptopDescription} onChange={(e) => {
              setObj({ ...obj, LaptopDescription: e.target.value });
            }}></textarea>
          </div>
        </div>
        :
        <div className="container w-100">
          <div className="card my-3 mx-3 text-center border-0">
            <img
              src={obj.LaptopImage}
              className="card-img-top"
              alt="Can't Load"
            />
            <div className="card-body text-black">
              <h5 className="card-title text-black">
                <b>{obj.LaptopName}</b>
              </h5>
              <h5 className="card-title text-black">{obj.LaptopModel}</h5>
              {obj.LaptopMaker}
              <h6>₹ {obj.LaptopPrice}</h6>
              {/* <button className="mx-4 my-2 btn btn-outline-info w-50">Add Printer Details</button>
              <button className="mx-4 my-2 btn btn-outline-info w-50">Go To See Your Changes</button> */}
            </div>
          </div>
        </div>
      }


      <button
        type="submit"
        className="btn btn-outline-success my-4 w-50"
        onClick={(e) => {
          e.preventDefault();
          fetch(
            "https://62da16fd5d893b27b2f0ebab.mockapi.io/laptop/",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(obj)
            }
          ).then((res) => {
            // console.log(res.status);
            res.json().then((data) => {
            });
          });
          setObj({
            ...obj,
            LaptopName: "",
            LaptopModel: "",
            LaptopMaker: "",
            LaptopDescription: "",
            LaptopPrice: "",
            LaptopImage: "",
          });
          setPreviewObj(0);
          navigate("./../AddNewLaptop");
        }
        }
      >
        Add Laptop Details
      </button>

      <button className="mx-4 my-4 btn btn-outline-info w-50" onClick={() => {
        if (previewObj === 1) {
          setPreviewObj(0);
        }
        else {
          setPreviewObj(1);
        }
        navigate("./../AddNewLaptop")
      }}>
        {previewObj === 1 ? <span>Go to Add Page</span> : <span>See the Preview</span>}
      </button>



      <button className="mx-4 my-4 btn btn-outline-info w-50" onClick={() => {
        navigate("./../Laptops")
      }}>
        Go To See Your Changes
      </button>

    </div>
  );
};

export default AddNewLaptop;
