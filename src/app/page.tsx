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
                  src="/avatar-placeholder.jpg"
                  alt="个人照片"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">您的姓名</h1>
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

        {/* 其他部分将在后续添加 */}
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>© 2024 您的姓名. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
