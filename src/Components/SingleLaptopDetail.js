import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleLaptopDetail = () => {

    const [ans, setans] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/laptop/" + params.id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setans(data);
                // console.log('data :>> ', data);
            });
    }, [params.id]);


    const Delete = () => {
        fetch(`https://62da16fd5d893b27b2f0ebab.mockapi.io/laptop/${params.id}`, {
            method: "DELETE"
        }).then((resp) => {
            navigate("./../../");
        });
    };

    return (
        <>
            <div className="container d-flex justify-content-left my-3 details">
                <div className="col-md-3">
                    <div className="card my-3 mx-3 singlehoverclass text-center border-0 pcard">
                        <img
                            src={ans.LaptopImage}
                            className="card-img-top"
                            alt="Can't Load"
                        />
                        <div className="card-body text-black">
                            <h5 className="card-title text-black">
                                <b>{ans.LaptopName}</b>
                            </h5>
                            <h5 className="card-title text-black">{ans.LaptopModel}</h5>
                            <hr />
                            {ans.LaptopMaker}
                            <hr />
                            <h6>₹ {ans.LaptopPrice}</h6>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='printerDetails'>
                    <h2 className="my-2">Detail Of Laptop</h2>
                    <p className="text-black">{ans.LaptopDescription}</p>
                    <br />
                    <br />

                    <div className='detailsBtn'>
                        <button className="btn btn-outline-primary text-black mx-5 my-5 opBtn" onClick={() => {
                            navigate("./../../")
                        }}>
                            Back
                        </button>
                        <button
                            className="btn btn-outline-danger mx-5 my-5 opBtn"
                            onClick={() => {
                                Delete();
                            }}
                        >
                            Delete
                        </button>

                        <button className="btn btn-outline-secondary mx-5 my-5 opBtn" onClick={() => {
                            navigate("./EditLaptop");
                        }}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleLaptopDetail;