const Contact = () => {
    return (
        <div className="text-center">
        <h1 className="fw-bold my-4">Contact Us</h1>
        <div className="container text-center d-flex flex-column justify-content-center align-items-center">

            <div class="card text-center my-4 w-50">
                <div class="card-header">
                    <h3>Our Office</h3>
                </div>
                <div class="card-body">
                    <p><h5>Print On Web - a division of India Int-Tech Private Limited
                    11, Veer Savarkar, Block, Vikas Marg New Delhi</h5></p>

                    <p><h5>Delhi - 110092
                    New Delhi</h5></p>

                    <h5>Email : mail@printonweb.in</h5>

                    <h5>Phone No. : +91 - 9717599341</h5>
                </div>
            </div>

            <form className="w-100">
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control my-2" id="exampleInputPassword1" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input type="number" class="my-2 form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input my-2" id="exampleCheck1" />
                    <label class="form-check-label my-2" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-primary my-2">Submit</button>
            </form>


        </div>
        </div>
    )
}
export default Contact;