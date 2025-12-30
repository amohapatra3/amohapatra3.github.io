---
sidebar_position: 2
sidebar_label: "AWS Cloud Map shared namespaces"
---

# Shared namespaces for AWS Cloud Map and Amazon ECS Service Connect

Amazon Web Services (AWS) consists of 200+ products/services, and there are many integrations between services. I worked on documentation for a cross-service integration between AWS Cloud Map and AWS Resource Access Manager (RAM) that allows customers to create shared Cloud Map namespaces. I also worked on documentation for shared namespaces being supported for Amazon ECS Service Connect — a feature of Amazon ECS that provides management of communication between Amazon ECS services.

For more information about AWS Cloud Map, see [What is AWS Cloud Map?](https://docs.aws.amazon.com/cloud-map/latest/dg/what-is-cloud-map.html) For more information about AWS RAM, see [What is AWS Resource Access Manager?](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html) For more information about Amazon ECS Service Connect, see [Use Service Connect to connect Amazon ECS services with short names](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html)

## Shared namespaces overview

A namespace is the top-level logical grouping of AWS resources in AWS Cloud Map. Before the cross-service integration, namespaces were scoped to one AWS acccount. Only the account that created a namespace could access the namespace and its child resources. The integration with AWS RAM allows customers to share namespaces with other accounts and allows other accounts to access these namespaces. Customers no longer need to work aroumd the scope limitation.

Within weeks of the Cloud Map launch, this capability was extended to Amazon ECS Service Connect for cross-account communication between Amazon ECS services.

## Documentation process

I worked on the Cloud Map documentation and the ECS documentation as separate projects. For both projects, I followed the same basic steps:

1. Identify what's changing with the product and why
2. Identify how the changes map with docs
3. Draft the changes
4. Validate the changes

With these launches being cross-service integrations, I had to work with stakeholders from the Cloud Map, ECS, and RAM teams.

### Process for Cloud Map documentation

The following is a more detailed overview of my process for drafting Cloud Map developer gtuide documentation for this feature. Besides the developer guide, I made **updates to the API reference** and **left comments on Java and TypeScript code reviews (CRs) for error messages and UI text**.

1. I started working on this feature in September 2024. To identify what's changing with AWS Cloud Map and why, I read through a variety of documents. **The famous Amazon [PR/FAQ](https://www.aboutamazon.com/news/workplace/an-insider-look-at-amazons-culture-and-processes) provided me a product perspective about shared namespaces and helped me understand why this feature was needed**. I then **found a Quip folder full of design documents and went from high-level to low-level design to understand the technical details of the feature**.
2. I then **mapped the changes to the developer guide and made note of necessary API changes**. This was clearly a namespaces feature, so I **knew I had to create a chapter under 'namespaces' in the developer guide**. No new API actions or data types were being added, but a couple new parameters such as `ResourceOwner` and `CreatedByAccount` were being added. I **noted these new parameters** ahead of drafting documentation for the developer guide.
3. I then drafted my updates. I was able to **find a cross-service integration template for integrations with RAM**. I used that as a base for my chapter in the Cloud Map developer guide, making adjustments specific to this launch such as mentioning the new API parameters. Documentation updates for the AWS RAM developer guide depended on AWS Cloud Map, so I **helped the technical writer for AWS RAM with information needed for their updates**. I **provided feedback and facilitated communications between the RAM writer and the tech lead for Cloud Map**.
4. My approach for validating changes is a combination of getting feedback from stakeholders and testing hands-on when possible. In this case, I needed two AWS accounts to test the sharing of namespaces. I had access to only one account, so I couldn't test hands-on. To make up for it, I **sought regular feedback from the Cloud Map tech lead** and even **attended a bug bash via video call as a fly-on-the-wall**. With the entire engineering team meeting in person in Vancouver, I **used some of my journalism experience to take notes when engineers faced issues with the feature and with my docs during the bug bash**. The feedback helped me understand the feature better and close gaps in my draft.

After following these steps, I was able to successfully publish Cloud Map developer guide updates for this feature in August 2025. I even **went ahead and published updates for the RAM developer guide on behalf of the writer who was out-of-office the day of the launch**. I did some post-launch validation to see how the new API fields showed up and continued making updates after launch in response to internal and external feedback.

### Process for the Amazon ECS Service Connect launch

The Service Connect integration with shared namespaces was a secondary project that involved updating only the developer guide. The steps I followed for this update were similar to steps for the Cloud Map project.

1. I started working on this feature in August 2025. To identify what's changing with Service Connect and why, I leaned on knowledge from the Cloud Map launch and **read through a much smaller set of documents**. There were a **couple design docs, testing docs, and error specifications**. I **met with a Cloud Map engineer who was leading this launch in partnership with ECS engineers**.
2. I then **mapped the changes to the developer guide**. This was clearly an update to Service Connect, so I knew I had to create a chapter under 'Amazon ECS Service Connect' in the developer guide. I **noted specific error messages, scenarios, and caveats expressed by the Cloud Map engineer that I had to document**. For example, the `namespace` parameter was being overloaded to accept both ID and Amazon Resource Name (ARN), and only an ARN could be specified for shared namespaces.
3. I then drafted my changes. I created a parent overview topic, a child topic with a set of steps for creating a Service Connect service that uses a shared namespace, and a child topic for troubleshooting.
4. My approach for validating changes is a combination of getting feedback from stakeholders and testing hands-on when possible. In this case, I needed two AWS accounts to test the sharing of namespaces. I had access to only one account, so I couldn't test hands-on. To make up for it, I **met synchronously with the Cloud Map engineer, a product manager, and two senior ECS engineers for feedback**. They left live comments on my drafts. A couple other iterative reviews happened asynchronously over Slack. The feedback helped me understand the feature better and close gaps in my draft.

After following these steps, I was able to successfully publish Service Connect updates for this feature **within a couple weeks of starting work on it**.

## Portfolio samples

### AWS Cloud Map

The developer guide documentation I wrote for Cloud Map shared namespaces can be found in a chapter in the AWS Cloud Map developer guide. **To view the documentation in the AWS Cloud Map developer guide, see [Shared AWS Cloud Map namespaces](https://docs.aws.amazon.com/cloud-map/latest/dg/sharing-namespaces.html).**

### Amazon ECS Service Connect

The developer guide documentation I wrote for Amazon ECS Service Connect supporting shared namespaces can be found in a chapter in the Amazon ECS developer guide. **To view the documentation in the Amazon ECS developer guide, see [Amazon ECS Service Connect with shared AWS Cloud Map namespaces](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect-shared-namespaces.html).**

## Tools and technologies used

I used the following tools and technologies for these updates:

- **Quip** documents
- Reviewed code written in **Java** to provide feedback for error messages
- **XML** for authoring
- **Oxygen** and **VSCode** as authoring environments
- **git** for version control
- **Slack** for async communication
- **AWS CLI** for checking what new API fields looked like
