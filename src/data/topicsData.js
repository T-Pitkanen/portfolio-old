const topics = [
  {
    slug: "agile-development",
    title: "Agile Development",
    excerpt: "Principles and frameworks for iterative software delivery.",
    content: [
      "Agile is an iterative approach to software development that values collaboration and responsiveness to change.",
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
            items: [
              "To Do",
              "In Progress",
              "Done",
            ],
          },
          {
            type: "paragraph",
            text: "Each task or project is represented by a card that moves across the columns as work progresses. You can use physical boards (sticky notes on a wall) or digital tools like Trello, Jira, Notion, or Asana."
          },
          {
            type: "image",
            src: "/topics/agile/kanban/kanban1.png",
            alt: "a kanban board example",
            caption: "Kanban board example",
            size: "medium"
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
            size: "large"
          },{
             type: "image",
            src: "/topics/agile/kanban/own.png",
            alt: "a kanban board example project",
            caption: "Own small presentation of a kanban board",
            size: "large"

          }
        ],
      },
      {
        slug: "scrum",
        title: "Scrum",
        excerpt: "",
        content: [
          { type: "header", text: "Scrum basics" },
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
        slug: "user-stories",
        title: "User Stories",
        excerpt: "Capturing requirements from the user's perspective.",
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
      {
        slug: "use-cases",
        title: "Use Cases",
        excerpt: "Defining how users will interact with the system.",
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
        slug: "diagrams-and-models",
        title: "Diagrams and Models",
        excerpt:
          "Visual representations to understand and communicate system design.",
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
