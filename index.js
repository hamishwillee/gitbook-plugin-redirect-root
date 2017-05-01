module.exports = {

        // This is called after the book generation
        "finish": function() {
            console.log("finish!");
            console.log("RUNON");
            var redirectConf = this.config.get("pluginsConfig.language");
            console.log("REDIRLANG", redirectConf);
        }
    }
};

