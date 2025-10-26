import React from "react";
import Header from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
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
        <div className="h-[2px] bg-black w-full my-10 mx-auto max-w-[1200px]" />
        <div className="flex flex-col items-center justify-center gap-15 py-25">
          <div className="text-5xl font-medium text-center">
            <span>&lt;About /&gt;</span>
          </div>
          <div className="text-2xl font-medium flex flex-col gap-5">
            <span>안녕하세요, 제 이름은 이창호입니다.</span>
            <span>
              상상을 구현하는 것을 좋아하고 컴퓨터를 좋아하는 탓에 개발자의 길을
              걷고 있습니다.
            </span>
            <span>
              현재 웹 개발을 하고 있으며, 더 다양한 기술도 배우고 싶어 공부하고
              있습니다.
            </span>
            <span>
              기술이 발전되는 만큼 제 자신도 발전하며 성장하는 개발자를 목표로
              하고 있습니다.
            </span>
          </div>
        </div>
        {/* Skills */}
        <div className="h-[2px] bg-black w-full my-10 mx-auto max-w-[1200px]" />
      </div>
      <Footer />
    </div>
  );
};

export default page;
