import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { About } from "../sections/about/About";
import { TechStack } from "../sections/techStack/TechStack";
import { Projects } from "../sections/projects/Projects";
import { Contact } from "../sections/contact/Contact";
import { Footer } from "../Footer";

export const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <main>
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction:column;
  min-height: 100vh;
  padding-block: 20px;
  background-color: ${(props) => props.theme.colors?.background};
  overflow-x: hidden;

  main {
    flex-grow: 1;
  }
`;


