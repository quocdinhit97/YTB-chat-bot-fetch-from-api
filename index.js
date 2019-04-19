const login = require("facebook-chat-api");
const axios = require("axios");
 
login({email: "", password: ""}, (err, api) => {
    if(err) return console.error(err);
 
    api.listen((err, message) => {
      axios.get('http://api.minhhieu.asia/vi.php',{params:{text:message.body}})
      .then( response =>{
        api.sendMessage(response.data, message.threadID);
      } )
 
    });
});
 