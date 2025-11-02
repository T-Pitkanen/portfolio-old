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
        slug: "charts-and-diagrams",
        title: "Charts and Diagrams",
        excerpt: "Visual tools for process representation and decision making.",
        content: [
          {
            type: "header",
            text: "What is a Flowchart?",
          },
          {
            type: "paragraph",
            text: "A flowchart is a visual diagram that represents a process, system, or algorithm using standardized symbols and arrows. It shows the sequence of steps and decisions in a clear, easy-to-understand format. Flowcharts are used across many fields - from software development to business processes to everyday problem-solving.",
          },
          {
            type: "header",
            text: "Basic Flowchart Symbols",
          },
          {
            type: "paragraph",
            text: "Oval (Terminal): Represents the start or end of a process. Every flowchart begins and ends with this symbol.",
          },
          {
            type: "paragraph",
            text: "Rectangle (Process): Represents an action or process step. This is where work actually happens, like 'Calculate total' or 'Send email'.",
          },
          {
            type: "paragraph",
            text: "Diamond (Decision): Represents a decision point where the flow can branch based on yes/no or true/false conditions. For example, 'Is password correct?'",
          },
          {
            type: "paragraph",
            text: "Parallelogram (Input/Output): Represents data input or output operations, like 'Enter username' or 'Display result'.",
          },
          {
            type: "paragraph",
            text: "Arrows (Flow Lines): Show the direction of flow from one step to the next. They connect all symbols and guide the reader through the process.",
          },
          {
            type: "header",
            text: "Why Use Flowcharts?",
          },
          {
            type: "paragraph",
            text: "Flowcharts make complex processes easier to understand. Instead of reading lengthy descriptions, you can see the entire process at a glance. They're especially useful for identifying bottlenecks, redundant steps, or potential problems in a process.",
          },
          {
            type: "paragraph",
            text: "In software development, flowcharts help programmers plan their code before writing it. They can visualize the logic flow, identify edge cases, and ensure all possible scenarios are handled. This planning step often saves time by catching logical errors early.",
          },
          {
            type: "paragraph",
            text: "Flowcharts are also excellent communication tools. They provide a common visual language that both technical and non-technical people can understand. Team members can discuss processes using the flowchart as a reference, ensuring everyone has the same understanding.",
          },
          {
            type: "header",
            text: "Creating Effective Flowcharts",
          },
          {
            type: "paragraph",
            text: "Good flowcharts are simple and clear. Start at the top and flow downward or from left to right - this is the natural reading direction. Avoid crossing lines when possible, as they make the diagram harder to follow.",
          },
          {
            type: "paragraph",
            text: "Use consistent symbols throughout your flowchart. Each symbol type should always represent the same kind of step. Keep text inside symbols brief but descriptive - use action verbs for process steps like 'Verify password' rather than vague labels like 'Check'.",
          },
          {
            type: "paragraph",
            text: "Label decision branches clearly. Each path from a diamond should be marked with the condition (Yes/No, True/False, or specific values). This ensures anyone reading the flowchart knows which path to follow based on the decision outcome.",
          },
          {
            type: "header",
            text: "My Flowchart Example: Number Guessing Game",
          },
          {
            type: "paragraph",
            text: "To practice creating flowcharts, I mapped out a simple number guessing game written in C#. This exercise helped me understand how code logic translates into visual flow diagrams.",
          },
          {
            type: "image",
            src: "/topics/agile/diagrams/example.png",
            alt: "C# code for a number guessing game",
            caption: "The original C# code for the number guessing game",
            size: "large",
          },
          {
            type: "image",
            src: "/topics/agile/diagrams/2.jpg",
            alt: "Flowchart representation of the number guessing game",
            caption: "Flowchart visualization of the game logic",
            size: "scale-down",
          },
          {
            type: "paragraph",
            text: "The flowchart shows how the program generates a random number, then loops through player guesses. Decision diamonds compare each guess to the secret number, branching to 'too low' or 'too high' messages, or ending with a congratulations when correct. The loop structure is clearly visible as the flow returns back to the guess input after each incorrect attempt.",
          },
          {
            type: "header",
            text: "Common Applications",
          },
          {
            type: "paragraph",
            text: "In programming, flowcharts are used to design algorithms before coding. They help visualize loops, conditional statements, and function calls. Many programmers sketch flowcharts when working on complex logic.",
          },
          {
            type: "paragraph",
            text: "Businesses use flowcharts to document and improve processes like customer service workflows, manufacturing procedures, or approval processes. They help identify inefficiencies and standardize operations across teams.",
          },
          {
            type: "paragraph",
            text: "In problem-solving and troubleshooting, flowcharts guide users through systematic diagnostic processes. Technical support often uses flowcharts to help diagnose and fix common problems.",
          },
        ],
      },
    ],
  },
  {
    slug: "blockchain-and-cryptography",
    title: "Blockchain & Cryptography",
    excerpt:
      "Fundamentals of blockchain technology and cryptographic principles.",
    content: [
      "Blockchain is a decentralized digital ledger that securely records transactions across a network of computers. It uses cryptographic techniques to ensure data integrity, transparency, and immutability, making it the backbone of cryptocurrencies like Bitcoin and Ethereum.",
    ],
    subtopics: [
      {
        slug: "blockchain-basics",
        title: "Blockchain Basics",
        excerpt:
          "Understanding the fundamental concepts of blockchain technology.",
        content: [
          {
            type: "header",
            text: "What is Blockchain?",
          },
          {
            type: "paragraph",
            text: "Blockchain is a distributed digital ledger that stores data in a way that makes it extremely difficult to change, hack, or manipulate. The name 'blockchain' literally describes its structure: information is stored in blocks, and these blocks are linked together in a chronological chain. Each block contains a collection of data, and once a block is added to the chain, it becomes a permanent part of the record.",
          },
          {
            type: "paragraph",
            text: "Unlike traditional databases that are stored in one central location and controlled by a single entity (like a bank or company), blockchain is distributed across many computers around the world. Every participant in the network has a complete copy of the entire blockchain, making it decentralized and transparent.",
          },
          {
            type: "header",
            text: "The Structure of a Block",
          },
          {
            type: "image",
            src: "/topics/blockchain/blockchain.png",
            alt: "Structure of a blockchain block showing data, hash, and previous block's hash",
            caption: "Structure of a blockchain block",
          },
          {
            type: "paragraph",
            text: "To understand blockchain, we need to understand what a block actually contains. Each block has three fundamental components that work together to create a secure and linked chain.",
          },
          {
            type: "subheader",
            text: "1. Block Data",
          },
          {
            type: "paragraph",
            text: "The data stored in a block depends on the type of blockchain. In Bitcoin's blockchain, each block contains transaction information: who sent Bitcoin, who received it, and how much was transferred. A single block can contain thousands of transactions. In other types of blockchains, the data might be different - for example, supply chain blockchains might store information about product movements, while medical blockchains might store patient records.",
          },
          {
            type: "subheader",
            text: "2. Hash",
          },
          {
            type: "paragraph",
            text: "A hash is a unique identifier for each block, similar to a fingerprint. It's a fixed-length string of characters created by running the block's data through a mathematical algorithm (called a hash function). The important thing about hashes is that they're completely unique to the data they represent. If you change even a single character in the block's data, the entire hash changes completely.",
          },
          {
            type: "paragraph",
            text: "For example, if a block's hash is '3a5f7c9d2e1b4f8a', changing just one transaction detail would produce an entirely different hash like '8b2e5f1a9c7d3e4b'. This property makes it immediately obvious if anyone tries to tamper with the data in a block.",
          },
          {
            type: "subheader",
            text: "3. Previous Block's Hash",
          },
          {
            type: "paragraph",
            text: "This is what creates the 'chain' in blockchain. Each block (except the first one) contains the hash of the previous block. This links all blocks together in an unbreakable chain. The first block in a blockchain is called the genesis block, and it has no previous block to reference.",
          },
          {
            type: "header",
            text: "How the Chain Creates Security",
          },
          {
            type: "paragraph",
            text: "The linking of blocks through hashes is what makes blockchain so secure. Let's imagine someone tries to tamper with a block in the middle of the chain. If they change the data in Block 5, the hash of Block 5 changes. But Block 6 still contains the old hash of Block 5, so the chain is broken. The tampering is immediately detected because the hashes don't match.",
          },
          {
            type: "paragraph",
            text: "To successfully tamper with the blockchain, an attacker would need to recalculate the hash of Block 5, then recalculate the hash of Block 6 (which now contains the new Block 5 hash), then Block 7, and so on for every single block that comes after. With thousands or millions of blocks, this becomes computationally impossible, especially because new blocks are constantly being added.",
          },
          {
            type: "paragraph",
            text: "But there's an additional layer of security: the blockchain is distributed across thousands of computers. Each computer has a copy of the blockchain, and they constantly check each other. If one computer's blockchain differs from the others, the network recognizes it as invalid. To successfully alter the blockchain, you'd need to control more than half of all computers in the network simultaneously - a near-impossible feat in large networks like Bitcoin.",
          },
          {
            type: "header",
            text: "Understanding Bitcoin Mining",
          },
          {
            type: "image",
            src: "/topics/blockchain/farm.png",
            alt: "Illustration of Bitcoin mining process with miners solving puzzles to add blocks",
            caption: "Bitcoin mining farm",
          },
          {
            type: "paragraph",
            text: "Mining is the process by which new blocks are created and added to the Bitcoin blockchain. It's called 'mining' because, like mining for gold, it requires effort and resources, and it rewards those who succeed. However, instead of physical labor, Bitcoin mining requires computational power.",
          },
          {
            type: "subheader",
            text: "What Miners Actually Do",
          },
          {
            type: "paragraph",
            text: "When Bitcoin transactions occur, they sit in a pool of unconfirmed transactions called the mempool. Miners collect these transactions and bundle them into a new block. However, they can't just add this block to the blockchain. They must first solve a complex mathematical puzzle, and this is where the real work happens.",
          },
          {
            type: "paragraph",
            text: "The puzzle involves finding a special number called a nonce (number used once). Miners must find a nonce that, when combined with the block's data and run through the hash function, produces a hash that meets specific requirements. In Bitcoin, the hash must start with a certain number of zeros. For example, the network might require a hash that starts with 19 zeros.",
          },
          {
            type: "subheader",
            text: "The Mining Process Step by Step",
          },
          {
            type: "paragraph",
            text: "First, the miner collects pending transactions from the mempool and creates a candidate block. This block contains the transaction data, the hash of the previous block, a timestamp, and a nonce field that starts at zero.",
          },
          {
            type: "paragraph",
            text: "Next, the miner runs all this data through the SHA-256 hash function (the cryptographic algorithm Bitcoin uses). If the resulting hash doesn't meet the requirements (doesn't have enough leading zeros), the miner increments the nonce by 1 and tries again. This process repeats billions of times per second.",
          },
          {
            type: "paragraph",
            text: "There's no shortcut or clever algorithm to find the correct nonce - miners must literally try random numbers until they find one that works. This is called a proof-of-work system, which I'll discuss in more detail in my separate article about consensus mechanisms.",
          },
          {
            type: "paragraph",
            text: "When a miner finally finds a nonce that produces a valid hash, they broadcast the new block to the network. Other computers verify that the solution is correct (which is quick and easy) and add the block to their copy of the blockchain. The successful miner receives a reward in Bitcoin for their effort.",
          },
          {
            type: "subheader",
            text: "Mining Difficulty",
          },
          {
            type: "paragraph",
            text: "Bitcoin is designed so that a new block is added approximately every 10 minutes. As more miners join the network and computational power increases, finding the correct nonce would become easier and blocks would be created faster. To prevent this, Bitcoin automatically adjusts the difficulty every 2,016 blocks (roughly every two weeks).",
          },
          {
            type: "paragraph",
            text: "If blocks are being created faster than every 10 minutes, the difficulty increases by requiring more leading zeros in the hash. If blocks are too slow, the difficulty decreases. This self-adjusting mechanism keeps the block creation rate stable regardless of how many miners are participating.",
          },
          {
            type: "subheader",
            text: "Mining Rewards and Incentives",
          },
          {
            type: "paragraph",
            text: "Miners are motivated to dedicate computational resources to mining because of two types of rewards. First, the block reward: when a miner successfully adds a block, they receive newly created Bitcoin. This reward started at 50 BTC per block in 2009 but halves approximately every four years in an event called the halving. As of 2024, the reward is 3.125 BTC per block.",
          },
          {
            type: "paragraph",
            text: "Second, transaction fees: users can attach fees to their transactions to incentivize miners to include them in blocks. During periods of high network activity, these fees can become substantial. As block rewards continue to decrease over time, transaction fees will become increasingly important for miner profitability.",
          },
          {
            type: "subheader",
            text: "Mining Hardware and Energy",
          },
          {
            type: "image",
            src: "/topics/blockchain/asic.png",
            alt: "ASIC mining hardware used for Bitcoin mining",
            caption: "ASIC mining hardware",
          },
          {
            type: "paragraph",
            text: "In Bitcoin's early days, people could mine using regular computer CPUs. As competition increased, miners moved to graphics cards (GPUs), which are better at performing the repetitive calculations needed for mining. Today, Bitcoin mining is dominated by specialized hardware called ASICs (Application-Specific Integrated Circuits) designed specifically for mining.",
          },
          {
            type: "paragraph",
            text: "These ASIC miners are incredibly powerful but also consume significant electricity. A modern mining operation might use as much power as a small town. This has led to debates about Bitcoin's environmental impact. However, many mining operations now use renewable energy sources, and the energy consumption can be seen as the cost of securing a decentralized financial network.",
          },
          {
            type: "subheader",
            text: "Mining Pools",
          },
          {
            type: "paragraph",
            text: "Because mining has become so competitive, individual miners have very low chances of successfully mining a block. To address this, miners often join mining pools where they combine their computational power. When the pool successfully mines a block, the reward is distributed among all participants based on how much computational power they contributed.",
          },
          {
            type: "paragraph",
            text: "Mining pools have made it possible for smaller miners to earn more consistent (though smaller) rewards rather than waiting potentially years for a lucky solo mining success.",
          },
          {
            type: "header",
            text: "Immutability and Trust",
          },
          {
            type: "paragraph",
            text: "One of blockchain's most important characteristics is immutability - once data is recorded in a block and that block is added to the chain, it becomes extremely difficult to change. This isn't because the data is physically unchangeable, but because changing it would require enormous computational resources and control over the network.",
          },
          {
            type: "paragraph",
            text: "This immutability creates trust in a trustless system. You don't need to trust a bank, government, or company to maintain accurate records. Instead, you trust the mathematics and the distributed network of computers. The blockchain's transparent nature means anyone can verify the entire history of transactions, yet it's secure enough that no single entity can manipulate it.",
          },
        ],
      },
      {
        slug: "consensus-mechanisms",
        title: "Consensus Mechanisms",
        excerpt: "Methods for achieving agreement in distributed systems.",
        content: [
          { type: "header", text: "What is Consensus in Blockchain?" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "network-structure",
        title: "Network Structure",
        excerpt: "How blockchain networks are organized and maintained.",
        content: [
          { type: "header", text: "Network Topology" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "cryptography",
        title: "Cryptography",
        excerpt: "Techniques for ensuring data integrity and confidentiality.",
        content: [
          { type: "header", text: "Cryptography Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
      {
        slug: "blockchain-applications",
        title: "Blockchain Applications: Smart Contracts and Cryptowallets",
        excerpt: "Exploring real-world uses of blockchain technology.",
        content: [
          { type: "header", text: "Blockchain Applications Overview" },
          {
            type: "paragraph",
            text: "In progress...",
          },
        ],
      },
    ],
  },
  //--------------------------------------------- Artificial Intelligence
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
        excerpt:
          "A deep look into artificial intelligence, its examples, key concepts, and related fields.",
        content: [
          { type: "header", text: "Artificial Intelligence (AI)" },
          {
            type: "paragraph",
            text: "Artificial Intelligence, or AI, refers to computer systems that can perform tasks requiring human-like intelligence — such as perception, reasoning, learning, and decision-making. Its meaning varies: for some, AI represents futuristic thinking machines; for others, it’s simply advanced data processing. AI is not a single technology but a broad field of research and application inside computer science.",
          },

          { type: "header", text: "Examples of AI in Use" },
          {
            type: "paragraph",
            text: "AI can be found in many modern applications that shape our everyday lives. Three key examples are self-driving cars, recommendation systems, and image or video processing.",
          },

          { type: "subheader", text: "Self-driving Cars" },
          {
            type: "paragraph",
            text: "Self-driving cars combine several AI techniques, including route planning, computer vision, and real-time decision-making. Their goal is to improve road safety and traffic efficiency. Similar technologies are used in drones, delivery robots, and autonomous ships.",
          },

          { type: "subheader", text: "Recommendation Systems" },
          {
            type: "paragraph",
            text: "Recommendation algorithms personalize what each user sees in platforms like Netflix, Spotify, and Google. While this improves user experience, it also brings challenges such as filter bubbles, fake news, and the manipulation of public opinion.",
          },

          { type: "subheader", text: "Image and Video Processing" },
          {
            type: "paragraph",
            text: "AI-powered image and video systems can recognize faces, tag people in photos, and detect objects. They are used in security, photography, and self-driving vehicles. However, AI can also generate highly realistic fake media, known as deepfakes, raising concerns about authenticity and trust.",
          },

          { type: "header", text: "Why Defining AI Is Difficult" },
          {
            type: "paragraph",
            text: "AI is challenging to define for several reasons. First, there is no single universal definition — the field constantly evolves. Once a task becomes common, it often stops being seen as AI. Second, science fiction has influenced how people imagine AI, creating unrealistic expectations. Finally, tasks that seem easy for humans, like grasping an object, are extremely difficult for machines, while tasks that appear complex to us, like playing chess, are relatively simple for computers.",
          },

          { type: "header", text: "Core Qualities of AI" },
          {
            type: "paragraph",
            text: "Two essential characteristics define AI systems: autonomy and adaptivity. Autonomy means the ability to act independently in complex environments, while adaptivity refers to improving performance through experience and learning. Although we often describe AI using human-like words such as 'thinking' or 'understanding', these are only metaphors — AI does not truly understand as humans do.",
          },

          { type: "header", text: "Misleading Language in AI" },
          {
            type: "paragraph",
            text: "Many AI-related words, like intelligence, learning, and understanding, are what Marvin Minsky called 'suitcase words' — they carry multiple meanings and can easily mislead. AI is narrow, not general, meaning it is built for specific tasks. It’s not useful to compare different AIs by 'intelligence level'; a chess program is not smarter than a spam filter, they are simply skilled in different areas. A clearer way to describe AI is to say that a system uses AI methods rather than calling it an AI itself.",
          },

          { type: "header", text: "AI as a Field of Study" },
          {
            type: "paragraph",
            text: "AI should be seen as a scientific discipline, not a countable thing. We wouldn’t say 'one AI, two AIs' any more than we’d say 'one biology, two biologies'. Instead, AI represents a set of methods, concepts, and subfields within computer science, similar to mathematics or physics.",
          },

          { type: "header", text: "Related Fields and Subtopics" },
          {
            type: "paragraph",
            text: "To understand AI fully, it’s important to know its related fields — machine learning, deep learning, data science, and robotics — which all contribute to how AI works in practice.",
          },

          { type: "subheader", text: "Machine Learning (ML)" },
          {
            type: "paragraph",
            text: "Machine learning is a subfield of AI that enables systems to become adaptive and improve through data. It can be defined as systems that enhance their performance in a specific task as they gain experience or data.",
          },

          { type: "subheader", text: "Deep Learning" },
          {
            type: "paragraph",
            text: "Deep learning is a subfield of machine learning that uses complex, layered neural networks. The term 'deep' refers to the number and complexity of layers in the model. With modern computing power, deep learning has achieved remarkable progress in image recognition, speech processing, and natural language understanding.",
          },

          { type: "subheader", text: "Data Science" },
          {
            type: "paragraph",
            text: "Data science is an interdisciplinary field that combines machine learning, statistics, algorithms, and data management. It applies AI techniques to real-world problems in areas like business, biology, and technology. Data scientists need both technical and domain-specific knowledge, and most data science projects involve at least a small touch of AI.",
          },

          { type: "subheader", text: "Robotics" },
          {
            type: "paragraph",
            text: "Robotics focuses on building and programming machines that operate in the real world. It integrates nearly all AI areas, including computer vision, speech recognition, natural language processing, and affective computing — systems that can interpret or mimic emotions. Machine learning plays a key role in enabling robots to adapt and improve.",
          },
          {
            type: "paragraph",
            text: "A robot is a device equipped with sensors for observation, actuators for performing actions, and programmable logic to execute various tasks. Robots don’t need to look human — a dishwasher or a self-driving car can be considered a robot, but a chatbot is not a physical robot.",
          },

          { type: "header", text: "Key Takeaways" },
          {
            type: "paragraph",
            text: "Artificial intelligence is a broad and constantly evolving field that brings together many technologies under one concept. It is not a single invention or tool but rather a set of methods that allow systems to act autonomously and adapt to new information. Understanding related fields like machine learning, deep learning, data science, and robotics helps to see how AI functions in practice.",
          },
          {
            type: "paragraph",
            text: "AI should be viewed more as a capability than as an independent entity. Instead of thinking about a single AI, we should think about how AI principles are used in various systems to solve specific problems. The words often used to describe AI, like 'intelligence' or 'understanding', can be misleading since computers don’t process meaning the same way humans do. Despite that, AI’s influence on daily life is already massive — shaping transportation, media, and research — and will continue to grow as technology advances and new applications emerge.",
          },
        ],
      },

      {
        slug: "philosophy-of-ai",
        title: "The Philosophy of Artificial Intelligence",
        excerpt:
          "Exploring the philosophical questions behind intelligence, consciousness, and AI's true nature.",
        content: [
          { type: "header", text: "The Philosophy of Artificial Intelligence" },
          {
            type: "paragraph",
            text: "Artificial intelligence inevitably raises deep philosophical questions. It invites us to wonder whether intelligent behavior requires the presence of a mind, and to what extent consciousness can be created computationally. These questions connect computer science with philosophy, psychology, and even the study of human thought itself.",
          },

          { type: "header", text: "The Turing Test" },
          {
            type: "image",
            src: "/topics/ai/turing.png",
            alt: "Illustration of the Turing Test with a human, a computer",
            caption: "Alan Turing and The Turing Machine",
          },
          {
            type: "paragraph",
            text: "Alan Turing (1912–1954), an English mathematician and logician often called the father of computer science, was fascinated by the nature of intelligence and thinking — and by whether these could be simulated by machines. His most famous contribution to AI philosophy is the Turing Test, originally known as the imitation game.",
          },
          {
            type: "paragraph",
            text: "In the test, a human interviewer communicates with two participants by exchanging written messages, much like a chat conversation. One participant is a human, and the other is a computer. If the interviewer cannot reliably tell which one is which, the machine is said to have passed the test — suggesting that its behavior is indistinguishable from human intelligence. Turing’s idea can be summarized as: 'Something is intelligent if it appears intelligent.' In other words, if we cannot distinguish a machine’s behavior from that of a human, then we may call it intelligent — at least in a behavioral sense.",
          },

          { type: "header", text: "Does Acting Human Mean Being Intelligent?" },
          {
            type: "paragraph",
            text: "One of the main criticisms of the Turing Test is that it may measure humanness rather than true intelligence. Several chatbot programs have 'passed' the test by imitating human quirks — avoiding questions, making grammar mistakes, or joking nonsensically — rather than showing real understanding.",
          },
          {
            type: "paragraph",
            text: "A famous case is Eugene Goostman, a chatbot that pretended to be a 13-year-old Ukrainian boy. His responses were full of humor, distractions, and deliberate confusion, which made ten out of thirty judges believe he was human. This example shows how easily we can mistake conversational style for intelligence, especially when randomness or personality is added to machine responses.",
          },

          { type: "header", text: "The Chinese Room Argument" },
          {
            type: "image",
            src: "/topics/ai/searle.png",
            alt: "Illustration of the Chinese Room Argument",
            caption: "John Searle and The Chinese Room Argument",
          },
          {
            type: "paragraph",
            text: "Philosopher John Searle challenged the idea that intelligent behavior automatically implies real understanding. He proposed the Chinese Room thought experiment: imagine a person who doesn’t understand Chinese, locked in a room with a huge rulebook that explains exactly how to respond to Chinese sentences slipped under the door. By following the rules, the person can produce correct responses — convincing outsiders that they 'know' Chinese — even though they understand nothing of the language.",
          },
          {
            type: "paragraph",
            text: "Searle’s point is that a computer program can simulate intelligence without actually understanding anything. It manipulates symbols mechanically but has no awareness or comprehension. Therefore, even if a machine passes the Turing Test, it doesn’t necessarily mean it possesses real intelligence or consciousness — only that it behaves as if it did.",
          },

          { type: "header", text: "Is a Self-Driving Car Intelligent?" },
          {
            type: "paragraph",
            text: "The Chinese Room argument highlights the difference between performing intelligently and being intelligent. A self-driving car, for instance, can steer, detect obstacles, and make real-time decisions — but does it understand what it’s doing? The car doesn’t 'see' or 'know' in the human sense; it processes data based on rules and probabilities. This example reinforces Searle’s view that AI’s behavior can look intelligent without involving genuine thought or awareness.",
          },

          { type: "header", text: "How Important Is Philosophy in Practice?" },
          {
            type: "image",
            src: "/topics/ai/mccarthy.png",
            alt: "Illustration of John McCarthy",
            caption: "John McCarthy",
          },
          {
            type: "paragraph",
            text: "Questions about the nature of mind, consciousness, and intelligence are fascinating but difficult to answer. Philosophers, scientists, and authors have debated them for decades, often without reaching clear conclusions. However, as computer scientist John McCarthy once noted, 'The philosophy of AI has about as much influence on AI practice as the philosophy of science has on scientific practice.' In other words, while philosophical discussions are intellectually enriching, practical AI development focuses more on solving real-world problems than on defining what 'true intelligence' means.",
          },

          { type: "header", text: "General vs. Narrow AI" },
          {
            type: "paragraph",
            text: "You may have heard the terms general AI (AGI) and narrow AI. Narrow AI refers to systems that are designed to perform one specific task — like recognizing faces, recommending music, or driving a car. General AI, on the other hand, would be capable of solving any intellectual problem that a human can. All existing AI today is narrow AI; true AGI remains a concept of science fiction. Researchers largely stopped pursuing AGI directly after decades of little progress, while narrow AI continues to advance rapidly and produce practical results.",
          },

          { type: "header", text: "Strong vs. Weak AI" },
          {
            type: "paragraph",
            text: "A similar distinction exists between strong AI and weak AI. Strong AI would mean creating a machine that genuinely has a mind — one that is conscious and self-aware. Weak AI, in contrast, refers to the systems we already have: programs that can perform intelligent tasks but lack true understanding or consciousness. In this sense, all current AI — no matter how impressive — is weak AI. It can act intelligently but does not think in the human sense.",
          },

          {
            type: "paragraph",
            text: "Artificial intelligence philosophy explores profound questions about the nature of intelligence, consciousness, and the human mind. Thought experiments like the Turing Test and the Chinese Room shed light on what it means to 'think,' while also revealing the limits of machine understanding. Machines can simulate intelligence and even mimic human behavior, but genuine understanding — at least for now — remains uniquely human.",
          },
        ],
      },

      {
        slug: "solving-problems-with-ai",
        title: "Solving Problems with Artificial Intelligence",
        excerpt:
          "A historical overview of how AI emerged through logic, search, and early problem-solving research.",
        content: [
          {
            type: "header",
            text: "Solving Problems with Artificial Intelligence",
          },
          {
            type: "paragraph",
            text: "Artificial intelligence is almost as old as computer science itself. Long before the first actual computers existed, people were already fascinated by the idea of automated reasoning and machine intelligence. One of the key figures in this story was Alan Turing, whose ideas laid the foundation for both AI and modern computing.",
          },
          {
            type: "paragraph",
            text: "In addition to the famous Turing Test, one of his greatest contributions was the realization that anything which can be computed numerically can also be automated. This became the theoretical basis for how computers can perform logical operations and problem solving.",
          },
          {
            type: "header",
            text: "Turing’s Machine and the Birth of Programmable Computing",
          },
          {
            type: "paragraph",
            text: "Turing designed a simple conceptual device now known as the Turing Machine — a theoretical model capable of performing any computation that can be described mathematically. Although it wasn’t a practical device, it inspired the creation of the programmable computer, a system that could carry out different tasks depending on its programming.",
          },
          {
            type: "paragraph",
            text: "Before programmable computers, each task would have required its own separate physical machine. Thanks to Turing’s insight, one machine could perform countless tasks simply by changing the program — a revolutionary concept that became the core of programming. Some of the earliest programmable computers were even used during World War II to decrypt German ciphers, in a project where Turing himself played a crucial role.",
          },
          {
            type: "header",
            text: "John McCarthy and the Birth of Artificial Intelligence",
          },
          {
            type: "paragraph",
            text: "The English term artificial intelligence (AI) is credited to John McCarthy (1927–2011), often called the father of AI. He coined the term in 1956 when he organized the Dartmouth Conference in New Hampshire, USA — the event considered the official beginning of AI as a field of research.",
          },
          {
            type: "paragraph",
            text: "McCarthy built on Turing’s idea of automating reasoning, proposing that every part of learning or intelligence could, in principle, be described precisely enough to be simulated by a machine. This remains one of AI’s central ideas — that intelligence, even human-like intelligence, can be represented as computational steps that a machine can follow.",
          },
          {
            type: "header",
            text: "Why Search and Games Became Early AI Goals",
          },
          {
            type: "paragraph",
            text: "As computers evolved in the 1950s, AI experiments began to take shape. Some of the earliest and most influential applications were related to games. Games provided ideal testing environments — limited, rule-based worlds that could be easily modeled for computation. Classic board games like checkers, chess, and Go became essential testbeds for AI research and continue to influence modern AI systems today.",
          },
          {
            type: "paragraph",
            text: "During the 1960s, AI research progressed rapidly, especially in search and planning. Algorithms such as minimax and alpha–beta pruning were developed during this time. These methods became the foundation for game-playing AIs and remain relevant even today, although many improved variations have been created since.",
          },
          { type: "header", text: "Conclusion" },
          {
            type: "paragraph",
            text: "The history of AI shows that the field has always been driven by one idea — that reasoning, decision-making, and problem-solving can be described as computation. From Turing’s theoretical machine to McCarthy’s vision of simulating intelligence, and from wartime code-breaking to modern search algorithms, AI has evolved as both a scientific and philosophical pursuit.",
          },
        ],
      },
      {
        slug: "games-and-search",
        title: "Games and Search in Artificial Intelligence",
        excerpt:
          "How game theory, decision trees, and the minimax algorithm shaped modern AI.",
        content: [
          {
            type: "header",
            text: "Games and Search in Artificial Intelligence",
          },
          {
            type: "paragraph",
            text: "Games have played a key role in the development of artificial intelligence since its early days. To explore the logic behind intelligent decision-making, researchers often turned to two-player perfect-information games such as tic-tac-toe and chess. These games provide a controlled environment where every move, rule, and possible outcome can be clearly defined — making them ideal for testing algorithms that simulate reasoning, planning, and foresight.",
          },
          { type: "header", text: "The Example of Tic-Tac-Toe" },
          {
            type: "paragraph",
            text: "Imagine a game of tic-tac-toe between two players, Max and Minni. Each possible position of the game board can be represented as a state, and every move changes the game from one state to another. This idea leads to the key concept of the game tree — a structure where each node represents a possible game state and each branch represents a move.",
          },
          {
            type: "paragraph",
            text: "The goal of AI is to explore this tree and determine the best move — the one that maximizes the chances of winning while minimizing the opponent’s advantage.",
          },
          { type: "header", text: "Minimizing and Maximizing" },
          {
            type: "paragraph",
            text: "In AI terms, each player has a goal: Max tries to maximize the outcome value (+1 for a win), and Min tries to minimize it (–1 for a loss). By assigning numeric values to each end state, the AI can reason backwards through the tree and predict the best possible move, assuming both players play optimally.",
          },
          { type: "header", text: "From End States to Decisions" },
          {
            type: "paragraph",
            text: "When the AI evaluates the game tree, it can work backward from end states to the root. At Min’s turns, it selects the smallest value, and at Max’s turns, the largest. Repeating this process determines the value of the root node — the value of the game — showing whether the starting position leads to a win, loss, or draw under perfect play.",
          },
          { type: "header", text: "The Minimax Algorithm" },
          {
            type: "image",
            src: "/topics/ai/minmax.png",
            alt: "Illustration of the Minimax Algorithm in a game tree",
            caption: "Minimax Algorithm Example",
          },
          {
            type: "paragraph",
            text: "This reasoning forms the foundation of the minimax algorithm, one of the earliest and most influential methods in game-playing AI. It systematically explores all possible moves, alternately maximizing and minimizing values to determine optimal decisions. In theory, minimax can find the best move in any deterministic, two-player, zero-sum game — such as tic-tac-toe, connect four, chess, or Go.",
          },
          { type: "header", text: "The Problem of Large Game Trees" },
          {
            type: "paragraph",
            text: "A major limitation of minimax is the rapid growth in the number of possible game states — known as combinatorial explosion. In chess, for example, each position has an average of 35 possible moves. Just ten moves ahead would require examining more than 2.7 trillion possibilities, far beyond practical limits.",
          },
          { type: "header", text: "Heuristics and Practical AI" },
          {
            type: "paragraph",
            text: "To handle this complexity, AI systems use heuristics — simplified evaluation functions that estimate the quality of a position. In chess, heuristics may value pieces differently (queens being strongest) or reward control of the center. These techniques let AI make strong decisions without exploring every possible outcome.",
          },
          {
            type: "paragraph",
            text: "IBM’s Deep Blue, which defeated Garry Kasparov in 1997, used a combination of minimax and advanced heuristics to analyze millions of positions per second, showing how these principles can work at scale.",
          },
          { type: "header", text: "Conclusion" },
          {
            type: "paragraph",
            text: "The study of games has shaped artificial intelligence for decades. Through concepts like game trees, minimax, and heuristic evaluation, researchers have learned how to formalize reasoning and strategy. Even though real-world problems are rarely as structured as board games, these same principles — exploring possibilities, optimizing outcomes, and making informed decisions — remain at the heart of AI today.",
          },
        ],
      },

      {
        slug: "types-of-machine-learning",
        title: "Types of Machine Learning",
        excerpt: "An introduction to the main categories of machine learning.",
        content: [
          {
            type: "header",
            text: "Types of Machine Learning",
          },
          {
            type: "paragraph",
            text: "A classic example used to demonstrate machine learning is handwritten digit recognition. In this task, the goal is to teach a computer to correctly identify digits (0–9) from images — something that’s easy for humans but surprisingly challenging for machines.",
          },
          {
            type: "image",
            src: "/topics/ai/mnist.png",
            alt: "Examples of handwritten digits from the MNIST dataset",
            caption: "Handwritten Digits from the MNIST Dataset",
          },
          {
            type: "paragraph",
            text: "Researchers often use a famous dataset called MNIST, which contains thousands of handwritten numbers. Each image is labeled with the correct digit, even though many of them are messy or unclear. Instead of writing thousands of fixed rules like 'if there’s a circle, it’s probably a zero,' machine learning allows the computer to learn the patterns automatically from examples. This is much more efficient — and much more powerful.",
          },
          {
            type: "header",
            text: "The Three Main Types of Machine Learning",
          },
          {
            type: "paragraph",
            text: "Machine learning can be divided into three main categories, depending on the type of problem and the data available.",
          },
          {
            type: "header",
            text: "1. Supervised Learning — Learning with a Teacher",
          },
          {
            type: "paragraph",
            text: "In supervised learning, the algorithm is given examples that already include the correct answer. For each input (like a photo of a traffic sign), the model learns to predict the right output (like 'stop sign' or 'speed limit'). This is like learning with a teacher — you show the system examples and correct answers until it can make predictions on its own.",
          },
          {
            type: "paragraph",
            text: "Examples include recognizing digits from the MNIST dataset, detecting fake Twitter accounts (input: user behavior, output: 'fake' or 'real'), or predicting a house price based on location, size, and condition — a task known as regression because the output is a numerical value.",
          },
          {
            type: "paragraph",
            text: "Supervised learning is used in many applications such as spam filters, medical diagnosis, and stock price forecasting.",
          },
          {
            type: "header",
            text: "2. Unsupervised Learning — Finding Patterns without Guidance",
          },
          {
            type: "paragraph",
            text: "In unsupervised learning, there are no labels or correct answers. The goal is not to predict outcomes but to discover hidden patterns or structures in the data. This might mean grouping similar examples together (clustering) or visualizing relationships between data points.",
          },
          {
            type: "paragraph",
            text: "For example, a grocery store could analyze customer purchases using loyalty card data. Without knowing anything about the customers beforehand, an unsupervised algorithm might find groups such as 'budget health enthusiasts,' 'seafood lovers,' or 'pizza and cola every day' shoppers. The algorithm can identify these clusters, but humans still need to interpret and name them meaningfully.",
          },
          {
            type: "paragraph",
            text: "Another interesting form of unsupervised learning is generative learning. Generative models such as Generative Adversarial Networks (GANs) can create realistic new data — for instance, human face images that look completely real but are actually computer-generated.",
          },
          {
            type: "paragraph",
            text: "Generative learning has grown rapidly in recent years and has led to important discussions about synthetic media, creativity, and ethics. This topic will be explored later in the course in Part 6.",
          },
          {
            type: "header",
            text: "3. Reinforcement Learning — Learning by Trial and Error",
          },
          {
            type: "paragraph",
            text: "Reinforcement learning is based on the idea of learning from interaction. An agent takes actions in an environment and receives rewards or penalties based on its performance. Over time, it learns to maximize rewards — much like how humans and animals learn through experience.",
          },
          {
            type: "paragraph",
            text: "Examples include self-driving cars learning to stay on the road safely, robots learning to walk, or game-playing AIs like AlphaGo that improve by playing millions of rounds against themselves.",
          },
          {
            type: "paragraph",
            text: "This type of learning is especially useful in complex environments where feedback is delayed or only received at the end of a task — such as completing a race, winning a game, or avoiding collisions.",
          },
          {
            type: "header",
            text: "Example: Nearest Neighbor Methods and Recommendations",
          },
          {
            type: "image",
            src: "/topics/ai/nnm.png",
            alt: "Illustration of Nearest Neighbor Methods",
            caption: "Nearest Neighbor Methods Example",
            size: "large",
          },
          {
            type: "paragraph",
            text: "Some models make predictions by comparing a new example to known cases and borrowing their labels. This is the nearest neighbor idea. You can picture examples on a two-dimensional plot, where each point has two features, such as a patient’s age and blood sugar level. A new point is assigned to the class of its closest neighbor, which might be shown as the green class in a diagram.",
          },
          {
            type: "paragraph",
            text: "Screens are two-dimensional, but real data can include many features. In practice, the nearest neighbor concept generalizes to any number of dimensions, even fifty or more. We cannot draw a fifty-dimensional plot, so we define similarity numerically.",
          },
          {
            type: "paragraph",
            text: "What does “nearest” mean? In simple geometric settings, distance is often measured with Euclidean distance, the straight-line length between two points. For text, code, or other abstract data, geometric distance may not be meaningful, so other similarity measures are used. The choice of distance is always task-dependent.",
          },
          {
            type: "paragraph",
            text: "In MNIST digit recognition, one simple similarity measure compares pixel values at the same positions, then sums the agreements. This works because MNIST images are centered. It is sensitive to small shifts or rotations, however. For example, sliding a “1” a few pixels sideways may look identical to us, yet pixel-by-pixel comparison changes significantly.",
          },
          {
            type: "paragraph",
            text: "The same neighbor logic appears in recommendation systems. Collaborative filtering predicts what a user might like based on the behavior of other, similar users. If people with listening habits like yours enjoy a newly added 1980s disco track, the system will likely recommend it to you. If most similar users stop after a few seconds, the system will not push it aggressively. These methods can improve relevance, but they can also create filter bubbles if not designed carefully.",
          },
          {
            type: "header",
            text: "Common Pitfalls — Overfitting",
          },
          {
            type: "image",
            src: "/topics/ai/overfit.png",
            alt: "Illustration of Overfitting in Machine Learning",
            caption: "Underfitting, Overfitting and Right Fit example",
          },
          {
            type: "paragraph",
            text: "When training a model, one of the biggest mistakes is overfitting — when the model becomes too perfect on training data but fails on new data. It’s like a student memorizing all the answers instead of truly understanding the topic.",
          },
          {
            type: "paragraph",
            text: "Flexible models such as neural networks can overfit easily if the dataset is small. Simpler models like linear regression are less flexible but often more generalizable. The key is balance — finding a model that’s not too rigid and not too flexible.",
          },
          {
            type: "paragraph",
            text: "Avoiding overfitting and selecting the right level of model complexity is one of the most essential skills for any data scientist.",
          },

          {
            type: "paragraph",
            text: "Machine learning is about teaching computers to learn from data rather than being programmed with fixed rules. Supervised learning learns from labeled examples, unsupervised learning discovers hidden structures, and reinforcement learning learns through feedback and experience. In all cases, the goal is the same — to build models that generalize well, not just memorize patterns.",
          },
        ],
      },
    ],
  },
];

export default topics;
