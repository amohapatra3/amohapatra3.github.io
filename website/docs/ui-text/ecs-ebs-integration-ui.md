---
sidebar_position: 1
sidebar_label: "Amazon ECS integration with Amazon EBS"
---

# UI updates for Amazon ECS integration with Amazon EBS

Amazon Web Services (AWS) consists of 200+ products/services, and there are many integrations between services. I worked on documentation for a cross-service integration between Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Block Store (EBS) that allows customers to attach block storage to their containerized applications.

For more information about Amazon ECS, see [What is Amazon ECS?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) For more information about Amazon EBS, see [What is Amazon EBS?](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

## Amazon EBS data volumes overview

Amazon EBS data volumes for Amazon ECS tasks are block storage devices that can be attached to container applications directly. EBS volumes are useful for data-intensive workloads and can be either persistent or ephemeral depending on configuration details. The ability to attach one EBS volume per ECS task was introduced in January 2024.

## Documentation process

Putting together UI text for this feature was a subtask within the [broader documentation project](/docs/dev-guide/ecs-ebs-integration.md) for the feature. I followed these steps:

1. After **establishing some understanding of what Amazon EBS volumes are and how they relate to Amazon ECS**, I **looked at UI mockups that the UX designer for the project had shared with me**. I **added comments for what UI text should be for each field, adhering to the internal style guide**. Many fields were 1:1 mappings of EBS volumes for Amazon EC2 instances, so it made sense for the UI text to be consistent across the ECS and EC2 consoles.
2. Some fields have an **Info** button that provides a panel of text with more information about the field and links to relevant API or developer documentation. These panels of text are called **[help panels](https://cloudscape.design/components/help-panel/)**. I **collaborated with a frontend engineer on the ECS team** to decide what fields needed help panels and to provide him help panels for those fields. Once again, it made sense for language in the help panels to be consistent with help panels for the EC2 console. The engineer **added me to UI change code reviews (CRs)**, and I **left comments on TypeScript source code CRs suggesting updates to UI strings in the code**.
3. Due to the scale of UI updates for this launch, there were a couple **formal reviews done by UX design leadership** to sign-off the changes. Reviewers provided feedback for the UX designer, the frontend engineer, and me. Feedback for me was focused on text. After all of us addressed our respective bits of feedback, the changes were signed off.

The UI changes were released on launch day in January 2024. I contributed to sporadic updates to UI text for the rest of my time at AWS.

## Portfolio sample

The introduction of Amazon EBS volumes for Amazon ECS tasks meant that many new forms and fields were added to the AWS Management Console for Amazon ECS. One such form is the volume configuration form available to customers if they provide a volume in their task definition and defer volume configuration to the deployment/launch phase.

**To view a PDF version of the volume configuration form and a couple help panels, see [volume configuration fields and help panels](img/ebs-ui.pdf).**

## Tools and technologies used

I used the following tools and technologies for these updates:

- **Quip** documents
- **Asana** for project management
- Reviewed code written in **TypeScript** to provide feedback for UI text
- **Code reviews** for reviewing UI strings in frontend code
- **XML** for authoring
- **git** for version control
- **Slack** for async communication
- **Figma** for reviewing UI mockups and commenting UI text suggestions
