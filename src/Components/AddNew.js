import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddNew = () => {
  const [obj, setObj] = useState({});
  const [previewObj, setPreviewObj] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="text-center container my-3">
      {previewObj === 0 ? <h1 className="my-3">Fill The Card To Add Printer And It's Features</h1> : <h1 className="my-3">Your Card Preview</h1>}

      {previewObj === 0 ?
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="card my-3 mx-3 w-50">
            <div className="card-body">
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.PrinterImage}
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, PrinterImage: e.target.value });
                }}
              />
            </div>
            <div className="card-body text-black">
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Printer Name
              </label>
              <input
                type="text"
                className="form-control"
                value={obj.PrinterName}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, PrinterName: e.target.value });
                }}
              />
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Printer Model
              </label>
              <input
                type="text"
                className="form-control"
                value={obj.PrinterModel}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, PrinterModel: e.target.value });
                }}
              />
              <hr />
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Printer Maker
              </label>
              <input
                type="text"
                className="form-control"
                value={obj.PrinterMaker}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, PrinterMaker: e.target.value });
                }}
              />
              <hr />
              <label htmlFor="exampleInputEmail1" className="form-label my-2">
                Enter Printer Printer Price
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={obj.PrinterPrice}
                aria-describedby="emailHelp"
                onChange={(e) => {
                  setObj({ ...obj, PrinterPrice: e.target.value });
                }}
              />
              <hr />

            </div>
          </div>
          <div className="text-center w-50">
            <label htmlFor="exampleInputEmail1" className="form-label my-2">
              Enter Printer Description
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={obj.PrinterDescription} onChange={(e) => {
              setObj({ ...obj, PrinterDescription: e.target.value });
            }}></textarea>
          </div>
        </div>
        :
        <div className="container w-50">
          <div className="card my-3 mx-3 text-center border-0">
            <img
              src={obj.PrinterImage}
              className="card-img-top"
              alt="Can't Load"
            />
            <div className="card-body text-black">
              <h5 className="card-title text-black">
                <b>{obj.PrinterName}</b>
              </h5>
              <h5 className="card-title text-black">{obj.PrinterModel}</h5>
              <hr />
              {obj.PrinterMaker}
              <hr />
              <h6>₹ {obj.PrinterPrice}</h6>
              {/* <button className="mx-4 my-2 btn btn-outline-info w-50">Add Printer Details</button>
              <button className="mx-4 my-2 btn btn-outline-info w-50">Go To See Your Changes</button> */}
            </div>
          </div>
        </div>
      }

      <hr />

      <button
        type="submit"
        className="btn btn-outline-success my-4 w-25"
        onClick={(e) => {
          e.preventDefault();
          fetch(
            "https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(obj)
            }
          ).then((res) => {
            console.log(res.status);
            res.json().then((data) => {
            });
          });
          setObj({
            ...obj,
            PrinterName: "",
            PrinterModel: "",
            PrinterMaker: "",
            PrinterDescription: "",
            PrinterPrice: "",
            PrinterImage: "",
          });
          setPreviewObj(0);
          navigate("./../AddNew");
        }
        }
      >
        Add Printer Details
      </button>

      <button className="mx-4 my-4 btn btn-outline-info w-25" onClick={() => {
        if (previewObj === 1) {
          setPreviewObj(0);
        }
        else {
          setPreviewObj(1);
        }
        navigate("./../AddNew")
      }}>
        {previewObj === 1 ? <span>Go to Add Page</span> : <span>See the Preview</span>}
      </button>



      <button className="mx-4 my-4 btn btn-outline-info w-25" onClick={() => {
        navigate("./../Printers")
      }}>
        Go To See Your Changes
      </button>

    </div>
  );
};

export default AddNew;
