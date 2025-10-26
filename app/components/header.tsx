export default function Header() {
  return (
    <header className="flex justify-between items-center h-[100px] px-10">
      <h1 className="text-2xl font-bold">Header</h1>
      <div className="flex gap-15">
        <a href="/home">
          <span>Home</span>
        </a>
        <a href="/about">
          <span>About</span>
        </a>
        <a href="/skills">
          <span>Skills</span>
        </a>
        <a href="/projects">
          <span>Projects</span>
        </a>
        <a href="/contact">
          <span>Contact</span>
        </a>
      </div>
    </header>
  );
}
