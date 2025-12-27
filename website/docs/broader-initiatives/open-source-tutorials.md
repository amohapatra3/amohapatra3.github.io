---
sidebar_position: 2
sidebar_label: "Open-source AWS CLI tutorials"
---

# Working collaboratively on an open-source AWS CLI tutorials repository

When I returned to AWS as a full-time technical writer in 2023, I worked on updating tutorials to reacquaint myself with Amazon ECS. Like me, customers rely on tutorials to get started with AWS services. In 2025, when I learned that there was an organizational goal involving tutorials, I knew I had to get involved.

## Challenge

The documentation for some AWS services included tutorials for getting started using the AWS Management Console but not using the AWS CLI. For customers that couldn't use Graphical User Interfaces (GUIs), the lack of CLI tutorials presented accessibility issues. Additionally, with the advent of generative AI, customers had begun engaging with documentation more interactively. We wondered if there was a way for customers to create tutorials with generative AI using consistent instructions. From a tech writing perspective, consistent instructions would allow us to create and maintain tutorials at scale.

We — a group of five technical writers — came together to work on creating CLI tutorials at scale from existing documemtation and providing customers a set of tutorials and instructions for customers to create their own.

## Action

The project was led by a principal technical writer who set the vision for the project and communicated with leadership and other stakeholders. The rest of us took on various roles. My focus was on testing and improving the following:

- The prompts that we used for generating tutorials
- The tools that we used for the project
- The tutorials and scripts we generated using prompts

I took the following steps in contributing to the project:

1. The project was split into two phases: creating and incorporating a batch of CLI tutorials into a subset of developer guides, and creating a comprehensive open-source GitHub repository with tutorials and scripts. The first phase was a way for us to get to a set of working instructions. I tried generating tutorials using Amazon Q CLI by pointing to existing AWS Cloud Map docs without any Model Context Protocol (MCP). It didn't work.
   :::info
   - Amazon Q CLI (now Kiro CLI) is an AWS product that provides a CLI experience for customers to use Anthropic's Claude models to create AWS resources with natural language prompts, among other things. For more information about Amazon Q CLI, see [Using Amazon Q Developer on the command line](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line.html) and [Kiro Chat](https://kiro.dev/docs/cli/chat/).
   - MCP servers expose AI models to specific capabilities and provide access to data. For more information about MCP servers, see [Understanding MCP servers](https://modelcontextprotocol.io/docs/learn/server-concepts).
     :::
2. After setting up MCP servers such as the [AWS Documentation MCP server](https://awslabs.github.io/mcp/servers/aws-documentation-mcp-server), I found more success generating steps from existing documentation. We still needed a more structured approach. The principal writer created a tutorial for Amazon Lightsail with a set of prompts that provided some structure. The rest of us stress-tested these prompts by trying to create tutorials. Using the prompts, I **created three tutorials and accompanying scripts for AWS Cloud Map and AWS Batch**. I also flagged issues with the prompts that were contributing to hallucinations.
3. With tutorials created and issues flagged, the next step was to incorporate tutorials into a subset of developer guides. I **added tutorials to AWS Cloud Map and Amazon ECS developer guides**, and I **convinced the writer for AWS Batch to do the same**. The generated tutorials were in markdown, but the source for developer guides was in XML. The principal writer created a Python script for converting from markdown to XML. I **tested the script** and **made some adjustments to the code** to ensure that the script handled special characters — `&`, `>`, `<`, for example — properly within `<code>` and `<programlisting>` blocks. Within code blocks, these characters had to be written using entities such as `&amp;`, `&lt;`, and `&gt;`.
4. After the five of us successfully integrated about 15 tutorials in various AWS developer guides, phase one was done. We then worked towards generating more tutorials and testing them for phase two. Between phases one and two, I created and tested **10 tutorials and accompanying shell scripts**, working with a variety of AWS services such as **Amazon EBS, AWS Step Functions, and Amazon ECR**. I then **created and approved pull requests to add tutorials to the GitHub repository for the project**.

## Result

I iterated on and helped create a process for creating AWS CLI tutorials at scale. We created an open-source repository of **about 70 tutorials for 64 AWS services**. Customers now have an interactive getting started experience where they can provide links to documentation and generate a tutorial and script. They can even add to the repository. For customers that rely on CLIs, this project is an accessibility boost.

From a writer's perspective, we had a set of prompts that could be used to refresh or create tutorials based on existing documentation. Additionally, [the work I'd done on CLI and SDK examples](cli-sdk-examples.md) prior to this project made generating tutorials for Amazon ECS and AWS Cloud Map easier than for other AWS services. **Recognizing the importance of complete example coverage in documentation, I took inspiration from tutorial generation instructions to create instructions for generating draft CLI and SDK reference examples**.

## Portfolio samples

The following are samples for phase one and two of the project:

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
