
const myPromise = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        //resolve(100);
        reject('el dinero llegara pronto')
    }, 2000);
});

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`);
    }
).catch(
    (reason) => {
        console.warn(reason);
    }
).finally(
    () => {
        console.log("la vida continua!!")
    }
);