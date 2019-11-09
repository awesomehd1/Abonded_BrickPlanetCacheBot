const Eris = require("eris");

var bot = new Eris("NDIwMDcwNDkxNDI5MTQyNTI5.DX5UpQ.MyZsQe1S3wv7C3jOsz0UxdfneT8");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!help") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Commands", // Title of the embed
                description: "here are some lists!",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "!<tags>", // Field title
                        value: "Allowed tags: BP_forums1, BP_Games, BP_Testing", // Field
                        inline: false // Whether you want multiple fields in same line
                    },
                    {
                        name: "!author",
                        value: "Who made this? :thinking:",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "BrickPlanet_Cache | MOTD: Testing srry"
                }
            }
        });
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!BP_forums1") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "okay already chached", // Title of the embed
                description: "We have rendered of the site!",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "LINKS", // Field title
                        value: "https://www.brickplanet.com/forum/thread/149035/", // Field
                        inline: false // Whether you want multiple fields in same line
                    },
                    {
                        name: "Info",
                        value: ":thinking: no info",
                        inline: false
                    }
                ],
                footer: { // Footer text
                    text: "BrickPlanet_Cache | MOTD: Testing srry"
                }
            }
        });
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "!BP_forums0") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "ooops", // Title of the embed
                description: "303 Error",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: ":slight_frown:", // Field title
                        value: "RIP!", // Field
                        inline: false // Whether you want multiple fields in same line
                    },
                    {
                        name: "",
                        value: "",
                        inline: false
                    }
                ],
                footer: { // Footer text
                    text: "BrickPlanet_Cache | MOTD: Testing srry"
                }
            }
        });
    }
});

bot.connect(); // Get the bot to connect to Discord