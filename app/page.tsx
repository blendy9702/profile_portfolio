import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Skills from "./components/skills";
import About from "./components/about";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <div className="flex flex-col items-center justify-center gap-10 py-25">
          <span className="text-6xl font-medium">&lt;ChangHo Lee /&gt;</span>
          <span className="text-2xl font-medium">Frontend Developer</span>
          <div className="rounded-full overflow-hidden w-[400px] h-[400px]">
            <Image
              src="/images/cool_dog.png"
              alt="profile"
              width={400}
              height={400}
            />
          </div>
        </div>
        {/* About */}
        <div className="h-[2px] bg-black w-full my-20 mx-auto max-w-[1200px]" />
        <div className="flex flex-col items-center justify-center gap-5 py-20">
          <About />
          {/* Skills */}
          <Skills />
        </div>
        <div className="h-[2px] bg-black w-full my-[200px] mx-auto max-w-[1200px]" />
      </div>
      <Footer />
    </div>
  );
};

export default page;
