---
title: "How I Passed The AWS Solution Architect Associate (SAA-C03)"
date: "2022-12-02T22:12:03.284Z"
description: How linear regression works by example
tag: Cloud
---

### How I Passed The AWS Solution Architect Associate (SAA-C03)

![](https://cdn-images-1.medium.com/max/1000/0*7wvhCR-8_88YHVV9.png)

I passed the AWS Solutions Architect Associate (SSA-003) exam in December 2022. In this article I’ll share with you resources I used, some tips for the exam and some notes I took during preparation. With some prior experience using AWS (S3, Lambda, EC2, RDS) and some general IT knowledge, it took me around **one month** of light preparation.

**What you’ll learn?**

You’ll learn how to design good systems on AWS, which means given a requirement on resiliency, performance, cost, security and availability. How can I glue different AWS services to design the best system possible. This means you’ll have to know deeply the **services on AWS** and also **best practices** for designing systems.

**How did I prepare?**

1.  Took a [course on Udemy](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/) by “Ultimate AWS Certified Solutions Architect Associate SAA-C03” By Stephane Maarek, comprehensive gives you high level understanding with an emphasis on the “why”, you need to complement that by playing around in AWS console doing hands on yourself.
2.  While taking the course referred to official documentation for each service to get to the fine details.
3.  Did 6 [mock exams](https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c03/) by Jon Bonso, provided very good explanation on each question and is really close to the real exam. You should aim for a score >80% on these mock exams before taking the real one.

**Some Tips:**

-   Most of the exam is about the core services (S3, EC2, SQS, VPC, etc ..), it is helpful to study newer services but only high level understanding is required.
-   To check your knowledge on a certain service you can ask yourself, what does this service do? when should I use this service? How does it integrate with other services? What about security and high availability?
-   In some questions you’ll find multiple answers that technically work, read the question again, it will often mention something like most “cost effective”, or “with least operational overhead”. Use this to guide your final choice.
-   Take it very slowly the exam is about 2 hours, I finished all the questions with 40 minutes to spare.

Below you find my **non comprehensive list of notes**, I took during preparation.

### EC2:

-   A Service to rent VMs.
-   Compute optimized instances start with C, Memory Optimized start with R, Storage optimized start with I or D.
-   Give your instance permissions with **IAM Roles.**
-   **On demand** instances are most expensive good for temporary workloads
-   **Reserved instances** for 1 or 3 years good for consistent demand, **convertible reserved** can be exchanged for instance type of same family but are more expensive
-   **Spot instances** are cheap and good only for workloads that can be interrupted. With **dedicated hosts** you get direct access to the hardware, with dedicated instances you make sure no other customer is using same hardware as you. To terminate **persistent spot instances**, cancel the request first then terminate the instances.
-   **ENIs** are network cards, they have public / private Ips, they can be attached or detached from EC2 instances, they’re useful for failovers.
-   **Use cluster placement** for HCP (High performance computing) applications (Single AZ), Use **spread placement** for critical applications (max 7 instance per AZ) , Use **Partition** for best of both worlds.
-   **Elastic Ips** let you keep same public IP when you stop then start an instance, you pay for elastic IPs you are not using.
-   **Hibernation** lets you save RAM state, you are billed when instance preparing to hibernate, you are not billed if instance is preparing to stop.3.
-   **Limits**: 20 running instances per region, also a VCPU limit, need to get validation from AWS to increase limits.

### Storage:

-   **Object storage**: S3
-   **File storage**: EFS (EFS has two tiers standard and Infrequent Access), FSx for luste, FSx for windows.
-   **Volume Storage**: EBS. if you need more than 16K IOPS use provisioned IOPS EBS, to encrypt an unencrypted EBS, create a snapshot, copy snapshot enabling encryption and create new volume from this snapshot.
-   You can use EBS snapshots to move data between AZs
-   **AWS datasync** to migrate on premises storage to S3, EFS or FSx. **Storage gateway** connects your on premises storage to AWS, File gateway uses NFS and SMB, Volume gateway syncs data to S3 and tape gateway offers compatibility with tape data uses S3.
-   On S3 you can enable **versioning** and **MFA delete** to prevent accidental deletions, you can enable encryption by default on bucket settings, you can add a header to your put request to be able to encrypt specific file, you can add bucket policy to prevent files that are not encrypted to be uploaded.
-   To migrate data if you don’t have good network bandwidth use a **Snowdevice** (snowcone physically small or snowball edge or snowmobile). Snowball Edge max 80 TB, Snowcone 8 TB. Snowball can’t import directly to glacier you have to use lifecycle policy

### Load Balancers :

-   Want to route same client to same machine? Enable “**sticky sessions**” option.
-   All load balancer support **heathchecks** and use **target groups**, you can setup multiple target groups
-   **Cross-zone load balancing** will make traffic even among instances in multiple AZs, useful when you AZs have different number of instances. Enabled by default ALB, need to enable and pay for traffic for NLB, need to enable but free for CLB.
-   ALB/NLB can use multiple **SSL certificates** using SNI, CLB can’t.
-   **Connection Draining** (CLB) / **Deregistration Delay** (NLB) : if instance is deregistering you wanna give some time for clients to complete their requests before removing it from target group, you can configure this delay. Set it based on request length if short or long, can be between 1 and 3600 seconds.
-   **Classic Load Balancer** (CLB): Old one, support TCP & HTTP/S, supports heathchecks, fixed hostnames. No reason to use over modern ones.
-   **Application Load Balancer** (ALB): Support HTTP/S (layer 7), routing rules based on path, url parameters, etc … Good for microservices (Docker / ECS) , server won’t see original request, if target wants original ip or port needs to get them from request header forwarded by ALB. Can use lambda function as target group.
-   **Network Load Balancer** (NLB): Supports TCP & UDP (layer 4), very high performance, less latency than ALB, you have one static IP per AZ. Forwards the original request from client. You can use with EC2 instances & IP addresses.
-   **Gateway load balancer**: Make all traffic go through 3rd party security systems like firewalls, intrusion detection, etc.

### Auto Scaling Groups (ASG):

-   Works with EC2 Instances, Integrates with load balancers, you can set a min and max size, desired capacity is number of instances launched initially. Does health checks by default.
-   To create one you need a **launch template** which defines what kind of EC2 instances you want in your ASG. You scale based on cloudwatch alarm (a certain metric) to create scaling policies.
-   Can’t modify launch templates once created, you need to replace it with new one. ASGs are free, you only pay for resources.

**Scaling policies:**

-   Target Scaling: target certain metric for example want cpu usage to be 50%
-   Simple Scaling: If CPU>90 % for example add 3 instances.
-   Scheduled Scaling: Every Sunday from 8 AM to 5 PM add 6 instances
-   Predictive Scaling: Scale based on historical data using forecasting.
-   **Cooldown Period**: After scaling trigger happens wait (300 secs default) before another trigger can happen. Used to wait for scaling metric to stabilize before triggering scaling.
-   You can define **lifecycle hooks** to do extra stuff before launch/ terminating for example, before launching an extra instance you want it to run some script to download software.

**ASG Termination Policy:**

-   Find AZ with most number of instances.
-   Delete one with oldest launch template.
-   Delete instance closest to next billing hour.

### Relational Database Service (RDS):

-   Postgres, MySQL, MariaDB, Oracle, SQL Server, Aurora (AWS only)
-   RDS Storage can autoscale
-   **Read Replica**: can create up to 5, same AZ, cross AZ or Cross region, Async replication between main DB and read replicas. Read replicas can be promoted to own main DB. Cross region read replica have network costs.
-   **Multi AZ** for Disaster Recovery: Standby DB in another AZ with automatic failover using same DNS name, uses synchronous replication.
-   Possible to use Multi AZ with your Read Replicas.
-   You can activate Multi AZ after deployment just by changing config.
-   Continuous Backup and Restore with retention up to 35 days.
-   Scale by read replica or bigger instance.
-   Supports encryption at rest using **KMS** and in-flight encryption with SSL, you can enforce SSL, method depends on your db engine.
-   To encrypt RDS after deployment, create snapshot, encrypt the snapshot and restore your DB from the snapshot.
-   You can use **IAM Auth** for MySQL and Postgres.

### Aurora:

-   Aurora only supports MySQL and Postgres, with Aurora you can get **15 read replicas**, automatic storage scaling. High availability by default. Supports cross region replication.
-   Read replicas can auto scale, you only deal with reader endpoint/ writer endpoint. There’s one writer and multiple readers.
-   You can enable **Multi-Master** if you need high availability for writer node, makes all instances capable of both write and read.
-   Comes in **provisioned** or **serverless** modes. Can group your read replicas into custom endpoint good if you have different type of reader instances and you want to group them based on workload.

### Elasticache:

-   Managed Redis or Memcached, in memory databases for low latency and high performance.
-   **Uses cases**: cache common queries to help reduce load off database or store user session.
-   Redis VS Memcached: Redis has Multi AZ, Read Replicas, Backups. Memcached faster but no durability features.
-   In Redis to enable **Redis Auth** that’s used for security you need to enable encryption in transit.

### Dynamo DB:

-   Managed **NoSQL database**, **Provisioned** read/write capacity or **on demand** mode to pay for whatever read/writes you actually consume. **Provisioned** mode supports autoscaling for reads and writes. Key/Value db. Muti AZ by default. You can make it **global** enabling Dynamo DB global tables. Supports **backup and restore**.
-   Enable **DAX** for auto read cache, whenever you need accelerated reads.
-   Security and auth is integrated with IAM. Use **dynamo DB streams** to detect changes and trigger events based on them, you need to enable this for global tables to work.

### SQS:

-   Used to **decouple applications**
-   default retention for messages is 4 days with max of 14 days, 256KB per message, Consumers and producers, polling for messages is asking queue for messages, a consumer can receive up to 10 messages at a time.
-   **Queue Access Policy** can allow another aws account to access your queue.
-   **Message visibility timeout** indicates how much time message is invisible to other consumers while pooling or how much time consumer has to process messages by default it is 30 secs and max is 12 hours, after the timeout the messages return to the queue if not deleted. You can change message visibility in real time using API call **Change Message Visibility.**
-   **Delivery Delay** allows you to set delay up to 15 mins, messages will only be visible after the delay.
-   **Dead Letter Queue**: If message has been returned to queue many times maybe there’s an error and you may want to get rid of it, after max receives messages will be sent automatically to DLQ you can then process/debug them and return them to regular queue.
-   **Long Pooling vs Short Pooling**:default is short pooling, if queue is empty sqs will sent empty response immediately you will have to send new request, with long pooling sqs will wait up to 20 secs for new messages to arrive, it is useful to decrease number of API calls.
-   To implement Request Response Systems use the built in **SQS Temporary Queue Client.**
-   **FIFO Queue**: messages are ordered, limited to 300 messages/s to 3000 messages/s using batching.

### SNS:

-   **Pub/Sub** pattern, publisher sends the message to service, SNS distributes the message to all subscribers, you can filter messages so not all subscribers get all messages, up to 12M subs per topic, subs can be email, sms, http enpoints or aws services(sqs, lambda, etc ..)
-   Supports inflight / at rest encryption, you can use **SNS access policies** for cross account sharing or allowing other services to write to SNS.
-   **SNS fanout pattern** to send messages efficiently to multiple SQS queues. You can preserve order and ensure deduplication by using SNS FIFO that works only with SQS FIFO.

### Kinesis:

-   Analyse streaming data in **real time**.
-   **Data Streams**: Capture, process and store datastreams.
-   Performance component is **shards**, 1 MB /s or 1000 messages/s per shard writing, for reading you get 2 MB/s per shard for all consumers or for each consumer but more expensive (enhanced fanout), each record can be up to 1 MB. You can choose provisioned or on demand capacity, the latter will scale automatically with more shards. Data Retention for 1 up to 365 days, you can replay data.
-   **Firehose**: Load data streams into AWS data stores. Can read from data streams and optionally use lambda to transform the data before writing it in batch to an AWS destination S3, Redshift, Elastic Search or custom destination. Can send min of 32 MB per batch.
-   **Data Analytics**: Analyse data streams with SQL. Serverless integrates well wil Firehose and Data Streams. Used for timeseries analytics, real time dashboards, etc ..
-   **Video Streams**: Capture, process and store video streams.

### Elastic Container Service (ECS):

-   Good for **microservices**, you can store images on Amazon Container Register (ECR), You can do EC2 Launch Type or Fargate Launch Type(serverless), Docker containers you use are called “tasks”, ECS tasks can be invoked by AWS Event Bridge.
-   **IAM Roles for ECS:** for EC2 Launch you get EC2 Instance Profiles, for EC2 and Fargate you get task roles, you can then finetune access based on containers (tasks). You can integrate both launch types with ALB or NLB. The file system you use with ECS is EFS because it is shared. Can’t use FSx for Lustre or Windows, you can’t use S3 as file system.
-   To use you create **task definition** then you launch a service from that task definition. You can autoscale on the task level using AWS Application Auto Scaling, can be based on CPU, RAM or ALB request count.
-   **Rooling updates:** you can control how tasks start and stop when updating using min heathy percent / max healthy percent metric.
-   **Elastic Kubernetes Service (EKS)** : managed kubernetes on AWS, alternative to ECS with opensource API, supports EC2 or Fargate.

### **Route 53**:

-   Used to **register domains / DNS manager**. You can use public or private hosted zones, private one only work inside your VPCs. TTL (Time to Live): Client will cache the result of DNS for the duration of TTL default is 300 secs. TTL Not mandatory for **Alias Record**.
-   CNAME point hostname to another hostname but you can’t use root domain, To use root domain need activate **Alias with A record**. You can’t set Alias record for EC2 DNS name.
-   To enable healthchecks you must allow traffic from route 53 health checkers to your resources.

**Routing Policies**:

-   **Simple**: specify one or multiple Ips, it will route to randomly chosen one, no health checks.
-   **Multivalue**: Like simple but with healthchecks.
-   **Weighted**: Assign different weights to different resources and route based on relative weight, supports heathchecks.
-   **Failover**: used for Disaster Recovery, uses healthcheck, you can only use 2 records here one primary and one secondary.
-   **Geolocation**: You can use it to change behavior based on user country for example block content or change language.
-   **Geoproximity**: Route based on geographic location, t’s more flexible than geolocation you can use bias to expand or shrink geo region allocated to a specific resource, with 0 bias users go to closest resource.
-   **Latency**: Route to closest aws region, supports heathchecks.

if you managed to get here Congratulations. Thanks for reading, I hope you’ve enjoyed the article. For personal contact or discussion, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/tariqmassaoudi/).