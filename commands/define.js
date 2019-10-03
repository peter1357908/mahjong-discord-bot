module.exports = message => {
    let requestArray = message.content.split(" ").slice(1);
    let request = requestArray.join("").toLowerCase();

    if (!request || request == "") {
        var keys = Object.keys(definitions);
        var suggestion = keys[Math.floor(Math.random() * keys.length)];
        return message.channel.send(`You... didn't ask me to define anything. How about... ${suggestion}. ${definitions[suggestion]}`);
    }

    if (definitions[request]) {
        return message.channel.send(definitions[request]);
    } else {
        for(let i = 0; i < requestArray.length; i++) {
            if (definitions[requestArray[i].toLowerCase()]) {
                return message.channel.send(definitions[requestArray[i].toLowerCase()]);
            }
        }
    }

    return message.channel.send(`I don't know the definition of ${requestArray.join(" ")}. Are you sure you spelt it right?`);
};

const definitions = {
    "tanyao": "Tanyao is a hand that contains only number tiles from 2 through 8. For example, :2m::3m::4m::7m::7m::7m::5p::6p::7p::2s::2s::6s::7s::8s:. It's worth one han, and is usually allowed to be open. See kuitan for more on that.",
    "kuitan": "Kuitan is a rule that allows open tanyao. Kuitan ari means open tanyao is allowed, while kuitan nashi means it's not allowed, and you can only score tanyao if your hand is closed. Kuitan ari is the more popular option.",
    "tenpai": "A hand is tenpai if it's one tile away from winning.",
    "furiten": "Furiten is a rule that prevents you from winning a hand by ron if you have a tile in your discards that would complete your hand. For example, if your final shape was :2p::3p:, and you had a :1p: in your discards, you could not win the hand by ron, even on the :4p:.",
    "tsumo": "Tsumo is the act of drawing a tile yourself.",
    "tsumogiri": "Tsumogiri is when a player cuts (giri) the tile they drew (tsumo). The opposite is tedashi, cutting a tile from the hand.",
    "tedashi": "Tedashi is when a player cuts (dashi, go out) a tile from their hand (te). The opposite is tsumogiri, cutting the tile that was drawn.",
    "ryanmen": "A ryanmen shape is a two-sided wait for a run, such as :2p::3p:.",
    "kanchan": "A kanchan shape is a closed wait for a run, such as :2p::4p:.",
    "penchan": "A penchan shape is an edge wait for a run, such as :1p::2p:.",
    "shanpon": "A shanpon shape is when you are waiting for one of two pairs to turn into a triplet, such as :2p::2p::4s::4s:.",
    "tanki": "A tanki is when you're tenpai and waiting on a tile to complete a pair.",
    "hadaka": "A hadaka tanki is when you've called four times, and are left with a single tile in your hand.",
    "entotsu": "An entotsu shape is when you're waiting either on a ryanmen or a shanpon. It looks like :2p::2p::2p::3p::4p::3z::3z:. This wins on :2p:-:5p: and :3z:.",
    "sanmenchan": "A sanmenchan is a three-sided wait for a run, such as :2p::3p::4p::5p::6p:.",
    "gyakuten": "Gyakuten is the act of improving your placement, usually in the final round of a game.",
    "suji": "Suji refers to tiles three more or less than a tile. For example, :2p: and :8p: are suji of the :5p: tile. See this article for more information: http://arcturus.su/wiki/Suji",
    "nakasuji": "Nakasuji refers to when a middle tile is made safer by both of its suji being in an opponents' discards. If an opponent had cut both :2p: and :8p:, the :5p: would be safer.",
    "nagare": "Nagare is a word for luck, or flow. A player winning a lot has good nagare.",
    "shanten": "Shanten is how far your hand is from tenpai. Tenpai would be 0-shanten, and then it goes up from there.",
    "ukeire": "Ukeire is the number of tiles that decrease your hand's shanten.",
    "iishanten": "A hand that's one tile away from tenpai.",
    "ryanshanten": "A hand that's two tiles away from tenpai.",
    "nobetan": "A nobetan shape is when you're waiting on one of two tiles to become the pair for your hand, such as :2s::3s::4s::5s:.",
    "yonrenkei": "A yonrenkai is a run of four in your hand. It could become a nobetan, or be seen as two ryanmen.",
    "nakabukure": "A nakabukure, or bulging shape, is a run with an extra tile in the middle, like :2s::3s::3s::4s:. This could be a run, or it could be two ryanmen.",
    "hatsu": "The green dragon. :6z:",
    "chun": "The red dragon. :7z:",
    "haku": "The white dragon. :5z:",
    "ton": "The east wind. :1z:",
    "nan": "The south wind. :2z:",
    "naan": "A type of leavened flatbread, usually round. Often paired with hummus.",
    "sha": "The west wind. :3z:", "shaa": "The west wind. :3z:", "xia": "The west wind. :3z:",
    "pei": "The north wind. :4z:",
    "menzen": "Closed.",
    "menzentsumo": "Menzen tsumo is a yaku awarded for drawing your winning tile while your hand is closed. Worth one han.",
    "pinfu": "Pinfu is a yaku for a hand which scores no extra fu points, aside from those for tsumo and ron. Must be closed, and is worth one han. This means the hand has only runs, a pair that isn't yakuhai, and the final wait was a ryanmen.",
    "sanshoku": "Sanshoku doujun is a yaku for having the same run in each suit. Worth two han closed, and one han open.",
    "iipeikou": "Iipeikou is a yaku for having two identical runs, such as :2s::2s::3s::3s::4s::4s:. Must be closed, and is worth one han.",
    "dora": "The dora is a bonus tile, one greater than the dora indicator. This wraps around, so :9m: as indicator makes :1m: dora. Each one gives you an extra han, but they don't count as a yaku. The order for honors is :1z:->:2z:->:3z:->:4z:->:1z:, and :5z:->:6z:->:7z:->:5z:.",
    "ura": "Ura dora indicators are the tile(s) under the dora indicator(s), which create ura dora. Revealed when a player who is in riichi wins the round, and act the same as regular dora.",
    "aka": "Aka means red. Akadora are the red tiles, :0m::0s::0p:, that each grant one han, but do not count as yaku.",
    "itsu": "Itsu is a yaku awarded when you have a full straight from one to nine in a single suit. Worth two han closed, and one han open.",
    "ittsu": "Itsu is a yaku awarded when you have a full straight from one to nine in a single suit. Worth two han closed, and one han open.",
    "ittsuu": "Itsu is a yaku awarded when you have a full straight from one to nine in a single suit. Worth two han closed, and one han open.",
    "yakuhai": "Yakuhai are the value tiles. The three dragons are always yakuhai, along with the round wind and your seat wind. If you have a triplet of a yakuhai tile, it counts as a yaku, and awards one han per triplet. If you have a triplet of the wind that is both the round wind and your seat wind, you get two han.",
    "dabuton": "Double East. When the dealer has a triplet of :1z: during the East round.",
    "chanta": "Chanta is a yaku awarded for having every set in your hand involve a terminal or honor, with at least one run. Worth two han closed, or one han open.",
    "rinshan": "The rinshan tile is the tile you draw when you declare a kan. If you win on it, you score the rinshan kaihou yaku, and are awarded an extra han.",
    "chankan": "Chankan is a yaku awarded for winning on a tile an opponent added to a triplet to make a kan. Worth one han. On Majsoul, you can chankan on a closed kan if you have a kokushi tenpai.",
    "haitei": "The haitei tile is the last tile in the wall. If you win by drawing it, you score the haitei yaku, and gain a han.",
    "houtei": "Houtei is a yaku awarded for winning on the last possible discard. Grants one han.",
    "ryanpeikou": "Ryanpeikou is a yaku awarded when you have iipeikou twice in the same hand. Worth three han closed, and can't be open. Doesn't stack with iipeikou.",
    "chinitsu": "Chinitsu is a yaku awarded when all the tiles in your hand are from the same suit. Worth six han closed, and five open.",
    "nagashi": "Nagashi mangan is a special kind of draw that happens when the games goes to an exhaustive draw while you have only discarded honors and terminals, and nobody has called from you. Counts as scoring a mangan, but not as winning, if that makes sense. The round repeats if the dealer was tenpai.",
    "aman": "Haha, very funny.",
    "chiitoi": "Chiitoitsu is an exceptional yaku granted when your hand consists of seven pairs. Worth two han, and always scores 25 fu. Has to be closed, obviously. Also, the pairs usually can't be duplicated.",
    "chiitoitsu": "Chiitoitsu is an exceptional yaku granted when your hand consists of seven pairs. Worth two han, and always scores 25 fu. Has to be closed, obviously. Also, the pairs usually can't be duplicated.",
    "sanshokudokou": "Sanshoku dokou is a yaku awarded for having the same triplet in each suit. Worth two han.",
    "dokou": "Sanshoku dokou is a yaku awarded for having the same triplet in each suit. Worth two han.",
    "sanankou": "Sanankou is a yaku awarded for having three concealed triplets (or kans) in your hand. Worth two han. The rest of your hand can be open.",
    "sankantsu": "Sankantsu is a yaku awarded for having three kans. Worth two han.",
    "toitoi": "Toitoi is a yaku awarded for having four triplets (or kans) and one pair. Worth two han.",
    "honitsu": "Honitsu is a yaku awarded for having all your number tiles be from the same suit. Honors are okay, too. Worth three han closed, or two han open.",
    "shousangen": "Shousangen is a yaku awarded for having two dragon triplets and a pair of the third dragon. Worth four han, or two han plus the two han from the dragon triplets, depending on ruleset. Either way, it scores the same.",
    "honroutou": "Honroutou is a yaku awarded for having only terminals and honors in your hand. Worth two han.",
    "junchan": "Junchan is a yaku awarded for every set in your hand include a terminal, with at least one run. Worth three han closed, or two han open.",
    "kokushi": "Kokushi is an exceptional yakuman awarded for having one of each terminal and honor in your hand, plus one paired. If you have one of each but no pair, it's a double yakuman if you win in some rulesets, such as on Majsoul.",
    "chuuren": "Chuuren is a yakuman awarded for having 1112345678999 in a single suit, plus one of any other tile in that suit. Must be closed. If you're just waiting for the extra tile, it's a double yakuman on some rulesets, such as Majsoul's.",
    "tenhou": "Tenhou is a yakuman awarded for winning on your first draw as the dealer.",
    "chihou": "Chihou is a yakuman awarded for winning on your first draw as a non-dealer. If a call happens before you draw, you can't score this.",
    "renhou": "Renhou is a yaku or yakuman awarded for winning off a discard before you've drawn your first tile. Most rulesets have this being worth a mangan or not counting as a yaku at all. If a call happens before you win, you can't score this.",
    "suuankou": "Suuankou is a yakuman awarded for having four concealed triplets. If you have a shanpon wait, and win by ron, it doesn't count, as that final triplet technically counts as being open, even though your hand is closed. Lots of rules, huh? Here's another: if it's a tanki wait, then it counts as a double yakuman in some rulesets, such as on Majsoul.",
    "suukantsu": "Suukantsu is a yakuman awarded for having four kans. The rarest of all yakuman.",
    "ryuuiisou": "Ryuuiisou is a yakuman awarded for having a hand that consists only of :2s::3s::4s::6s::8s::6z:, the tiles with green and only green.",
    "chinroutou": "Chinroutou is a yakuman awarded for having a hand that consists of only terminals.",
    "tsuuiisou": "Tsuuiisou is a yakuman awarded for having a hand that consists of only honors.",
    "daisangen": "Daisangen is a yakuman awarded for having a triplet of every dragon.",
    "daisuushii": "Daisuushii is a yakuman awarded for having a triplet of every wind. In some rulesets, such as on Majsoul, this is a double yakuman.",
    "shousuushii": "Shousuushii is a yakuman awarded for having three wind triplets and a pair of the fourth wind.",
    "mawashi": "Mawashi is an advanced technique involving discarding fairly safe tiles while still trying to win the hand.",
    "betaori": "Betaori is when you're only focused on cutting the safest tiles possible, with no regard for winning the hand.",
    "zentsu": "Zentsu is when you're pushing every tile with no regard for how dangerous it is.",
    "oya": "The oya is the dealer.",
    "noten": "Not tenpai.",
    "yamagoshi": "Yamagoshi is when you pass up a win from one player in order to ron on a different player, or tsumo.",
    "tonpu": "Tonpu is the Japanese word for East-only games.",
    "hanchan": "A hanchan is one standard game, with both an East and South round.",
    "sanma": "Sanma is the three-player variant of Riichi Mahjong.",
    "pao": "Sekinin barai, or pao, is a rule where the player who makes a yakuman apparent is responsible for that yakuman. For example, if player A has pons of two dragons, and player B discards the third, and that gets ponned as well, player B is responsible for the daisangen. If player A then tsumos, player B has to pay it all themself, as if they had dealt in. If player A rons a different player, that player and player B split the payment. If multiple yakuman are scored (eg daisangen + tsuuiisou), player B only has to pay for the daisangen, and the other yakuman are paid for as normal. Pao usually only applies for daisangen and daisuushii, though it can sometimes apply for suukantsu and even rinshan kaihou.",
    "sekinin": "Sekinin barai, or pao, is a rule where the player who makes a yakuman apparent is responsible for that yakuman. For example, if player A has pons of two dragons, and player B discards the third, and that gets ponned as well, player B is responsible for the daisangen. If player A then tsumos, player B has to pay it all themself, as if they had dealt in. If player A rons a different player, that player and player B split the payment. If multiple yakuman are scored (eg daisangen + tsuuiisou), player B only has to pay for the daisangen, and the other yakuman are paid for as normal. Pao usually only applies for daisangen and daisuushii, though it can sometimes apply for suukantsu and even rinshan kaihou.",
    "kuikae": "Kuikae in English is usually translated as swap calling. For example, calling chii on a :2s: with :3s::4s::5s: in your hand. With this rule, you are not allowed to discard :5s:. An easy way to remember it is that you can't discard a tile that would have completed the set you just called. Often, you also cannot cut the same tile that you called. This rule prevents people from avoiding drawing unsafe tiles, and makes yaku like sanshoku or itsu a bit harder.",
    "houou": "Houou is the top room of Tenhou, where the best players play. It's around the top 1% of Tenhou players.",
    "tokujou": "Tokujou is the second highest room of Tenhou. Players at this level usually have very solid efficiency and defense.",
    "joukyuu": "Joukyuu is the second room on Tenhou. Most Tenhou players are at this level.",
    "ippan": "Ippan is the first room on Tenhou.",
    "agari": "Agari means win. Your agari rate is your win rate, in other words, the number of hands you've won divided by the number of hands you've played.",
    "rentai": "Rentai is the percentage of times you come in either first or second.",
    "tobi": "Tobi means bankruptcy. Your tobi rate is the percentage of games you've ended at below zero points.",
    "keishiki": "*sigh* Keishiki tenpai is when you're tenpai, but you cannot win, due to having no yaku. This is usually done to acquire tenpai payments at the end of the game.",
    "keiten": "Keiten is short for keishiki tenpai.",
    "kabe": "A kabe, or a wall, is when you can see all four of a tile. This can be used in defense. If you can see all four :7p:, you know they don't have a :7p::8p: shape, and thus, a :9p: could only deal into a tanki or shanpon wait, making it safer.",
    "genbutsu": "A tile that is genbutsu is 100% safe. The most obvious example is the tile your kamicha just discarded, as everyone is furiten on that during your turn.",
    "shimocha": "Your shimocha is the player to your right.",
    "kamicha": "Your kamicha is the player to your left.",
    "toimen": "Your toimen is the player across from you.",
    "0": "When 0 appears in a hand, it means a red five. 0m is :0m:, 0s is :0s:, and 0p is :0p:.",
    "ryankan": "A ryankan shape is two (ryan) kanchans stuck together, like :4s::6s::8s:. This shape accepts eight tiles, same as a ryanmen, but takes up three tiles in the hand instead of two. It's pretty strong, and is usually kept around until all the other blocks in the hand are better.",
    "block": "A block in a hand is either a completed set, or a potential set. You usually want five, as a hand needs four sets and a pair to be complete. Check `!link block` for an introduction to five block theory.",
    "blocks": "A block in a hand is either a completed set, or a potential set. You usually want five, as a hand needs four sets and a pair to be complete. Check `!link block` for an introduction to five block theory.",
    "karagiri": "Karagiri is when you cut a tile from your hand that you just drew. This can add a bit of mindgames if players are watching where you discard from, but low level players usually won't be doing that.",
    "dama": "Dama is when you're tenpai, and fully closed, but don't call riichi. This increases your winrate, as people won't know to fold, but can decrease your value. See `!link dama` for some guidelines.",
    "damaten": "Dama is when you're tenpai, and fully closed, but don't call riichi. This increases your winrate, as people won't know to fold, but can decrease your value. See `!link dama` for some guidelines.",
    "takame": "When your hand has multiple outs that give different values, like a :7p::8p: shape getting tanyao on :6p: but not :9p:, the takame is the most valuable out.",
    "yasume": "When your hand has multiple outs that give different values, like a :7p::8p: shape getting tanyao on :6p: but not :9p:, the yasume is the least valuable out.",
    "sashikomi": "Sashikomi is when you intentionally try to deal into an opponent. For example, if it's South 4, and you're ahead by 25k points, you might want to deal into 3rd's riichi to end the game before 2nd can catch up with dealer repeats.",
    "ankan": "An ankan is a closed kan.",
    "kannya": "Kannya is what you say when you declare a kan and are also a cat.",
    "kan-nya": "Kannya is what you say when you declare a kan and are also a cat.",
    "ryuukyoku": "Ryuukyoku is an exhaustive draw. When all the tiles are drawn from the wall, and nobody has won.",
    "kyuushu": "Kyuushuu kyuuhai is an abortive draw that a player can opt to call if their starting hand has nine or more unique terminals and honors. It must be weighed against the chance of going for kokushi, but kyuushuu is usually the better option if you have less than 11.",
    "kyuushuu": "Kyuushuu kyuuhai is an abortive draw that a player can opt to call if their starting hand has nine or more unique terminals and honors. It must be weighed against the chance of going for kokushi, but kyuushuu is usually the better option if you have less than 11.",
    "aotenjou": "Aotenjou, or skyrocketing, is a ruleset wherein scores are not capped with things like mangan or yakuman. The scores get extremely high, and it's basically never played outside of manga or Touhou games.",
    "wareme": "Wareme is a special rule where the player who has their section of the wall broken has to pay double, the same as the dealer does. This stacks with the dealer's doubled payment. One of the Yakuza games uses this, I think, but it's mostly only a gambling rule.",
    "manzu": "Manzu is the characters suit. You might see tiles written as 1-man :1m:.",
    "souzu": "Souzu is the bamboo suit. You might see tiles written as 1-sou :1s:.",
    "pinzu": "Pinzu is the circles or dots suit. You might see tiles written as 1-pin :1p:.",
    "honba": "Honba are sticks added to the pot after an exhaustive draw or a dealer win. Each one increases the value of a won hand by 300.",
    "efficiency": "Efficiency means focusing on winning the hand as fast as possible, instead of aiming for value. Ukeire, shanten, and upgrades are tools for measuring efficiency, but the hand's shape matters a lot too.",
    "hms": "Hittori Mahjong Simulator is a tool for checking the expected value and speed of a hand, in a tsumo-only environment. Check `!link hms` for more info.",
    "mentsu": "A mentsu is a completed shape in a hand.",
    "toitsu": "A toitsu is a pair.",
    "koutsu": "A koutsu is a triplet.",
    "shuntsu": "A shuntsu is a run.",
    "jantou": "A jantou is a pair, specifically the one you need to complete your hand.",
    "jansou": "A jansou is a Mahjong parlour, where people usually play for money.",
    "shuugi": "A shuugi is a payment that happens between players at a parlour. Generally, each aka dora or ura dora will be a shuugi, but different parlours will have more or less ways to obtain them. When a player tsumos, everyone pays for the shuugi (for example, 500 yen each), while if the player rons, only the ronned player pays (only 500 yen).",
    "love": "I'll hurt you."
};