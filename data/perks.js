
export const PERKS = [

{
  id: "gunslinger",
  name: "Gunslinger",
  category: "Combat",
  brief: "+2 Guns with pistols. Pistols cost -1 AP (min 1).",
  req: {
    level: 3,
    skills: { guns: 3 }
  }
},

{
  id: "commando",
  name: "Commando",
  category: "Combat",
  brief: "+2 Guns with rifles/automatics. Ignore 1 DR.",
  req: {
    level: 3,
    skills: { guns: 3 }
  }
},

{
  id: "shotgun_surgeon",
  name: "Shotgun Surgeon",
  category: "Combat",
  brief: "Shotguns ignore 2 DR.",
  req: {
    level: 6,
    skills: { guns: 4 }
  }
},

{
  id: "sniper",
  name: "Sniper",
  category: "Combat",
  brief: "Ignore half-cover penalties at Near/Far.",
  req: {
    level: 6,
    special: { PER: 2 }
  }
},

{
  id: "ninja",
  name: "Ninja",
  category: "Stealth",
  brief: "+2 Sneak. +1d6 damage from stealth melee.",
  req: {
    level: 6,
    tags: ["sneak"]
  }
},

{
  id: "silent_running",
  name: "Silent Running",
  category: "Stealth",
  brief: "No Sneak penalty from movement or pistols.",
  req: {
    level: 3,
    skills: { sneak: 3 }
  }
},

{
  id: "thief",
  name: "Thief",
  category: "Utility",
  brief: "+1 Sneak/Lockpick. +2 steal/pickpocket.",
  req: {
    level: 3,
    skills: { lockpick: 3 }
  }
},

{
  id: "action_boy",
  name: "Action Boy",
  category: "Mobility",
  brief: "Once/encounter, regain all AP.",
  req: {
    level: 9,
    special: { AGI: 2 }
  }
},

{
  id: "slayer",
  name: "Slayer",
  category: "Combat",
  brief: "+1 melee damage. +1 AGI to initiative.",
  req: {
    level: 9,
    special: { STR: 2 }
  }
},

{
  id: "laser_commander",
  name: "Laser Commander",
  category: "Combat",
  brief: "+1 hit and damage with Energy Weapons.",
  req: {
    level: 6,
    skills: { energy: 4 }
  }
},

{
  id: "demolition_expert",
  name: "Demolition Expert",
  category: "Combat",
  brief: "+1 damage die on explosive crits.",
  req: {
    level: 6,
    skills: { explosives: 4 }
  }
}

];
