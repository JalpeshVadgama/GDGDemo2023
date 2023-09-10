export interface PersonDict {
  [key: number]: string;
}

export function initializePersonDict(): PersonDict {
  let personDict: PersonDict = {};
  personDict[1]= "Jalpesh";
  personDict[2]= "Vishal";
  personDict[3]= "Kalpesh";
  personDict[4]= "Teerth";
  personDict[5]= "Paresh";
  personDict[6]= "Zalak";
  personDict[7]= "Prachi";
  personDict[8]= "Vrunda";
  personDict[9]= "Reena";
  personDict[10]= "Nidhi";
  return personDict;
}
