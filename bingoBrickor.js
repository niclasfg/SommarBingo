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
    "Text": "Ro ett varv runt sjön/viken/(eller motsvarande) i en roddbåt",
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
    "Text": "Bygg en skateboard",
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
    "Text": "Hitta på en spökvandring",
    "Difficulty": "Svårt",
    "Duration": 3,
    "Categories": "Ute"
  },
  {
    "Name": "Experiment",
    "Text": "Genomför ett vetenskapligt experiment",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Inne"
  },
  {
    "Name": "Drake",
    "Text": "Bygg och flyg en egen drake",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Ute"
  },
  {
    "Name": "Ny sport",
    "Text": "Testa på en ny sport",
    "Difficulty": "Medium",
    "Duration": 2,
    "Categories": "Sport"
  },
  {
    "Name": "Risifrutti",
    "Text": "Gör egen Risifrutti",
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
    "Text": "Sätt ihop en överlevnadslåda och testa den i naturen",
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
    "Text": "Besök en bondgård och träffa djuren",
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
    "Text": "Gå 7777 steg under en dag. (Räkna eller uppskatta)",
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
    "Text": "Sätt ihop en kör som över och genomför en konsert om en vecka.",
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
  }
 ]