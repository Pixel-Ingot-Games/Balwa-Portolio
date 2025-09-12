export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  images: string[];
  status: string;
  platforms: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: 'stellaverse',
    title: 'Stellaverse (MMO RPG)',
    description: 'Cross‑platform MMO with Web3 integration and Firebase authentication.',
    longDescription: 'Stellaverse is a massive multiplayer online role-playing game set in a vast space universe. Players can explore multiple planets, engage in space combat, trade resources, and participate in large-scale battles. The game features a unique Web3 integration that allows players to own and trade NFT avatars, weapons, and ships. Built with Unity and powered by Photon Fusion for seamless cross-platform multiplayer experiences.',
    technologies: ['Unity', 'C#', 'Photon Fusion', 'Web3', 'Solidity', 'Firebase', 'Node.js', 'MongoDB'],
    features: [
      'Cross-platform multiplayer (PC, Mobile, iOS)',
      'Web3 integration with NFT avatars and rewards',
      'Real-time space combat system',
      'Dynamic economy with player trading',
      'Procedural planet generation',
      'Guild system with large-scale battles',
      'Custom dashboard for content management'
    ],
    images: [
      '/images/projects/stellaverse-1.jpg',
      '/images/projects/stellaverse-2.jpg',
      '/images/projects/stellaverse-3.jpg'
    ],
    status: 'Published',
    platforms: ['PC', 'Mobile', 'iOS'],
    year: '2023-2024'
  },
  {
    id: 'galixity',
    title: 'Galixity (Top‑Down Shooter)',
    description: 'Custom mobile lighting system with Web3 rewards and cross-platform multiplayer.',
    longDescription: 'Galixity is a fast-paced top-down shooter that combines classic arcade gameplay with modern Web3 features. The game features a custom mobile lighting system that allows rendering of more than 30 lights simultaneously while maintaining 60fps on mobile devices. Players can earn and trade NFT rewards, customize their ships, and compete in cross-platform multiplayer matches.',
    technologies: ['Unity', 'C#', 'Mobile Optimization', 'AssetBundles', 'Web3', 'Photon Fusion', 'HLSL Shaders'],
    features: [
      'Custom mobile lighting system (30+ lights)',
      'AssetBundles for dynamic content delivery',
      'Web3 rewards and NFT integration',
      'Cross-platform multiplayer',
      'Procedural weapon generation',
      'Real-time leaderboards',
      'Custom shader effects for mobile'
    ],
    images: [
      '/images/projects/galixity-1.jpg',
      '/images/projects/galixity-2.jpg',
      '/images/projects/galixity-3.jpg'
    ],
    status: 'Published',
    platforms: ['PC', 'Android'],
    year: '2023'
  },
  {
    id: 'vr-arena',
    title: 'Smart VR Arena',
    description: 'Real‑world‑aware arena with dynamic obstacles streamed to VR.',
    longDescription: 'The Smart VR Arena is an innovative virtual reality experience that bridges the physical and digital worlds. Using IoT sensors and real-time data processing, the virtual arena dynamically adapts to the physical space, creating walls and obstacles that correspond to real-world objects. This creates an immersive experience where players can safely navigate virtual environments that respect physical boundaries.',
    technologies: ['Unity', 'VR', 'Real-time Data', 'IoT Integration', 'Python', 'C#', 'WebSockets'],
    features: [
      'Real-time physical space mapping',
      'Dynamic obstacle generation',
      'IoT sensor integration',
      'Multiplayer VR support',
      'Safety boundary system',
      'Real-time data streaming',
      'Custom VR interaction system'
    ],
    images: [
      '/images/projects/vr-arena-1.jpg',
      '/images/projects/vr-arena-2.jpg',
      '/images/projects/vr-arena-3.jpg'
    ],
    status: 'In Development',
    platforms: ['VR', 'PC'],
    year: '2024-2025'
  }
];

export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
};
