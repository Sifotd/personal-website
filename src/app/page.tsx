import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">我的简历</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">关于我</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">工作经验</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">技能</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">项目</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">联系方式</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 个人信息部分 */}
        <section id="about" className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="个人照片"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Sifotd</h1>
                <p className="text-xl text-gray-600 mb-4">职位头衔</p>
                <p className="text-gray-600 mb-6">
                  HoH社区成员，成都信息工程大学大三学生，性格外向，具备良好的沟通与团队协作能力。在大一期间兼职推销驾校，成功签约11份，获得3000余元奖金。曾获2023年开悟人工智能团队赛第29名、2024年开悟人工智能团队赛二等奖、川渝地区智能交通信号灯调度赛道第22名及川渝地区优秀团队一等奖。2024年暑假荣获HackQuest黑客松教育赛道第一名，2025年Flow黑客松AI赛道二等奖。目前正与队友积极参与Sui Overflow、Sol Breakout等黑客松，持续提升技术与项目实战能力。
                </p>
                <p className="text-gray-600 mb-2">
                  联系方式：<a href="mailto:ash20040516@gmail.com" className="text-blue-600 hover:underline">ash20040516@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 技能部分 */}
        <section id="skills" className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">技能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">编程语言</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>TypeScript / JavaScript</li>
                  <li>Rust</li>
                  <li>Move</li>
                  <li>Solidity</li>
                  <li>Python</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">技术栈与框架</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Next.js、React</li>
                  <li>Tailwind CSS</li>
                  <li>区块链开发（Move、Solidity、Sui、Aptos、以太坊等）</li>
                  <li>CI/CD（GitHub Actions等）</li>
                  <li>开源协作</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">其他能力</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>学习能力强，持续参与区块链学习营</li>
                  <li>英文文档阅读能力优秀</li>
                  <li>团队协作与开源项目经验</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">相关链接</h3>
                <ul className="list-inside text-blue-600 space-y-2">
                  <li>
                    <a href="https://github.com/Sifotd?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub：Sifotd</a>
                  </li>
                  <li>
                    <a href="https://learnblockchain.cn/people/17485" target="_blank" rel="noopener noreferrer" className="hover:underline">登链社区：门前雪</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 项目经历部分 */}
        <section id="projects" className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">项目经历</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                RealmLINK - 基于 Sui Move 的去中心化信任基础设施
              </h3>
              <a
                href="https://github.com/StarryDeserts/RealmLINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mb-2 inline-block"
              >
                GitHub仓库：StarryDeserts/RealmLINK
              </a>
              <p className="text-gray-700 mt-2 mb-2">
                参与了RealmLINK项目的开发，主要基于Sui区块链和Move语言，项目内容包括RWA-NFT门票、链上身份验证等功能模块。
              </p>
              <p className="text-gray-700 mb-2">
                主要负责部分智能合约开发、前端与合约的集成，以及相关文档的撰写和团队协作。
              </p>
              <p className="text-gray-700 mb-2">
                项目技术栈包括Move、TypeScript、Next.js、Tailwind CSS等。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
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
