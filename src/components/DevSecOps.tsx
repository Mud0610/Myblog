import React from "react";

const DevSecOps = () => {
  return (
    <div>
      <h3 className="mt-11 mb-5 text-3xl">
        <strong>Introducing DevSecOps: Why Do We Need It?</strong>
      </h3>
      <figure>
        <img src="devops_vs_devsecops.jpg" alt="DevOps vs DevSecOps" />
        <figcaption className="text-center">DevOps vs DevSecOps</figcaption>
      </figure>
      <h3 className="mt-8 mb-3 text-2xl">
        <strong>What is DevSecOps?</strong>
      </h3>
      <p className="text-lg ">
        Enter DevSecOps—the natural next step for DevOps, but with a security
        twist. Instead of adding security as a final, rushed check, DevSecOps
        weaves it into every stage of development, right from the first line of
        code all the way to deployment. Think of it as building security right
        into the DNA of your project.
      </p>
      <p className="text-lg mt-1">
        With DevSecOps, security isn’t some isolated task; it’s a shared
        responsibility. Teams work together to catch issues in real-time,
        keeping things safe without sacrificing speed or flexibility. It’s
        security working in sync with DevOps goals like speed, reliability, and
        automation. This approach doesn’t just lower the risk of
        vulnerabilities—it helps create products that are stronger, safer, and
        ready to take on the future.
      </p>
      <h3 className="mt-8 mb-5 text-2xl">
        <strong>How to Integrate Security into the DevOps Cycle</strong>
      </h3>
      <figure>
        <img src="devsecops-diagram.png" alt="DevSecOps Pipeline" />
        <figcaption className="text-center mb-3">DevSecOps Pipeline</figcaption>
      </figure>

      <p className="text-lg">
        The DevSecOps pipeline consists of several stages that help manage the
        software lifecycle efficiently, which include:
      </p>
      <ul
        className="text-base"
        style={{ listStyleType: "disc", paddingLeft: "30px" }}
      >
        <li className="text-lg m-2">
          <strong>Plan:</strong> The plan phase in DevSecOps involves
          collaboration, discussion, review, and security analysis strategy.
          Teams should conduct a security analysis and create a plan for
          testing. Popular planning tools include{" "}
          <a
            className="text-blue-500"
            href="https://iriusrisk.com/threat-modeling-tool/"
          >
            IriusRisk
          </a>
          ,{" "}
          <a
            className="text-blue-500"
            href="https://www.atlassian.com/software/jira"
          >
            Jira
          </a>
          , and{" "}
          <a
            className="text-blue-500"
            href="https://www.atlassian.com/partnerships/slack"
          >
            Slack
          </a>
          , along with issue tracking and management tools.
        </li>

        <li className="text-lg mb-2">
          <strong>Build:</strong> DevSecOps build tools automate security
          analysis against build output artifacts, including software component
          analysis, static application software testing (SAST), and unit tests.
          These tools can be integrated into a CI/CD pipeline to automate these
          tests. During the build phase, developers should review and scan
          third-party code dependencies for potential vulnerabilities. Tools
          like{" "}
          <a
            className="text-blue-500"
            href="https://owasp.org/www-project-dependency-check/"
          >
            OWASP Dependency-Check
          </a>
          ,{" "}
          <a className="text-blue-500" href="https://www.sonarqube.org/">
            SonarQube
          </a>
          ,{" "}
          <a className="text-blue-500" href="https://app.sourceclear.io/login">
            SourceClear
          </a>
          ,{" "}
          <a
            className="text-blue-500 "
            href="http://retirejs.github.io/retire.js/"
          >
            Retire.js
          </a>
          ,{" "}
          <a className="text-blue-500" href="https://www.checkmarx.com/">
            Checkmarx
          </a>
          , and{" "}
          <a className="text-blue-500" href="https://snyk.io/">
            Snyk
          </a>{" "}
          execute build phase analysis. In the code phase, tools like static
          code analysis, code reviews, and pre-commit hooks help developers
          write more secure code. These tools support various programming
          languages and integrated development environments.
        </li>
        <li className="text-lg">
          <strong>Test:</strong> The test phase, initiated after a build
          artifact is deployed, uses dynamic application security testing (DAST)
          tools to detect live application flows like user authentication,
          authorization, SQL injection, and API-related endpoints. Various open
          source and paid tools, including{" "}
          <a
            className="text-blue-500"
            href="https://dev.to/raghwendrasonu/security-testing-bdd-security-2oj8"
          >
            BDD Automated Security Tests
          </a>
          ,{" "}
          <a
            className="text-blue-500"
            href="https://owasp.org/index.php/JBroFuzz"
          >
            JBroFuzz
          </a>
          ,{" "}
          <a
            className="text-blue-500"
            href="https://boofuzz.readthedocs.io/en/stable/"
          >
            Boofuzz
          </a>
          ,{" "}
          <a
            className="text-blue-500"
            href="https://owasp.org/www-project-zap/"
          >
            OWASP ZAP
          </a>
          ,{" "}
          <a className="text-blue-500" href="https://www.arachni-scanner.com/">
            Arachi
          </a>
          ,{" "}
          <a
            className="text-blue-500"
            href="https://www.ibm.com/supply-chain/hcl-divestiture"
          >
            IBM AppScan
          </a>
          ,{" "}
          <a className="text-blue-500" href="http://gauntlt.org/">
            GAUNTLT
          </a>
          , and{" "}
          <a className="text-blue-500" href="https://secapps.com/suite">
            SecApp suite
          </a>{" "}
          are available.
        </li>

        <li className="text-lg">
          <strong>Deploy:</strong> During the deploy phase, security concerns
          are addressed against the live production system, including
          configuration differences and validation of production TLS and DRM
          certificates. Runtime verification tools and chaos engineering
          principles are used to test the system's performance. The release
          phase focuses on securing the runtime environment, ensuring minimal
          access, and using configuration management tools for security. Best
          practices are provided by the security community.
        </li>
        <li className="text-lg">
          <strong>Observe:</strong> Upon deployment in a live production
          environment, companies need to monitor the application for potential
          attacks or leaks using automated security checks and monitoring loops.
          Runtime application self-protection (RASP) automatically identifies
          and blocks inbound security threats, while penetration testing and bug
          bounty programs can be used to identify exploits or vulnerabilities.
          Security monitoring tools like{" "}
          <a
            className="text-blue-500"
            href="https://www.imperva.com/products/runtime-application-self-protection-rasp/"
          >
            Imperva RASP
          </a>
          ,{" "}
          <a className="text-blue-500" href="https://www.alertlogic.com/">
            Alert Logic
          </a>
          , and{" "}
          <a
            className="text-blue-500"
            href="https://www.cloudpassage.com/cloud-computing-security/"
          >
            Halo
          </a>{" "}
          are popular.
        </li>
      </ul>
      <h3 className="mt-8 mb-5 text-2xl">
        <strong>The Shift-Left Approach</strong>
      </h3>
      <figure>
        <img src="shiftleft0.png" alt="Without Shift-Left" />
        <figcaption className="text-center mb-4 text-slate-700">
          Without Shift-Left
        </figcaption>
      </figure>
      <figure>
        <img src="shiftleft1.png" alt="With Shift-Left" />
        <figcaption className="text-center mb-4 text-slate-700">
          With Shift-Left
        </figcaption>
      </figure>
      <p className="mt-4 text-lg">
        One of DevSecOps’ most significant innovations is the “shift-left”
        approach. Picture a typical development timeline—ideas are fleshed out,
        code is written, tests are run, and, finally, security is assessed.
        “Shifting left” means moving security assessments to the beginning
        stages of this timeline, catching issues early and addressing them
        before they become costly, complex problems. This proactive mindset
        empowers developers and security teams to collaborate closely from the
        start, building security right into the code as it’s written. It’s like
        spotting a crack at the foundation level instead of waiting until the
        whole building is complete; with DevSecOps, the earlier issues are
        found, the easier they are to fix.
      </p>
      <div>
        <h3 className="mt-7 mb-3 text-2xl">
          <strong>Benefits of DevSecOps</strong>
        </h3>
        <p className="text-lg">
          So, what’s the big deal with DevSecOps? Here’s a look at the
          difference it makes:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
          <li>
            <strong>Enhanced Security Without Slowing Down:</strong> Traditional
            security can feel like slamming the brakes in a fast-moving DevOps
            pipeline. But with DevSecOps, security checks are embedded right
            into the workflow, often automated so teams don’t miss a beat. This
            way, security isn’t a last-minute barrier—it’s something you can
            rely on throughout the process.
          </li>
          <li>
            <strong>Catching Vulnerabilities Early:</strong> DevSecOps catches
            issues before they get baked into the final product, meaning fewer
            surprises (and fewer headaches) down the line. Think of it as
            quality control that saves you from scrambling for fixes later,
            giving both teams and users peace of mind.
          </li>
          <li>
            <strong>Streamlined Compliance:</strong> In many industries,
            compliance isn’t just important—it’s mandatory. With DevSecOps,
            compliance checks run as part of the pipeline itself, ensuring that
            industry standards are met automatically. This makes it easier to
            stay compliant without the stress of last-minute audits.
          </li>
          <li>
            <strong>Building a Security-First Culture:</strong> One of the
            biggest shifts DevSecOps brings is cultural. When security is a
            shared responsibility, everyone on the team becomes more aware,
            thoughtful, and proactive about potential risks. Over time, security
            becomes second nature, blending seamlessly into daily work and
            driving a safer, more resilient product.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mt-7 text-2xl">
          <strong>DevSecOps Challenges</strong>
        </h3>
        <p className="text-lg">
          While DevSecOps can benefit your organisation in many ways, we’ve
          observed several challenges to its adoption, the most common of which
          are the following:
        </p>
        <ol className="list-decimal pl-5 m-2">
          {" "}
          {/* Tailwind classes for numbering and padding */}
          <li className="m-1">
            <strong>Limited Security Assurance:</strong> At both business and
            project levels, there’s often a lack of confidence in the security
            measures being implemented.
          </li>
          <li className="m-1">
            <strong>Organisational Barriers:</strong> Issues with collaboration,
            tooling, and a lack of unified culture can slow down progress.
          </li>
          <li className="m-1">
            <strong>Quality Concerns:</strong> As systems get more complex,
            security is sometimes deprioritized, which can impact overall
            quality.
          </li>
          <li className="m-1">
            <strong>Skill Gaps:</strong> Developers, business stakeholders, and
            auditors may lack the security skills needed to fully adopt
            DevSecOps practices.
          </li>
          <li className="m-1">
            <strong>Insufficient Security Guidance:</strong> Limited resources,
            standards, and data can make it challenging to provide clear
            security guidance throughout projects.
          </li>
        </ol>
      </div>
      <div>
        <h3 className="mt-7 mb-3 text-2xl">
          <strong>Future of DevSecOps</strong>
        </h3>
        <p className="text-lg">
          DevSecOps isn’t just a trend—it’s quickly becoming a necessity as the
          demands for secure, agile development keep rising. So, what’s next?
          Here’s a peek into the future:
        </p>
        <ul className="list-disc pl-5">
          {" "}
          <li>
            <strong>AI-Driven Security:</strong> With AI and machine learning
            advancing, DevSecOps will be able to catch threats faster and adapt
            security protocols on the fly. Imagine systems that learn from each
            encounter, staying one step ahead of potential risks.
          </li>
          <li>
            <strong>Cloud-Native Focus:</strong> As more companies shift to the
            cloud, DevSecOps will double down on securing complex
            environments—like containers, serverless functions, and Kubernetes.
            It’s about making sure cloud-native apps are safe from the ground
            up.
          </li>
          <li>
            <strong>Easier-to-Use Tools for Devs:</strong> Future DevSecOps
            tools will fit naturally into developers’ workflows, making it
            simpler to spot and fix vulnerabilities without slowing down.
            Security won’t feel like an extra step; it’ll be part of the
            process.
          </li>
          <li>
            <strong>Automated Compliance:</strong> With regulations changing
            constantly, compliance will be baked into DevSecOps tools, keeping
            projects in line with GDPR, HIPAA, and others—without a last-minute
            scramble.
          </li>
          <li>
            <strong>A Culture Shift Toward Security:</strong> More organisations
            will make security everyone’s business, bringing developers and
            security teams together. This shift will make security feel less
            like a final check and more like a team effort from the start.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DevSecOps;
