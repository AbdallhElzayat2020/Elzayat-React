import './Sidebar.css'
function Sidebar() {
    return (
        <>
            <div className="sidebar w-100 bg-dark">
                <h5 className='heading text-center text-white p-3'>Developed By <span className='text-warning'>Abdallh Elzayat</span> 🤍 2023</h5>
                <div className="social d-flex justify-content-evenly">
                    <a className='btn btn-primary me-3' href='https://www.facebook.com/abdalla.elzayat.73'>Facebook</a>
                    <a className='btn btn-primary me-3' href='https://github.com/AbdallhElzayat2020?page=1&tab=repositories'>GitHup</a>
                    <a className='btn btn-primary me-3' href='https://www.linkedin.com/in/abdallh-elzayat-924a00259/'>LinkedIn</a>
                </div>
            </div>
        </>
    )
}

export default Sidebar;