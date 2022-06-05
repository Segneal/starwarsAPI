const charData = [
  {
    id: "Luke Skywalker",
    url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg",
    bio: "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxys greatest mysteries. Haunted by Ben Solos fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxys pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.",
  },
  {
    id: "C-3PO",
    url: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg",
    bio: "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxys most defining moments and thrilling battles. Since the Empires defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
  },
  {
    id: "R2-D2",
    url: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg",
    bio: "A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO.",
  },
  {
    id: "Darth Vader",
    url: "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg",
    bio: "Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empires eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Masters will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…",
  },
  {
    id: "Leia Organa",
    url: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg",
    bio: "Princess Leia Organa was one of the greatest leaders of the Rebel Alliance, fearless on the battlefield and dedicated to ending the Empires tyranny. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranked among the galaxys great heroes. But life under the New Republic proved difficult for her. Sidelined by a new generation of political leaders, she struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career were accompanied by more personal losses, which she endured with her seemingly inexhaustible will.",
  },
  {
    id: "Owen Lars",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg",
    bio: "Owen Lars continued his father Clieggs efforts to build his homestead into a productive farm, working alongside his wife, Beru. Helping with the dreary chores required to keep the farm profitable, Owen relied on his nephew Luke Skywalker. He could not rein in Luke's drive for adventure, though. Young Skywalker longed to leave Tatooine and join the Imperial Academy, to live life among the stars. Owen forbade it, reminding Luke that he was needed on the moisture farm. Skywalker would eventually leave the farm, but under tragic circumstances. Imperials searching for missing droids razed the Lars homestead and killed Owen and Beru.",
  },
  {
    id: "Beru Whitesun lars",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg",
    bio: "As a young, shy girl, Beru Whitesun's aspirations did not reach beyond Tatooine. She was content to marry Owen Lars and lead the tough life of a moisture farmer. Beru also fulfilled the role of guardian and substitute mother to young Luke Skywalker, and repeatedly voiced her support for his dream of joining his friends at the Academy. Beru fell victim to the Empire when Imperial stormtroopers raided the family farm in search of droids thought to have top-secret plans for the Empire's ultimate weapon, the Death Star.",
  },
  {
    id: "R5-D4",
    url: "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg",
    bio: "A red astromech droid, R5-D4 thought he'd found a home when the Jawas sold him to Owen Lars, along with the protocol droid C-3PO. But R5's motivator blew as he rolled away from the sandcrawler, forcing the Jawas to take him back in exchange for R2-D2.",
  },
  {
    id: "Biggs Darklighter",
    url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg",
    bio: "Biggs Darklighter grew up on Tatooine with Luke Skywalker, and shared his friend's dreams of escaping the dull desert world. After graduating from the Imperial Academy, he defected from the Empire's service to join the Rebellion. He and Luke were reunited at Yavin 4's Rebel base, and flew together against the Death Star. Luke returned from that mission as a hero, but Biggs did not survive.",
  },
  {
    id: "Obi-Wan Kenobi",
    url: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg",
    bio: "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.",
  },
  {
    id: "Anakin Skywalker",
    url: "https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpeg",
    bio: "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force. A hero of the Clone Wars, Anakin was caring and compassionate, but also had a fear of loss that would prove to be his downfall.",
  },
  {
    id: "Wilhuff Tarkin",
    url: "https://lumiere-a.akamaihd.net/v1/images/aftermath-the-bad-batch-story-gallery-14_d05778d2.jpeg",
    bio: "An ambitious, ruthless proponent of military power, Wilhuff Tarkin became a favorite of Supreme Chancellor Palpatine and rose rapidly through the Imperial ranks. Shortly after the Empire's creation, he was put in charge of the construction of the Death Star. Tarkin saw the Death Star as a way to crush all dissent to the Empire's rule -- fear of the station's planet-killing superlaser would keep the galaxy's star systems in line. He demonstrated the station's power by destroying Alderaan, but died soon afterwards when the Death Star itself was destroyed.",
  },
  {
    id: "Chewbacca",
    url: "https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg",
    bio: "A legendary Wookiee warrior and Han Solos longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.",
  },
  {
    id: "Han Solo",
    url: "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg",
    bio: "Han Solo rose from an impoverished childhood on the mean streets of Corellia to become one of the heroes of the Rebel Alliance. As captain of the Millennium Falcon, Han and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. After the Battle of Endor, Han faced difficult times in a chaotic galaxy, leading to a shattering confrontation with his estranged son Ben.",
  },
  {
    id: "Greedo",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_greedo_01_169_3e4b96ef.jpeg",
    bio: "Greedo was a Rodian bounty hunter with a tapir-like snout, bulbous eyes, pea-green skin, and a crest of spines atop his skull. He was overzealous and a bit slow on the take, not to mention a pretty poor shot with a blaster. Though he fancied himself a big time bounty hunter in the employ of no less an underworld figure than Jabba the Hutt, in truth, no one took him too seriously.",
  },
  {
    id: "Jabba Desilijic Tiure",
    url: "https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg",
    bio: "Jabba the Hutt was one of the galaxys most powerful gangsters, with far-reaching influence in both politics and the criminal underworld. There were no second chances with Jabba, something Han Solo would find out -- though the slug-like alien would ultimately fall victim to his own hubris and vengeful ways.",
  },
  {
    id: "Wedge Antilles",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg",
    bio: "A talented young rebel pilot from Corellia, Wedge Antilles survived the attack on the first Death Star to become a respected veteran of Rogue Squadron. He piloted a snowspeeder in the defense of Echo Base on Hoth, and led Red Squadron in the rebel attack on the second Death Star above Endor.",
  },
  {
    id: "Jek Tono Porkins",
    url: "https://lumiere-a.akamaihd.net/v1/images/jek-porkins-main-image_0b8d2d13.jpeg",
    bio: "Jek Porkins was a pilot and trader who abandoned his homeworld when the Empire moved in and developed a new military base there. The burly rebel pilot flew an X-wing at the Battle of Yavin under the call sign Red 6. His X-wing developed a mechanical problem early in the battle, leaving him struggling to maneuver. Before Porkins or his astromech could fix the problem, one of the Death Stars turbolasers zeroed in on the X-wing, incinerating it and killing Porkins instantly.",
  },
  {
    id: "Yoda",
    url: "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg",
    bio: "Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.",
  },
  {
    id: "Palpatine",
    url: "https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine-darth-sidious-main_3d82ddaa.jpeg",
    bio: "The dark side of the Force is a pathway to many abilities some consider to be unnatural, and Sheev Palpatine is the most infamous follower of its doctrines. Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, he was also Palpatine, a Naboo Senator and phantom menace. He manipulated the political system of the Galactic Republic until he was named Supreme Chancellor -- and eventually Emperor – and ruled the galaxy through fear and tyranny. The galaxy rejoiced when he died at the Battle of Endor, but Sidious had cheated death and patiently plotted a return to power.",
  },
  {
    id: "Boba Fett",
    url: "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg",
    bio: "With his customized Mandalorian armor, deadly weaponry, Boba Fett was once regarded as one of the most fearsome and capable bounty hunters in the galaxy. An unaltered genetic clone of his father, bounty hunter Jango Fett, Boba learned combat and martial skills from a young age. Over the course of his career, which included contracts for the Empire and the criminal underworld, he became a legend. Although Fett seemingly met his demise in the Sarlacc pit on Tatooine after falling into the Great Pit of Carkoon, Boba survived the beast and lived to reclaim his armor, taking over the throne at Jabba's Palace.",
  },
  {
    id: "IG-88",
    url: "https://lumiere-a.akamaihd.net/v1/images/ig_88_cdd5cc52.jpeg",
    bio: "Many people in the galaxy fear droids, what with the memories of the Clone Wars still fresh in their minds. Far more terrifying than battle droids were assassin droids, independently programmed mechanical killers that had no masters. IG-88 is a battered chrome war droid who has become a bounty hunter, and answered Darth Vader's call to capture the Millennium Falcon during the events surrounding the Battle of Hoth.",
  },
  {
    id: "Bossk",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_bossk_01_169_c3c42fbe.jpeg",
    bio: "One of the most feared bounty hunters of the galaxy, Bossk used his natural Trandoshan hunting instincts to capture his prey. During the Clone Wars, the red-eyed reptilian partnered with Aurra Sing, Castas and young Boba Fett. Bossk didn't care much for vendettas or politics. He was in it to get paid. After a brief stint in a Republic prison, Bossk continued his partnership with Fett, becoming a bodyguard to the teen bounty hunter. Decades later, Bossk answered Darth Vader's call to capture the Millennium Falcon after the Battle of Hoth, an assignment that put him in direct competition with Boba.",
  },
  {
    id: "Lando Calrissian",
    url: "https://lumiere-a.akamaihd.net/v1/images/lando-main_a207290e.jpeg",
    bio: "Lando Calrissian may have come late to the fight against the Empire, but his role in destroying the second Death Star cemented his reputation as a hero. In his youth, Lando was a sportsman seeking a fortune at the sabacc tables. After he lost his beloved ship to Han Solo, Lando spent years living the high life and pursuing get-rich-quick schemes, with uneven results. He went semi-respectable as the baron administrator of Cloud City, only to be drawn into the fight against the Empire. After a personal tragedy, Lando sought solace in isolation on Pasaana, unaware that the galaxy would need him again.",
  },
  {
    id: "Lobot",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg",
    bio: "Never far from Baron Administrator Lando Calrissian's side was Lobot, Calrissian's aide and Cloud City's computer liaison officer. Lobot is a human male with a shiny, brain-enhancing device wrapped around the back of his skull that allowed him to contact directly with the city's central computer.",
  },
  {
    id: "Ackbar",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_ackbar_01_169_55137220.jpeg",
    bio: "A veteran commander, Ackbar led the defense of his homeworld, Mon Cala, during the Clone Wars and then masterminded the rebel attack on the second Death Star at the Battle of Endor. Ackbar realized the rebels had been drawn into a trap at Endor, but adjusted, with his fleet buying valuable time for the attack to succeed. After the Battle of Endor, Ackbar became a Grand Admiral in the New Republic, winning many victories including the pivotal Battle of Jakku. He retired to Mon Cala, but was coaxed back into service with the Resistance by Leia Organa.",
  },
  {
    id: "Mon Mothma",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_monmothma_01_169_b62808e8.jpeg",
    bio: "A leader of the Galactic Senate's Loyalist faction, Mon Mothma opposed Supreme Chancellor Palpatine's policies during the final days of the Republic. Working in secret, she helped found the Rebel Alliance, and served as its civilian leader during the long struggle against the Empire.",
  },
  {
    id: "Arvel Crynyd",
    url: "https://static.wikia.nocookie.net/esstarwars/images/d/de/Arvel-crynyd.jpg",
    bio: "Arvel Crynyd was a Human pilot who served with the Alliance to Restore the Republic during the Galactic Civil War. In 4 ABY, Crynyd participated in the Alliance assault on the Galactic Empire's second Death Star at the Battle of Endor, flying an RZ-1 A-wing interceptor as the leader of Green Squadron.",
  },
  {
    id: "Wicket Systri Warrick",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg",
    bio: "Wicket W. Warrick was the brave young Ewok who willingly joined the Rebellion and aided in the battle against the Empire on the forest moon of Endor. Even before he encountered the Rebels, Wicket had devised methods for defeating the Imperial machines, plans which were implemented after the Ewok befriended Princess Leia and recruited his tribe to the Alliance's cause. During the Battle of Endor, Wicket fought valiantly alongside his new allies.",
  },
  {
    id: "Nien Nunb",
    url: "https://lumiere-a.akamaihd.net/v1/images/nien-nunb-main_1dbef681.jpeg",
    bio: "A native of Sullust, Nien Nunb was a smuggler who fought for both the Rebel Alliance and the Resistance during his long career. An expert pilot, he served as Lando Calrissians co-pilot aboard the Millennium Falcon during the Battle of Endor, flew an X-wing in the raid on Starkiller Base and survived the First Orders assault on Crait. He was then killed fighting for freedom at Exegol",
  },
  {
    id: "Qui-Gon Jinn",
    url: "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg",
    bio: "A venerable if maverick Jedi Master, Qui-Gon Jinn was a student of the living Force. Qui-Gon lived for the moment, espousing a philosophy of feel, don't think -- use your instincts. - On Tatooine, Qui-Gon discovered a young slave boy named Anakin Skywalker who was strong in the Force. Sensing the boy's potential, Qui-Gon liberated Anakin from slavery. The Jedi Master presented Anakin to the Jedi Council, but they deemed the boy too old to begin training and dangerously full of fear and anger. They refused to allow Qui-Gon to train Anakin, but rescinded their decision to fulfill Qui-Gon's dying wish.",
  },
  {
    id: "Nute Gunray",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg",
    bio: "Neimoidians are known for their business skills, but Nute Gunray, Viceroy of the Trade Federation, was more cutthroat than most. It was Gunray who conspired with the Sith Lord Darth Sidious to launch the blockade and subsequent invasion of Naboo. Once the planet was under siege, Gunray attempted to force Queen Amidala to sign a treaty that would legitimize the occupation. Amidala escaped, and returned to infiltrate her own palace and blast through Gunray's protectors. Arrested by Republic officials, Gunray was carted off to answer for his crimes, but evaded imprisonment and kept his post.",
  },
  {
    id: "Finis Valorum",
    url: "https://lumiere-a.akamaihd.net/v1/images/valorum_a31904f4.jpeg",
    bio: "A well-meaning civil servant whose chancellorship was hampered by corruption in the Senate and bureaucratic snarls, Valorum secretly turned to the Jedi Knights for help breaking the Trade Federation's blockade of Naboo. But Valorum was betrayed by Naboo's Senator Palpatine, who maneuvered Queen Amidala into asking the Senate for a no-confidence vote in the Supreme Chancellor's leadership. A stunned Valorum was removed from office in favor of Palpatine.",
  },
  {
    id: "Padmé Amidala",
    url: "https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg",
    bio: "Padmé Amidala was a courageous, hopeful leader, serving as Queen and then Senator of Naboo -- and was also handy with a blaster. Despite her ideals and all she did for the cause of peace, her secret, forbidden marriage to Jedi Anakin Skywalker would prove to have dire consequences for the galaxy.",
  },
  {
    id: "Jar Jar Binks",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg",
    bio: "A clumsy, well-meaning Gungan outcast on Naboo, Jar Jar Binks struggled to prove his worth throughout his life. Putting his awkward past behind him, Jar Jar left the swamps of Naboo to enter the even murkier waters of Coruscant politics, becoming a representative for his people in the galactic capital. There, his best intentions and eagerness to serve were exploited by scheming Senators and others in positions of power.",
  },
  {
    id: "Roos Tarpals",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_generaltarpals_01_169_cb2134d2.jpeg",
    bio: "The gravelly-voiced patrol chief of Otoh Gunga, Tarpals has endured many a headache caused by the antics of Jar Jar Binks. Tarpals kept an eye on the bumbling outcast, making sure the youngster didn't re-enter Gungan society. During the Trade Federation occupation of Naboo, Tarpals was part of the Gungan Grand Army that fought against the battle droid invaders. Ironically, Tarpals served under Binks, who had unexpectedly received the rank of general by Boss Nass himself. Tarpals stayed close to Binks, trying to keep his commanding officer out of trouble. By the time of the Clone Wars, Tarpals was promoted to general, and served as leader of the Gungan Grand Army.",
  },
  {
    id: "Rugor Nass",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_bossnass_01_169_ef11c0db.jpeg",
    bio: "The stout and stern leader of the Gungans, Boss Nass was a proud keeper of his people's ways. His booming voice issued decrees on behalf of all the Gungans of Otoh Gunga. He kept a tight rein on Gungan affairs, continuing a longstanding custom of isolationism. Though Nass' temper is short, displays of courage and humility can pierce through his preconceptions. When Queen Amidala prostrated herself before the Gungan leader to request his aid in fighting off the Trade Federation invasion, he was impressed. Nass committed the Gungan Grand Army to wage war against invading battle droids.",
  },
  {
    id: "Ric Olié",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_ricolie_01_169_f175f81b.jpeg",
    bio: "A veteran of the Naboo Space Fighter Corps, Ric Olie was the leader of Bravo Flight and had the honor of flying Queen Amidala's Royal Starship to and from Naboo. Answerable directly to Captain Panaka, Olie was capable of flying any craft on Naboo. During the Battle of Naboo, Olie's squadron of N-1 starfighters were successful in destroying the Trade Federation's Droid Control Ship with the help of Anakin Skywalker.",
  },
  {
    id: "Watto",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_watto_01_169_ecd563f1.jpeg",
    bio: "Watto was a Toydarian junk dealer in Mos Espa who bought Shmi Skywalker and her son Anakin from Gardulla the Hutt. An inveterate gambler, he sponsored Anakin in several Podraces, but often bet against his own slave, who was talented but inexperienced. Watto lost Anakin to Qui-Gon Jinn in a wager on the Boonta Eve race. Years later, he sold Shmi to the moisture farmer Cliegg Lars.",
  },
  {
    id: "Sebulba",
    url: "https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg",
    bio: "A crafty, vicious Dug, Sebulba became one of the Outer Rim's most successful Podracers. Whether roaming the streets of Mos Espa or piloting his massive orange Podracer, Sebulba was aggressive and arrogant. He was not above cheating to win a race, and would even resort to illegal weapons in an attempt to defeat his opponents. Sebulba was Mos Espa's reigning Podrace champion until he entered the Boonta Eve Classic, where he was defeated by young Anakin Skywalker, much to the Dug's frustration.",
  },
  {
    id: "Quarsh Panaka",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_captainpanaka_01_169_6a3ccac5.jpeg",
    bio: "Queen Amidala's loyal protector during the Trade Federation invasion crisis was Captain Panaka. Panaka was often referred to as -the quickest eyes on Naboo- for his attention to detail and selfless dedication to the safety of the Queen. Panaka commanded a team of Royal Palace Guards and Security Troopers stationed throughout Theed. During the Trade Federation invasion, Panaka stayed close to the Queen, ensuring her protection from the Neimoidians' plans. His loyalty was such that he would openly question the strategy of Jedi Knights if he thought it would somehow endanger Amidala.",
  },
  {
    id: "Shmi Skywalker",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_shmiskywalkerlars_01_169_7449f0a8.jpeg",
    bio: "The mother of Anakin Skywalker was also a brave and resilient woman who survived life as a slave to become a Tatooine moisture farmer. Shmi surrendered her son to the Jedi Order, putting him on a path to become one of the greatest Jedi. Her death at the hands of Tusken Raiders became a critical step on Anakin's journey to the dark side.",
  },
  {
    id: "Darth Maul",
    url: "https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg",
    bio: "A deadly, agile Sith Lord trained by the evil Darth Sidious, Darth Maul was a formidable warrior and scheming mastermind. He wielded an intimidating double-bladed lightsaber and fought with a menacing ferocity. Though he fell in battle against Obi-Wan Kenobi, the Zabrak from Dathomir would prove to be much harder to destroy than originally believed.",
  },
  {
    id: "Bib Fortuna",
    url: "https://lumiere-a.akamaihd.net/v1/images/bib-fortuna-main_376ba1ba.jpeg",
    bio: "As the former majordomo to the late Jabba the Hutt, the scheming Bib Fortuna seized power after his master's demise and attempted to control the criminal underworld on Tatooine. For decades, those attempting to do business with Jabba the Hutt first needed to maneuver past the Twi'lek, an ever-present attendant who often hovered near Jabba's ear, offering advice and feeding his boss information. Fortuna followed the rules of protocol in the Hutt's court (such as they were), and spoke only in Huttese, though he understood other tongues.",
  },
  {
    id: "Aayla Secura",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg",
    bio: "With an athletic build, an exotic beauty, and blue skin, Aayla Secura stood out among the many faces of the Jedi ranks. A cunning warrior and Jedi Knight during the rise of the Clone Wars, Aayla fought alongside Clone Commander Bly on many exotic battlefields. Having mastered the emotional detachment necessary in the Jedi Order, she always tried to pass on what she had learned to others. Aayla was killed, along with many other Jedi Generals, when her troops turned on her in reaction to Supreme Chancellor Palpatines broadcast of Order 66.",
  },
  {
    id: "Ratts Tyerel",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_rattstyerell_01_169_031aea6d.jpeg",
    bio: "Ratts Tyerell was the tiniest of the Podracer pilots in the Boonta Eve Classic, though size matters not in such a competition. The little scrapper piloted a Podracer with immense engines ... too big, it would seem, for the tight confines of the Laguna Caves. On the second lap of the race, Ratts' accelerator jammed, and he couldn't get clearance past the rocky stalactites. The resulting fireball killed the little guy. His family, who had traveled to Mos Espa to witness the race, was reportedly seen grieving shortly thereafter.",
  },
  {
    id: "Dud Bolt",
    url: "https://static.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg",
    bio: "Dud Bolt was a Vulptereen pod racer who was known for participating in the Boonta Eve Classic, preferring the use of a Vulptereeno 327 Pod racer. During a Boonta race that took place shortly before the Battle of Naboo, Bolt he competed against a young human named Anakin Skywalker, who would eventually win the Boonta and earn a life free of slavery. Bolt continued to race until the start of the Clone Wars, including taking part in a snow-covered planet.",
  },
  {
    id: "Gasgano",
    url: "https://lumiere-a.akamaihd.net/v1/images/gasgano_6f648f83.jpeg",
    bio: "A slight, spindly, six-limbed alien, Gasgano was a thrill-seeker uniquely suited to the extreme sport of Podracing. Gasgano was very competitive, and sought to beat racers Anakin Skywalker and Sebulba during the Boonta Eve Podrace. He piloted a green Ord Pedrovia Podracer in the competition.",
  },
  {
    id: "Ben Quadinaros",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg",
    bio: "The pudgy, comic-faced Ben Quadinaros was a rookie Podracer who claimed he came from the mysterious Tund system. He competed in the Boonta Eve Podrace that saw the liberation of Anakin Skywalker from slavery. Ben was largely inexperienced, and was quite terrified of the Boonta race. At the start of the race, his engines wouldn't even ignite. It was not until most of his competitors were already heading towards their second lap that his four engines did light -- just as his power couplings shorted, sending the rockets flying about the arena.",
  },
  {
    id: "Mace Windu",
    url: "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg",
    bio: "A grim Jedi Master with an amethyst-bladed lightsaber, Mace Windu was the champion of the Jedi Order, with little tolerance for the failings of the Senate, the arguments of politicians, or the opinions of rebellious Jedi. As the Clone Wars intensified, Mace sensed the dark side of the Force at work, and knew the Jedi's enemies were plotting to destroy the Order and end its stewardship of the galaxy.",
  },
  {
    id: "Ki-Adi-Mundi",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_kiadimundi_01_169_0a8842d3.jpeg",
    bio: "Ki-Adi-Mundi was a Cerean alien who sat on the Jedi Council. A humanoid being, Ki's most distinguishing physical feature was an enlarged conical cranium that contained a binary brain. When Jedi Master Qui-Gon Jinn reported a Sith attack during the events surrounding the Battle of Naboo, Ki-Adi-Mundi expressed shock at the notion. -Impossible-, he remarked, -the Sith have been extinct for a millennium.- He also failed to see how far Count Dooku had fallen from the Jedi ideals just prior to the Clone Wars, believing that Dooku was incapable of violence or murder.",
  },
  {
    id: "Kit Fisto",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg",
    bio: "Kit Fisto is a striking example of an alien Jedi, a Nautolan with large eyes, and a gathered tangle of flexible tentacle-tresses extending from his head. He is at home in the waters of aquatic planets, like his native Glee Anselm. As a Jedi Master, Fisto has an intense focus, particularly in combat. He is also much more laid back and capable of enjoying a hearty chuckle than some of his humorless colleagues.",
  },
  {
    id: "Eeth Koth",
    url: "https://lumiere-a.akamaihd.net/v1/images/Eeth-Koth2_246ea172.jpeg",
    bio: "Eeth Koth was a member of the Jedi High Council in the final years of the order. From within the polished towers of the Jedi Temple on Coruscant, the Council governed the actions of the Jedi Knights. Koth was one of the 12 Jedi present when Qui-Gon Jinn presented Anakin Skywalker as the Chosen One to the Council. A determined warrior with a deep, spiritual connection to the Force, Koth resisted torture at the hands of General Grievous during the Clone Wars, and was even able to secretly communicate his location to the Jedi Council. Koth was saved from Separatist clutches by the daring efforts of his fellow Jedi.",
  },
  {
    id: "Adi Gallia",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg",
    bio: "Jedi Master Adi Gallia was a member of the Order's High Council during the Clone Wars. She and the other members of that ruling body would convene in a temple high above the Coruscant landscape, deciding important matters of the Jedi. Stern and focused, she would remark upon the more outrageous tactics carried out by Anakin Skywalker or Obi-Wan Kenobi in the course of the war, but would rarely condemn their effective actions. Though not as brash as Anakin, Adi Gallia was known to be an aggressive warrior who had no problem bringing the fight to the enemy.",
  },
  {
    id: "Saesee Tiin",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_saeseetiin_01_169_c9a8a41c.jpeg",
    bio: "The imposing Saesee Tiin was a member of the Jedi Council during the final years of the Republic. In addition to being a skilled, courageous master of the lightsaber, he was also a capable starfighter pilot. Tiin voyaged to Naboo to attend the funeral of fallen Jedi Qui-Gon Jinn, and the jubilant celebration that marked the liberation of that outlying world. Ten years after this event, Tiin was still an active member of the Jedi order, and a vital battlefield general in the Clone Wars.",
  },
  {
    id: "Yarael Poof",
    url: "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-08-03_at_10_b0b47660.jpeg",
    bio: "A gaunt, long-necked Quermian, Yarael Poof had two brains and four arms, which he kept hidden beneath his Jedi robes. Poof was a member of the Jedi Council during the final years of the Republic, and was in the Jedi Council Chamber when Qui-Gon Jinn returned from Tatooine with the extraordinary news that the ancient Sith had returned to challenge the Jedi once more.",
  },
  {
    id: "Plo Koon",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg",
    bio: "A Kel Dor from Dorin, Plo Koon was among the wisest members of the Jedi Order, respected for his level-headed analysis of events and unflappable calm. Deeply concerned for life in all its myriad forms, Plo was especially devoted to protecting the clones under his command. He shared a special bond with Ahsoka Tano, whom hed brought to the Jedi Order as a toddler. One of many victims of Order 66, Master Plo died at Cato Neimoidia when his wingmen shot down his starfighter",
  },
  {
    id: "Mas Amedda",
    url: "https://lumiere-a.akamaihd.net/v1/images/mas-amedda-main-image_756fa0ae.jpeg",
    bio: "Mas Amedda was the Vice Chair of the Galactic Senate during Chancellor Valorum's term, a position he continued to hold as Chancellor Palpatine transformed the Republic into the Galactic Empire. Amedda's booming voice often called for order when the partisan nature of the Republic's government degenerated into pointless bickering. In an alien gesture of authority, he would often punctuate such calls with a flicker of his long, forked tongue.",
  },
  {
    id: "Gregar Typho",
    url: "https://lumiere-a.akamaihd.net/v1/images/captain-typho_f9e8d7bd.jpeg",
    bio: "Gregar Typho succeeded Captain Panaka as head of Padmé Amidalas security detail, protecting her as Naboos queen and then as its Senator. During the Separatist Crisis, Typho endorsed the plan for Padmé to evade assassins by secretly returning to Naboo with Anakin Skywalker. He loyally defended the Senator against a host of enemies in the Clone Wars.",
  },
  {
    id: "Cordé",
    url: "https://static.wikia.nocookie.net/esstarwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png",
    bio: "Cordé, anteriormente conocida como Cordyn, fue una doncella humana que sirvió a la Senadora Padmé Amidala en los días previos a las Guerras Clon. Ella estaba actuando como un señuelo cuando fue asesinada en un atentado contra la vida de Amidala por la cazarrecompensas clawdite Zam Wesell.",
  },
  {
    id: "Cliegg Lars",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg",
    bio: "Cliegg Lars was a modest, good-hearted moisture farmer who lived on the Lars homestead, not far from the township of Anchorhead. During a trip to the bustling spaceport of Mos Espa, Cliegg fell in love with Shmi Skywalker, a slave owned by Toydarian junk trader Watto. Cliegg purchased Shmi's freedom and, soon after, made her his bride. They lived a quiet existence for years on the homestead, surviving against the harsh desert elements. With Owen, Cliegg's son from a previous union, and Owen's girlfriend Beru Whitesun, the Lars homestead was a tiny island of familial warmth amidst the endless desert wastes. Until tragedy struck...",
  },
  {
    id: "Poggle the Lesser",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_pogglethelesser_01_169_7095ae3c.jpeg",
    bio: "Poggle the Lesser was the leader of the insect-like Geonosians throughout the era of the Clone Wars. Due to his control of the Geonosian battle droid factories, he was a powerful figure within the Confederacy of Independent Systems and commanded the droid armies that fought against the Republic in two battles for control of Geonosis. At the end of the war, Poggle lost his life to Darth Vader.",
  },
  {
    id: "Luminara Unduli",
    url: "https://lumiere-a.akamaihd.net/v1/images/luminara_c05b2971.jpe",
    bio: "A green-skinned Mirialan, Luminara Unduli served the Jedi Order during the final years of the Galactic Republic, and trained the capable Padawan Barriss Offee. A no-nonsense Jedi Master, Luminara fought in Clone Wars battles such as Geonosis and Kashyyyk, and was thought to have perished during Order 66. In reality, shed been taken into Imperial custody and executed, with holographic transmissions of her captivity used as bait to capture fugitive Jedi.",
  },
  {
    id: "Barriss Offee",
    url: "https://lumiere-a.akamaihd.net/v1/images/Barriss-Offee-main-image_a4f0cc76.jpeg",
    bio: "The Mirialan Padawan to Luminara Unduli, Barriss Offee preferred learning and studying ancient Jedi texts in the Temple to war. This mindset, while noble, led her down a dark path that saw her betray friends and commit terrible acts.",
  },
  {
    id: "Dormé",
    url: "https://lumiere-a.akamaihd.net/v1/images/dorme-2_dd1590e9.jpeg",
    bio: "Despite no longer being Naboos queen, Padmé Amidala retained some royal perks as senator. Among them were her loyal handmaidens – a id that did little justice to the womens training as bodyguards. Padmés most devoted aide, Dormé, advised the senator on Coruscant and helped look after Naboos affairs when Padmé retreated to her homeworld with Anakin Skywalker.",
  },
  {
    id: "Dooku",
    url: "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg",
    bio: "Count Dooku was a menacing Sith Lord and central figure in the Clone Wars. Once a Jedi -- trained by Yoda -- he became disillusioned with the Jedi Order and thirsted for greater power. Dooku voluntarily left the light side behind and became Darth Sidious dark side disciple, taking the secret id Darth Tyranus and leading the Separatist army. Dooku advanced Sidiouss secret plot to take over the galaxy, but forgot that betrayal is the nature of the Sith.",
  },
  {
    id: "Bail Prestor Organa",
    url: "https://lumiere-a.akamaihd.net/v1/images/Bail_Organa_e28bc2fc.jpeg",
    bio: "Bail Organa, a member of Alderaan's royal family and the planet's representative to the Republic Senate, earned respect on Coruscant for his honesty and his commitment to justice. Prior to the Clone Wars, Bail served alongside Senator Padmé Amidala as a member of Chancellor Palpatine's Loyalist Committee. The two became close friends, and recruited like-minded allies to prevent Palpatine's alarming grabs for power. At the end of the war, Bail Organa adopted Padmé's daughter Leia and raised her as an Alderaanian princess. While representing Alderaan in the Imperial Senate, he worked secretly with allies such as Mon Mothma and Ahsoka Tano to assist rebel cells scattered across the galaxy, working towards the day that a unified Rebellion could emerge. Bail died when the Death Star destroyed his homeworld.",
  },
  {
    id: "Jango Fett",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg",
    bio: "In the final years of the Republic, Jango Fett was regarded as the best bounty hunter in the galaxy. A proficient marksman and unarmed combatant, Fett was covered in a sleek armored suit that concealed his scarred face. His combat gear featured an arsenal of weaponry, including retractable wrist blades, a snare, dual blaster pistols and other more exotic tools of the trade. In combat, Jango used his harnessed jetpack to gain the advantage of speed and height over his enemies. The backpack also carried a nasty surprise -- an explosive rocket could be launched from it. For interstellar travel, Jango traveled aboard his well-worn starship, Slave I.",
  },
  {
    id: "Zam Wesell",
    url: "https://lumiere-a.akamaihd.net/v1/images/zam-wesell_bbaffe9f.jpeg",
    bio: "A shape-shifting Clawdite assassin from Zolan, Zam Wesell could assume any humanoid form. Jango Fett hired her to kill Padmé Amidala on Coruscant, but the Naboo Senator eluded an explosive that destroyed her starship, then escaped poisonous kouhuns let loose in her apartment. Anakin Skywalker and Obi-Wan Kenobi pursued Zam across Coruscant, catching her in the Outlander Club. Before she could talk, Jango shot her dead with a Kaminoan saberdart.",
  },
  {
    id: "Dexter Jettster",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_dexterjettster_01_169_09c89b71.jpeg",
    bio: "Obi-Wan Kenobi counted on Dexter Jettster, an old friend, to identify a poison dart, and Jettster didn't fail him. The cook correctly recognized the small-tined projectile as a Kamino saberdart. Few have ever heard of the planet Kamino, but Dex not only informed Obi-Wan as to its location (12 parsecs south of the Rishi Maze), but also its inhabitants. Dex warned that the native Kaminoans -- cloners of some repute -- keep to themselves, but are welcoming to those with the credits to spare.",
  },
  {
    id: "Lama Su",
    url: "https://lumiere-a.akamaihd.net/v1/images/lama-su-main_ae95766c.jpeg",
    bio: "The lanky Prime Minister of remote Kamino, Lama Su oversaw the creation of the Galactic Republic's first clone armies. That effort gave his storm-swept homeworld influence in the Republic, but also made it a target of the Separatist military. At the dawn of the new Empire, Lama Su remains in power, seeking the clone Omega for a new project.",
  },
  {
    id: "Taun We",
    url: "https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-bounty-lost-story-gallery-03_1878426f.jpeg",
    bio: "A beautiful sylph-like Kaminoan, Taun We is the administrative aide to the Prime Minister of Kamino, Lama Su. When Obi-Wan Kenobi arrived at the rain-swept platforms of Tipoca City, he was greeted by the gentle Taun We. Taun We explained that the Kaminoans had long been expecting the arrival of a Jedi envoy, since a Jedi representative, Master Sifo-Dyas, commissioned a clone army a decade earlier. Kenobi bluffed his way into the heart of the cloning operation, and had the naive Taun We introduce him to the original source of the clones, Jango Fett.",
  },
  {
    id: "Jocasta Nu",
    url: "https://lumiere-a.akamaihd.net/v1/images/jocasta-nu_a3b32f08.jpeg",
    bio: "The Jedi Archives are the galaxy's greatest repository of knowledge, and Madame Jocasta Nu is their Chief Librarian. She helps other Jedi find information in the Archive using its data terminals, and she controls access to the restricted contents of its Holocron Vault. Jocasta Nu can sometimes be too confident in thinking that the Archives contain the correct answers to all questions.",
  },
  {
    id: "R4-P17",
    url: "https://lumiere-a.akamaihd.net/v1/images/r4-p17_19602f62.jpeg",
    bio: "R4-P17 was an astromech droid assigned to Obi-Wan Kenobi, and assisted the Jedi Master on many missions, from Kamino and Geonosis to Teth and Tatooine. She was destroyed during the Battle of Coruscant when buzz droids swarmed Obi-Wans fighter, ripping the faithful droids dome from her metal body.",
  },
  {
    id: "Wat Tambor",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_emirwattambor_01_169_9528ba0f.jpeg",
    bio: "The foreman of the Techno Union, Wat Tambor was one of the original and most fervent Separatist leaders, pledging his loyalty and his battle droid armies to Count Dooku at a pivotal meeting on Geonosis. Later in the war, Tambor was appointed emir of Ryloth. His occupation was a cruel one, in which Tambor stripped the Twi'leks of whatever valuables he could find, then bombed their villages.",
  },
  {
    id: "San Hill",
    url: "https://lumiere-a.akamaihd.net/v1/images/san-hill_852a226d.jpeg",
    bio: "San Hill was a male Muun who was the chairman of the InterGalactic Banking Clan at the onset of the Clone Wars and signed Count Dookus treaty. He served as the IG representative on the Separatist Council until he was murdered unceremoniously by the Sith Lord Darth Vader shortly after the end of the war.",
  },
  {
    id: "Shaak Ti",
    url: "https://lumiere-a.akamaihd.net/v1/images/shaak_ti_9523e7c7.jpeg",
    bio: "A wise and patient Jedi Master, the Togruta Shaak Ti fought at the Battle of Geonosis, and supervised the training of clone cadets on Kamino. There, she struggled to balance the necessity of producing capable troopers with compassion for the clones as living beings. Ti helped defend Kamino against Separatist attack, balancing assignments in the field with her duties on the Jedi Council.",
  },
  {
    id: "Grievous",
    url: "https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg",
    bio: "General Grievous was a brilliant Separatist military strategist and a feared Jedi hunter, known for his ruthlessness and hacking cough. His body itself was a weapon, allowing him lightning quick strikes and devastating blows. But he was also quick to run from a fight, a tactic that worked until one final meeting with Obi-Wan Kenobi.",
  },
  {
    id: "Tarfful",
    url: "https://lumiere-a.akamaihd.net/v1/images/tarrful_f20d3412.jpeg",
    bio: "A massive Wookiee general, Tarfful helped defend his native Kashyyyk during the Clone Wars. A distress signal brought Tarfful and his most trusted warriors rushing to Chewbacca's help against the hated Trandoshans on the hunting grounds of Wasskah. Later, Tarfful and Chewbacca fought side by side with General Yoda on the battlegrounds of Kashyyyk.",
  },
  {
    id: "Raymus Antilles",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_captainantilles_01_169_75e05265.jpeg",
    bio: "A level-headed ship officer schooled in diplomacy, and a capable pilot entrusted to ferry about the royal family of Alderaan, Captain Antilles served in Bail Organa's command staff. He was part of the bridge crew of Organa's diplomatic cruiser, a role he would continue during the time Princess Leia served as Senator of Alderaan.",
  },
  {
    id: "Sly Moore",
    url: "https://lumiere-a.akamaihd.net/v1/images/sly-moore_6af90e66.jpeg",
    bio: "A pale Umbaran, Sly Moore served as Palpatines senior administrative aide during his chancellorship, attending to countless affairs of state. Moores enigmatic silence made her the object of considerable curiosity on Coruscant, with rumors abounding about her past and mysterious abilities she supposedly possessed.",
  },
  {
    id: "Tion Medon",
    url: "https://lumiere-a.akamaihd.net/v1/images/databank_tionmedon_01_169_bf78864d.jpeg",
    bio: "Greeting Obi-Wan Kenobi during his search for General Grievous on windswept Utapau was Port Administrator Tion Medon. The tall, gaunt Utapaun initially feigned ignorance about Grievous' whereabouts, but then whispered a warning to Kenobi. Grievous was indeed on the planet, hiding on the tenth level of the sinkhole city with an army of thousands of battle droids.",
  },
];

export default charData;
