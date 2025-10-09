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
        // content as blocks: supports header, paragraph, image, section, etc.
        content: [
          { type: "header", text: "What is Kanban?" },
          {
            type: "paragraph",
            text: "Kanban uses a board with columns to visualise work and limits work in progress to improve flow.",
          },
          {
            type: "image",
            src: "/topics/agile/kanban.png",
            alt: "Kanban board example",
            caption: "Simple Kanban board with To Do / Doing / Done",
          },
          {
            type: "section",
            title: "Key Practices",
            children: [
              { type: "paragraph", text: "Visualise workflow." },
              { type: "paragraph", text: "Limit WIP (work in progress)." },
              { type: "paragraph", text: "Measure and improve flow." },
            ],
          },
        ],
      },
      {
        slug: "scrum",
        title: "Scrum",
        excerpt:
          "Timeboxed sprints, roles, ceremonies and incremental delivery.",
        content: [
          { type: "header", text: "Scrum basics" },
          {
            type: "paragraph",
            text: "Scrum organises work in sprints with defined roles (Product Owner, Scrum Master, Team) and regular ceremonies.",
          },
          {
            type: "image",
            src: "/topics/agile/sprint-planning.jpg",
            alt: "Sprint planning",
            caption: "Sprint planning diagram",
          },
        ],
      },
      {
        slug: "user-stories",
        title: "User Stories",
        excerpt: "Capturing requirements from the user's perspective.",
        content: [
          { type: "header", text: "User Stories Overview" },
          {
            type: "paragraph",
            text: "User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability.",
          },
          {
            type: "image",
            src: "/topics/agile/user-stories.png",
            alt: "User Stories",
            caption: "Example of user stories",
          },
        ],
      },
      {
        slug: "use-cases",
        title: "Use Cases",
        excerpt: "Defining how users will interact with the system.",
        content: [
          { type: "header", text: "Use Cases Overview" },
          {
            type: "paragraph",
            text: "Use cases describe the interactions between users and the system to achieve specific goals.",
          },
          {
            type: "image",
            src: "/topics/agile/use-cases.png",
            alt: "Use Cases",
            caption: "Example of use cases",
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
            text: "Agile and Waterfall are two different approaches to software development.",
          },
          {
            type: "image",
            src: "/topics/agile/agile-vs-waterfall.png",
            alt: "Agile vs Waterfall",
            caption: "Comparison of Agile and Waterfall methodologies",
          },
        ],
      },
      {
        slug: "diagrams-and-models",
        title: "Diagrams and Models",
        excerpt:
          "Visual representations to understand and communicate system design.",
        content: [
          { type: "header", text: "Diagrams and Models Overview" },
          {
            type: "paragraph",
            text: "Diagrams and models help visualize and communicate system architecture and design.",
          },
          {
            type: "image",
            src: "/topics/agile/diagrams-and-models.png",
            alt: "Diagrams and Models",
            caption: "Examples of diagrams and models in software design",
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
            text: "Continuous Integration and Deployment Overview",
          },
          {
            type: "paragraph",
            text: "CI/CD automates the process of integrating code changes and deploying applications.",
          },
          {
            type: "image",
            src: "/topics/agile/ci-cd.png",
            alt: "CI/CD Pipeline",
            caption: "Example of a CI/CD pipeline",
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
            src: "/topics/blockchain/how-it-works.png",
            alt: "Blockchain structure diagram",
            caption:
              "Illustration of how blocks are linked together in a chain",
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
          {
            type: "image",
            src: "/topics/blockchain/applications.png",
            alt: "Blockchain applications across industries",
            caption:
              "How blockchain is applied in finance, logistics, and digital art",
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
            text: "A peer-to-peer (P2P) network is a computer network where each connected device, or 'peer', can both provide and request services directly from other peers. Unlike traditional client–server models, there’s no central authority managing the network. Instead, every peer communicates independently, creating a decentralized and self-sustaining system.",
          },
          {
            type: "image",
            src: "/topics/p2p/peer-to-peer.png",
            alt: "Peer-to-peer network diagram",
            caption:
              "Devices connected directly to each other in a peer-to-peer structure",
          },
          { type: "header", text: "How P2P Networks Work" },
          {
            type: "paragraph",
            text: "In a P2P network, all devices share resources such as files, bandwidth, or processing power. When a file is requested, it doesn’t come from one single source. It’s downloaded in small pieces from several peers at once. This makes the network faster, more reliable, and less dependent on any one machine staying online.",
          },
          {
            type: "paragraph",
            text: "Because of its decentralized design, a peer-to-peer network doesn’t have a single point of failure. Even if some devices disconnect, others can continue to share and transfer data. This principle of shared responsibility is what makes P2P systems so resilient.",
          },
          {
            type: "image",
            src: "/topics/p2p/how-it-works.png",
            alt: "Illustration of data sharing between peers",
            caption: "Peers sharing data directly without a central server",
          },
          { type: "header", text: "Key Features" },
          {
            type: "paragraph",
            text: "One of the main strengths of peer-to-peer networking is decentralization. There’s no main server in charge — every participant is equally important. This structure helps prevent bottlenecks, reduces costs, and increases independence from centralized providers.",
          },
          {
            type: "paragraph",
            text: "P2P networks are also known for their scalability. As more users join, the network actually becomes stronger and more capable, because each new peer adds resources and connection points. This is very different from centralized systems, which can slow down as more people connect.",
          },
          {
            type: "paragraph",
            text: "Another defining feature is fault tolerance. Data is distributed across multiple devices, so even if one or several peers go offline, the system continues to function normally. This makes P2P networks reliable for sharing and storing data in unstable or large-scale environments.",
          },
          { type: "header", text: "Common Uses" },
          {
            type: "paragraph",
            text: "Peer-to-peer technology powers many services we use today. File sharing platforms like BitTorrent rely on it to distribute large files efficiently. Communication tools such as Skype originally used P2P connections to handle voice and video calls. The same idea is also used in blockchain networks, where peers verify transactions without any central authority.",
          },
          {
            type: "image",
            src: "/topics/p2p/applications.png",
            alt: "Examples of peer-to-peer applications",
            caption:
              "Modern uses of P2P networking, from file sharing to blockchain systems",
          },
          { type: "header", text: "Advantages and Challenges" },
          {
            type: "paragraph",
            text: "The biggest advantages of peer-to-peer networks are their efficiency, cost-effectiveness, and independence from centralized control. However, they also bring challenges such as security concerns, inconsistent data availability, and difficulties in monitoring shared content. Despite these issues, P2P systems continue to evolve and are now the foundation of many decentralized technologies.",
          },
          { type: "header", text: "Conclusion" },
          {
            type: "paragraph",
            text: "Peer-to-peer networks have completely changed how data and resources are shared online. By letting users connect directly, P2P systems promote openness, cooperation, and reliability. This same principle of decentralization has also inspired newer innovations like blockchain and Web3, showing how powerful the idea of peer-to-peer communication truly is.",
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
            text: "Two of the most important concepts behind blockchain technology are hashing and consensus. Together, they make sure that every transaction in a blockchain is secure, verified, and agreed upon by everyone in the network. Without these two mechanisms, the idea of a decentralized and trustworthy digital ledger wouldn’t be possible.",
          },
          {
            type: "image",
            src: "/topics/blockchain/hashing-consensus.png",
            alt: "Hashing and consensus overview",
            caption:
              "Hashing and consensus work together to keep blockchain data secure and consistent",
          },
          { type: "header", text: "Understanding Hashing" },
          {
            type: "paragraph",
            text: "Hashing is a process that takes an input, like a transaction or document, and turns it into a fixed-length code called a hash. This hash looks completely different from the original data but is always unique to it. Even a tiny change in the input — like changing a single letter — will produce a totally different hash. This makes hashing extremely useful for verifying data integrity.",
          },
          {
            type: "paragraph",
            text: "In a blockchain, each block contains the hash of the previous one, forming a secure chain. Because of this link, if someone tried to change any information inside a block, it would immediately alter that block’s hash and break the entire chain. This is why it’s nearly impossible to tamper with data stored on a blockchain.",
          },
          {
            type: "image",
            src: "/topics/blockchain/hashing-example.png",
            alt: "Example of hash linking between blocks",
            caption:
              "Each block references the hash of the previous one, ensuring immutability",
          },
          { type: "header", text: "What Is Consensus?" },
          {
            type: "paragraph",
            text: "Consensus is how all participants in a blockchain network agree on which transactions are valid. Since there’s no central authority, the network relies on consensus mechanisms — rules that help every node reach a shared decision about what should be added to the blockchain.",
          },
          {
            type: "paragraph",
            text: "The two most common methods are Proof of Work (PoW) and Proof of Stake (PoS). Proof of Work, used by Bitcoin, requires computers (called miners) to solve complex puzzles to confirm transactions. Proof of Stake, used by newer blockchains like Ethereum 2.0, selects validators based on how much cryptocurrency they commit as collateral. Both systems ensure that all participants play by the same rules and that only verified data gets added to the chain.",
          },
          {
            type: "image",
            src: "/topics/blockchain/consensus.png",
            alt: "Consensus in blockchain network",
            caption:
              "Nodes in the network validate transactions and agree on the correct version of the blockchain",
          },
          { type: "header", text: "How Hashing and Consensus Work Together" },
          {
            type: "paragraph",
            text: "Hashing and consensus complement each other to create trust in a system that has no central control. Hashing ensures that the data itself cannot be changed without detection, while consensus ensures that everyone in the network agrees on what data is correct. Even if someone tried to alter a transaction, the changed hash would be immediately rejected by the consensus process.",
          },
          {
            type: "paragraph",
            text: "In simple terms, hashing keeps the blockchain secure, and consensus keeps it fair. Together, they form the foundation of how decentralized systems maintain honesty, transparency, and reliability across thousands of independent participants.",
          },
          { type: "header", text: "Real-World Example" },
          {
            type: "paragraph",
            text: "Imagine sending cryptocurrency to a friend. Your transaction is first hashed — turned into a digital fingerprint — and then shared across the blockchain network. The network’s nodes use consensus rules to check that your transaction is valid and that you actually have enough funds. Once the majority agrees, your transaction is added to a new block and permanently stored. The hash ensures it can’t be changed later, and the consensus guarantees everyone accepts it as true.",
          },
          {
            type: "image",
            src: "/topics/blockchain/hashing-and-consensus-example.png",
            alt: "Hashing and consensus example in blockchain transaction",
            caption:
              "Hashing secures the transaction, while consensus ensures network-wide agreement",
          },
          { type: "header", text: "Conclusion" },
          {
            type: "paragraph",
            text: "Hashing and consensus are the two main forces that keep blockchains secure and decentralized. Hashing protects the integrity of data, while consensus guarantees that all network participants agree on what’s valid. Together, they make blockchain a trustworthy and tamper-proof system — one that’s reshaping how we exchange information and value online.",
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
            text: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code.",
          },
          {
            type: "image",
            src: "/topics/blockchain/smart-contracts.png",
            alt: "Smart contracts",
            caption: "Example of a smart contract",
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
            text: "Cryptocurrencies are digital or virtual currencies that use cryptography for security.",
          },
          {
            type: "image",
            src: "/topics/blockchain/cryptocurrencies.png",
            alt: "Cryptocurrencies",
            caption: "Example of cryptocurrencies",
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
            text: "Public and private keys are essential for cryptocurrency transactions.",
          },
          {
            type: "image",
            src: "/topics/blockchain/keys-and-wallets.png",
            alt: "Keys and Wallets",
            caption: "Example of keys and wallets",
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
            text: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a pair of keys.",
          },
          {
            type: "image",
            src: "/topics/blockchain/symmetric-vs-asymmetric.png",
            alt: "Symmetric vs Asymmetric Encryption",
            caption: "Example of symmetric and asymmetric encryption",
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
            text: "Digital signatures provide proof of authenticity, while certificates establish the identity of entities.",
          },
          {
            type: "image",
            src: "/topics/blockchain/signatures-and-certificates.png",
            alt: "Signatures and Certificates",
            caption: "Example of digital signatures and certificates",
          },
        ],
      },
      {
        slug: "pos_and_pow",
        title: "Proof of Stake vs Proof of Work",
        excerpt: "Consensus mechanisms used in blockchain networks.",
        content: [
          { type: "header", text: "Proof of Stake vs Proof of Work Overview" },
          {
            type: "paragraph",
            text: "Proof of Work requires miners to solve complex puzzles, while Proof of Stake selects validators based on their stake.",
          },
          {
            type: "image",
            src: "/topics/blockchain/proof-of-stake-vs-proof-of-work.png",
            alt: "Proof of Stake vs Proof of Work",
            caption: "Example of Proof of Stake and Proof of Work",
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
            text: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines.",
          },
          {
            type: "image",
            src: "/topics/ai/what-is-ai.png",
            alt: "What is AI?",
            caption: "Overview of Artificial Intelligence",
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
            text: "Machine Learning (ML) is a subset of AI that enables systems to learn from data and improve over time.",
          },
          {
            type: "image",
            src: "/topics/ai/machine-learning.png",
            alt: "What is Machine Learning?",
            caption: "Overview of Machine Learning",
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
            text: "Neuronal Networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns.",
          },
          {
            type: "image",
            src: "/topics/ai/neuronal-networks.png",
            alt: "What are Neuronal Networks?",
            caption: "Overview of Neuronal Networks",
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
            text: "They support ACID transactions which guarantee consistency across operations.",
          },
          {
            type: "image",
            src: "/topics/databases/er-diagram.png",
            alt: "ER diagram",
            caption: "Entity-Relationship diagram example",
          },
          {
            type: "section",
            title: "Common Concepts",
            children: [
              { type: "header", text: "Normalization" },
              {
                type: "paragraph",
                text: "Normalization organises tables to reduce redundancy and improve integrity.",
              },
              { type: "header", text: "Transactions" },
              {
                type: "paragraph",
                text: "Transactions group multiple operations so they either all succeed or all fail.",
              },
            ],
          },
        ],
      },
      {
        slug: "natural-language-processing",
        title: "Natural Language Processing",
        excerpt: "AI's ability to understand and generate human language.",
        content: [
          { type: "header", text: "What is Natural Language Processing?" },
          {
            type: "paragraph",
            text: "Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and humans through natural language.",
          },
          {
            type: "image",
            src: "/topics/ai/natural-language-processing.png",
            alt: "What is Natural Language Processing?",
            caption: "Overview of Natural Language Processing",
          },
        ],
      },
    ],
  },
];

export default topics;
