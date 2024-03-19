import toad from "../assets/images/toadone.png";

const Roadmap = () => {
    return ( 
        <>
            <div  className="roadmap">
                <div className="wrapper">
                    <div className="roadmap-container">
                        <div className="roadmap-container-content">
                            <h2>BEEFMAP</h2>
                            <ul className="roadmap-content">
                                <li><p className="roadmap-content-item-one"><span>Phase 1</span> &nbsp; (Presale): Memes, Good vibes, Preparing for Takeoff</p></li>
                                <li><p className="roadmap-content-item-two"><span>Phase 2</span> &nbsp; (Public, DEX): Swap, Vibe, HODL, Repeat. Share cocks, Cook beef</p></li>
                                <li><p className="roadmap-content-item-three"><span>Phase 3</span> &nbsp; CEX listing on popular platforms</p></li>
                                <li><p className="roadmap-content-item-for"><span>Phase 4</span> &nbsp; NFT collection (free for $BEEF holders), Mini-Game</p></li>
                                <li><p className="roadmap-content-item-for"><span>Phase 5</span> &nbsp; Expanding $BEEF Ecosystem</p></li>
                            </ul>
                        </div>
                        <img src={toad} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Roadmap;