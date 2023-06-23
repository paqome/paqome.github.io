export default function Home() {
  return (
    <div className="bg-zinc-300">
      <nav className=" bg-white/60 backdrop-blur-md w-screen sticky top-0 space-x-5 py-5 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img src="/logo3.png" width="90" height="90" />
            </a>
          </div>
          <div className="flex items-center space-x-4 justify-center h-16 w-full">
            <a href="" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#about" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#projects" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#contact" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container flex-grow bg-gray-700 h-screen m-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center font-mono">Pacôme LAMMENS</h1>
        <p className="mt-10 mx-28 text-lg text-center font-mono">N'hésitez pas à explorer mon portfolio et à me contacter pour toute opportunité de collaboration.</p>
        <div className="mb-20 mt-10 md:ml-10">
          <button className="bg-gradient-to-r bg-gray-500 to-black hover:from-gray-500 hover:to-black text-white font-bold py-2 px-4 rounded">
            Voir les projets
          </button>
        </div>
      </div>
      <div className="bg-gray-700 flex h-screen w-screen  m-auto" id="about">
        <div className="fixed top-80 left-0 transform -translate-y-1/2 h-44 w-12 bg-zinc-400 border-l flex flex-col justify-center items-center">
          <a href="mailto: pacomelamens@gmail.com" className="text-white hover:text-gray-300 mb-4 flex justify-center items-center">
            <img src="/email.png" alt="email" width="40" height="40" />
          </a>
          <a href="https://www.linkedin.com/in/pac%C3%B4me-lammens/" className="text-white hover:text-gray-300 mb-4 flex justify-center items-center">
            <img src="/linkedin.png" alt="linkedin" width="40" height="40" />
          </a>
          <a href="https://github.com/paqome" className="text-white hover:text-gray-300 flex justify-center items-center">
            <img src="/github.png" alt="github" width="40" height="40" />
          </a>
        </div>
        <div className="flex flex-row-reverse items-center">
          <div className="md:mr-10 flex justify-center items-center">
            <img src="/pacome.png" width="1000" height="1000" />
          </div>
          <p className="mt-10 mx-28 text-lg text-center font-mono">
            Je suis Pacôme LAMMENS, un étudiant développeur web passionné. J'acquiers actuellement des compétences solides en développement web, en me spécialisant
            dans les technologies front-end et back-end. Mon portfolio met en avant mes projets créatifs et ma capacité à résoudre des problèmes. N'hésitez pas à me contacter pour discuter de collaborations passionnantes.
          </p>
        </div>
      </div>
      <div className="bg-gray-700 flex justify-center h-screen w-screen m-auto" id="projects">
        <div className="flex flex-row-reverse items-center">
          <div className="mt-10 mx-28 text-lg text-center font-mono">
            <div className="flex justify-center items-center mb-4">
              <div className="border-2 border-white rounded-full w-32 h-32">
                <img src="/snapchat.png" alt="snapchat" className="w-full h-full rounded-full" />
              </div>
            </div>
            <p>my_snapchat est un projet dans lequel j'ai du reproduire snapchat en html/css/react.js</p>
          </div>
          <div className="mt-10 mx-28 text-lg text-center font-mono">
            <div className="flex justify-center items-center mb-4">
              <div className="border-2 border-white rounded-full w-32 h-32">
                <img src="/twitter.png" alt="twitter" className="w-full h-full rounded-full" />
              </div>
            </div>
            <p>my_twitter est un projet dans lequel j'ai du reproduire twitter en html/css/php</p>
          </div>
          <div className="mt-10 mx-28 text-lg text-center font-mono">
            <div className="flex justify-center items-center mb-4">
              <div className="border-2 border-white rounded-full w-32 h-32">
                <img src="/h5ai.png" alt="h5ai" className="w-full h-full rounded-full" />
              </div>
            </div>
            <p>my_h5ai est un projet dans lequel j'ai du reproduire h5ai en html/css/php</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 flex justify-center h-screen w-screen m-auto" id="contact">
        <div className="flex flex-row-reverse items-center">
          <div className="mt-10 mx-28 text-lg text-center font-mono">
            <div className="flex justify-center items-center mb-4">
              <div className="border-2 border-white rounded-full w-32 h-32">
                <img src="/email.png" alt="email" className="w-full h-full rounded-full" />
              </div>
            </div>
            <h2>Contactez-moi</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">Nom :</label>
                <input type="text" id="name" className="bg-gray-500 text-white rounded px-4 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email :</label>
                <input type="email" id="email" className="bg-gray-500 text-white rounded px-4 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white">Message :</label>
                <textarea id="message" className="bg-gray-500 text-white rounded px-4 py-2"></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r bg-gray-500 to-black hover:from-gray-500 hover:to-black text-white font-bold py-2 px-4 rounded">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}