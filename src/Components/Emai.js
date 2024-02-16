import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import "../Styles/footer.css"
const Emai = () => {
    const [show, setShow] = useState(false);

    return (
        <div>


            <div className="email_box">
                
            <div>
                    <button type='button'className='email_button' onClick={() => setShow(!show)}>
                        <MdOutlineEmail />
                    </button>
                </div>


                <div className="">
                    <div className="">
                        {
                            show &&
                            <form action="">
                               <p className='Newsletter'>Subscribe To My Newsletter</p>   
                                <input className='emailsub' type="text" placeholder="Email here..." />
                                <button className='email'><IoMailOutline /></button>
                            </form>
                        }
                    </div>
                </div>



                
            </div>
        </div>
    )
}

export default Emai