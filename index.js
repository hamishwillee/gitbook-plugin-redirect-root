var url = require("url");
var fs = require("fs");

var content = function(path) {
  var s = "<!DOCTYPE HTML><html><head><meta charset='UTF-8'><title>Redirecting to book root</title>" +
        "<link rel='canonical' href='{}'><meta http-equiv=refresh content='0; url={:?}'></head>" +
        "<body><h1>Redirecting to book root</h1>" +
        "<p><a href='{}'>Click here if you are not redirected</a></p>" +
        "<script>window.location.href='{}';</script>" +
        "</body></html>";
  return s.replace(/\{\}/gm, path).replace(/\{\:\?\}/gm, encodeURI(path));
};

module.exports = {
    hooks: {
        // This is called after the book generation
        "finish": function() {
            //console.log("finish!");

            
            // Infer current language using current output root. 
            // We need this so that we only output our redirect to the root
            var current_language=this.output.root().split('\\').pop().split('/').pop();
            if (current_language=='_book') {
                current_language='';
            }
            
            if (current_language=='') {
                //console.log('No language, so output is root directory, not language directory');
                var confUrl = this.config.get("pluginsConfig.redirect-to-lang.url");
                this.output.writeFile('index.html', content(confUrl));
            }
            

        }
        
    } //end hooks
    
};