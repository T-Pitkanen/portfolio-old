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
        content: [
          "Kanban uses a board with columns to visualise work and limits work in progress to improve flow."
        ]
      },
      {
        slug: "scrum",
        title: "Scrum",
        excerpt: "Timeboxed sprints, roles, ceremonies and incremental delivery.",
        content: [
          "Scrum organises work in sprints with defined roles (Product Owner, Scrum Master, Team) and regular ceremonies."
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
        content: ["useState returns a state value and a setter function."]
      },
      {
        slug: "use-effect",
        title: "useEffect",
        excerpt: "Run side effects in function components.",
        content: ["useEffect handles side effects such as data fetching and subscriptions."]
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
        content: ["Relational DBs use structured schemas and joins."]
      },
      {
        slug: "nosql-databases",
        title: "NoSQL Databases",
        excerpt: "Schema-flexible stores like MongoDB.",
        content: ["NoSQL is useful for hierarchical or rapidly changing schemas."]
      }
    ]
  }
];

export default topics;