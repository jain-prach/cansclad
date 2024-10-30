import "./Hero.css";
import defaultHeroImage from "../../assets/images/defaultHeroImage.jpg";

function Hero({ heroImage = defaultHeroImage}) {
    return (
        <section className="hero" id="hero" style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="hero-container">
                
            </div>
        </section>
    )
}

export default Hero