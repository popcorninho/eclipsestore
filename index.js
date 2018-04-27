const Discord = require("discord.js");
const prefixo  = "!";
var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Estou pronto PORRA!")
    bot.user.setActivity('Eclipse Store', { type: 'WATCHING' });
    bot.user.setStatus('dnd');
});

/*bot.on('guildMemberAdd', member => {
    member.send("teste");
    var cargo = message.guild.roles.find("name", "Discord Members") ;
    member.addRole(cargo)
});*/

bot.on('message', message => {
    var args = message.content.substring(prefixo.length).split(" ");
    const lider = message.author.id === "412582853834965003"
    const liderid = "412582853834965003"
    const modlog = bot.channels.get('427598627855269898');

        /*if(message.content.startsWith(prefixo + "dev")){
          if(!message.content.slice(5)) return message.channel.send("Escreva algo")
          if(message.content.slice(5)){
          bot.users.get(liderid).send(new Discord.RichEmbed()
          .setColor(0x4286f4)
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setDescription(message.content.slice(5))
          .setFooter("Comando: 2!dev"));}
        }*/

        if(message.content.startsWith(prefixo + "minecraft")){
          message.author.send(new Discord.RichEmbed()
          .setTitle("Deseja comprar alguma conta de Minecraft Unmigrated?")
          .setDescription(`**Preço:** R$15,00\n**Minecraft Unmigrated + Capa da Optifine:** R$35,00\n**Capa da Optifine:** R$20,00\n\n[Acesse nosso site](https://discordapp.com/) ou entre em contato com dragon#1000`)
          .setColor(message.member.highestRole.hexColor))
        }

        if(message.content.startsWith(prefixo + "spotify")){
          message.author.send(new Discord.RichEmbed()
          .setTitle("Deseja comprar algum Spotify Premium?")
          .setDescription(`**Preço Normal:** R$2,90\n**1 Unidade:** R$2,90\n**3 Unidades:**  R$3,90\n**5 Unidades:** R$5,90\n**10 Unidades:** R$7,90\n**50 Unidades:** R$15,00\n**100 Unidades:** R$29,90\n\n[Acesse nosso site](https://discordapp.com/) ou entre em contato com dragon#1000`)
          .setColor(message.member.highestRole.hexColor))
        }

        if(message.content.startsWith(prefixo + "canal")){
          let canal = message.mentions.channels.first()
          if (canal){
          var a = message.content.slice(prefixo.length)
          var y = a.indexOf(">")
          var f = a.slice(y + 1)
          if (f){
          canal.send(f).catch(erro => message.channel.send(`Não tenho permissão para enviar mensagem no canal ${canal}`)).catch(erro => message.author.send('Não posso enviar mensagens nos canais: `' + message.channel.name + "`, `" + canal.name +"`"));
          }if (!f){
            message.channel.send("Escreva alguma mensagem para eu poder enviar").catch(erro => message.author.send('Não posso enviar mensagens no canal: `' + message.channel.name + "`"))
          }}
          if (!canal){
            var k = message.content.slice(prefixo.length + 6)
            if (k){
           message.channel.send(k).catch(erro => message.author.send('Não posso enviar mensagens no canal: `' + message.channel.name + "`"))
         }if (!k){
           message.channel.send("Escreva alguma mensagem para eu poder enviar").catch(erro => message.author.send('Não posso enviar mensagens no canal: `' + message.channel.name + "`"))
         }}}

         if(message.content.startsWith(prefixo + "user")){
           let u = message.mentions.users.first()
           var a = message.content.slice(prefixo.length)
           var y = a.indexOf(">")
           var f = a.slice(y + 1)
           if (!u){
               message.channel.send("Mencione um usuário")
           }
           if (u){
           if(f){
             u.send(f)
             message.channel.send("Mensagem enviada")
           }
           if(!f){
             message.channel.send("Escreva alguma mensagem para eu poder enviar")
           }}}

        if(message.content.startsWith(prefixo + "fale")){
          var y = message.content.slice(6)
          if (y){
          message.channel.send(y)
        }
          if(!y){
            message.channel.send("Escreva alguma mensagem para eu poder enviar")
          }}

        if(message.content.startsWith(prefixo + "apagar")){
          var cargu = message.guild.roles.find("name", "MOD")
          if (message.member.roles.has(cargu.id)) {
            const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
            if (!amount) return message.reply('Especifique o tanto de mensagens que devo apagar');
              message.channel.fetchMessages({
              limit: amount,
              }).then((messages) => {
              message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
              message.channel.send(`${amount} mensagens excluídas`).then(msg => msg.delete(5000));});}
          else {(message.reply("Você não tem permissão para esse comando"));}}

        if(message.content.startsWith(prefixo + "kick")){
          var cargu = message.guild.roles.find("name", "MOD")
          if (message.member.roles.has(cargu.id)) {
          let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
          let useer = message.mentions.users.first()
          if(!kuser) return message.channel.send("Mencione um usário");

          function reason() {

          var n = 2;
          var a = message.content.split(' ')
          var first = a.slice(0, n).join(' ')
          var second =  a.slice(n).join(' ')

          if (!second) return 'Sem razão especificada'
          if (second) return second
          }

          if(kuser.kickable){
          kuser.kick(reason());
          modlog.send(new Discord.RichEmbed()
          .setTitle("KICK")
          .setColor(0x4286f4)
          .addField("membro expulso", "**Nome:** " + kuser + "  ||  " + useer.tag + "\n**ID:** " + kuser.id)
          .addField("expulso pelo:", "**Nome:** <@" + message.author.id + ">  ||  " + message.author.tag + "\n**ID:** " + message.author.id)
          .addField("expulso no:", message.channel)
          .addField("tempo:", message.createdAt.toLocaleString())
          .addField("razão:", reason()))
        }
        if(!kuser.kickable){
          message.channel.send("Esse membro não pode ser expulso")
        }}
        else{
          message.channel.send("Você não tem permissão")
        }
      }

      if(message.content.startsWith(prefixo + "ban")){
        var cargu = message.guild.roles.find("name", "MOD")
        if (message.member.roles.has(cargu.id)) {
        let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        let useer = message.mentions.users.first()
        if(!kuser) return message.channel.send("Mencione um usário");

        function reason() {

        var n = 2;
        var a = message.content.split(' ')
        var first = a.slice(0, n).join(' ')
        var second =  a.slice(n).join(' ')

        if (!second) return 'Sem razão especificada'
        if (second) return second
        }

        if(kuser.bannable){
        kuser.ban(reason());
        modlog.send(new Discord.RichEmbed()
        .setTitle("BAN")
        .setColor(0x4286f4)
        .addField("membro banido", "**Nome:** " + kuser + "  ||  " + useer.tag + "\n**ID:** " + kuser.id)
        .addField("banido pelo:", "**Nome:** <@" + message.author.id + ">  ||  " + message.author.tag + "\n**ID:** " + message.author.id)
        .addField("banido no:", message.channel)
        .addField("tempo:", message.createdAt.toLocaleString())
        .addField("razão:", reason()))
      }
      if (!kuser.bannable)
        message.channel.send("Esse membro não pode ser banido")
      }
      else{
        message.channel.send("Você não tem permissão")
      }
    }

        if(message.content.startsWith(prefixo + "avatar")){
          let user = message.mentions.users.first() || message.author;

          message.channel.send(new Discord.RichEmbed()
          .setColor(0x4286f4)
          .setDescription("Avatar de " + user.username)
          .setImage(user.displayAvatarURL))
        }

        if(message.content.toLowerCase().startsWith(prefixo + "serverinfo")){
          var voz = message.guild.channels.filter(c=>c.type==="voice").size
          var texto = message.guild.channels.filter(c=>c.type==="text").size

          function formatDate(date) {
            var monthNames = [
              "Janeiro", "Fevereiro", "Março",
              "Abril", "Maio", "Junho", "Julho",
              "Augosto", "Setembro", "Outubro",
              "Novembro", "Dezembro"
            ];

            var diaNomes = [
              "Domingo", "Segunda-feira", "Terça-feira",
              "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
            ]

            var minutos = message.guild.createdAt.getMinutes();
            var hora = message.guild.createdAt.getHours();
            var day = message.guild.createdAt.getDate();
            var dia = message.guild.createdAt.getDay();
            var monthIndex = message.guild.createdAt.getMonth();
            var year = message.guild.createdAt.getFullYear();

            return diaNomes[dia] + ', ' + day + ' de ' + monthNames[monthIndex] + ' de ' + year + ' às ' + hora + ' Horas e ' + minutos + ' Minutos';
          }

          message.channel.send(new Discord.RichEmbed()
          .setColor(0x48d11f)
          .setAuthor("serverinfo", message.author.avatarURL)
          .addField("Nome:", message.guild.name, true)
          .addField("Dono:", message.guild.owner.user.tag, true)
          .addField("Usuários:", message.guild.members.size - message.guild.members.filter(m=>m.user.bot).size, true)
          .addField("BOTs:", message.guild.members.filter(m=>m.user.bot).size, true)
          .addField("Membros no total:", message.guild.members.size, true)
          //.addField("Cargos:", message.guild.roles.map(r => r.name).join(", "), true)
          .addField("Cargos:", message.guild.roles.size, true)
          .addField("Canais de texto:", texto, true)
          .addField("Canais de voz:", voz, true)
          .addField("Canais no total:", voz + texto, true)
          //.addField("Criado em:", message.guild.createdAt.toLocaleString(), true)
          .addField("Data da criação:", (formatDate(new Date())), false)
          .setThumbnail(message.guild.iconURL)
          .setFooter("Comando ultilizado por " + message.author.username))
        }

        if(message.content.startsWith(prefixo + "sa 1")){
        if(lider){
        const lama = message.content.split(" ").join(" ").slice(7);
        bot.user.setActivity(lama, { type: 'PLAYING' })
        message.channel.send(new Discord.RichEmbed()
        .setColor(0x48d11f)
        .setAuthor("e!sa", message.author.avatarURL)
        .setTitle("Atividade alterada para: Jogando " + lama)
        .setFooter(message.author.username + " meu líder"))
        }
        if(!lider){
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xcc2020)
            .setAuthor("e!sa", message.author.avatarURL)
            .setTitle("Você não tem permissão para este comando")
            .setFooter(message.author.username + " bobinho"))
        }}

        if(message.content.startsWith(prefixo + "sa 2")){
        if(lider){
        const lama = message.content.split(" ").join(" ").slice(7);
        bot.user.setActivity(lama, { type: 'LISTENING' })
        message.channel.send(new Discord.RichEmbed()
        .setColor(0x48d11f)
        .setAuthor("e!sa", message.author.avatarURL)
        .setTitle("Atividade alterada para: Ouvindo " + lama)
        .setFooter(message.author.username + " meu líder"))
        }
        if(!lider){
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xcc2020)
            .setAuthor("e!sa", message.author.avatarURL)
            .setTitle("Você não tem permissão para este comando")
            .setFooter(message.author.username + " bobinho"))
        }}

        if(message.content.startsWith(prefixo + "sa 3")){
        if(lider){
        const lama = message.content.split(" ").join(" ").slice(7);
        bot.user.setActivity(lama, { type: 'WATCHING' })
        message.channel.send(new Discord.RichEmbed()
        .setColor(0x48d11f)
        .setAuthor("e!sa", message.author.avatarURL)
        .setTitle("Atividade alterada para: Assistindo " + lama)
        .setFooter(message.author.username + " meu líder"))
        }
        if(!lider){
            message.channel.send(new Discord.RichEmbed()
            .setColor(0xcc2020)
            .setAuthor("e!sa", message.author.avatarURL)
            .setTitle("Você não tem permissão para este comando")
            .setFooter(message.author.username + " bobinho"))
        }}

/*PLAYING
STREAMING
LISTENING
WATCHING*/
})

bot.login(process.env.BOT_TOKEN);
