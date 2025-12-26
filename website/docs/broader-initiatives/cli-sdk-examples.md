---
sidebar_position: 1
sidebar_label: "API and SDK examples"
---

# Creating more AWS CLI and SDK examples

Amazon Web Services (AWS) offers several ways for customers to use APIs such as direct API calls, AWS Command Line Interface (CLI) commands, and AWS Software Development Kit (SDK) requests in several programming languages. In December 2024, I was trying to determine areas in Amazon ECS and AWS Cloud Map documentation that could be improved on. With the holidays not far, I had the time to work on a self-directed project like this. I looked at the CLI and SDK references for both services and found something to work on.

## Challenge

The CLI reference and a subset of SDK references such as JavaScript and boto3 (Python) feature examples that writers can create. Other SDK reference examples come from the SDK examples team. I'd created SDK reference examples for an AWS Cloud Map launch in November 2024. With this experience fresh in mind, when I looked at the SDK and CLI references, I realized that certain API operations didn't have examples at all. Other operations had outdated examples or lacked basic examples for recently launched features.

I managed to identify a gap in our documentation: a lack of examples for the CLI and the SDK. The challenge was to create examples to fill the gaps.

## Action

I took the following steps to bridge the examples gap:

1. The first thing I did was make note of the operations that lacked examples and what type (CLI or SDK) of example they lacked. I **identified about 30 operations across Amazon ECS and AWS Cloud Map that either had zero examples or lacked examples for recent launches**.
2. I then started creating examples. SDK reference examples had to be created using **XML and JSON**. The XML and JSON get translated into code snippets when published in various SDKs. CLI examples had to be created using **reStructuredText**. My focus was to **create basic examples that demonstrated how parameters came together in a CLI command or an SDK request**. In some cases, I **found relevant examples in the API reference and the AWS CloudFormation reference, so I 'translated' the examples into reStructuredText or XML and JSON depending on the use case.**
3. After creating examples, I had to publish them. The publication of CLI examples was handled by the AWS CLI team (a writer and a couple engineers). For SDK reference examples, I had to create an SDK release.

## Result

The result of this effort was the following:

- We had tracking metrics for what percentage of CLI commands for a given AWS service had at least one example. Due to my efforts, **Amazon ECS reached almost 100% example coverage**, and **AWS Cloud Map reached 100% example coverage**. The same was true for SDKs that featured examples provided by writers.
- Months later, I was involved in a group effort to create an open-source repository of CLI tutorials using generative AI. When we went through the process of creating tutorials for various AWS services, we found that **it was harder to create accurate tutorials for services that lacked examples**. **Creating tutorials for ECS and Cloud Map was easier because of this effort I had undertaken**. LLMs can't be used to generate content if the data source is incomplete. For more information about my involvement in the creation of this open-source tutorial repository, see [Working collaboratively on an open-source, AI-driven AWS CLI tutorials repository](open-source-tutorials.md).
- As a computer science student, I had to read documentation. I recognized the importance of having examples that showed me how things worked. Something simple that I could maybe copy and paste. The examples fill a gap that we previously had in this space.

## Portfolio samples

The following are a few of the CLI and SDK examples I created.

### CLI example

I created a couple CLI examples for the `update-service` command for Amazon ECS for using EBS volumes with ECS and to stop using EBS volumes. This command corresponds with the `UpdateService` API operation.

The following is one of the command examples I created. **To view the examples in the AWS CLI reference instead, see [update-service](https://docs.aws.amazon.com/cli/latest/reference/ecs/update-service.html#examples)**.

**Description**:

The following `update-service` example updates the service `my-http-service` to use Amazon EBS volumes. You must have an Amazon ECS infrastructure role configured with the `AmazonECSInfrastructureRolePolicyForVolumes` managed policy attached. You must also specify a `taskDefinition` with the same volume name as in the `update-service` request and with `configuredAtLaunch` set to `true`. This example uses the `--cli-input-json` option and a JSON input file called `ebs.json`.

For more information, see [Use Amazon EBS volumes with Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html) in the _Amazon ECS Developer Guide_.

**Command**:

```bash
aws ecs update-service \
    --cli-input-json file://ebs.json
```

**Input file**:

```json title="ebs.json"
{
  "cluster": "mycluster",
  "taskDefinition": "mytaskdef",
  "service": "my-http-service",
  "desiredCount": 2,
  "volumeConfigurations": [
    {
      "name": "myEbsVolume",
      "managedEBSVolume": {
        "roleArn": "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
        "volumeType": "gp3",
        "sizeInGiB": 100,
        "iops": 3000,
        "throughput": 125,
        "filesystemType": "ext4"
      }
    }
  ]
}
```

**Output**:

```json
{
  "service": {
    "serviceArn": "arn:aws:ecs:us-west-2:123456789012:service/mycluster/my-http-service",
    "serviceName": "my-http-service",
    "clusterArn": "arn:aws:ecs:us-west-2:123456789012:cluster/mycluster",
    "loadBalancers": [],
    "serviceRegistries": [],
    "status": "ACTIVE",
    "desiredCount": 2,
    "runningCount": 2,
    "pendingCount": 0,
    "launchType": "FARGATE",
    "platformVersion": "LATEST",
    "platformFamily": "Linux",
    "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/mytaskdef:1",
    "deploymentConfiguration": {
      "deploymentCircuitBreaker": {
        "enable": true,
        "rollback": true
      },
      "maximumPercent": 200,
      "minimumHealthyPercent": 100,
      "alarms": {
        "alarmNames": [],
        "rollback": false,
        "enable": false
      }
    },
    "deployments": [
      {
        "id": "ecs-svc/2420458347226626275",
        "status": "PRIMARY",
        "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/mytaskdef:1",
        "desiredCount": 0,
        "pendingCount": 0,
        "runningCount": 0,
        "failedTasks": 0,
        "createdAt": "2025-02-21T15:07:20.519000-06:00",
        "updatedAt": "2025-02-21T15:07:20.519000-06:00",
        "launchType": "FARGATE",
        "platformVersion": "1.4.0",
        "platformFamily": "Linux",
        "networkConfiguration": {
          "awsvpcConfiguration": {
            "subnets": ["subnet-12344321"],
            "securityGroups": ["sg-12344321"],
            "assignPublicIp": "ENABLED"
          }
        },
        "rolloutState": "IN_PROGRESS",
        "rolloutStateReason": "ECS deployment ecs-svc/2420458347226626275 in progress.",
        "volumeConfigurations": [
          {
            "name": "ebs-volume",
            "managedEBSVolume": {
              "volumeType": "gp3",
              "sizeInGiB": 100,
              "iops": 3000,
              "throughput": 125,
              "roleArn": "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
              "filesystemType": "ext4"
            }
          }
        ]
      },
      {
        "id": "ecs-svc/5191625155316533644",
        "status": "ACTIVE",
        "taskDefinition": "arn:aws:ecs:us-west-2:123456789012:task-definition/mytaskdef:2",
        "desiredCount": 2,
        "pendingCount": 0,
        "runningCount": 2,
        "failedTasks": 0,
        "createdAt": "2025-02-21T14:54:48.862000-06:00",
        "updatedAt": "2025-02-21T14:57:22.502000-06:00",
        "launchType": "FARGATE",
        "platformVersion": "1.4.0",
        "platformFamily": "Linux",
        "networkConfiguration": {
          "awsvpcConfiguration": {
            "subnets": ["subnet-12344321"],
            "securityGroups": ["sg-12344321"],
            "assignPublicIp": "ENABLED"
          }
        },
        "rolloutState": "COMPLETED",
        "rolloutStateReason": "ECS deployment ecs-svc/5191625155316533644 completed."
      }
    ],
    "roleArn": "arn:aws:iam::123456789012:role/aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS",
    "events": [
      {
        "id": "b5823113-c2c5-458e-9649-8c2ed38f23a5",
        "createdAt": "2025-02-21T14:57:22.508000-06:00",
        "message": "(service my-http-service) has reached a steady state."
      },
      {
        "id": "b05a48e8-da35-4074-80aa-37ceb3167357",
        "createdAt": "2025-02-21T14:57:22.507000-06:00",
        "message": "(service my-http-service) (deployment ecs-svc/5191625155316533644) deployment completed."
      },
      {
        "id": "a10cd55d-4ba6-4cea-a655-5a5d32ada8a0",
        "createdAt": "2025-02-21T14:55:32.833000-06:00",
        "message": "(service my-http-service) has started 1 tasks: (task fb9c8df512684aec92f3c57dc3f22361)."
      }
    ],
    "createdAt": "2025-02-21T14:54:48.862000-06:00",
    "placementConstraints": [],
    "placementStrategy": [],
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": ["subnet-12344321"],
        "securityGroups": ["sg-12344321"],
        "assignPublicIp": "ENABLED"
      }
    },
    "healthCheckGracePeriodSeconds": 0,
    "schedulingStrategy": "REPLICA",
    "deploymentController": {
      "type": "ECS"
    },
    "createdBy": "arn:aws:iam::123456789012:role/AIDACKCEVSQ6C2EXAMPLE",
    "enableECSManagedTags": true,
    "propagateTags": "NONE",
    "enableExecuteCommand": false,
    "availabilityZoneRebalancing": "ENABLED"
  }
}
```

### SDK example

The SDK examples I created in XML and JSON were translated into a variety of programming languages. The following example usage is for the AWS Cloud Map `GetServiceAttribute` operation in JavaScript. **To view the example in the SDK reference for JavaScript instead, see [GetServiceAttributesCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/servicediscovery/command/GetServiceAttributesCommand/).**

```js
// Gets service attributes using a service ARN instead of service ID, useful when working with shared namespaces. Shows attributes for a service created by a sharee in a namespace owned by another account.
const input = {
  ServiceId: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
};
const command = new GetServiceAttributesCommand(input);
const response = await client.send(command);
/* response is
{
  ServiceAttributes: {
    Attributes: {
      Port: "80"
    },
    ResourceOwner: "123456789012",
    ServiceArn: "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-abcd1234xmpl5678"
  }
}
*\/
```

## Tools and technologies used

I used the following tools and technologies to create examples:

- **Asana** for project management
- **reStructuredText** for AWS CLI examples
- **XML** and **JSON** for AWS SDK examples
- **Oxygen** and **VSCode** as authoring environments
- **git** for version control
- **AWS CLI** for testing

I also used the [Amazon ECS API reference](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/), the [AWS Cloud Map API reference](https://docs.aws.amazon.com/cloud-map/latest/api/), and the AWS CloudFormation template reference for [Amazon ECS](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/AWS_ECS.html) and [AWS Cloud Map](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/AWS_ServiceDiscovery.html).
