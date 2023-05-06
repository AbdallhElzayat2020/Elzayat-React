import { Link } from 'react-router-dom';
import About from '../Images/magia.jpg';
import './About.css'
function AboutuS() {
    return (
        <section className="about">
            <div className="container">
                <div className="row gap-5">
                    <div className="heading">
                        <h1 className='text-center my-3 text-danger'>About-Us</h1>
                    </div>
                    <div className="row gap-5 parent">
                        <div className="col-lg-5 img">
                            <img src={About} alt="" />
                        </div>
                        <div className="col-lg-5 info  text-center">
                            <h3><span className='text-danger'>About Me</span> and <span className='text-primary'>MagiaTeam</span></h3>
                            <p>My Name is Abdallh Elzayat from Elmansoura 20years old  frontEnd Developer React js I have Experience In Web Development and Designs I'm member At MagiaTeam And We Have A Programmers In Many Track from Programming and technology They Have Experience in His Tracks His Experience starts from 6 months. </p>
                            <div className="text text-center">
                                <p>
                                    We are Mega Team, an emerging software company with young and old-minded programmers, and we have the necessary experience to deal and implement your business
                                </p>
                            </div>
                            <div className="buttons">
                                <Link to={"showProjects"} className="btn btn-primary text-center">Show Works</Link>
                                <Link to={"member"} className="btn btn-primary text-center">Show Members</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutuS;