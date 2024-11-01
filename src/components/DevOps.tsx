import React from "react";
import DidYouKnow from "./DidYouKnow";

const DevOps = () => {
  return (
    <div className="text-left">
      <h3 className="text-left mt-2 text-4xl ">Devops</h3>
      <p className="text-lg">
        DevOps is a combination of certain culture strategies, dedicated
        practices and tools that help companies accelerate the process of
        creating applications and services. With DevOps, the process of product
        development and optimization goes faster compared with the traditional
        model of software development.
      </p>
      <figure>
        <img src="Devops1.jpeg" alt="" />
        <figcaption className="text-center">DevOps LifeCycle</figcaption>
      </figure>
      <h4 className="text-left mt-5 text-2xl ">
        Now lets see the benefits of DevOps:
      </h4>
      <p className="text-lg"></p>
      <ul
        className="text-base my-2"
        style={{ listStyleType: "disc", paddingLeft: "20px" }}
      >
        <li>
          <strong>
            <em>Speed:</em>
          </strong>{" "}
          Teams that practice DevOps release deliverables more frequently, with
          higher quality and stability.
        </li>
        <li>
          <strong>
            <em>Rapid Delivery:</em>
          </strong>{" "}
          Increase release frequency for faster innovation, product improvement,
          customer response, and competitive advantage. Automate software
          release process from build to deploy for faster response.
        </li>
        <li>
          <strong>
            <em>Reliability:</em>{" "}
          </strong>
          Ensure quality application updates and infrastructure changes through
          continuous integration, continuous delivery, and real-time monitoring
          and logging practices to deliver rapid, user-friendly updates.
        </li>
        <li>
          <strong>
            <em>Improved Collaboration: </em>{" "}
          </strong>
          Implement a DevOps cultural model, promoting ownership and
          accountability, to enhance team effectiveness by fostering close
          collaboration, sharing responsibilities, and combining workflows.
        </li>
        <li>
          <strong>
            <em>Continuous Improvement:</em>{" "}
          </strong>
          Implement infrastructure as code to efficiently manage complex
          systems, reducing risk and ensuring repeatability in development,
          testing, and production environments.
        </li>
      </ul>
      <p
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          fontStyle: "italic",
          marginTop: "20px",
        }}
      >
        The benefits look impressive… but wait, what about security?
      </p>
      <DidYouKnow />
      <p className="mt-5 mb-1 text-2xl">DevOps Security Challenges</p>
      <ul>
        <li>
          <strong>Delayed Security Checks:</strong> Security is often considered
          at the end, risking missed vulnerabilities.
        </li>
        <li>
          <strong>Rapid Releases, Limited Security:</strong> Frequent updates
          can overwhelm security teams, limiting thorough checks.
        </li>
        <li>
          {" "}
          <strong>Reactive Security Measures:</strong>
          DevOps often responds to threats after they emerge, instead of
          preventing them.
        </li>
        <li>
          <strong>Siloed Security Teams: </strong>Limited collaboration between
          security and development delays early risk identification.
        </li>
      </ul>
      <p className="my-4 text-lg">
        However, while DevOps processes,{" "}
        <a
          className="text-blue-600"
          href="https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/#explanation"
        >
          containers
        </a>{" "}
        and cloud provide significant business benefits, they also make
        application security much more difficult. Automating application
        delivery and breaking software into{" "}
        <a className="text-blue-600" href="https://microservices.io/">
          microservices
        </a>{" "}
        or containers creates a large number of moving parts that need to be
        monitored and secured. Every instance of each microservice represents an
        attack surface.
      </p>
    </div>
  );
};

export default DevOps;
