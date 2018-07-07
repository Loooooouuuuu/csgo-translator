Tail = require('tail').Tail;
tail = new Tail("/home/lou/.steam/steam/steamapps/common/Counter-Strike Global Offensive/csgo/test.log");
const translate = require('google-translate-api');
tail.on("line", function(data) {
   if(data.indexOf(':') > -1) {
    string = data.split(/:(.+)/)[1]
    translate(string, {to: 'fr'}).then(res => {
      console.log(string+" => "+res.text);
      console.log(res.from.language);
    }).catch(err => {
        console.error(err);
    });
  }
});
