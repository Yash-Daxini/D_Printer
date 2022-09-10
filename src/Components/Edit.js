import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [obj, setObj] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/" + param.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setObj(data);
      });
  }, [param.id]);

  return (
    <div className="text-center container my-3">
      <h1 className="my-3">Fill The Form To Update Printer And It's Features</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Printer Name
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
            Enter Printer Maker
          </label>
          <input
            type="text"
            className="form-control"
            value={obj.PrinterMaker}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setObj({ ...obj, PrinterModel: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Printer Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.PrinterDescription}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setObj({ ...obj, PrinterDescription: e.target.value });
            }}
          />
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

        <button
          type="submit"
          className="btn btn-outline-success w-25"
          onClick={(e) => {
            e.preventDefault();
            fetch(
              "https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/" + param.id,
              {
                method: "PUT",
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
            navigate("./../");
          }}
        >
          Update Printer Details
        </button>
      </form>
    </div>
  );
};

export default Edit;
