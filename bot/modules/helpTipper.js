'use strict';
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**BOXY Coin Tipper**__\n    **$bal** : get your balance\n    **$deposit** : get address for your deposits\n    **$withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **$tip <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **$tip private <user> <amount>** : put private before Mentioning a user to tip them privately.\n    **$soak <AMOUNT>** : gives coins to all Active users.\n.   **$rain <AMOUNT>** : gives coins to users who have sent a message recently.\n    **$drizzle <AMOUNT>** : gives coins to the last 5 active users.\n' +
        '    **$price** : get price of BOXY coin\n    **$block** : get current block height\n    **$supply** : get # of BOXY coins are in supply\n'
    );
  }
};
