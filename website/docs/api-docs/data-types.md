---
sidebar_position: 2
sidebar_label: "Amazon ECS API data types"
---

# API data type documentation for Amazon ECS

To call an Amazon Web Services (AWS) API, a customer passes a request. The API, in most cases, returns a JSON response. The request and response JSON bodies can contain complex objects comprised of multiple parameters. These complex structures are called **data types**. When documenting APIs at AWS, I was responsible for the descriptions of data types and their constituent parameters. The following example in my portfolio showcases how I handled descriptions for an Amazon ECS data type called `RestartPolicy`.

For more information about Amazon ECS, see [What is Amazon ECS?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html).

## The `RestartPolicy` data type

A restart policy in Amazon ECS is used to determine how to handle an exited container. Enabling a restart policy means Amazon ECS will try to restart a container when it exits, as long as the following conditions are met:

- The container runs for a specified period of time (in seconds)
- The exit code for the stopped container isn't one of the specified exit codes that ECS must ignore

The ability to specify a time period ensures ECS won't keep trying to restart a container infinitely in the event of a significant failure. The ability to specify exit codes ensures ECS won't restart a container in the event of an expected exit.

The data type is defined as follows:

```json
"RestartPolicy": {
        "enabled": true,
        "ignoredExitCodes": [0],
        "restartAttemptPeriod": 300 //default value
      }
```

## Data type documentation writing process

My approach when writing parameter descriptions is to include the following:

- a description of what the parameter is
- a description of any applicable caveats and considerations
- any applicable default values

To avoid making descriptions too detailed, I also typically link to a topic in the developer guide that can provide more context.

Putting together descriptions for the `RestartPolicy` parameters was part of the greater project of documenting restart policies. I followed these steps to create the documentation:

1. I **read through high-level and low-level design documents** to get an understanding of what a restart policy is, and why it matters.
2. I then drafted my documentation for the restart policies feature, including these data type parameter descriptions. The documents described default values and constraints that I noted in my draft descriptions.
3. After creating a draft, I **sought the feedback of the tech lead, engineering manager, and the product manager**. After some back and forth, the descriptions were ready to publish.

## Portfolio sample: `RestartPolicy` data type documentation

The documentation I wrote for the `RestartPolicy` data type can be found in the Amazon ECS API reference. **To view a web version of the documentation in the API reference, see [RestartPolicy](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerRestartPolicy.html).**

:::note

The `Required` and `Type` parameters, as well as the names of the parameters, are auto-generated from the API model and owned by engineering.

:::

## Tools and technologies used

I used the following tools for writing API documentation:

- **XML** for authoring
- **Oxygen** as the authoring environment
- **git** for version control
