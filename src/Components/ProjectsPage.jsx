import "./Projstspage.css";
import pro_1 from '../Images/1.jpg';
import pro_2 from '../Images/2.jpg';
import pro_3 from '../Images/3.jpg';
import pro_4 from '../Images/4.jpg';
import pro_5 from '../Images/5.jpg';
import pro_6 from '../Images/6.jpg';
import pro_7 from '../Images/magia.jpg';
import pro_8 from '../Images/8.png';
import pro_10 from '../Images/10.jpg';
import pro_11 from '../Images/11.png';
import pro_12 from '../Images/12.png';
import pro_13 from '../Images/13.jpg';
// import pro_7 from '../Images/7.jpg';
function ProgectsPage() {
    return (
        <section className="progectsPage bg-dark">
            <h3 className="heading text-center my-4 text-danger">
                Magia Projects
            </h3>
            <div className="container">
                <div className="pages">
                    <div className="page text-center">
                        <p className="text-white">Magia Protfolio</p>
                    </div>
                    <div className="page text-center">
                        <p className="text-white">Magia Blog</p>
                    </div>
                    <div className="page text-center">
                        <p className="text-white">Magia Page</p>
                    </div>
                </div>
                <div className="images">
                    <div className="row">

                        <div className=" box col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_1} alt="" />
                            <h4 className="text-danger my-3">Magia Blog</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/blog-plus-Magia/">LiveDemo</a></p>
                        </div>

                        <div className="col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_2} alt="" />
                            <h4 className="text-primary my-3">My Protfolio</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Main-protolio-cv/main.html">LiveDemo</a></p>
                        </div>

                        <div className=" box col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_3} alt="" />
                            <h4 className="text-danger my-3">Company Insur</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Companey-protfolio/">LiveDemo</a></p>
                        </div>

                        <div className="col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_4} alt="" />
                            <h4 className="text-primary my-3">Adidas Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Adidas-shop/">LiveDemo</a></p>
                        </div>

                        <div className=" box col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_5} alt="" />
                            <h4 className="text-danger my-3">Movies Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Tech-taitens/">LiveDemo</a></p>
                        </div>

                        <div className=" col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_6} alt="" />
                            <h4 className="text-primary my-3">Fashion Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Fashion/">LiveDemo</a></p>
                        </div>

                        <div className=" box col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_7} alt="" />
                            <h4 className="text-danger my-3">Magia Protfolio</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/MAGIA-MAIN/">LiveDemo</a></p>
                        </div>

                        <div className="  col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_8} alt="" />
                            <h4 className="text-primary my-3">customer reviews</h4>
                            <p className="text-white"><a href="#/">LiveDemo</a></p>
                        </div>

                        <div className=" box col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_10} alt="" />
                            <h4 className="text-danger my-3">Avatar Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Travel2/master.html">LiveDemo</a></p>
                        </div>

                        <div className="  col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_11} alt="" />
                            <h4 className="text-primary my-3">Groco Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/online-Market/">LiveDemo</a></p>
                        </div>
                        <div className=" box col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_12} alt="" />
                            <h4 className="text-danger my-3">Crops Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/Crops-restaurant/">LiveDemo</a></p>
                        </div>
                        <div className="  col-lg-4 my-4 col-md-6 text-center">
                            <img src={pro_13} alt="" />
                            <h4 className="text-danger my-3">Omega Project</h4>
                            <p className="text-white"><a href="https://abdallhelzayat2020.github.io/OMEGa-Progect/master.html">LiveDemo</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProgectsPage;