import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Team leadership" },
  { skill: "Scrum" },
  { skill: "Kanban" },
  { skill: "LeSS" },
  { skill: "Craftmanship (TDD, BDD)" },
  { skill: "Java" },
  { skill: "Maven" },
  { skill: "NodeJS" },
  { skill: "NestJS" },
  { skill: "GCP" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "React" },
  { skill: "Angular" },
  { skill: "Vue" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Bootstrap" },
  { skill: "Antd" },
  // { skill: "Bower" },
  // { skill: "Grunt" },
  { skill: "React Native" },
  { skill: "Flutter" },
  { skill: "REST" },
  { skill: "SOAP" },
  { skill: "Event driven" },
  { skill: "Cucumber" },
  { skill: "JUnit" },
  // { skill: "Selenium" },
  { skill: "Cypress" },
  { skill: "Appium" },
  { skill: "Jenkins" },
  // { skill: "Sonar" },
  { skill: "Gitlab CI" },
  { skill: "GoCD" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Bash" },
  // { skill: "Ansible" },
  { skill: "Terraform" },
  { skill: "Kong Gateway" },
  { skill: "Keycloak" },
  { skill: "RabbitMQ" },
  { skill: "Kafka" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Passionate about{" "}
              <span className="font-bold">{"free software"}</span>, I have
              contributed to an array of projects over the years. I am convinced
              that <span className="font-bold">{"Agile"}</span> is not only
              beneficial, but it is the key to successful projects. As a leader,
              I have integrated this methodology into multiple large scale
              projects in retail, telecommunications, insurance, banking and
              other industries.
            </p>
            <br />
            <p>
              After successful projects in{" "}
              <span className="font-bold">{"Paris"}</span>,{" "}
              <span className="font-bold">{"Warsaw"}</span> and{" "}
              <span className="font-bold">{"Hong Kong"}</span>, I moved to{" "}
              <span className="font-bold">{"Bangkok "}</span> where I launched
              multiple new client accounts and I acted as the engagement manager
              for many of them. On top of that, I also created the{" "}
              <span className="font-bold">{"DevOps "}</span>
              department in PALO IT Thailand.
            </p>
            <br />
            <p>
              As my adventure in Asia is now fulfilled, I am looking for an
              opportunity in{" "}
              <span className="font-bold text-orange-500">{"Poland"}</span> to
              lead international teams and projects.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
