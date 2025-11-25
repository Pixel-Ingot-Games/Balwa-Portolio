import GlitchText from './GlitchText'
import Layout from './Layout'
import ProjectModal from './ProjectModal'
import VRProjects from './VRProjects'
import { useState } from 'react'
import { projects } from './data/projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use all projects for display
  const allProjects = projects;

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout>

      <header className="hero">
        <div className="container">
          <GlitchText className="hero-title" speed={0.4} enableShadows enableOnHover={false}>
            SAMAD QAMAR
          </GlitchText>
          <GlitchText className="hero-tagline" speed={0.35} enableShadows enableOnHover={true}>
            Code, craft, conquer: Building worlds one pixel at a time.
          </GlitchText>
          <p className="hero-sub">
            Senior Unity Game Developer and Designer. 8+ years across Multiplayer, AR/VR, Web3, Level Design,
            3D Modelling, and Machine Learning. Published on Desktop, Mobile, and Web.
          </p>
          <div className="cta-row">
            <a className="btn" href="https://wa.me/60143923670">Whatsapp</a>
            <a className="btn secondary" href="https://www.linkedin.com/in/samad-qamar" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn secondary" href="https://github.com/samadqamar" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn secondary" href="https://www.instagram.com/_unbound_x" target="_blank" rel="noreferrer">Instagram</a>
            <a className="btn secondary" href="https://x.com/_unboundX" target="_blank" rel="noreferrer">X/ Twitter</a>
            <a className="btn" href="mailto:samadqamar755@gmail.com">Email</a>

          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section container about">
          <div className="about-content">
            <h2 className="section-title">About ME</h2>
            <p>
            I am a Senior Unity Game Developer and Designer with over 8 years of experience building games across PC, mobile, WebGL, and AR/VR platforms.
             I specialize in multiplayer systems, Web3 integration, level design, 3D modeling, and performance optimization. I have led cross-functional 
             teams and managed projects from concept to launch, creating immersive and engaging experiences. Passionate about combining creativity and technology,
              I strive to deliver innovative games that players love.
            </p>
            
          </div>
          <img className="about-img" src="/images/mug.png" alt="Mug" />
        </section>

        <section id="skills" className="section container skills-section">
          <h2 className="section-title">Core Skills</h2>
          <div className="skills-images" aria-label="Skills">
            <img className="skills-img" src="/images/skill0.png" alt="Skills 0" tabIndex={0} />
            <img className="skills-img" src="/images/skills1.png" alt="Skills 1" tabIndex={0} />
            <img className="skills-img" src="/images/skills3.png" alt="Skills 3" tabIndex={0} />
          </div>
        </section>

        <section id="roles" className="section experience-section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="exp-stack">
            <article className="exp-card">
              <div className="exp-inner container">
                <h4>Senior Developer & Project Manager</h4>
                <p className="exp-company">Voxan Solution Sdn Bhd | Kuala Lumpur, Malaysia</p>
                <p className="exp-duration">Jan 2025 - Present</p>
                <div className="exp-tech">Key Technologies: Unity, C#, Mirror, Photon Fusion 2, Python, AWS (S3, EC2), Solidity, Rust, Firebase, MySQL</div>
                <ul className="exp-achievements">
                  <li>Designed and developed a Shooting Game for Android on Unity</li>
                  <li>Developed a POS for Automated Coffee machine on C# and Python</li>
                  <li>Developed a Coin ICO system with whitelisting, pre-sale, loyalty program, staking system and affiliate system</li>
                  <li>Designed and developed HillClimb racing clone, and added multiplayer mode using Photon Fusion 2, and also added Web3 In-game items on BSC</li>
                  <li>Developed a Smart VR arena in Unity which changes the position of walls and obstacles by taking data directly from the real world space</li>
                </ul>
              </div>
            </article>
            <article className="exp-card">
              <div className="exp-inner container">
                <h4>Game Director & Senior Game Developer</h4>
                <p className="exp-company">GateGames | Hanoi, Vietnam (Remote)</p>
                <p className="exp-duration">March 2023 - Dec 2024</p>
                <div className="exp-tech">Key Technologies: Unity, C#, Photon Fusion, Solidity, Node, ReactJS, MongoDB, Firebase, Blender, Illustrator, Photoshop, Substance Painter, CI/CD pipeline using Unity Cloud Build, Unity Game Services</div>
                <div className="exp-projects">
                  <h5>STELLAVERSE (MMO RPG)</h5>
                  <ul>
                    <li>Designed and developed a Space RPG from scratch on Unity</li>
                    <li>Published it for PC and Mobile (IOS) with CrossPlatform Multiplayer</li>
                    <li>Integrated Web3 (Crypto Coin, NFT avatars and NFT rewards) all within Unity</li>
                    <li>Used State Pattern, Observer Pattern, Command Pattern and Factory Pattern to develop the game</li>
                    <li>Developed a dashboard to add new NPC's, Quests and change Web3 rewards</li>
                  </ul>
                  <h5>GALIXITY (Top Down Shooter)</h5>
                  <ul>
                    <li>Reskinned an entire old project</li>
                    <li>Added a custom lighting system for mobile (allowed us to render more than 30 lights)</li>
                    <li>Added AssetBundles to reduce AAB size and dynamic delivery of content</li>
                    <li>Published it for PC and Mobile (Android) with CrossPlatform Multiplayer</li>
                    <li>Integrated Web3 (Crypto Coin, NFT avatars and NFT rewards) all within Unity</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="exp-card">
              <div className="exp-inner container">
                <h4>Senior Developer & Project Manager</h4>
                <p className="exp-company">SilverBack Events | Brisbane, Australia (Contractual)</p>
                <p className="exp-duration">Feb 2022 - Jan 2023</p>
                <div className="exp-tech">Key Technologies: Unity, C#, Mirror, ReactJS, PlayFab, MongoDB, Firebase, Blender, Illustrator, CI/CD pipeline</div>
                <div className="exp-projects">
                  <h5>DIGITAL TWIN OF AN ARENA</h5>
                  <ul>
                    <li>Design and Developed a Digital version of an events arena in Unity</li>
                    <li>Implement a middleware using Python and implement the system in custom Bracelets to sync each person's position in our Unity app</li>
                    <li>Optimised the application as well as Mirror networking to handle 5000+ ccu</li>
                    <li>Made an entire digital arena in Blender and populated it with real time locations of each person in Unity</li>
                    <li>Published the Visitor version on IOS and Android and deployed the Admin version on WebGL</li>
                  </ul>
                  <h5>DIGITAL TWIN OF AN EXHIBITION HALL</h5>
                  <ul>
                    <li>Designed and Developed a Digital version of an Exhibition hall in Unity</li>
                    <li>Allowed companies and attendees to register on the website and sync all the information to the Unity app</li>
                    <li>Implemented a system where companies can upload 3D models of their booths which can show Images, Videos and 3D products</li>
                    <li>Implemented a complex user management system using Firebase</li>
                    <li>Implemented multiplayer using Mirror and added different roles, authority, access levels and features to different users</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="exp-card">
              <div className="exp-inner container">
                <h4>Senior Game Developer</h4>
                <p className="exp-company">HarborForge Gaming LTD | Southampton, United Kingdom (Remote)</p>
                <p className="exp-duration">Jan 2020 - Jan 2022</p>
                <div className="exp-tech">Key Technologies: Unity, C#, Mirror, Photon, CI/CD pipeline, ReactJS, PlayFab, MongoDB, Firebase, Blender, Illustrator</div>
                <ul className="exp-achievements">
                  <li>Project lead for a Robot game inspired from Crossout. I implemented NPC's using Unity's ML agents which learned from players at realtime and devised different strategies</li>
                  <li>Developed and Designed a Space themed Parking Game from scratch in Unity, And published it for Android</li>
                  <li>Designed levels and cutscenes for an animated series in Unity. Used different film making techniques to achieve cinematic story telling</li>
                  <li>Developed a complete web based mission system as a product. It allowed our clients to add new missions and quests in their games directly from the web</li>
                  <li>I also designed shaders for mobile devices which reduced the cost of rendering shadows and screen space UI</li>
                  <li>Developed multiple multiplayer games for Android which includes FPS, Racing, Survival and RPG games</li>
                  <li>Developed custom tools to speed up level design, which in turn allowed the designers to add functionalities while they designed</li>
                </ul>
              </div>
            </article>
            <article className="exp-card">
              <div className="exp-inner container">
                <h4>Indie Game Developer</h4>
                <p className="exp-company">Pixel Ingot Games</p>
                <p className="exp-duration">Oct 2016 - Present</p>
                <div className="exp-tech">Key Technologies: Unity, C#, Mirror, Photon, ReactJS, PlayFab, MongoDB, Firebase, Blender, Illustrator, Solidity, Rust, Anchor, Node, MySQL, CI/CD pipeline, Unity Gaming Services, HLSL</div>
                <div className="exp-projects">
                  <h5>Notable Projects:</h5>
                  <ul>
                    <li><strong>Golden Inuverse (MMO RPG web3):</strong> 21x10 KM map with 3 biomes, Photon Fusion 2 networking, Solana integration, custom Node app for auto-signed transactions, volumetric lighting shaders, custom Windows launcher</li>
                    <li><strong>Kompete Clone:</strong> 4 gameplay loops (FPS, Car racing, Plane Racing, Open world), 15x18 KM map, Web3 on BSC, Third Web middleware, published on Windows and Android</li>
                    <li><strong>Transformers Clone:</strong> Self-modeled and animated characters, story missions with increasing difficulty, published for Android</li>
                    <li><strong>Space Sim:</strong> Multiple planets, custom atmospheric scattering, volumetric fog, DOTS for NPC's and traffic, GPU instancing for thousands of asteroids, published on Steam</li>
                    <li><strong>2D Parkour Game:</strong> Hand-drawn characters and animations, IK on hand-drawn characters, procedural enemy animations, published for iOS and Android</li>
                    <li><strong>Zombie Apocalypse Game:</strong> Thousands of NPC's, DOTS implementation allowing 60fps on Android, published on Steam</li>
                    <li><strong>Farming Simulator:</strong> Realistic graphics, dynamic asset streaming from Firebase, terrain-based painting, published for iOS and Android</li>
                    <li><strong>2D Mining Game:</strong> Realtime terrain modification, procedural cave networks, A* NPC navigation, spatial sounds, published on Apple Arcade and Switch</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section container projects-section">
          <h2 className="section-title">Featured Projects</h2>
          {allProjects.reduce((bundles, project, index) => {
            const bundleIndex = Math.floor(index / 3);
            if (!bundles[bundleIndex]) bundles[bundleIndex] = [];
            bundles[bundleIndex].push(project);
            return bundles;
          }, [] as typeof allProjects[]).map((bundle, bundleIndex) => (
            <div key={bundleIndex} className="project-bundle">
              <div className="projects-images" aria-label={`Project Bundle ${bundleIndex + 1}`}>
                {bundle.map((project, index) => (
                  <img 
                    key={project.id}
                    className="project-img" 
                    src={`/images/projects/${project.id}-thumb.png`} 
                    alt={project.title}
                    tabIndex={0}
                    onClick={() => handleProjectClick(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleProjectClick(project);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">© {new Date().getFullYear()} Samad Qamar</div>
          <div className="footer-links">
            <a className="social-btn instagram" href="https://www.instagram.com/_unbound_x" target="_blank" rel="noreferrer">Instagram</a>
            <a className="social-btn twitter" href="https://x.com/_unboundX" target="_blank" rel="noreferrer">Twitter</a>
            <a className="social-btn github" href="https://github.com/samadqamar" target="_blank" rel="noreferrer">GitHub</a>
            <a className="social-btn linkedin" href="https://www.linkedin.com/in/samad-qamar" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="social-btn whatsapp" href="https://wa.me/60143923670" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vr-projects" element={<VRProjects />} />
      </Routes>
    </BrowserRouter>
  )
}


