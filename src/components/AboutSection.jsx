"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <p>JavaScript</p>
        <p>React</p>
        <p>Next.js</p>
        <p>Node.js</p>
        <p>Express</p>
        <p>MongoDB</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Tailwind</p>
      </>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <p className="text-xl">Software Engineer at Capgemini </p>
        <span className="text-[12px] text-gray-400">
          MARCH 2021 - TILL PRESENT
        </span>
        <p className="text-sm">Office 365 Administrator</p>
        <p className="text-sm text-justify">
          Good knowledge of Retention policies, Retention tags, Litigation hold,
          eDiscovery, Data loss protection. Experience with creating users,
          mailboxes, Distribution groups, shared mailboxes, resource mailboxes.
          Good knowledge in Sharepoint management like access issues,
          restoration, user id mismatch issues. Strong expertise on E-Mailbox
          (Exchange & O365) management like Mailbox permission, delegation,
          quota management, email routing/tracking (internal & external), mail
          transport rule creation/modiﬁcation Expertise on Mailbox
          Restoration,data transfer across Mailboxes etc Good ability to perform
          bulk license operations and restorations using Powershell.
        </p>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <p className="text-base">NeoGCamp - Web Development Bootcamp</p>
        <span className="text-[12px] text-gray-400">FEB 2023 - FEB 2024</span>
        <p className="text-base">
          S.k Somaiya College of Arts, Science & Commerce - [BSCIT]
        </p>
        <span className="text-[12px] text-gray-400">2017 - 2020</span>
        <p className="text-base">HSC</p>
        <span className="text-[12px] text-gray-400">2015 - 2017</span>
      </>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 place-items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div className="hidden sm:block">
          <Image src="/coder.jpg" alt="mainPageImg" height={500} width={700} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm lg:text-lg text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Redux, Redux-toolkit,
            Node.js, Express, MongoDB, HTML, CSS, Tailwind and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div>{TAB_DATA.find((data) => data.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
