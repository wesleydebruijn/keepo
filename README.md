<p align="center">
	<img src="https://raw.githubusercontent.com/wesleydebruijn/keepo/master/public/img/logo.png" />
</p>
# Keepo
An easy way to keep track of the things you've ordered

## Architecture
This project is made to practice with popular web technologies. The following image shows the architecture of the front and back-end of this application.
<p align="center">
	<img src="https://raw.githubusercontent.com/wesleydebruijn/keepo/master/public/img/keepoarchitecture.png" />
</p>

### Front-end
- [Materialize](https://github.com/Dogfalo/materialize)
- [Angular 2](https://github.com/angular/angular)

### Back-end
- [NodeJS](https://github.com/nodejs)
- [ExpressJS](https://github.com/expressjs)
- [socket.io](https://github.com/socketio/socket.io)
- [Mongoose](https://github.com/Automattic/mongoose) for [MongoDB](https://github.com/mongodb/mongo)
- [Sequelize](https://github.com/sequelize/sequelize) for [MySQL](https://github.com/mysql)

## Installation
### Global packages
Install the following packages globally
```js
npm install gulp -g  
npm install sequelize -g  
npm install concurrently -g  
```
### Database
#### Config
Edit database configuration in <b>backend/config/config.json</b>
#### Migrations & Seeds
```js
cd backend/sequelize/
sequelize db:migrate
sequelize db:seed
```
### Start servers
```js
npm start
```

<i>Not to be confused with <img src="https://static-cdn.jtvnw.net/emoticons/v1/1902/1.0" /></i>
