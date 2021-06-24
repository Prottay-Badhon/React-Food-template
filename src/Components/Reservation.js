import React from 'react';
import '../css/Component-css/Reservation.css'
function Reservation(props) {
    return (
        <>
            <div class='reservation_section'>
                <div class='dark_overlay'>
                    <div class='row p-5' >
                       

                        <div class='col-lg-7'>
                        <form class='bg-white reservation_form responsive'>
                       <div class='text-center'>
                       <h1 class='head1'>𝐵𝑜𝑜𝓀 𝒶 𝓉𝒶𝒷𝓁𝑒</h1>
                        <h1 class='head2'>Make Reservation</h1>
                       </div>
                        <div class="form-row">
                            <div class="col-lg-6 col-md-12">
                            <label class='label font-weight-bold'  style={{fontSize: '13px'}}>NAME*</label>
                            <input type="text" class="" placeholder='Name'/>
                            </div>
                            <div class="col-lg-6 col-md-12">
                            <label class='label font-weight-bold' style={{fontSize: '13px'}}>EMAIL*</label>
                            <input type="email" class="" placeholder='Email'/>
                            </div>
                        </div>
                        <div class="form-row mt-3">
                            <div class="col-lg-6 col-md-12">
                            <label class='label font-weight-bold'  style={{fontSize: '13px'}}>PHONE</label>
                            <input type="text" class="" placeholder='Phone'/>
                            </div>
                            <div class="col-lg-6 col-md-12">
                            <label class='label font-weight-bold' placeholder='Date' style={{fontSize: '13px'}}>DATE*</label>
                            <input type="date"/>
                            </div>
                            
                        </div>


                        <div class="form-row mt-3 ">
                            <div class="col-lg-6 col-md-12">
                            <label class='label font-weight-bold'  style={{fontSize: '13px'}}>TIME</label>
                            <input type="text" class="" placeholder='Time'/>
                            </div>
                            <div class="col-lg-6 col-md-12">
                            <label class='label font-weight-bold' style={{fontSize: '13px'}}>PERSON*</label>
                            <input type="text" class=""  placeholder='Person'/>
                            </div>
                            
                        </div>


                        <div class="form-row justify-content-center mt-3">
                                <button class=''>Make a Reservation</button>                                   
                        </div>                                            

                        </form>
                        </div>

                        <div class='col-lg-5'>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default Reservation;