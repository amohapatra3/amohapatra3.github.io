---
sidebar_position: 3
sidebar_label: Scenario-based content refactoring
---

# Refactoring AWS developer guide content to be more 'scenario-based'

Amazon Web Services (AWS) developer guides are large, and with regular product releases, writers can neglect information architecture. When a project was announced in 2024 involving improvements to information architecture, I was excited to contribute. I figured I'd learn a lot as an early career writer.

## Challenge

In 2024, the content strategy team within the AWS documentation organization identified recurring issues based on customer feedback across several AWS developer guides. Topics were long and not very easy to read. Titles were not as specific as they could be.

To counter this issue, the team came up with a goal for almost all AWS developer guides to be refactored by writers to focus on 'scenarios' or 'jobs-to-be-done'. Content was to be thought of in the following categories:

- Concept
- Task
- Reference
- Troubleshooting
- Best practices

In most cases, each topic had to fit into only one of these categories. A long page for a product feature that previously included procedures and a conceptual overview would need to be split into a conceptual topic and separate topics for each task based on what a customer would do in a single session. The newly formed pages had to have an appropriate title, adequate cross-linking, and a couple introductory sentences. That way, each page could stand alone. In addition to refactoring content to fit these categories, we were also supposed to remove pages that contained redundant content and ensure content was where it was meant to be.

For an example of a page with issues, see [Service Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html) in the _AWS App Mesh developer guide_. App Mesh was excluded from this project because the product will be deprecated in the near future, as indicated by the note on every page. The **Service Meshes** page isn't structured with an emphasis on customer scenarios. Unless a customer is following a tutorial, they'd likely not create and delete a mesh in one session. Creation and deletion can be considered separate scenarios that, when placed on a single page, can be overwhelming.

A scenario-based refactoring of the content would involve trying to split the page into three pages:

- a conceptual overview of meshes as a parent page
  - a standalone task page for creating a mesh as a child page
  - a standalone task page for deleting a mesh as a child page

This is the sort of refactoring I did in 2024.

## Action

I worked on the refactoring goal in three stages:

1. I first participated in the collaborative refactoring of Amazon ECS content. This project was spearheaded by my mentor, the lead writer for Amazon ECS. My refactoring efforts for ECS were tightly scoped. While refactoring content in the ECS guide, I **updated a page in the storage chapter that was previously only a list of links to be more useful**.
   :::info
   For an example of what a 'list of links' landing page looks like, see [Concepts](https://docs.aws.amazon.com/app-mesh/latest/userguide/concepts.html) in the _AWS App Mesh developer guide_.
   :::
   I **worked with a content strategist to identify approaches to make the page more useful**. I **created a table that described each storage option and its use cases**.
2. After contributing to the Amazon ECS effort, I started working on refactoring the Cloud Map developer guide. This was **within weeks of being handed ownership of Cloud Map documentation**. Being the sole owner of Cloud Map docs, I was responsible for refactoring the entire guide. I **converted pages for namespaces, services, and service instances** from being structured similar to App Mesh **Service Meshes** into top-level chapters. I **removed redundant content**. I also **identified 'Monitoring' content that was misplaced under the 'Security' chapter** and **relocated the topic under a standalone 'Monitoring' topic that otherwise had no child topics**. By making these changes, I was able to complete refactoring Cloud Map documentation **two months ahead of schedule**.
3. Having now worked on refactoring content for two developer guides, I felt confident enough to provide peers feedback on their refactoring efforts. My mentor was putting together **a group of experienced volunteer writers** to **review hundreds of developer guides for basic compliance with this scenario-based model**. Despite my relative inexperience at the time, I **joined the group and reviewed about 20 developer guides**. **When multiple pages in a guide flouted the model, I let the owner of the guide know**. We operated on an honor system, so there was no enforcement of feedback implementation. Instead, it was about trust. I provided feedback to the senior writer who owned Amazon Elastic Block Storage (EBS) documentation for how they'd structured [EBS snapshot content](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshot-lifecycle.html). A couple days later, they sent me a link to a code commit with fixes based on my feedback. I had a similar impact on AWS Infrastructure Composer documentation. In addition to suggesting content updates, I also **flagged issues with redirects and content display after writers deleted redundant pages**.

## Result

The results of my involvement in the goal were the following:

- My involvement in reviewing guides for compliance and providing feedback to significantly more experienced peers helped me earn the trust of other writers and make a **tangible impact on documentation that I didn't own**. Stakeholders that had access to org-level data reported improvements, as seen in this **[AWS blog post by the Director of AWS documentation](https://aws.amazon.com/blogs/aws-insights/aws-documentation-update-progress-challenges-and-whats-next-for-2025/)**.
- The refactoring of Cloud Map content resulted in improvements in customer metrics. I had access to a metric directly proportional to customer 'thumbs downs' and inversely proportional to page views. The higher the metric value, the worse a page supposedly is. When looking at data for the misplaced 'Monitoring' content, the **value of the metric for the content and the standalone 'Monitoring' page was close to 10.0**. After the relocation of content from under 'Security' to under the standalons 'Monitoring' page, the **metric value dropped to zero**, the lowest it can be. Some of this could be attributed to shifts in page views, but the relocation of content almost certainly played a part.
- The collective refactoring effort for Amazon ECS saw a **16% improvement in customer metrics (reduced feedback tickets and thumbs down/page views metrics)**. We also **received positive feedback in the form of rare 'kudos' tickets from customers**, and **a post on LinkedIn from the [Director of Engineering for Amazon ECS](https://www.linkedin.com/posts/mats-lann%C3%A9r-7a5b1b1_what-is-amazon-elastic-container-service-activity-7237305270643650563-Gs0_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAPA_YBWUIGMo9h5P6rQiXUcDcrEHa53zw)**.

## Portfolio samples

### Amazon ECS storage landing page

**To view the ECS storage landing page that describes each storage option available to customers, see [Storage options for Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html).**

### AWS Cloud Map services chapter

**To see what refactored Cloud Map service content looks like, see [AWS Cloud Map services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html).**

### AWS Cloud Map monitoring chapter

**To see what relocated Cloud Map monitoring content looks like, see [Log AWS Cloud Map APIs using AWS CloudTrail](https://docs.aws.amazon.com/cloud-map/latest/dg/logging-using-cloudtrail.html).**

## Tools and technologies used

I used the following tools, standards, and technologies for this project:

- **XML** for authoring and refactoring docs
- **Oxygen** as the authoring environment
- The princples behind this project overlap with **DITA**
