"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Section from "@/components/Section";
import Expand from "@/components/Expand";
import Footer from '@/components/Footer';

import { useRef } from "react";
import { DiJava } from "react-icons/di";
import { SiDocker, SiKubernetes, SiApachecassandra, SiElasticsearch, SiYaml, SiJenkins } from "react-icons/si";

const Home = () => {
  const introRef = useRef(null);
  const goalsRef = useRef(null);
  const jobRef = useRef(null);
  const conclusionRef = useRef(null);
  const acknowledgementsRef = useRef(null);

  return (
    <main className="bg-zinc-950 overflow-x-hidden">
      <Navbar introRef={introRef} goalsRef={goalsRef} jobRef={jobRef} conclusionRef={conclusionRef} acknowledgementsRef={acknowledgementsRef}/>

      <div className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden">
        {/* Gradient Divider */}
        <div className="w-screen h-[2px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />
        <div className="w-[1200px] h-[500px] mt-[-450px] bg-gradient-to-br from-[#CAD2F2] to-[#5FDB5F] rounded-full blur-3xl scale-x-[-1]" />

        <section className="mt-[10rem] flex flex-col justify-center items-center relative">
          <Image
            src="/ncrlogo.png"
            width={350}
            height={350}
            alt="NCR Logo"
          />
          <h1 className="bg-clip-text bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA] text-transparent text-center text-3xl font-bold animate-fade-up animate-once animate-duration-[400ms] animate-delay-[100ms] animate-ease-linear">
            Backend Software Developer Co-op
          </h1>
        </section>

        {/* Gradient Divider */}
        <div className="w-[1200px] h-[150px] mt-[2rem] min-[500px]:mt-[8rem] min-[600px]:mt-[12rem] md:mt-[16rem] min-[900px]:mt-[20rem] bg-gradient-to-br from-[#5FDB5F] to-[#CAF1CA] rounded-full blur-3xl z-1" />
        <div ref={introRef} className="w-screen h-[2px] mt-[-120px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />

        {/* Introduction Section */}
        <Section title="Introduction" subtitle="About NCR">
          <div className="mt-5 w-full justify-center items-center text-lg text-slate-300">
            <p>
              Founded in 1884 and previously known as the
              <span className=" text-whitefont-semibold"> National Cash Register</span>
              , NCR Corporation has grown to become a global leader within the software, consulting and technology industry, providing software, hardware, and services to more than 550 million customers in 141 countries.
            </p>
            <br />
            <p>
              Earning the spot as the 
              <span className="text-white font-semibold"> #1 global POS software provider for retail and hospitality</span> 
              , along with the 
              <span className="text-white font-semibold"> #1 provider of multi-vendor ATM software</span>
              , NCR aims to help clients connect and interact with their customers by bridging the gap between their digital and physical operations.
            </p>
            <br />
            <p>
              Utilizing modern web and backend development technologies, the team of developers, testers and product owners at NCR Waterloo aim to provide banking software to clients through easy to use and interactive web applications.
            </p>
          </div>
        </Section>

        <div ref={goalsRef} className="w-screen h-[2px] mt-[120px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />

        {/* Goals Section */}
        <Section title="GOALS" subtitle="Learning Outcomes">
          <div className="mt-5 w-full justify-center items-center text-lg text-lg text-slate-300">
            <p>
              Heading into this position with the development team at NCR Waterloo for an eight-month work term, I had a few goals in mind to work towards:
            </p>
            <br />
            <p className="text-white font-semibold text-center">
              <span className="text-red-500">1. </span>
              Improve my oral communication skills to aid in effective team collaboration
            </p>
            <p className="text-center">
              Participating and providing my input and opinions during team meetings and discussions, along with not being afraid to ask questions when I am unsure of a problem, I was able to
              improve my oral communcation greatly.
            </p>
            <br />
            <p className="text-white font-semibold text-center">
              <span className="text-red-500">2. </span>
              Improve my technological literacy by learning and efficiently implement various new technologies used within the work environment
            </p>
            <p className="text-center">
            Through reading more about the documentation on the various technologies used within the team, such as: cloud-naitve technologies which include Docker Containers and
            Kubernetes; microservice development and deployment, NOSQL and relational databases, I was able to better gain a grasp of how certain technologies are implemented
            within the systems and how they interact with each other.
            </p>
            <br />
            <p className="text-white font-semibold text-center">
              <span className="text-red-500">3. </span>
              Improve my critical thinking and problem solving skills to effectively implement solutions to problems
            </p>
            <p className="text-center">
              Reading through the codebase of the specific microservice I was working on, along with analyzing logs and error messages when they occur, I was able to gain a
              better understanding of how the system works and how to effectively implement solutions to problems.
            </p>
            <br />
            <p>
              My main goal for this work term was to improve my critical thinking and problem solving skills, without requiring much assistance from my team members.
              Although there definitely could have been more improvement in this area, the foundation and infrastructure that the whole system is built upon is quite complex and immense,
              which made it difficult to fully grasp the entire system and how it works provided with the limited time I had.
            </p>
            <br />
            <p>Overall, I believe I was able to achieve these goals and improve my skills in many areas, with the help of my supportive team.</p>
          </div>
        </Section>

        <div ref={jobRef} className="w-screen h-[2px] mt-[120px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />

        {/* Job Description Section */}
        <Section title="Job Description" subtitle="My Experience">
          <div className="mt-5 w-full justify-center items-center text-lg text-slate-300">
            <p>
              Working at NCR Waterloo, I was part of
              <span className="text-white font-semibold"> Pi Team</span>
              &nbsp;as a backend software developer, lead by Jeewhoon Park.
            </p>
            <br />
            <p>
              During my time with Pi team, we were responsible for the development and maintenance of banking service features customized towards our client, Wintrust, which is a financial services company operating in the United States.
            </p>
            <br />
            <p>
              Working as a backend software developer, I was responsible for implementing various features within microservices, along with several bug fixes.
              Throughout the work term, I was able to learn and work with a variety of technologies, such as:
            </p>

            <div className="flex flex-col gap-2 my-5">
              <div className="flex flex-row justify-center items-center">
                <DiJava className="mr-2" size="2rem"/>
                <span className="text-white font-semibold">Java</span>
              </div>

              <div className="flex flex-row justify-center items-center">
                <SiDocker className="mr-2" size="1.5rem"/>
                <span className="text-white font-semibold">Docker</span>
              </div>

              <div className="flex flex-row justify-center items-center">
                <SiKubernetes className="mr-2" size="1.5rem"/>
                <span className="text-white font-semibold">Kubernetes</span>
              </div>

              <div className="flex flex-row justify-center items-center">
                <SiYaml className="mr-2" size="1.5rem"/>
                <span className="text-white font-semibold">YAML</span>
              </div>

              <div className="flex flex-row justify-center items-center">
                <SiJenkins className="mr-2" size="1.5rem"/>
                <span className="text-white font-semibold">Jenkins</span>
              </div>

              <div className="flex flex-row justify-center items-center">
                <SiApachecassandra className="mr-2" size="1.5rem"/>
                <SiElasticsearch className="mr-2" size="1.5rem"/>
                <span className="text-white font-semibold">Cassandra and Elasticsearch (NoSQL)</span>
              </div>
            </div>
            <p>
              My first feature I worked on was to implement a new configuration for a specific microservice, which would allow it to export data from previous days, based on the set configuration.
              Working on this feature, I was able to learn and work with YAML files, Java code, Docker containers, along with Elasticsearch and Kibana.
              I was also able to learn how to effectively use the Jenkins pipeline to build and deploy the microservice to the Kubernetes cluster, along with running end-to-end tests.
            </p>
            <br />
            <p>
              There were several features I worked on throughout the work term, which consisted of implementing new API endpoints, creating new unit and end-to-end tests, along with many bug fixes.
            </p>
          </div>
        </Section>

        <div ref={conclusionRef} className="w-screen h-[2px] mt-[120px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />
        
        {/* Conclusion Section */}
        <Section title="Conclusion" subtitle="Reflection">
          <div className="mt-5 w-full justify-center items-center text-lg text-slate-300">
            <p>
              Overall, I had an outstanding experience with the Pi team and colleagues at NCR waterloo during my eight-months with them! The opportunity to work with a team of experienced developers and learn
              so many new technologies that I have always been eager to learn about was an amazing experience. 
            </p>
            <br />
            <p>
              Being able to apply some parts of what I have learned in school and through personal projects to real-world applications was also a very rewarding experience. 
              I was able to successfully learn and improve greatly in many areas of my technical and personal skills from my team,
              along with gaining valuable knowledge on the end-to-end software development process, along with the best practices. 
            </p>
            <br />
            <p>
              I am very grateful for the opportunity to work with such an amazing team, 
              and will always remember the relationships and moments I was able to build and experience with them, especially during the team lunches!
            </p>
          </div>
        </Section>

        <div ref={acknowledgementsRef} className="w-screen h-[2px] mt-[120px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />

        {/* Acknowledgements Section */}
        <Section title="Acknowledgements" subtitle="My Thanks">
          <div className="mt-5 w-full justify-center items-center text-lg">
            <Expand title="Jeewhoon Park (Team Lead)">
              <p>
                I would like to express my sincere gratitude to Jeewhoon for their exceptional support and guidance during my work term at NCR.
                His mentorship was instrumental in my professional growth throughout the co-op placement.
              </p>
              <br />
              <p>
                Jeewhoon not only helped me navigate the complexities of the codebase and understanding the various microservices, but also encouraged me
                to explore new technologies and provided me with numerous opportunities to apply my skills and knowledge through various tasks and features.
              </p>
              <br />
              <p>
                His patience, willingness to teach, and ability to provide constructive feedback was invaluable to my learning and growth as a developer.
                Even while always having a busy schedule, Jeewhoon always made time to answer my questions and provide me with the support I needed.
              </p>
              <br />
              <p>
                With Jeewhoon playing such an important role at NCR Waterloo, his vast knowledge and expertise with the technologies allowed me
                to learn and grow much more than I could have ever imagined. Thank you for being such an outstanding mentor and team lead!
              </p>
            </Expand>
            <br />
            <Expand title="Frederica Goodman (Co-op Hiring Manager)">
              <p>
                I would like to thank Freddi for her support and guidance throughout the co-op hiring process, along with giving me the opportunity to work
                with such remarkable team and community at NCR Waterloo.
              </p>
              <br />
              <p>
                Although I was not able to interact much with Freddi, she was able to make the co-op hiring process very smooth and easy, along with
                providing me with all the information I needed to know about the position and the team.
              </p>
              <br />
              <p>
                I believe Freddi plays a big role in the success of the co-ops at NCR Waterloo, and I am very grateful for her support
                and several events to help the co-ops get to know each other and the community better!
              </p>
            </Expand>
            <br />
            <Expand title="Nicholas Waller and Jordan Krupa (Team Members)">
              <p>
                Nick and Jordan played a huge role in my growth and learning experience at NCR. They were always willing to help and answer any questions I had,
                along with providing me with the support I needed to complete my tasks and features.
              </p>
              <br />
              <p>
                Nick, as another co-op student from Guelph, was able to make my transition into the team as smooth as possible, 
                providing me with all the information I needed to know about the team and the technologies used.
                Even after having only worked eight months at NCR by the time I joined, Nick had already gained a lot
                with the codebase and many microservices, which allowed me to learn and grow much faster than I could have ever imagined.
              </p>
              <br />
              <p>
                Jordan also provided me with a lot of helpful tips and tricks, teaching me how to effectively navigate and use certain tools, along with
                helping me get familiar with certain microservices he has worked with.
              </p>
              <br />
              <p>
                It was very nice to have another co-op student on the team, along with having both of them being around my age, which made it much easier
                for me to feel comfortable within the team. Thank you both for being such amazing team members and friends, and for making our team
                lunches so much fun!
              </p>
            </Expand>            
            <br />
            <Expand title="Denise Balkissoon and Chhavi Raina (SCRUM Masters)">
              <p>
                Denise was very supportive and helpful for the first four months of my work term, and helped make me very comfortable within the team.
                She made sure to always make me feel included and part of the team during our daily stand-ups and meetings, especially with how
                shy and introverted I was when I first joined the team. She made all of our meetings very fun and enjoyable, with her positive
                attitude and the many different games during our team retrospectives to help with our team bonding. Even though she had to go on
                maternity leave after four months, I want to congratulate her on her new baby, and thank her for being such a perfect SCRUM master,
                along with planning such good team lunches!
              </p>
              <br />
              <p>
                Chhavi came in as a new SCRUM master after Denise went on maternity leave, and he fit into the team very well and quickly.
                I am amazed at how fast Chhavi was able to learn and understand the process and the team, and how he was able to make the transition
                as our SCRUM master so quick. He continued to bring the same positive attitude and energy to our team meetings, along with
                planning some very fun team lunches! I want to thank Chhavi for always checking up on how I was doing, and for being such a great
                SCRUM master!
              </p>
            </Expand>            
            <br />
            <Expand title="Pi Team and NCR">
              <p>
                I also want to thank the rest of the Pi team for being so supportive and welcoming during my time at NCR. I was able to learn so much
                about other types of skills and technologies I would not typically use as a backend developer, such as frontend development and
                end-to-end testing. Thank you Hua, Alex and Annabelle for all their help, I had such a great time working with them!
              </p>
              <br />
              <p>
                I also want to thank the rest of the NCR Waterloo community for the various events and activities they planned for everyone.
                I believe me and the other co-ops were able to feel very welcomed and comfortable within the community, especially with the
                weekly ice-cream scoops/popcorn to help us get to know one another better! I cannot thank everyone enough for making my
                last co-op term such a memorable and enjoyable experience!
              </p>
            </Expand>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
};

export default Home;