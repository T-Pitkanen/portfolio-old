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
      }
    ]
  },
  {
    slug: "react-hooks",
    title: "React Hooks",
    excerpt: "Understanding useState, useEffect and other core hooks.",
    content: [
      "React Hooks let you use state and other React features without writing a class."
    ],
    subtopics: [
      {
        slug: "use-state",
        title: "useState",
        excerpt: "Local component state in functional components.",
        content: [
          { type: "header", text: "useState" },
          {
            type: "paragraph",
            text: "useState returns a state value and a setter function."
          },
          {
            type: "image",
            src: "/topics/react/useState-example.png",
            alt: "useState example",
            caption: "Basic useState usage"
          }
        ]
      },
      {
        slug: "use-effect",
        title: "useEffect",
        excerpt: "Run side effects in function components.",
        content: [
          { type: "header", text: "useEffect" },
          {
            type: "paragraph",
            text: "useEffect handles side effects such as data fetching and subscriptions."
          }
        ]
      }
    ]
  },
  {
    slug: "databases",
    title: "Databases 101",
    excerpt: "Basics of relational vs NoSQL databases.",
    content: [
      "Relational databases (SQL) use tables, fixed schemas and ACID transactions."
    ],
    subtopics: [
      {
        slug: "relational-databases",
        title: "Relational Databases",
        excerpt: "SQL databases, normalization and ACID.",
        // richer block content for the subtopic
        content: [
          { type: "header", text: "Relational Databases Overview" },
          {
            type: "paragraph",
            text:
              "Relational DBs use structured schemas, tables and relationships expressed via foreign keys."
          },
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
      },
      {
        slug: "nosql-databases",
        title: "NoSQL Databases",
        excerpt: "Schema-flexible stores like MongoDB.",
        content: [
          { type: "header", text: "NoSQL Overview" },
          {
            type: "paragraph",
            text:
              "NoSQL databases are schema-flexible and often better for hierarchical or rapidly changing data."
          },
          {
            type: "image",
            src: "/topics/databases/mongodb-schema.png",
            alt: "MongoDB document example",
            caption: "Document example in MongoDB"
          },
          {
            type: "section",
            title: "Types of NoSQL stores",
            children: [
              { type: "paragraph", text: "Document stores (e.g., MongoDB)" },
              { type: "paragraph", text: "Key-value stores, wide-column stores, graph databases" }
            ]
          }
        ]
      }
    ]
  }
];

export default topics;