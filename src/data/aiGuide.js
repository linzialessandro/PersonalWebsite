export const aiLastChecked = "November 2026";

export const aiHowTo = [
  {
    title: "Ask for hints, not answers.",
    text: "A finished solution feels like progress but teaches little. Ask for the next hint, then do the step yourself.",
  },
  {
    title: "Redo every step by hand.",
    text: "Close the chat and solve the problem again on paper. If you cannot, you have not learned it yet.",
  },
  {
    title: "Check every number and every claim.",
    text: "Substitute your answer back into the equation, test a value, or run it through a computer algebra system. Look up any theorem or source a model names; they are sometimes invented.",
  },
  {
    title: "Say when you used AI.",
    text: "Follow your teacher’s or your course’s rules. When in doubt, say what you used it for.",
  },
  {
    title: "Keep personal data out.",
    text: "Never paste names, grades, photos, passwords, or anything about classmates into a chat.",
  },
];

export const aiToolGroups = [
  {
    id: "assistants",
    title: "General assistants",
    caution:
      "They write wrong answers as fluently as right ones. Age rules differ: ChatGPT and Grok are 13+ with a parent’s permission under 18, Gemini needs a Google Account you may manage yourself (14+ in Italy), and Claude is 18+.",
    tools: [
      {
        url: "https://chatgpt.com/",
        label: "ChatGPT",
        suffix:
          " — general assistant from OpenAI; study mode asks questions and gives hints instead of the final answer",
      },
      {
        url: "https://gemini.google.com/",
        label: "Gemini",
        suffix:
          " — general assistant from Google; Guided Learning walks you through a problem step by step",
      },
      {
        url: "https://grok.com/",
        label: "Grok",
        suffix:
          " — general assistant from xAI (now SpaceXSI) with real-time answers from the web and X",
      },
      {
        url: "https://claude.com/",
        label: "Claude",
        suffix: " — general assistant from Anthropic",
      },
    ],
  },
  {
    id: "own-material",
    title: "Studying from your own material",
    caution:
      "Answers come only from what you upload, so a gap in your notes is a gap in the answer. Open the cited passage before you trust a summary.",
    tools: [
      {
        url: "https://notebook.google/",
        label: "Gemini Notebook",
        suffix:
          " (formerly NotebookLM) — answers questions about the notes, slides, and PDFs you upload, cites the passages it used, and makes study guides, flashcards, and quizzes",
      },
    ],
  },
  {
    id: "checking",
    title: "Computation and checking",
    caution:
      "These compute exactly, but only what you typed. Check that the input is the problem you meant.",
    tools: [
      {
        url: "https://www.wolframalpha.com/",
        label: "Wolfram|Alpha",
        suffix:
          " — solves equations, limits, and integrals from plain-language input; step-by-step solutions need Pro",
      },
      {
        url: "https://www.geogebra.org/cas",
        label: "GeoGebra CAS Calculator",
        suffix:
          " — free computer algebra in the browser: solve, factor, differentiate",
      },
      {
        url: "https://www.desmos.com/calculator",
        label: "Desmos Graphing Calculator",
        suffix: " — plot a function to check zeros, signs, and asymptotes",
      },
    ],
  },
  {
    id: "university",
    title: "University work",
    caution:
      "Read every line of generated LaTeX or code before you use it. A one-sentence summary is not the paper.",
    tools: [
      {
        url: "https://docs.overleaf.com/integrations-and-add-ons/ai-features",
        label: "Overleaf AI features",
        suffix:
          " — Error Assist explains LaTeX errors and suggests fixes; free within daily limits",
      },
      {
        url: "https://developers.google.com/colab",
        label: "Gemini in Colab",
        suffix:
          " — Python notebooks where Gemini generates, explains, and debugs code; Learn Mode guides you instead of writing the code",
      },
      {
        url: "https://www.semanticscholar.org/",
        label: "Semantic Scholar",
        suffix:
          " — search research papers; TLDRs give a one-sentence AI summary of each result",
      },
      {
        url: "https://lean-lang.org/",
        label: "Lean",
        extra: { url: "https://mathlib.org/", label: "Mathlib" },
        suffix:
          " — advanced: a proof assistant that checks every step of a proof, and its library of formalized mathematics",
      },
    ],
  },
  {
    id: "coding",
    title: "Coding agents",
    caution:
      "They edit and run code on your machine or in your repository. Review every change, use version control, and do not hand them graded coursework.",
    tools: [
      {
        url: "https://x.ai/build",
        label: "Grok Build",
        suffix:
          " — xAI’s coding agent for the terminal: plans, edits files, runs builds and tests; free to try",
      },
      {
        url: "https://claude.com/product/claude-code",
        label: "Claude Code",
        suffix:
          " — Anthropic’s coding agent for the terminal, editors, and the web; asks before it changes files or runs commands; paid Claude plans",
      },
      {
        url: "https://chatgpt.com/codex/",
        label: "Codex",
        suffix:
          " — OpenAI’s coding agent in ChatGPT, your editor, and the terminal, with cloud environments for each repository; included in paid ChatGPT plans",
      },
      {
        url: "https://antigravity.google/",
        label: "Google Antigravity",
        suffix:
          " — Google’s agentic development platform: an app, a CLI, an IDE, and editor extensions where agents write, run, and test code",
      },
    ],
  },
  {
    id: "agents",
    title: "Agents and personal assistants",
    caution:
      "Agents act on your accounts and can be confidently wrong. Review what they do, keep personal data and school accounts out, and never let them submit graded work.",
    tools: [
      {
        url: "https://x.ai/bot",
        label: "Grok Bot",
        suffix:
          " — agents with their own cloud computer that use apps and websites, write and run code, and work on a schedule",
      },
      {
        url: "https://chatgpt.com/features/dots/",
        label: "OpenAI Dots",
        suffix:
          " — always-on ChatGPT agents with their own cloud computer that keep working on your projects between conversations; paid plans, 18+, not yet available in the EU",
      },
      {
        url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
        label: "Meta Muse",
        suffix:
          " — Meta’s personal agent on its own cloud computer: it browses, fills in forms, and books things, and asks before it sends an email or buys; rolling out in the US, free with a usage limit",
      },
      {
        url: "https://claude.com/product/claude-duet",
        label: "Claude Duet",
        suffix:
          " — Anthropic’s proactive agent on its own cloud computer that works in your connected apps and asks before it sends, pays, or deletes; US research preview for paid plans, by waitlist",
      },
    ],
  },
];

export const aiPrompts = [
  {
    id: "socratic-tutor",
    title: "Socratic tutor",
    text: "Act as a Socratic tutor. I am working on this problem: [paste the problem]. Do not give me the solution. Ask me one question at a time to help me find the next step, and wait for my answer before you continue.",
  },
  {
    id: "check-solution",
    title: "Check my solution without solving it",
    text: "Here is a problem and my solution: [paste both]. Do not write a full solution. Tell me whether each step is correct. For the first wrong step, say which line it is and give me a hint, not the fix.",
  },
  {
    id: "quiz-me",
    title: "Quiz me",
    text: "Quiz me on [topic] at the level of [class or course]. Ask five questions, one at a time, from easy to hard. After each answer, tell me whether I am right and why, then ask the next one.",
  },
  {
    id: "explain-level",
    title: "Explain it at my level",
    text: "Explain [concept] to a student in [class or course]. Use one short worked example with small numbers, then give me a similar exercise to try on my own. Do not solve the exercise.",
  },
  {
    id: "find-error",
    title: "Find the error in this step",
    text: "This step is wrong, but I cannot see why: [paste the line before and the line after]. Point to the mistake and name the rule I broke. Do not continue the solution.",
  },
  {
    id: "study-plan",
    title: "Make a study plan",
    text: "I have a test on [topics] in [number] days and can study [time] per day. Make a day-by-day plan that mixes review, practice problems, and one practice test. Keep the last day for revision only.",
  },
];

export const aiGuides = [
  {
    file: "studying-mathematics-with-ai.pdf",
    title: "Studying Mathematics with AI",
    description: "The method above and the prompts, on two pages.",
  },
  {
    file: "which-ai-tool-for-which-job.pdf",
    title: "Which AI Tool for Which Job",
    description: "The tool map, with what each tool is for and where it fails.",
  },
  {
    file: "spotting-ai-mistakes-in-mathematics.pdf",
    title: "Spotting AI Mistakes in Mathematics",
    description: "Typical errors with worked examples, and a checklist.",
  },
];
