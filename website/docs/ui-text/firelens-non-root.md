---
sidebar_position: 4
sidebar_label: "FireLens non-root user"
---

# Error messages for specifying a FireLens container to run as a non-root user in Amazon ECS

FireLens for Amazon ECS allows customers to route application logs to AWS services such as Amazon CloudWatch or to external AWS partner services. Using FireLens for Amazon ECS involves specifying a container in the task definition. Until October 2025, the FireLens container had to run as a root user, which posed security risks. In October 2025, running the FireLens container as a non-root user was supported. The user had to be specified in one of the following formats:

- `uid`
- `uid:gid`
- `uid:group`

If customers didn't specify the user in one of these formats, they would see an error message. I was responsible for the wording of error messages associated with specifying a non-root user for the FireLens container.

For more information about Amazon ECS, see [What is Amazon ECS?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) For more information about FireLens for ECS, see [Send Amazon ECS logs to an AWS service or AWS Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).

## Documentation process

Putting together the error message for this feature was a subtask within the broader documentation project for the feature. I followed these steps:

1. After **establishing some understanding about why Amazon ECS would now support running the FireLens container as a non-root user**, I started working on developer guide updates and shared a draft. That's when the tech lead let me know about new error messages, and I asked to take a look.
2. To avoid me having to read thousands of lines of code, the tech lead shared a **Quip document** with **snippets of Java code** with the error messages. I consulted the **internal AWS style guide** and used it to guide my suggestions.
3. After some discussion, we settled on the wording for a variety of error messages, including the error surfaced when a customer specifies the user in the wrong format. The tech lead later shared a **code review (CR)** with the updated error messages. I approved the changes.

The error messages were released successfully on launch day in October 2025.

## Portfolio sample

**To view a PDF version of the error message for invalid users, see [invalid FireLens non-root user](img/firelens-non-root-error.pdf).**

## Tools and technologies used

I used the following tools and technologies for these updates:

- **Quip** documents
- **Asana** for project management
- Read source code in **Java**
- **Slack** for async communication
