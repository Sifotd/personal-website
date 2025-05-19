import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">My Resume</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Sifotd</h1>
                <p className="text-xl text-gray-600 mb-4">Job Title</p>
                <p className="text-gray-600 mb-6">
                  Member of HoH community, third-year student at Chengdu University of Information Technology. Outgoing personality with excellent communication and teamwork skills. During freshman year, worked part-time as a driving school sales representative, successfully signed 11 contracts and earned over 3,000 yuan in bonuses. Achieved 29th place in the 2023 Kaiwu AI Team Competition, second prize in the 2024 Kaiwu AI Team Competition, 22nd place in the Sichuan-Chongqing Intelligent Traffic Signal Scheduling Track, and first prize for outstanding team in the Sichuan-Chongqing region. Won first place in the 2024 HackQuest Hackathon Education Track, and second prize in the 2025 Flow Hackathon AI Track. Currently actively participating in Sui Overflow, Sol Breakout, and other hackathons with teammates to continuously improve technical and project implementation capabilities.
                </p>
                <p className="text-gray-600 mb-2">
                  Contact: <a href="mailto:ash20040516@gmail.com" className="text-blue-600 hover:underline">ash20040516@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Programming Languages</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>TypeScript / JavaScript</li>
                  <li>Rust</li>
                  <li>Move</li>
                  <li>Solidity</li>
                  <li>Python</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technologies & Frameworks</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Next.js, React</li>
                  <li>Tailwind CSS</li>
                  <li>Blockchain Development (Move, Solidity, Sui, Aptos, Ethereum, etc.)</li>
                  <li>CI/CD (GitHub Actions, etc.)</li>
                  <li>Open Source Collaboration</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Other Capabilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Strong learning ability, continuously participating in blockchain learning camps</li>
                  <li>Excellent English documentation reading skills</li>
                  <li>Team collaboration and open source project experience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Related Links</h3>
                <ul className="list-inside text-blue-600 space-y-2">
                  <li>
                    <a href="https://github.com/Sifotd?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub: Sifotd</a>
                  </li>
                  <li>
                    <a href="https://learnblockchain.cn/people/17485" target="_blank" rel="noopener noreferrer" className="hover:underline">LearnBlockchain: Menqianxue</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Experience</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                RealmLINK - Decentralized Trust Infrastructure Based on Sui Move
              </h3>
              <a
                href="https://github.com/StarryDeserts/RealmLINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mb-2 inline-block"
              >
                GitHub Repository: StarryDeserts/RealmLINK
              </a>
              <p className="text-gray-700 mt-2 mb-2">
                Participated in the development of the RealmLINK project, primarily based on Sui blockchain and Move language, including RWA-NFT tickets and on-chain identity verification modules.
              </p>
              <p className="text-gray-700 mb-2">
                Main responsibilities included smart contract development, frontend-contract integration, and documentation writing and team collaboration.
              </p>
              <p className="text-gray-700 mb-2">
                Project tech stack includes Move, TypeScript, Next.js, Tailwind CSS, etc.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>© 2024 Sifotd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
