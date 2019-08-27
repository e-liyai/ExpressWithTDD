const app = require('./src/app');

app.listen(process.env.PORT, () => {
    console.log('-----------------------------------------------');
    console.log(`|      RUNNING ON ${process.env.PORT}                    |`);
    console.log('-----------------------------------------------');
});