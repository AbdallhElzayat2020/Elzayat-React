import track from '../Images/track1.png';
import track1 from '../Images/track3.jpg';
import track2 from '../Images/tracks.jpg';
import track3 from '../Images/tracks2.jpg';
import track4 from '../Images/8.png';
import './Tracks.css'
function Tracks() {
    return (
        <div className="tracks">
            <div className="container">
                <div className="row gap-5">
                    <div className="col-lg-6 image">
                        <img src={track} alt="" />
                    </div>
                    <div className="col-lg-5 text">
                        <div className="info text-center">
                            <h1 className='text-primary'>Web Development</h1>
                            <p className='text-black-50 fs-5'> We are Mega Team, an emerging software company with young and old-minded programmers, and we have the necessary experience to deal and implement your business.</p>
                            <p>We Experience in Web Development and Applications Mobile For Android And IOS , Graphic Design,WordPress and We Have more technologies in our Tracks </p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row gap-5">
                    <div className="col-lg-6 image">
                        <img src={track1} alt="" />
                    </div>
                    <div className="col-lg-5 text">
                        <div className="info text-center">
                            <h1 className='text-primary'>Graphic Design</h1>
                            <p className='text-black-50 fs-5'> Gina deals with graphics, graphic programs, photoshop, oxide, illustrator, and making the most beautiful shapes
                                And professional fees in the field of design, and we are able to implement your design with the highest quality and reasonable prices</p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row gap-5">
                    <div className="col-lg-6 image">
                        <img src={track2} alt="" />
                    </div>
                    <div className="col-lg-5 text">
                        <div className="info text-center">
                            <h1 className='text-primary'>Write Coding</h1>
                            <p className='text-black-50 fs-5'>We enjoy writing clean, easy-to-modify and easy-to-understand code. Experts in all fields write the code with great experience and certificates from international and accredited centers. </p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row gap-5">
                    <div className="col-lg-6 image">
                        <img src={track3} alt="" />
                    </div>
                    <div className="col-lg-5 text">
                        <div className="info text-center">
                            <h1 className='text-primary'>Clean Code And Use Latest technology</h1>
                            <p className='text-black-50 fs-5'>We enjoy writing clean, easy-to-modify and easy-to-understand code. Experts in all fields write the code with great experience and certificates from international and accredited centers. </p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row gap-5">
                    <div className="col-lg-6 image">
                        <img src={track4} alt="" />
                    </div>
                    <div className="col-lg-5 text">
                        <div className="info text-center">
                            <h1 className='text-primary'>You are not a customer, you are a partner</h1>
                            <p className='text-black-50 fs-5'>We strive to satisfy the customer, you are not our customer, you are our partner in success </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracks;