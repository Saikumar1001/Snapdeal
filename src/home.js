import Carousel from "./components/Carousel";
import Top from "./components/Fetch";
import Fetch1 from "./components/Fetch1";
import Section from "./components/Fetch2";
import Footer from "./components/Footer";
import Img from "./components/Img";
import Img1 from "./components/Img1";
import Img2 from "./components/Img2";
import Nav from "./components/Nav";



function Home() {
    return (
        <div className="App">
            <Nav />
            <Carousel />
            <Top />
            <Img />
            <Img1 />
            <Img2 />
            <Fetch1 />
            <Section />
            <Footer />
        </div>
    );
}

export default Home;
