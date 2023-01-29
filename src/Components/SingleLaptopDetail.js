import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

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
            // console.log( resp.status );
            if( resp.status === 200 ){
                Swal.fire(
                    'Deleted!',
                    'Your Data has been deleted.',
                    'success'
                )
            }
            else{
                Swal.fire(
                    'Error!',
                    "Some error occured! Your Data Can't bee deleted.",
                    'error'
                )
            }
            navigate("./../../");
        });
    };

    return (
        <>
            <div className="container-md my-3 details">
                <div className="col-md-3 singlecardcontent">
                    <div className="card my-3 mx-3 text-center border-0 pcard">
                        <img
                            src={ans.LaptopImage}
                            className="card-img-top"
                            alt="Can't Load"
                        />
                        <div className="card-body text-black">
                            <h5 className="my-2 card-title text-black">
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
                <div className='printerDetails container-md'>
                    <h2 className="my-2">Detail Of Laptop</h2>
                    <p className="text-black">{ans.LaptopDescription}</p>
                    <br />
                    <br />

                    <div className='detailsBtn'>
                        <button className="btn btn-outline-primary text-black opBtn" onClick={() => {
                            navigate("./../../")
                        }}>
                            Back
                        </button>
                        <button
                            className="btn btn-outline-danger opBtn"
                            onClick={() => {
                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, delete it!'
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      Delete();
                                    }
                                  })
                            }}
                        >
                            Delete
                        </button>

                        <button className="btn btn-outline-secondary  opBtn" onClick={() => {
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