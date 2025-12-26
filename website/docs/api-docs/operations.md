---
sidebar_position: 1
sidebar_label: "AWS Cloud Map API operations"
---

# API operation documentation for AWS Cloud Map

An Amazon Web Services (AWS) customer can perform a variety of operations using APIs. For example, they can create an AWS resource such as an S3 bucket, update the resource, retrieve information about the resource, and delete the resource (CRUD). These operations are referred to as **actions**. When documenting APIs at AWS, I was responsible for the descriptions of actions and the associated request and response parameters. I also created request and response examples for the operations. The following example in my portfolio showcases how I handled descriptions and examples for AWS Cloud Map actions related to service-level attributes.

For more information about AWS Cloud Map, see [AWS Cloud Map](https://docs.aws.amazon.com/cloud-map/latest/dg/what-is-cloud-map.html).

## Service-level attribute actions

When customers register instances with AWS Cloud Map, they can provide metadata about each instance using instance attributes. In 2024, the decision was made to extend the capability of specifying metadata to services. Customers could now use attributes to specify metadata at the instance-level _and_ the service-level. The following new API actions were created as a result:

- UpdateServiceAttributes
- GetServiceAttributes
- DeleteServiceAttributes

## API action documentation writing process

My approach when it comes to documenting API actions is to include the following:

- A description of what the action and its request parameters and response elements are
- A description of any applicable caveats and considerations for the action and parameters
- Any applicable default values for parameters
- Examples that capture basic usage and give a high-level overview of what requests and responses look like

To avoid making descriptions too detailed, I also try to link to a topic in the developer guide that can provide more context.

Putting together descriptions for the service-level attribute actions involved the following steps:

1. I first **read through high-level and low-level design documents** to get an understanding of what service-level attributes are, and why they matter.
2. I then drafted my documentation for the feature. Most of my focus for this feature was on these operation descriptions.
3. After drafting, I **sought feedback from the tech lead and the product manager**. After some back and forth, I had finalized descriptions in place.
4. After finalizing descriptions, I created and tested the API examples.

## Portfolio samples

I worked on API documentation for all three of the service-level attribute actions for adding attributes, retrieving attributes, and deleting attributes.

### `UpdateServiceAttributes` documentation

The `UpdateServiceAttributes` action is used to update an AWS Cloud Map service to add attributes to the service. I had to write descriptions for the action and its request parameters and errors. The operation returns nothing, so there were no response elements to deal with. I also created a couple sample API call examples.

The documentation I wrote for the `UpdateServiceAttributes` operation can be found in the AWS Cloud Map API reference. **To view the documentation in the API reference, see [UpdateServiceAttributes](https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateServiceAttributes.html).**

### `GetServiceAttributes` documentation

The `GetServiceAttributes` action is used to retrieve attributes associated with an AWS Cloud Map service. I had to write descriptions for the action and its request parameters, response elements, and errors. I also created a couple sample API call examples.

The documentation I wrote for the `GetServiceAttributes` operation can be found in the AWS Cloud Map API reference. **To view the documentation in the API reference, see [GetServiceAttributes](https://docs.aws.amazon.com/cloud-map/latest/api/API_GetServiceAttributes.html).**

### `DeleteServiceAttributes` documentation

The `DeleteServiceAttributes` action is used to update an AWS Cloud Map service to remove a specific attribute associated with an AWS Cloud Map service. I had to write descriptions for the action and its request parameters and errors. The operation returns nothing, so there were no response elements to deal with. I also created a couple sample API call examples.

The documentation I wrote for the `DeleteServiceAttributes` operation can be found in the AWS Cloud Map API reference. **To view the documentation in the API reference, see [DeleteAttributes](https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateServiceAttributes.html).**

:::note

The following parts of API action documentation are auto-generated from the API model and are owned by engineering:

- Request and response syntaxes
- Fields such as `Required`, `Type`, `Array Members`, `Constraints`
- Names of the parameters, errors, and actions

:::

## Tools and technologies used

I used the following tools and technologies to document service-level attributes operations:

- **XML** for authoring
- **Oxygen** as the authoring environment
- **git** for version control
- **AWS CLI** and **Charles Proxy** to test API requests and responses
