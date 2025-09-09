---
title: "From Hacky Scripts to Professional Code: A Guide to Crafting High-Quality Python Projects"
date: "2024-10-04T22:12:03.284Z"
description: Transform Your Python Scripts into Clean, Robust, and Shareable Projects
tag: Cloud
---

![](https://miro.medium.com/v2/resize:fit:875/1*VHR5EQANK5eg2K_NP0PRfQ.jpeg)

## Introduction:

Imagine it’s late at night and you’re working on a python script that just has to work. It started off as a simple idea, just automate this one thing, scrape this piece of data and you’re done! As you intuitivly add more features, a few extra lines turns into a hundred and before you know it the script has grown into an unmanagable mess ! A tangled mess of dependencies, random formating and a small change that risks to break everything else.

Sound familiar?

This senario plays out for developpers accros the world, whether they’re just starting out with Python or juggling multiple projects that envolved without proper structure. Thus the need to start out your project right to create something maintainable, sharable and scalable that others could easily work on !

In this article, we’re going to explore how a few key tools and approaches can elevate your Python projects to a professional standard:  **automatic code formatting**  with Black,  **code linting**  to ensure quality,  **dependency management**  using Poetry, and the  **power of Makefiles**  to simplify everyday tasks.

## How to Make the Best Use of This Article 📋

This of this article as  **checklist**  for improving your Python projects, covering everything from dependency management to automated testing.

The article provides external ressources to dive deeper into each tool or topic.

### What It Is:

-   A practical guide for leveling up your Python projects.
-   A starting point for tools that streamline development.

### What It’s Not:

-   A deep dive into each tool’s advanced features.
-   A one-size-fits-all solution you don’t need every tool! please adapt it to your needs!

## Dependency Management Made Easy with Poetry 🛠️

If you’ve ever worked with  `pip`  and  `requirements.txt`, you've likely run into issues like version conflicts, missing packages, or struggles to replicate environments. Poetry solves these problems by maintaining a  **single source of truth**  for your project’s dependencies using the  `pyproject.toml`  file, making it easier to:

-   Install dependencies consistently across machines.
-   Manage both development and production dependencies.
-   Keep your project reproducible by pinning exact versions.

### Getting Started with Poetry

Install Poetry

curl -sSL https://install.python-poetry.org | python3 -

Initialize Your Project

poetry init

This command walks you through setting up your  `pyproject.toml`, where all your dependencies are stored.

Add Dependencies:

poetry add fastapi

This installs Flask and updates your  `pyproject.toml`  and  `poetry.lock`. For development dependencies like linters or testing tools, use:

poetry add --dev black

You can install all dependecies of a particual project using:

poetry install

This install everything in  `poetry.lock`

## Virtual Environments: The Power of Isolation 🐍

If you’ve ever juggled multiple Python projects, each requiring different libraries or even different versions of Python. You’ve probably ran intro issues with dependency conflics or global instalations breaking!

This is where  **virtual environments**  become a developer’s best friend — they allow each project to have its own isolated setup, free from the chaos of conflicting versions.

### Pyenv: A Solution for Managing Multiple Python Versions

Pyenv allows you to install and switch between different Python versions effortlessly, right from your terminal.

### Example senario with pyenv:

Imagine you’re working on a new project that needs Python 3.10 for its features, but you have another project stuck on Python 3.8. Let’s solve this issue with pyenv

**Install Pyenv**: First, install Pyenv with a simple command:

curl https://pyenv.run | bash

**Install Multiple Python Versions**: Use Pyenv to install Python 3.8 and Python 3.10

pyenv install 3.10.0  
pyenv install 3.8.10

**Switching Between Versions**: To set Python 3.10 globally, run:

pyenv global 3.10.0

## Formatters, Linters and Beyond 🧼

Ensuring code quality is one of the most critical steps in building a professional-grade Python project. Formatters and linters and type checkers automate this process, helping you maintain consistency, catch bugs, and enforce best practices. In this section, we’ll explore four essential tools to help with this:  **Black**,  **Flake8**,  **isort**, and  **Mypy**.

### Black for Code Formatting 🖤

Black is an opinionated code formatter that takes care of all the stylistic choices in your code. Instead of wasting time debating code styles or manually reformatting code, Black automatically does that for you! With just a single command, your Python code gets a uniform look, making it easier to read and maintain.

For example, here’s a before and after comparison of code formatted by Black:

Before:

def add_numbers(a,b): return a+b

After:

def add_numbers(a, b):  
    return a + b

Black follows the PEP 8 style guidelines for python, refer to the guide  [here](https://peps.python.org/pep-0008/)

you can use Black after installing it with pip from the command line:

black folder_needs_fomatting

You can also install it into VS code and set the editor to apply black whenever you save a python file which is the most convenient method.

check this  [guide](https://marcobelo.medium.com/setting-up-python-black-on-visual-studio-code-5318eba4cd00)  for instructions.

Fine the black documentation  [here](https://black.readthedocs.io/en/stable/). Alternatives to black include  **YAPF**  (Yet Another Python Formatter),  **Autopep8**.

### Linting with Flake8 🔍

While Black focuses on formatting,  **Flake8**  takes care of code quality by detecting common issues such as unused imports, undefined variables, and style violations. It helps you identify potential bugs early, making your code cleaner and more reliable.

For example, Flake8 might flag the following code:

def calculate_total():  
 return total # undefined variable

Flake8 would catch that  `total`  is used before being defined, preventing a runtime error later.

It is also advisable to set it up with VS code. Check this  [guide](https://dev.to/mingming-ma/python-black-and-flake8-configuration-in-vs-code-as-of-november-3-2023-13ag)  for instructions.

Alternatives to flake8 include  **Pylint.**

## Sorting Imports with isort 📦

In larger projects, keeping your imports organized is crucial for readability and maintainability. This is where  **isort**  comes in.  **isort**  is a tool that automatically sorts your imports, grouping them into logical sections and ensuring that they are in the correct order.

## Get  Tariq Massaoudi’s stories in your inbox

Join Medium for free to get updates from this writer.

Subscribe

Before isort:

import os  
import requests  
from django.shortcuts import render  
import sys  
from .models import Product  
import json

After isort:

import json  
import os  
import sys  
  
import requests  
from django.shortcuts import render  
  
from .models import Product

With isort, standard library imports, third-party dependencies, and local application imports are neatly separated, following Python’s best practices.

## Type Checking with Mypy 🧠

In addition to formatters and linters,  **Mypy**  adds static type checking to your Python code. Mypy helps you catch type-related bugs before they even occur by checking the types of variables, function arguments, and return values against the expected types.

For instance, Mypy would catch the following type mismatch:

def add_numbers(a: int, b: int) -> int:  
    return a + b  
  
add_numbers("1", 2)  # Mypy will flag this! 

For seamless development, you can also configure Mypy with VS code

**Learn more**  in the  [Mypy documentation](http://mypy-lang.org/).

## Introduction to Software Testing with Pytest 🧪

How can you be sure that your code does what it’s supposed to — and keeps working even as you add new features or make changes? This is where  **software testing**  becomes essential. Testing not only confirms that your code works right now, but also gives you the confidence that it will keep working and not break as your project evolves.

### Writing a Simple Test

Suppose you have a function that adds two numbers:

def add_numbers(a, b):  
    return a + b

Now, let’s write a test for it using Pytest:

def test_add_numbers():  
    assert add_numbers(2, 3) == 5  
    assert add_numbers(-1, 1) == 0

To run the test, just execute  `pytest`  in your terminal, and Pytest will find and run all your test cases automatically.

### Beyond Basics: Advanced Testing Topics

Once you’re comfortable with basic testing, Pytest offers advanced tools to take your testing to the next level:

-   **Test Coverage**: Ensure that all parts of your code are being tested by measuring  **test coverage**. Tools like  `pytest-cov`  help you identify untested parts of your project.
-   **Parameterized Tests**: Run the same test with multiple inputs to catch edge cases without repeating code.
-   **Fixtures**: Simplify complex test setups by using  **fixtures**  to manage dependencies, like database connections or file structures.

These tools can make your tests more efficient and thorough, ensuring your code is rock-solid and ready for anything. For more on these advanced features, check out the  [Pytest documentation](https://www.google.com/search?q=pytest+documentation&oq=pytest+do&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDI0OTdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8).

## The Power of Makefiles: Automating Your Workflow ⚙️

As your Python projects grow, you’ll notice a pattern: running the same commands repeatedly, whether it’s for testing, linting, formatting, or even just launching your application. Manually typing out these commands each time can become tedious.

Makefiles allow you to define a series of commands in a file (`Makefile`), which can then be executed with a single, memorable command:  `make`.

### The Structure of a Makefile

A Makefile consists of  **rules**, which are written in the format:

target: dependencies  
    command

-   **Target**: This is the name of the task you want to run. It can be anything you choose, like  `format`,  `test`, or  `build`.
-   **Dependencies**: These are files or targets that must be up-to-date before the current target runs. While they are more commonly used in software compilation, in Python projects, we don’t usually use themunless specific files must be checked before a command runs.
-   **Command**: This is the shell command to execute when the target is called. Commands must be indented with a  **tab**, which is a common source of errors when writing Makefiles.

### Makefile through an example

Let’s walk through an example. Suppose your project frequently requires the following tasks:

-   Formatting your code with  **Black**.
-   Linting your code with  **Flake8**.
-   Running tests with  **Pytest**.

**Create a File Named** `**Makefile**`  in the root directory of your project. It should have no extension.

all: format lint test  
  
format:  
    black .  
  
lint:  
    flake8 .  
  
test:  
    pytest

Here, the  `all`  target runs  `format`,  `lint`, and  `test`  in that order. When you type  `make all`, all three tasks are executed.

For a more in depth guide check this  [article](https://medium.com/aigent/makefiles-for-python-and-beyond-5cf28349bf05)

## CI/CD: Automate Testing, Formatting, and Code Quality 🚀

With your code formatted, tested, and linted, how can you ensure that every change is consistently checked before merging into your project? That’s where  **Continuous Integration (CI)**  and  **Continuous Deployment (CD)**  come in.

**Continuous Integration (CI)**: Every time you or your team pushes new code, CI automatically runs your tests, linting, and formatting checks.

**Continuous Deployment (CD)**: Once your code passes all the CI checks, CD takes over by deploying it automatically to your production or staging environment.

**CI/CD**  ensuring every code change is consistently verified before merging. This prevents bugs and keeps your project clean.

### Example: CI Pipeline with GitHub Actions 🛠️

Create a  `.github/workflows/ci.yml`  file in your project and add the following configuration:

name: CI Pipeline  
  
on:  
  push:  
    branches:  
      - main  
  
jobs:  
  test:  
    runs-on: ubuntu-latest  
    steps:  
      - uses: actions/checkout@v2  
      - uses: actions/setup-python@v2  
        with:  
          python-version: '3.x'  
      - run: pip install poetry && poetry install  
      - run: poetry run black --check .  
      - run: poetry run flake8  
      - run: poetry run pytest

This pipeline runs  **Black**,  **Flake8**, and  **Pytest**  on each push to  `main`

For more, check out  [GitHub Actions docs](https://docs.github.com/en/actions).

## Refactoring and Clean Code Practices: Beyond Automation 🧹

While tools like  **Black**  and  **Flake8**  help you automate formatting and linting, automation can only take you so far. Clean, maintainable code isn’t just about fixing syntax issues , it’s about writing code that humans can understand and improve over time.

### Refactoring in Action

Let’s say you have a function that works but could be cleaner:

Before:

def process_data(data):  
    result = []  
    for item in data:  
        if item['age'] > 18:  
            result.append(item['name'].upper())  
    return result

**After Refactoring**

ADULT_AGE = 18  
  
def is_adult(person):  
    return person['age'] > ADULT_AGE  
  
def get_name_uppercase(person):  
    return person['name'].upper()  
  
def process_data(data):  
    return [get_name_uppercase(person) for person in data if is_adult(person)]

The code is now split into small, meaningful functions with clear names.

For more tips on refactoring, check out this  [refactoring guide](https://refactoring.guru/).

### Here are some key clean code practices:

-   **Keep Functions Small**: Break your code into bite-sized, single-purpose functions.
-   **Use Descriptive Names**: Good names make code self-explanatory, reducing the need for comments.
-   **Avoid Repetition**: Stick to the  **DRY**  (Don’t Repeat Yourself) principle refactor duplicate code into reusable functions.

When you combine good refactoring with clean code principles, your projects become easier to maintain and scale. To dive deeper, explore this  [**guide to writing clean code**](https://clean-code-developer.com/).

## Conclusion

To sum up, by adopting these tools and practices, you can transform your Python projects into clean, maintainable, and professional-grade. Whether it’s managing dependencies with Poetry or automating tests with CI/CD, each step saves you time and headaches in the long run!

Thanks for reading, and I hope this guide helps you on your journey to building better Python projects! Feel free to reach out on  [LinkedIn](https://www.linkedin.com/in/tariqmassaoudi/)  if you have any questions or want to chat more.