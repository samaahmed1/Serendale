function Hero() {
  return (
    <section className="hero pt-19 md:pt-20">
      <div className="container mx-auto px-5 flex flex-col justify-center items-center text-center">
        <div className="col">
          <h1 className="leading-10 md:leading-tight text-3xl md:text-6xl font-medium">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 via-[#ecbfbf] bg-clip-text text-transparent"> A Fast Blockchain.</span> <br />
            Scalable AI.
          </h1>
          <p className="text-base font-thin mt-5 mb-9">
            Our technology performing fast blockchain (120K TPS) and it has guaranteed <br />
            AI-based data security. Proof of Stake, its consensus algorithm enables <br /> unlimited speeds.
          </p>
          <div className="action mx-auto inline-block mb-5 md:mb-0">
            <a href="index.html" className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-[#ECBFBF] to-pink-500">
              <span className="flex h-full w-full items-center justify-center p-3 md:py-3 md:px-6 text-white bg-gray-900 rounded-full hover:bg-gradient-to-r from-purple-500 via-[#ECBFBF] to-pink-500">
                Get Started
              </span>
            </a>
            <a className="ml-5 border-2 p-3 md:py-3 md:px-6 rounded-full text-center" href="index.html">
              Ecosystems
            </a>
          </div>
        </div>
        <div className="col image-animation">
          <img src="/images/avatar.webp" alt="avatar" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
