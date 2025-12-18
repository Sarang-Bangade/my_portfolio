export default function Main() {
  
  return (
    <div className="bg-black min-h-screen w-full flex flex-col text-[16px]">
      <div className="max-w-5xl w-full mx-auto px-10 sm:px-8 md:px-16 py-16 flex flex-col">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          <img
            src="me.png"
            alt="Sarang Bangade"
            className="aspect-square h-28 rounded-full border border-neutral-700 object-cover"
          />

          <div className="text-center md:text-left">
            <h1 className="text-4xl my-2 font-medium text-white">
              Sarang Bangade
            </h1>
            <p className="text-neutral-500 text-[15px]">
              I turn curiosity into code and ideas into products, using AI to make meaningful real-world impact.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-neutral-800 w-full my-6"></div>
        {/* Projects */}
        <div className="my-8 flex flex-col">
          <h2 className="text-2xl mb-4 font-medium text-neutral-500">Projects</h2>

          <div className="flex flex-col gap-4 text-neutral-500">

            {/* Radha Airport Assistant */}
            <div>
              <a
                href="https://github.com/Sarang-Bangade/Radha-Airport-Assistant"
                className="font-semibold underline underline-offset-4 decoration-neutral-500 text-white text-[17px]"
              >
                Radha Airport Assistant (AI Chatbot)
              </a>
              <p className="mt-1 text-neutral-400 text-[15px]">
                A real-time AI-driven airport assistant built to automate customer support — built with{" "}
                <span className="text-blue-400 font-medium">Node.js, Express & Gemini API</span>.
              </p>
            </div>

            {/* Mini Cursor AI */}
            <div>
              <a
                href="https://github.com/Sarang-Bangade/Mini-Cursor-AI"
                className="font-semibold underline underline-offset-4 decoration-neutral-500 text-white text-[17px]"
              >
                Mini Cursor AI (Code Assistant)
              </a>
              <p className="mt-1 text-neutral-400 text-[15px]">
                A lightweight AI coding assistant with real-time suggestions and terminal command execution — built using{" "}
                <span className="font-medium text-green-400">OpenAI API & JavaScript</span>.
              </p>
            </div>

          </div>
        </div>

        {/* Blog */}
        <div className="my-8 flex flex-col">
          <h2 className="text-2xl mb-4 font-medium text-neutral-500">Blog</h2>

          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2">
                <a
                  href="https://sarangai.hashnode.dev/decoding-ai-jargons-with-chai"
                  className="font-semibold underline underline-offset-4 decoration-neutral-500 text-white text-[17px]"
                >
                  Decoding AI Jargons with Chai
                </a>
                <p className="text-neutral-900 text-[14px]">•</p>
                <p className="text-neutral-500 text-[14px]">Apr 8, 2025</p>
              </div>

              <p className="text-neutral-400 text-[15px] mt-1">
                A clear and practical breakdown of modern computing concepts with a focus on{" "}
                <span className="text-blue-400 font-medium">AI</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="my-8 flex flex-col">
          <h2 className="text-2xl mb-4 font-medium text-neutral-500">Work</h2>

          <div className="flex flex-col gap-6 text-neutral-500">
            <div>
              <div className="flex items-center gap-2 flex-wrap text-[16px]">
                <span className="font-semibold text-white">Web Application Developer</span>
                <p className="text-neutral-900">•</p>
                <p className="underline underline-offset-4 decoration-neutral-500 text-neutral-500">
                  ARDSoft IT Solutions
                </p>
                <p className="text-neutral-900">•</p>
                <p className="text-neutral-500">Jun 2023 – Feb 2024</p>
              </div>
              <ul className=" list-disc list-inside text-neutral-400 text-[15px] mt-1">
                <li>Built responsive web apps using JavaScript and modern frameworks.</li>
                <li>Integrated APIs and improved code performance.</li>
                <li>Collaborated with teams to deliver scalable solutions.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap text-[16px]">
                <span className="font-semibold text-white">Fullstack Developer</span>
                <p className="text-neutral-900">•</p>
                <p className="underline underline-offset-4 decoration-neutral-500 text-neutral-500">
                  Bharat Online
                </p>
                <p className="text-neutral-900">•</p>
                <p className="text-neutral-500">Jun 2025 – Jul 2025</p>
              </div>
              <ul className="list-disc list-inside text-neutral-400 text-[15px] mt-1">
                <li>Contributed to College ERP development and real-time testing.</li>
                <li>Handled frontend–backend integration for smooth deployment.</li>
                <li>Identified and resolved performance and stability issues.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="font-medium mt-auto flex gap-6 text-blue-300 text-[16px] justify-center md:justify-start">
          <a href="https://github.com/Sarang-Bangade" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sarang-bangade-570743352/" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://x.com/SarangB007?t=3WJarpUEjZAba1Bss9JSOQ&s=08" className="hover:text-white">
            X
          </a>
        </div>

      </div>
    </div>
  );
}
