import member_1 from '../Images/member/img-1.jpg';
import member_2 from '../Images/member/img-2.jpg';
import member_4 from '../Images/member/img-4.jpeg';
import member_5 from '../Images/member/img-5.jpg';
import member_6 from '../Images/member/img-6.jpg';
import member_7 from '../Images/member/img-7.jpg';
import member_8 from '../Images/member/img-8.jpeg';
// skills
import html from '../Images/skills/html.png';
import css from '../Images/skills/css.png';
import js from '../Images/skills/js.png';
import bootstrap from '../Images/skills/bootstrap.png';
import tailwind from '../Images/skills/tailwind.png';
import GitHup from '../Images/skills/github-sign.png';
import sass from '../Images/skills/sass.png';
import react from '../Images/skills/react.png';
import angular from '../Images/skills/angular.png';
import photoshop from '../Images/skills/photoshop.png';
import linephoto from '../Images/skills/linephoto.png';
import Xd from '../Images/skills/adobe-photoshop.png';
import php from '../Images/skills/php.png';
import node from '../Images/skills/nodejs.png';
// css file
import './Member.css'
import { Link } from 'react-router-dom';
function Members() {
    return (
        <div className="members">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_1} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Abdallh Elzayat</h3>
                                    <h5 className='text-white my-3'>FrontEnd Developer <span className='text-warning'>ReactJS</span></h5>
                                </div>
                                <p className='description-p'>
                                    My Name is Abdallh Elzayat 20years old Front End Developer ReactJS I'm Have 1years experience in web development My Skills[ HTML5,CSS3,JAVASCRIPT,BOOTSTRAP5,TAILWINDcss,GitHup And ReactJS ]
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={js} alt="" />
                                    <img src={bootstrap} alt="" />
                                    <img src={tailwind} alt="" />
                                    <img src={GitHup} alt="" />
                                    <img src={sass} alt="" />
                                    <img src={react} alt="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_2} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Mahmoud Abu ElEinen</h3>
                                    <h5 className='text-white my-3'>UI&UX <span className='text-warning'>Graphic Designer</span></h5>
                                </div>
                                <p className='description-p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores labore! Nam quo, minus distinctio saepe suscipit iusto perferendis eligendi porro, assumenda consequatur necessitatibus
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={photoshop} alt="" />
                                    <img src={linephoto} alt="" />
                                    <img src={Xd} alt="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_4} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Hamdey Mohamed</h3>
                                    <h5 className='text-white my-3'>FrontEnd Developer <span className='text-warning'>ReactJS</span></h5>
                                </div>
                                <p className='description-p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores labore! Nam quo, minus distinctio saepe suscipit iusto perferendis eligendi porro, assumenda consequatur necessitatibus
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={js} alt="" />
                                    <img src={bootstrap} alt="" />
                                    <img src={tailwind} alt="" />
                                    <img src={GitHup} alt="" />
                                    <img src={sass} alt="" />
                                    <img src={react} alt="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_5} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Hessin Nasser</h3>
                                    <h5 className='text-white my-3'>FrontEnd Developer <span className='text-warning'>ReactJS</span></h5>
                                </div>
                                <p className='description-p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores labore! Nam quo, minus distinctio saepe suscipit iusto perferendis eligendi porro, assumenda consequatur necessitatibus
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={js} alt="" />
                                    <img src={bootstrap} alt="" />
                                    <img src={tailwind} alt="" />
                                    <img src={GitHup} alt="" />
                                    <img src={sass} alt="" />
                                    <img src={react} alt="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_6} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Marwan Zayed</h3>
                                    <h5 className='text-white my-3'>BackEnd Developer <span className='text-warning'>Nodejs</span></h5>
                                </div>
                                <p className='description-p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores labore! Nam quo, minus distinctio saepe suscipit iusto perferendis eligendi porro, assumenda consequatur necessitatibus
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={js} alt="" />
                                    <img src={php} alt="" />
                                    <img src={node} alt="" />
                                    <img src={GitHup} alt="" />
                                    <img src={react} alt="" />
                                </div>
                            </div>
                            <Link to={"details"} className='btn btn-primary'>Details</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_7} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Magdey Elsayed</h3>
                                    <h5 className='text-white my-3'>FrontEnd Developer <span className='text-warning'>AngularJS</span></h5>
                                </div>
                                <p className='description-p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores labore! Nam quo, minus distinctio saepe suscipit iusto perferendis eligendi porro, assumenda consequatur necessitatibus
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img src={html} alt="" />
                                    <img src={css} alt="" />
                                    <img src={js} alt="" />
                                    <img src={bootstrap} alt="" />
                                    <img src={tailwind} alt="" />
                                    <img src={GitHup} alt="" />
                                    <img src={sass} alt="" />
                                    <img src={angular} alt="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card">
                            <img src={member_8} alt="" />
                            <div className="description text-center">
                                <div className="head bg-dark py-3">
                                    <h3 className='text-warning'>Mahmoud Badwey</h3>
                                    <h5 className='text-white my-3'>Application Mobile<span className='text-warning'>Flutter</span></h5>
                                </div>
                                <p className='description-p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores labore! Nam quo, minus distinctio saepe suscipit iusto perferendis eligendi porro, assumenda consequatur necessitatibus
                                </p>
                            </div>
                            <div className="skills">
                                <div className="one">
                                    <img className='mt-3' src={html} alt="" />
                                    <img className='mt-3' src={css} alt="" />
                                    <img className='mt-3' src={photoshop} alt="" />
                                    <img className='mt-3' src={linephoto} alt="" />
                                    <img className='mt-3' src={Xd} alt="" />
                                </div>
                            </div>
                            <button className='btn btn-primary'>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;