import React from 'react'
import Footer from './Footer'

const Home = () => {
    return (
        <>

        <div className="bs-example">

            <div className="search">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="datatable_filter">
                            <label className="w-100">
                                <input type="search" className="form-control form-control-sm" placeholder="search...."/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-responsive mt-4">
                <table className="table table-striped table-bordered table-demo">
                <thead> 
                    <tr>
                        <th>Product Number</th>
                        <th>Supply Frequency</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Brand</th>
                        <th>Product Name</th>
                        <th>Specification 1</th>
                        <th>Specification 2</th>
                        <th>Unit</th>
                        <th>Pack Size</th>
                        <th>Rate/Unit</th>
                        <th>Rate/Pack</th>
                        <th>MRP/Pack</th>
                        <th>Master Pack</th>
                        <th>GST</th>
                    </tr>
                    </thead>
                </table>
            </div>

        </div>




        

        {/* <table className="table table-striped table-bordered dataTable" style={{marginTop:"35px",textAlign:"center"}}>
            <thead style={{fontSize:"15px"}}>
                <tr role="row">
                    <th>Product Number</th>
                    <th>Supply Frequency</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th>Brand</th>
                    <th>Product Name</th>
                    <th>Specification 1</th>
                    <th>Specification 2</th>
                    <th>Unit</th>
                    <th>Pack Size</th>
                    <th>Rate/Unit</th>
                    <th>Rate/Pack</th>
                    <th>MRP/Pack</th>
                    <th>Master Pack</th>
                    <th>GST</th>
                    

                
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            </table>
       
        </div>  */}



        <Footer/>
        </>
    )
}

export default Home
