import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditLaptop = () => {
  const [obj, setObj] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/laptop/" + param.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setObj(data);
      });
  }, [param.id]);

  return (
    <div className="text-center container my-3">
      <h1 className="my-3">Fill The Form To Update Laptop And It's Features</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Laptop Name
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
            Enter Laptop Maker
          </label>
          <input
            type="text"
            className="form-control"
            value={obj.LaptopMaker}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setObj({ ...obj, LaptopModel: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Laptop Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.LaptopDescription}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setObj({ ...obj, LaptopDescription: e.target.value });
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

        <button
          type="submit"
          className="btn btn-outline-success w-25"
          onClick={(e) => {
            e.preventDefault();
            fetch(
              "https://62da16fd5d893b27b2f0ebab.mockapi.io/laptop/" + param.id,
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
              LaptopName: "",
              LaptopModel: "",
              LaptopMaker: "",
              LaptopDescription: "",
              LaptopPrice: "",
              LaptopImage: "",
            });
            navigate("./../");
          }}
        >
          Update Laptop Details
        </button>
      </form>
    </div>
  );
};

export default EditLaptop;
