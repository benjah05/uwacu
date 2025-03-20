import './pages.css';
import rollingHillsImage from './images/rolling_hills_at_sunset.png';
import imigongoArt from './images/imigongo_art.png';
import { Link } from "react-router-dom";

export default function Home() {
    return (
    <><div style = {{ padding: '2rem' }}>
        <h1>Uwacu: Reconnecting Rwanda’s Heritage with the World</h1>
        <div className='center-container'>
        <p><img src={rollingHillsImage} alt='Rolling Hills of Rwanda at sunset:)'/></p>
        <div className="text">
        <p>Uwacu is a vibrant platform that bridges Rwanda’s rich cultural heritage with the next generation, inspiring national pride and creating meaningful opportunities.
        Through interactive sessions, cultural games, and community-driven learning, we reconnect Rwandan youth and the diaspora with their roots, fostering a deep sense of identity in a globalized world.
        Whether you’re learning, teaching, or exploring, Uwacu celebrates Rwanda’s traditions, history, and values while building a sustainable ecosystem for cultural education.
        <br/>
        Join us in preserving our heritage, empowering communities, and inspiring pride in Rwanda’s vibrant culture—wherever you are in the world.
        </p></div>
        <br/><br/>
        <div className='signup-button'>
            <Link to='/AuthPage'>
                <button className='signup'>Sign Up</button>
            </Link>
        </div>
        <br/><br/><br/>
        <div className="side-by-side-container">
            <div className="image-container">
                <img src={imigongoArt} alt="Imigongo Art" />
            </div>
            <div className="text-container">
                <p>
                For students, Uwacu offers an engaging platform to explore Rwanda’s rich cultural heritage through interactive lessons, games, and competitions, fostering a deep sense of identity and pride.
                Teachers benefit from a dynamic toolkit to share their knowledge, create culturally enriching content, and inspire the next generation while earning meaningful income.
                Traders gain access to a vibrant marketplace to showcase and sell authentic cultural products, connecting with a global audience passionate about Rwandan traditions.
                Together, Uwacu creates a thriving ecosystem that celebrates and preserves Rwanda’s cultural legacy for generations to come.
                </p>
            </div>
        </div>
        </div>
    </div></>
    );
}