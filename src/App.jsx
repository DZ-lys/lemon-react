import "./style.css"
import Hheader from "./components/Hheader";
import Slider from "./components/Slider";
import Scroll from "./components/Scroll";
import Mbartender from "./components/Mbartender";
import SideNews from "./components/SideNews";
import NewsList from "./components/NewsList";
import Cards from "./components/Cards";
import Headline from "./components/Headline";

const App = () =>{
    return (
        <div>
            <Hheader />
            <Slider /> 
            <div className="mediaSection">
                <div>
                    <div><Headline /></div>
                    <div className="scrollMedia">
                        <Scroll />
                        <Mbartender />
                    </div>
                </div>
                <SideNews />
            </div>
            <div className="listContainer">
                <NewsList />
                <div className="path">
                    <div className="absImgs">
                        <div className="absImg1"><img src="lemo1.png" alt="" /></div>
                        <div className="absImg2"><img src="lemo2.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <Cards />
        </div>
    );
}

export default App