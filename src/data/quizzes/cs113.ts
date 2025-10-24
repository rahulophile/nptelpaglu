// src/data/quizzes/cs113.ts

import type { Quiz } from "../../lib/types.js";

export const cs113Quiz: Quiz = {
  subject: "CS113: Software Testing",
  weeks: {
    1: [
      // ... Week 1 ka data yahan hai ...
      {
        id: 1,
        text: "Choose the right option to fill in the blank: Suppose a method M1...",
        options: [
          { id: "a", text: "Functional testing." },
          { id: "b", text: "Unit testing." },
          { id: "c", text: "Integration testing." },
          { id: "d", text: "System testing." },
        ],
        correctAnswerId: "c",
      },
      {
        id: 2,
        text: "State true or false: A coverage criterion C1 said to subsume another...",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 3,
        text: "State true or false: Testing can be used to find all the errors in code.",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 4,
        text: "Which of the following are practised in level 3 thinking during testing?",
        options: [
          {
            id: "a",
            text: "Testing is a mental discipline, everyone in an organization strives to test thoroughly.",
          },
          {
            id: "b",
            text: "Testing is done mainly by developers, to debug their code.",
          },
          {
            id: "c",
            text: "Testing is done to identify failures and reduce risks.",
          },
          { id: "d", text: "Testing is done to show absence of errors." },
        ],
        correctAnswerId: "c",
      },
      {
        id: 5,
        text: "Which of the following best defines usability testing?",
        options: [
          {
            id: "a",
            text: "Testing done to ensure that the software looks nice.",
          },
          {
            id: "b",
            text: "Testing done to ensure that the software is usable by all the users.",
          },
          {
            id: "c",
            text: "Testing done to understand how users can use a software.",
          },
          {
            id: "d",
            text: "Testing done to ensure that the user interface of the software is as specified in the requirements.",
          },
        ],
        correctAnswerId: "d",
      },
      {
        id: 6,
        text: "Which of the following is a list of white-box testing techniques?",
        options: [
          { id: "a", text: "Unit testing, performance testing." },
          { id: "b", text: "Integration testing, stress testing." },
          { id: "c", text: "Unit testing, integration testing." },
          { id: "d", text: "Usability testing, performance testing." },
        ],
        correctAnswerId: "c",
      },
      {
        id: 7,
        text: "As per the lectures, which of the following sentences best defines a test case?",
        options: [
          {
            id: "a",
            text: "A test case contains only inputs to the software artifact.",
          },
          {
            id: "b",
            text: "A test case contains inputs to the software artifact along with the expected outputs.",
          },
          {
            id: "c",
            text: "A test case contains inputs to the software artifact and a decision on pass or fail.",
          },
          {
            id: "d",
            text: "A test case contains inputs to the software artifact, which is run and the actual output is also recorded as a part of the test case.",
          },
        ],
        correctAnswerId: "b",
      },
      {
        id: 8,
        text: "When do we say that a set of test cases T satisfies the test requirements TR for a coverage criterion C?",
        options: [
          {
            id: "a",
            text: "For every test requirement tr ∈ TR, there is exactly one test case t ∈ T such that t satisfies tr.",
          },
          {
            id: "b",
            text: "For some test requirement tr ∈ TR, there is some test case t such that t ∈ T such that t satisfies tr.",
          },
          {
            id: "c",
            text: "For some test requirement tr ∈ TR, all the test cases t ∈ T are such that t satisfies tr.",
          },
          {
            id: "d",
            text: "For every test requirement tr ∈ TR, there is at least one test case t ∈ T such that t satisfies tr.",
          },
        ],
        correctAnswerId: "d",
      },
      {
        id: 9,
        text: "When do we say that a coverage criterion C1 subsumes a coverage criterion C2?",
        options: [
          {
            id: "a",
            text: "C1 subsumes C2 iff some test case that satisfies C1 also satisfies C2.",
          },
          {
            id: "b",
            text: "C1 subsumes C2 iff every test case that satisfies C1 also satisfies C2.",
          },
        ],
        correctAnswerId: "b",
      },
      {
        id: 10,
        text: "What does the JUnit assertion assertFalse(val1 > val2) return when val1 is less than val2?",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "a",
      },
    ],
    2: [
      // Assignment 2 (Non Graded)
      {
        id: 1,
        text: "When do we say that a test path p tours a path q",
        options: [
          {
            id: "a",
            text: "We say that a test path p tours a path q if q is a sub-path of p.",
          },
          {
            id: "b",
            text: "We say that a test path p tours a path q if p is a sub-path of q.",
          },
        ],
        correctAnswerId: "a",
      },
      {
        id: 2,
        text: "The following graph will be used... Consider a graph G = (V, E) where... V = {1, 2, 3, 4, 5, 6, 7}, initial node is 1, final node is 7 and... E is {(1, 2), (1, 7), (2, 3), (2, 4), (3, 2), (4, 5), (4, 6), (5, 6), (6, 1)}. How many requirements are there for edge pair coverage?",
        options: [
          { id: "a", text: "10 requirements." },
          { id: "b", text: "12 requirements." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 3,
        text: "Which of the following test paths satisfy node coverage but not edge coverage on the graph?",
        options: [
          { id: "a", text: "Test path [1, 2, 4, 6, 1, 7]." },
          { id: "b", text: "Test path [1, 2, 4, 5, 6, 1, 7]." },
          { id: "c", text: "Test path [1, 2, 3, 2, 4, 6, 1, 7]." },
          { id: "d", text: "Test path [1, 2, 3, 2, 4, 5, 6, 1, 7]." },
        ],
        correctAnswerId: "d",
      },
      {
        id: 4,
        text: "What do the prime paths [2, 3, 2] and [3, 2, 3] together represent?",
        options: [
          {
            id: "a",
            text: "They represent two ways of going around the loop between the vertices 2 and 3.",
          },
          {
            id: "b",
            text: "They represent more than one iteration of the loop between the vertices 2 and 3.",
          },
        ],
        correctAnswerId: "b",
      },
      {
        id: 5,
        text: "Consider the simple path [3, 2, 4, 5, 6] and test path [1, 2, 3, 2, 4, 6, 1, 2, 4, 5, 6, 1, 7]. Does the test path tour the simple path directly or with a sidetrip?",
        options: [
          { id: "a", text: "The test path tours the simple path directly." },
          {
            id: "b",
            text: "The test path tours the simple path with a side trip [4, 6, 1, 2, 4].",
          },
        ],
        correctAnswerId: "b",
      },
      // Assignment 2 (Graded)
      {
        id: 6,
        text: "Which of the following best defines an infeasible test path?",
        options: [
          {
            id: "a",
            text: "An infeasible test path is one that does not exist in the graph.",
          },
          {
            id: "b",
            text: "An infeasible test path is one that can be executed by a failed test case.",
          },
          {
            id: "c",
            text: "An infeasible test path is one that cannot be executed by any test case.",
          },
          {
            id: "d",
            text: "An infeasible test path is one that does not start at an initial vertex or end at a final vertex.",
          },
        ],
        correctAnswerId: "c",
      },
      {
        id: 7,
        text: "How are test requirements defined and met in graphs-based structural coverage criteria?",
        options: [
          {
            id: "a",
            text: "Test requirements are basically the same as test paths, they are given as test paths.",
          },
          {
            id: "b",
            text: "Test requirements are defined as properties of test paths and they are met by using test paths that satisfy each test requirement.",
          },
        ],
        correctAnswerId: "b",
      },
      {
        id: 8,
        text: "In control flow graphs, which of the terms below represents a basic block?",
        options: [
          {
            id: "a",
            text: "A basic block is a sequence of statements such that there is no branching in the sequence.",
          },
          {
            id: "b",
            text: "A basic block is any sequence of statements that occurs as a path in the control flow graph.",
          },
        ],
        correctAnswerId: "a",
      },
      {
        id: 9,
        text: "Consider a control flow graph G corresponding to a method and a strongly connected component S in C. Which of the following does S represent in the code that G corresponds to?",
        options: [
          {
            id: "a",
            text: "S represents the entire method in case the method does not have loops.",
          },
          { id: "b", text: "S represents a loop in the method." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 10,
        text: "Which of the algorithms will return the shortest paths between two nodes in a control flow graph?",
        image: "/images/cs113-week2-q10.png", // Placeholder for the graph image
        options: [
          { id: "a", text: "Breadth first search." },
          { id: "b", text: "Depth first search." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 11,
        text: "State true or false: There are test paths that achieve node coverage but not edge coverage.",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 12,
        text: "Which of the following test paths achieve edge coverage?",
        options: [
          { id: "a", text: "Test path [1, 2, 3, 2, 4]." },
          { id: "b", text: "Test paths [1, 2, 4] and [1, 2, 3, 2]." },
          { id: "c", text: "Both the paths above achieve edge coverage." },
          {
            id: "d",
            text: "None of the above two paths achieve edge coverage.",
          },
        ],
        correctAnswerId: "a",
      },
      {
        id: 13,
        text: "State yes or no: In the graph above, the test path [1, 2, 3, 2, 4] tours the pair of edges [3, 2, 3].",
        options: [
          { id: "a", text: "Yes." },
          { id: "b", text: "No." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 14,
        text: "The test paths {[1, 2, 4], [1, 2, 3, 2, 3, 2, 4]} achieve which of the following coverage criteria?",
        options: [
          { id: "a", text: "Node coverage only." },
          { id: "b", text: "Edge coverage only." },
          { id: "c", text: "Node and edge coverage only." },
          { id: "d", text: "Edge pair coverage" },
        ],
        correctAnswerId: "d",
      },
      {
        id: 15,
        text: "State true or false: The test path [1, 2, 3, 2, 4] achieves edge coverage.",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "a",
      },
    ],
    3: [
      // Week 3: Assignment 3 (Non Graded)
      {
        id: 1,
        text: "Which of the following is a list of nodes having defs for variable w?",
        image: "/images/cs113-week3-cfg.png",
        options: [
          { id: "a", text: "Nodes 1, 2, 3 have defs for w." },
          { id: "b", text: "Nodes 2 and 3 have defs for w." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 2,
        text: "Which of the following is a list of nodes having uses for variable w?",
        image: "/images/cs113-week3-cfg.png",
        options: [
          { id: "a", text: "Nodes 2, 3, and 7 have uses for w." },
          { id: "b", text: "Nodes 2 and 3 have uses for w." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 3,
        text: "State true or false: Nodes 4, 5 and 6 have uses for variable x.",
        image: "/images/cs113-week3-cfg.png",
        options: [
          { id: "a", text: "True" },
          { id: "b", text: "False" },
        ],
        correctAnswerId: "b",
      },
      {
        id: 4,
        text: "State yes or no: Are there any du-paths with respect to variable w from node 1 to node 7?",
        image: "/images/cs113-week3-cfg.png",
        options: [
          { id: "a", text: "Yes" },
          { id: "b", text: "No" },
        ],
        correctAnswerId: "b",
      },
      {
        id: 5,
        text: "Does the statement at node 7 correspond to a definition or a use for the variable z?",
        image: "/images/cs113-week3-cfg.png",
        options: [
          { id: "a", text: "It corresponds to a definition of z." },
          { id: "b", text: "It corresponds to a use of z." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 6,
        text: "Which of the following is a list of du-paths for the variable w?",
        image: "/images/cs113-week3-cfg.png",
        options: [
          {
            id: "a",
            text: "Paths [2, 4, 5, 7], [2, 4, 6, 7], [3, 4, 5, 7] and [3, 4, 6, 7].",
          },
          {
            id: "b",
            text: "Paths [1, 2], [1, 3], [2, 4, 5, 7], [2, 4, 6, 7], [3, 4, 5, 7] and [3, 4, 6, 7].",
          },
        ],
        correctAnswerId: "b",
      },
      {
        id: 7,
        text: "Which of the following is a list of du-paths for the variable x?",
        image: "/images/cs113-week3-cfg.png",
        options: [
          { id: "a", text: "Paths [5, 7] and [6, 7]." },
          { id: "b", text: "Paths [5, 7], [6, 7] and [7, 7]." },
        ],
        correctAnswerId: "a",
      },
      // Week 3: Assignment 3 (Graded)
      {
        id: 8,
        text: "Which of the following represents a basic block in a control flow graph?",
        options: [
          {
            id: "a",
            text: "A basic block of statements is a set of all statements that are a part of a function that the control flow graph represents.",
          },
          {
            id: "b",
            text: "A basic block of statements is a sequence of statements such that if the first statement the sequence is executed then all the statements in the sequence will also be executed.",
          },
        ],
        correctAnswerId: "b",
      },
      {
        id: 9,
        text: "Consider a variable count of type int. Suppose there is a method that has a statement of the type count++;. Which of the following statements are correct regarding the data flow definition of count?",
        options: [
          { id: "a", text: "The statement is a definition of count." },
          { id: "b", text: "The statement is a use of count." },
          { id: "c", text: "The statement is both a definition and use of count." },
          { id: "d", text: "The statement is neither a definition nor a use of count." },
        ],
        correctAnswerId: "c",
      },
      {
        id: 10,
        text: "Consider a variable x of type double and suppose a particular method in Java has a statement if(Math.log(x)) >= 4.2, will it be considered a definition of x or a use of x?",
        options: [
          { id: "a", text: "The statement is a definition of x" },
          { id: "b", text: "The statement is a use of x." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 11,
        text: "State true or false: Consider a variable x in a program. Not every definition of x will always reach a use.",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 12,
        text: "Which of the following best defines a du-path for a variable x?",
        options: [
          {
            id: "a",
            text: "A du-path is a simple path from a definition of x to a use of x without any further definitions of x in-between.",
          },
          {
            id: "b",
            text: "A du-path is a path from a definition of x to a use of x without any further definitions of x in-between.",
          },
          {
            id: "c",
            text: "A du-path is a simple path from a definition of x to a use of x without any further uses of x in-between.",
          },
          {
            id: "d",
            text: "A du-path is a path from a definition of x to a use of x without any further uses of x in-between.",
          },
        ],
        correctAnswerId: "a",
      },
      {
        id: 13,
        text: "State yes or no: We group du-paths with respect to a variable by their definitions.",
        options: [
          { id: "a", text: "Yes." },
          { id: "b", text: "No." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 14,
        text: "Is it true that the all-du-paths data flow coverage criterion subsumes prime path coverage?",
        options: [
          { id: "a", text: "Yes." },
          { id: "b", text: "No." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 15,
        text: "Which of the following statements are true when it comes to comparing traditional source code coverage criteria with graph based coverage criteria?",
        options: [
          {
            id: "a",
            text: "Node and statement coverage are the same, edge and branch coverage are the same.",
          },
          { id: "b", text: "Edge and decision coverage are the same." },
        ],
        correctAnswerId: "a",
      },
      {
        id: 16,
        text: "Which of the following defines a linearly independent path of execution in a control flow graph?",
        options: [
          { id: "a", text: "A path in which there are no branches." },
          { id: "b", text: "A path which does not contain other paths within it." },
          {
            id: "c",
            text: "A path that represents structural complexity of a program.",
          },
          { id: "d", text: "A path within a connected component." },
        ],
        correctAnswerId: "b",
      },
      {
        id: 17,
        text: "State true or false: Node and edge coverage, as test requirements for structural coverage over graphs, are given with the input graph itself.",
        options: [
          { id: "a", text: "True." },
          { id: "b", text: "False." },
        ],
        correctAnswerId: "a",
      },
    ],
    4: [
      // Week 4: Assignment 4 (Graded)
  {
    id: 1,
    text: "Which of the following best describes a test driver?",
    options: [
      {
        id: "a",
        text: "It is a special purpose implementation of a software module, used to develop or test a component that calls it.",
      },
      {
        id: "b",
        text: "It is a software component that replaces another component that takes care of the control and/or the calling of a software component.",
      },
    ],
    correctAnswerId: "b",
  },
  {
    id: 2,
    text: "If method A uses a variable v shared with method B, where A writes to v and B reads from v, then, it is an example of which kind of coupling interface listed below?",
    options: [
      { id: "a", text: "Parameter coupling." },
      { id: "b", text: "Interface coupling." },
      { id: "c", text: "External coupling." },
      { id: "d", text: "Shared data coupling." },
    ],
    correctAnswerId: "d",
  },
  {
    id: 3,
    text: "To test sequencing constraints that occur as requirements specification, which of the following tests are used?",
    options: [
      { id: "a", text: "Tests are inputs to sequencing constraints that violate the constraints." },
      { id: "b", text: "Tests are inputs to sequencing constraints that satisfy the constraints." },
      { id: "c", text: "Tests are sequences of method calls, as they occur in the specification." },
      { id: "d", text: "Tests are randomly generated sequencing constraints." },
    ],
    correctAnswerId: "c",
  },
  {
    id: 4,
    text: "A simple path from the last definition to the first use of a coupling variable is called as . . . . . . . . ..",
    options: [
      { id: "a", text: "A du-path." },
      { id: "b", text: "A coupling du-path." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 5,
    text: "State Yes or No: Are control flow graphs representing code the same as finite state machines that represent the same code?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
    ],
    correctAnswerId: "b",
  },
  {
    id: 6,
    text: "Which of the following is true with reference to the graph satisfying the sequencing constraints?",
    options: [
      { id: "a", text: "All the sequencing constraints are satisfied." },
      { id: "b", text: "Constraints (1) and (2) are satisfied but (3) and (4) are not." },
      { id: "c", text: "Constraints (1), (2) and (3) are satisfied but (4) is not." },
      { id: "d", text: "All constraints are violated." },
    ],
    correctAnswerId: "c",
  },
  {
    id: 7,
    text: "State true or false: The path (1,4,5,7) satisfies constraint (4).",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 8,
    text: "State true or false: The path (1,2,3,7) satisfies all the constraints.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "a",
  },
  {
    id: 9,
    text: "State yes or no: Does the path (1,4,6,7) violate any of the constraints?",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 10,
    text: "State true or false: The path (1,4,6,4,6,7) satisfies all the constraints.",
    options: [
      { id: "a", text: "Yes." },
      { id: "b", text: "No." },
    ],
    correctAnswerId: "a",
  },
  // Week 4: Assignment 4 (Non-Graded)
  {
    id: 1,
    text: "A node in a callee function that defines a variable x and has a def-clear path from the node through a call site to a caller function is referred to as _______.",
    options: [
      { id: "a", text: "Last-def of x." },
      { id: "b", text: "Def of x." },
      { id: "c", text: "First-use of x." },
      { id: "d", text: "Use of x." },
    ],
    correctAnswerId: "a",
  },
  {
    id: 2,
    text: "State true or false: Both top-down and bottom-up integration testing work well with a hierarchical design.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "a",
  },
  {
    id: 3,
    text: "State true or false: Control flow graphs are finite state machines representing code.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 4,
    text: "Which of the following best describes pre-conditions in finite state machines?",
    options: [
      { id: "a", text: "They are conditions that must be true for transitions to be taken." },
      { id: "b", text: "They represent sequencing constraints that describe the order in which methods need to be called." },
    ],
    correctAnswerId: "a",
  }
    ],
    5: [
  // Week 5: Assignment 5 (Graded)
  {
    id: 1,
    text: "State true or false: GACC subsumes predicate coverage.",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 2,
    text: "When we test to check if a particular clause does not determine a predicate, which kind of coverage criteria are we considering?",
    options: [
      { id: "a", text: "Active coverage criteria." },
      { id: "b", text: "Inactive coverage criteria." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 3,
    text: "Which of the following represents a correct order of subsumption amongst logic coverage criteria? In the options below, read → as ‘subsumes’.",
    options: [
      { id: "a", text: "Correlated active clause coverage → Predicate coverage → Clause coverage." },
      { id: "b", text: "Combinatorial coverage → Predicate coverage → Clause coverage." },
      { id: "c", text: "Combinatorial coverage → Correlated active clause coverage → Predicate coverage." },
      { id: "d", text: "General active clause coverage → Correlated active clause coverage → Clause coverage." },
    ],
    correctAnswerId: "c",
  },
  {
    id: 4,
    text: "Consider the logical predicate p = a ∨ (b ∧ c). Truth table for the predicate is given below with rows numbered from 1 to 8. Which of the following represents pa, the conditions under which clause a determines p?",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "b ∧ c." },
      { id: "b", text: "b ∨ c." },
      { id: "c", text: "¬b ∨ ¬c." },
      { id: "d", text: "¬b ∧ ¬c." },
    ],
    correctAnswerId: "c",
  },
  {
    id: 5,
    text: "Which of the following represents pb, the conditions under which clause b determines p?",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "a ∧ c." },
      { id: "b", text: "a ∨ c." },
      { id: "c", text: "¬a ∧ c." },
      { id: "d", text: "¬a ∨ ¬c." },
    ],
    correctAnswerId: "c",
  },
  {
    id: 6,
    text: "Which of the following represents pc, the conditions under which clause c determines p?",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "¬a ∧ b." },
      { id: "b", text: "¬a ∨ b." },
      { id: "c", text: "a ∧ b." },
      { id: "d", text: "¬a ∧ ¬b." },
    ],
    correctAnswerId: "a",
  },
  {
    id: 7,
    text: "Which of the following represents GACC pairs for clause a? (Note: Numbers below represent row numbers from the truth table.)",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "{2, 3, 4} × {6, 7, 8}." },
      { id: "b", text: "{1, 3, 4} × {5, 6, 7}." },
      { id: "c", text: "{2, 3, 4} × {6, 7, 8}." },
      { id: "d", text: "{(2, 6), (3, 7), (4, 8)}." },
    ],
    correctAnswerId: "d",
  },
  {
    id: 8,
    text: "State true or false: GACC pairs for clauses b and c are the same.",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "b",
  },
  {
    id: 9,
    text: "The set {(2, 6), (3, 7), (4, 8)} is the set of RACC pairs for which clause?",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "Clause a." },
      { id: "b", text: "Clause b." },
    ],
    correctAnswerId: "a",
  },
  {
    id: 10,
    text: "State true or false: CACC pairs for clauses a, b and c are different from GACC pairs for these clauses.",
    image: "/images/cs113-week5-truthtable.png",
    options: [
      { id: "a", text: "True." },
      { id: "b", text: "False." },
    ],
    correctAnswerId: "b",
  },
],

 6: [ 
// Week 6: Assignment 6 (Graded)
{
  id: 1,
  text: "While applying logic-based testing to test source code, is it true that the predicates can be taken exactly as they occur in code always?",
  options: [
    { id: "a", text: "Yes, the predicates can be considered exactly as they occur in code." },
    { id: "b", text: "No, some times we have to add extra clauses to the predicate." },
  ],
  correctAnswerId: "b",
},
{
  id: 2,
  text: "How do logical predicates occur in finite state machines?",
  options: [
    { id: "a", text: "The logical predicates occur as a part of the states of the finite state machines." },
    { id: "b", text: "The logical predicates occur as guards in the transitions of the finite state machines." },
  ],
  correctAnswerId: "b",
},
{
  id: 3,
  text: "In a requirements specification document, where do logical predicates occur?",
  options: [
    { id: "a", text: "They occur directly as a part of the requirements." },
    { id: "b", text: "They occur as pre-conditions, invariants and post-conditions in the requirements." },
    { id: "c", text: "All the conditions in requirements can be translated into predicates." },
    { id: "d", text: "Logical predicates cannot be found in requirements." },
  ],
  correctAnswerId: "b",
},
{
  id: 4,
  text: "State true or false: The internal variable z in the second predicate needs to be re-written in terms of the input parameters x and y.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "a",
},
{
  id: 5,
  text: "Is it true that predicate coverage for the first predicate will also subsume predicate coverage for the second predicate?",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "b",
},
{
  id: 6,
  text: "How many test cases will be needed for clause coverage for the second predicate if we explicitly count the true and false values for each clause?",
  options: [
    { id: "a", text: "Two test cases." },
    { id: "b", text: "Four test cases." },
  ],
  correctAnswerId: "b",
},
{
  id: 7,
  text: "State true or false: The set of test case inputs {(x=5, y=3), (x=4, y=6), (x=5, y=6)} will satisfy clause coverage for the second predicate.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "a",
},
{
  id: 8,
  text: "State yes or no: The set of test case inputs {(x=5, y=3), (x=4, y=6), (x=5, y=6)} will also satisfy predicate coverage for the first and second predicates.",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." },
  ],
  correctAnswerId: "a",
},
{
  id: 9,
  text: "How many test cases are needed for satisfying RACC for all the clauses for the second predicate?",
  options: [
    { id: "a", text: "Only one test case." },
    { id: "b", text: "Two test cases." },
    { id: "c", text: "Three test cases." },
    { id: "d", text: "Five test cases." },
  ],
  correctAnswerId: "c",
},
{
  id: 10,
  text: "State true or false: The set of test case inputs {(x=5, y=3), (x=4, y=6), (x=5, y=6)} satisfy RACC for the second predicate.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "a",
},

// Week 6: Assignment 6 (Non-Graded)
{
  id: 11,
  text: "Where do logical predicates occur in finite state machines?",
  options: [
    { id: "a", text: "They occur in the specification of finite state machines." },
    { id: "b", text: "They occur at decision points in finite state machines." },
    { id: "c", text: "They occur as guards in transitions of finite state machines." },
    { id: "d", text: "They occur in the nodes of finite state machines." },
  ],
  correctAnswerId: "c",
},
{
  id: 12,
  text: "How many test cases will be needed to achieve predicate coverage over a predicate with n clauses?",
  options: [
    { id: "a", text: "Two." },
    { id: "b", text: "n." },
    { id: "c", text: "n + 1." },
    { id: "d", text: "2n." },
  ],
  correctAnswerId: "a",
},
{
  id: 13,
  text: "State yes or no: If a specification predicate is in Conjunctive Normal Form (CNF), then a major clause can be made active by making all other clauses true.",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." },
  ],
  correctAnswerId: "a",
},
],


 7: [
// Week 7: Assignment 7 (Graded)
{
  id: 1,
  text: "How many partitions will be there for the input CGPA if we consider only valid inputs?",
  options: [
    { id: "a", text: "Three partitions." },
    { id: "b", text: "Five partitions." },
  ],
  correctAnswerId: "a",
},
{
  id: 2,
  text: "Do the test inputs {CGPA = 8, CGPA = 9, CGPA = 9.5} belong to the same partition?",
  options: [
    { id: "a", text: "Yes, they belong to the same partition." },
    { id: "b", text: "No, they belong to different partitions." },
  ],
  correctAnswerId: "a",
},
{
  id: 3,
  text: "What is the expected output for the test case containing CGPA = 8 as input?",
  options: [
    { id: "a", text: "Eligibility for offers above INR 20,00,000/= per annum and if no such offers exist, eligible for all offers." },
    { id: "b", text: "Only eligible for offers above INR 20,00,000/= per annum." },
  ],
  correctAnswerId: "a",
},
{
  id: 4,
  text: "State true or false: A student has a CGPA of 6 and will be eligible to appear for placements for companies with a salary offer of INR 20,00,000/=.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "b",
},
{
  id: 5,
  text: "Which of the following is a correct partitioning of inputs?",
  options: [
    { id: "a", text: "Salary range: 1. INR  to INR 20,00,000, 2. INR 20,00,001 to INR  where  is the minimum salary offered and  is the maximum salary offered." },
    { id: "b", text: "Salary range: 1. INR 0 to INR 20,00,000, 2. ≥ INR 20,00,000." },
    { id: "c", text: "Both the options above can be valid partitions." },
    { id: "d", text: "None of the options above are valid partitions." },
  ],
  correctAnswerId: "c",
},
{
  id: 6,
  text: "Amongst the various coverage criteria for input space partitioning, which is the most expressive and which is the least expressive?",
  options: [
    { id: "a", text: "All combinations coverage is the least expressive and multiple base choice coverage is the most expressive." },
    { id: "b", text: "All combinations coverage is the most expressive and multiple base choice coverage is the least expressive." },
    { id: "c", text: "Each choice coverage is the most expressive and all combinations coverage is the least expressive." },
    { id: "d", text: "Each choice coverage is the least expressive and all combinations coverage is the most expressive." },
  ],
  correctAnswerId: "d",
},
{
  id: 7,
  text: "State true or false: Multiple base choice coverage subsumes pair-wise coverage.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "b",
},
{
  id: 8,
  text: "Which criterion below will have a maximum number of test cases?",
  options: [
    { id: "a", text: "Each choice criterion." },
    { id: "b", text: "All combinations criterion." },
    { id: "c", text: "Base choice coverage criterion." },
    { id: "d", text: "Multiple base choice coverage criterion." },
  ],
  correctAnswerId: "b",
},
{
  id: 9,
  text: "When does T-wise coverage criterion become the same as all combinations coverage criterion?",
  options: [
    { id: "a", text: "When the value for T is the maximum value in a partition." },
    { id: "b", text: "When the value for T is equal to the number of partitions." },
  ],
  correctAnswerId: "b",
},
{
  id: 10,
  text: "State yes or no: While partitioning the inputs using equivalence partitioning, both valid and invalid inputs need to be considered.",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." },
  ],
  correctAnswerId: "a",
},

// Week 7: Assignment 7 (Non-Graded)
{
  id: 11,
  text: "State true or false: In functional testing, decision tables handle multiple inputs by considering different combinations of equivalence classes, with conditions handling the combinations.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "a",
},
{
  id: 12,
  text: "In equivalence class based testing, how does each partition help in testing?",
  options: [
    { id: "a", text: "When the program under test is run on any input from each partition, it will produce the same output." },
    { id: "b", text: "Any input from each partition is good enough to test the program, it serves as a good source for selecting inputs." },
  ],
  correctAnswerId: "a",
},
{
  id: 13,
  text: "In boundary value analysis, if the partition of inputs specifies an ordered set, which of the following best describes the guidelines to be used to choose test case inputs?",
  options: [
    { id: "a", text: "Construct test cases by specifying boundary points." },
    { id: "b", text: "Construct test cases at the boundary of each partition." },
    { id: "c", text: "Construct test cases by choosing minimum and maximum values." },
    { id: "d", text: "Construct test cases by choosing the first and the last elements of the set." },
  ],
  correctAnswerId: "d",
},
{
  id: 14,
  text: "What are the variables involved in the NextDate function input?",
  options: [
    { id: "a", text: "Month, day and year." },
    { id: "b", text: "Date containing month, day and year." },
    { id: "c", text: "Today’s date." },
    { id: "d", text: "Range of dates." },
  ],
  correctAnswerId: "b",
},
{
  id: 15,
  text: "State true or false: The partition (1){month: month has 30 days}, (2){month: month has 31 days}, (3){month: month is February} is a valid partition for month as a part of input to NextDate function?",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." },
  ],
  correctAnswerId: "a",
},
],


    8: [
// Week 8: Assignment 8 (Graded)
{
  id: 1,
  text: "Consider the regular expression (a + b) · (a + b)* over the alphabet Σ = {a, b}. Which of the following options represents a list of words generated by this regular expression?",
  options: [
    { id: "a", text: "ab, a, aab." },
    { id: "b", text: "abab, babab." },
    { id: "c", text: "aaa, bbb." },
    { id: "d", text: "All of the above." }
  ],
  correctAnswerId: "d",
},
{
  id: 2,
  text: "For the same regular expression (a + b) · (a + b)*, which of the following options represents the language corresponding to the regular expression?",
  options: [
    { id: "a", text: "The language is the set of all words over a and b that have at least one a and at least one b in them." },
    { id: "b", text: "The language is the set of all words over a and b that have at least one a or at least one b in them." }
  ],
  correctAnswerId: "b",
},
{
  id: 3,
  text: "While parsing a program to extract syntactic information, which of the following defines how characters form tokens?",
  options: [
    { id: "a", text: "Regular expressions." },
    { id: "b", text: "Context-free grammars." },
    { id: "c", text: "Context-sensitive grammars." },
    { id: "d", text: "The normal form of the grammar." }
  ],
  correctAnswerId: "a",
},
{
  id: 4,
  text: "Consider the context-free grammar G = (N, T, P, S) where N = {S, X}, T = {a, b}, P = {S → aXb, X → ab}. Which of the following is the language generated by this grammar?",
  options: [
    { id: "a", text: "The language generated by G is { w | w = aabb }." },
    { id: "b", text: "The language generated by G is { w | w = aⁿbⁿ, n ≥ 1 }." }
  ],
  correctAnswerId: "a",
},
{
  id: 5,
  text: "State yes or no: Is the ground string in mutation testing the same as the program under test?",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." }
  ],
  correctAnswerId: "a",
},
{
  id: 6,
  text: "Which of the following is a mutant that can be killed by any test case?",
  options: [
    { id: "a", text: "Dead mutant." },
    { id: "b", text: "Equivalent mutant." },
    { id: "c", text: "Trivial mutant." },
    { id: "d", text: "Idempotent mutant." }
  ],
  correctAnswerId: "c",
},
{
  id: 7,
  text: "Suppose a decision statement like if (x < 0 && z == 5) is mutated to get if (x > 0 && z == 5). Then it is an example of which kind of mutation operator?",
  options: [
    { id: "a", text: "Replacing a logical operator." },
    { id: "b", text: "Replacing a relational operator." },
    { id: "c", text: "Replacing a decision statement." },
    { id: "d", text: "Replacing a condition statement." }
  ],
  correctAnswerId: "b",
},
{
  id: 8,
  text: "As per the lectures, replacing a particular assignment statement with a statement like failOnZero() is an example of a mutation operator applied at which of the levels in testing?",
  options: [
    { id: "a", text: "Program level." },
    { id: "b", text: "Integration level." },
    { id: "c", text: "Statement level." },
    { id: "d", text: "Debugging level." }
  ],
  correctAnswerId: "a",
},
{
  id: 9,
  text: "A programmer decides to save time and apply two or three mutation operators together to increase the chances of finding many errors together. Is this considered to be a useful strategy in mutation testing?",
  options: [
    { id: "a", text: "Yes, it will find many errors early." },
    { id: "b", text: "No, mutation operators work best when applied one at a time." }
  ],
  correctAnswerId: "b",
},
{
  id: 10,
  text: "State true or false: Mutation testing subsumes combinatorial logic coverage criterion.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
},

// Week 8: Assignment 8 (Non-Graded)
{
  id: 11,
  text: "State true or false: Regular expressions and context free grammars are used to determine how characters form tokens and tokens form words in the syntax of a programming language.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},
{
  id: 12,
  text: "In the list of mutation operators for source code, the Boolean constants True and False can be used to replace which of the following operators?",
  options: [
    { id: "a", text: "They can replace logical operators only." },
    { id: "b", text: "They can replace relational operators only." },
    { id: "c", text: "They can replace conditional operators only." },
    { id: "d", text: "They can replace both logical and relational operators." }
  ],
  correctAnswerId: "d",
},
{
  id: 13,
  text: "When is a mutant said to be a trivial mutant?",
  options: [
    { id: "a", text: "A mutant is trivial if it is functionally equivalent to its ground string." },
    { id: "b", text: "A mutant is trivial if it can be killed by almost any test case." },
    { id: "c", text: "A mutant is trivial if it is invalid." },
    { id: "d", text: "A mutant is trivial if all logical and relational operators are replaced by the constant True." }
  ],
  correctAnswerId: "b",
},
{
  id: 14,
  text: "State true or false: Strongly killing a mutant and weakly killing a mutant are the same in mutation testing applied to test a method.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
},
{
  id: 15,
  text: "State true or false: Mutation testing subsumes combinatorial logic coverage criterion.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
}
]
,
    9: [
// Week 9: Assignment 9 (Graded)
{
  id: 1,
  text: "Which of the following testing techniques is considered as a white-box technique?",
  options: [
    { id: "a", text: "Statement testing." },
    { id: "b", text: "Decision table testing." },
    { id: "c", text: "Equivalence partitioning." },
    { id: "d", text: "State transition testing." }
  ],
  correctAnswerId: "a",
},
{
  id: 2,
  text: "Which of the following is NOT a type of data flow anomaly?",
  options: [
    { id: "a", text: "Define–Use anomaly." },
    { id: "b", text: "Use–Define anomaly." },
    { id: "c", text: "Define–Define anomaly." },
    { id: "d", text: "Use–Use anomaly." }
  ],
  correctAnswerId: "d",
},
{
  id: 3,
  text: "In the context of data flow testing, which of the following is a correct statement?",
  options: [
    { id: "a", text: "Data flow testing focuses on the flow of control between statements." },
    { id: "b", text: "Data flow testing focuses on how values are defined and used in the program." },
    { id: "c", text: "Data flow testing checks the equivalence partitions of data inputs." },
    { id: "d", text: "Data flow testing focuses on the flow of data through modules." }
  ],
  correctAnswerId: "b",
},
{
  id: 4,
  text: "State true or false: A variable that is defined but not used indicates a potential data flow anomaly.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},
{
  id: 5,
  text: "Which of the following represents a DU-path?",
  options: [
    { id: "a", text: "A path where a variable is defined and then used before being redefined." },
    { id: "b", text: "A path where a variable is defined twice consecutively." },
    { id: "c", text: "A path where a variable is used and then defined." },
    { id: "d", text: "A path where a variable is used without definition." }
  ],
  correctAnswerId: "a",
},
{
  id: 6,
  text: "Which of the following is true about definition-use pairs?",
  options: [
    { id: "a", text: "Each variable should be defined only once in a function." },
    { id: "b", text: "Each definition should reach at least one use in the same or different block." },
    { id: "c", text: "A definition-use pair must always occur within the same statement." },
    { id: "d", text: "All definitions must be global." }
  ],
  correctAnswerId: "b",
},
{
  id: 7,
  text: "In a control flow graph, which of the following is NOT true for a loop?",
  options: [
    { id: "a", text: "A loop always introduces a cycle in the control flow graph." },
    { id: "b", text: "A loop can be represented using edges that point backward in the graph." },
    { id: "c", text: "Loops cannot exist in structured programs." },
    { id: "d", text: "Loops can be nested." }
  ],
  correctAnswerId: "c",
},
{
  id: 8,
  text: "Which of the following statements is true regarding statement and path coverage?",
  options: [
    { id: "a", text: "Path coverage subsumes statement coverage." },
    { id: "b", text: "Statement coverage subsumes path coverage." },
    { id: "c", text: "Both are equivalent." },
    { id: "d", text: "Neither subsumes the other." }
  ],
  correctAnswerId: "a",
},
{
  id: 9,
  text: "State yes or no: Is loop coverage considered a data flow testing criterion?",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." }
  ],
  correctAnswerId: "b",
},
{
  id: 10,
  text: "Which of the following best describes all-definition coverage?",
  options: [
    { id: "a", text: "Ensures every variable is used at least once." },
    { id: "b", text: "Ensures every definition of every variable reaches at least one use." },
    { id: "c", text: "Ensures every path that defines a variable is executed." },
    { id: "d", text: "Ensures every use has a unique definition." }
  ],
  correctAnswerId: "b",
},

// Week 9: Assignment 9 (Non-Graded)
{
  id: 11,
  text: "Which of the following is true about control flow and data flow testing?",
  options: [
    { id: "a", text: "Both are white-box testing techniques." },
    { id: "b", text: "Control flow is white-box and data flow is black-box." },
    { id: "c", text: "Both are black-box testing techniques." },
    { id: "d", text: "Control flow is black-box and data flow is white-box." }
  ],
  correctAnswerId: "a",
},
{
  id: 12,
  text: "Which of the following anomalies indicates that a variable is defined twice before being used?",
  options: [
    { id: "a", text: "Define–Define anomaly." },
    { id: "b", text: "Define–Use anomaly." },
    { id: "c", text: "Use–Define anomaly." },
    { id: "d", text: "Use–Use anomaly." }
  ],
  correctAnswerId: "a",
},
{
  id: 13,
  text: "State true or false: In a DU-pair, the use can be either computational or predicate use.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},
{
  id: 14,
  text: "Which of the following data flow coverage criteria is stronger?",
  options: [
    { id: "a", text: "All-definitions coverage." },
    { id: "b", text: "All-uses coverage." },
    { id: "c", text: "All DU-paths coverage." },
    { id: "d", text: "All predicate-uses coverage." }
  ],
  correctAnswerId: "c",
},
{
  id: 15,
  text: "Which of the following coverage criteria subsumes all others in data flow testing?",
  options: [
    { id: "a", text: "All DU-paths coverage." },
    { id: "b", text: "All-definitions coverage." },
    { id: "c", text: "All-uses coverage." },
    { id: "d", text: "All computational-uses coverage." }
  ],
  correctAnswerId: "a",
}
]
,
    10: [
// Week 10: Assignment 10 (Graded)
{
  id: 1,
  text: "Which of the following is a model-based testing approach?",
  options: [
    { id: "a", text: "Finite state machine-based testing." },
    { id: "b", text: "Mutation testing." },
    { id: "c", text: "Decision table testing." },
    { id: "d", text: "Boundary value analysis." }
  ],
  correctAnswerId: "a",
},
{
  id: 2,
  text: "State true or false: In state-based testing, a transition corresponds to a change in the state of the system under test.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},
{
  id: 3,
  text: "Which of the following represents the elements of a state machine model?",
  options: [
    { id: "a", text: "States, transitions and events." },
    { id: "b", text: "Inputs, outputs and paths." },
    { id: "c", text: "Nodes, edges and weights." },
    { id: "d", text: "Conditions, clauses and predicates." }
  ],
  correctAnswerId: "a",
},
{
  id: 4,
  text: "State yes or no: Is it possible to have multiple transitions between two states in a finite state machine model?",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." }
  ],
  correctAnswerId: "a",
},
{
  id: 5,
  text: "Which of the following coverage criteria is the most expressive in state-based testing?",
  options: [
    { id: "a", text: "State coverage." },
    { id: "b", text: "Transition coverage." },
    { id: "c", text: "Transition-pair coverage." },
    { id: "d", text: "N-switch coverage." }
  ],
  correctAnswerId: "d",
},
{
  id: 6,
  text: "Which of the following statements about transition-pair coverage is true?",
  options: [
    { id: "a", text: "It ensures every individual transition is covered at least once." },
    { id: "b", text: "It ensures every pair of consecutive transitions is covered at least once." },
    { id: "c", text: "It ensures every pair of states is covered at least once." },
    { id: "d", text: "It ensures all transitions emanating from the initial state are covered." }
  ],
  correctAnswerId: "b",
},
{
  id: 7,
  text: "State true or false: N-switch coverage subsumes transition-pair coverage.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},
{
  id: 8,
  text: "Which of the following is true about the test cases generated from a state machine model?",
  options: [
    { id: "a", text: "Each test case corresponds to a single transition." },
    { id: "b", text: "Each test case corresponds to a path through the model." },
    { id: "c", text: "Each test case corresponds to a set of states only." },
    { id: "d", text: "Each test case corresponds to a single event." }
  ],
  correctAnswerId: "b",
},
{
  id: 9,
  text: "Which of the following is a limitation of state-based testing?",
  options: [
    { id: "a", text: "Cannot model sequential behavior." },
    { id: "b", text: "Not useful for reactive systems." },
    { id: "c", text: "Difficult to manage when number of states grows large." },
    { id: "d", text: "Cannot represent event-driven systems." }
  ],
  correctAnswerId: "c",
},
{
  id: 10,
  text: "State true or false: Transition coverage subsumes state coverage.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},

// Week 10: Assignment 10 (Non-Graded)
{
  id: 11,
  text: "Which of the following is true about finite state machines (FSM)?",
  options: [
    { id: "a", text: "FSM represents system behavior in terms of states and transitions." },
    { id: "b", text: "FSM represents system behavior in terms of decision tables." },
    { id: "c", text: "FSM represents input-output pairs directly." },
    { id: "d", text: "FSM is used only for white-box testing." }
  ],
  correctAnswerId: "a",
},
{
  id: 12,
  text: "In a state machine, the set of transitions defines which of the following?",
  options: [
    { id: "a", text: "The allowable moves between states." },
    { id: "b", text: "The order of state numbering." },
    { id: "c", text: "The input symbols only." },
    { id: "d", text: "The number of start and end states." }
  ],
  correctAnswerId: "a",
},
{
  id: 13,
  text: "State true or false: Every state in a finite state machine must have at least one incoming and one outgoing transition.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
},
{
  id: 14,
  text: "Which of the following is the correct order of subsumption among coverage criteria in state-based testing?",
  options: [
    { id: "a", text: "N-switch coverage → transition-pair coverage → transition coverage → state coverage." },
    { id: "b", text: "Transition coverage → transition-pair coverage → state coverage → N-switch coverage." },
    { id: "c", text: "State coverage → transition coverage → transition-pair coverage → N-switch coverage." },
    { id: "d", text: "State coverage → transition-pair coverage → transition coverage → N-switch coverage." }
  ],
  correctAnswerId: "c",
},
{
  id: 15,
  text: "State true or false: Model-based testing cannot be automated.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
}
]
,
    11: [
// Week 11: Assignment 11 (Graded)
{
  id: 1,
  text: "State yes or no: Is concolic testing a white-box testing technique?",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." }
  ],
  correctAnswerId: "a",
},
{
  id: 2,
  text: "Which of the following is true about concolic testing?",
  options: [
    { id: "a", text: "Concolic testing is used instead of symbolic testing when the latter fails." },
    { id: "b", text: "Concolic testing keeps concrete state and symbolic state." }
  ],
  correctAnswerId: "b",
},
{
  id: 3,
  text: "What is the use of a SAT/SMT solver in symbolic testing?",
  options: [
    { id: "a", text: "SAT/SMT solvers are used to collect path constraints in symbolic testing." },
    { id: "b", text: "SAT/SMT solvers are used to solve path constraints and get values that can be used as test inputs." },
    { id: "c", text: "Constraint solvers are not useful in symbolic testing as not all path constraints can be collected and solved." },
    { id: "d", text: "Constraint solvers on predicates always return true or false values which helps to decide execution paths." }
  ],
  correctAnswerId: "b",
},
{
  id: 4,
  text: "State true or false: Symbolic execution can be used to detect non-termination in programs.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
},
{
  id: 5,
  text: "Which of the following is a list of techniques used in the algorithm deployed by DART?",
  options: [
    { id: "a", text: "Random testing, symbolic testing and constraint solvers." },
    { id: "b", text: "Symbolic testing and automated testing." },
    { id: "c", text: "Directed search, random testing and constraint solvers." },
    { id: "d", text: "Concrete testing and symbolic testing." }
  ],
  correctAnswerId: "c",
},
{
  id: 6,
  text: "Which of the following strategy is used for input search in concolic testing?",
  options: [
    { id: "a", text: "Random search." },
    { id: "b", text: "Systematic, random search interleaved with path-sensitive search." }
  ],
  correctAnswerId: "b",
},
{
  id: 7,
  text: "What does the given code fragment do?\n\nint x, y;\nif (x > y) {\n  x = x + y;\n  y = x - y;\n  x = x - y;\n  if (x - y > 0)\n    --- error ---;\n}\n",
  options: [
    { id: "a", text: "It checks if x is greater than y." },
    { id: "b", text: "It checks if y is greater than x." },
    { id: "c", text: "It swaps the values of x and y." },
    { id: "d", text: "It swaps the values of x and y twice." }
  ],
  correctAnswerId: "c",
},
{
  id: 8,
  text: "How many decision points and execution paths are there in the code fragment?",
  options: [
    { id: "a", text: "Two decision points and three execution paths." },
    { id: "b", text: "Three decision points and four execution paths." }
  ],
  correctAnswerId: "a",
},
{
  id: 9,
  text: "What will be the path constraint at line 1 of the code fragment such that program exits without further execution?",
  options: [
    { id: "a", text: "x > y." },
    { id: "b", text: "x <= y." }
  ],
  correctAnswerId: "b",
},
{
  id: 10,
  text: "State yes or no: Is the error statement reachable in the given program fragment?",
  options: [
    { id: "a", text: "Yes." },
    { id: "b", text: "No." }
  ],
  correctAnswerId: "b",
},

// Week 11: Assignment 11 (Non-Graded)
{
  id: 11,
  text: "Which of the following best defines symbolic execution?",
  options: [
    { id: "a", text: "It executes a program on symbolic inputs to reason about all possible paths." },
    { id: "b", text: "It executes a program with random inputs to explore one path." },
    { id: "c", text: "It executes a program concretely on given input values." },
    { id: "d", text: "It executes only loops with fixed bounds symbolically." }
  ],
  correctAnswerId: "a",
},
{
  id: 12,
  text: "Which of the following is a key advantage of concolic testing over pure symbolic testing?",
  options: [
    { id: "a", text: "It eliminates the need for constraint solvers." },
    { id: "b", text: "It combines concrete and symbolic execution to handle complex paths." },
    { id: "c", text: "It avoids the need for path constraints." },
    { id: "d", text: "It executes only one path deterministically." }
  ],
  correctAnswerId: "b",
},
{
  id: 13,
  text: "State true or false: Constraint solvers in symbolic testing are used to find input values that satisfy specific path constraints.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
},
{
  id: 14,
  text: "Which of the following is NOT a limitation of symbolic execution?",
  options: [
    { id: "a", text: "Path explosion problem." },
    { id: "b", text: "Handling complex data types." },
    { id: "c", text: "Ability to reason about all feasible paths." },
    { id: "d", text: "Constraint solving limitations." }
  ],
  correctAnswerId: "c",
},
{
  id: 15,
  text: "State true or false: In DART, directed search is used to prioritize paths likely to expose errors.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "a",
}
]
,
    12: [
// Week 12: Assignment 12 (Graded)
{
  id: 1,
  text: "State true or false: Regression testing is a white-box testing technique as it tests for the changes done to the code.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
},
{
  id: 2,
  text: "Let P be a program and P′ be a modified version of P. When do we say that a particular test case t is obsolete for P′?",
  options: [
    { id: "a", text: "t is obsolete for P′ if it has an input that is not valid for P′." },
    { id: "b", text: "t is obsolete for P′ if it does not produce an output on execution." }
  ],
  correctAnswerId: "a",
},
{
  id: 3,
  text: "State true or false: Testing for non-functional or quality requirements can be done at all the phases of software development.",
  options: [
    { id: "a", text: "True." },
    { id: "b", text: "False." }
  ],
  correctAnswerId: "b",
},
{
  id: 4,
  text: "If a software application version X released in 2007 can be used on version Y of the same application released in 2010, what does it indicate regarding its compatibility?",
  options: [
    { id: "a", text: "The application X is forward compatible." },
    { id: "b", text: "The application X is backward compatible." }
  ],
  correctAnswerId: "a",
},
{
  id: 5,
  text: "If a particular file available on a web link is set to have 'Read-only' access to all users, then it is an example of which kind of quality requirement?",
  options: [
    { id: "a", text: "A confidentiality requirement." },
    { id: "b", text: "A reliability requirement." },
    { id: "c", text: "A security authorization requirement." },
    { id: "d", text: "A security authentication requirement." }
  ],
  correctAnswerId: "c",
},
{
  id: 6,
  text: "Installation instructions are made available as a part of the software package. These instructions are part of which category?",
  options: [
    { id: "a", text: "Software documentation." },
    { id: "b", text: "Software operations procedure." },
    { id: "c", text: "Regulatory requirements for the software." },
    { id: "d", text: "Availability requirements of the software." }
  ],
  correctAnswerId: "a",
},
{
  id: 7,
  text: "Which of the following terms represents the testing that is done to find the upper limit capacity of inputs that a system can handle?",
  options: [
    { id: "a", text: "Performance testing." },
    { id: "b", text: "Load testing." },
    { id: "c", text: "Spike testing." },
    { id: "d", text: "Stress testing." }
  ],
  correctAnswerId: "d",
},
{
  id: 8,
  text: "Which of the following is a list of key challenges in testing mobile applications?",
  options: [
    { id: "a", text: "Device fragmentation, different mobile networks, compatibility across platforms." },
    { id: "b", text: "Mobile applications being different from desktop applications." },
    { id: "c", text: "Mobile applications must be tested within a phone only." },
    { id: "d", text: "Testing across platforms is the only challenge." }
  ],
  correctAnswerId: "a",
},
{
  id: 9,
  text: "When performance testing is considered for mobile applications, which aspects are tested for?",
  options: [
    { id: "a", text: "Screen size, operating systems and browsers." },
    { id: "b", text: "Network coverage, memory and battery." },
    { id: "c", text: "Speed with uniform user experience." },
    { id: "d", text: "Load and stress in terms of number of users." }
  ],
  correctAnswerId: "b",
},
{
  id: 10,
  text: "Which of the following is a list of interrupts that mobile applications are tested for?",
  options: [
    { id: "a", text: "Network coverage, memory and battery." },
    { id: "b", text: "Network outage, incoming/outgoing calls and messages." }
  ],
  correctAnswerId: "b",
},

// Week 12: Assignment 12 (Non-Graded)
{
  id: 11,
  text: "Testing for forward compatibility involves testing for which of the following features?",
  options: [
    { id: "a", text: "Testing to accept inputs intended for modern versions of the operating system." },
    { id: "b", text: "Testing to accept inputs intended for a former version of the software itself." },
    { id: "c", text: "Testing to accept inputs for a latter version of the software itself." },
    { id: "d", text: "Testing to accept inputs intended for a new version of third-party products the software interacts with." }
  ],
  correctAnswerId: "c",
},
{
  id: 12,
  text: "Which of the following is a list of black-box testing techniques?",
  options: [
    { id: "a", text: "Logic-based testing, performance testing, stress testing." },
    { id: "b", text: "Load testing, stress testing, testing for covering loops." },
    { id: "c", text: "Testing based on partitioning inputs, load testing, stress testing." },
    { id: "d", text: "Compatibility testing, functional testing, data flow testing." }
  ],
  correctAnswerId: "c",
},
{
  id: 13,
  text: "Which of the following best defines a polymorphic call set?",
  options: [
    { id: "a", text: "All the polymorphic methods." },
    { id: "b", text: "All the methods the designer wants to be polymorphic." },
    { id: "c", text: "Set of polymorphic methods that can get executed in a class." },
    { id: "d", text: "Set of methods that can potentially execute as a result of a method call through a particular instance context." }
  ],
  correctAnswerId: "d",
},
{
  id: 14,
  text: "Testing for mobile phone apps at middleware and device level is done using which of the following?",
  options: [
    { id: "a", text: "Mobile phones themselves." },
    { id: "b", text: "Application development environment." },
    { id: "c", text: "Emulators that are custom-built." },
    { id: "d", text: "Application within the phone." }
  ],
  correctAnswerId: "c",
}
],

  },
};
    