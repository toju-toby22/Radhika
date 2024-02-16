import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import "../Styles/footer.css"
const Emai = () => {
    const [show, setShow] = useState(false);

    return (
        <div>


            <div className="email_box">
                
            <div className="email_button">
                    <button type='button' onClick={() => setShow(!show)}>
                        <MdOutlineEmail />
                    </button>
                </div>


                <div className="footer_row">
                    <div className="form">
                        {
                            show &&
                            <form action="">
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