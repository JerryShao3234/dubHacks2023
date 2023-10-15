import './Home.css';

export default function Home({showMainPage, setShowMainPage, handleButtonClick}) {

    return (
        <div class="home-div">
            <h1 id='title'>Music Globe</h1>
            <h2 id='subtitle'>Unlock the Global Groove: Your Passport to the Hottest Local Hits Worldwide!</h2>
            <button id='home-btn' onClick={handleButtonClick}>Get Started</button>
        </div>
    )
}
