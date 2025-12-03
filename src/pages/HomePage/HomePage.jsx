import Hero from "../../components/Hero/Hero.jsx";
import TechStackMarquee from "../../components/TechStack/TechStackMarquee.jsx";
import FeaturedWork from "../../components/FeaturedProjects/FeaturedWork.jsx";
import './HomePage.css'


export function HomePage() {
    const bgStyle = {
        backgroundImage: `url('/assets/top-1.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll'
    };

    return (
        <div className="home-page" style={bgStyle}>
        <title>Paul Akelo</title>
            <Hero />
            <TechStackMarquee />
            <FeaturedWork />
        </div>
    );
}