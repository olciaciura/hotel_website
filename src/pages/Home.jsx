import React, { useEffect, useState } from "react";
export function Home(){

    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 10000);
    
        return () => clearTimeout(timeout);
      }, [activeIndex]);

    return(
        <div id='page'>
        <div className='container'>
          <div className='wrapper'>
            <img
              src={activeIndex === 0 ? '../../home/main.png' :  '../../home/main2.png' }
              alt='Image'
            />
          </div>
        </div>
                <p><span id='bigger'>Ciągle w biegu i niedoczasie… Czas pędzi… życie pędzi… i my też nieustannie pędzimy…
                <br/><br/>
                <span id='nazwa_large'> Chwila… Moment </span> to miejsce, które pozwoli Wam wyrwać się z tego codziennego wyścigu  i na Chwilę zatrzymać. Po co? Aby dostrzec i w pełni smakować ten krótki czas, Moment, który podarowaliście sobie na wspólne bycie z dziećmi, rodziną, przyjaciółmi czy znajomymi. 
                <br/>W życiu piękne są tylko chwile – tak śpiewał kiedyś Dżem, a ja tworząc dla Was „Chwilę… Moment”, miałam w głowie jeszcze inną myśl: <i>w życiu Ważne są tylko chwile…</i>.
                <br/><br/>Tak więc, zapraszam Was do miejsca – gdzie czas może się na chwilę zatrzymać … 
                <br/>Łapcie Momenty i Chwile wspólnie spędzone, zauważcie je, doceńcie, cieszcie się nimi - niech zostaną z Wami jak najdłużej! 
                <br/>Kotlina Kłodzka, Góry Złote, Stary Gierałtów - mam nadzieję, że nurt pędzącego życia wyrzuci Was na brzeg Białej Lądeckiej w tym właśnie miejscu – choćby na Chwilę… Moment 😊 
                <br/><br/><span id='do_prawej'>Jola</span> <br/></span>
                </p>
            <div className="background_img">
                <img className="background_img" id="about_me" src={'../../home/o_mnie.jpg'}/> 
                <p id="about_me">O mnie</p>
            </div>
                <p>Cześć, mam na imię Jola. Kilkanaście lat temu przypadek sprawił, że przyjechałam do Starego Gierałtowa i zakochałam się w tym miejscu. 
                    Od tego czasu spędzam tu każdą wolną chwilę. To moje miejsce na ziemi. Chcę się z Wami podzielić tym niezwykłym dla mnie zakątkiem świata. 
                    Zapraszam Was serdecznie do Kotliny Kłodzkiej, nad brzeg Białej Lądeckiej, do ciszy i spokoju, pięknych krajobrazów i dobrej energii Starego Gierałtowa.</p>
        </div>
    )
}
export default Home;