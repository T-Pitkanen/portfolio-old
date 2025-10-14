const topics = [
  {
    slug: "project-planning-and-documentation",
    title: "Project Planning & Documentation",
    excerpt: "Fundamentals of Agile methodologies and project documentation.",
    content: [
      "Project documentation and agile methodologies like Scrum and Kanban are essential for effective project management and team collaboration.",
    ],
    subtopics: [
      {
        slug: "kanban",
        title: "Kanban",
        excerpt: "Visual workflow management using a board and WIP limits.",
        content: [
          { type: "header", text: "What Kanban is?" },
          {
            type: "paragraph",
            text: "Kanban is a system for visualizing work so you can see what needs to be done, what’s in progress, and what’s finished. It helps teams (or individuals) manage tasks better, avoid overload, and continuously improve their process.",
          },
          { type: "header", text: "And how does it work?" },
          {
            type: "paragraph",
            text: "A Kanban board is usually divided into columns that represent different stages of work, such as:",
          },
          {
            type: "list",
            items: ["To Do", "In Progress", "Done"],
          },
          {
            type: "paragraph",
            text: "Each task or project is represented by a card that moves across the columns as work progresses. You can use physical boards (sticky notes on a wall) or digital tools like Trello, Jira, Notion, or Asana.",
          },
          {
            type: "image",
            src: "/topics/agile/kanban/kanban1.png",
            alt: "a kanban board example",
            caption: "Kanban board example",
            size: "medium",
          },
          {
            type: "header",
            text: "Own example project of a Kanban board",
          },
          {
            type: "paragraph",
            text: "I had a task to create a simple Kanban board for Netflix or a similar streaming platform.",
          },
          {
            type: "image",
            src: "/topics/agile/kanban/kanban_own.jpg",
            alt: "a kanban board example project",
            caption: "Kanban board example for a streaming platform",
            size: "large",
          },
          {
            type: "image",
            src: "/topics/agile/kanban/own.png",
            alt: "a kanban board example project",
            caption: "Own small presentation of a kanban board",
            size: "large",
          },
        ],
      },
      {
        slug: "scrum",
        title: "Scrum",
        excerpt:
          "An Agile framework focused on teamwork, flexibility, and delivering work in short cycles.",
        content: [
          { type: "header", text: "What Scrum is?" },
          {
            type: "paragraph",
            text: "Scrum is a framework for managing projects, especially in software development, that focuses on teamwork, flexibility, and delivering work in small, manageable pieces. It’s part of the Agile family of methods and helps teams plan, build, test, and improve continuously.",
          },
          { type: "header", text: "How does it work?" },
          {
            type: "paragraph",
            text: "Scrum organizes work into short cycles called sprints, usually lasting 1–4 weeks. At the end of each sprint, the team delivers a working product or update, reviews what went well, and plans the next sprint.",
          },
          { type: "header", text: "Key Roles" },
          {
            type: "list",
            items: [
              "Product Owner – decides what needs to be built and sets priorities.",
              "Scrum Master – ensures the team follows Scrum principles and removes obstacles.",
              "Development Team – designs, codes, tests, and delivers the product.",
            ],
          },
          { type: "header", text: "Key Events" },
          {
            type: "list",
            items: [
              "Sprint Planning – the team decides what to do in the next sprint.",
              "Daily Scrum (Stand-up) – a short daily meeting to discuss progress and problems.",
              "Sprint Review – the team presents what they completed.",
              "Sprint Retrospective – the team reflects on how to improve next time.",
            ],
          },
          { type: "header", text: "Scrum Artifacts" },
          {
            type: "list",
            items: [
              "Product Backlog – a list of all features or ideas for the project.",
              "Sprint Backlog – the tasks chosen for the current sprint.",
              "Increment – the working product after each sprint.",
            ],
          },
          {
            type: "image",
            src: "/topics/agile/scrum/scrum.png",
            alt: "a scrum workflow example",
            caption: "Scrum workflow example",
            size: "medium",
          },
          { type: "header", text: "My personal task" },
          {
            type: "paragraph",
            text: "I had a task where I acted as the Product Owner for a software project that will become a digital flight logbook. The goal was to create a prioritized product backlog (for example in Excel).",
          },
          { type: "header", text: "Project description" },
          {
            type: "paragraph",
            text: "The application is intended for private aircraft pilots as an electronic flight logbook. Users should be able to record and manage flight details such as date, aircraft, route, duration and comments. The UI can follow common logbook layouts or be a design of your own.",
          },
          {
            type: "image",
            src: "/topics/agile/scrum/backlog.png",
            alt: "Backlog example for a flight logbook",
            caption: "Backlog example for a flight logbook",
            size: "full",
          },
          { type: "header", text: "Deliverable" },
          {
            type: "paragraph",
            text: "Create a prioritized product backlog listing roughly 10–15 features or requirements. An Excel file or a ready-made backlog template from the web can be used for presentation.",
          },
          {
            type: "image",
            src: "/topics/agile/scrum/sprint.png",
            alt: "Sprint backlog example for a flight logbook",
            caption: "Sprint backlog example for a flight logbook",
            size: "full",
          },
        ],
      },

      {
        slug: "software-requirements-specification",
        title: "Software Requirements Specification (SRS)",
        excerpt:
          "Defining functional and non-functional requirements for software projects.",
        content: [
          {
            type: "header",
            text: "What is it?",
          },
          {
            type: "paragraph",
            text: "Software engineering involves multiple activities, each focusing on different aspects of development. These include requirements specification, design, implementation, testing, and maintenance. The requirement specification phase determines how the software should function and serves as the foundation for all later stages.",
          },
          {
            type: "header",
            text: "The Role of Requirements Specification",
          },
          {
            type: "paragraph",
            text: "The central challenge in software development is defining customer requirements. Requirements are divided into functional and non-functional categories. Functional requirements describe what the system does, while non-functional requirements define quality attributes and environmental constraints such as usability, security, or performance.",
          },
          {
            type: "header",
            text: "Phases of Requirements Specification",
          },
          {
            type: "list",
            items: [
              "Requirements elicitation",
              "Requirements analysis",
              "Requirements validation",
              "Requirements documentation",
              "Requirements management",
            ],
          },
          {
            type: "paragraph",
            text: "These phases are often iterative — requirements are gathered, analyzed, and refined in cycles until they are complete and well-documented.",
          },
          {
            type: "header",
            text: "Requirements Elicitation Methods",
          },
          {
            type: "paragraph",
            text: "Elicitation begins by identifying stakeholders — individuals or groups directly or indirectly involved with the system. After identifying them, developers use interviews, brainstorming sessions, and prototype reviews to uncover requirements. In some cases, observation methods like ethnography are used to understand user workflows.",
          },
          {
            type: "list",
            items: [
              "Interviewing stakeholders",
              "Brainstorming sessions",
              "Creating prototypes or wireframes",
              "Observing user behavior (ethnography)",
              "Analyzing existing workflows or systems",
            ],
          },
          {
            type: "header",
            text: "Analysis, Documentation, and Validation",
          },
          {
            type: "paragraph",
            text: "Once gathered, requirements must be analyzed for completeness, consistency, and feasibility. They are then documented in a form that developers and testers can use. Validation ensures the documented requirements truly match the customer’s needs. Requirement management tracks changes that occur during development.",
          },
          {
            type: "header",
            text: "Functional Requirements",
          },
          {
            type: "paragraph",
            text: "Functional requirements describe system behavior — what the user can do and what the software must perform. Examples include:",
          },
          {
            type: "list",
            items: [
              "A customer can register for an account.",
              "A registered user can add products to a shopping cart.",
              "A user receives an email confirmation after payment.",
              "An admin can add new products to the catalog.",
            ],
          },
          {
            type: "paragraph",
            text: "Functional requirements are often represented as feature lists, UML use cases, or in agile contexts, user stories.",
          },
          {
            type: "header",
            text: "Non-Functional Requirements",
          },
          {
            type: "paragraph",
            text: "Non-functional requirements cover quality attributes and environmental constraints that affect the system as a whole.",
          },
          {
            type: "list",
            items: [
              "Usability – how easy and intuitive the system is to use.",
              "Security – who has access and how data is protected.",
              "Performance – how quickly the system responds.",
              "Scalability – ability to handle growing user or data loads.",
              "Stability – system recovery from errors.",
              "Extensibility and testability – ease of expanding or verifying the system.",
            ],
          },
          {
            type: "header",
            text: "Constraints and Environment",
          },
          {
            type: "list",
            items: [
              "Implementation technologies – programming languages, frameworks, or databases used.",
              "Operating environment – browser-based, desktop, or mobile application.",
              "Integration – connections to other systems or APIs.",
              "Compliance – adherence to laws or standards such as GDPR.",
            ],
          },
          {
            type: "header",
            text: "Modern Requirements Specification: Lean Startup Approach",
          },
          {
            type: "paragraph",
            text: "The Lean Startup method (Eric Ries, 2011) introduced a rapid learning approach through the build–measure–learn cycle. It is especially useful when user needs are uncertain, such as in startups or innovative products.",
          },
          {
            type: "list",
            items: [
              "Build – develop a minimum viable product (MVP).",
              "Measure – observe how users interact with it.",
              "Learn – analyze results and adjust based on feedback.",
            ],
          },
          {
            type: "paragraph",
            text: "An MVP is a simplified version of the product built quickly to collect feedback from real users. Based on the data, the team can decide to improve, pivot, or discard the idea.",
          },
          {
            type: "header",
            text: "Requirements in Agile Development",
          },
          {
            type: "paragraph",
            text: "Agile methods like Scrum and XP use lightweight, iterative approaches to manage requirements. The most common tool is the User Story.",
          },
          {
            type: "header",
            text: "User Story",
          },
          {
            type: "image",
            src: "/topics/agile/software/userstory.png",
            alt: "example of a user story",
            caption: "Example of a user story",
            size: "large",
          },
          {
            type: "paragraph",
            text: "A user story describes a functionality valuable to a user or customer. It includes a short written description, ongoing conversation for clarification, and acceptance tests to confirm completion.",
          },
          {
            type: "example",
            text: 'Example: "As a student, I want to purchase a parking pass so that I can drive to school."',
          },
          {
            type: "header",
            text: "Acceptance Criteria Example",
          },
          {
            type: "list",
            items: [
              "Buyer must be an enrolled student.",
              "Parking pass is valid for one month.",
              "Only one pass can be purchased per month.",
              "Payment is made via cash or online banking using a personal reference number.",
            ],
          },
          {
            type: "header",
            text: "Qualities of a Good User Story (INVEST Model)",
          },

          {
            type: "list",
            items: [
              "Independent – can be developed separately from others.",
              "Negotiable – not a fixed requirement but open for discussion.",
              "Valuable – provides clear user or business value.",
              "Estimable – effort can be reasonably estimated.",
              "Small – fits within a single sprint.",
              "Testable – can be verified through tests or clear acceptance criteria.",
            ],
          },
          {
            type: "paragraph",
            text: "A good user story describes a complete, user-centered feature that can be built, tested, and demonstrated within a sprint.",
          },
        
          {
            type: "header",
            text: "Task: Pair Work – Designing a Mobile App and Product Backlog",
          },
          {
            type: "paragraph",
            text: "I had a paired task with a classmate where we worked together to design a mobile application. The assignment included writing a description of the application (explaining its purpose and target users), creating user stories, and forming an initial prioritized product backlog in Excel. ",
          },
          {
            type: "paragraph",
            text: "We also divided the application's features into versions — identifying which features would be included in the first release and which would be planned for later versions. Additionally, we considered potential technical innovations that could be used in the future and listed possible non-functional requirements, such as device performance or hardware needs.",
          },
          {
            type: "image",
            src: "/topics/agile/software/kippo.png",
            alt: "Mobile app backlog example",
            size: "full",
          },
          {
            type: "image",
            src: "/topics/agile/software/kippo_2.png",
            alt: "Mobile app features example",
            size: "full",
          },
          {
            type: "image",
            src: "/topics/agile/software/käyttöliittymäsuunnittelu.png",
            alt: "Mobile app UI design example",
            size: "full",
          },
        ],
      },
      {
        slug: "use-case",
        title: "Use Case",
        excerpt: "Describing system interactions from a user's perspective.",
        content: [
          {
            type: "header",
            text: "What is a Use Case Diagram?",
          },
          {
            type: "paragraph",
            text: "A Use Case Diagram is a tool used in software engineering to visually describe how different users (called actors) interact with a system. It helps to identify the system’s functional requirements and to understand what actions users can perform. Instead of focusing on how the system is built, the diagram focuses on what the system does from the user's perspective.",
          },
          {
            type: "header",
            text: "Purpose and Description",
          },
          {
            type: "paragraph",
            text: "The main goal of a Use Case Diagram is to show the interactions between users and the system in a simple, understandable way. It works at a high level — no technical details are shown. Each use case represents a functionality or action that the system provides, such as 'Search product' or 'Make payment'.",
          },
          {
            type: "paragraph",
            text: "Each diagram is usually complemented with written descriptions that explain what happens in each use case step by step and what the expected results are. This combination of visual and written parts gives a full understanding of how the system should behave.",
          },
          {
            type: "header",
            text: "Main Elements of a Use Case Diagram",
          },
          {
            type: "list",
            items: [
              "System – represented as a rectangle that defines what is included in the system’s scope.",
              "Actors – the people, external systems, or devices that interact with the system.",
              "Use cases – shown as ovals; they describe the functionalities or services provided by the system.",
            ],
          },
          {
            type: "header",
            text: "My Banking System Example",
          },
          {
            type: "image",
            src: "/topics/agile/usecase/käyttökaavio.jpg",
            alt: "Banking system use case diagram showing user and bank interactions",
            caption:
              "Use case diagram of a banking system with authentication, account review, and transaction operations",
          },
          {
            type: "image",
            src: "/topics/agile/usecase/vaatimukset_actorit_käyttötapaukset.jpg",
            alt: "Detailed textual description of use case requirements, actors, and use cases",
            caption:
              "Detailed breakdown of requirements (Vaatimukset), actors (Actorit), and use cases (Käyttötapaukset)",
            size: "medium",
          },
          {
            type: "paragraph",
            text: "In this diagram, I've modeled a simple banking system with two actors and several interconnected use cases. This example demonstrates how a typical ATM or banking application would handle user interactions.",
          },
          {
            type: "subheader",
            text: "Actors",
          },
          {
            type: "paragraph",
            text: "Käyttäjä (User): The primary actor who initiates banking operations. This represents a regular bank customer using the system to perform various transactions.",
          },
          {
            type: "paragraph",
            text: "Pankki/Järjestelmä (Bank/System): The secondary actor representing the banking system or ATM that responds to user actions and processes transactions.",
          },
          {
            type: "subheader",
            text: "Use Cases",
          },
          {
            type: "paragraph",
            text: "1. Tilin tarkastaminen (Account Review): This is the main entry point where users check their account information. It serves as the starting point for other operations and provides users with an overview of their account status.",
          },
          {
            type: "paragraph",
            text: "2. Tunnistautuminen (Authentication): Connected with an include relationship to Account Review, this is a mandatory step that must happen every time a user wants to review their account. The include relationship shows that authentication cannot be skipped and is essential for security.",
          },
          {
            type: "paragraph",
            text: "3. Rahan nosto (Cash Withdrawal): Also connected with an include relationship to Authentication. Users must authenticate before withdrawing money. This use case interacts with the Bank/System actor to process the transaction and dispense cash.",
          },
          {
            type: "paragraph",
            text: "4. Kuitin tulostus (Receipt Printing): Connected with an extend relationship to Cash Withdrawal. This is an optional feature where users can choose whether to print a receipt after withdrawing money. The extend relationship shows this is not mandatory.",
          },
          {
            type: "paragraph",
            text: "5. Rahan talletus (Cash Deposit): Another banking operation that interacts with the Bank/System. This allows users to deposit money into their accounts through the ATM.",
          },
          {
            type: "header",
            text: "Understanding Relationships",
          },
          {
            type: "paragraph",
            text: "Include (<<include>>): This indicates mandatory functionality that must always be executed. In my diagram, authentication must always occur when reviewing accounts or withdrawing money. You can think of it as a required step that is part of the main use case.",
          },
          {
            type: "paragraph",
            text: "Extend (<<extend>>): This indicates optional functionality that may or may not happen depending on certain conditions or user choices. Receipt printing is optional and only happens if the user chooses to do so. The base use case (Cash Withdrawal) can complete successfully without the extending use case.",
          },
          {
            type: "header",
            text: "Key Components of a Use Case Diagram",
          },
          {
            type: "paragraph",
            text: "System Boundary: The rectangle that contains all use cases represents the system boundary. It shows what is inside the system and what is outside (the actors).",
          },
          {
            type: "paragraph",
            text: "Associations: The lines connecting actors to use cases show which actors can initiate which use cases. Solid lines indicate direct interaction.",
          },
          {
            type: "paragraph",
            text: "Stereotypes: The <<include>> and <<extend>> labels are called stereotypes. They provide additional meaning to the relationships between use cases.",
          },

          {
            type: "header",
            text: "Relationships in a Use Case Diagram",
          },
          {
            type: "paragraph",
            text: "Use Case Diagrams can also display relationships between use cases and actors. These relationships show how different elements depend on or interact with each other.",
          },
          {
            type: "list",
            title: "Common relationships include:",
            items: [
              "Association – a line connecting an actor and a use case, showing interaction.",
              "Include – shows that one use case always includes another use case (mandatory).",
              "Extend – indicates optional or conditional behavior that extends a base use case.",
              "Generalization – shows that one actor inherits the behavior of another, such as a 'Customer' and 'Guest' sharing similar actions.",
            ],
          },
          {
      type: "header",
      text: "Practical Applications",
    },
    {
      type: "paragraph",
      text: "Use case diagrams are essential tools in software development and are particularly useful when planning a new application or system. They help teams understand user requirements before writing any code.",
    },
    {
      type: "paragraph",
      text: "These diagrams are valuable for communicating requirements to developers, allowing everyone to have a shared understanding of what the system should do. They're also useful for documenting existing system functionality and training new team members.",
    },
    {
      type: "paragraph",
      text: "In real-world projects, use case diagrams serve as a bridge between business requirements and technical implementation. They help ensure that the development team builds what the users actually need.",
    },
        ],
      },
      {
        slug: "agile-vs-waterfall",
        title: "Agile vs Waterfall",
        excerpt:
          "Comparing iterative Agile with sequential Waterfall development.",
        content: [
          { type: "header", text: "Agile vs Waterfall Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        slug: "continuous-integration-and-deployment",
        title: "Continuous Integration and Deployment",
        excerpt: "Automating code integration, testing and deployment.",
        content: [
          {
            type: "header",
            text: "",
          },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    excerpt: "Introduction to blockchain technology and its applications.",
    content: [
      "Blockchain is a distributed ledger technology that enables secure and transparent record-keeping.",
    ],
    subtopics: [
      {
        slug: "blockchain-overview",
        title: "What is Blockchain?",
        excerpt: "An overview of blockchain technology.",
        content: [
          { type: "header", text: "In progress..." },

          {
            type: "paragraph",

            text: "Blockchain is a digital system for recording information in a secure, transparent and tamper-proof way. It functions as a decentralized ledger where data, known as transactions, is stored in blocks that are linked together in chronological order. Once data is added to the chain, it becomes extremely difficult to alter, making blockchain one of the most secure data storage methods available today.",
          },
          {
            type: "image",
            src: "/topics/blockchain/blockchain.png",
            alt: "What is blockchain illustration",
            caption:
              "Blockchain visualized as a digital ledger of connected blocks",
          },
          { type: "header", text: "How Blockchain Works" },
          {
            type: "paragraph",
            text: "A blockchain consists of blocks that store information such as transactions, timestamps and unique digital fingerprints called hashes. Each block is connected to the previous one through these hashes, forming a continuous chain. Because every block depends on the one before it, changing one block would require altering the entire chain — something nearly impossible without network-wide agreement.",
          },
          {
            type: "paragraph",
            text: "Instead of being managed by a single server or authority, blockchain data is distributed across a network of computers known as nodes. Each node holds a full copy of the blockchain and participates in verifying new transactions through consensus algorithms like Proof of Work or Proof of Stake.",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
          { type: "header", text: "Key Features" },
          {
            type: "paragraph",
            text: "Decentralization: Instead of relying on a central authority, blockchain operates on a peer-to-peer network of nodes. This makes the system more resilient, transparent, and less prone to corruption.",
          },
          {
            type: "paragraph",
            text: "Immutability: Once data is recorded in a block and confirmed by the network, it cannot be changed or deleted. This ensures the integrity and trustworthiness of all information on the chain.",
          },
          {
            type: "paragraph",
            text: "Transparency: Public blockchains allow anyone to view transactions, making the entire system open and verifiable.",
          },
          {
            type: "paragraph",
            text: "Security: Blockchain uses cryptographic algorithms to protect data and verify identities. Every transaction is digitally signed, making unauthorized changes nearly impossible.",
          },
          { type: "header", text: "Real-World Applications" },
          {
            type: "paragraph",
            text: "While blockchain was originally created for Bitcoin, its use cases now extend far beyond cryptocurrency. It is transforming industries such as finance, logistics, healthcare, and digital identity management by improving transparency, efficiency, and security.",
          },
          {
            type: "paragraph",
            text: "Examples include supply chain tracking, secure digital voting systems, NFT marketplaces and smart contracts that execute automatically once certain conditions are met.",
          },

          { type: "header", text: "Challenges" },
          {
            type: "paragraph",
            text: "Despite its advantages, blockchain faces challenges such as high energy consumption, limited scalability and uncertain regulations in some countries. Developers and researchers are continuously working on improving its efficiency and accessibility.",
          },

          {
            type: "paragraph",
            text: "Blockchain is much more than just the technology behind cryptocurrencies. It’s a revolutionary system that enables secure, transparent and decentralized data management. As industries continue to adopt it, blockchain is shaping the foundation for a more trustworthy and digital future.",
          },
        ],
      },
      {
        slug: "peer-to-peer-networks",
        title: "Peer-to-Peer Networks",
        excerpt: "Decentralized networks where nodes share resources directly.",
        content: [
          { type: "header", text: "What Are Peer-to-Peer Networks?" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "hashing-and-consensus",
        title: "Hashing and Consensus",
        excerpt:
          "Techniques for ensuring data integrity and agreement in a distributed system.",
        content: [
          { type: "header", text: "Hashing and Consensus in Blockchain" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "smart-contracts",
        title: "Smart Contracts",
        excerpt:
          "Self-executing contracts with the terms directly written into code.",
        content: [
          { type: "header", text: "Smart Contracts Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "cryptocurrencies",
        title: "Cryptocurrencies",
        excerpt:
          "Digital or virtual currencies that use cryptography for security.",
        content: [
          { type: "header", text: "Cryptocurrencies Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "keys-and-wallets",
        title: "Keys and Wallets",
        excerpt:
          "Understanding public/private keys and cryptocurrency wallets.",
        content: [
          { type: "header", text: "Keys and Wallets Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "symmetric-vs-asymmetric-encryption",
        title: "Symmetric vs Asymmetric Encryption",
        excerpt:
          "Differences between symmetric and asymmetric encryption methods.",
        content: [
          {
            type: "header",
            text: "Symmetric vs Asymmetric Encryption Overview",
          },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "signatures-and-certificates",
        title: "Signatures and Certificates",
        excerpt:
          "Digital signatures and certificates for authentication and integrity.",
        content: [
          { type: "header", text: "Signatures and Certificates Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        slug: "pos_and_pow",
        title: "Proof of Stake vs Proof of Work",
        excerpt: "Consensus mechanisms used in blockchain networks.",
        content: [
          { type: "header", text: "" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    excerpt: "Overview of AI concepts and applications.",
    content: [
      "AI encompasses machine learning, natural language processing, and robotics.",
    ],
    subtopics: [
      {
        slug: "what-is-ai",
        title: "What is AI?",
        excerpt: "Definition and key concepts of artificial intelligence.",
        content: [
          { type: "header", text: "What is AI?" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        slug: "machine-learning",
        title: "Machine Learning",
        excerpt: "Subfield of AI focused on data-driven learning.",
        content: [
          { type: "header", text: "What is Machine Learning?" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        slug: "neuronal-networks",
        title: "Neuronal Networks",
        excerpt: "AI systems inspired by the human brain.",
        content: [
          { type: "header", text: "What are Neuronal Networks?" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        slug: "robotics",
        title: "Robotics",
        excerpt: "AI in the design and operation of robots.",
        content: [
          { type: "header", text: "What is Robotics?" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
          {
            type: "section",
            title: "",
            children: [],
          },
        ],
      },
      {
        slug: "natural-language-processing",
        title: "Natural Language Processing",
        excerpt: "AI's ability to understand and generate human language.",
        content: [
          { type: "header", text: "" },
          {
            type: "paragraph",
            text: "In progress...",
          },
          {
            type: "image",
            src: "",
            alt: "",
            caption: "",
          },
        ],
      },
    ],
  },
];

export default topics;
