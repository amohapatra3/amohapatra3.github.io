---
sidebar_position: 1
sidebar_label: "Amazon ECS integration with Amazon EBS"
---

# Integration of Amazon ECS with Amazon EBS

Amazon Web Services (AWS) consists of 200+ products/services, and there are many integrations between services. I worked on documentation for a cross-service integration between Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Block Store (EBS) that allows customers to attach block storage to their containerized applications.

For more information about Amazon ECS, see [Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html). For more information about Amazon EBS, see [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html).

## Amazon EBS data volumes overview

Amazon EBS data volumes for Amazon ECS tasks are block storage devices that can be attached to container applications directly. EBS volumes are useful for data-intensive workloads and can be either persistent or ephemeral depending on configuration details. The ability to attach one EBS volume per ECS task was introduced in January 2024.

## Documentation process

I followed these basic steps for this project:

1. Identify what's changing with the product and why
2. Identify how the changes map with docs
3. Draft the changes
4. Validate the changes

With this being a cross-service launch, I had to work with stakeholders from the ECS and EBS teams.

The following is a more detailed overview of how I drafted developer guide documentation for this feature. Besides the developer guide, I left comments on **customer-facing error messages in Java source code** and **[worked on UI text](/docs/ui-text/ecs-ebs-integration-ui.md)**.

1. I started working on this feature in September 2023. To identify what's changing with Amazon ECS and why, I **read through a variety of documents**. The famous **Amazon [PR/FAQ](https://www.aboutamazon.com/news/workplace/an-insider-look-at-amazons-culture-and-processes) provided me a product perspective about block storage for ECS and helped me understand why this feature was needed**. Separately, the tech lead for this project reached out to me on Slack and added me to a project Slack channel featuring relevant ECS and EBS stakeholders. **I asked questions in the channel and searched the chat history for information**. A UX designer for ECS also reached out and shared UI prototypes on **Figma**.
2. I then **mapped the changes to the developer guide and made note of necessary API changes**. This was clearly a storage feature, so I **decided I had to create a chapter under 'storage' in the developer guide**. I **identified a couple new data types** that were being added to the APIs, which meant I'd need to update the [service definition parameter reference](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service_definition_parameters.html#sd-volumeConfigurations) . I **used the Figma UI mockups to figure out what UI procedures I needed to update**. The **Quip design documents and initial conversations with the tech lead** introduced me to a couple EBS quirks: ECS would create the volume for the customer, customers would need to define volumes during deployment/launch versus during task definition registration, and customers would need to specify a new type of AWS Identity and Access Management (IAM) role. I knew I had to account for these quirks with new content.
3. I then drafted my changes. I **used other storage chapters for reference, but I made tweaks to how content was organized to accomodate EBS volume quirks such as volume definition at launch**. The idea was to have a **conceptual overview at the top level**, followed by **reference content and deeper conceptual explorations**. I also made sure to **link to Amazon EBS documentation and use consistent language wherever possible**. The feature was an almost 1:1 mapping of EBS volumes for Amazon EC2 instances, so leaning on existing documentation for consistency made sense. I **created a page for the [new type of IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html)** that **has since been expanded on for new ECS features**.
4. My general approach for validating changes is a combination of **getting feedback from stakeholders** and **testing hands-on when possible**. In this case, I got feedback from the **ECS product manager, ECS tech lead, and principal engineers on the ECS and EBS teams** that helped me update my draft. I **added new information such as troubleshooting and volume performance based on bug bash findings, feedback, and discussions**. I also got early access to test the feature and tweak documentation based on my findings. After a couple rounds of feedback and tests, the documentation was launch-ready.

After following these steps, I was able to successfully publish Amazon ECS developer guide updates for this feature in January 2024. I continued making enhancements and updates to the EBS volumes documentation based on new functionality and feedback for the rest of my time at AWS.

## Portfolio sample

I was the primary writer responsible for developer guide documentation for EBS volumes. The developer guide documentation I wrote for Amazon EBS volumes can be found in a chapter in the Amazon ECS developer guide. **To view a web version of the documentation in the Amazon ECS developer guide, see [Use Amazon EBS volumes with Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html).**
**To view a PDF version of the documentation, see [PDF](img/ecs-storage-and-ebs.pdf).**

:::note

- The PDF version is a point-in-time snapshot of docs from October 2025 when I last owned ECS documentation. The web version is the most up-to-date. There may be differences between the PDF and web versions.
- There were more updates made across the developer guide, but this chapter is the main documentation for the feature.

:::

## Tools and technologies used

I used the following tools and technologies for these updates:

- **Quip** documents
- **Asana** for project management
- Reviewed code written in **Java** to provide feedback for error messages and create troubleshooting content based on error messages
- **XML** for authoring
- **Oxygen** and **VSCode** as authoring environments
- **git** for version control
- **Slack** for async communication
- **AWS CLI** and the **AWS management console** for testing the feature
- **Figma** for reviewing UI mockups and commenting UI text suggestions
