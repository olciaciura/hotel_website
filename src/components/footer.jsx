import React from "react";

function Footer (props) {

    return(
        <div className={props.jumpedToFooter ? 'bigger_footer' : 'smaller_footer'} id="footer">
            {console.log('footer:' +  props.jumpedToFooter)}
            <div className="footer-container">
                <p id="title1">Chwila... Moment</p>
                <p id="content">Jolanta Piecuch<br/><br/>
                Stary Gierałtów</p>
            </div>
            <div className="footer-container">
                <p id="title2">Kontakt</p>
                <div className="one_line">
                    <div className="one_line_image">
                        <img className="icon" src={'../../phone.png' }/>
                    </div>
                    <p id="content">+48 603 852 021</p>
                </div>
                <div className="one_line">
                    <div className="one_line_image">
                        <img className="icon" src={'../../mail.png' }/>
                    </div>
                    <a href='mailto:chwilamoment@vp.pl'>chwilamoment@vp.pl</a>
                </div>
                <div className="one_line">
                    <div className="one_line_image">
                        <img className="icon" src={'../../location.png' }/>
                    </div>
                    <a href="https://www.google.pl/maps/place/Chwila+Moment/@50.3062261,16.9478778,15z/data=!4m15!1m8!3m7!1s0x4711e2fd898bec63:0xf3e83b6c57ff8adb!2s57-550+Stary+Giera%C5%82t%C3%B3w,+Polska!3b1!8m2!3d50.3076196!4d16.9330405!16s%2Fm%2F03ctllw!3m5!1s0x4711e3fd89121895:0xf0271048c0addb6e!8m2!3d50.3046746!4d16.946234!16s%2Fg%2F11khkf2fh6" target="_blank">Lokalizacja</a>
                </div>
                <div className="one_line">
                    <div className="one_line_image">
                        <img className="icon" src={'../../booking.png' }/>
                    </div>
                    <a href="https://www.booking.com/hotel/pl/chwila-moment-apartament-lub-caly-dom-w-gorach.pl.html?aid=1258472&label=Share-XJeCFu%401681325973" target="_blank">www.booking.com</a>
                </div>
                <div className="one_line">
                    <div className="one_line_image">
                        <img className="icon" src={'../../airbnb.png' }/>
                    </div>
                    <a href="https://www.airbnb.pl/rooms/867975065477852749?guests=1&adults=1&s=67&unique_share_id=a064a2e2-8c81-4058-ac48-2e363dfc7477&fbclid=IwAR2X4EfshesjieW3zepZTYb7-Z9wJK1E8z2Fz4Or6hH9J-nMDQCdq4YoPNY&source_impression_id=p3_1683628534_zzZTkrfubM5hSNkF" target="_blank">www.airbnb.pl</a>
                </div>
            </div>
        </div>
    );
}
export default Footer;