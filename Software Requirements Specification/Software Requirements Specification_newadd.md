# Software Requirements Specification



|      |      |      |
| ---- | :----: | ----------- |
|      |      |      |
|      |      |      |
|      |      |      |



## Use Cases add 1： Return user model state



| Author | Version | Statue   |
| ------ | ------- | -------- |
| Fang   | 1       | finished |

#### beief introduction

return user model state is generalization or specialization model

#### Actors

- Algorithm 

#### Pre-Conditions

Sever is powered 

user is exist

####  Basic Flow 

| Actor                   | System                   |
| ----------------------- | ------------------------ |
|                         | request user model state |
| return user model state |                          |
|                         |                          |
|                         |                          |
|                         |                          |
|                         |                          |

#### Alternative Flow

| Actor | System |
| ----- | ------ |
|       |        |

## Use Cases add 2： Get log



| Author | Version | Statue   |
| ------ | ------- | -------- |
| Fang   | 1       | finished |

#### beief introduction

Get run log to show the labels of which frames may be abnormal

define log： For every frame model,print the Data of all 6 sensors, timestamp, label and a number,1 or -1,1 mean model think 1 means that the label of this frame is considered normal by the generalization model, and -1 means that the label of this frame is considered abnormal by the generalization model

#### Actors

- Algorithm 

#### Pre-Conditions

Sever is powered 

user is exist

####  Basic Flow

| Actor          | System               |
| -------------- | -------------------- |
|                | request user run log |
| return run log |                      |
|                |                      |
|                |                      |
|                |                      |
|                |                      |

#### Alternative Flow

| Actor | System |
| ----- | ------ |
|       |        |

#### Added Functional requirements

Improve model prediction accuracy performance,at least 15% error rate down. 

 