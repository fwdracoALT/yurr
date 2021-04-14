const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Youtube",
        state: "coding at the same time",
        startTimestamp: new Date(150766588476),
        largeImageKey: "large",
        largeImageText: "YURR",
        smallImageKey: "small",
        smallImageText: "MY BRO SHIT IS ASS LMAO",
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '831729195381424138'
})
