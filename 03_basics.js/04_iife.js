// Immmediately Invoked Function Expression  [IIFE]   =  global scope mai pollution kam krne k  liye  iife ka use krte hai 

(function chai(){ 
      console.log("DB Connected");
})();



((name) => {
    console.log(`DB CONNECTED ${name}`);
})('harsh')