import Image from "next/image";

export default function Features() {
  return (
    <>
      {/* Your component content here */}

      <section id="features" className="mx-auto max-w-6xl px-4 pt-6">
        <h2 className="mb-6 text-center text-4xl font-medium lg:hidden">
          Features
        </h2>
        <div className="grid-cols-4 grid-rows-5 gap-4 max-lg:space-y-4 lg:grid">
          <div className="row-span-5 flex flex-col justify-between rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 text-center lg:rounded-tl-[2.5rem]">
            <Image
              src="/trade.svg"
              width={60}
              height={60}
              alt="Trade"
              className="mx-auto mb-4 mt-10 h-auto w-full max-w-40 lg:w-1/2"
            />

            <div>
              <Heading>Trade Optimizer</Heading>
              <Para>
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity.
              </Para>
            </div>
          </div>
          <div className="col-span-2 row-span-2 flex items-center overflow-hidden rounded-2xl border border-[#0F373C] bg-[#08252A] p-6">
            <div className="h-max">
              <Heading>Market insight</Heading>
              <Para>
                Stay ahead of the market. Get real-time updates on market
                trends, track top trader&apos;s movements, and spot signals from
                key influencers.
              </Para>
            </div>
            <Image
              src={"/market.svg"}
              width={60}
              height={60}
              className="min-h-full scale-[2.2]"
              alt="Trade"
            />
          </div>
          <div className="col-start-4 row-span-5 flex flex-col-reverse gap-4 rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 text-center lg:flex-col lg:rounded-tr-[2.5rem]">
            <Image
              src="/ai.svg"
              width={60}
              height={60}
              alt="Trade"
              className="mx-auto h-auto w-full max-lg:max-w-56"
            />

            <div>
              <Heading>Risk Guard</Heading>
              <Para>
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared for anything.
              </Para>
            </div>
          </div>
          <div className="col-span-2 col-start-2 row-span-3 row-start-3 flex items-center justify-center rounded-2xl border border-[#0F373C] bg-[#08252A] p-4 text-4xl shadow-[0px_1px_25px_0px_#1DCEF240_inset] max-lg:hidden">
            Our Features
          </div>
        </div>

        <div className="mt-4 grid-cols-5 grid-rows-1 gap-4 max-lg:space-y-4 lg:grid">
          <div className="col-span-2 flex items-end gap-3 overflow-hidden rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 lg:rounded-bl-[2.5rem]">
            <div className="h-max">
              <Heading>Portfolio Sync</Heading>
              <Para>
                Easily manage your portfolio. You&apos;ll always know what you
                own, how it&apos;s performing, and where it&apos;s headed.
              </Para>
            </div>

            <Image
              src={"/portfolio.svg"}
              width={60}
              height={60}
              className="min-h-full scale-[2.2]"
              alt="Trade"
            />
          </div>
          <div className="col-span-3 col-start-3 flex items-end gap-10 overflow-hidden rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 lg:rounded-br-[2.5rem]">
            <div>
              <Heading>Opportunity Scout</Heading>
              <Para>
                Find exciting new projects, events and tokens that others might
                be missing. Identifying promising opportunities early, so you
                never miss out on the next big thing.
              </Para>
            </div>
            <Image
              src={"/search.svg"}
              width={60}
              height={60}
              className="min-h-full scale-[2.5]"
              alt="Trade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-xl font-medium">{children}</h3>
    </>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="mt-3 text-accent/70">{children}</p>
    </>
  );
}
