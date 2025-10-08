const topics = [
  {
    slug: "agile-development",
    title: "Agile Development",
    excerpt: "Principles and frameworks for iterative software delivery.",
    content: [
      "Agile is an iterative approach to software development that values collaboration and responsiveness to change."
    ],
    subtopics: [
      {
        slug: "kanban",
        title: "Kanban",
        excerpt: "Visual workflow management using a board and WIP limits.",
        // content as blocks: supports header, paragraph, image, section, etc.
        content: [
          { type: "header", text: "What is Kanban?" },
          {
            type: "paragraph",
            text:
              "Kanban uses a board with columns to visualise work and limits work in progress to improve flow."
          },
          {
            type: "image",
            src: "/topics/agile/kanban.png",
            alt: "Kanban board example",
            caption: "Simple Kanban board with To Do / Doing / Done"
          },
          {
            type: "section",
            title: "Key Practices",
            children: [
              { type: "paragraph", text: "Visualise workflow." },
              { type: "paragraph", text: "Limit WIP (work in progress)." },
              { type: "paragraph", text: "Measure and improve flow." }
            ]
          }
        ]
      },
      {
        slug: "scrum",
        title: "Scrum",
        excerpt: "Timeboxed sprints, roles, ceremonies and incremental delivery.",
        content: [
          { type: "header", text: "Scrum basics" },
          {
            type: "paragraph",
            text:
              "Scrum organises work in sprints with defined roles (Product Owner, Scrum Master, Team) and regular ceremonies."
          },
          {
            type: "image",
            src: "/topics/agile/sprint-planning.jpg",
            alt: "Sprint planning",
            caption: "Sprint planning diagram"
          }
        ]
      }, {
        slug: "user-stories",
        title: "User Stories",
        excerpt: "Capturing requirements from the user's perspective.",
        content: [
          { type: "header", text: "User Stories Overview" },
          {
            type: "paragraph",
            text: "User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability."
          },
          {
            type: "image",
            src: "/topics/agile/user-stories.png",
            alt: "User Stories",
            caption: "Example of user stories"
          }
        ]
      }, {
        slug: "use-cases",
        title: "Use Cases",
        excerpt: "Defining how users will interact with the system.",
        content: [
          { type: "header", text: "Use Cases Overview" },
          {
            type: "paragraph",
            text: "Use cases describe the interactions between users and the system to achieve specific goals."
          },
          {
            type: "image",
            src: "/topics/agile/use-cases.png",
            alt: "Use Cases",
            caption: "Example of use cases"
          }
        ]
      },{
        slug: "agile-vs-waterfall",
        title: "Agile vs Waterfall",
        excerpt: "Comparing iterative Agile with sequential Waterfall development.",
        content: [
          { type: "header", text: "Agile vs Waterfall Overview" },
          {
            type: "paragraph",
            text: "Agile and Waterfall are two different approaches to software development."
          },
          {
            type: "image",
            src: "/topics/agile/agile-vs-waterfall.png",
            alt: "Agile vs Waterfall",
            caption: "Comparison of Agile and Waterfall methodologies"
          }
        ]
      },{
        slug: "diagrams-and-models",
        title: "Diagrams and Models",
        excerpt: "Visual representations to understand and communicate system design.",
        content: [
          { type: "header", text: "Diagrams and Models Overview" },
          {
            type: "paragraph",
            text: "Diagrams and models help visualize and communicate system architecture and design."
          },
          {
            type: "image",
            src: "/topics/agile/diagrams-and-models.png",
            alt: "Diagrams and Models",
            caption: "Examples of diagrams and models in software design"
          }
        ]
      },
      {
        slug: "continuous-integration-and-deployment",
        title: "Continuous Integration and Deployment",
        excerpt: "Automating code integration, testing and deployment.",
        content: [
          { type: "header", text: "Continuous Integration and Deployment Overview" },
          {
            type: "paragraph",
            text: "CI/CD automates the process of integrating code changes and deploying applications."
          },
          {
            type: "image",
            src: "/topics/agile/ci-cd.png",
            alt: "CI/CD Pipeline",
            caption: "Example of a CI/CD pipeline"
          }
        ]
      }
    ]
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    excerpt: "Introduction to blockchain technology and its applications.",
    content: [
      "Blockchain is a distributed ledger technology that enables secure and transparent record-keeping."
    ],
    subtopics: [
      {
        slug: "blockchain-overview",
        title: "What is Blockchain?",
        excerpt: "An overview of blockchain technology.",
        content: [
          { type: "header", text: "Blockchain Basics" },
          {
            type: "paragraph",
            text: "Blockchain is a distributed ledger technology that enables secure and transparent record-keeping."
          },
          {
            type: "image",
            src: "/topics/blockchain/blockchain-overview.png",
            alt: "Blockchain overview",
            caption: "Basic blockchain usage"
          }
        ]
      }, {
        slug: "peer-to-peer-networks",
        title: "Peer-to-Peer Networks",
        excerpt: "Decentralized networks where nodes share resources directly.",
        content: [
          { type: "header", text: "Peer-to-Peer Networks Overview" },
          {
            type: "paragraph",
            text: "Peer-to-peer networks allow nodes to communicate and share resources directly without a central server."
          },
          {
            type: "image",
            src: "/topics/blockchain/peer-to-peer-networks.png",
            alt: "Peer-to-Peer Networks",
            caption: "Example of a peer-to-peer network"
          }
        ]
      },
      {
        slug: "hashing-and-consensus",
        title: "Hashing and Consensus",
        excerpt: "Techniques for ensuring data integrity and agreement in a distributed system.",
        content: [
          { type: "header", text: "Hashing and Consensus Overview" },
          {
            type: "paragraph",
            text: "Hashing is used to ensure data integrity, while consensus algorithms enable agreement among distributed nodes."
          },
          {
            type: "image",
            src: "/topics/blockchain/hashing-and-consensus.png",
            alt: "Hashing and Consensus",
            caption: "Example of hashing and consensus mechanisms"
          }
        ]
      },
      {
        slug: "smart-contracts",
        title: "Smart Contracts",
        excerpt: "Self-executing contracts with the terms directly written into code.",
        content: [
          { type: "header", text: "Smart Contracts Overview" },
          {
            type: "paragraph",
            text: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code."
          },
          {
            type: "image",
            src: "/topics/blockchain/smart-contracts.png",
            alt: "Smart contracts",
            caption: "Example of a smart contract"
          }
        ]
      },{
        slug: "cryptocurrencies",
        title: "Cryptocurrencies",
        excerpt: "Digital or virtual currencies that use cryptography for security.",
        content: [
          { type: "header", text: "Cryptocurrencies Overview" },
          {
            type: "paragraph",
            text: "Cryptocurrencies are digital or virtual currencies that use cryptography for security."
          },
          {
            type: "image",
            src: "/topics/blockchain/cryptocurrencies.png",
            alt: "Cryptocurrencies",
            caption: "Example of cryptocurrencies"
          }
        ]
      }, {
        slug: "keys-and-wallets",
        title: "Keys and Wallets",
        excerpt: "Understanding public/private keys and cryptocurrency wallets.",
        content: [
          { type: "header", text: "Keys and Wallets Overview" },
          {
            type: "paragraph",
            text: "Public and private keys are essential for cryptocurrency transactions."
          },
          {
            type: "image",
            src: "/topics/blockchain/keys-and-wallets.png",
            alt: "Keys and Wallets",
            caption: "Example of keys and wallets"
          }
        ]
      },{
        slug:"symmetric-vs-asymmetric-encryption",
        title: "Symmetric vs Asymmetric Encryption",
        excerpt: "Differences between symmetric and asymmetric encryption methods.",
        content: [
          { type: "header", text: "Symmetric vs Asymmetric Encryption Overview" },
          {
            type: "paragraph",
            text: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a pair of keys."
          },
          {
            type: "image",
            src: "/topics/blockchain/symmetric-vs-asymmetric.png",
            alt: "Symmetric vs Asymmetric Encryption",
            caption: "Example of symmetric and asymmetric encryption"
          }
        ]
      }, {
        slug:"signatures-and-certificates",
        title: "Signatures and Certificates",
        excerpt: "Digital signatures and certificates for authentication and integrity.",
        content: [
          { type: "header", text: "Signatures and Certificates Overview" },
          {
            type: "paragraph",
            text: "Digital signatures provide proof of authenticity, while certificates establish the identity of entities."
          },
          {
            type: "image",
            src: "/topics/blockchain/signatures-and-certificates.png",
            alt: "Signatures and Certificates",
            caption: "Example of digital signatures and certificates"
          }
        ]
      }, {
        slug: "pos_and_pow",
        title: "Proof of Stake vs Proof of Work",
        excerpt: "Consensus mechanisms used in blockchain networks.",
        content: [
          { type: "header", text: "Proof of Stake vs Proof of Work Overview" },
          {
            type: "paragraph",
            text: "Proof of Work requires miners to solve complex puzzles, while Proof of Stake selects validators based on their stake."
          },
          {
            type: "image",
            src: "/topics/blockchain/proof-of-stake-vs-proof-of-work.png",
            alt: "Proof of Stake vs Proof of Work",
            caption: "Example of Proof of Stake and Proof of Work"
          }
        ]
      }
    ]
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    excerpt: "Overview of AI concepts and applications.",
    content: [
      "AI encompasses machine learning, natural language processing, and robotics."
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
            text: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines."
          },
          {
            type: "image",
            src: "/topics/ai/what-is-ai.png",
            alt: "What is AI?",
            caption: "Overview of Artificial Intelligence"
          }
        ]
      }, {
        slug: "machine-learning",
        title: "Machine Learning",
        excerpt: "Subfield of AI focused on data-driven learning.",
        content: [
          { type: "header", text: "What is Machine Learning?" },
          {
            type: "paragraph",
            text: "Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve over time."
          },
          {
            type: "image",
            src: "/topics/ai/machine-learning.png",
            alt: "What is Machine Learning?",
            caption: "Overview of Machine Learning"
          }
        ]
      }, {
        slug: "neuronal-networks",
        title: "Neuronal Networks",
        excerpt: "AI systems inspired by the human brain.",
        content: [
          { type: "header", text: "What are Neuronal Networks?" },
          {
            type: "paragraph",
            text: "Neuronal Networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns."
          },
          {
            type: "image",
            src: "/topics/ai/neuronal-networks.png",
            alt: "What are Neuronal Networks?",
            caption: "Overview of Neuronal Networks"
          }
        ]
      }, {
        slug: "robotics",
        title: "Robotics",
        excerpt: "AI in the design and operation of robots.",
        content: [
          { type: "header", text: "What is Robotics?" },
          {
            type: "paragraph",
            text:
              "They support ACID transactions which guarantee consistency across operations."
          },
          {
            type: "image",
            src: "/topics/databases/er-diagram.png",
            alt: "ER diagram",
            caption: "Entity-Relationship diagram example"
          },
          {
            type: "section",
            title: "Common Concepts",
            children: [
              { type: "header", text: "Normalization" },
              {
                type: "paragraph",
                text:
                  "Normalization organises tables to reduce redundancy and improve integrity."
              },
              { type: "header", text: "Transactions" },
              {
                type: "paragraph",
                text:
                  "Transactions group multiple operations so they either all succeed or all fail."
              }
            ]
          }
        ]
      }, {
        slug: "natural-language-processing",
        title: "Natural Language Processing",
        excerpt: "AI's ability to understand and generate human language.",
        content: [
          { type: "header", text: "What is Natural Language Processing?" },
          {
            type: "paragraph",
            text: "Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and humans through natural language."
          },
          {
            type: "image",
            src: "/topics/ai/natural-language-processing.png",
            alt: "What is Natural Language Processing?",
            caption: "Overview of Natural Language Processing"
          }
        ]
      }
    ]
  }
];

export default topics;