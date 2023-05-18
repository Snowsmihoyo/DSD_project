Testing Plan for AI Part

Revision History:

<style>#rev +table td:nth-child(1) { white-space: nowrap }</style>
<div id="rev"></div>

| Date | Author | Description        |
| ---- | ------ | ------------------ |
| 5-17 | Yi Ran | Create document    |
| 5-17 | Yi Ran | Add Test case      |
| 5-17 | Yi Ran | Update Test Result |
|      |        |                    |
|      |        |                    |

## Introduction

### Intended Audience and Purpose

This document provides the testing strategy and expected results, corresponding to the requirement from the customer. It consists of a general approach of our testing, and specific test cases for unit and integrated testing.

### How to use the document

You may refer to the content section for the structure of the document, in which Sec. Testing Strategy details the integration process we will be adapting, and Sec. Unit Testing Cases and Integrated Testing Cases list the test cases and their expected results.

## Testing Strategy

We roughly follow the Bottom-up Integrated Testing strategy. We start by testing some modules individually through unit testing, and then gradually integrate them from bottom to top.

In the Unit Testing stage, we test model_zoo part and interface part and combine it test together.

## Testing Cases

#### Test Case 1: check received the training data and generating a generalization model

1. model zoo Should read the train data
2. get the data and train the model
3. Output model file

#### Test Case 2: check train model for Specialized model

1. model get the data

2. model check the file 

3. model clean error data
4. train Specialized model

5. save the model 

####Test Case3：check Algorithm prediction

​    1.model should return a good prediction result

​    2.model should choice a right model file

#### Test Case4: check personalized  model clean

​    1.clean the personalize model

​    2.check the file is not exist

​    3.Ensure robustness,clear two don't throw error.

#### Test case5:  check predict train time

​     1.Model should print the predicted time

2. The predicted time should be close to the true time

#### Test case6: check return user model state

​    1.When have not Specialized mode,should return false

​    2.When  have Specialized mode,should return true



此处以下都是废稿：（The following is invalid:）

1. for model zoo part:

   Test Case  for KNN part: 

    Generalizing models are generated in independent runs

    Whether the generalization model can be successfully stored on the file system

    Whether the Train interface works and returns the expected results

    Whether the get_sorce interface was called and returned the expected result

    Whether the predict interface was called and returned the expected result

    Whether the predict_proba interface was called and returned the expected result

    Whether the model can be called by multiple programs at the same time and run correctly

Test Case for SVM part:

​	Generalizing models are generated in independent runs

​    Whether the generalization model can be successfully stored on the file system

​    Whether the Train interface works and returns the expected results

​    Whether the get_sorce interface was called and returned the expected result

​    Whether the predict interface was called and returned the expected result

​    Whether the predict_proba interface was called and returned the expected result

   Whether the model can be called by multiple programs at the same time and run correctly

Test Case for LSTM part:

   Generalizing models are generated in independent runs

   Whether the generalization model can be successfully stored on the file system

   Whether the Train interface works and returns the expected results

   Whether the get_sorce interface was called and returned the expected result

   Whether the predict interface was called and returned the expected result

   Whether the predict_proba interface was called and returned the expected result

​    Whether the model can be called by multiple programs at the same time and run correctly

2.for interface part:

   Whether the model file is stored and read correctly

   Whether it is reasonable to throw alerts for exceptions that occur during model training

   For get_train, whether -1 should be returned for insufficient data

   Observe that the clear interface clears the file correctly

   If multiple processes are called at the same time, an exception will occur

   Observe the deviation between get_train_time and the actual run time

  Observe the discovery ability of get_progress for error labels

  Observe if get_state correctly returns the existence of a specialization model

  Observe see if get_train generates log files correctly



  