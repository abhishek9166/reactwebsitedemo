import React,{useState} from 'react'

const Venderform = () => {
 
    const [Vender, setVender] = useState({
        firstname:"",typefirm:"",gstno:"",panno:"",industry:"",status:"",pincodedispatch:"",address:"",contactpersonname:"",designation:"",website:"",mobile:"",email:""
    });

   let name,value;
    
    const handleInput =(e)=>{
        name = e.target.name;
        value = e.target.value;

        setVender({...Vender,[name]:value});
    }

    const submit =(e)=>{
        e.preventDefault();
    }

    return (
        <>
         <div class="container">
  <h2>Vendor Registration</h2>
 
  <form method="post" id="vendorForm" onSubmit={submit}>
    <div class="row mt-5">
      <div class="col-md-6 col-sm-12 mb-3">
          	<label>First Name <code>*</code></label>
        <input type="text" class="form-control" id="firstname" placeholder="Enter Name" name="firstname" required=""
            value={Vender.firstname}
            onChange={handleInput}
        />
      </div>

       <div class="col-md-6 col-sm-12 mb-3">
          	<label>Type of Firm<code>*</code></label>
      <select class="form-control" aria-label="Default select example" name="typefirm" id="type_firm" required="" value={Vender.typefirm}
                                    onChange={handleInput}>
  <option selected="">None</option>
  <option value="Proprietership">Proprietership</option>
  <option value="Partnership">Partnership</option>
  <option value="Private Limited">Private Limited</option>
  <option value="LLP">LLP</option>
  <option value="Public Limited">Public Limited</option>
  <option value="Other">Other</option>
 
</select>
</div>
      
      <div class="col-md-6 col-sm-12 mb-3">
          	<label>GST NO.<code>*</code></label>
        <input type="text" class="form-control" id="gstno" placeholder="Enter GST NO." name="gstno" required=""
            value={Vender.gstno}
            onChange={handleInput}
        />
      </div>
      <div class="col-md-6 col-sm-12 mb-3">
          	<label>PAN NO. <code>*</code></label>
        <input type="text" class="form-control" id="panno" placeholder="Enter PAN NO." name="panno" required=""
            value={Vender.panno}
            onChange={handleInput}
        />
      </div>

      <div class="col-md-12 col-sm-12 mb-3">
          	<label>Industry <code>*</code></label>
        <input type="text" class="form-control" id="industry" placeholder="Enter Industry" name="industry" required=""
            value={Vender.industry}
            onChange={handleInput}
        />
      </div>

      <div class="col-md-6 col-sm-12 mb-3">
          	<label>Status<code>*</code></label>
      <select class="form-control" aria-label="Default select example" name="status" id="status" required=""
      value={Vender.status}
            onChange={handleInput}>
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

      <div class="col-md-6 col-sm-12 mb-3">
          	<label>Pincode of Dispatch<code>*</code></label>
        <input type="text" class="form-control" id="pincode_dispatch" placeholder="Enter pincode" name="pincodedispatch" required=""
            value={Vender.pincodedispatch}
            onChange={handleInput}
        />
      </div>

      <div class="col-md-12 col-sm-12 mb-3">
          	<label>Address <code>*</code></label>
          	  <textarea name="address" id="address" class="form-control " rows="5" placeholder="Enter Address" required=""
                value={Vender.address}
            onChange={handleInput}></textarea>
                                                                      
       
      </div>
      
      <div class="col-md-12 col-sm-12 mb-3">
          	<label>Name of Contact Person<code>*</code></label>
        <input type="text" class="form-control" id="contact_person_name" placeholder="Enter name" name="contactpersonname" required=""
            value={Vender.contactpersonname}
            onChange={handleInput}
        />
      </div>

      <div class="col-md-6 col-sm-12 mb-3">
          	<label>Designation<code>*</code></label>
        <input type="text" class="form-control" id="designation" placeholder="Enter designation" name="designation" required=""
            value={Vender.designation}
            onChange={handleInput}
        />
      </div>

      <div class="col-md-6 col-sm-12 mb-3">
          	<label>Website </label>
        <input type="text" class="form-control" id="website" placeholder="Enter website" name="website"
            value={Vender.website}
            onChange={handleInput}
        />
      </div>
      
      <div class="col-md-6 col-sm-12 mb-3">
          	<label>Mobie<code>*</code></label>
        <input type="tel" class="form-control" name="mobile" id="mobile" aria-required="true" aria-invalid="false" placeholder="Phone" minlength="10" maxlength="10" onkeypress="return event.charCode > 47 &amp;&amp; event.charCode < 58;" oninvalid="setCustomValidity('Please Enter Valid Mobile Number')" oninput="setCustomValidity('')" required=""
            value={Vender.mobile}
            onChange={handleInput}
        />
                                 
      </div>

      <div class="col-md-6 col-sm-12 mb-3">
          	<label>Email<code>*</code></label>
         <input type="email" id="email" name="email" class="form-control" required="" placeholder="Please enter your email"
             value={Vender.email}
            onChange={handleInput}
         />
                               
      </div>

     <div class="col-md-12 col-sm-12 mb-3">	
        <input type="checkbox" name="terms" id="terms"/>   I accept all the <a href="vendor_agreement.php" target="_blank" style={{color: "#21233",textDecoration: "underline"}}>terms &amp; conditions </a>and agree to follow all the rules and regulations.<p></p>
    </div> 

    </div>
    <button id="submit" class="btn btn-primary form-button mt-3">Submit</button>
  </form>
</div>   
        </>
    )
}

export default Venderform
