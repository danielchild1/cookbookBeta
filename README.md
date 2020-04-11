# A starter code for assignments 4 and 5 and final projects
This is a full-stack express-powered application. It uses `babel` for ES6 programming, `mongoose` for object document modeling, SASS for styling, and `nodemon` for watching file changes and restarting the server.

It consists of two parts: a front-end represented by the `ng` folder and its contents and a back-end which is everything else. The front-end will no longer run as a stand-alone app using the `ng serve` command; instead it is now a part of this overall full-stack application and needs only to be compiled into the `ng/build` folder.

## Installation
### For the back-end
```bash
npm install
```

Also install `nodemon` globally if you have not done so already.
```bash
npm install nodemon -g
```

### For the front-end
```bash
cd ng
npm install
```
## Running the application
### For the front-end
We don't run the angular front-end on its own. Instead we compile it to the `ng/build` folder using the following commands:

```bash
cd ng
ng build --output-path=build --watch
```

### For the back-end
```bash
npm start
```

Then go to `http://localhost:8080`.
