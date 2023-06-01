import './Banner.css';

const Banner = () =>{
    return(
        <section className='bannerContainer'>
            <section className='bannerTitle'>
                <h1>
                    WELCOMER!!!
                </h1>
                <p>
                    This is my first app
                </p>
            </section>

            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80" alt="" />
        </section>
        
    )
}
export default Banner;