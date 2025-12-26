---
sidebar_position: 3
sidebar_label: Scenario-based content refactoring
---

# Refactoring AWS developer guide content to be more 'scenario-based'

AWS developer guides are large, and with regular product releases, writers can neglect information architecture. When an organizational goal was announced in 2024 involving improvements to information architecture, I was excited to contribute. I figured I'd learn a lot as an early career writer.

## Challenge

In 2024, the content strategy team within the AWS documentation org identified recurring issues based on customer feedback across several AWS developer guides. Topics were long and not very easy to read. Pages contained multiple types of content at once. Titles were not as specific as they could be.

To counter this issue, the team came up with a goal for almost all AWS developer guides to be refactored by writers to focus on 'scenarios' or 'jobs-to-be-done'. Content was to be thought of in the following categories:

- Concept
- Task
- Reference
- Troubleshooting

In most cases, each page had to fit into only one of these categories based on scenarios. One long page for a product feature could be split into a conceptual overview and multiple tasks based on what a customer would do in a single sitting. Each individual page also had to have an appropriate title, adequate cross-linking, and a couple introductory sentences.

For example, see [Service Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html) in the _AWS App Mesh developer guide_. App Mesh was excluded from this project because the product will be deprecated in the near future, as indicated by the note on every page. The **Service Meshes** page isn't structured with an emphasis on customer scenarios. Unless a customer is following a tutorial, they'd likely not create and delete a mesh in one sitting. Creation and deletion can be considered separate scenarios that, when placed on a single page, can be overwhelming. The page fits both conceptual and task categories.

A scenario-based refactoring of the content would involve trying to split the page into three pages:

- a conceptual overview of meshes as a parent page
  - a standalone task page for creating a mesh as a child page
  - a standalone task page for deleting a mesh as a child page

In addition to refactoring content to be scenario-based, we were also supposed to remove pages that contained redundant content and ensure content was where it was meant to be.

This is the sort of refactoring I worked on in 2024.

## Action

I worked on the refactoring goal in three stages:

1. I first participated in the collaborative refactoring of Amazon ECS content. This project was spearheaded by my mentor, who was the lead writer for Amazon ECS. My refactoring efforts for ECS were tightly scoped. While refactoring content in the ECS guide, I **updated a page that was previously only a list of links to be more useful**.
   ::: info
   For an example of what a 'list of links' landing page looks like, see [Concepts](https://docs.aws.amazon.com/app-mesh/latest/userguide/concepts.html) in the _AWS App Mesh developer guide_.
   :::
   When faced with a similar landing page for the Amazon ECS storage chapter, I **worked with a content strategist to identify approaches to make the page more useful**. I **created a table that described each storage option and its use cases**.
2. After contributing to the Amazon ECS effort, I started working on refactoring the Cloud Map developer guide. This was **within weeks of being handed ownership of Cloud Map documentation**. Being the sole owner of Cloud Map docs, I was responsible for refactoring the entire guide. I **converted pages for namespaces, services, and service instances** from being structured similar to **Service Meshes** into top-level chapters. I **removed redundant content**. I also **identified 'Monitoring' content that was misplaced under the 'Security' chapter** and **relocated the topic to an otherwise empty 'Monitoring' chapter**.
3. Having worked on refactoring content for two developer guides, I felt confident enough to provide peer feedback on refactoring projects. My mentor was putting together **a group of experienced volunteer writers** to **review hundreds of developer guides for basic compliance with the goal**. Despite my relative inexperience at the time, I **joined the group and reviewed about 20 developer guides**. **When multiple pages in a guide flouted the refactoring principles, I let the owner of the guide know**. We operated on an honor system, so there was no enforcement of feedback implementation. Instead, it was about trust. I provided feedback to the owner of Amazon Elastic Block Storage (EBS) documentation for how they'd structured [EBS snapshot content](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshot-lifecycle.html). A couple days later, they sent me a link to a code commit with fixes based on my feedback. I also **flagged issues with redirects after writers deleted redundant pages**.

## Result

The results of my involvement in the goal were the following:

- My involvement in reviewing guides for compliance and providing feedback to significantly more experienced peers **helped the documentation organization meet its target**. I also made a **tangible impact on documentation that I didn't own**. Stakeholders that had access to org-level data reported improvements, as seen in this **[AWS blog post by the Director of AWS docs](https://aws.amazon.com/blogs/aws-insights/aws-documentation-update-progress-challenges-and-whats-next-for-2025/)**.
- The refactoring of Cloud Map content saw improvements in customer metrics. I had access to a metric directly proportional to customer 'thumbs downs' and inversely proportional to page views. The higher the metric value, the worse a page is supposedly doing. When looking at data for the misplaced 'Monitoring' content, the **metric value for the content and the standalone 'Monitoring' page was close to 10**. After the relocation of content from 'Security' to under the standalons 'Monitoring' page, the **metric value dropped to zero**, the lowest it can be. Some of this could be attributed to shifts in page views, but the relocation of content almost certainly played a part.
- The collective refactoring effort for Amazon ECS saw a **16% improvement in customer metrics (reduced feedback tickets and thumbs down/page views metrics)**. We also **received positive external feedback in the form of rare 'kudos' tickets from customers**, and **positive internal feedback from the [Director of Engineering for Amazon ECS](https://www.linkedin.com/posts/mats-lann%C3%A9r-7a5b1b1_what-is-amazon-elastic-container-service-activity-7237305270643650563-Gs0_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACAPA_YBWUIGMo9h5P6rQiXUcDcrEHa53zw)**.

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
