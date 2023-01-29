

const namearr = ["Abraham", "Albert", "Alfie", "Alfred", "Archie", "Archibald", "Arthur", "Benedict", "Cecil", "Charles", "Charlie", "Edward", "Edwin", "Eric", "Ernest", "Ezra", "Frank", "Freddie", "Frederick", "George", "Henry", "Jack", "Oliver", "Reggie", "Reginald", "Stanley", "Ted", "Winston"];

const occarr = ["Animal/Monster Handler - responsible for the safe keeping, dietary care, and exercise of animals or monsters","Arborist - maintains and cares for trees, often by surgically removing dying limbs","Baler - bales hay, or in the mills, wool and cotton goods","Beekeeper - owns and breeds bees, especially for their honey","Breeder - breeds livestock, animals, or monsters","Cowherd - supervises grazing cattle","Dairyboy/Dairymaid - milks cows and makes cheese and butter","Falconer - keeps, trains, and hunts with falcons, hawks, or other birds of prey","Farmer - operates a farm or cultivates land","Fisher - catches fish","Florist - grows and arranges plants and cut flowers","Forager - searches for food in the wild","Forester - supervises the wellbeing of a forest","Fowler - catches or ensnares birds","Gamekeeper - breeds and protects game, typically for a large estate","Groom - cleans and brushes the coats horses, dogs, or other animals","Herder - supervises a herd of livestock or makes a living from keeping livestock, especially in open country","Horse Trainer - tends to horses and teaches them different disciplines","Hunter - hunts game or other wild animals","Lumberjack - fells trees, cuts them into logs, and transports them to a sawmill","Master-of-Horses - supervises and commands all horses under a jurisdiction","Master-of-Hounds - maintains a pack of hounds and their associated staff, equipment, and hunting arrangements","Miller - owns or works in a grain mill","Miner - works underground in mines in order to obtain minerals such as coal, diamonds, or gold","Pathfinder - scouts ahead and discovers a path or way for others","Plumer - hunts birds for their plumes","Prospector - searches for mineral deposits, especially by drilling and excavation","Ranger - wanders or ranges over a particular area or domain","Renderer - converts waste animal tissue into usable materials","Shepherd - herds, tends, and guards sheep","Stablehand - works in a stable","Thresher - separates grain from the plants by beating","Trapper - traps wild animals, especially for their fur","Vintner - engages in winemaking, especially with monitoring and harvesting the grapes","Zookeeper - maintains and cares for animals or monsters in a zoo"];

const quirkarr = ["adrenaline junkie","brags about one's own accomplishments","high levels of enthusiasm","likes to be the center of attention","makes assumptions about others' motives","makes snap judgements about other people","needs the approval of others","obsessive about personal hygiene","overly trusting of other people","plans things to the most minute detail","quick to recognize others accomplishments","seeks adventure or new experiences","seeks stability","suspicious or distrustful of others","takes credit for other's work","tendency to one-up other people's accomplishments","tendency to pull for the underdog","tendency to react emotionally","tendency to respond objectively","tendency to take things personally","tenderhearted nature","tends to be argumentative just for the sake of arguing","tends to see how things unfold without planning ahead","very outgoing in demeanor","won't touch people, even to shake hand"];

const secretArr = ["I have a Child I didnt raise.","I disposed of a Dagger that may have been evidence in a Murder.","I once sold out a friend for 100 Gold Pieces.","I have a mysterious illness I keep hidden from sight.","Im addicted to Potions of all magical varieties.","I put my trust and faith in a Deity that is overtly evil.","I am writing a biography of my life, but embellishing it to make myself sound more heroic.","Im technically not alive.","I lost several minor appendages due a gambling addition fuelled by a local moneylending gang.","Ive been exiled twice under different names.","Im nothing but a construct made from the flesh of a (in)famous local noble.","I was forced to watch my familys execution.","Im the reincarnation of a legendary warrior, I swear!","I am the only surviving member of my previous adventuring party.",
"I have an irrational fear of cats.","I carry the skull of my best friend.", "I hate the monarchy.","I fear that the Party will try to kill me if I leave or speak out of turn.","I was once imprisoned for my religious beliefs, but escaped under the cover of darkness.","I was raised as a hostage of my familys enemies after my parents refused to pay the ransom."];

function gen(){
    document.getElementById("name").innerHTML = namearr[Math.floor(Math.random() * (namearr.length - 1))];
    document.getElementById("occupation").innerHTML = occarr[Math.floor(Math.random() * (occarr.length - 1))];
    document.getElementById("quirk").innerHTML = quirkarr[Math.floor(Math.random() * (quirkarr.length - 1))];
    document.getElementById("secret").innerHTML = secretArr[Math.floor(Math.random() * (secretArr.length - 1))];

}


