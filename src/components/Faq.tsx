import { Button } from "./ui/button";
import Heading from "./ui/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
      {/* Your component content here */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 px-4 py-20 lg:grid-cols-2">
        <Heading className="max-w-96">Frequently Asked Questions</Heading>

        <div>
          <Accordion type="single" collapsible className="space-y-7">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is EthAi?</AccordionTrigger>
              <AccordionContent>
                <p>
                  EthAi is a platform that provides insights into the smart
                  money flow in the cryptocurrency market.
                </p>
                <p>
                  It uses a proprietary algorithm to track the trading behavior
                  of the top 0.2% of traders in the market, and provides
                  real-time data and analysis to help traders make informed
                  decisions.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can EthAi can help me as a Trader?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  EthAi can help you as a trader by providing you with real-time
                  data and analysis on the smart money flow in the
                  cryptocurrency market.
                </p>
                <p>
                  By tracking the trading behavior of the top 0.2% of traders,
                  you can get insights into the market trends and make informed
                  decisions.
                </p>
                <p>
                  EthAi also provides a range of tools and features to help you
                  analyze the data and make better trading decisions.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Who can use EthAi?</AccordionTrigger>
              <AccordionContent>
                <p>
                  EthAi is designed for traders and investors who want to gain
                  insights into the smart money flow in the cryptocurrency
                  market.
                </p>
                <p>
                  Whether you are a beginner or an experienced trader, EthAi can
                  provide you with valuable insights that can help you make
                  better trading decisions.
                </p>
                <p>
                  EthAi is accessible to anyone with an internet connection and
                  a web browser.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How does EthAi track smart money flow?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  EthAi tracks the trading behavior of the top 0.2% of traders
                  in the cryptocurrency market using a proprietary algorithm.
                </p>
                <p>
                  The algorithm analyzes the trading patterns and behavior of
                  these top traders and provides real-time data and analysis on
                  the smart money flow.
                </p>
                <p>
                  The data is then used to provide insights into the market
                  trends and help traders make informed decisions.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How does ensure data security?
              </AccordionTrigger>
              <AccordionContent>
                <p>EthAi takes data security very seriously.</p>
                <p>
                  All data transmitted between the platform and users is
                  encrypted using industry-standard protocols.
                </p>
                <p>
                  User data is stored securely in encrypted databases and access
                  to the data is restricted to authorized personnel.
                </p>
                <p>
                  EthAi also regularly updates its security measures to stay
                  ahead of any potential threats.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="px-4">
        <section className="mx-auto my-28 max-w-5xl rounded-2xl border border-[#00C2DB80] p-14 text-center shadow-[0px_0px_32px_16px_#63F2FF1A_inset]">
          <Heading>
            Explore Our <span className="text-[#62F0FE]">dApp</span>
          </Heading>
          <p className="mb-8 text-balance leading-relaxed text-accent/70">
            EthAi is an AI-powered dApp designed to help traders make smarter,
            data-driven decisions. By tracking smart money flows, monitoring key
            wallets, and providing real-time market insights, EthAi empowers
            users to stay ahead of trends. The platform offers intuitive AI
            features for asset recommendations, market analysis, and
            personalized crypto Q&A, making it the ultimate tool for both novice
            and experienced traders.
          </p>
          <Button>Open dApp</Button>
        </section>
      </div>
    </>
  );
}
