
// Ranked Perks with Slot Cost v1

const PERK_LEVELS = [1,3,6,9,12,15,18,21,24,27,30];
const RANK_GATES = [1,10,20];

function getMaxPerkSlots(level){
  return PERK_LEVELS.filter(l => level >= l).length;
}

state.choices ||= {};
state.choices.perks ||= {}; // { id: rank }

function getUsedPerkSlots(){
  return Object.values(state.choices.perks).reduce((a,b)=>a+b,0);
}

function getPerkRank(id){
  return state.choices.perks[id] || 0;
}

function canUpgradePerk(id){
  const rank = getPerkRank(id);
  if(rank >= 3) return false;

  const nextRank = rank + 1;
  if(state.level < RANK_GATES[nextRank-1]) return false;

  const used = getUsedPerkSlots();
  const max = getMaxPerkSlots(state.level);

  if(used >= max) return false;

  return true;
}

function upgradePerk(id){
  if(!canUpgradePerk(id)) return;

  state.choices.perks[id] = getPerkRank(id) + 1;
}

function meetsBaseReq(perk){
  const r = perk.req || {};

  if(r.level && state.level < r.level)
    return {ok:false, why:`Level ${r.level}+`};

  if(r.special){
    for(const [stat,min] of Object.entries(r.special)){
      if(getModifier(stat) < min)
        return {ok:false, why:`${stat} mod ${min}+`};
    }
  }

  if(r.skills){
    for(const [id,min] of Object.entries(r.skills)){
      if(getSkillMod(id) < min)
        return {ok:false, why:`${id} ${min}+`};
    }
  }

  if(r.tags){
    for(const id of r.tags){
      if(!isTagged(id))
        return {ok:false, why:`Tag ${id}`};
    }
  }

  return {ok:true, why:""};
}

function renderPerks(){

  const wrap = document.getElementById('perksList');
  if(!wrap) return;

  const max = getMaxPerkSlots(state.level);
  const used = getUsedPerkSlots();

  wrap.innerHTML = '';

  const h = document.createElement('div');
  h.className = 'muted';
  h.textContent = `Perks: ${used}/${max}`;
  wrap.appendChild(h);

  PERKS.forEach(p => {

    const rank = getPerkRank(p.id);
    const base = meetsBaseReq(p);

    let locked = false;
    let reason = '';

    if(rank === 0 && !base.ok){
      locked = true;
      reason = base.why;
    }

    if(rank > 0 && state.level < RANK_GATES[rank]){
      locked = true;
      reason = `Level ${RANK_GATES[rank]}+`;
    }

    if(!locked && used >= max){
      locked = true;
      reason = 'No slots';
    }

    const card = document.createElement('div');
    card.className = 'perk-card'
      + (rank>0 ? ' selected':'')
      + (locked ? ' locked':'');

    const cur = p.ranks[rank-1] || '—';
    const next = p.ranks[rank] || 'Max';

    card.innerHTML = `
      <div class="perk-left">
        <div class="perk-name">${p.name}</div>
        <div class="muted">${p.category}</div>
        <div class="muted">Rank ${rank}/3</div>
      </div>

      <div class="perk-mid">
        <div><b>Current:</b> ${cur}</div>
        <div><b>Next:</b> ${next}</div>
        <div class="muted">${locked ? 'Requires: '+reason : 'Available'}</div>
      </div>
    `;

    const btn = document.createElement('button');
    btn.className = 'perk-btn';

    if(rank >= 3){
      btn.textContent = 'Max';
      btn.disabled = true;
    }
    else if(locked){
      btn.textContent = 'Locked';
      btn.disabled = true;
    }
    else{
      btn.textContent = rank === 0 ? 'Take' : 'Upgrade';
      btn.onclick = ()=>{
        upgradePerk(p.id);
        renderAll();
      };
    }

    card.appendChild(btn);
    wrap.appendChild(card);
  });
}
