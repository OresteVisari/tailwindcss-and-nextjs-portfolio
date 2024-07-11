import React from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "MarTech Lead for the Thailand's largest loyalty program",
    time: "Sep, 2023",
    description:
      "Lead development of a Gamification Engine and a Messaging platform for a loyalty program supporting 16 companies and several partners (50 millions customers, 3 billion messages per year).",
    image: "/exp-loyalty.png",
    skills: [
      { skill: "Kotlin" },
      { skill: "AWS" },
      { skill: "SES" },
      { skill: "Kafka" },
      { skill: "Kubernetes" },
      { skill: "Firebase" },
      { skill: "BigQuery" },
      { skill: "MJML" },
      { skill: "Gitlab CI" },
    ],
  },
  {
    name: "Lead a Super App for agents of Thai's insurance leader",
    time: "Jan, 2022",
    description:
      "Led a full stack team to build a shell application for insurance agents. Led the architecture, contributed to the test strategy and led the team building the common components. As the technical project lead, I  coordinated 3 development teams, 30+ developers, and external support.",
    image: "/exp-super-app.png",
    skills: [
      { skill: "Java" },
      { skill: "Spring Boot" },
      { skill: "React" },
      { skill: "React Native" },
      { skill: "Jenkins" },
      { skill: "Appium" },
      { skill: "Micro Frontend" },
    ],
  },
  {
    name: "Revamp purchase funnel of digital products for a major Thai Telecom",
    time: "Aug, 2020",
    description:
      "Led a full stack team focus on new purchases flow and customer experience. Coached internal teams to QA best practices and introduced a new way of work to reduce lead time from 1 month to 2 weeks. Introduced Infrastructure as code with Terraform for a new Purchase platform infrastructure to solve scalability issue.",
    image: "/exp-purchase-funnel.png",
    skills: [
      { skill: "Next.js" },
      { skill: "Cypress" },
      { skill: "Kubernetes" },
      { skill: "GKE" },
      { skill: "Jenkins" },
      { skill: "Terraform" },
      { skill: "Monorepo" },
    ],
  },
  {
    name: "API Lead for the first digital and real time Telecom operator in Poland",
    time: "Aug, 2018",
    description:
      "Led the API Factory, designed and implemented a full microservice architecture with Docker and K8S, Connected to RabbitMQ and exposed by Kong Gateway. This project was the first full digital and real time telecom operator in Poland.",
    image: "/exp-digital-operator.png",
    skills: [
      { skill: "Java" },
      { skill: "Kubernetes" },
      { skill: "Microservice" },
      { skill: "API First" },
      { skill: "RabbitMQ" },
      { skill: "Keycloak" },
      { skill: "Kong Gateway" },
    ],
  },
  {
    name: "Developer on an opensource OASIS Tosca implementation",
    time: "Sep, 2014",
    description:
      "Research and development on tools called Alien4Cloud that would allow DevOps to manage there applications on the cloud (Amazon, Azure, OpenStack) or other (Docker / Kubernetes, hardware). Implementation and contribution to the Oasis TOSCA norm.",
    image: "/exp-alien4cloud.png",
    skills: [
      { skill: "Java" },
      { skill: "Angular" },
      { skill: "Jenkins" },
      { skill: "OpenStack" },
      { skill: "Azure" },
      { skill: "Amazon" },
      { skill: "Cloudify" },
      { skill: "OASIS Tosca" },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Key Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row-reverse md:space-x-reverse md:space-x-12">
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
                    {/* <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-6 sm:mb-6 text-orange-600 bg-orange-100 rounded-full">
                      {project.time}
                    </time> */}
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                  <div className=" md:w-1/2 mb-6">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 mb-4"
                    />
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                      {project.skills.map((item, idx) => {
                        return (
                          <p
                            key={idx}
                            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                            {item.skill}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
