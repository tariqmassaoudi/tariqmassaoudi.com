---
title: "I Read AI Engineering by Chip Huyen — Here's What Stuck With Me"
date: "2025-02-20T12:00:00.000Z"
description: Key takeaways from the most comprehensive book on building with LLMs
tag: AI,Engineering
---

I've been building AI features into production systems for a while now. Like most engineers in this space, I picked things up as I went — a blog post here, a YouTube tutorial there, a lot of trial and error. It worked, but I never had a clear mental model of the full picture. I knew pieces, not the system.

Then I picked up **AI Engineering: Building Applications with Foundation Models** by Chip Huyen (O'Reilly, 2025). I wish I had read it a year earlier. Not because it taught me entirely new things — some of it I already knew from experience — but because it organized everything into a framework that finally made sense. It connected the dots between evaluation, prompt engineering, RAG, agents, finetuning, and production architecture in a way no blog post ever did.

Here are the ideas from the book that changed how I think about building AI applications.

## AI Engineering Is Not ML Engineering

This distinction seems obvious in hindsight, but the book makes it explicit. Traditional ML engineering is about collecting data, training models, and deploying them. You own the entire pipeline from data to weights. AI engineering is different: you're building on top of foundation models that someone else trained. Your job shifts from model creation to **model adaptation**.

In ML engineering, the competitive advantage was in data labeling, feature engineering, and model architecture. In AI engineering, everyone has access to the same models through APIs. The moat is in **context engineering**, **evaluation on your own use case**, and **user experience**. The question becomes: how do I get the best results out of these models for my specific problem?

Huyen breaks the AI stack into three layers: application development (prompts, context, UX), model development (finetuning, dataset engineering), and infrastructure (serving, compute, monitoring). Most of the work happens at the top layer. You start there and only move down when you need to.

## Evaluation Is Everything

If there's one theme that runs through the entire book, it's this: **evaluation is everything**. And it's the part most teams get wrong or skip entirely.

Evaluating traditional software is straightforward — either the function returns the expected output or it doesn't. Evaluating an LLM's output is messy. The output is open-ended, subjective, and probabilistic. The model might give a different answer each time.

The book introduces **Evaluation-Driven Development (EDD)**, inspired by TDD. The idea is to define your evaluation criteria before you start building. What does a good response look like? What does a bad one look like? Write rubrics, create scoring guidelines, provide examples. If you don't do this, you're basically guessing whether your system is getting better or worse with each change.

In practice there's a spectrum of evaluation methods. **Functional correctness** is the gold standard when you can use it — if you're generating code, run it against test cases. **Similarity to references** works when you have ground truth, using lexical overlap (BLEU, ROUGE) or semantic similarity via embeddings. **LLM-as-a-judge** is increasingly popular for subjective evaluation — you use a strong model to score the output of another model. It's scalable but comes with real limitations: self-bias, position bias, and verbosity bias. Despite those flaws, it's still useful when combined with other methods.

The practical takeaway: define your evaluation criteria before you write a single prompt. If you care about something — factuality, tone, format, safety — put an evaluation on it.

## RAG: Facts vs Form

RAG (Retrieval-Augmented Generation) gets its own deep treatment in the book, and rightfully so. The core idea is simple: before the model generates a response, retrieve relevant information and include it in the context.

Some people think that as context windows grow longer (200K+ tokens now), RAG will become unnecessary. Huyen argues the opposite, and I agree: **data always grows faster than context windows**. You'll never fit everything into context, so you'll always need intelligent retrieval.

The phrase from the book I use all the time now: **"RAG is for facts, finetuning is for form."** If your model needs to know specific, up-to-date information — use RAG. If your model needs to adopt a specific style or behavior pattern — consider finetuning. Most applications need RAG first. Finetuning is expensive, can become outdated when the base model updates, and should only be pursued after you've maximized what prompting and RAG can do.

## Agents Are Powerful but Fragile

The agents chapter is where the book gets exciting. At its core, an agent is just an LLM that can perceive its environment and act on it through tools. ChatGPT browsing the web, a coding agent running terminal commands, a customer support bot querying a database — these are all agents.

A key principle that maps directly to my experience with coding agents: **decouple planning from execution**. Let the model generate a plan first, validate that plan, then execute it step by step. Blindly letting a model plan and execute simultaneously is how you get agents that go off the rails. This is the same pattern I follow daily — I always ask for a plan first, review it, then let the agent implement.

Here's the math that makes this concrete: each step in an agent's plan is a potential point of failure, and errors compound. A five-step plan where each step has 90% accuracy gives you only about **59% overall success**. This is why keeping agent plans simple and providing verification at each step matters so much.

The book also covers multi-agent patterns — routers that classify and delegate queries, sequential chains where each agent processes the previous output, supervisor agents that orchestrate sub-agents, and parallel execution for independent subtasks. These are worth knowing, but the core lesson is simpler: **more steps = more failure points**. Keep it tight.

## The Data Flywheel

One framework from the book I keep thinking about is around competitive advantage. When building AI products, the barrier to entry is low. If it's easy for you to build something with an API, it's easy for anyone else too.

Huyen identifies three potential moats: technology, data, and distribution. With foundation models commoditizing the technology layer and big companies owning distribution, the most sustainable moat for most teams is **data**. Specifically, the feedback loop: ship fast, collect user interactions, use that data to improve the product, attract more users, collect more data. This flywheel is what separates products that keep getting better from those that stagnate.

This means your feedback collection design matters enormously. Explicit feedback (thumbs up/down) is sparse and biased. Implicit feedback (conversation continuation, task completion, abandonment) is noisy but abundant. Designing how you extract signal from user interactions is an underrated skill.

## What Stuck With Me

After reading the book and continuing to build AI features in production, here are the frameworks that stuck:

- **Evaluation first.** Before I write prompts, I write evaluation criteria. Before I change a model or a pipeline component, I make sure I can measure whether the change is an improvement.

- **RAG before finetuning.** Every time someone suggests finetuning, I ask: have we exhausted what we can do with better retrieval and better prompts? The answer is almost always no.

- **Start simple, add progressively.** Don't try to build the perfect system from day one. Start with a good prompt and RAG. Evaluate. Then add complexity where the metrics tell you to.

- **Agents are powerful but fragile.** The more steps in your agent's plan, the more points of failure. Decouple planning from execution. Verify at each step.

- **Context engineering is the skill.** Not prompting. Context engineering. That includes what information you retrieve, how you structure it, what goes at the beginning vs. the middle, and how much you include. This is where the craft is.

If you're building anything with foundation models, this book is the best single resource I've found. The specific tools and models will change, but the principles are durable. Read it, then re-read the evaluation chapters, then go build your eval pipeline.
