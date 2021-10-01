import './../Content.css'

const FacebookSide = () => {
    return(
        <div className="facebook-side">
            <div className="facebook-plugin">
                {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstowarzyszeniepartytura%2F&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="400" style={{border:"none", overflow:"hidden", borderRadius: "5%"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
            </div>
            <div className="social-links">
                <a href="">
                    <img src={process.env.PUBLIC_URL + '/youtube_icon.png'}/>
                </a>
                <a href="">
                    <img src={process.env.PUBLIC_URL + '/facebook_icon.png'}/>
                </a>
                <a href="">
                    <img src={process.env.PUBLIC_URL + '/instagram_icon.png'}/>
                </a>
            </div>
        </div>
    );
}

export default FacebookSide;