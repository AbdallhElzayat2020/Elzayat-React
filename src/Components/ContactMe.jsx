import contactme from '../Images/contact-me.jpg'
function ContactMe() {
    return (
        <div className="contactme">
            <div className="container">
                <section class="contact" id="contact">
                    <div class="container">
                        <div class="row bg-black opacity-50 mb-5 rounded-1">
                        </div>

                        <div class="row mt-4">
                            <div class="col-lg-6 mb-3 ">
                                <img src={contactme} alt="" />
                            </div>

                            <div class="col-lg-6 ">
                                <form action="" class="p-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <input type="text" placeholder="Your-Name" class="form-control" />
                                        </div>
                                        <div class="col-6">
                                            <input type="email" placeholder="Your-Email" class="form-control" /> </div>
                                    </div>
                                    <input type="text" placeholder="your-Subject" class="my-3 form-control" />
                                    <textarea class="form-control " name="" id="" placeholder="Write-Your Message">
                                    </textarea>
                                    <input type="submit" value="Send" class="btn btn-primary mt-4" />
                                </form>
                                <div className="con text-center">
                                    <p className="phone">WhatAPP: +201212484233</p>
                                    <p className="phone">Calls: +201019386883</p>
                                    <span className="gmail">Gmail: abdallhelzayat900@gmail.com</span>
                                    <p>Used In Project Html CSS JS BootStrap ReactJS </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}


export default ContactMe;