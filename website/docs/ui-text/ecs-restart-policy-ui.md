---
sidebar_position: 4
sidebar_label: "Amazon ECS restart policy UI text"
---

# Explaining Amazon ECS restart policies in the user interface

A restart policy is used by Amazon Elastic Container Service (ECS) to determine how to handle an exited container. Enabling a restart policy means Amazon ECS will try to restart a container when it exits, as long as the following conditions are met:

- The container runs for a specified period of time (in seconds)
- The exit code for the stopped container isn't one of the specified exit codes that ECS must ignore

The ability to specify a time period ensures ECS won't keep trying to restart a container infinitely in the event of a significant failure. The ability to specify exit codes ensures ECS won't restart a container in the event of an expected exit.

For more information about Amazon ECS, see [What is Amazon ECS?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)

For more information about restart policies for ECS, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html).

## Documentation process

Putting together UI text for this feature was a subtask within the broader documentation project for the feature. I followed these steps:

1. After **establishing some understanding of what restart policies are and how they relate to Amazon ECS**, I **looked at UI screenshots in a Quip design document** to understand what's changing in the console.
2. I then **connected with the frontend engineer** who was handling UI updates for the launch and **provided feedback in the document and over Slack for what the text should be**.
3. Some fields have **Info** buttons that provide a panel of text with more information about a field and links to relevant API or developer documentation. The panels of text are called [**help panels**](https://cloudscape.design/components/help-panel/). I **created a help panel for the restart policy field and provided information about the help panel to the engineer** so he could add it to the UI.

The UI changes were released successfully on launch day in August 2024.

## Portfolio sample

The introduction of restart policies meant new fields needed to be added to the AWS management console for Amazon ECS.

**To view a PDF version of the fields and a couple expanded help panels, see [restart policies fields and help panel](img/restart-policy-ui.pdf).**

## Tools and technologies used

I used the following tools and technologies for these updates:

- **Quip** documents
- **Asana** for project management
- **XML** for authoring help panels
- **git** for version control for help panels
- **Slack** for async communication
