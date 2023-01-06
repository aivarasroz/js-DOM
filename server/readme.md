# CRUD App JavaScript DOM assignment "Expose Rich Person" - Aivaras Rozukas

Appllication consist of 2 different folders and subfolders inside of it :
```
Client
-
Server
```
Inside the <b>CLient/Components/</b> subfolder, there are components of each element used to create an application. Its an application using Form and Table elements, followed with an Error alert element in case of failure to enter required Data. Each of them are imported into:

```
client/main.js
```

The Client folder is a FrontEnd part of an application, as the components are imported, main.js file has all the responsive CRUD (Create , Read, Update, Delete) functions represented in the application.

The server folder runs BackEnd part of an application. All the important DataBase that can be seen changing due to taken actions in UI in: 
```
server/db.json
```


Every action taken in appllication is performed under API which is CRUD is executed in:

```
client/services/api-service.js
```

## How Apoplication works:


There is  .GIF file attached as a visual aid, on how application works.

there is empty table head displayed in UI, below - there is a form with specific input fields that are explained. When all the detailes are filled and Submited, row fo data in table will be displayed as seen in .GIF visualisation, with new Data there is visible db.json file with onclick changes and importing data into server DataBase. Also, with new Data , 2 new buttons appears, which are interactive whether data can be reset and updated, or deleted as indicated. As these processes tested - smooth change of data is also performed in db.json. Visible terminal indicates interactions and running server.



