var races = {
	dwarf: {
	  desc: "Short and stout the dwarves are bold and hardy and are known as skilled warriors.  As wide as they are tall a dwarf often waieghs as much as a human standing 2 feet taller.  They have long lives often living to 400 years and so carry grudges far longer than any human might.  They live in clans which band together to form knigdoms, living underground where they mine the minerals and riches they covet and turn them into wonders.  An adventuring dwarf is oten motivated by a desire for treasure.  Though many are either inspired or commanded by a diety to bring glory.",
	  abilityMod: {constitution: 2},
	  age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average they live about 350 years.",
	  align: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society.  They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
	  size: "medium",
	  speed: {num: 25 ,mod: "Your speed is not reduced by wearing heavy armor."},
	  darkVision: true,
	  traits: {dwarven_resilience: {desc: "You have advantage on saving throws against poison, and you have a resistance against posion damage.", action: false}, 
	  			dwarven_combat_training: {desc: "You have the proficiency with the battleaxe, handaxe, light hammer and war hammer", action: ["battleaxe", "handaxe", "light hammer", "war hammer"]},
	  			tool_proficiency: {desc: "You gain proficiency with the artisian's tools of your choice: smith's tools, brewers supplies or masons tools", action: ["smith's tools", "brewers supplies", "masons tools"] }
		},
	  languages: ["common", "dwarvish"],
	  subraces: {
	  	hill: {abilityMod: {wisdom: 1} ,traits: {dwarven_toughness: "Your hit point maxium increases by 1 and it increases by 1 every time you level", action: ["hit points plus"]}},
	  	mount: {abilityMod: {strength: 2},traits: {dwarven_armor_training: "You have proficiency with light and medium armor.", action: ["light armor", "medium armor"]}}
	  	}
	},
	elf: {
	  desc: "Elfs are slender and graceful and often thought beautiful by many different races.  They have a timeless perspetive living for 700 or more years which often lends to curiosity not greed and amusment instead of excitemnet.  Most elves live in hiden woodland villages where they can support themselves without clear cutting the land.  They are skilled artisans and make a good living trading there wares.  Elves tend to seek adventure for adventures sake disliking the pace f human life they seek to set their own pace.  Adventuring also allows them to excersise thier martial prowess and gain greater magical power.",
	  abilityMod: {dexterity: 2},
	  age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience.  An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
	  align: "Elves love freedom, variety and self expression so they lean strongly toward the gentler aspects of chaos.  They value and protect others' freedom as well as thier own and they are more often good than not.  The drow are an exception, their exile into the underdark has made them vicious and dangerous.  Drow are more often evil than not.",
	  size: "medium",
	  speed: {num: 30 , mod: false},
	  darkVision: true,
	  traits: {keen_senses: {desc: "You have a proficiency in the perception skill", action: ["perception"]}, fey_ancestry: {desc: "you have advantage on saving throws against being charmed, and magic caon't put you to sleep", action: false}, trance: {desc: "You dont actually sleep you meditate in a semiconcious state for 4 hours a day.  You recieve the same benefit from this that a human does from 8 hours of sleep.", action: false}},
	  languages: ["common", "elvish"],
	  subraces: {
	  	high: {abilityMod: {intelegence: 1}, traits: {elf_weapon_training: {desc: "You have proficiency with the longsword, shortsword,shortbow,and longbow", actions: ["longsword", "shortsword", "shortbow", "longbow"]}, cantrips: {desc: "You know one cantrip form the wizard spell list. intelegence is your spellcasting ability for it.", actions: ["wizard spell list"]}, extra_language: {desc: "You know one extra language of your choice.", action: ["choose another language"]}}},
	  	wood: {abilityMod: {wisdom: 1}, traits: {elf_weapon_training: {desc: "You have proficiency with the longsword, shortsword,shortbow,and longbow", actions: ["longsword", "shortsword", "shortbow", "longbow"]}, mask_ofthe_wild: {desc: "You can attempt to hide when you are only lightly obscured by foilage, heavy rain, falling snow, mist and other natural phenomena.", actions: false}, fleet_of_foot: {desc: "Your basewalking speed increases to 35 feet", actions: [{speed: 35}]}}},
	  	dark: {abilityMod: {charisma: 1}, traits: {superior_darkvision: {desc: "your darkvision has a radius of 120 feet", action: ["dark vison 120 feet"]}, sunligtht_sensitivity: {desc: "you have disadvantage on attack and wisdom checks when you or your target are in direct sunlight", action: false}, drow_magic: {desc: "You know the dancing lights cantrip, charisma is your spellcast ability", action: ["add dancing lights cantrip"]}, drow_weapons_training: {desc: "You have proficiency with rapiers, shortswords, and hand crossbows", action: ["rapiers", "shortswords", "hand crossbows"]}}}
	  	}
	},
	halfling: {
	  desc: "Halflings are small and practical, the survive by avoiding notice and barring that avoiding offense.  their practicality extends beyond their clothing they have little use for ostentaion and concern themselves with simple needs and pleasures.  They are kind and curious cherishing the bonds of family and friendship/  Even the adventures among them often adventure for friendship and curiosity not fortune and glory.  They can blend easily into crowds making themselves valuable and using their natural stealth to avoid unwanted attention.  They live on farms and groves and look to thier elders to guide them instead of recognizing nobility or rulers.",
	  abilityMod: {dexterity: 2},
	  age: "A halfling reaches adulthoodat the age of 20 and generally lives into the middle of his or her second century",
	  align: "Most halflings are loawful good.  As a rule they are good-hearted and kind, hate to see others in pain and have no tolerance for oppression.",
	  size: "small",
	  speed: {num: 25, mod: false},
	  darkVision: false,
	  traits: {lucky: {desc: "when you roll a 1 on the d20 for an attak roll, ability check, or saving throw you can reroll the die and must use the new roll", action: false}, nimbleness: {desc: "You can move through the space of a creature that is a size larger than yours.", action: false}},
	  languages: ["common", "halfling"],
	  subraces: {
	  	lightfoot: {abilityMod: {charisma: 1} , traits: {naturally_stealthy: {desc: "You can attempt to hide even when you are obscured only by a creature that is at least on seze larger than you.", action: false}}},
	  	stout: {abilityMod: {constitution: 1} , traits: {stout_resilience: {desc: "you have advantage on saving throws against poison, and you have resistance against posion damage.", action: false}}} 
	  	}
	},
	human: {
	  desc: "Humans embody a broad spectrum of body types and sizes and often have a dash of nonhuman blood in their somwhere.  Humans enjoy variety in all things and as such have a wide variety of customs and beliefs.  They enjoy discovery and conquest but when they settle they build cities and empires to last the ages.  Because of thier limited life span instead of a single human gaurding a sacred place or secret they found sacred orders and instituitions to gaurd such things down through the ages.  Adventerous humans often champion causes and not teritories or groups.",
	  abilityMod: {strength: 1, dexterity: 1, constitution: 1, intelegence: 1, wisdom: 1, charisma: 1},
	  age: "Humans reach adulthood in thier late teens and live less than a century.",
	  align: "Humans tend toward no [articular alignment.  the best and the worst are found among them.",
	  size: "medium",
	  speed: {num: 30, mod: false},
	  darkVision: false,
	  traits: false,
	  languages: ["common", "choice"],
	  subraces: {
	  	variant: {abilityMod: "two different abilities of your choice by 1" ,traits: {skills: {desc: "1 skill gains proficiency", action: ["choose skill"]}, feat: {desc: "choose on feat of your choice", action: ["choose feat"]}}}
	  	}
	},
	dragonborn: {
	  desc: "Dragonborn look very much like humaniod dragons.  They are covered in small tough scales and often have a strong line of a particular dragon color running through their family lines and reflect this in thier coloring.  They liv ein clans and the clan is life even before gods.  A dragonborns conduct reflects on the honor or dishonor of the clan.",
	  abilityMod: {strength: 2, charisma: 1},
	  age: "Yound dragonborn grow quickly. they can walk hours after hatching, attain the size and development of a 10 year old human child by the age of 3 and reach adulthood by 15.  They live to be around 80.",
	  align: "dragonborn go to extremes here conciously choosing between good and evil.  Most are good but those that follow Tiamat can be teriable villans.",
	  size: "medium",
	  speed: {num: 30, mod: false},
	  darkVision: false,
	  traits: {draconic_ancestory: {desc: "Choose a type of dragon form the list.  Your breath weapon and resistance is based off of this.", action: ["choose form table"]}, breath_weapon: {desc: "You can use your action to exhale destructive energy. Your weapon type and size are determined by your droconic ancestry.  When you attack with your breath all creatures in your breath must make a saving throw equal to 8 + your constitution modifier + your proficicnecy bonus.  A creature takes 2d6 damage on a failed save and half on a succesful save.", action: false}, damage_resistance: {desc: "You have damage resistance to your draconic ancestry type.", action: false}},
	  languages: ["common", "draconic"],
	  subraces: false
	},
	gnome: {
	  desc: "Gnomes are almost as varied as the humans in thier apperance but not thier size.  Gnomes have a delighted dedication to life they live every moment.  even with 500 years of life they seem to almost fear that they wont have enough time to experience everything.  They tend to live in hilly wooded lands and spend most of thier time underground but get more sun and fresh air than dwarves do.  Gnomes tend to take up adventuring as a way to see the world or simply for the love of exploring.",
	  abilityMod: {intelegence: 2},
	  age: "Gnomes mature at the same rate as humans do and most are expected to settle down into an adult life by age 40.  They can live 350 to almost 500 years.",
	  align: "Gnomes tend toward goodness with even tho tricksters among them being more loyful than vicious.",
	  size: "small",
	  speed: {num: 25, mod: false},
	  darkVision: true,
	  traits: {cunning: {desc: "You have advantage on all intellegene, wisdom and charisma saving throws against magic.", action: false}},
	  languages: ["common", "gnomish"],
	  subraces: {
	  	forest: {abilityMod: {dexterity: 1}, traits: {natural_illusionist: {desc: "You know the minor illusion cantrip.  intellegence is your spellcasting ability score", action: ["add cantrip"]}, speak_with_small_beasts: {desc: "You can comunnicate simple ideas with small or smaller beasts.", action: false}}},
	  	rock: {abilityMod: {constitution: 1}, traits: {artificers_lore: {desc: "Whenever you make an intelligence check related to magic items, alchemical objects or technilogical devices you can add twice your proficiency bonus.", action: false}, tinker: {desc: "You have proficiency with the artisans tools.  using these tools you can spend 1 hour and 10gp worth of materials to construct a tiny clockwork device.  It ceases to function after 24 hours unless you spend an hour a day maintaining it.  if you dismatle it you get your materials back.", action: ["proficiency in artisan tools list of 3 clockwork items"]}}}
	  	}
	},
	halfelf: {
	  desc: "Half elves look like elves to humans and humans to elves, they are somewhere inbetween in stature.  They make excelent ambasodoors and just as excellent swindlers.",
	  abilityMod: {charisma: 2, ability: "two different abilities increase by one. players choice"},
	  age: "Half-elves mature at the same rate as humans do and reach adulthood around the age of 20.  They live much longer than humans, however, often exceeding 180 years.",
	  align: "Half-elves shore the chotic bend of thier elven heritage and as such sometimes prove unreliable or unpredictable.",
	  size: "medium",
	  speed: {num: 30 ,mod: false},
	  darkVision: true,
	  traits: {fey_ancestry: {desc: "you have advantage on saving throws against being charmed, and magic caon't put you to sleep", action: false}, skill_versatillity: {desc: "you gain proficiency in 2 skills of your choice.", action: ["gain proficiency in 2 skills"]}},
	  languages: ["common", "elvish", "one extra language"],
	  subraces: false
	},
	halforc: {
	  desc: "Half-orcs are often scarred and strong.  They revere battle scars as marks of pride.  They ae quick to anger and that anger burns bright and furiously.  They tend to live among orcs or humans as most other races do not accept them.",
	  abilityMod: {strength: 2, constitution: 1},
	  age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14.  They age noticeably faster and rarely live past 75 years.",
	  align: "They inherit a tendency towards chaos from their orc parents and are not strongly inclined towards good.",
	  size: "medium",
	  speed: {num: 30, mod: false},
	  darkVision: true,
	  traits: {menacing: {desc: "You gain proficiency in the intimadation skill", action: ["add proficiency in intimadation"]}, relentless_endurance: {desc: "When you are reduced to 0 hit points but not killed outright.  you cna drop to 1 hit point instead.   You must complete a long rest before you can use this again.", action: false}, savage_attack: {desc: "On critical hit with a melee weapon you can roll one of the weapons damage dice one additional time and add it to the extra damage of the crit.", action: false}},
	  languages: ["common", "orc"],
	  subraces: false
	},
	tiefling: {
	  desc: "Tieflings are infernal bred humans they have horns and tails and their infernal ancestry is clear.  They are very self reliant and suspicous of people.  They live small minority groups often in the toughest parts of town wher they grow up to be swindlers and crime lords.",
	  abilityMod: {intelegence: 1, charisma: 2},
	  age: "Tieflings mature at the same rate as humans but live a few years longer.",
	  align: "Tieflings might not have an innate tendency toward evil, but many of them ind up there.  Evil or not they are most inclined towards an chotic alignment",
	  size: "medium",
	  speed: {num: 30, mod: false},
	  darkVision: true,
	  traits: {hellish_resistance: {desc: "You have resistance to fire damage", action: false}, infernal_legacy: {desc: "You know the thaumaturgy cantrip, charisma is your spell casting ability.", action: ["add cantrip"]}},
	  languages: ["common", "infernal"],
	  subraces: false
	}
};


function raceCall(race, subrace){
	var output = races[race];
	var sub = races[race]["subraces"][subrace];
	output.subraces = sub;
	console.log(output);
}
