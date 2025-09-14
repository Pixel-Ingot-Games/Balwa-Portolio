export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  images?: string[]; // Made optional since we'll load dynamically
  status: string;
  platforms: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: 'goldeninuverse',
    title: 'Golden Inuverse',
    description: 'Built with Binance Smart Chain and Solana',
    longDescription: 'Built with Binance Smart Chain and Solana. Includes a custom cross-chain bridge. Features multiplayer battles and real-time voice/text chat. Large 20x10 km open-world map with rich vegetation, monuments, lakes. Includes NPC animals like chickens, rabbits, ducks, tigers, and dogs. Customizable characters with NFT-based items. Crypto wallet integration for in-game assets. Smart contract marketplace for secure trading. Hybrid Web2/Web3 architecture ensures seamless, fast gameplay.',
    technologies: ['Unity', 'C#', 'Web3', 'BSC', 'Solana', 'NFTs', 'Blockchain'],
    features: [],
    status: 'Published',
    platforms: ['PC'],
    year: '2023-2024'
  },
  {
    id: 'stellaverse',
    title: 'Stellaverse',
    description: 'Strategic space RPG with fleet-based combat',
    longDescription: 'Strategic space RPG with fleet-based combat. 7 ship types: Scout, Cruiser, Destroyer, Battleship, Carrier. Role system: Admiral, Captain, Lieutenant, General. Select 2 pylons (buffs) before battle: speed, damage, armor, health. Base building & module upgrades with earned points. Procedural generation for orbital battle environments. 20+ planets to conquer in each star system. Multiplayer PvP mode against real players. Turret-mounted weapons: lasers, projectiles, missiles. Advanced AI & modular code for easy expansion. Database-backed user accounts & storage system.',
    technologies: ['Unity', 'C#', 'Multiplayer', 'RPG', 'Strategy', 'AI'],
    features: [],
    images: [
      '/images/projects/stellaverse-1.jpg',
      '/images/projects/stellaverse-2.jpg',
      '/images/projects/stellaverse-3.jpg'
    ],
    status: 'Published',
    platforms: ['PC', 'Mobile'],
    year: '2023-2024'
  },
  {
    id: 'pulse',
    title: 'Pulse Ocean',
    description: 'Open World Multiplayer Fish Game with Blockchain',
    longDescription: 'Open World Multiplayer Fish Game with Blockchain. Built on Pulse Chain using Unity3D. Characters as NFTs and In-game crypto rewards. Two modes to play (Open world and Racing). Two racing maps with crypto rewards for all participents (PVP). Advanced technology for rendering high foliage on WEBGL. Fish floks and voids using Particle effects and FX graph. Intelligent particle effects with path following and evading behaviour. User Registration and Storage system.',
    technologies: ['Unity', 'C#', 'WebGL', 'Pulse Chain', 'NFTs', 'Multiplayer'],
    features: [],
    images: [
      '/images/projects/pulse-1.jpg',
      '/images/projects/pulse-2.jpg',
      '/images/projects/pulse-3.jpg'
    ],
    status: 'Published',
    platforms: ['WebGL'],
    year: '2022-2023'
  },
  {
    id: 'sf',
    title: 'SF WARS',
    description: 'Built with Unity HDRP for high-end visuals',
    longDescription: 'Built with Unity HDRP for high-end visuals. Massive 30x30 km open-world map. Used Kitbash Hollywood-quality assets. Advanced NPC AI with evasion and combat behaviors. Scalable traffic system handling 100+ cars intelligently. Includes FPS combat and car stealing/driving systems. Terrain and asset streaming for large-scale performance. Uses LOD, occlusion culling, mesh combine, atlasing, billboards, imposters for optimization. Designed as a GTA-style gameplay clone with modern systems.',
    technologies: ['Unity', 'C#', 'HDRP', 'Open World', 'AI', 'FPS'],
    features: [],
    images: [
      '/images/projects/sf-1.jpg',
      '/images/projects/sf-2.jpg',
      '/images/projects/sf-3.jpg'
    ],
    status: 'Published',
    platforms: ['PC'],
    year: '2022-2023'
  },
  {
    id: 'tractor',
    title: 'Tractor Farmer',
    description: 'Built a tractor farming game in Unity for iOS',
    longDescription: 'Built a tractor farming game in Unity for iOS with a complete farming simulation experience. Implemented an in-game shop system for buying tractors, vehicles, seeds, and equipment upgrades. Added multiple tractors and specialized vehicles (harvesters, plough machines, water trucks) with unique stats and customization. Designed multiple farm fields that players can unlock and manage individually. Developed a full farming cycle including ploughing, seeding, watering, fertilizing, and harvesting. Integrated multiple crop types such as wheat, corn, rice, and potatoes, each with unique growth stages, yields, and economic value. Balanced gameplay progression with currency management, unlockable upgrades, and expanding farm operations.',
    technologies: ['Unity', 'C#', 'iOS', 'Farming', 'Simulation', 'Mobile'],
    features: [],
    images: [
      '/images/projects/tractor-1.jpg',
      '/images/projects/tractor-2.jpg',
      '/images/projects/tractor-3.jpg'
    ],
    status: 'Published',
    platforms: ['iOS'],
    year: '2022-2023'
  },
  {
    id: 'kompete',
    title: 'Kompete',
    description: 'Developed a large-scale MMO game in Unity inspired by Kompete',
    longDescription: 'Developed a large-scale MMO game in Unity inspired by Kompete, featuring multiple gameplay loops including FPS combat, car racing, plane racing, and open-world exploration. Implemented multiplayer functionality using Photon PUN2 to support smooth real-time gameplay across all modes. Designed and built a massive 15x18 KM open-world map using Daia Pro, with diverse terrains and exploration areas. Integrated blockchain features on BSC with Web3 support through ThirdWeb, enabling players to own and trade in-game assets. Built progression systems, matchmaking, and player customization to enhance long-term engagement. Published the game for Windows and Android platforms with optimized performance and cross-platform support.',
    technologies: ['Unity', 'C#', 'Web3', 'BSC', 'Photon PUN2', 'MMO', 'Open World'],
    features: [],
    images: [
      '/images/projects/kompete-1.jpg',
      '/images/projects/kompete-2.jpg',
      '/images/projects/kompete-3.jpg'
    ],
    status: 'Published',
    platforms: ['Windows', 'Android'],
    year: '2022-2023'
  },
  {
    id: '2dtag',
    title: '2D Tag',
    description: 'Designed and developed a 2D runner/platformer game in Unity',
    longDescription: 'Designed and developed a 2D runner/platformer game in Unity with fast-paced tag-style gameplay. Created hand-drawn characters and animations, combining traditional art with procedural animation techniques. Implemented smooth character controls with jumping, dashing, wall-running, and parkour-inspired mechanics. Designed multiple levels with increasing difficulty, obstacles, and environmental hazards. Integrated AI-driven enemies using pathfinding (A*) to chase or tag the player dynamically. Added spatial audio, background music, and responsive sound effects to enhance immersion. Multiplayer with Photon Fusion 2.',
    technologies: ['Unity', 'C#', '2D', 'Photon Fusion 2', 'AI', 'Platformer'],
    features: [],
    images: [
      '/images/projects/2dtag-1.jpg',
      '/images/projects/2dtag-2.jpg',
      '/images/projects/2dtag-3.jpg'
    ],
    status: 'Published',
    platforms: ['iOS', 'Android'],
    year: '2021-2022'
  },
  {
    id: 'dawn',
    title: 'Dawn of Islam',
    description: 'Designed and developed an Islamic History app in Unity for mobile platforms',
    longDescription: 'Designed and developed an Islamic History app in Unity for mobile platforms (iOS and Android). Implemented interactive timelines covering major historical events, figures, and civilizations. Integrated multimedia content including images, audio narrations, and animations for an engaging learning experience. Added categorized sections for prophets, caliphs, battles, and dynasties with detailed descriptions. Built a user-friendly navigation system with bookmarks, search, and progress tracking. Optimized performance and UI/UX for mobile devices to ensure accessibility for all age groups. Published and maintained the app with regular updates and content expansion. Dynamic Delivery of content using Unity Gaming Services.',
    technologies: ['Unity', 'C#', 'iOS', 'Android', 'Education', 'Mobile'],
    features: [],
    images: [
      '/images/projects/dawn-1.jpg',
      '/images/projects/dawn-2.jpg',
      '/images/projects/dawn-3.jpg'
    ],
    status: 'Published',
    platforms: ['iOS', 'Android'],
    year: '2021-2022'
  },
  {
    id: '2048',
    title: '2048',
    description: 'Developed a multiplayer version of the classic 2048 puzzle game in Unity',
    longDescription: 'Developed a multiplayer version of the classic 2048 puzzle game in Unity with real-time competitive gameplay. Implemented networking using Photon to allow players to challenge each other in head-to-head matches. Designed an advanced AI bot capable of analyzing board states, predicting outcomes, and making optimal moves for high-level competition. Added matchmaking, leaderboards, and ranking systems to enhance player engagement. Optimized game logic for smooth performance on mobile and desktop platforms. Built a clean and responsive UI with animations, score tracking, and dynamic updates. Published as a modern twist on the original 2048, combining casual play with competitive multiplayer and AI-driven challenges.',
    technologies: ['Unity', 'C#', 'Photon', 'AI', 'Multiplayer', 'Puzzle'],
    features: [],
    images: [
      '/images/projects/2048-1.jpg',
      '/images/projects/2048-2.jpg',
      '/images/projects/2048-3.jpg'
    ],
    status: 'Published',
    platforms: ['iOS', 'Android'],
    year: '2020'
  },
  {
    id: 'woble',
    title: 'Woble Boxing',
    description: 'Designed and developed a 2D physics-based boxing game in Unity',
    longDescription: 'Designed and developed a 2D physics-based boxing game in Unity with fun and exaggerated wobble mechanics. Implemented ragdoll-style character movement and punch mechanics driven by physics for unpredictable, comedic gameplay. Added multiple playable characters with distinct animations, stats, and customization options. Designed arenas with interactive objects and environmental hazards to add variety to matches. Integrated local multiplayer and AI opponents with adjustable difficulty levels. Built a responsive UI with health bars, timers, and score tracking for competitive play. Optimized performance across iOS and Android devices, ensuring smooth physics simulations. Competitive multiplayer and AI-driven challenges.',
    technologies: ['Unity', 'C#', '2D', 'Physics', 'Multiplayer', 'Boxing'],
    features: [],
    images: [
      '/images/projects/woble-1.jpg',
      '/images/projects/woble-2.jpg',
      '/images/projects/woble-3.jpg'
    ],
    status: 'Published',
    platforms: ['iOS', 'Android'],
    year: '2020-2021'
  }
];

// Utility function to get project images dynamically
export const getProjectImages = async (projectId: string): Promise<string[]> => {
  try {
    // Try to load a manifest file first (if it exists)
    const manifestPath = `/images/projects/${projectId}/manifest.json`;
    const manifestResponse = await fetch(manifestPath);
    
    if (manifestResponse.ok) {
      const manifest = await manifestResponse.json();
      return manifest.images.map((img: string) => `/images/projects/${projectId}/${img}`);
    }
  } catch (error) {
    console.log(`No manifest found for ${projectId}, will use fallback`);
  }

  // Fallback: return empty array for now
  // In a real implementation, you could scan the directory or use a build-time script
  return [];
};

// Get thumbnail image path
export const getProjectThumbnail = (projectId: string): string => {
  return `/images/projects/${projectId}-thumb.png`;
};

export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
};
