{"changed":false,"filter":false,"title":"init.js","tooltip":"~/.c9/init.js","value":"// You can access plugins via the 'services' global variable\n/*global services, plugin*/\n\n// to load plugins use\n// services.pluginManager.loadPackage([\n//     \"https://<user>.github.io/<project>/build/package.<name>.js\",\n//     \"~/.c9/plugins/<name>/package.json\",\n// ]);\n\nvar url = \"https://cdn.rawgit.com/wakatime/c8-wakatime/master\"\nvar pathConfig = {};\npathConfig[\"plugins/wakatime\"] = url\nrequire.config({paths: pathConfig})\n\nrequire([\"plugins/wakatime/wakatime\", \"plugins/wakatime/install\"], function(plugin, install) {\n    plugin({}, services, function(e, r) {\n        r.wakatime.name = \"wakatime\";\n        console.log(e, r)\n        services.installer.createSession(\"wakatime\", install.version, install)\n    })\n})","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"remove","lines":["9"],"id":1},{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["8"]}],[{"start":{"row":8,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["var url = \"https://cdn.rawgit.com/wakatime/c8-wakatime/master\"","var pathConfig = {};","pathConfig[\"plugins/wakatime\"] = url","require.config({paths: pathConfig})","","require([\"plugins/wakatime/wakatime\", \"plugins/wakatime/install\"], function(plugin, install) {","    plugin({}, services, function(e, r) {","        r.wakatime.name = \"wakatime\";","        console.log(e, r)","        services.installer.createSession(\"wakatime\", install.version, install)","    })","})"],"id":2}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":9,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["var url = \"https://cdn.rawgit.com/wakatime/c8-wakatime/master\"","var pathConfig = {};","pathConfig[\"plugins/wakatime\"] = url","require.config({paths: pathConfig})","","require([\"plugins/wakatime/wakatime\", \"plugins/wakatime/install\"], function(plugin, install) {","    plugin({}, services, function(e, r) {","        r.wakatime.name = \"wakatime\";","        console.log(e, r)","        services.installer.createSession(\"wakatime\", install.version, install)","    })","})"],"id":4}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":1},"end":{"row":20,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1519630866211}