const disciplines = [
 {roman:"I",title:"The Philosophy of Power",desc:"Examine what power is, where it comes from and why people accept authority.",topics:["The nature of power","Authority and legitimacy","Machiavelli and political philosophy","Robert Greene's 48 Laws","Power dynamics"]},
 {roman:"II",title:"Human Psychology & Influence",desc:"Understand motivation, persuasion, trust and the ways people affect one another.",topics:["Human behaviour","Persuasion and ethical influence","Motivation","Negotiation","Recognising manipulation","Building trust"]},
 {roman:"III",title:"Leadership & Governance",desc:"Turn authority into responsible, effective organisational leadership.",topics:["Executive leadership","Organisational hierarchy","Delegation","Managing colleagues","Meetings and decisions","Accountability"]},
 {roman:"IV",title:"Strategy & Intelligence",desc:"Develop foresight, sound judgement and the ability to act under pressure.",topics:["Strategic planning","Risk assessment","Competitive thinking","Crisis management","Long-term objectives","Information management"]},
 {roman:"V",title:"Diplomacy & Relationships",desc:"Navigate disagreements, alliances and professional relationships with tact.",topics:["Professional relationships","Conflict resolution","Negotiation","Public relations","Reputation","Institutional alliances"]},
 {roman:"VI",title:"Personal Development",desc:"Strengthen the habits and capabilities that make leadership sustainable.",topics:["Discipline","Composure","Public speaking","Confidence","Self-awareness","Intellectual development"]}
];
const lessons = [
 {id:"001",discipline:"I · The Philosophy of Power",title:"The Nature of Power",summary:"A first examination of power: what it is, how it is acquired and why it is not identical to authority.",time:"Foundational study",body:[
 ["A working definition","Power is the capacity to shape decisions, influence behaviour or affect outcomes. It can arise from formal authority, expertise, trust, access to information, relationships or the ability to organise people and resources."],
 ["Power, authority and influence","Power describes capacity. Authority is a recognised right or permission to make decisions. Influence is the ability to affect another person's thinking or conduct. A person may have influence without a title, or a title without much influence."],
 ["Legitimacy and responsibility","Durable leadership depends on more than getting one's way. People are more likely to accept authority when decisions are understandable, procedures are fair and leaders accept responsibility for consequences."],
 ["Questions for discussion","Where does your authority come from? Which people in your organisation have influence without holding senior titles? What would make your colleagues regard a decision as legitimate?"]
 ]},
 {id:"002",discipline:"I · The Philosophy of Power",title:"The Foundations of Legitimate Authority",summary:"Explore why people accept leadership and what makes authority credible.",time:"Foundational study",body:[
 ["Formal authority","A role can grant defined responsibilities, but a title alone does not guarantee trust or competence."],
 ["Earned authority","Consistency, fairness, knowledge and keeping commitments build credibility over time."],
 ["Limits","Authority should be bounded by the organisation's rules, the rights of its members and accountability for decisions."],
 ["Discussion","Think of a leader whose authority you respect. What behaviour earned that respect?"]
 ]},
 {id:"003",discipline:"II · Human Psychology & Influence",title:"Motivation and Human Behaviour",summary:"Consider why people contribute, what discourages them and how leaders can support motivation.",time:"Foundational study",body:[
 ["Different motivations","People may be motivated by purpose, belonging, mastery, recognition, autonomy or practical rewards. The same incentive will not work equally well for everyone."],
 ["Designing good conditions","Clear expectations, achievable tasks, useful feedback and a sense of contribution often matter more than pressure."],
 ["Discussion","What makes people volunteer their time for an organisation? Which motivations are present in your teams?"]
 ]},
 {id:"004",discipline:"III · Leadership & Governance",title:"The Difference Between Friendship and Office",summary:"Learn to maintain warm relationships while setting clear professional expectations.",time:"Practical leadership",body:[
 ["Two relationships can coexist","Colleagues may also be friends. Friendship does not remove agreed responsibilities, and professional boundaries need not make a relationship cold."],
 ["Set expectations plainly","Explain the task, deadline, standard and available support. Address missed commitments privately and consistently."],
 ["Discussion","How should a chairperson respond when a close friend repeatedly disrupts meetings?"]
 ]},
 {id:"005",discipline:"IV · Strategy & Intelligence",title:"Thinking Beyond the Immediate Decision",summary:"Introduce long-term thinking, consequences and contingency planning.",time:"Strategic study",body:[
 ["Define the objective","A decision is easier to evaluate when the intended outcome is clear."],
 ["Consider consequences","Ask what may happen next, who will be affected and what unintended effects could follow."],
 ["Prepare alternatives","Identify a fallback plan and the conditions that would make you change course."],
 ["Discussion","Choose a current organisational challenge and map its likely consequences over the next month."]
 ]}
];
const cases = [
 {title:"The distracted deputy",area:"Leadership · Governance",scenario:"Your deputy is a close friend and a capable organiser. During meetings, however, he jokes through agenda items, misses agreed deadlines and assumes that your friendship means instructions are optional. Other members have begun to disengage.",questions:["What is the actual organisational problem?","How would you address it privately?","What expectations should be written down?","What would you do if the pattern continued?"]},
 {title:"The overcommitted chair",area:"Strategy · Delegation",scenario:"A chairperson insists on approving every announcement, event and article. Work slows down, volunteers lose initiative and the chairperson becomes exhausted. The organisation is still functioning, but only because one person carries too much.",questions:["Which decisions genuinely require the chairperson?","What can be delegated, and with what safeguards?","How could progress be reviewed without micromanagement?"]},
 {title:"A disagreement in public",area:"Diplomacy · Reputation",scenario:"Two committee members disagree about an event. Their argument spills into a public group chat, and other members begin taking sides. The event is approaching and a decision is needed.",questions:["What should be handled privately?","What information is needed before deciding?","How can the group reach a fair decision and move forward?"]}
];
const books = [
 {title:"The 48 Laws of Power",author:"Robert Greene",note:"A study of power dynamics, reputation and influence. Read critically; not every law is ethical or suitable for every situation."},
 {title:"The Art of War",author:"Sun Tzu",note:"A classical text on preparation, strategy, positioning and the costs of conflict."},
 {title:"The Prince",author:"Niccolò Machiavelli",note:"A political work examining rule, reputation, stability and the realities of political authority."},
 {title:"Meditations",author:"Marcus Aurelius",note:"Reflections on self-command, duty, judgement and conduct."},
 {title:"Politics",author:"Aristotle",note:"A foundational work on political communities, constitutions and civic life."},
 {title:"On Duties",author:"Cicero",note:"A classical discussion of moral obligation, public service and responsible conduct."}
];
const $ = s => document.querySelector(s);
const storeKey="artLeadershipProgress";
function getProgress(){try{return JSON.parse(localStorage.getItem(storeKey)||'{"completed":[],"notes":{}}')}catch{return {completed:[],notes:{}}}}
function saveProgress(p){localStorage.setItem(storeKey,JSON.stringify(p))}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function setPage(page){document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));render(page);window.scrollTo(0,0)}
function render(page){
 const c=$("#content"),p=getProgress(); let html="";
 const intro=(title,desc)=>`<div class="page-intro"><p class="eyebrow">THE ART OF LEADERSHIP</p><h2>${title}</h2><p>${desc}</p></div>`;
 if(page==="dashboard"){
  $("#page-kicker").textContent="YOUR STUDY DESK";
  const done=p.completed.length, pct=Math.round(done/lessons.length*100);
  html=`<section class="welcome"><p class="eyebrow">A CONTINUOUS STUDY OF LEADERSHIP</p><h1>Power is understood.<br>Leadership is practised.</h1><p>A private programme for the considered study of influence, strategy, governance and the responsibilities of leadership.</p><div class="welcome-meta">PRIVATE STUDY · ESTABLISHED 2026 · NO FIXED END DATE</div></section>
  <div class="section-head"><div><h2>Your studies</h2><p>A continuing programme, developed one subject at a time.</p></div><button class="text-link" data-go="curriculum">VIEW CURRICULUM →</button></div>
  <div class="grid"><div class="card"><div class="number">${disciplines.length}</div><h3>Fields of study</h3><p>Six continuing disciplines.</p></div><div class="card"><div class="number">${lessons.length}</div><h3>Available lessons</h3><p>Foundational material to begin with.</p></div><div class="card"><div class="number">${done}/${lessons.length}</div><h3>Lessons completed</h3><p>${pct}% of the current lesson collection.</p></div></div>
  <div class="two-col"><section class="panel"><h3>Continue your studies</h3>${lessons.slice(0,3).map(l=>`<div class="list-row"><span><strong>${l.id}</strong> &nbsp; ${l.title}</span><span class="tag">${p.completed.includes(l.id)?"Completed":"Available"}</span></div>`).join("")}<button class="text-link" data-go="lessons">ALL LESSONS →</button></section><section class="panel"><h3>Principle of the programme</h3><p class="muted">The purpose of studying power is not to dominate others. It is to understand how decisions are made, how trust is earned and how authority can be exercised responsibly.</p></section></div>`;
 }else if(page==="curriculum"){
  $("#page-kicker").textContent="FIELDS OF STUDY";
  html=intro("The curriculum","An open syllabus. Subjects may be revisited, expanded and supplemented as your understanding develops.")+`<div class="discipline-list">${disciplines.map(d=>`<article class="discipline"><div class="roman">${d.roman}</div><h3>${d.title}</h3><p class="muted">${d.desc}</p><ul>${d.topics.map(t=>`<li>${t}</li>`).join("")}</ul></article>`).join("")}</div>`;
 }else if(page==="lessons"){
  $("#page-kicker").textContent="TEACHING & STUDY";
  html=intro("Lessons","Read the material, discuss the questions together and mark a lesson complete when you have genuinely studied it.")+lessons.map(l=>`<article class="lesson"><div class="lesson-top"><span class="lesson-meta">LESSON ${l.id} · ${l.time}</span><span class="tag">${p.completed.includes(l.id)?"Completed":"Not yet completed"}</span></div><h3>${l.title}</h3><p>${l.discipline} · ${l.summary}</p><button data-expand="${l.id}">Open lesson →</button><div id="detail-${l.id}" class="lesson-detail hidden">${l.body.map(([h,t])=>`<h4>${h}</h4><p>${t}</p>`).join("")}<button data-complete="${l.id}">${p.completed.includes(l.id)?"Mark as not completed":"Mark lesson complete"}</button></div></article>`).join("");
 }else if(page==="case-studies"){
  $("#page-kicker").textContent="APPLIED JUDGEMENT";
  html=intro("Case studies","Consider the facts, identify competing interests and explain what you would do. There is rarely only one defensible answer.")+cases.map((x,i)=>`<article class="case-card"><span class="lesson-meta">CASE ${String(i+1).padStart(2,"0")} · ${x.area}</span><h3>${x.title}</h3><p>${x.scenario}</p><div class="prompt"><strong>Questions for discussion</strong><ol>${x.questions.map(q=>`<li>${q}</li>`).join("")}</ol></div><label for="case-${i}">Your analysis</label><textarea id="case-${i}" data-note="case-${i}" placeholder="Record your reasoning and proposed response...">${esc(p.notes["case-"+i]||"")}</textarea><p class="save-note">Your response is saved in this browser when you leave the field.</p></article>`).join("");
 }else if(page==="assignments"){
  $("#page-kicker").textContent="INDEPENDENT WORK";
  html=intro("Assignments","Short exercises designed to connect the ideas in the programme with the organisations you lead.")+`<article class="assignment-card"><span class="lesson-meta">FOUNDATION · 01</span><h3>Map the sources of authority</h3><p>Identify three sources of authority or influence in your organisation. Include at least one person whose influence does not come from a senior title. Explain why others listen to them.</p><label for="assignment-1">Your response</label><textarea id="assignment-1" data-note="assignment-1" placeholder="Write your observations here...">${esc(p.notes["assignment-1"]||"")}</textarea><p class="save-note">Saved locally in this browser.</p></article><article class="assignment-card"><span class="lesson-meta">FOUNDATION · 02</span><h3>Write a leadership principle</h3><p>Write a short statement describing what people should be able to expect from you as a leader. Include how you will respond when you make a mistake.</p><label for="assignment-2">Your response</label><textarea id="assignment-2" data-note="assignment-2" placeholder="A principle I intend to follow...">${esc(p.notes["assignment-2"]||"")}</textarea><p class="save-note">Saved locally in this browser.</p></article>`;
 }else if(page==="library"){
  $("#page-kicker").textContent="READING ROOM";
  html=intro("The library","A starting collection of classical and modern works. Read them as arguments to examine, not instructions to follow unquestioningly.")+`<div class="book-list">${books.map(b=>`<article class="book"><div class="book-mark">A</div><h3>${b.title}</h3><div class="lesson-meta">${b.author}</div><p>${b.note}</p></article>`).join("")}</div>`;
 }else if(page==="register"){
  $("#page-kicker").textContent="RECORD OF STUDY";
  html=intro("The study register","A record of your progress on this device. The programme has no final examination and no graduation date.")+`<div class="panel"><h3>Current lesson record</h3><p class="muted">${p.completed.length} of ${lessons.length} currently listed lessons marked complete.</p><div class="progress-track" style="width:100%"><div class="progress-fill" style="width:${p.completed.length/lessons.length*100}%"></div></div></div><br>${lessons.map(l=>`<div class="register-row"><div><strong>${l.id} · ${l.title}</strong><small>${l.discipline}</small></div><span class="tag">${p.completed.includes(l.id)?"Completed":"Pending"}</span></div>`).join("")}<p class="save-note">Progress and notes are stored in this browser only. They do not synchronise between devices or users.</p>`;
 }
 c.innerHTML=html;
 c.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.go)));
 c.querySelectorAll("[data-expand]").forEach(b=>b.addEventListener("click",()=>{$("#detail-"+b.dataset.expand).classList.toggle("hidden");b.textContent=$("#detail-"+b.dataset.expand).classList.contains("hidden")?"Open lesson →":"Close lesson ↑"}));
 c.querySelectorAll("[data-complete]").forEach(b=>b.addEventListener("click",()=>{const id=b.dataset.complete;const q=getProgress();q.completed=q.completed.includes(id)?q.completed.filter(x=>x!==id):[...q.completed,id];saveProgress(q);render(page)}));
 c.querySelectorAll("[data-note]").forEach(t=>t.addEventListener("change",()=>{const q=getProgress();q.notes[t.dataset.note]=t.value;saveProgress(q)}));
}
function enter(){ $("#gate").classList.add("hidden");$("#app").classList.remove("hidden");$("#today").textContent=new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"}).format(new Date());setPage("dashboard")}
$("#login-form").addEventListener("submit",e=>{e.preventDefault();const entered=$("#password").value;const expected=window.SITE_CONFIG?.sharedPassphrase||"";if(expected==="CHANGE-THIS-PHRASE"){ $("#login-error").textContent="The site owner must first set a shared phrase in config.js.";return}if(entered===expected){sessionStorage.setItem("al-access","yes");enter()}else{$("#login-error").textContent="That access phrase was not recognised. Please try again."}});
if(sessionStorage.getItem("al-access")==="yes")enter();
$("#logout").addEventListener("click",()=>{sessionStorage.removeItem("al-access");$("#app").classList.add("hidden");$("#gate").classList.remove("hidden");$("#password").value=""});
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.page)));
