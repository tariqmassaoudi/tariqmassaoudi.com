---
title: "I Use Coding Agents Daily: Here's What Works"
date: "2025-01-22T12:00:00.000Z"
description: Practical lessons and patterns for getting the most out of agentic coding tools
tag: AI,Engineering
---

### I Use Coding Agents Daily: Here's What Works

Agentic coding is less about "letting the AI code" and more about how you set it up for success. Treat coding agents like junior engineers: give them clear goals, strong constraints, the right tools, and a way to validate their work. This article summarizes practical lessons and patterns that have worked for me when using modern agentic coding tools in real projects.

### Variables that affect the quality of the output:

When you're interacting with a modern coding agent, you're can choose the **underlying model**, the **content of the message** you send the agent which is the initial context, and the **tools** provided to the agent, each of these variables are important to the output.

### Put the most effort in planning:

For most agentic tasks with the exception of trivial and very clear bug fixes or documentation, I'd recommend to spend the most time and effort on crafting a clear plan for the agent before implementation, most agenools offer a plan mode that you can use. For complex problems that I'm not sure about the right solution, I like to start by an exploratory or brainstorming prompt, it's important to give agent a clear path to the solution when possible so that the agent doesn't guess. Here's an example of an exploratory prompt structure I like to use:

As a (domain expert)
Given this problem:
(your problem)
propose multiple solutions that respect (your best practices or constraints here)
Rank these solutions while providing detailed reasoning and tradeoffs.
Recommend the best solution
(tag the relevant files or folders here)

### Context is king:

Just like humans, coding agents perform best when they have the right information, and they get less smart the more their context fill up, modern current models have around 200K window. Reference [study](https://research.trychroma.com/context-rot) by chroma

![](https://cdn-images-1.medium.com/max/1600/0*8_lA6qnrmo8nAnT7.png)

Context engineering is a very important skill to get the best of coding agents, here's some tips and what worked for me:

-   One task, one session, after each task start a new chat.
-   If the feature is too big, ask the agent to split the plan into phases, execute each phase in a new session, verify the output of the phase then move to the next phase.
-   When running out of context ask the agent to create a handover markdown document, with work done and learnings, pass it to another agent to continue the work.
-   When possible provide the agent with the exact files relevant to the task to prevent that the agent explores the codebase wasting time and tokens.

### Give the agent a way to verify it's work:

Without a way to verify it's work the agent is basically guessing, it might one shot your task or you might have to verify it's work manually and iterate with it. If you give it a deterministic way to verify the work, it will guess verify and if wrong rethink the approach until the task is correct.

In practice ask the agent to write tests and verify the code against them, for backend work I found asking the agent to run the backend server and test the endpoint live to be effective.

Frontend tasks are more complex to verify, you can use playwright MCP or Claude Chrome extension, but it might be unreliable, the next best thing is to ask the agent to add debug logs and copy it back to the agent if something goes wrong.

### The right model for the right task:

For planning, I always use the current best model which is Claude Opus 4.5, some people have had success with GPT 5.2, for executing the plan using the next tier of models such as Claude Sonnet is often enough, as long as the plan is detailed enough. For simple tasks such as committing, writing pull requests you can choose the smallest fastest model for example Claude Haiku or Gemini Flash.

### When to use MCP:

The drawback of using MCPs is the context cost since they store the tool descriptions in context and you have to remember to disable the MCP server after use. If the service you're interacting with provides a CLI tool that accomplishes same task as MCP (an example here is github cli, azure cli) just ask the model to use the CLI instead of relying using the MCP.

### Slash commands:

Slash commands are shortcut prompts for common tasks, they're extremely useful, I mainly use it for committing, pushing and creating pull requests. Example command to commit and push

1. First, run `git diff` to see all changes (both staged and unstaged)
2. Analyze the diff to understand what changed
3. Write a conventional commit message based on the diff:
   - Use format: `type(scope): description`
   - Types: feat, fix, docs, style, refactor, test, chore
   - Keep the first line under 72 characters
   - Add a blank line and bullet points for details if needed
4. Stage all changes with `git add -A`
5. Commit with the conventional commit message
6. Push to the remote branch. If the branch has no upstream, set it with
   `git push -u origin <branch>`

### Global rules files

claude.md, cursor rules are a must have to establish your dos and don't, coding style, etc .., and can be helpful to constrain the agent but they're not hard rules, expect the agent to ignore them sometimes. Here's a [resource](https://cursor.directory/rules) to find common rules for your stack.

You must review the agent output manually. Another helpful pattern is to have another agent that you provide with your quality metrics review the output of the first agent this will help you quickly find any red flags.

### Conclusion:

Agentic coding works when you treat it like managing a junior dev: clear tasks, good context, and proper verification. The fundamentals won't change as tools evolve, planning matters more than prompting, context engineering beats brute force, and review is non-negotiable.

Start small, build your own patterns, and remember: you're still the engineer. The agent just moves faster than you type.
