
const Discord = require('discord.js');
const soap = new Discord.Client();
const prefix = '$';
let cooldown = new Set();
let cdsec = 1;


soap.on('ready', function() {
    console.log('soap started.');
});
soap.on('message', function(message) {
  if(message.author.equals(soap.user)) return;

      if (!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        message.reply('You already tried your luck.')
        return message.reply('Reset time will be 24 hours from now.').then(message => {message.delete(10000)});
      }
      if(!message.member.hasPermission('ADMINISTRATOR')){
          cooldown.add(message.member.id);
        }
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdsec * 86000000)

        var daily = [
          'No Luck',                        //001 = 0.01%
          'No Luck',                        //002
          'No Luck',                        //003
          'No Luck',                        //004
          'No Luck',                        //005
          'No Luck',                        //006
          'No Luck',                        //007
          'No Luck',                        //008
          'No Luck',                        //009
          'No Luck',                        //010 = 0.10%
          'No Luck',                        //011
          'No Luck',                        //012
          'No Luck',                        //013
          'No Luck',                        //014
          'No Luck',                        //015
          'No Luck',                        //016
          'No Luck',                        //017
          'No Luck',                        //018
          'No Luck',                        //019
          'No Luck',                        //020 = 10%
          'No Luck',                        //021
          'No Luck',                        //022
          'No Luck',                        //023
          'No Luck',                        //024
          'No Luck',                        //025
          'No Luck',                        //026
          'No Luck',                        //027
          'No Luck',                        //028
          'No Luck',                        //029
          'No Luck',                        //030 = 20%
          'No Luck',                        //031
          'No Luck',                        //032
          'No Luck',                        //033
          'No Luck',                        //034
          'No Luck',                        //035
          'No Luck',                        //036
          'No Luck',                        //037
          'No Luck',                        //038
          'No Luck',                        //039
          'No Luck',                        //040 = 30%
          'No Luck',                        //041
          'No Luck',                        //042
          'No Luck',                        //043
          'No Luck',                        //044
          'No Luck',                        //045
          'No Luck',                        //046
          'No Luck',                        //047
          'No Luck',                        //048
          'No Luck',                        //049
          'No Luck',                        //050 = 40%
          'No Luck',                        //051
          'No Luck',                        //052
          'No Luck',                        //053
          'No Luck',                        //054
          'No Luck',                        //055
          'No Luck',                        //056
          'No Luck',                        //057
          'No Luck',                        //058
          'No Luck',                        //059
          'No Luck',                        //060 = 50%
          'No Luck',                        //061
          'No Luck',                        //062
          'No Luck',                        //063
          'No Luck',                        //064
          'No Luck',                        //065
          'No Luck',                        //066
          'No Luck',                        //067
          'No Luck',                        //068
          'No Luck',                        //069
          'No Luck',                        //070 = 60%
          'No Luck',                        //071
          'No Luck',                        //072
          'No Luck',                        //073
          'No Luck',                        //074
          'No Luck',                        //075
          'No Luck',                        //076
          'No Luck',                        //077
          'No Luck',                        //078
          'No Luck',                        //079
          'No Luck',                        //080 = 70%
  ///////////////////////////////////////////////////////////////////////////////
          //'You just WON 100 SPINA!',           //001 = 0.01%
          //'You just WON 100 SPINA!',           //002
          //'You just WON 100 SPINA!',           //003
          //'You just WON 100 SPINA!',           //004
          //'You just WON 100 SPINA!',           //005
          //'You just WON 100 SPINA!',           //006
          //'You just WON 100 SPINA!',           //007
          //'You just WON 100 SPINA!',           //008
          //'You just WON 100 SPINA!',           //009
          //'You just WON 100 SPINA!',           //010 = 0.10%
          //'You just WON 100 SPINA!',           //011
          //'You just WON 100 SPINA!',           //012
          //'You just WON 100 SPINA!',           //013
          //'You just WON 100 SPINA!',           //014
          //'You just WON 100 SPINA!',           //015
          //'You just WON 100 SPINA!',           //016
          //'You just WON 100 SPINA!',           //017
          //'You just WON 100 SPINA!',           //018
          //'You just WON 100 SPINA!',           //019
          //'You just WON 100 SPINA!',           //020 = 10%
          //'You just WON 100 SPINA!',           //021
          //'You just WON 100 SPINA!',           //022
          //'You just WON 100 SPINA!',           //023
          //'You just WON 100 SPINA!',           //024
          //'You just WON 100 SPINA!',           //025
          //'You just WON 100 SPINA!',           //026
          //'You just WON 100 SPINA!',           //027
          //'You just WON 100 SPINA!',           //028
          //'You just WON 100 SPINA!',           //029
          //'You just WON 100 SPINA!',           //030 = 20%
          //'You just WON 100 SPINA!',           //031
          //'You just WON 100 SPINA!',           //032
          //'You just WON 100 SPINA!',           //033
          //'You just WON 100 SPINA!',           //034
          //'You just WON 100 SPINA!',           //035
          //'You just WON 100 SPINA!',           //036 = 26%
          //'You just WON 100 SPINA!',           //037
          //'You just WON 100 SPINA!',           //038
          //'You just WON 100 SPINA!',           //039
          //'You just WON 100 SPINA!',           //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          //'You just WON 500 SPINA!',                        //001 = 0.01%
          //'You just WON 500 SPINA!',                        //002
          //'You just WON 500 SPINA!',                        //003
          //'You just WON 500 SPINA!',                        //004
          //'You just WON 500 SPINA!',                        //005
          //'You just WON 500 SPINA!',                        //006
          //'You just WON 500 SPINA!',                        //007
          //'You just WON 500 SPINA!',                        //008
          //'You just WON 500 SPINA!',                        //009
          //'You just WON 500 SPINA!',                        //010 = 0.10%
          //'You just WON 500 SPINA!',                        //011
          //'You just WON 500 SPINA!',                        //012
          //'You just WON 500 SPINA!',                        //013
          //'You just WON 500 SPINA!',                        //014
          //'You just WON 500 SPINA!',                        //015
          //'You just WON 500 SPINA!',                        //016
          //'You just WON 500 SPINA!',                        //017
          //'You just WON 500 SPINA!',                        //018
          //'You just WON 500 SPINA!',                        //019
          //'You just WON 500 SPINA!',                        //020 = 10%
          //'You just WON 500 SPINA!',                        //021
          //'You just WON 500 SPINA!',                        //022
          //'You just WON 500 SPINA!',                        //023
          //'You just WON 500 SPINA!',                        //024
          //'You just WON 500 SPINA!',                        //025
          //'You just WON 500 SPINA!',                        //026
          //'You just WON 500 SPINA!',                        //027
          //'You just WON 500 SPINA!',                        //028
          //'You just WON 500 SPINA!',                        //029
          //'You just WON 500 SPINA!',                        //030 = 20%
          //'You just WON 500 SPINA!',                        //031
          //'You just WON 500 SPINA!',                        //032 = 22%
          //'You just WON 500 SPINA!',                        //033
          //'You just WON 500 SPINA!',                        //034
          //'You just WON 500 SPINA!',                        //035
          //'You just WON 500 SPINA!',                        //036
          //'You just WON 500 SPINA!',                        //037
          //'You just WON 500 SPINA!',                        //038
          //'You just WON 500 SPINA!',                        //039
          //'You just WON 500 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          //'You just WON 1,000 SPINA!',                        //001 = 0.01%
          //'You just WON 1,000 SPINA!',                        //002
          //'You just WON 1,000 SPINA!',                        //003
          //'You just WON 1,000 SPINA!',                        //004
          //'You just WON 1,000 SPINA!',                        //005
          //'You just WON 1,000 SPINA!',                        //006
          //'You just WON 1,000 SPINA!',                        //007
          //'You just WON 1,000 SPINA!',                        //008
          //'You just WON 1,000 SPINA!',                        //009
          //'You just WON 1,000 SPINA!',                        //010 = 0.10%
          //'You just WON 1,000 SPINA!',                        //011
          //'You just WON 1,000 SPINA!',                        //012
          //'You just WON 1,000 SPINA!',                        //013
          //'You just WON 1,000 SPINA!',                        //014
          //'You just WON 1,000 SPINA!',                        //015
          //'You just WON 1,000 SPINA!',                        //016
          //'You just WON 1,000 SPINA!',                        //017
          //'You just WON 1,000 SPINA!',                        //018
          //'You just WON 1,000 SPINA!',                        //019
          //'You just WON 1,000 SPINA!',                        //020 = 10%
          //'You just WON 1,000 SPINA!',                        //021
          //'You just WON 1,000 SPINA!',                        //022
          //'You just WON 1,000 SPINA!',                        //023
          //'You just WON 1,000 SPINA!',                        //024
          //'You just WON 1,000 SPINA!',                        //025
          //'You just WON 1,000 SPINA!',                        //026
          //'You just WON 1,000 SPINA!',                        //027
          //'You just WON 1,000 SPINA!',                        //028 = 18%
          //'You just WON 1,000 SPINA!',                        //029
          //'You just WON 1,000 SPINA!',                        //030 = 20%
          //'You just WON 1,000 SPINA!',                        //031
          //'You just WON 1,000 SPINA!',                        //032
          //'You just WON 1,000 SPINA!',                        //033
          //'You just WON 1,000 SPINA!',                        //034
          //'You just WON 1,000 SPINA!',                        //035
          //'You just WON 1,000 SPINA!',                        //036
          //'You just WON 1,000 SPINA!',                        //037
          //'You just WON 1,000 SPINA!',                        //038
          //'You just WON 1,000 SPINA!',                        //039
          //'You just WON 1,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          //'You just WON 5,000 SPINA!',                        //001 = 0.01%
          //'You just WON 5,000 SPINA!',                        //002
          //'You just WON 5,000 SPINA!',                        //003
          //'You just WON 5,000 SPINA!',                        //004
          //'You just WON 5,000 SPINA!',                        //005
          //'You just WON 5,000 SPINA!',                        //006
          //'You just WON 5,000 SPINA!',                        //007
          //'You just WON 5,000 SPINA!',                        //008
          //'You just WON 5,000 SPINA!',                        //009
          //'You just WON 5,000 SPINA!',                        //010 = 0.10%
          //'You just WON 5,000 SPINA!',                        //011
          //'You just WON 5,000 SPINA!',                        //012
          //'You just WON 5,000 SPINA!',                        //013
          //'You just WON 5,000 SPINA!',                        //014
          //'You just WON 5,000 SPINA!',                        //015
          //'You just WON 5,000 SPINA!',                        //016
          //'You just WON 5,000 SPINA!',                        //017
          //'You just WON 5,000 SPINA!',                        //018
          //'You just WON 5,000 SPINA!',                        //019
          //'You just WON 5,000 SPINA!',                        //020 = 10%
          //'You just WON 5,000 SPINA!',                        //021
          //'You just WON 5,000 SPINA!',                        //022
          //'You just WON 5,000 SPINA!',                        //023
          //'You just WON 5,000 SPINA!',                        //024 = 14%
          //'You just WON 5,000 SPINA!',                        //025
          //'You just WON 5,000 SPINA!',                        //026
          //'You just WON 5,000 SPINA!',                        //027
          //'You just WON 5,000 SPINA!',                        //028
          //'You just WON 5,000 SPINA!',                        //029
          //'You just WON 5,000 SPINA!',                        //030 = 20%
          //'You just WON 5,000 SPINA!',                        //031
          //'You just WON 5,000 SPINA!',                        //032
          //'You just WON 5,000 SPINA!',                        //033
          //'You just WON 5,000 SPINA!',                        //034
          //'You just WON 5,000 SPINA!',                        //035
          //'You just WON 5,000 SPINA!',                        //036
          //'You just WON 5,000 SPINA!',                        //037
          //'You just WON 5,000 SPINA!',                        //038
          //'You just WON 5,000 SPINA!',                        //039
          //'You just WON 5,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          //'You just WON 10,000 SPINA!',                        //001 = 0.01%
          //'You just WON 10,000 SPINA!',                        //002
          //'You just WON 10,000 SPINA!',                        //003
          //'You just WON 10,000 SPINA!',                        //004
          //'You just WON 10,000 SPINA!',                        //005
          //'You just WON 10,000 SPINA!',                        //006
          //'You just WON 10,000 SPINA!',                        //007
          //'You just WON 10,000 SPINA!',                        //008
          //'You just WON 10,000 SPINA!',                        //009
          //'You just WON 10,000 SPINA!',                        //010 = 0.10%
          //'You just WON 10,000 SPINA!',                        //011
          //'You just WON 10,000 SPINA!',                        //012
          //'You just WON 10,000 SPINA!',                        //013
          //'You just WON 10,000 SPINA!',                        //014
          //'You just WON 10,000 SPINA!',                        //015
          //'You just WON 10,000 SPINA!',                        //016
          //'You just WON 10,000 SPINA!',                        //017
          //'You just WON 10,000 SPINA!',                        //018
          //'You just WON 10,000 SPINA!',                        //019
          //'You just WON 10,000 SPINA!',                        //020 = 10%
          //'You just WON 10,000 SPINA!',                        //021
          //'You just WON 10,000 SPINA!',                        //022
          //'You just WON 10,000 SPINA!',                        //023
          //'You just WON 10,000 SPINA!',                        //024
          //'You just WON 10,000 SPINA!',                        //025
          //'You just WON 10,000 SPINA!',                        //026
          //'You just WON 10,000 SPINA!',                        //027
          //'You just WON 10,000 SPINA!',                        //028
          //'You just WON 10,000 SPINA!',                        //029
          //'You just WON 10,000 SPINA!',                        //030 = 20%
          //'You just WON 10,000 SPINA!',                        //031
          //'You just WON 10,000 SPINA!',                        //032
          //'You just WON 10,000 SPINA!',                        //033
          //'You just WON 10,000 SPINA!',                        //034
          //'You just WON 10,000 SPINA!',                        //035
          //'You just WON 10,000 SPINA!',                        //036
          //'You just WON 10,000 SPINA!',                        //037
          //'You just WON 10,000 SPINA!',                        //038
          //'You just WON 10,000 SPINA!',                        //039
          //'You just WON 10,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          //'You just WON 50,000 SPINA!',                        //001 = 0.01%
          //'You just WON 50,000 SPINA!',                        //002
          //'You just WON 50,000 SPINA!',                        //003
          //'You just WON 50,000 SPINA!',                        //004
          //'You just WON 50,000 SPINA!',                        //005
          //'You just WON 50,000 SPINA!',                        //006
          //'You just WON 50,000 SPINA!',                        //007
          //'You just WON 50,000 SPINA!',                        //008
          //'You just WON 50,000 SPINA!',                        //009
          //'You just WON 50,000 SPINA!',                        //010 = 0.10%
          //'You just WON 50,000 SPINA!',                        //011
          //'You just WON 50,000 SPINA!',                        //012
          //'You just WON 50,000 SPINA!',                        //013
          //'You just WON 50,000 SPINA!',                        //014 = 4%
          //'You just WON 50,000 SPINA!',                        //015
          //'You just WON 50,000 SPINA!',                        //016
          //'You just WON 50,000 SPINA!',                        //017
          //'You just WON 50,000 SPINA!',                        //018
          //'You just WON 50,000 SPINA!',                        //019
          //'You just WON 50,000 SPINA!',                        //020 = 10%
          //'You just WON 50,000 SPINA!',                        //021
          //'You just WON 50,000 SPINA!',                        //022
          //'You just WON 50,000 SPINA!',                        //023
          //'You just WON 50,000 SPINA!',                        //024
          //'You just WON 50,000 SPINA!',                        //025
          //'You just WON 50,000 SPINA!',                        //026
          //'You just WON 50,000 SPINA!',                        //027
          //'You just WON 50,000 SPINA!',                        //028
          //'You just WON 50,000 SPINA!',                        //029
          //'You just WON 50,000 SPINA!',                        //030 = 20%
          //'You just WON 50,000 SPINA!',                        //031
          //'You just WON 50,000 SPINA!',                        //032
          //'You just WON 50,000 SPINA!',                        //033
          //'You just WON 50,000 SPINA!',                        //034
          //'You just WON 50,000 SPINA!',                        //035
          //'You just WON 50,000 SPINA!',                        //036
          //'You just WON 50,000 SPINA!',                        //037
          //'You just WON 50,000 SPINA!',                        //038
          //'You just WON 50,000 SPINA!',                        //039
          //'You just WON 50,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You got Weapon S36!',                        //001 = 0.01%
          'You got Weapon S36!',                        //002 = 0.02%
          //'You got Weapon S36!',                        //003
          //'You got Weapon S36!',                        //004
          //'You got Weapon S36!',                        //005
          //'You got Weapon S36!',                        //006
          //'You got Weapon S36!',                        //007
          //'You got Weapon S36!',                        //008
          //'You got Weapon S36!',                        //009
          //'You got Weapon S36!',                        //010 = 0.10%
          //'You got Weapon S36!',                        //011 = 1%
          //'You got Weapon S36!',                        //012
          //'You got Weapon S36!',                        //013
          //'You got Weapon S36!',                        //014
          //'You got Weapon S36!',                        //015
          //'You got Weapon S36!',                        //016
          //'You got Weapon S36!',                        //017
          //'You got Weapon S36!',                        //018
          //'You got Weapon S36!',                        //019
          //'You got Weapon S36!',                        //020 = 10%
          //'You got Weapon S36!',                        //021
          //'You got Weapon S36!',                        //022
          //'You got Weapon S36!',                        //023
          //'You got Weapon S36!',                        //024
          //'You got Weapon S36!',                        //025
          //'You got Weapon S36!',                        //026
          //'You got Weapon S36!',                        //027
          //'You got Weapon S36!',                        //028
          //'You got Weapon S36!',                        //029
          //'You got Weapon S36!',                        //030 = 20%
          //'You got Weapon S36!',                        //031
          //'You got Weapon S36!',                        //032
          //'You got Weapon S36!',                        //033
          //'You got Weapon S36!',                        //034
          //'You got Weapon S36!',                        //035
          //'You got Weapon S36!',                        //036
          //'You got Weapon S36!',                        //037
          //'You got Weapon S36!',                        //038
          //'You got Weapon S36!',                        //039
          //'You got Weapon S36!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You got Weapon M16!',                        //001 = 0.01%
          'You got Weapon M16!',                        //002
          'You got Weapon M16!',                        //003
          'You got Weapon M16!',                        //004
          'You got Weapon M16!',                        //005
          'You got Weapon M16!',                        //006
          'You got Weapon M16!',                        //007
          'You got Weapon M16!',                        //008
          'You got Weapon M16!',                        //009
          'You got Weapon M16!',                        //010 = 0.10%
          'You got Weapon M16!',                        //011
          'You got Weapon M16!',                        //012
          'You got Weapon M16!',                        //013
          'You got Weapon M16!',                        //014
          'You got Weapon M16!',                        //015
          'You got Weapon M16!',                        //016
          'You got Weapon M16!',                        //017
          'You got Weapon M16!',                        //018
          'You got Weapon M16!',                        //019
          'You got Weapon M16!',                        //020 = 10%
          'You got Weapon M16!',                        //021
          'You got Weapon M16!',                        //022
          'You got Weapon M16!',                        //023
          'You got Weapon M16!',                        //024
          'You got Weapon M16!',                        //025
          'You got Weapon M16!',                        //026
          'You got Weapon M16!',                        //027
          'You got Weapon M16!',                        //028 = 18%
          //'You got Weapon M16!',                        //029
          //'You got Weapon M16!',                        //030 = 20%
          //'You got Weapon M16!',                        //031
          //'You got Weapon M16!',                        //032
          //'You got Weapon M16!',                        //033
          //'You got Weapon M16!',                        //034
          //'You got Weapon M16!',                        //035
          //'You got Weapon M16!',                        //036
          //'You got Weapon M16!',                        //037
          //'You got Weapon M16!',                        //038
          //'You got Weapon M16!',                        //039
          //'You got Weapon M16!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon AK-117!',                        //001 = 0.01%
          'You got Weapon AK-117!',                        //002
          'You got Weapon AK-117!',                        //003
          'You got Weapon AK-117!',                        //004
          'You got Weapon AK-117!',                        //005
          'You got Weapon AK-117!',                        //006
          'You got Weapon AK-117!',                        //007
          'You got Weapon AK-117!',                        //008
          'You got Weapon AK-117!',                        //009
          'You got Weapon AK-117!',                        //010 = 0.10%
          'You got Weapon AK-117!',                        //011
          'You got Weapon AK-117!',                        //012
          'You got Weapon AK-117!',                        //013
          'You got Weapon AK-117!',                        //014
          'You got Weapon AK-117!',                        //015
          'You got Weapon AK-117!',                        //016
          'You got Weapon AK-117!',                        //017
          'You got Weapon AK-117!',                        //018
          'You got Weapon AK-117!',                        //019
          'You got Weapon AK-117!',                        //020 = 10%
          'You got Weapon AK-117!',                        //021
          'You got Weapon AK-117!',                        //022
          'You got Weapon AK-117!',                        //023
          'You got Weapon AK-117!',                        //024
          'You got Weapon AK-117!',                        //025
          'You got Weapon AK-117!',                        //026
          'You got Weapon AK-117!',                        //027
          'You got Weapon AK-117!',                        //028 = 18%
          //'You got Weapon AK-117!',                        //029
          //'You got Weapon AK-117!',                        //030 = 20%
          //'You got Weapon AK-117!',                        //031
          //'You got Weapon AK-117!',                        //032
          //'You got Weapon AK-117!',                        //033
          //'You got Weapon AK-117!',                        //034
          //'You got Weapon AK-117!',                        //035
          //'You got Weapon AK-117!',                        //036
          //'You got Weapon AK-117!',                        //037
          //'You got Weapon AK-117!',                        //038
          //'You got Weapon AK-117!',                        //039
          //'You got Weapon AK-117!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon XPR-50!',                        //001 = 0.01%
          'You got Weapon XPR-50!',                        //002
          'You got Weapon XPR-50!',                        //003
          'You got Weapon XPR-50!',                        //004
          'You got Weapon XPR-50!',                        //005
          'You got Weapon XPR-50!',                        //006
          'You got Weapon XPR-50!',                        //007
          'You got Weapon XPR-50!',                        //008
          'You got Weapon XPR-50!',                        //009
          'You got Weapon XPR-50!',                        //010 = 0.10%
          'You got Weapon XPR-50!',                        //011
          'You got Weapon XPR-50!',                        //012
          'You got Weapon XPR-50!',                        //013
          'You got Weapon XPR-50!',                        //014
          'You got Weapon XPR-50!',                        //015
          'You got Weapon XPR-50!',                        //016
          'You got Weapon XPR-50!',                        //017
          'You got Weapon XPR-50!',                        //018
          'You got Weapon XPR-50!',                        //019
          'You got Weapon XPR-50!',                        //020 = 10%
          'You got Weapon XPR-50!',                        //021
          'You got Weapon XPR-50!',                        //022
          'You got Weapon XPR-50!',                        //023
          'You got Weapon XPR-50!',                        //024
          'You got Weapon XPR-50!',                        //025
          'You got Weapon XPR-50!',                        //026
          'You got Weapon XPR-50!',                        //027
          'You got Weapon XPR-50!',                        //028 = 18%
          //'You got Weapon XPR-50!',                        //029
          //'You got Weapon XPR-50!',                        //030 = 20%
          //'You got Weapon XPR-50!',                        //031
          //'You got Weapon XPR-50!',                        //032
          //'You got Weapon XPR-50!',                        //033
          //'You got Weapon XPR-50!',                        //034
          //'You got Weapon XPR-50!',                        //035
          //'You got Weapon XPR-50!',                        //036
          //'You got Weapon XPR-50!',                        //037
          //'You got Weapon XPR-50!',                        //038
          //'You got Weapon XPR-50!',                        //039
          //'You got Weapon XPR-50!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon Striker!',                        //001 = 0.01%
          'You got Weapon Striker!',                        //002
          'You got Weapon Striker!',                        //003
          'You got Weapon Striker!',                        //004
          'You got Weapon Striker!',                        //005
          'You got Weapon Striker!',                        //006
          'You got Weapon Striker!',                        //007
          'You got Weapon Striker!',                        //008
          'You got Weapon Striker!',                        //009
          'You got Weapon Striker!',                        //010 = 0.10%
          'You got Weapon Striker!',                        //011
          'You got Weapon Striker!',                        //012
          'You got Weapon Striker!',                        //013
          'You got Weapon Striker!',                        //014
          'You got Weapon Striker!',                        //015
          'You got Weapon Striker!',                        //016
          'You got Weapon Striker!',                        //017
          'You got Weapon Striker!',                        //018
          'You got Weapon Striker!',                        //019
          'You got Weapon Striker!',                        //020 = 10%
          //'You got Weapon Striker!',                        //021
          //'You got Weapon Striker!',                        //022
          //'You got Weapon Striker!',                        //023
          //'You got Weapon Striker!',                        //024
          //'You got Weapon Striker!',                        //025
          //'You got Weapon Striker!',                        //026
          //'You got Weapon Striker!',                        //027
          //'You got Weapon Striker!',                        //028
          //'You got Weapon Striker!',                        //029
          //'You got Weapon Striker!',                        //030 = 20%
          //'You got Weapon Striker!',                        //031
          //'You got Weapon Striker!',                        //032
          //'You got Weapon Striker!',                        //033
          //'You got Weapon Striker!',                        //034
          //'You got Weapon Striker!',                        //035
          //'You got Weapon Striker!',                        //036
          //'You got Weapon Striker!',                        //037
          //'You got Weapon Striker!',                        //038
          //'You got Weapon Striker!',                        //039
          //'You got Weapon Striker!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon M4!',                        //001 = 0.01%
          'You got Weapon M4!',                        //002
          'You got Weapon M4!',                        //003
          'You got Weapon M4!',                        //004
          'You got Weapon M4!',                        //005
          'You got Weapon M4!',                        //006
          'You got Weapon M4!',                        //007
          'You got Weapon M4!',                        //008
          'You got Weapon M4!',                        //009
          'You got Weapon M4!',                        //010 = 0.10%
          'You got Weapon M4!',                        //011
          'You got Weapon M4!',                        //012
          'You got Weapon M4!',                        //013
          'You got Weapon M4!',                        //014
          'You got Weapon M4!',                        //015
          'You got Weapon M4!',                        //016
          'You got Weapon M4!',                        //017
          'You got Weapon M4!',                        //018
          'You got Weapon M4!',                        //019
          'You got Weapon M4!',                        //020 = 10%
          //'You got Weapon M4!',                        //021
          //'You got Weapon M4!',                        //022
          //'You got Weapon M4!',                        //023
          //'You got Weapon M4!',                        //024
          //'You got Weapon M4!',                        //025
          //'You got Weapon M4!',                        //026
          //'You got Weapon M4!',                        //027
          //'You got Weapon M4!',                        //028
          //'You got Weapon M4!',                        //029
          //'You got Weapon M4!',                        //030 = 20%
          //'You got Weapon M4!',                        //031
          //'You got Weapon M4!',                        //032
          //'You got Weapon M4!',                        //033
          //'You got Weapon M4!',                        //034
          //'You got Weapon M4!',                        //035
          //'You got Weapon M4!',                        //036
          //'You got Weapon M4!',                        //037
          //'You got Weapon M4!',                        //038
          //'You got Weapon M4!',                        //039
          //'You got Weapon M4!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon LK24!',                        //001 = 0.01%
          'You got Weapon LK24!',                        //002
          'You got Weapon LK24!',                        //003
          'You got Weapon LK24!',                        //004
          'You got Weapon LK24!',                        //005
          'You got Weapon LK24!',                        //006
          'You got Weapon LK24!',                        //007
          'You got Weapon LK24!',                        //008
          'You got Weapon LK24!',                        //009
          'You got Weapon LK24!',                        //010 = 0.10%
          'You got Weapon LK24!',                        //011
          'You got Weapon LK24!',                        //012
          'You got Weapon LK24!',                        //013
          'You got Weapon LK24!',                        //014
          'You got Weapon LK24!',                        //015
          'You got Weapon LK24!',                        //016
          'You got Weapon LK24!',                        //017
          'You got Weapon LK24!',                        //018
          'You got Weapon LK24!',                        //019
          'You got Weapon LK24!',                        //020 = 10%
          'You got Weapon LK24!',                        //021
          'You got Weapon LK24!',                        //022
          'You got Weapon LK24!',                        //023
          'You got Weapon LK24!',                        //024
          'You got Weapon LK24!',                        //025
          'You got Weapon LK24!',                        //026
          'You got Weapon LK24!',                        //027
          'You got Weapon LK24!',                        //028
          'You got Weapon LK24!',                        //029
          'You got Weapon LK24!',                        //030 = 20%
          //'You got Weapon LK24!',                        //031
          //'You got Weapon LK24!',                        //032
          //'You got Weapon LK24!',                        //033
          //'You got Weapon LK24!',                        //034
          //'You got Weapon LK24!',                        //035
          //'You got Weapon LK24!',                        //036
          //'You got Weapon LK24!',                        //037
          //'You got Weapon LK24!',                        //038
          //'You got Weapon LK24!',                        //039
          //'You got Weapon LK24!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon Type 25!',                        //001 = 0.01%
          'You got Weapon Type 25!',                        //002
          'You got Weapon Type 25!',                        //003
          'You got Weapon Type 25!',                        //004
          'You got Weapon Type 25!',                        //005
          'You got Weapon Type 25!',                        //006
          'You got Weapon Type 25!',                        //007
          'You got Weapon Type 25!',                        //008
          'You got Weapon Type 25!',                        //009
          'You got Weapon Type 25!',                        //010 = 0.10%
          'You got Weapon Type 25!',                        //011
          'You got Weapon Type 25!',                        //012
          'You got Weapon Type 25!',                        //013
          'You got Weapon Type 25!',                        //014
          'You got Weapon Type 25!',                        //015
          'You got Weapon Type 25!',                        //016
          'You got Weapon Type 25!',                        //017
          'You got Weapon Type 25!',                        //018
          'You got Weapon Type 25!',                        //019
          'You got Weapon Type 25!',                        //020 = 10%
          //'You got Weapon Type 25!',                        //021
          //'You got Weapon Type 25!',                        //022
          //'You got Weapon Type 25!',                        //023
          //'You got Weapon Type 25!',                        //024
          //'You got Weapon Type 25!',                        //025
          //'You got Weapon Type 25!',                        //026
          //'You got Weapon Type 25!',                        //027
          //'You got Weapon Type 25!',                        //028
          //'You got Weapon Type 25!',                        //029
          //'You got Weapon Type 25!',                        //030 = 20%
          //'You got Weapon Type 25!',                        //031
          //'You got Weapon Type 25!',                        //032
          //'You got Weapon Type 25!',                        //033
          //'You got Weapon Type 25!',                        //034
          //'You got Weapon Type 25!',                        //035
          //'You got Weapon Type 25!',                        //036
          //'You got Weapon Type 25!',                        //037
          //'You got Weapon Type 25!',                        //038
          //'You got Weapon Type 25!',                        //039
          //'You got Weapon Type 25!',                        //040 = 30%
///////////////////////////////////////////////////////////////////////////////
          'You got Weapon MSMC!',                        //001 = 0.01%
          'You got Weapon MSMC!',                        //002
          'You got Weapon MSMC!',                        //003
          'You got Weapon MSMC!',                        //004
          'You got Weapon MSMC!',                        //005
          'You got Weapon MSMC!',                        //006
          'You got Weapon MSMC!',                        //007
          'You got Weapon MSMC!',                        //008
          'You got Weapon MSMC!',                        //009
          'You got Weapon MSMC!',                        //010 = 0.10%
          'You got Weapon MSMC!',                        //011
          'You got Weapon MSMC!',                        //012
          'You got Weapon MSMC!',                        //013
          'You got Weapon MSMC!',                        //014
          'You got Weapon MSMC!',                        //015
          'You got Weapon MSMC!',                        //016
          'You got Weapon MSMC!',                        //017
          'You got Weapon MSMC!',                        //018
          'You got Weapon MSMC!',                        //019
          'You got Weapon MSMC!',                        //020 = 10%
          'You got Weapon MSMC!',                        //021
          'You got Weapon MSMC!',                        //022
          'You got Weapon MSMC!',                        //023
          'You got Weapon MSMC!',                        //024
          'You got Weapon MSMC!',                        //025
          'You got Weapon MSMC!',                        //026
          'You got Weapon MSMC!',                        //027
          'You got Weapon MSMC!',                        //028 18%
          //'You got Weapon MSMC!',                        //029
          //'You got Weapon MSMC!',                        //030 = 20%
          //'You got Weapon MSMC!',                        //031
          //'You got Weapon MSMC!',                        //032
          //'You got Weapon MSMC!',                        //033
          //'You got Weapon MSMC!',                        //034
          //'You got Weapon MSMC!',                        //035
          //'You got Weapon MSMC!',                        //036
          //'You got Weapon MSMC!',                        //037
          //'You got Weapon MSMC!',                        //038
          //'You got Weapon MSMC!',                        //039
          //'You got Weapon MSMC!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You got Weapon PDW-57!',                        //001 = 0.01%
          'You got Weapon PDW-57!',                        //002
          'You got Weapon PDW-57!',                        //003
          'You got Weapon PDW-57!',                        //004
          'You got Weapon PDW-57!',                        //005
          'You got Weapon PDW-57!',                        //006
          'You got Weapon PDW-57!',                        //007
          'You got Weapon PDW-57!',                        //008
          'You got Weapon PDW-57!',                        //009
          'You got Weapon PDW-57!',                        //010 = 0.10%
          'You got Weapon PDW-57!',                        //011
          'You got Weapon PDW-57!',                        //012
          'You got Weapon PDW-57!',                        //013
          'You got Weapon PDW-57!',                        //014
          'You got Weapon PDW-57!',                        //015 = 5%
          //'You got Weapon PDW-57!',                        //016
          //'You got Weapon PDW-57!',                        //017
          //'You got Weapon PDW-57!',                        //018
          //'You got Weapon PDW-57!',                        //019
          //'You got Weapon PDW-57!',                        //020 = 10%
          //'You got Weapon PDW-57!',                        //021
          //'You got Weapon PDW-57!',                        //022 = 12%
          //'You got Weapon PDW-57!',                        //023
          //'You got Weapon PDW-57!',                        //024
          //'You got Weapon PDW-57!',                        //025
          //'You got Weapon PDW-57!',                        //026
          //'You got Weapon PDW-57!',                        //027
          //'You got Weapon PDW-57!',                        //028
          //'You got Weapon PDW-57!',                        //029
          //'You got Weapon PDW-57!',                        //030 = 20%
          //'You got Weapon PDW-57!',                        //031
          //'You got Weapon PDW-57!',                        //032
          //'You got Weapon PDW-57!',                        //033
          //'You got Weapon PDW-57!',                        //034
          //'You got Weapon PDW-57!',                        //035
          //'You got Weapon PDW-57!',                        //036
          //'You got Weapon PDW-57!',                        //037
          //'You got Weapon PDW-57!',                        //038
          //'You got Weapon PDW-57!',                        //039
          //'You got Weapon PDW-57!',                        //040 = 30%

          'You got Weapon Chicom!',                        //001 = 0.01%
          'You got Weapon Chicom!',                        //002
          'You got Weapon Chicom!',                        //003
          'You got Weapon Chicom!',                        //004
          'You got Weapon Chicom!',                        //005
          'You got Weapon Chicom!',                        //006
          'You got Weapon Chicom!',                        //007
          'You got Weapon Chicom!',                        //008
          'You got Weapon Chicom!',                        //009
          'You got Weapon Chicom!',                        //010 = 0.10%
          'You got Weapon Chicom!',                        //011
          'You got Weapon Chicom!',                        //012
          'You got Weapon Chicom!',                        //013
          'You got Weapon Chicom!',                        //014
          'You got Weapon Chicom!',                        //015
          'You got Weapon Chicom!',                        //016
          'You got Weapon Chicom!',                        //017
          'You got Weapon Chicom!',                        //018
          'You got Weapon Chicom!',                        //019
          'You got Weapon Chicom!',                        //020 = 10%
          //'You got Weapon Chicom!',                        //021
          //'You got Weapon Chicom!',                        //022
          //'You got Weapon Chicom!',                        //023
          //'You got Weapon Chicom!',                        //024
          //'You got Weapon Chicom!',                        //025 15%
          //'You got Weapon Chicom!',                        //026
          //'You got Weapon Chicom!',                        //027
          //'You got Weapon Chicom!',                        //028
          //'You got Weapon Chicom!',                        //029
          //'You got Weapon Chicom!',                        //030 = 20%
          //'You got Weapon Chicom!',                        //031
          //'You got Weapon Chicom!',                        //032
          //'You got Weapon Chicom!',                        //033
          //'You got Weapon Chicom!',                        //034
          //'You got Weapon Chicom!',                        //035
          //'You got Weapon Chicom!',                        //036
          //'You got Weapon Chicom!',                        //037
          //'You got Weapon Chicom!',                        //038
          //'You got Weapon Chicom!',                        //039
          //'You got Weapon Chicom!',                        //040 = 30%

          'You got Weapon BY15"',                        //001 = 0.01%
          'You got Weapon BY15"',                        //002
          'You got Weapon BY15"',                        //003
          'You got Weapon BY15"',                        //004
          'You got Weapon BY15"',                        //005
          'You got Weapon BY15"',                        //006
          'You got Weapon BY15"',                        //007
          'You got Weapon BY15"',                        //008
          'You got Weapon BY15"',                        //009
          'You got Weapon BY15"',                        //010 = 0.10%
          'You got Weapon BY15"',                        //011
          'You got Weapon BY15"',                        //012
          'You got Weapon BY15"',                        //013
          'You got Weapon BY15"',                        //014
          'You got Weapon BY15"',                        //015 = 5%
          //'You got Weapon BY15"',                        //016
          //'You got Weapon BY15"',                        //017
          //'You got Weapon BY15"',                        //018
          //'You got Weapon BY15"',                        //019
          //'You got Weapon BY15"',                        //020 = 10%
          //'You got Weapon BY15"',                        //021
          //'You got Weapon BY15"',                        //022
          //'You got Weapon BY15"',                        //023
          //'You got Weapon BY15"',                        //024
          //'You got Weapon BY15"',                        //025
          //'You got Weapon BY15"',                        //026
          //'You got Weapon BY15"',                        //027
          //'You got Weapon BY15"',                        //028
          //'You got Weapon BY15"',                        //029
          //'You got Weapon BY15"',                        //030 = 20%
          //'You got Weapon BY15"',                        //031
          //'You got Weapon BY15"',                        //032
          //'You got Weapon BY15"',                        //033
          //'You got Weapon BY15"',                        //034
          //'You got Weapon BY15"',                        //035
          //'You got Weapon BY15"',                        //036
          //'You got Weapon BY15"',                        //037
          //'You got Weapon BY15"',                        //038
          //'You got Weapon BY15"',                        //039
          //'You got Weapon BY15"',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You got Weapon Arctic.50!',                        //001 = 0.01%
          'You got Weapon Arctic.50!',                        //002
          'You got Weapon Arctic.50!',                        //003
          'You got Weapon Arctic.50!',                        //004
          'You got Weapon Arctic.50!',                        //005
          'You got Weapon Arctic.50!',                        //006
          'You got Weapon Arctic.50!',                        //007
          'You got Weapon Arctic.50!',                        //008
          'You got Weapon Arctic.50!',                        //009
          'You got Weapon Arctic.50!',                        //010 = 0.10%
          'You got Weapon Arctic.50!',                        //011
          'You got Weapon Arctic.50!',                        //012
          'You got Weapon Arctic.50!',                        //013
          'You got Weapon Arctic.50!',                        //014
          'You got Weapon Arctic.50!',                        //015 = 5%
          //'You got Weapon Arctic.50!',                        //016
          //'You got Weapon Arctic.50!',                        //017
          //'You got Weapon Arctic.50!',                        //018
          //'You got Weapon Arctic.50!',                        //019
          //'You got Weapon Arctic.50!',                        //020 = 10%
          //'You got Weapon Arctic.50!',                        //021
          //'You got Weapon Arctic.50!',                        //022
          //'You got Weapon Arctic.50!',                        //023
          //'You got Weapon Arctic.50!',                        //024
          //'You got Weapon Arctic.50!',                        //025
          //'You got Weapon Arctic.50!',                        //026
          //'You got Weapon Arctic.50!',                        //027
          //'You got Weapon Arctic.50!',                        //028
          //'You got Weapon Arctic.50!',                        //029
          //'You got Weapon Arctic.50!',                        //030 = 20%
          //'You got Weapon Arctic.50!',                        //031
          //'You got Weapon Arctic.50!',                        //032
          //'You got Weapon Arctic.50!',                        //033
          //'You got Weapon Arctic.50!',                        //034
          //'You got Weapon Arctic.50!',                        //035
          //'You got Weapon Arctic.50!',                        //036
          //'You got Weapon Arctic.50!',                        //037
          //'You got Weapon Arctic.50!',                        //038
          //'You got Weapon Arctic.50!',                        //039
          //'You got Weapon Arctic.50!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You got Weapon HG 40!',                        //001 = 0.01%
          'You got Weapon HG 40!',                        //002
          'You got Weapon HG 40!',                        //003
          'You got Weapon HG 40!',                        //004
          'You got Weapon HG 40!',                        //005
          'You got Weapon HG 40!',                        //006
          'You got Weapon HG 40!',                        //007
          'You got Weapon HG 40!',                        //008
          'You got Weapon HG 40!',                        //009
          'You got Weapon HG 40!',                        //010 = 0.10%
          //'You got Weapon HG 40!',                        //011
          //'You got Weapon HG 40!',                        //012
          //'You got Weapon HG 40!',                        //013
          //'You got Weapon HG 40!',                        //014
          //'You got Weapon HG 40!',                        //015 = 5%
          //'You got Weapon HG 40!',                        //016
          //'You got Weapon HG 40!',                        //017
          //'You got Weapon HG 40!',                        //018
          //'You got Weapon HG 40!',                        //019
          //'You got Weapon HG 40!',                        //020 = 10%
          //'You got Weapon HG 40!',                        //021
          //'You got Weapon HG 40!',                        //022
          //'You got Weapon HG 40!',                        //023
          //'You got Weapon HG 40!',                        //024
          //'You got Weapon HG 40!',                        //025
          //'You got Weapon HG 40!',                        //026
          //'You got Weapon HG 40!',                        //027
          //'You got Weapon HG 40!',                        //028
          //'You got Weapon HG 40!',                        //029
          //'You got Weapon HG 40!',                        //030 = 20%
          //'You got Weapon HG 40!',                        //031
          //'You got Weapon HG 40!',                        //032
          //'You got Weapon HG 40!',                        //033
          //'You got Weapon HG 40!',                        //034
          //'You got Weapon HG 40!',                        //035
          //'You got Weapon HG 40!',                        //036
          //'You got Weapon HG 40!',                        //037
          //'You got Weapon HG 40!',                        //038
          //'You got Weapon HG 40!',                        //039
          //'You got Weapon HG 40!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You got Weapon AK 47!',                        //001 = 0.01%
          'You got Weapon AK 47!',                        //002
          'You got Weapon AK 47!',                        //003
          'You got Weapon AK 47!',                        //004
          'You got Weapon AK 47!',                        //005
          'You got Weapon AK 47!',                        //006
          'You got Weapon AK 47!',                        //007
          'You got Weapon AK 47!',                        //008
          'You got Weapon AK 47!',                        //009
          'You got Weapon AK 47!',                        //010 = 0.10%
          //'You got Weapon AK 47!',                        //011
          //'You got Weapon AK 47!',                        //012
          //'You got Weapon AK 47!',                        //013
          //'You got Weapon AK 47!',                        //014
          //'You got Weapon AK 47!',                        //015 = 5%
          //'You got Weapon AK 47!',                        //016
          //'You got Weapon AK 47!',                        //017
          //'You got Weapon AK 47!',                        //018
          //'You got Weapon AK 47!',                        //019
          //'You got Weapon AK 47!',                        //020 = 10%
          //'You got Weapon AK 47!',                        //021
          //'You got Weapon AK 47!',                        //022
          //'You got Weapon AK 47!',                        //023
          //'You got Weapon AK 47!',                        //024
          //'You got Weapon AK 47!',                        //025
          //'You got Weapon AK 47!',                        //026
          //'You got Weapon AK 47!',                        //027
          //'You got Weapon AK 47!',                        //028
          //'You got Weapon AK 47!',                        //029
          //'You got Weapon AK 47!',                        //030 = 20%
          //'You got Weapon AK 47!',                        //031
          //'You got Weapon AK 47!',                        //032
          //'You got Weapon AK 47!',                        //033
          //'You got Weapon AK 47!',                        //034
          //'You got Weapon AK 47!',                        //035
          //'You got Weapon AK 47!',                        //036
          //'You got Weapon AK 47!',                        //037
          //'You got Weapon AK 47!',                        //038
          //'You got Weapon AK 47!',                        //039
          //'You got Weapon AK 47!',                        //040 = 30%

          '```JACKPOT!: You got Cpt. Price Skin!```',   //001 = 0.01%
          //'```JACKPOT!: You got Cpt. Price Skin!```',   //002
          //'```JACKPOT!: You got Cpt. Price Skin!```',   //003
          //'```JACKPOT!: You got Cpt. Price Skin!```',   //004
          //'```JACKPOT!: You got Cpt. Price Skin!```',   //005 = 0.05%
          //'```JACKPOT!: You got Cpt. Price Skin!```'   //006
          //'```JACKPOT!: You got Cpt. Price Skin!```'   //007
          //'```JACKPOT!: You got Cpt. Price Skin!```'   //008
          //'```JACKPOT!: You got Cpt. Price Skin!```'   //009
          //'```JACKPOT!: You got Cpt. Price Skin!```'   //010 = 0.10%

          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'   //001 = 0.01%
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //002
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //003
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //004
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //005 0.05%

        ];

          var msg = message.content.split(' ')[0].toUpperCase()
          let sender = message.author;
          let cont = message.content.slice(prefix.length).split(' ');
          let args = message.content.split(' ').slice(1);

          if (msg === prefix + 'DAILY') {
              message.reply ({embed:{
                title: 'Daily Luck',
                color: 0xFF0000,
                description: '*Time will reset every 24 hours 8+ GMT*',
                fields: [
                  {
                  name: (daily[Math.floor(Math.random() * daily.length)]),
                  value: '*Try again tomorrow.*',
                  inline: false
                },
              ],
                timestamp: new Date(),
                footer: {
                  text: 'Valid for 1 day only.',
                  icon_url: 'https://www.toornament.com/media/file/3033410478479441920/logo_large?v=1573636708'
                }
              }})
          }

  });

  soap.on('message', function(message) {
    if(message.author.soap) return;
    var msg = message.content.split(' ')[0].toUpperCase()
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(' ');
    let args = message.content.split(' ').slice(1);
    let suffix = args.join(' ')
    if(msg === "!SAYZX") {
       message.delete(0);
      if(suffix) {
        message.channel.send(suffix)
      } else {
        message.channel.send('nothing to say here')
      }
    }
});

soap.login(process.env.SOAP_TOKEN);
