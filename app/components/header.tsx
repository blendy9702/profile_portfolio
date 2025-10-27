export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      {/* 내부 콘텐츠 영역 */}
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[80px] px-10">
        <a href="/home">
          <h1 className="text-2xl font-bold">LCH</h1>
        </a>
        <nav className="flex gap-10">
          <a href="/home" className="hover:text-[#8877e7] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#8877e7] transition">
            About
          </a>
          <a href="/skills" className="hover:text-[#8877e7] transition">
            Skills
          </a>
          <a href="/projects" className="hover:text-[#8877e7] transition">
            Projects
          </a>
          <a href="/contact" className="hover:text-[#8877e7] transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
