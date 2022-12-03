module.exports = {
    name: "ping",
    aliases: ["latencia", "ms", "p"],
    desc: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {
        message.reply(`🏓 | ¡Pong! El Ping del Bot es de \`${client.ws.ping}\``)
    }
}