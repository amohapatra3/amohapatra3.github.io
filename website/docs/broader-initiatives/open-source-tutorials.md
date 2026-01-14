---
sidebar_position: 2
sidebar_label: "Open-source AWS CLI tutorials"
---

# Collaboratively developing an open-source AWS CLI tutorials repository as an accessible onboarding resource

When I returned to AWS as a full-time technical writer in 2023, I worked on updating tutorials to reacquaint myself with Amazon ECS. Like me, customers rely on tutorials to get started with AWS services. In 2025, when I learned that there was an opportunity to work on a project involving tutorials, I knew I had to get involved.

## Challenge

In 2024, the documentation for some AWS services included tutorials for getting started using the AWS Management Console but did not include tutorials for the AWS Command Line Interface (CLI). For customers that couldn't use Graphical User Interfaces (GUIs), the lack of CLI tutorials presented accessibility issues. Additionally, with the advent of generative AI, customers had begun engaging with documentation interactively. We wondered if there was a way for customers to create tutorials from existing documentation with generative AI using consistent instructions. From a tech writing perspective, consistent instructions would allow us to create and maintain tutorials at scale.

We — a group of five technical writers — came together in 2025 to create a set of prompts and generate CLI tutorials and scripts at scale from existing documemtation. We then made the tutorials, scripts, and prompts available in an open-source GitHub repository. That way, customers can get started with AWS using the tutorials and scripts. They can also use the prompts with generative AI to create their own tutorials and scripts.

## Action

The project was led by a principal technical writer who set the vision and communicated with leadership and other stakeholders. The rest of us took on various roles. My focus was on testing and improving the following:

- The prompts that we used for generating tutorials
- The tools that we used for the project
- The tutorials and scripts we generated using the prompts

I took the following steps in contributing to the project:

1. The first phase of the project involved **creating prompts, generating a batch of CLI tutorials, and incorporating the tutorials into a subset of developer guides**. This phase was a way for us to get to a set of working instructions. I first tried generating tutorials using Amazon Q CLI without any Model Context Protocol (MCP) servers by pointing to AWS Cloud Map documentation. It became clear that the model couldn't read the documentation. This didn't work.
   :::info
   - Amazon Q CLI was originally an AWS product that provided a CLI experience for Amazon Q Developer. Q CLI allowed customers to build and extend AWS applications using natural language prompts. Amazon Q CLI is now part of Kiro CLI. For more information about Amazon Q Developer and Kiro CLI, see [What is Amazon Q Developer?](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html) and [Kiro CLI](https://kiro.dev/docs/cli/).
   - MCP servers expose AI models to specific capabilities and provide access to data. For more information about MCP servers, see [Understanding MCP servers](https://modelcontextprotocol.io/docs/learn/server-concepts).
     :::
2. After setting up MCP servers such as the [AWS Documentation MCP server](https://awslabs.github.io/mcp/servers/aws-documentation-mcp-server), I found more success generating steps from existing documentation. We still needed a more structured approach. The principal writer created a tutorial for Amazon Lightsail with a set of prompts that provided some structure. The rest of us stress-tested these prompts by trying to create more tutorials. Using the prompts, I **created three tutorials and accompanying scripts for AWS Cloud Map and AWS Batch**. I also flagged issues with the prompts that were contributing to hallucinations.
3. After refining the prompts, the five of us created a first set of about 15 tutorials. The next step was to incorporate these tutorials into developer guides. I **added tutorials to AWS Cloud Map and Amazon ECS developer guides**, and I **convinced the writer for AWS Batch to do the same**. The generated tutorials were in markdown, but the source for developer guides was in XML. The principal writer created a Python script for converting from markdown to XML. I **tested the script** and **made some adjustments to the code** to ensure that the script handled special characters — `&`, `>`, `<`, for example — properly within `<code>` and `<programlisting>` blocks. Within code blocks, these characters had to be written using entities such as `&amp;`, `&lt;`, and `&gt;`.
4. After the five of us successfully integrated tutorials in various AWS developer guides, phase one was done. We then worked towards generating more tutorials and testing them before creating a GitHub repository. In total, I created and tested **10 tutorials and accompanying shell scripts**, working with a variety of AWS services such as **Amazon EBS, AWS Step Functions, and Amazon ECR**. After we completed tests and another writer created the GitHub repository, I **created and approved pull requests to add tutorials to the repository**.

## Result

I iterated on and helped create a process for creating AWS CLI tutorials at scale. We created an open-source repository of **about 70 tutorials for 64 AWS services**. Customers now have an interactive getting started experience where they can provide links to documentation and generate a tutorial and script. They can even add to the repository. For customers that rely on CLIs, the repository and the tutorials added to developer guides present an accessibility boost.

From a writer's perspective, we have a set of prompts that can be used to refresh or create tutorials based on existing documentation. The prompts can be improved and adapted for other use cases. For example, [the work I'd done on CLI and SDK examples](cli-sdk-examples.md) prior to this project made generating tutorials for Amazon ECS and AWS Cloud Map easier than for other AWS services. **Recognizing the importance of complete example coverage in documentation, I took inspiration from the open-source tutorial generation instructions to create closed-source instructions for generating draft CLI and SDK reference examples**. The prompts I created provided me a productivity boost and sped up the creation of CLI and SDK reference examples.

## Portfolio samples

The following are samples from of the project:

### GitHub repository

**To view the GitHub repository of tutorials, see [aws-samples/sample-developer-tutorials](https://github.com/aws-samples/sample-developer-tutorials)**.

### Integrated tutorial in Amazon ECS developer guide

**To view an example of a generated and tested tutorial incorporated in documentation, see [Creating an Amazon ECS task for EC2 with the AWS CLI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_AWSCLI_EC2.html)**.

## Tools and technologies used

I used the following tools and technologies for this project:

- **Amazon Q CLI** (now **Kiro CLI**) with **Claude** models and the **AWS documentation MCP server** for generating and testing tutorials and scripts
- Updated a script written in **Python**
- **XML** and **markdown** for writing tutorials
- Tested **shell scripts**
- **Oxygen** and **VSCode** as authoring environments
- **git** for version control
- **GitHub** for adding tutorials to the repository
- **Slack** for collaboration with fellow writers
- **AWS CLI** for testing
- **Quip** documents for collaboration
