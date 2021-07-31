import React,{useState} from 'react'

const Dsaform = () => {


const [Dsa, setDsa] = useState({
    firstname:"",lastname:"",dob:"",mobilenumber:"",aadharnumber:"",bankname:"",bankaccountname:"",bankaccountno:"",branchname:"",ifsccode:""

});

let name,value;

const handleInput =(e)=>{
     name = e.target.name;
     value = e.target.value;
 
     setDsa({...Dsa,[name]:value})
}

const handleSubmit =(e)=>{
    e.preventDefault();
}


    return (
        <>
    <div class="container">
        <h2>DSA Registration</h2>
        
        <form method="post" id="dsaForm" onSubmit={handleSubmit} >
            <div class="row mt-5">
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>First Name <code>*</code></label>
                <input type="text" class="form-control" id="first_name" placeholder="Enter Name" name="firstname" required=""
                    value={Dsa.firstname}
                    onChange={handleInput}
                />
            </div>
            
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>Last Name<code>*</code></label>
                <input type="text" class="form-control" id="last_name" placeholder="Enter Name" name="lastname" required=""
                    value={Dsa.lastname}
                    onChange={handleInput}
                />
            </div>
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>DOB <code>*</code></label>
                <input type="date" class="form-control" id="dob" placeholder="Enter DOB" name="dob" required=""
                    value={Dsa.dob}
                    onChange={handleInput}
                />
            </div>
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>Mobile Number <code>*</code></label>
            <input type="tel" class="form-control" name="mobilenumber" id="mobile_number" aria-required="true" aria-invalid="false" placeholder="Phone" minlength="10" maxlength="10" onkeypress="return event.charCode > 47 &amp;&amp; event.charCode < 58;" oninvalid="setCustomValidity('Please Enter Valid Mobile Number')" oninput="setCustomValidity('')" required=""
                    value={Dsa.mobilenumber}
                    onChange={handleInput}
            />
            </div>
            
                <div class="col-md-6 col-sm-12 mb-3">
                    <label>Aadhar Number<code>*</code></label>
                <input type="text" class="form-control" id="aadhar_number" placeholder="Enter Aadhar Number" name="aadharnumber" required=""
                     value={Dsa.aadharnumber}
                    onChange={handleInput}
                />
            </div>
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>Bank Name<code>*</code></label>
                <input type="text" class="form-control" id="bank_name" placeholder="Enter Bank Name" name="bankname" required=""
                     value={Dsa.bankname}
                    onChange={handleInput}
                />
            </div>
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>Bank Account Name <code>*</code></label>
                    <input type="text" class="form-control" id="bank_account_name" placeholder="Enter Bank Account Name" name="bankaccountname" required=""
                        value={Dsa.bankaccountname}
                        onChange={handleInput}
                    />
                                                                            
            
            </div><div class="col-md-6 col-sm-12 mb-3">
                    <label>Bank Account No.<code>*</code></label>
                <input type="text" class="form-control" id="bank_account_no" placeholder="Enter Bank Account No" name="bankaccountno" required=""
                     value={Dsa.bankaccountno}
                    onChange={handleInput}
                />
            </div>
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>Branch Name<code>*</code></label>
                <input type="text" class="form-control" id="branch_name" placeholder="Enter Branch Name" name="branchname" required=""
                     value={Dsa.branchname}
                    onChange={handleInput}
                />
            </div>
            <div class="col-md-6 col-sm-12 mb-3">
                    <label>IFSC Code <code>*</code></label>
                <input type="text" class="form-control" id="ifsc_code" placeholder="Enter IFSC code" name="ifsccode" required=""
                     value={Dsa.ifsccode}
                    onChange={handleInput}
                />
            </div>
        
            </div>
            <button id="submit" class="btn btn-primary form-button mt-3">Submit</button>
        </form>
</div>
        </>
    )
}

export default Dsaform
