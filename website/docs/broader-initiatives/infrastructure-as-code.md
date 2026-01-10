---
sidebar_position: 4
sidebar_label: Infrastructure as Code
---

# Expanding Infrastructure as Code content for Amazon ECS

Infrastrtucture as Code (IaC) is a construct that allows customers to manage entire cloud infrastructures using templates. To make updates to their resources, customers can update lines of code in templates instead of relying on manual processes. For more information about Infrastructure as Code, see [What is Infrastructure as Code?](https://aws.amazon.com/what-is/iac/)

One of the IaC solutions Amazon Web Services (AWS) provides is AWS CloudFormation. CloudFormation allows customers to create templates using JSON or YAML files that they can update to update their AWS resources. Customers can use templates to create individual resources or entire applications. For more information, see [What is AWS CloudFormation?](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

## Challenge

In 2025, the Amazon Elastic Container Service (ECS) documentation team learned that Amazon ECS customers are big users of IaC solutions such as AWS CloudFormation and Terraform. During my internship in 2022, I worked on creating a couple basic CloudFormation templates and a CLI procedure in the Amazon ECS developer guide. Based on this new data, we figured it would be good to expand the CloudFormation content in our developer guide. I decided to take this project on as a continuation of the work I'd done in 2022.

## Action

In response to this customer data, I decided that creating a top-level chapter focused on CloudFormation was a good idea. That way, we could have a consolidated resource for information that was previously spread out across the AWS CloudFormation template reference and non-documentation websites. We previously had only one page dedicated to CloudFormation under 'getting started', but now we'd have a chapter with the following components:

- At the top level, a conceptual overview of CloudFormation
- The following child topics:
  - A tutorial for creating Amazon ECS resources with CloudFormation using the AWS Management Console
  - A tutorial for creating Amazon ECS resources with CloudFormation using the AWS CLI
  - A template reference with example templates in JSON and YAML grouped by Amazon ECS resource type

I took the following steps in Q1 and Q2 2025 to create the chapter:

1. To put together the top level conceptual topic, I **took content from the existing CloudFormation page in the developer guide and from the CloudFormation developer guide**. I **added links to relevant AWS guides such as the CloudFormation developer guide and the AWS Infrastructure Composer developer guide**.
2. I then worked on **creating CloudFormation templates**. I used the **AWS Management Console for Infrastructure Composer** for **converting the templates I created from YAML to JSON and back**. Creating basic templates to create individual Amazon ECS resources such as task definitions, services, and clusters was fairly straightforward. I also collected a couple **complex application templates from the CloudFormation template reference and from non-AWS websites that were provided by solutions architects (SAs)**. For the console and CLI tutorials, however, I wanted to create a **new application template**. Something simpler than the templates created by SAs but more complex than single-resource templates. I took the following steps to create that template:
   1. I needed to **identify what a useful application template would be**. I **consulted an ECS product manager who suggested creating a template for a load-balanced web application**. In addition to **ECS resources such as task definitions, services, and clusters**, this template would need to include other AWS resources such as **VPCs, subnets, IAM roles, security groups, load balancers, and auto scaling policies**.
   2. With other projects to work on, manually creating a template with all these resources was going to take more time than I had. I decided to **lean on generative AI** to speed things up. I decided to first use the AWS Management Console to create all the required resources for a load-balanced web application in my AWS account. Using the console was quicker than creating a complex template from scratch. After creating the application resources, I used **natural language prompts with Amazon Q CLI to generate a template using these resources**.
      :::info
      Amazon Q CLI was originally an AWS product that provided a CLI experience for Amazon Q Developer. Q CLI allowed customers to build and extend AWS applications using natural language prompts. Amazon Q CLI is now part of Kiro CLI. For more information about Amazon Q Developer and Kiro CLI, see [What is Amazon Q Developer?](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html) and [Kiro CLI](https://kiro.dev/docs/cli/).
      :::
      **Q CLI could access resources in my AWS account. Using prompts asking for a load-balanced web app based on the resources I created with the console, I was able to generate a first draft YAML template for the application.**
   3. After generating the template, I **tested it using the AWS CLI and AWS Management Console for CloudFormation**. I **identified and fixed issues until I got a fully functional template**. After getting the template to work, I **consulted a solutions architect for feedback on AWS best practices**. After receiving and addressing feedback, I had a template that could be published.
3. After getting templates ready, I **used Amazon Q CLI and prompts to update some of the templates to use AWS-specific parameters instead of hardcoding dummy values**. When using the AWS Management Console to deploy templates with AWS-specific parameters, customers can **choose from existing resources in their accounts to pass as parameters instead of having to copy and paste resource names and IDs**. For more information, see [CloudFormation best practices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#parmtypes) in the _AWS CloudFormation developer guide_.
4. After finalizing templates and creating a reference page, I worked on creating the tutorials for console and AWS CLI. I was able to **reuse some existing procedure content** for this. I also leaned on **linking to the CloudFormation developer guide wherever possible, especially for the console tutorial**. The AWS Management Console is often subject to change, so **to avoid having hardcoded steps that could become stale, I chose to link to the CloudFormation guide**. The CloudFormation developer guide is the source of truth for CloudFormation and will always be the first to be updated if the UI changes.

## Result

A chapter in the Amazon ECS developer guide that brings together previously scattered content for customers that use AWS CloudFormation for their IaC needs. The chapter also serves as a template that can be included in other AWS guides or extended to include content for third-party IaC providers such as Terraform and Pulumi.

## Portfolio sample

**To view the AWS CloudFormation chapter in the Amazon ECS developer guide, see [Amazon ECS with AWS CloudFormation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-with-cloudformation.html).**

**To view the chapter in PDF form, see [PDF](img/ecs-cfn-dg.pdf).**

:::note
The PDF version is a point-in-time snapshot from when I last owned Amazon ECS documentation. The web version is the most up-to-date. There may be differences between the PDF and web versions.
:::

## Tools and technologies used

I used the following tools and technologies to create the AWS CloudFormation chapter:

- **Amazon Q CLI** (now **Kiro CLI**) with **Claude** models for generating and updating CloudFormation templates
- **JSON** and **YAML** for creating templates
- **XML** for writing documentation
- **Oxygen** and **VSCode** as authoring environments
- **git** for version control
- **Slack** for collaboration with the product manager and solutions architect
- **AWS CLI** and the **AWS Management Console** for CloudFormation for testing templates and creating resources
- **AWS Management Console** for **Infrastructure Composer** to convert between **JSON** and **YAML**
