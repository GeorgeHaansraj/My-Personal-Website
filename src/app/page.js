//Intro, Social Links
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

      {/* Social Links */}
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

      {/* Projects */}
      <section className="mt-12 w-full max-w-3xl animate-fadeIn delay-500">
        <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-4 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">Simple AI Chatbot</h3>
            <p className="text-gray-400 text-sm mb-2">An AI-powered bot using OpenAI API.</p>
            <a
              href="https://github.com/GeorgeHaansraj/ai-chatbot"
              className="text-blue-400 hover:underline text-sm"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
          <div className="border border-gray-700 p-4 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">CyberSecurity CTF Tools</h3>
            <p className="text-gray-400 text-sm mb-2">
              CLI tools for beginner-friendly CTF practice.
            </p>
            <a
              href="https://github.com/GeorgeHaansraj/ctf-tools"
              className="text-blue-400 hover:underline text-sm"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Resume Download Button */}
      <section className="mt-12 animate-fadeIn delay-700">
        <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-400">Resume</h2>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
          >
            Download My Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 animate-fadeIn delay-800 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Get in Touch</h2>
        <p className="text-gray-400 mb-2">Feel free to reach out via email!</p>
        <a
          href="mailto:george@example.com"
          className="text-blue-400 hover:underline"
        >
          georgehaansraj@gmail.com
        </a>
      </section>


    </main>
  );
}

