'use strict';
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**BOXY Coin Tipper**__\n    **!tipboxy balance** : get your balance\n    **!tipboxy deposit** : get address for your deposits\n    **!tipboxy withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipboxy <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipboxy private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
  }
};
