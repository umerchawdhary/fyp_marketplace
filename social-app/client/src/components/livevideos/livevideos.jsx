import { useEffect } from "react";
import $ from "jquery";
import 'magnific-popup';
import Header from "./components/header";
import Video from "./components/video";
import thumb01 from "../../assets/images/thumbs/thumb01.jpg"
import thumb02 from "../../assets/images/thumbs/thumb02.jpg"
import thumb03 from "../../assets/images/thumbs/thumb03.jpg"
import thumb04 from "../../assets/images/thumbs/thumb04.jpg"
import thumb05 from "../../assets/images/thumbs/thumb05.jpg"

function Videos({ userId, isAuth }) {

    useEffect(() => {
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });
    }, [])

    return (
        <>
            <section className="trending-gamepay-area">
                <div >
                    <Header userId={userId} isAuth={isAuth}/>
                    {/* <div className="row">
                        <Video path={thumb01} />
                        <Video path={thumb02} />
                        <Video path={thumb05} />
                        <Video path={thumb03} />
                        <Video path={thumb04} />
                        <Video path={thumb05} />
                    </div> */}
                </div>
            </section>
            <div className="post-loader no-more">
                <div className="no-more-text">
                    <p>no more videos</p>
                </div>
            </div>
        </>
    )
}

export default Videos