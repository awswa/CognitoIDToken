# CognitoIDToken API

This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders.

- authorizer - Code for the application's Lambda function.
- events - Invocation events that you can use to invoke the function.
- getidtoken/nodejs/node_modules/auth - **Lambda Layer** to get ID token from Cognito using amazon-cognito-identity-js.
- template.yaml - A template that defines the application's AWS resources.

## Deploy the sample application
* AWS CLI - [How to install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* SAM CLI - [How to install AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)


To build and deploy your application for the first time, run the following in your shell:

```bash
git clone https://github.com/awswa/CognitoIDToken.git
cd CognitoIDToken
sam deploy --guided

Follow the prompts on screen.
```

The first command will build the source of your application. The second command will package and deploy your application to AWS, with a series of prompts:

* **Stack Name**: The name of the stack to deploy to CloudFormation. This should be unique to your account and region, and a good starting point would be something matching your project name.
* **AWS Region**: The AWS region you want to deploy your app to.
* **Confirm changes before deploy**: If set to yes, any change sets will be shown to you before execution for manual review. If set to no, the AWS SAM CLI will automatically deploy application changes.
* **Allow SAM CLI IAM role creation**: Many AWS SAM templates, including this example, create AWS IAM roles required for the AWS Lambda function(s) included to access AWS services. By default, these are scoped down to minimum required permissions. To deploy an AWS CloudFormation stack which creates or modifies IAM roles, the `CAPABILITY_IAM` value for `capabilities` must be provided. If permission isn't provided through this prompt, to deploy this example you must explicitly pass `--capabilities CAPABILITY_IAM` to the `sam deploy` command.
* **Save arguments to samconfig.toml**: If set to yes, your choices will be saved to a configuration file inside the project, so that in the future you can just re-run `sam deploy` without parameters to deploy changes to your application.

You can find your API Gateway Endpoint URL in the output values displayed after deployment.

## How to use API
Please refer to **SAM CLI Output** or Output tab in **Cloudformation stack in AWS Console**.

**1. Sign up in Cognito**
- Click CognitoSignupURL
- Check your email and click the link provided to confirm your user. API ONLY works with a confirmed user.

**2. Get API Endpoint**
- APIEndpoint

**3. Postman or Insomnia or any other tool you prefer**
- Use **POST** method
- Use APIEndpoint
- Use the following payload format:

```bash
{
    "username": "youremail@amazon.com",
    "password": "yourpassword",
    "userpoolid": "get from output in Cloudformation",
    "clientid": "get from output in Cloudformation"
}
```

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
aws cloudformation delete-stack --stack-name CognitoIDToken
```

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)
