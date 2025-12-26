---
sidebar_position: 1
sidebar_label: "Amazon ECS integration with Amazon EBS"
---

# UI updates for Amazon ECS integration with Amazon EBS

Amazon Web Services (AWS) consists of 200+ products/services, which means there's many integrations between services. I worked on documentation for a cross-service integration between Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Block Store (EBS) that allows customers to attach block storage to their containerized applications.

For more information about Amazon ECS, see [Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html). For more information about Amazon EBS, see [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html).

## Amazon EBS data volumes overview

Amazon EBS data volumes for Amazon ECS tasks are block storage devices that can be attached to container applications directly. EBS volumes are useful for data-intensive workloads and can be either persistent or ephemeral depending on configuration details (as of December 2025). The ability to attach one EBS volume per ECS task was introduced in January 2024.

## Documentation process

Putting together UI text for this feature was a subtask within the broader documentation project for the feature. I followed these steps:

1. After **establishing some understanding of what Amazon EBS volumes are and how they relate to Amazon ECS**, I **looked at UI mockups that the UX designer for the project had shared with me**. I **added comments for what UI text should be for each field, adhering to the internal style guide**. Many fields were 1:1 mappings of EBS volumes for EC2 instances, so it made sense for the UI text to be consistent across the ECS and EC2 consoles.
2. I **collaborated with a frontend engineer on the ECS team** to decide what fields needed help panels and to provide him help panels for those fields. Once again, it made sense for language in the help panels to be consistent with help panels for the EC2 console. The engineer **added me to UI change code reviews (CRs)**, and I **left comments on TypeScript source code CRs suggesting updates to UI strings in the code**.
3. Due to the scale of UI updates for this launch, there were a couple **formal reviews done by UX design leadership** to sign-off the changes. Reviewers provided feedback for the UX designer, the frontend engineer, and me. Feedback for me was focused on text. After all of us addressed our respective bits of feedback, the changes were signed off.

The UI changes were released on launch day in January 2024 and iterated on over the months. I contributed to these sporadic iterations for the rest of my time at AWS.

## Portfolio sample

The introduction of Amazon EBS volumes for Amazon ECS tasks meant that there were many new forms and fields on the AWS Management Console for Amazon ECS. One such form was the volume configuration form available to customers if they provided a volume in their task definition and deferred configuration to the deployment/launch phase. The fields in the form have **Info** buttons that provide more information about a field and links to API or developer documentation. These panels of text are called **help panels**.

**To view a PDF version of the form and a couple expanded help panels, see [PDF](img/ebs-ui.pdf).**

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
