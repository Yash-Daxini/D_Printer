import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SinglePrinterDetail = () => {

    const [ans, setans] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/" + params.id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setans(data);
                // console.log('data :>> ', data);
            });
    }, [params.id]);


    const Delete = () => {
        fetch(`https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/${params.id}`, {
            method: "DELETE"
        }).then((resp) => {
            navigate("./../../");
        });
    };

    return (
        <>
            <div className="container-md my-3 details">
                <div className="col-md-3 singlecardcontent">
                    <div className="card my-3 mx-3 text-center border-0 pcard">
                        <img
                            src={ans.PrinterImage}
                            className="card-img-top"
                            alt="Can't Load"
                        />
                        <div className="card-body text-black">
                            <h5 className="card-title text-black">
                                <b>{ans.PrinterName}</b>
                            </h5>
                            <h5 className="card-title text-black">{ans.PrinterModel}</h5>
                            <hr />
                            {ans.PrinterMaker}
                            <hr />
                            <h6>₹ {ans.PrinterPrice}</h6>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='printerDetails'>
                    <h2 className="my-2">Detail Of Printer</h2>
                    <p className="text-black">{ans.PrinterDescription}</p>
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
                            navigate("./Edit");
                        }}>
                            Edit
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SinglePrinterDetail;