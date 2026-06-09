export const seedJobExperiences = [
  {
    id: 2,
    title: "Full-stack Developer",
    company: "Tres Pi Medios / Stanley Black & Decker",
    startDate: new Date("2024-07-18"),
    endDate: new Date("2025-01-15"),
      shortDescription:
        "Full-stack developer building internal tools and Zendesk integrations for Stanley Black & Decker.",
    description:
      "I worked as a full-stack developer at Tres Pi Medios, a digital agency that provides software solutions to clients around the world. Here, I worked on projects for Stanley Black & Decker, a global provider of tools and storage, commercial electronic security, and engineered fastening. As part of the development team, I was responsible for the design, development and implementation of web applications and services for both internal use of the company and for the Zendesk platform of Stanley Black & Decker. I also worked on the optimization and performance improvement of existing applications and services. I used various technologies and cloud providers such as Node.js, Express.js, React, PostgreSQL, TypeScript, Azure, Docker, MongoDB and Git.",
    highlights: [
      {
        title: "Built an application for managing tool loans and repairs for Stanley Black & Decker in Italy, reducing task time by 50%.",
        metric: { value: "50%", label: "time reduction" },
      },
      {
        title: "Developed an Azure Cloud Function to automate generative AI integration, enabling automated response generation for Stanley Black & Decker's customers on Zendesk in the U.S.",
      },
      {
        title: "Developed chatbot features for customer support workflows in the U.S. and Canada, improving response efficiency across multiple markets.",
      },
      {
        title: "Implemented real-time data delivery for a Power BI dashboard, improving visibility into operational metrics and reporting workflows.",
      },
      {
        title: "Integrated internationalization across frontend and backend for web applications in Italy and the Middle East, enabling support for both Italian and English.",
      },
    ],
    image: "stanley.svg",
    secondaryImage: "trespi.svg",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "React", icon: "react" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Sequelize", icon: "sequelize" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Azure", icon: "azure" },
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Vite", icon: "vite" },
      { name: "Material-UI", icon: "mui" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
  {
    id: 3,
    title: "Full-stack Developer Intern",
    company: "SuperGIROS",
    startDate: new Date("2023-08-18"),
    endDate: new Date("2024-07-17"),
      shortDescription:
        "Full-stack intern developing chatbots and inventory systems for a Colombian financial services company.",
    description:
      "I worked as a full-stack developer at SuperGIROS, a financial services company that provides banking and payment solutions to customers in Colombia. Here, I worked on projects that involved developing and maintaining web applications for internal use of the company in the areas of operations and customer services. As part of the development team, I was responsible for the design, development, and implementation of new features and functionalities. I also worked on the optimization and performance improvement of existing applications and services. I used various technologies such as Node.js, Angular, Java, Spring, Hibernate, Docker, and Linux servers.",
    highlights: [
      {
        title: "Developed a Node.js chatbot to assist sales personnel, reducing helpdesk calls by 60%.",
        metric: { value: "60%", label: "helpdesk reduction" },
      },
      {
        title: "Improved the performance of the company's main web application by 40% through refactoring, optimization, and an Angular upgrade.",
        metric: { value: "40%", label: "performance gain" },
      },
      {
        title: "Built an inventory and purchasing management application from scratch, reducing task time by 50%.",
        metric: { value: "50%", label: "time reduction" },
      },
      {
        title: "Created RESTful APIs to integrate new functionalities into the company's Intranet and web applications using Java, Spring, and Hibernate with remote OracleSQL databases.",
      },
      {
        title: "Implemented RESTful APIs in the company's microservices environment using Docker and Linux servers, supporting scalable service delivery.",
      },
      {
        title: "Developed a Java desktop service to manage matrix printers, improving the printing workflow with real-time WebSocket updates.",
      },
    ],
    image: "supergiros.webp",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Angular", icon: "angular" },
      { name: "MySQL", icon: "mysql" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "Spring", icon: "spring" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "Maven", icon: "maven" },
      { name: "Git", icon: "git" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "ubuntu" },
    ],
  },
  {
    id: 1,
    title: "Full Stack Software Engineer",
    company: "Wazuh",
    startDate: new Date("2026-01-07"),
    endDate: null,
      shortDescription:
        "Full-stack engineer building the XDR+SIEM dashboard at Wazuh, owning CI/CD and feature delivery.",
    description:
      "I work as a Full Stack Software Engineer at Wazuh, a cybersecurity company behind an open-source security monitoring platform. I lead end-to-end development of the XDR+SIEM dashboard application, owning feature delivery and maintenance across frontend and backend development, CI/CD automation, Linux package generation, GitHub Actions workflows, integration testing, and release artifact publishing. I collaborate closely with cross-functional teams to ship high-quality features that enhance platform performance and user experience. My stack includes Node.js, React, TypeScript, Docker, GitHub Actions, Linux package management, and Git.",
    highlights: [
      {
        title: "Led full-stack maintenance and migration through a major version upgrade, improving frontend and backend compatibility and increasing user engagement by 30%.",
        metric: { value: "30%", label: "engagement boost" },
      },
      {
        title: "Developed new dashboard features and functionalities, improving user experience and overall application performance.",
      },
      {
        title: "Optimized CI/CD pipelines with GitHub Actions, automating testing workflows and streamlining release package publishing.",
      },
      {
        title: "Built new modules integrating OpenSearch and Wazuh's native API, expanding platform capabilities and supporting additional workflows.",
      },
      {
        title: "Improved Linux package generation for dashboard installation, streamlining the installation workflow and reducing incorrect major upgrades to 1% across 90k+ users.",
        metric: { value: "1%", label: "error rate" },
      },
    ],
    image: "Wazuh-Logo-1.png",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Yarn", icon: "yarn" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Sass", icon: "sass" },
      { name: "Redux", icon: "redux" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Github Actions", icon: "githubactions" },
      { name: "Jest", icon: "jest" },
      { name: "Bash", icon: "bash" },
      { name: "Linux", icon: "linux" },
      { name: "Docker", icon: "docker" },
      { name: "NPM", icon: "npm" },
    ],
  },
];
