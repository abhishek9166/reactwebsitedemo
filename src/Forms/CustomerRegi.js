import React,{useState} from 'react';

const CustomerRegi = () => {

const [Customer, setCustomer] = useState({
    firstname:"",gstno:"",panno:"",industry:"",pincode:"",address:"",contactpersonname:"",designation:"",website:"",mobile:"",email:"",status:""
})

let name,value;
const handleInput =(e)=>{
    name = e.target.name;
    value = e.target.value;

    setCustomer({...Customer,[name]:value})
}

const handleSubmit =(e)=>{
    e.preventDefault();
}



    return (
        <>
            <div className="container">
                <h2>Customer Registration</h2>

        <form method="" id="customerForm" onSubmit={handleSubmit}>
            <div className="row mt-5">
                <div className="col-md-12 col-sm-12 mb-3 input-text">
                    <label>First Name <code>*</code></label>
                    <input type="text" className="form-control form-text" id="firm_name" placeholder="Enter Name" name="firstname" required=""
                        value={Customer.firstname}
                        onChange={handleInput}
                    />
                </div>
                            
                <div className="col-md-6 col-sm-12 mb-3 input-text">
                    <label>GST NO.</label>
                    <input type="text" className="form-control" id="gst_no" placeholder="Enter GST NO." name="gstno"
                        value={Customer.gstno}
                        onChange={handleInput}
                    />
                </div>

                <div className="col-md-6 col-sm-12 mb-3 input-text">
                    <label>PAN NO. </label>
                    <input type="text" className="form-control" id="pan_no" placeholder="Enter PAN NO." name="panno"
                         value={Customer.panno}
                        onChange={handleInput}
                    />
                </div>

                <div className="col-md-12 col-sm-12 mb-3 input-text">
                    <label>Industry </label>
                    <input type="text" className="form-control" id="industry" placeholder="Enter Industry" name="industry"
                        value={Customer.industry}
                        onChange={handleInput}
                    />
                </div>

                    <div className="col-md-6 col-sm-12 mb-3 input-text">
                    <label>Status</label>
                        <select className="form-control" aria-label="Default select example" name="status" id="status"
                                value={Customer.status}
                                onChange={handleInput}
                                >
                            <option selected="">None</option>
                            <option value="Authorised Dealer">Authorised Dealer</option>
                            <option value="Authorised Distributor">Authorised Distributor</option>
                            <option value="Manufacture">Manufacture</option>
                            <option value="Stockist/Trader">Stockist/Trader</option>
                            <option value="Exporter">Exporter</option>
                            <option value="Importer">Importer</option>
                            <option value="Reseller">Reseller</option>
                            <option value="Consumer">Consumer</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="col-md-6 col-sm-12 mb-3 input-text">
                        <label>Pin Code <code>*</code></label>
                        <input type="text" className="form-control" id="pincode" placeholder="Enter pincode" name="pincode" required=""
                            value={Customer.pincode}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="col-md-12 col-sm-12 mb-3 input-text">
                        <label>Address <code>*</code></label>
                        <textarea name="address" id="address" className="form-control " rows="5" placeholder="Enter Address" required=""
                            value={Customer.address}
                            onChange={handleInput}></textarea>
                    </div>
                    
                    <div className="col-md-12 col-sm-12 mb-3 input-text">
                        <label>Name of Contact Person<code>*</code></label>
                        <input type="text" className="form-control" id="contact_person_name" placeholder="Enter name" name="contactpersonname" required=""
                            value={Customer.contactpersonname}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="col-md-6 col-sm-12 mb-3 input-text">
                        <label>Designation</label>
                        <input type="text" className="form-control" id="designation" placeholder="Enter designation" name="designation"
                            value={Customer.designation}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="col-md-6 col-sm-12 mb-3 input-text">
                        <label>Website </label>
                        <input type="text" className="form-control" id="website" placeholder="Enter website" name="website"
                            value={Customer.website}
                            onChange={handleInput}
                        />
                    </div>
                    
                    <div className="col-md-6 col-sm-12 mb-3 input-text">
                        <label>Mobile<code>*</code></label>
                        <input type="tel" className="form-control" name="mobile" id="mobile" aria-required="true" aria-invalid="false" placeholder="Phone" minlength="10" maxlength="10" onkeypress="return event.charCode > 47 &amp;&amp; event.charCode < 58;" oninvalid="setCustomValidity('Please Enter Valid Mobile Number')" oninput="setCustomValidity('')" required=""
                            value={Customer.mobile}
                            onChange={handleInput}
                        />
                                 
                    </div>

                    <div className="col-md-6 col-sm-12 mb-3 input-text">
                        <label>Email</label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="Please enter your email"
                            value={Customer.email}
                            onChange={handleInput}
                        />  
                    </div>

            </div>
                <button type="submit"   id="submit" className="btn btn-primary mt-3 form-button">Submit</button>
         </form>
        </div> 

       
        </>
)}
export default CustomerRegi
