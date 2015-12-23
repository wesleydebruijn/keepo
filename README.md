<p align="center">
	<img src="https://raw.githubusercontent.com/wesleydebruijn/keepo/master/public/img/logo.png" />
</p>
# Keepo
An easy way to keep track of the things you've ordered

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
cd backend
sequelize db:migrate
sequelize db:seed
```
### Start servers
```js
npm start
```

<i>Not to be confused with <img src="https://static-cdn.jtvnw.net/emoticons/v1/1902/1.0" /></i>
