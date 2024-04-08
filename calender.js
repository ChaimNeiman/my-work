import { HDate, Location, Zmanim, HebrewDateEvent } from '@hebcal/core';
import Hebcal from "hebcal";

let arr = []; 
const jewishWeekDays = {
  0: `זונטאג'`,
  1: `מאנטאג'`,
  2: `דינסטאג'`,
  3: `מיטוואך'`,
  4: `דאנערשטאג'`,
  5: `פרייטאג'`,
  6: "שבת קודש",
};

for (let i = 0; i < 7; i++) {
  const today = new Date();
  const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
  const zmanim = new Zmanim(Location.lookup('New York'), currentDay);
  const weekDay = new HDate(currentDay).getDay(); // Corrected to get the current day
  const hebrewDate = new HDate(currentDay);
  const ev = new HebrewDateEvent(hebrewDate).render('he');
  const shema = zmanim.sofZmanShma().toLocaleTimeString();
  const tfilla = zmanim.sofZmanTfilla().toLocaleTimeString();
  const sedra = Hebcal.HDate(currentDay).getSedra('h');

  arr.push({
    weekDay: jewishWeekDays[i], 
    sedra: sedra,
    shema: shema,
    tfilla: tfilla
  });
}

console.table(arr);


