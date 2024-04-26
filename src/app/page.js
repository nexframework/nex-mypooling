import News from './components/News'

const Home = () => {
  return (
    <main className="bg-[#00293B] px-[1rem] md:px-[10rem]">
      <div className="font-red[500] mt-[50px]">
        <div className="border-l-[#FFD700] border-l-[15px] m-0 p-0 h-auto leading-none">
          <div className="leading-none p-0 ml-3 text-white text-[2.5rem]">
            F1 INSIGHTS
          </div>
        </div>

        <div className="my-24 text-gray-400">
          <span>
            Get the lowdown on what&apos;s new on Formula One, go back-to-basics with
            exclusive #F1 Insights by our guest writers and get tips from
            industry experts from the Formula One fraternity.
          </span>
        </div>
      </div>

      <News />
    </main>
  );
};

export default Home;
