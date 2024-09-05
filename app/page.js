import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] relative">
      <div
        style={{
          background: " rgb(55,27,72)",
          background:
            " radial-gradient(circle, rgba(55,27,72,0.45) 0%, rgba(55,27,72,0) 100%)",
        }}
        className="absolute top-[16%] right-12 rounded-[50%] w-60 h-44 bg-[#371B48]"
      ></div>
      <div className="h-[80vh] grid grid-rows-2">
        <div className="relative">
          <div className="absolute bottom-0"></div>
        </div>
        <div className=""></div>
      </div>
    </main>
  );
}
