// List from google sheet and transformed usign https://www.convertcsv.com/csv-to-json.htm.
const bingoCards =
[
  {
    "Name": "Plocka Potatis",
    "Text": "Åka till ett potatisland och plocka 1 kg potatis.",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Åka"
  },
  {
    "Name": "Fiska",
    "Text": "Fiska en fisk med ett fiskespö.",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Vatten"
  },
  {
    "Name": "Trädkoja",
    "Text": "Bygg en trädkoja.",
    "Difficulty": "Svårt",
    "Duration": 8,
    "Categories": "Bygga"
  },
  {
    "Name": "Läs en bok",
    "Text": "Läs en hel bok med över 50 sidor.",
    "Difficulty": "Medium",
    "Duration": 8,
    "Categories": "Inne"
  },
  {
    "Name": "Viken runt",
    "Text": "Ro ett varv runt sjön/viken/(eller motsvarande) i en roddbåt.",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Vatten"
  },
  {
    "Name": "Tårta",
    "Text": "Baka en valfri tårta som räcker till många.",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Mat"
  },
  {
    "Name": "Saft",
    "Text": "Gör minst en liter saft av något bär eller frukt.",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Mat"
  },
  {
    "Name": "Vernissage",
    "Text": "Samla eller skapa minst 10 konstverk och genomför en vernissage.",
    "Difficulty": "Svårt",
    "Duration": 3,
    "Categories": "Inne"
  },
  {
    "Name": "Skateboard",
    "Text": "Bygg en skateboard.",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Bygga"
  },
  {
    "Name": "Bar himmel",
    "Text": "Sov utomhus en hel natt.",
    "Difficulty": "Medium",
    "Duration": 8,
    "Categories": "Ute"
  },
  {
    "Name": "Fota ett djur",
    "Text": "Fotografera ett levande vilt däggdjur.",
    "Difficulty": "Medium",
    "Duration": 4,
    "Categories": "Ute"
  },
  {
    "Name": "Spökvandring",
    "Text": "Hitta på en spökvandring.",
    "Difficulty": "Svårt",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Experiment",
    "Text": "Genomför ett vetenskapligt experiment.",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Drake",
    "Text": "Bygg och flyg en egen drake.",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Ny sport",
    "Text": "Testa på en ny sport.",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Sport"
  },
  {
    "Name": "Risifrutti",
    "Text": "Gör egen Risifrutti.",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Mat"
  },
  {
    "Name": "Picnic",
    "Text": "Gör i ording och bjud in till en picnic.",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Mat"
  },
  {
    "Name": "Överlevnadslåda",
    "Text": "Sätt ihop en överlevnadslåda och testa den i naturen.",
    "Difficulty": "Svårt",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Modellbåt",
    "Text": "Bygg en liten båt i skala ca 1:300.",
    "Difficulty": "Svårt",
    "Duration": 6,
    "Categories": "Bygga"
  },
  {
    "Name": "Klockan 4",
    "Text": "Gå upp klockan fyra på morgonen och var vaken före alla andra.",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Dagbok",
    "Text": "Skriv dagbok i en hel vecka.",
    "Difficulty": "Medium",
    "Duration": 7,
    "Categories": "Inne"
  },
  {
    "Name": "Eget spel",
    "Text": "Skapa ett eget brädspel eller datorpel.",
    "Difficulty": "Svårt",
    "Duration": 6,
    "Categories": "Inne"
  },
  {
    "Name": "Vykort",
    "Text": "Skicka ett vykort till någon.",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Frisyr",
    "Text": "Gör en häftig frisyr på dig själv eller någon annan.",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Bondgård",
    "Text": "Besök en bondgård och träffa djuren.",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Åka"
  },
  {
    "Name": "Blombukett",
    "Text": "Gör en stor härlig blombukett.",
    "Difficulty": "Lätt",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Framtidsbrev",
    "Text": "Skriv ett brev till dig själv som du inte får öppna på en vecka.",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Havsbotten",
    "Text": "Undersök havsbotten och dokumentera din fynd.",
    "Difficulty": "Svårt",
    "Duration": 2,
    "Categories": "Vatten"
  },
  {
    "Name": "Musiksmak",
    "Text": "Prova på en helt ny musiksmak under en dag.",
    "Difficulty": "Medium",
    "Duration": 4,
    "Categories": "Inne"
  },
  {
    "Name": "7777 steg",
    "Text": "Gå 7777 steg under en dag. (Räkna eller uppskatta).",
    "Difficulty": "Medium",
    "Duration": 4,
    "Categories": "Ute"
  },
  {
    "Name": "Fågelskåda",
    "Text": "Se 8 olika fåglar under en och samma dag.",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Ute"
  },
  {
    "Name": "Pussel",
    "Text": "Lägg ett pussel med fler än 500 bitar.",
    "Difficulty": "Medium",
    "Duration": 6,
    "Categories": "Inne"
  },
  {
    "Name": "Yoga",
    "Text": "Gör yoga i en totalt en timme.",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Sport"
  },
  {
    "Name": "Cykla ",
    "Text": "Cykla en mil under en dag.",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Sport"
  },
  {
    "Name": "Huvudstäder",
    "Text": "Lär dig alla huvudstäder i världen.",
    "Difficulty": "Omöjligt",
    "Duration": 6,
    "Categories": "Inne"
  },
  {
    "Name": "Fotoalbum",
    "Text": "Titta igenom gamla fotoalbum med andra.",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Quiz",
    "Text": "Gör Quiz och testa vem som vet mest om olika saker.",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Kör",
    "Text": "Sätt ihop en kör som övar och genomför en konsert om en vecka.",
    "Difficulty": "Svårt",
    "Duration": 6,
    "Categories": "Inne"
  },
  {
    "Name": "Bokashi",
    "Text": "Lär dig om komposteringsmetoden Bokashi.",
    "Difficulty": "Svårt",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Slips",
    "Text": "Lär dig knyta en slips (på ett nytt sätt om du redan kan).",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Skaka hand",
    "Text": "Öva på att skaka hand tills du är riktig bra på det.",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Pochera Ägg",
    "Text": "Pochera ägg till de som vill ha.",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Mat"
  },
  {
    "Name": "Novell",
    "Text": "Skriv en novell. ",
    "Difficulty": "Medium",
    "Duration": 6,
    "Categories": "Inne"
  },
  {
    "Name": "Gosedjur ",
    "Text": "Sy ditt eget gosedjur. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Inne"
  },
  {
    "Name": "Jonglera ",
    "Text": "Lär dig jonglera med tre bollar. ",
    "Difficulty": "Svårt",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Dyka",
    "Text": "Lär dig dyka. (med volt om du redan kan) ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Vatten"
  },
  {
    "Name": "Klädesplagg ",
    "Text": "Hitta på ett nytt sorts klädesplagg och prova det en dag. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Skattkarta",
    "Text": "Gör en skattkarta och anordna en skattjakt. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Teknikfri dag",
    "Text": "Klara dig en hel dag (8 timmar) utan teknik. ",
    "Difficulty": "Svårt",
    "Duration": 8,
    "Categories": "Ute"
  },
  {
    "Name": "Skördefest",
    "Text": "Anordna en skördefest med grönsaker av olika slag. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Ute"
  },
  {
    "Name": "Cykelrally",
    "Text": "Ordna ett race med cykel med 4 eller fler deltagare. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Sport"
  },
  {
    "Name": "Antikvariat ",
    "Text": "Besök ett antikvariat och hitta en ny intressant bok. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Åka"
  },
  {
    "Name": "Museum",
    "Text": "Gå på museum och lär dig nånting nytt. ",
    "Difficulty": "Lätt",
    "Duration": 4,
    "Categories": "Åka"
  },
  {
    "Name": "Gräva ",
    "Text": "Hitta nånting intressant som var nedgrävt i marken. ",
    "Difficulty": "Medium",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Trolleri",
    "Text": "Lär dig ett häftigt trolleritrick och trolla för andra. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Grannfika",
    "Text": "Fika med en granne. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Åka"
  },
  {
    "Name": "Kalligrafi ",
    "Text": "Lär dig skriva ditt namn med kalligrafi. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Origami",
    "Text": "Vik 100 origamifigurer. ",
    "Difficulty": "Svårt",
    "Duration": 6,
    "Categories": "Inne"
  },
  {
    "Name": "Nattpromenad",
    "Text": "Gå en promenad mellan klockan 12 och 01.",
    "Difficulty": "Svårt",
    "Duration": 1,
    "Categories": "Ute"
  },
  {
    "Name": "Putsa skor",
    "Text": "Lär dig putsa skor och putsa 5 par. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne "
  },
  {
    "Name": "Gunga",
    "Text": "Gör en ny gunga och testa den. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Bygga"
  },
  {
    "Name": "Bytet",
    "Text": "Byt till dig nånting stort från nånting mindre, fem gånger i följd. ",
    "Difficulty": "Medium",
    "Duration": 3,
    "Categories": "Ute "
  },
  {
    "Name": "Bröd",
    "Text": "Lär dig baka ett bröd och baka två. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Mat"
  },
  {
    "Name": "Vals",
    "Text": "Lär dig dansa vals. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Kombucha",
    "Text": "Gör din egen kombucha. ",
    "Difficulty": "Svårt",
    "Duration": 6,
    "Categories": "Mat"
  },
  {
    "Name": "Tvål",
    "Text": "Gör din egen tvål. ",
    "Difficulty": "Medium",
    "Duration": 3,
    "Categories": "Inne"
  },
  {
    "Name": "Pasta",
    "Text": "Gör egen pasta till middagen. ",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Mat"
  },
  {
    "Name": "Korsord",
    "Text": "Lös ett korsord. ",
    "Difficulty": "Svårt",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Karaoke",
    "Text": "Ordna en karaoke-kväll. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Inne"
  },
  {
    "Name": "Modellflygplan",
    "Text": "Bygg ett modellflygplan. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Inne"
  },
  {
    "Name": "Moonwalk ",
    "Text": "Gör en riktigt snygg moonwalk på film. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Viner",
    "Text": "Lär dig om tio olika sorters vin. ",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Mat"
  },
  {
    "Name": "Soppa",
    "Text": "Laga en god soppa. ",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Mat"
  },
  {
    "Name": "Husdjuret sten",
    "Text": "Ha en sten som husdjur en hel dag. (Mata, promenera och ta hand om) ",
    "Difficulty": "Svårt",
    "Duration": 6,
    "Categories": "Ute"
  },
  {
    "Name": "Loppis",
    "Text": "Gå på loppis. ",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Åka"
  },
  {
    "Name": "Rita djur",
    "Text": "Lär dig rita djur. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Inne"
  },
  {
    "Name": "Fort",
    "Text": "Bygg ett fort. ",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Bygga"
  },
  {
    "Name": "Måla naglar",
    "Text": "Måla dina eller nån annans naglar i roliga färger. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Släktträd ",
    "Text": "Gör ett släktträd med fyra generationer. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Hemsida ",
    "Text": "Gör din egen hemsida. ",
    "Difficulty": "Omöjligt",
    "Duration": 25,
    "Categories": "Inne"
  },
  {
    "Name": "Youtube",
    "Text": "Gör en YouTube video. ",
    "Difficulty": "Omöjligt",
    "Duration": 20,
    "Categories": "Inne"
  },
  {
    "Name": "Korthus",
    "Text": "Bygg ett korthus med fem våningar. ",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Bilbana",
    "Text": "Bygg en bilbana och racea bilar i den. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Bygga"
  },
  {
    "Name": "Maneter",
    "Text": "Gör maneter av papper och tyg. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Bygga"
  },
  {
    "Name": "Pappersflygplan",
    "Text": "Ordna en tävling i att flyga pappersflygplan. ",
    "Difficulty": "Medium",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Ansiktsmålning",
    "Text": "Gör en häftig ansiktsmålning på dig själv eller nån annan som vill. ",
    "Difficulty": "Medium",
    "Duration": 3,
    "Categories": "Inne"
  },
  {
    "Name": "Måla stenar",
    "Text": "Samla stenar och måla dem roligt. ",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Superhjältedräkt ",
    "Text": "Gör din egen superhjältedräkt. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Segla",
    "Text": "Segla en båt. ",
    "Difficulty": "Medium",
    "Duration": 3,
    "Categories": "Vatten"
  },
  {
    "Name": "Pricka rätt",
    "Text": "Kasta saker i en hink från 15 meter, tills du träffar 7 gånger i rad. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Kramar",
    "Text": "Ge bort 50 stycken kramar till andra. ",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Ute"
  },
  {
    "Name": "Lådbil",
    "Text": "Bygg en lådbil och testa i en backe. ",
    "Difficulty": "Svårt",
    "Duration": 5,
    "Categories": "Bygga"
  },
  {
    "Name": "Fågelbad",
    "Text": "Bygg ett fågelbad och låt en fågel bada i det. ",
    "Difficulty": "Svårt",
    "Duration": 4,
    "Categories": "Bygga"
  },
  {
    "Name": "Milkshake",
    "Text": "Bjud alla på milkshake ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Mat"
  },
  {
    "Name": "Klädbytardag",
    "Text": "Ha en klädbytardag då alla som vill kan byta kläder med varandra. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Traktor",
    "Text": "Hitta en traktor att sitta i. ",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Åka"
  },
  {
    "Name": "Fördrink",
    "Text": "Bjud in till en fördrink. ",
    "Difficulty": "Medium",
    "Duration": 1,
    "Categories": "Mat"
  },
  {
    "Name": "Soluppgång",
    "Text": "Ta en bild på soluppgången. ",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Ute"
  },
  {
    "Name": "Smeknamn",
    "Text": "Dela ut roliga smeknamn och använd dem hela dagen. ",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Utländsk film ",
    "Text": "Titta på en film på ett språk du inte kan utan text. ",
    "Difficulty": "Lätt",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Sufflé",
    "Text": "Baka sufflé. ",
    "Difficulty": "Svårt",
    "Duration": 2,
    "Categories": "Mat"
  },
  {
    "Name": "Skratta ",
    "Text": "Skratta i 5 minuter åt inget alls. ",
    "Difficulty": "Lätt",
    "Duration": 1,
    "Categories": "Inne"
  },
  {
    "Name": "Överraskningsfest",
    "Text": "Få alla andra att ordna en överaskningsfest för dig.",
    "Difficulty": "Omöjligt",
    "Duration": 4,
    "Categories": "Inne"
  }
 ]