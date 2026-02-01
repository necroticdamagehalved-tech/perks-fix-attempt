
export const PERKS = [

{
  id:"gunslinger",
  name:"Gunslinger",
  category:"Combat",
  ranks:[
    "+2 Guns, Pistols -1 AP",
    "+3 Guns, Pistols -1 AP",
    "+4 Guns, Pistols -2 AP"
  ],
  req:{
    level:3,
    skills:{ guns:3 }
  }
},

{
  id:"ninja",
  name:"Ninja",
  category:"Stealth",
  ranks:[
    "+2 Sneak, +1d6 melee from stealth",
    "+3 Sneak, +2d6 melee from stealth",
    "+4 Sneak, auto-crit from stealth"
  ],
  req:{
    level:6,
    tags:["sneak"]
  }
}

];
