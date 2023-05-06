// import servies1 from '../Images/services.png';
import servies1 from '../Images/services1.jpg';
import servies2 from '../Images/services2.jpg';
import servies3 from '../Images/services3.jpg';
import servies4 from '../Images/services4.jpg';
import servies6 from '../Images/services6.jpg';
import servies7 from '../Images/services7.jpg';
import servies8 from '../Images/About.jpg';
import servies10 from '../Images/Programming-amico.png';
import servies9 from '../Images/IT2PRE_XB1_PROMO_Keyart_1920x1080-780x470.jpg';
import "./Services.css"
function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-primary'>Graphic Designer Photos</h3>
                            <img src={servies1} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-danger'>Graphic Designer Photos</h3>
                            <img src={servies2} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-primary'>Graphic Designer Photos</h3>
                            <img src={servies3} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-danger'>Graphic Designer Photos</h3>
                            <img src={servies4} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-primary'>Graphic Designer Photos</h3>
                            <img src={servies6} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-danger'>Graphic Designer Photos</h3>
                            <img src={servies7} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-primary'>Graphic Designer Photos</h3>
                            <img src={servies8} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-danger'>Graphic Designer Photos</h3>
                            <img src={servies9} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="box text-center p-4">
                            <h3 className='text-primary'>Graphic Designer Photos</h3>
                            <img src={servies10} alt="" />
                            <p className='mt-3'>Make By  <span className='text-primary'>Abdallh Elzayat</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services;