Our project will need the following environments to run:

python= 3.7

CUDA = 11.7

pytorch =1.13.0

Our AI project team provides the following interfaces:

### 1. def get_train(uid,train_file):

The purpose of this function is to specialize training on a specific user's data.

uid represents the user id, and train_file represents the specialization data for this user（In csv format）.

The result is returned as an integer. 1 means that the training ended correctly. 0 means that the GPU is unreachable, and -1 means that the data is abnormal or corrupted.

### 2. def get_predict(uid,flow,opt):

The purpose of this function is to predict the current state of the user for a particular user and an array of prediction data.

uid represents the number of the user, flow is a 5*55 list array representing the numerical values and the current timestamp of the six sensors in 5 frames of 1 second, opt=0 for calling the specialized model, and opt=1 for calling the generalization model.

For the return values: 0-5 means six actions, negative means an exception occurred, -1 means that the specialization model is missing and the get_train function should be called, -2 means that the data is abnormal.

### 3.def clear(uid):

The purpose of this function is to clear the specialization model for that user.

uid represents the number of the user,and this function does not return a value.

### 4.def get_train_time(train_file):

This function predicts the time to train.The input is the size of the training file and the output is the estimated time to train in seconds

### 5.def get_pregress(uid,train_file):

This function show the preson data Collection progress,uid represents the user id, and train_file represents the specialization data for this user（In csv format).

Returns a six-tuple representing the collection progress of each tag



