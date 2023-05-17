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

1. for model zoo part:

   Test Case  for KNN part: 

   - [x] Generalizing models are generated in independent runs
   - [x] Whether the generalization model can be successfully stored on the file system
   - [x] Whether the Train interface works and returns the expected results
   - [x] Whether the get_sorce interface was called and returned the expected result
   - [x] Whether the predict interface was called and returned the expected result
   - [ ] Whether the predict_proba interface was called and returned the expected result
   - [ ] Whether the model can be called by multiple programs at the same time and run correctly

Test Case for SVM part:

- [x] Generalizing models are generated in independent runs

- [x] Whether the generalization model can be successfully stored on the file system

- [x] Whether the Train interface works and returns the expected results

- [x] Whether the get_sorce interface was called and returned the expected result

- [x] Whether the predict interface was called and returned the expected result

- [x] Whether the predict_proba interface was called and returned the expected result

- [ ] Whether the model can be called by multiple programs at the same time and run correctly

  Test Case for LSTM part:

  - [x] Generalizing models are generated in independent runs

  - [x] Whether the generalization model can be successfully stored on the file system

  - [x] Whether the Train interface works and returns the expected results

  - [x] Whether the get_sorce interface was called and returned the expected result

  - [x] Whether the predict interface was called and returned the expected result

  - [x] Whether the predict_proba interface was called and returned the expected result

  - [ ] Whether the model can be called by multiple programs at the same time and run correctly

    2.for interface part:

    - [x] Whether the model file is stored and read correctly
    - [x] Whether it is reasonable to throw alerts for exceptions that occur during model training
    - [x] For get_train, whether -1 should be returned for insufficient data
    - [ ] Observe that the clear interface clears the file correctly
    - [ ] If multiple processes are called at the same time, an exception will occur
    - [x] Observe the deviation between get_train_time and the actual run time
    - [ ] Observe the discovery ability of get_progress for error labels
    - [x] Observe if get_state correctly returns the existence of a specialization model
    - [ ] Observe see if get_train generates log files correctly