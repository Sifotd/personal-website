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
                  在这里添加您的个人简介，描述您的职业目标和专业特长。
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="#contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    联系我
                  </a>
                  <a
                    href="/resume.pdf"
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    下载简历
                  </a>
                </div>
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
                RealmLINK 致力于在 Sui 区块链上构建现实世界活动的信任基础设施，项目采用 Sui Move 语言开发，聚焦于以下创新方向：
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                <li>生物识别背书的数字资产：利用 Sui 的对象模型，实现 RWA-NFT 门票，确保资产唯一性与安全性。</li>
                <li>零知识身份验证：结合 Move 的安全特性，实现隐私保护的链上身份验证。</li>
                <li>高吞吐事件处理：充分利用 Sui 的并行执行能力，支持大规模应用场景。</li>
              </ul>
              <p className="text-gray-700 font-semibold mt-4 mb-1">主要职责与贡献：</p>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                <li>参与 Sui Move 智能合约开发，设计并实现 Ticket NFT、链上生物识别验证等核心模块。</li>
                <li>负责智能合约的安全性设计与测试，推动 Sui 测试网部署。</li>
                <li>参与前端（Next.js + Tailwind CSS）与合约的集成开发，提升用户体验。</li>
                <li>撰写项目文档，协助团队成员理解 Sui Move 生态与开发流程。</li>
              </ul>
              <p className="text-gray-700 font-semibold mt-4 mb-1">技术栈：</p>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                <li>Move、TypeScript、Next.js、Tailwind CSS、Sui 区块链、零知识证明</li>
              </ul>
              <p className="text-gray-700 font-semibold mt-4 mb-1">项目亮点：</p>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                <li>采用 Sui 原生对象模型，提升 NFT 资产的安全性与可扩展性。</li>
                <li>实现链上生物识别验证，推动现实身份与链上资产的结合。</li>
                <li>关注高性能与隐私保护，具备大规模落地潜力。</li>
              </ul>
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
