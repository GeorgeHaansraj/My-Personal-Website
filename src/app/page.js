// src/app/page.js

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fadeIn">
        Hi, I&apos;m George Haansraj 👋
      </h1>

      <p className="text-lg md:text-xl text-gray-400 text-center max-w-xl animate-fadeIn delay-200">
        Informatics Engineering @ Institut Teknologi Sumatera <br />
        Passionate in AI & Cybersecurity, and a Boxing Athlete 🥊
      </p>

      <div className="mt-6 flex gap-4 animate-fadeIn delay-300">
        <a
          href="https://github.com/GeorgeHaansraj"
          target="_blank"
          className="hover:underline text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/USERNAME"
          target="_blank"
          className="hover:underline text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://medium.com/@USERNAME"
          target="_blank"
          className="hover:underline text-blue-400"
        >
          Medium
        </a>
      </div>
    </main>
  );
}
