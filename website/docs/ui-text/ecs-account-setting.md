---
sidebar_position: 3
sidebar_label: "Amazon ECS log driver mode"
---

# UI updates for Amazon ECS log driver mode account setting

A log driver captures container logs (input and output streams) and sends them to destinations configured by the customer. Amazon Elastic Container Service (ECS) customers can configure log drivers for their containers. One setting that customers can specify for log drivers on Amazon ECS is `mode`. The mode determines whether an application will be available if the delivery of logs from source to destination fails for some reason. Customers can specify the following values:

- `blocking` : Specifying this setting means the application may become unresponsive until the delivery of logs is restored, but this means no logs are lost.
- `non-blocking` : Specifying this setting means logs are stored in an intermediate buffer and the application continues functioning like normal. The buffer can only take so many logs and is like a glass of water that can overflow. After the buffer fills, any additional logs are lost.

In June 2025, Amazon ECS flipped the default value of `mode` from `blocking` to `non-blocking` to prioritize application availability by default and introduced a setting for customers to set a default at the account level. Customers can use the setting to potentially opt out of the `non-blocking` default if they need to.

For more information about Amazon ECS, see [What is Amazon ECS?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)

For more information about logging configurations, log drivers, and the account setting, see [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html).

## Documentation process

Putting together UI text for this feature was a subtask within the broader documentation project for the feature. I followed these steps:

1. After **establishing some understanding of `blocking` and `non-blocking` modes and why the Amazon ECS default was changing**, I **looked at UI screenshots in a Quip design document** to understand what's changing in the console.
2. I then **connected with the frontend engineer** who was handling UI updates for the launch and **provided feedback in the document and over Slack for what the text should be**.
3. Some fields have **Info** buttons that provide a panel of text with more information about the field and links to relevant API or developer documentation. The panels of text are called [**help panels**](https://cloudscape.design/components/help-panel/). I **created a help panel for the default log driver mode setting and provided information about the help panel to the engineer** so he could add it to the UI. The help panel provides some more information about the log driver mode setting, establishes that this setting will be the default for the account, and recommends the`non-blocking` over `blocking` as the default. We had an **asynchronous review over Slack with the tech lead and the product manager** for the launch to ensure that I captured the `blocking` and `non-blocking` settings accurately.

The UI changes were released successfully on launch day in June 2025.

## Portfolio sample

The changing of a default value meant providing customers a way to define their own default value at the account level, potentially opting out of the service-level default. This meant new fields needed to be added to the AWS management console for Amazon ECS.

**To view a PDF version of the fields and the help panel, see [log driver fields and help panel](img/account-setting.pdf).**

## Tools and technologies used

I used the following tools and technologies for these updates:

- **Quip** documents
- **Asana** for project management
- **XML** for authoring help panels
- **git** for version control for help panels
- **Slack** for async communication
