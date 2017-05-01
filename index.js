module.exports = {
    hooks: {
        // This is called after the book generation
        "finish": function() {
            console.log("finish!");
            console.log("RUNON");
            var redirectConf = this.config.get("pluginsConfig.language");
            console.log("REDIRLANG", redirectConf);
        }
        
    } //end hooks
    
};







/*

var url = require("url");
var fs = require("fs");

var content = function(path) {
  var s = "<!DOCTYPE HTML><html><head><meta charset='UTF-8'><title>Redirecting... Page moved</title>" +
        "<link rel='canonical' href='{}'><meta http-equiv=refresh content='0; url={:?}'></head>" +
        "<body><h1>Redirecting... Page moved...</h1>" +
        "<p><a href='{}'>Click here if you are not redirected</a></p>" +
        "<script>window.location.href='{}';</script>" +
        "</body></html>";
  return s.replace(/\{\}/gm, path).replace(/\{\:\?\}/gm, encodeURI(path));
};


module.exports = {
  hooks: {
    "finish": function() {
      var redirectConf = this.config.get("pluginsConfig.bulk-redirect");
      var conf = JSON.parse(fs.readFileSync(redirectConf.redirectsFile, "utf-8"));

      if (!conf || !conf.redirects) return;

      var basepath = redirectConf.basepath || "/";
      var g = this;

      conf.redirects.forEach(function (item) {
        if (!item.from || !item.to) return;
        var resolved = url.resolve(basepath, item.to);
        g.output.writeFile(item.from, content(resolved));
        g.log.debug("Redirect " + item.from + " -> " + resolved + "\n");
      });
    }
  }
};

*/