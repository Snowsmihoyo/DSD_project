# Testing Plan

Revision History:

<style>#rev +table td:nth-child(1) { white-space: nowrap }</style>
<div id="rev"></div>

| Date   | Author | Description |
| ------ | ------ | ----------- |
| 5-5 | Wei Zhoujun | Create document |
| 5-5 | Wei Zhoujun | Add introduction, testing strategy and First Integration Stage test cases |
| 5-5 | Yan Zehan | Add the APP part |
| 5-5 | Nie Yikai | Add the Web part |
| 5-6 | Yan Zehan | Update the APP part |
| 5-6 | Nie Yikai | Update the Web part |
|  |  |  |
|  |  |  |
|  |  |  |

[toc]

## Introduction

### Intended Audience and Purpose

This document provides the testing strategy and expected results, corresponding to the requirement from the customer. It consists of a general approach of our testing, and specific test cases for unit and integrated testing.

### How to use the document

You may refer to the content section for the structure of the document, in which Sec. Testing Strategy details the integration process we will be adapting, and Sec. Unit Testing Cases and Integrated Testing Cases list the test cases and their expected results.

## Testing Strategy

We roughly follow the Bottom-up Integrated Testing strategy. We start by testing some modules individually through unit testing, and then gradually integrate them from bottom to top.

In the Unit Testing stage, we test Algorithm, Database and Embedded System individually to make sure the requirements are met and the interfaces are all correct.

In the First Integration Stage, we integrate Server, Algorithm, Database, and Embedded System to make sure all the requirements from Server are met. This ensures the back-end workflows are correct.

In the Second Integration Stage, we combine one front-end module with all the modules in the First Integration Stage and make sure all the requirements from the front-end module are furfilled. We do two tests respectively with Mobile and Web being the front-end module in question.

## Unit Testing Cases
...

## Integrated Testing Cases

### First Integration Stage

In this stage, we integrate Server, Algorithm, Database, and Embedded System to make sure all the requirements from Server are met.

#### Test Case 1: Server collects data from Embedded System

- [ ] Embedded System SHOULD send a request to Server.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOULD build connection between Server and Embedded System.
- [ ] Server SHOULD receive data sent from Embedded System.
- [ ] Server SHOULD send a completion signal to Embedded System after completing data transmission.
- [ ] Embedded System SHOULD receive the completion signal and continue.

#### Test Case 2: Server stores collected data into Database

- [ ] Server SHOULD use Database API to access Database.
- [ ] Server SHOULD send collected data through API.
- [ ] Database SHOULD receive data sent from Server.

#### Test Case 3: Server requests stored training data from Database

- [ ] Server SHOULD use Database API to access Database.
- [ ] Database SHOULD send requested data through API.
- [ ] Server SHOULD receive data sent from Database.

#### Test Case 4: Server handles Algorithm's request for training data

- [ ] Algorithm SHOULD send a "data" request to Server.
- [ ] The request SHOULD contain the dataset name and number of expected training samples.
- [ ] Server SHOULD receive the request.
  

If the request is reasonable:
- [ ] The procedure in Test Case 3 SHOULD function correctly.
- [ ] Server SHOULD send data to Algorithm.
- [ ] Algorithm SHOULD receive training data from Server.

If the request is not reasonable:
- [ ] Server SHOULD return "request not reasonable" error message to Algorithm.
- [ ] Algorithm SHOULD receive error message.

Finally:
- [ ] Server SHOULD send a completion signal to Algorithm.
- [ ] Algorithm SHOULD receive the completion signal and continue.

#### Test Case 5: Server handles Algorithm's request for model

- [ ] Algorithm SHOULD send a "model" request to Server.
- [ ] The request SHOULD contain the model name that Algorithm wants.
- [ ] Server SHOULD receive the request.

Check the model storage in Server, if the name exists:
- [ ] Server SHOULD return the personalized model to Algorithm, according to the name.

If not:
- [ ] Server SHOULD return the pre-trained model to Algorithm.

Finally:
- [ ] Algorithm SHOULD receive the model.
- [ ] Server SHOULD send a completion signal to Algorithm.
- [ ] Algorithm SHOULD receive the completion signal and continue.

#### Test Case 6: Server checks whether a pair of user ID and password match through Database

- [ ] Server SHOULD use Database API to access Database.
- [ ] If the ID doesn't exist, Database SHOULD return a "user ID not exist" error.
- [ ] If the ID exists but the password doesn't match, Database SHOULD return a "user ID or password invalid" error.
- [ ] If the ID exists and the password matches what's in the Database, Database SHOULD return a "success" message.

### Second Integration Stage: Mobile Part

In this stage, we make sure all requirements from Mobile are met by integrating it with all the modules in the First Integration Stage.

#### Test Case : Login

- [ ] APP SHOULD send a request username and password to Server.
- [ ] Server SHOULD receive this request.
- [ ] Server SHOULD send a request to Database.
- [ ] Database SHOULD receive the request.
- [ ] Database SHOULD check the username and password.
- [ ] Database SHOULD send the result(true or false) to Server.
- [ ] Server SHOULD receive the result.
- [ ] Server SHOULD send the result to APP.
- [ ] APP SHOULD receive the result and display it to the user.

#### Test Case : Exit

- [ ] GUI SHOULD send a signal of exit to backend.
- [ ] APP CLOUSED

#### Test Case : Register

- [ ] User inputs UserName.
- [ ] GUI checks whether username is legal.
- [ ] User inputs password.
- [ ] GUI checks whether password is legal.
- [ ] User reinputs password.
- [ ] GUI checks whether the two passwords are same.
- [ ] User inputs other information.
- [ ] GUI checks whether the information is legal.
- [ ] GUI sends information to Server.
- [ ] Server save ID and information to user database.
- [ ] Database saved.
- [ ] Server calculate a new ID for the User, and returns id.
- [ ] GUI shows successful notion and UserID.

#### Test Case : Logout

- [ ] User click the "Logout" Button.
- [ ] The app turn to visitor mode.

#### Test Case : GetUserInfo

- [ ] APP SHOULD send a request to SERVER
- [ ] Server SHOULD receive this request.
- [ ] Server SHOULD send a request to Database.
- [ ] Database SHOULD receive the request.
- [ ] Database SHOULD check the userid and get the userinfo.
- [ ] Database SHOULD send the result to Server.
- [ ] Server SHOULD receive the result.
- [ ] Server SHOULD send the result to APP.
- [ ] APP SHOULD receive the result and display it to the user.

#### Test Case : SetPersonalInfo

- [ ] User SHOULD input the info.
- [ ] APP SHOULD check if the info is valid.
- [ ] APP SHOULD send a request to SERVER.
- [ ] Server SHOULD receive this request.
- [ ] Server SHOULD send a request to Database.
- [ ] Database SHOULD receive the request.
- [ ] Database SHOULD update the data.
- [ ] Database SHOULD send a result to SERVER.
- [ ] Server SHOULD receive the result.
- [ ] Server SHOULD send the result to APP.
- [ ] APP SHOULD receive the result and display it to the user.

#### Test Case : ConnectEquip

- [ ] User inputs IP address and port.
- [ ] APP check whether the input contents are legal.
- [ ] If legal APP SHOULD send them to SERVER.
- [ ] SERVER SHOULD receive the messages.
- [ ] SERVER SHOULD send them to Database.
- [ ] Database SHOULD receive them.
- [ ] Database SHOULD save them and send the result to SERVER.
- [ ] Server SHOULD receive the result.
- [ ] Server SHOULD send the result to APP.
- [ ] APP SHOULD receive the result and display it to the user.

#### Test Case : GetEquipInfo

- [ ] User click "GetEquipInfo" button.
- [ ] APP SHOULD send a request to SERVER.
- [ ] SERVER SHOULD receive the request and send it to Embedding.
- [ ] Embedding SHOULD receive it and send the information to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and display it on the screen.

#### Test Case : UnbindEquip

- [ ] User clicks "UnbindEquip" button.
- [ ] APP sends request of getting Equipment list to Server.
- [ ] Server SHOULD receive it and send it to Database.
- [ ] Database SHOULD lookup and return the result to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and show the Equipment list and information.
- [ ] User chooses the Equipment to unbind.
- [ ] APP SHOULD send request of unbinding equipment to SERVER.
- [ ] SERVER SHOULD receive it and send it to Database.
- [ ] Database SHOULD receive it and delete the Equipment on this user and send the result to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and display the result on the screen.

#### Test Case : GetEquipStatus

- [ ] User Click "GetEquipInfo" button.
- [ ] APP SHOULD send a request to SERVER.
- [ ] SERVER SHOULD receive it and send it Embedding.
- [ ] Embedding SHOULD receive it and send the Status of Equipment to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and display it on the screen.

#### Test Case : CollectData

- [ ] User click "Collect Data" button.
- [ ] APP SHOULD shows the type of Data, and wait user to choose.
- [ ] User choose one type of data.
- [ ] APP SHOULD requests the server to begin collecting data.
- [ ] Server SHOULD requests the Embedding to begin collecting data.
- [ ] Embedding SHOULD receive it and start collecting data and send the data to SERVER.
- [ ] SERVER SHOULD save these data locally.
- [ ] Until User click "Finish Data" button.
- [ ] APP SHOULD send the request of finish data collecting to SERVER.
- [ ] SERVER SHOULD receive it and requests Embedding to end data collecting.
- [ ] Embedding SHOULD receive it and finish the data collecting and send a signal to SERVER.
- [ ] SERVER SHOULD receive the signal and finish the saving and send data to Database.
- [ ] Database SHOULD receive it and save the data and send the result to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and display the result on the screen.

#### Test Case : GetUserGuide

- [ ] The user choose to get user guide.
- [ ] APP SHOULD Get user guide and show it on screen.

#### Test Case : PredModel

- [ ] User clicks Model.
- [ ] APP changes into model mode.

#### Test Case : ResetModel

- [ ] User clicks "ResetModel" button.
- [ ] APP SHOULD send request to SERVER.
- [ ] SERVER SHOULD receive it and reset Algorithm database and send the result to APP.
- [ ] APP SHOULD receive it and show the result.

#### Test Case : TrainModel

- [ ] User click "TrainModel" button.
- [ ] APP sends request of getting data list to Server.
- [ ] Server SHOULD receive it and send it to Database.
- [ ] Database SHOULD lookup and return the result to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and show the data list and information.
- [ ] User chooses the data.
- [ ] APP SHOULD send data list to SERVER.
- [ ] SERVER SHOULD receive it and send it to database.
- [ ] Database SHOULD receive it and send the data to SERVER.
- [ ] SERVER SHOULD receive it and send data to Algorithm Running Unit to train model.
- [ ] Algorithm Running Unit SHOULD trains model, and gives model to Server.
- [ ] SERVER SHOULD receive it and gives model to Algorithm to Algorithm database.
- [ ] Algorithm database SHOULD receive it and save it and send a result to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and show the result.

#### Test Case : PredUserMotion_Onetime

- [ ] User click "PredUserMotion_Sync" button.
- [ ] APP SHOULD send request of getting outcome one_time to Server
- [ ] SERVER SHOULD receive it and requests the model of user from Algorithm database.
- [ ] Database SHOULD receive it and returns the model.
- [ ] SERVER SHOULD receive it and send it to Algorithm.
- [ ] Algorithm SHOULD receive it and running unit installed and return a signal.
- [ ] SERVER SHOULD receive it and send a start signal to Embedding.
- [ ] Embedding SHOULD receive it and returns data to SERVER.
- [ ] SERVER SHOULD receive it and send data to Algorithm running unit.
- [ ] Algorithm running unit SHOULD receive it and calculates the result and send it to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and show it on the screen.

#### Test Case : PredUserMotion_Sync

- [ ] User click "PredUserMotion_Sync" button.
- [ ] APP SHOULD make connections to Server.
- [ ] SERVER makes connections.
- [ ] APP SHOULD send request of getting outcome one_time to Server.
- [ ] SERVER SHOULD receive it and gets the model of user from Algorithm database.
- [ ] Database SHOULD receive it and returns the model to SERVER.
- [ ] SERVER SHOULD receive it and send it to Algorithm running unit.
- [ ] Algorithm running unit SHOULD receive it and install it and return a signal to SERVER.
- [ ] SERVER SHOULD receive the signal and requests Embedding to start collecting data.
- [ ] Embedding SHOULD receive it and returns data to SERVER.
- [ ] SERVER SHOULD receive it and send data to Algorithm running unit.
- [ ] Algorithm running unit SHOULD receive it and calculates the result and send to SERVER.
- [ ] SERVER SHOULD receive it and send to APP.
- [ ] APP SHOULD receive it and show the result.
- [ ] User click "end" button.
- [ ] APP SHOULD requests releases connection to SERVER.
- [ ] Server releases connection and send a signal to stop getting data.

#### Test Case : ShowModelInfo

- [ ] User click "ShowModelInfo" button.
- [ ] APP SHOULD send request of getting model information to SERVER.
- [ ] SERVER SHOULD receive it and send a request of getting model information of the user to Algorithm database.
- [ ] Algorithm database SHOULD receive it and returns the model information to SERVER.
- [ ] SERVER SHOULD receive it and send them to APP.
- [ ] APP SHOULD receive it and show it on the screen.

#### Test Case : DataManagement

- [ ] User clicks Data management.
- [ ] APP changes into data mode.

#### Test Case : GetData

- [ ] User clicks "get data".
- [ ] APP SHOULD send a request of getting data information to SERVER.
- [ ] SERVER SHOULD receive it and send it to data database.
- [ ] Data database returns data information to SERVER.
- [ ] SERVER SHOULD receive it and send it to APP.
- [ ] APP SHOULD receive it and show it.

#### Test Case : DiscardData

- [ ] User clicks "Delete Data".
- [ ] APP SHOULD get datalist information from data database.
- [ ] Data database returns datalist information to APP.
- [ ] APP SHOULD receive it and show the datalist information to User.
- [ ] User SHOULD choose data to delete.
- [ ] APP SHOULD send delete request to data Database.
- [ ] Data database SHOULD delete the data chosen and send the result to APP.
- [ ] APP SHOULD receive it and show the result to User.

#### Test Case : ChangeDataLabel

- [ ] User clicks change label.
- [ ] APP requests getting data information from data database.
- [ ] Data database SHOULD returns data information.
- [ ] APP SHOULD show data information to User.
- [ ] User chooses data to change, and chooses the new type.
- [ ] APP SHOULD send alter request to data database.
- [ ] Database update the new label of data and return the result.
- [ ] APP SHOULD show the result.


### Second Integration Stage: Web Part

In this stage, we make sure all requirements from Web are met by integrating it with all the modules in the First Integration Stage.

#### Test Case :User Wants to disconnect the equipment
- [ ] User click the ”Close all and Quit“ Button.
- [ ] Server SHOULD receive this request.
- [ ] Server SHOULD send a request to Web.
- [ ] Web SHOULD receive the request.
- [ ] Web SHOULD check if the request is valid.
- [ ] Web SHOULD send a request to Server .
- [ ] Server SHOULD receive the request.
- [ ] Server disconnects from all currently added equipment.
- [ ] The pages terminates itself.

#### Test Case : User Wants to Register a New Account
- [ ] User click the "Register" Button.
- [ ] The window turns to the register page.
- [ ] User inputs UserName.
- [ ] GUI checks whether username is legal.
- [ ] User inputs password.
- [ ] GUI checks whether password is legal.
- [ ] User reinputs password.
- [ ] GUI checks whether the two passwords are same.
- [ ] User inputs other information.
- [ ] GUI checks whether the information is legal.
- [ ] GUI sends information to Server.
- [ ] Server save ID and information to user database.
- [ ] Database saved.
- [ ] Server calculate a new ID for the User, and returns id.
- [ ] GUI shows successful notion and UserID.

#### Test Case : User Wants to Log in to the Web Station
- [ ] User input the account number and password.
- [ ] GUI check whether account number and password is legal.
- [ ] User click the "Login" Button.

#### Test Case : User Wants to View User Information
- [ ] User click "User Information" button.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive the request.
- [ ] Web SHOULD receive it and display it on the screen.

#### Test Case : User Wants Filter Data
- [ ] User input the name of the chart in search box.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and display the result on the screen.


#### Test Case : User Wants to View Usage Guide
- [ ]  User hovers his mouse over a function key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and shows function information of the function key
- [ ] User views the information and gain help.

#### Test Case : User Wants to Know the advantage of the model
- [ ] User hovers his mouse over a algorithm key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and shows algorithm information of the advantages of the algorithm.
- [ ] User views the information.

#### Test Case : User Wants to Know the advantage of the model
- [ ] User hovers his mouse over a introduction key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and shows the information of  the advantages of the model compared with other models.
- [ ] User views the information.

#### Test Case :  Administrators Wants to View the Historical Data
- [ ]  Administrator hovers his mouse over the history key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and shows the system historical data.
- [ ] Administrators views the data.
#### Test Case :Administrators Wants to Manage Users’ Information
- [ ]  Administrator hovers his mouse over the users management key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and shows the users information and the add, delete, revise, import and derive keys.
- [ ] Administrators views the data and choose the keys.
#### Test Case : Administrators Wants to Put a Notice on the Web Site
- [ ]  Administrator  hovers his mouse over the notice adding key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and turns to the page which has the function to edit a new notice.
- [ ] Administrators add the new notice on the website.

#### Test Case : Administrators can Manage the System Log
- [ ]  Administrator  hovers his mouse over the log management key.
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and turns to the page which shows the list of the logs. 
- [ ] Administrator clicks the"set" button
- [ ] Web SHOULD provide this capability of revise or delete the log.
- [ ] Administrator click the "Reserve" button
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and reserve the log

 #### Test Case : View Real-time Information
- [ ] User clicks the "Charts"Button 
- [ ] Server SHOULD receive the request.
- [ ] Server SHOUlD send a request to Web.
- [ ] Web SHOULD receive it and shows the charts
- [ ] System updates the information every 3 seconds.