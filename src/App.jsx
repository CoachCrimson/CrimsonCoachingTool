import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useCallback } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCSus2pwRmGWHDabzpujRKGwIKQdIPAypA",
  authDomain: "crimson-coaching-tool.firebaseapp.com",
  projectId: "crimson-coaching-tool",
  storageBucket: "crimson-coaching-tool.firebasestorage.app",
  messagingSenderId: "583258765326",
  appId: "1:583258765326:web:dd944169f100764da3245f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.storage = {
  async get(key) {
    try {
      const snap = await getDoc(doc(db, "crimson", key));
      if (snap.exists()) return { key, value: snap.data().value };
      return null;
    } catch (e) { console.error("get", e); return null; }
  },
  async set(key, value) {
    try {
      await setDoc(doc(db, "crimson", key), { value, updated: Date.now() });
      return { key, value };
    } catch (e) { console.error("set", e); return null; }
  },
  async delete(key) {
    try {
      await deleteDoc(doc(db, "crimson", key));
      return { key, deleted: true };
    } catch (e) { console.error("del", e); return null; }
  },
  async list(prefix) {
    try {
      const snap = await getDocs(collection(db, "crimson"));
      const keys = snap.docs.map(d => d.id).filter(k => !prefix || k.startsWith(prefix));
      return { keys };
    } catch (e) { console.error("list", e); return { keys: [] }; }
  }
};


const VER="3.0.0";const DD="https://ddragon.leagueoflegends.com";const ROLES=["Top","Jungle","Mid","ADC","Support"];const ALL_ROLES=[...ROLES,"Sub"];const TIERS=["Z","S","A","B","C","Never Play"];const TC={Z:"#ef4444",S:"#f97316",A:"#eab308",B:"#3b82f6",C:"#22c55e","Never Play":"#6b7280"};const TB={Z:"#ef444418",S:"#f9731618",A:"#eab30818",B:"#3b82f618",C:"#22c55e18","Never Play":"#6b728018"};const TGC={best:"#ef4444",great:"#f97316",decent:"#eab308",questionable:"#22c55e",stretch:"#3b82f6"};const PATCH="26.7";const DRAFT_LABELS=["Scrim","Game","Practice","Theory Craft"];

// Fuzzy search: "fdd" matches "Fiddlesticks", "kai" matches "Kai'Sa"
function fuzzy(query,name){if(!query)return true;const q=query.toLowerCase();const n=name.toLowerCase();if(n.includes(q))return true;let qi=0;for(let i=0;i<n.length&&qi<q.length;i++){if(n[i]===q[qi])qi++}return qi===q.length}
const RANK_LIST=["Iron","Bronze","Silver","Gold","Platinum","Emerald","Diamond","Master","Grandmaster","Challenger"];
const RANK_DIVS=["IV","III","II","I"];
const RANK_CLR={Iron:"#8b6914",Bronze:"#8b5e3c",Silver:"#7c8b9a",Gold:"#c89b3c",Platinum:"#25c49a",Emerald:"#149b6a",Diamond:"#576cce",Master:"#9d48e0",Grandmaster:"#ef4444",Challenger:"#f0c060"};

// Riot Official Role Icons (SVG paths traced from League client)
const RI={Top:"⚔️",Jungle:"🌿",Mid:"🔮",ADC:"🏹",Support:"🛡️",Sub:"⭐"};
function RIcon({role,size=16}){return<span style={{fontSize:size,lineHeight:1,verticalAlign:"middle"}}>{RI[role]||"⭐"}</span>}

// Guide text: **bold**, [text](url) links, ![alt](url) images, [IMG:id] placeholders, ## headers, • bullets
function GuideText({text,images}){if(!text)return null;const imgMap={};(images||[]).forEach(i=>{imgMap[i.id]=i.data});return<div style={{lineHeight:1.9,color:"#ccc",fontSize:14}}>{text.split("\n").map((line,i)=>{
  if(line.startsWith("═")||line.startsWith("─"))return<hr key={i} style={{border:"none",borderTop:"1px solid #1e1e32",margin:"10px 0"}}/>;
  // [IMG:id] placeholder — lookup from images array
  const imgPlaceholder=line.match(/^\[IMG:([^\]]+)\]$/);
  if(imgPlaceholder){const src=imgMap[imgPlaceholder[1]];return src?<div key={i} style={{margin:"12px 0"}}><img src={src} style={{maxWidth:"100%",borderRadius:8,border:"1px solid #1e1e32"}}/></div>:<div key={i} style={{color:"#555",fontSize:11}}>[Image loading...]</div>}
  // ![alt](src) inline image
  const imgMatch=line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
  if(imgMatch)return<div key={i} style={{margin:"12px 0"}}><img src={imgMatch[2]} alt={imgMatch[1]} style={{maxWidth:"100%",borderRadius:8,border:"1px solid #1e1e32"}} onError={e=>e.target.style.display="none"}/>{imgMatch[1]&&<div style={{fontSize:11,color:"#555",marginTop:4}}>{imgMatch[1]}</div>}</div>;
  if(line.startsWith("## "))return<h3 key={i} style={{fontSize:16,fontWeight:700,color:"#fff",marginTop:14,marginBottom:4,letterSpacing:1}}>{fmtLine(line.slice(3))}</h3>;
  if(line.startsWith("# "))return<h2 key={i} style={{fontSize:18,fontWeight:800,color:"#ef4444",marginTop:16,marginBottom:6,letterSpacing:1.5}}>{fmtLine(line.slice(2))}</h2>;
  if(/^[📌🔶🔮🟢🔵🟡🎙⚡]/.test(line))return<h3 key={i} style={{fontSize:15,fontWeight:700,color:"#fff",marginTop:12,marginBottom:4}}>{fmtLine(line)}</h3>;
  if(line.startsWith("• ")||line.startsWith("- "))return<div key={i} style={{paddingLeft:16,position:"relative"}}><span style={{position:"absolute",left:4,color:"#ef4444"}}>•</span>{fmtLine(line.slice(2))}</div>;
  if(line.trim()==="")return<div key={i} style={{height:8}}/>;
  return<div key={i}>{fmtLine(line)}</div>;
})}</div>}
function fmtLine(t){const parts=[];let last=0;const lr=/\[([^\]]+)\]\(([^)]+)\)/g;let m;while((m=lr.exec(t))!==null){if(m.index>last)parts.push(...fmtBold(t.slice(last,m.index),last));parts.push(<a key={`l${m.index}`} href={m[2]} target="_blank" rel="noopener" style={{color:"#60a5fa"}}>{m[1]}</a>);last=m.index+m[0].length}if(last<t.length)parts.push(...fmtBold(t.slice(last),last));return parts}
function fmtBold(t,off){return t.split(/(\*\*.*?\*\*)/g).map((p,i)=>p.startsWith("**")&&p.endsWith("**")?<strong key={`b${off||0}_${i}`} style={{color:"#fff",fontWeight:700}}>{p.slice(2,-2)}</strong>:<span key={`s${off||0}_${i}`}>{p}</span>)}
const DS=[{t:"blue",a:"ban"},{t:"red",a:"ban"},{t:"blue",a:"ban"},{t:"red",a:"ban"},{t:"blue",a:"ban"},{t:"red",a:"ban"},{t:"blue",a:"pick"},{t:"red",a:"pick"},{t:"red",a:"pick"},{t:"blue",a:"pick"},{t:"blue",a:"pick"},{t:"red",a:"pick"},{t:"red",a:"ban"},{t:"blue",a:"ban"},{t:"red",a:"ban"},{t:"blue",a:"ban"},{t:"red",a:"pick"},{t:"blue",a:"pick"},{t:"blue",a:"pick"},{t:"red",a:"pick"}];

const COUNTERS={Aatrox:{Top:["Kennen","Yorick","Irelia","Kayle","Riven","Malphite","Urgot","Fiora","Poppy","Singed"]},Ahri:{Mid:["Anivia","Corki","Ekko","Fizz","Lux","Neeko","Swain","Sylas","TwistedFate","Xerath"]},Akali:{Top:["Garen","Jax","Darius","Renekton","Mordekaiser","Sett","Jayce","Aatrox","Ambessa","Irelia"],Mid:["Anivia","AurelionSol","Azir","Galio","Hwei","Lissandra","Malzahar","Swain","Talon","Vladimir"]},Akshan:{Mid:["Azir","Irelia","Veigar","Yasuo","Galio","Cassiopeia","Viktor","Syndra","Mel","Vladimir"]},Alistar:{Support:["Zilean","Neeko","Soraka","Xerath","Velkoz","Janna","Lux","Taric","Swain","Lulu"]},Ambessa:{Top:["Camille","Illaoi","Irelia","Malphite","Poppy","Sett","Shen","Teemo","Volibear","Warwick"],Mid:["Aurora","Cassiopeia","Corki","Pantheon","Ryze","Swain","Sylas","Taliyah","Vex","Zoe"]},Amumu:{Jungle:["Ivern","JarvanIV","Lillia","Nocturne","RekSai","Shyvanna","Taliyah","Udyr","Volibear","XinZhao"],Support:["Bard","Lulu","Maokai","Milio","Morgana","Rakan","Sona","Swain","Taric","Zyra"]},Anivia:{Mid:["AurelionSol","Malzahar","Galio","Lux","Xerath","Ahri","Hwei","Orianna","Syndra","Lissandra"]},Annie:{Mid:["Lux","Malzahar","Akali","Viktor","Sylas","Syndra","Galio","Mel","Katarina","Orianna"]},Aphelios:{ADC:["Caitlyn","Corki","Ezreal","Jinx","MissFortune","Nilah","Samira","Twitch","Varus","Vayne"]},Ashe:{ADC:["Jinx","KogMaw","MissFortune","Samira","Sivir","Smolder","Tristana","Twitch","Vayne","Ziggs"]},AurelionSol:{Mid:["Ahri","Azir","Fizz","Galio","Katarina","Leblanc","Lux","Syndra","Yone","Zed"]},Aurora:{Top:["Kennen","Singed","Olaf","Galio","Yasuo","Sylas","Irelia","Malphite","Trundle","Cassiopeia"],Mid:["Anivia","AurelionSol","Veigar","Ryze","Xerath","Katarina","Lux","Cassiopeia","Syndra","Qiyana"]},Azir:{Mid:["AurelionSol","Ekko","Veigar","Taliyah","Syndra","Cassiopeia","Malzahar","Xerath","Lux","Vladimir"]},Bard:{Support:["Sona","Zyra","Senna","Thresh","Alistar","Janna","Milio","Poppy","TahmKench","Xerath"]},Belveth:{Jungle:["Kindred","Wukong","Hecarim","Khazix","Diana","Lillia","Amumu","Skarner","MasterYi","Shaco"]},Blitzcrank:{Support:["Zilean","Taric","Brand","Bard","Leona","Braum","Swain","Alistar","Rakan","Milio"]},Brand:{Support:["Yuumi","Velkoz","Milio","Morgana","Xerath","Senna","Braum","Lulu","Lux","Nami"]},Braum:{Support:["Zilean","Sona","Soraka","Xerath","Maokai","Morgana","Janna","Milio","Zyra","Rell"]},Briar:{Jungle:["Talon","Wukong","MasterYi","Nocturne","Udyr","XinZhao","Warwick","Vi","Hecarim","Ekko"]},Caitlyn:{ADC:["Ezreal","Jhin","Jinx","KogMaw","MissFortune","Samira","Sivir","Tristana","Twitch","Varus"]},Camille:{Top:["Shen","Riven","Teemo","Gragas","Gwen","Jax","Warwick","Darius","Chogath","Sett"]},Cassiopeia:{Top:["Darius","Mordekaiser","Teemo","Heimerdinger","Maokai","Trundle","Urgot","Quinn","Ornn"],Mid:["Xerath","Orianna","Syndra","Hwei","Malzahar","Viktor","Zed","Galio","Leblanc","Vladimir"]},Chogath:{Top:["DrMundo","Gnar","Illaoi","Kayle","Mordekaiser","Sett","Shen","Trundle","Tryndamere","Warwick"],Mid:["Karma","Aurora","Fizz","TwistedFate","Smolder","Qiyana","Corki","Zoe","Anivia","Malzahar"]},Corki:{Mid:["Akali","Aurora","Cassiopeia","Hwei","Lux","Malzahar","Ryze","Taliyah","Vex","Zed"],ADC:["Caitlyn","Draven","Ezreal","Jhin","Jinx","Lucian","MissFortune","Vayne","Xayah","Yunara"]},Darius:{Top:["Heimerdinger","Kayle","Cassiopeia","DrMundo","Riven","Maokai","Teemo","Urgot","Sett","Yorick"]},Diana:{Jungle:["Volibear","Briar","Nocturne","Warwick","MasterYi","Gwen","XinZhao","Viego","Udyr","Wukong"],Mid:["Annie","Cassiopeia","Anivia","Lissandra","Galio","Corki","Vex","AurelionSol","Sylas","Zoe"]},DrMundo:{Top:["Aatrox","Ambessa","Garen","Gwen","Illaoi","KSante","Mordekaiser","Sion","Urgot","Yone"]},Draven:{ADC:["Jhin","Jinx","Kog/Maw","MissFortune","Nilah","Samira","Sivir","Smolder","Twitch","Ziggs"]},Ekko:{Jungle:["Talon","Udyr","Vi","Volibear","Amumu","XinZhao","Rengar","Graves","Shaco","Sejuani"],Mid:["Fizz","Veigar","Sylas","Syndra","Galio","Malzahar","Lux","Xerath","Mel","Katarina"]},Elise:{Jungle:["Amumu","Sejuani","Kindred","Diana","Nocturne","Briar","JarvanIV","Fiddlesticks","Wukong","Skarner"],Support:["Poppy","Lulu","TahmKench","Leona","Renata","Nami","Rell","Zilean","Braum","Milio"]},Evelynn:{Jungle:["Khazix","Talon","Zac","Nunu","Sejuani","Diana","Hecarim","Nocturne","Vi","JarvanIV"]},Ezreal:{ADC:["Ashe","Jinx","Kaisa","Kalista","Lucian","MissFortune","Nilah","Tristana","Varus","Xayah"]},Fiddlesticks:{Jungle:["Briar","Ekko","Nunu","Evelynn","MasterYi","Nocturne","XinZhao","Kindred","Amumu","JarvanIV"],Support:["Elise","Braum","Renata","Morgana","Senna","Brand","Rakan","Zilean","Rell","Lulu"]},Fiora:{Top:["Malphite","Teemo","Volibear","Urgot","Camille","Trundle","Vladimir","Kayle","Jayce","Warwick"]},Fizz:{Mid:["Akali","Galio","Irelia","Kassadin","Leblanc","Lissandra","Lux","Orianna","Vex","Viktor"]},Galio:{Mid:["Swain","Velkoz","Anivia","Qiyana","Ahri","Xerath","Annie","Aurora","Taliyah","Kassadin"],Support:["Pantheon","Velkoz","Rakan","Pyke","Shaco","Bard","Poppy","Rell","Milio","Morgana"]},Gangplank:{Top:["Chogath","DrMundo","Urgot","Aatrox","Riven","Sett","Sion","Malphite","Gwen","Kayle"]},Garen:{Top:["Camille","Chogath","Darius","Kayle","Mordekaiser","Sett","Teemo","Tryndamere","Urgot","Warwick"],Mid:["AurelionSol","Kayle","Akshan","Lissandra","Cassiopeia","Ryze","Velkoz","Swain","Chogath","TwistedFate"]},Gnar:{Top:["Gwen","Irelia","Urgot","Ornn","DrMundo","Maokai","Singed","Gragas","Teemo","Malphite"]},Gragas:{Top:["Maokai","Warwick","Chogath","Garen","Yorick","Kayle","Yone","Pantheon","DrMundo","Nasus"],Jungle:["Diana","Skarner","Warwick","Briar","Wukong","Lillia","Nocturne","MasterYi","Khazix","Graves"],Mid:["Lux","Swain","Vex","Chogath","Veigar","Smolder","TwistedFate","Akali","Zoe","Galio"]},Graves:{Jungle:["Gwen","Volibear","Briar","Amumu","XinZhao","Nunu","Warwick","Diana","MasterYi","Pantheon"]},Gwen:{Top:["Kayle","Mordekaiser","Malphite","Fiora","Warwick","Garen","Nasus","Urgot","Yone","Riven"],Jungle:["MasterYi","Kayn","XinZhao","Shaco","Warwick","Viego","Amumu","Sejuani","Diana","Zac"]},Hecarim:{Jungle:["Volibear","MasterYi","Amumu","Nunu","Warwick","Fiddlesticks","Ekko","Kayn","Shyvana","Gwen"]},Heimerdinger:{Top:["Ornn","Karma","Ryze","Kayle","Yasuo","Yorick","Aurora","Chogath","Garem","Camille"]},Hwei:{Mid:["Annie","AurelionSol","Irelia","Nefari","Qiyana","Syndra","Talon","Velkoz","Xerath","Yasuo"],ADC:["Annie","AurelionSol","Irelia","Naafiri","Qiyana","Syndra","Talon","Velkoz","Xerath","Yasuo"],Support:["Pantheon","Zoe","Velkoz","Milio","Karma","Zilean","Maokai","Sona","Yuumi","Zyra"]},Illaoi:{Top:["Mordekaiser","Gnar","Yorick","Aatrox","Ornn","Kayle","Urgot","Garen","Darius","Yone"]},Irelia:{Top:["DrMundo","Gragas","Malphite","Maokai","Nasus","Ornn","Poppy","Shen","Wukong","Zac"],Mid:["Ahri","Azir","Corki","Galio","Garen","Lissandra","Lux","Taliyah","Veigar","Vex"]},Ivern:{Jungle:["Amumu","Nocturne","Wukong","Viego","Diana","Shaco","JarvanIV","Graves","Kayn","LeeSin"]},Janna:{Support:["Soraka","Renata","Rakan","Velkoz","Senna","Sona","Braum","Nami","Seraphine","Karma"]},JarvanIV:{Jungle:["Amumu","Belveth","Diana","Ekko","Gwen","MasterYi","Nocturne","Nunu","Shyvana","Wukong"]},Jax:{Top:["Garen","Singed","Kled","Teemo","Ornn","Chogath","Malphite","Vladimir","DrMundo","Illaoi"],Jungle:["Khazix","Zyra","Zac","Gragas","Belveth","Evelynn","Volibear","Kindred","Shaco","Kayn"]},Jayce:{Top:["Warwick","Singed","Yorick","Irelia","Urgot","Ornn","Malphite","Sett","TahmKench","Chogath"],Mid:["Annie","Velkoz","Qiyana","AurelionSol","Fizz","Talon","Xerath","Malzahar","Yasuo","Vex"]},Jhin:{ADC:["Aphelios","Ashe","Corki","Yunara","Kaisa","MissFortune","Sivir","Tristana","Xayah","Zeri"]},Jinx:{ADC:["Ashe","Caitlyn","Ezreal","Yunara","Smolder","Sivir","Twitch","Varus","Vayne","Ziggs"]},KSante:{Top:["Singed","DrMundo","Kayle","Maokai","Riven","Garen","Rumble","Urgot","Kennen","Fiora"]},Kaisa:{ADC:["Yunara","Jinx","KogMaw","MissFortune","Nilah","Smolder","Sivir","Varus","Vayne","Xayah"]},Kalista:{ADC:["Aphelios","Yunara","Corki","Draven","Jinx","Smolder","MissFortune","Tristana","Twitch","Vayne"]},Karma:{Top:["Illaoi","Chogath","Olaf","Tryndamere","TahmKench","Shen","Yone","Ambessa","Irelia","DrMundo"],Mid:["Talon","Seraphine","Gragas","Qiyana","Kassadin","Fizz","Malzahar","Mel","Heimer","TwistedFate"],Support:["Braum","Nami","Maokai","Neeko","Rell","Blitzcrank","Sona","Zyra","Poppy","Bard"]},Karthus:{Jungle:["Nunu","XinZhao","MasterYi","Ekko","Briar","JarvanIV","Diana","Shaco","Vi","Amumu"]},Kassadin:{Mid:["Anivia","Orianna","Galio","Vex","Lux","Yasuo","Diana","Akali","Sylas","Malzahar"]},Katarina:{Mid:["Vex","Anivia","Kassadin","Galio","Talon","Diana","AurelionSol","Vladimir","Ryze","Irelia"]},Kayle:{Top:["Tryndamere","Warwick","Irelia","TahmKench","Yone","Malphite","Teemo","Riven","Nasus","Vladimir"],Mid:["Velkoz","Qiyana","Xerath","Fizz","Talon","Syndra","Orianna","Anivia","Kassadin","Yone"]},Kayn:{Jungle:["Ekko","Fiddlesticks","Ivern","Khazix","Lillia","Rammus","Shyvana","Talon","Udyr","Zyra"]},Kennen:{Top:["Chogath","Garen","Sion","Gnar","Malphite","Darius","Irelia","Vladimir","Jax","Renekton"]},Khazix:{Jungle:["Lillia","Briar","Diana","Karthus","Zyra","Amumu","Hecarim","Volibear","Nocturne","Fiddlesticks"]},Kindred:{Jungle:["Wukong","Udyr","Sejuani","Briar","XinZhao","MasterYi","Warwick","Hecarim","Diana","Khazix"]},Kled:{Top:["Sett","Darius","Aatrox","Garen","Chogath","Jayce","Mordekaiser","Ambessa","Shen","KSante"]},KogMaw:{ADC:["Aphelios","Caitlyn","Corki","Jhin","Jinx","MissFortune","Sivir","Tristana","Vayne","Zeri"]},Leblanc:{Mid:["Vladimir","Malzahar","Akshan","Vex","Yasuo","Ryze","Kassadin","Veigar","Galio","Lissandra"],Support:["Pantheon","Morgana","Shaco","Leona","Thresh","Alistar","Taric","Blitzcrank","Zilean","Lulu"]},LeeSin:{Jungle:["Amumu","Diana","Nocturne","Nunu","Shyvana","Skarner","Udyr","Vi","Warwick","Wukong"]},Leona:{Support:["Alistar","Braum","Janna","Morgana","Nami","Nautilus","Rell","Renata","TahmKench","Zilean"]},Lillia:{Jungle:["Amumu","Diana","Ekko","Fiddlesticks","Hecarim","JarvanIV","Karthus","Pantheon","Udyr","XinZhao"]},Lissandra:{Mid:["Ahri","Azir","Galio","Hwei","Qiyana","Syndra","Veigar","Viktor","Xerath","Zoe"]},Lucian:{ADC:["Aphelios","Ashe","Caitlyn","Smolder","KogMaw","MissFortune","Nilah","Tristana","Twitch","Vayne"]},Lulu:{Support:["Sona","Velkoz","Milio","Nami","Senna","Bard","Zyra","Braum","Soraka","Janna"]},Lux:{Mid:["Velkoz","Cassiopeia","Akshan","Irelia","Leblanc","AurelionSol","Fizz","Akali","Anivia","Veigar"],ADC:["Kaisa","Lucian","Mel","Samira","Smolder","Vayne","Viktor","Xayah","Zeri","Ziggs"],Support:["Janna","Lulu","Milio","Nami","Pantheon","Poppy","Sona","Soraka","Yuumi","Zilean"]},Malphite:{Top:["Chogath","DrMundo","Illaoi","Maokai","Mordekaiser","Ornn","Rumble","Shen","Sylas","TahmKench"],Mid:["Lissandra","Pantheon","Tristana","Kayle","Cassiopeia","Morgana","Kassadin","Lux","Sylas","Sion"]},Malzahar:{Mid:["Naafiri","Xerath","Fizz","Taliyah","AurelionSol","Galio","Yone","Akshan","Talon","Qiyana"]},Maokai:{Top:["Chogath","Gwen","Kled","Mordekaiser","Olaf","Poppy","Sion","TahmKench","Wukong","Zac"],Jungle:["MasterYi","Rengar","Shaco","RekSai","Karthus","Elise","Lillia","Diana","Gwen","Taliyah"],Support:["Alistar","Braum","Leona","Milio","Morgana","Rell","Renata","Soraka","TahmKench","Taric"]},MasterYi:{Jungle:["Nunu","Pantheon","Wukong","Elise","Shaco","Volibear","Amumu","Warwick","Diana","Rammus"]},Mel:{Mid:["AurelionSol","Cassiopeia","Kassadin","Orianna","Taliyah","Veigar","Velkoz","Viktor","Xerath","Ziggs"],ADC:["Draven","Hwei","Kaisa","Kalista","Nilah","Sivir","Swain","Vayne","Yasuo","Ziggs"],Support:["Pantheon","Poppy","Lulu","Elise","Morgana","Renata","Janna","TahmKench","Senna","Yuumi"]},Milio:{Support:["Sona","Maokai","Nami","Karma","Zyra","Soraka","Thresh","Zilean","Rakan","Janna"]},MissFortune:{ADC:["Corki","Jhin","Jinx","KogMaw","Nilah","Sivir","Twitch","Vayne","Smolder","Ziggs"]},Mordekaiser:{Top:["Aatrox","Darius","DrMundo","Gnar","Gragas","Olaf","Ornn","Pantheon","TahmKench","Urgot"]},Morgana:{Support:["Elise","Janna","Karma","Lulu","Lux","Milio","Sona","Velkoz","Yuumi","Zyra"]},Naafiri:{Mid:["Galio","Yasuo","Sylas","Ahri","Hwei","Mel","Yone","Viktor","Malzahar","Syndra"]},Nami:{Support:["Blitzcrank","Brand","Braum","Elise","Leona","Neeko","Poppy","Soraka","Taric","Zilean"]},Nasus:{Top:["Maokai","Urgot","Chogath","Garen","TahmKench","Sett","KSante","Illaoi","Sion","Riven"]},Nautilus:{Support:["Braum","Morgana","Neeko","Pantheon","Rell","Renata","Sona","Soraka","TahmKench","Taric"]},Neeko:{Mid:["Cassiopeia","Ryze","Akali","Diana","Leblanc","Veigar","Zoe","Hwei","Viktor","Lux"],Support:["Soraka","Janna","Braum","Lulu","Lux","Thresh","Nami","Elise","Zyra","Rakan"]},Nidalee:{Jungle:["Briar","Darius","Nunu","Nocturne","Talon","Lillia","MasterYi","JarvanIV","XinZhao","Viego"]},Nilah:{ADC:["Ashe","Corki","Jinx","MissFortune","Sivir","Smolder","Tristana","Varus","Vayne","Xayah"]},Nocturne:{Jungle:["Gwen","Ivern","JarvanIV","Lillia","Nunu","Skarner","Volibear","Wukong","XinZhao","Zac"]},Nunu:{Jungle:["Gwen","Volibear","Warwick","Belveth","Elise","XinZhao","Lillia","Zyra","Diana","Khazix"]},Olaf:{Top:["Darius","Sett","Chogath","Mordekaiser","Garen","Urgot","Jayce","Aatrox","KSante","Gwen"]},Orianna:{Mid:["Irelia","AurelionSol","Velkoz","Zoe","Annie","Galio","Swain","Anivia","Xerath","Hwei"]},Ornn:{Top:["Aatrox","Ambessa","Darius","DrMundo","Fiora","KSante","Mordekaiser","Riven","Shen","Warwick"]},Pantheon:{Top:["Chogath","Fiora","Shen","Teemo","Urgot","Malphite","Gnar","Sion","Nasus","Ornn"],Jungle:["Amumu","Briar","JarvanIV","Kayn","Kindred","Nocturne","Skarner","Viego","Warwick","XinZhao"],Mid:["Syndra","Ahri","Ryze","Vladimir","Swain","Orianna","Anivia","Taliyah","Lux","Chogath"],Support:["TahmKench","Maokai","Senna","Velkoz","Lulu","Soraka","Nami","Milio","Poppy","Alistar"]},Poppy:{Top:["Cassiopeia","Darius","Garen","Gnar","Gwen","Kled","Sett","Singed","TahmKench","Teemo"],Jungle:["Nocturne","Warwick","Karthus","Hecarim","Sejuani","Diana","Pantheon","Zyra","Volibear","Shaco"],Support:["Janna","Velkoz","Braum","Maokai","Lulu","Nami","Morgana","Swain","Yuumi","Soraka"]},Pyke:{Support:["Elise","Zyra","Maokai","Morgana","Poppy","Soraka","Nami","Leona","Blitzcrank","Sona"]},Qiyana:{Jungle:["Taliyah","Pantheon","Belveth","Shyvana","Amumu","Kindred","Karthus","Zed","Hecarim","XinZhao"],Mid:["Lissandra","Vladimir","Ahri","Lux","Mel","Yone","Yasuo","Orianna","Veigar","Malzahar"]},Quinn:{Top:["Malphite","Teemo","Darius","Aatrox","Garen","Jayce","Ambessa","Riven","Ornn","Wukong"],Mid:["AurelionSol","Taliyah","Irelia","Morgana","Annie","Yone","Kayle","Aurora","Viktor","Vex"]},Rakan:{Support:["Janna","Taric","Sona","Morgana","Swain","Bard","Maokai","Seraphine","Lulu","Senna"]},Rammus:{Jungle:["Wukong","Lillia","Vi","Amumu","Briar","Nocturne","Kayn","LeeSin","Graves","Diana"]},RekSai:{Jungle:["Graves","Vi","JarvanIV","Diana","Viego","Kayn","LeeSin","Wukong","Gragas","Ivern"]},Rell:{Support:["Brand","Janna","Lulu","Milio","Neeko","Pantheon","Sona","Soraka","Swain","Velkoz"]},Renata:{Support:["Mel","Morgana","Nami","Milio","Braum","Poppy","Lux","Soraka","Senna","Lulu"]},Renekton:{Top:["DrMundo","Garen","Gnar","Illaoi","Kayle","Kennen","Maokai","Mordekaiser","Ornn","Singed"]},Rengar:{Jungle:["Briar","Warwick","Amumu","MasterYi","Nocturne","Volibear","Wukong","XinZhao","Sejuani","Hecarim"]},Riven:{Top:["Maokai","Renekton","Poppy","Garen","Gragas","Malphite","Volibear","Camille","Chogath","Kled"]},Rumble:{Top:["Irelia","Mordekaiser","Darius","Gragas","Teemo","Ornn","Sett","Garen","Jax","Sion"]},Ryze:{Top:["RekSai","Fiora","Kled","Pantheon","Chogath","Tryndamere","Sett","Yone","Casiopeia","Quinn"],Mid:["Cassiopeia","Galio","Lux","Malzahar","Mel","Orianna","Syndra","Veigar","Viktor","Zed"]},Samira:{ADC:["Corki","Jinx","KogMaw","Lucian","MissFortune","Nilah","Smolder","Twitch","Vayne","Xayah"]},Sejuani:{Jungle:["Amumu","Diana","Nocturne","Wukong","Skarner","Fiddlesticks","JarvanIV","Kayn","Hecarim","Lillia"]},Senna:{ADC:["Smolder","Yunara","Tristana","Twitch","Nilah","Aphelios","Ashe","KogMaw","Lucian"],Support:["Neeko","Zilean","Nami","Nautilus","Elise","Yuumi","Zyra","Poppy","Thresh","Milio"]},Seraphine:{Mid:["Swain","Irelia","Taliyah","Anivia","Lux","Xerath","TwistedFate","Syndra","Mel","Hwei"],ADC:["Kalista","KogMaw","Mel","MissFortune","Samira","Smolder","Swain","Tristana","Vayne","Ziggs"],Support:["Bard","Brand","Karma","Lux","Milio","Morgana","Nami","Xerath","Zilean","Zyra"]},Sett:{Top:["Kayle","Kled","Malphite","Nasus","Ornn","Poppy","Singed","Urgot","Vladimir","Warwick"]},Shaco:{Jungle:["Nunu","JarvanIV","Diana","Volibear","Nocturne","Sejuani","Briar","Zac","Talon","Amumu"],Support:["Lulu","Rell","Karma","Lux","Yuumi","Pyke","Nami","Thresh","Nautilus","Leona"]},Shen:{Top:["Cassiopeia","Darius","Gnar","Gwen","Kled","Mordekaiser","Olaf","Sett","Singed","Urgot"],Support:["Renata","Shaco","Maokai","Mel","Seraphine","Taric","Velkoz","Janna","Lulu","Soraka"]},Shyvana:{Jungle:["MasterYi","Diana","Vi","Warwick","Amumu","Nocturne","Kayn","Viego","Hecarim","Graves"]},Singed:{Top:["Kayle","Darius","Nasus","Garen","Teemo","Malphite","Riven","Yone","Chogath","Camille"]},Sion:{Top:["Ambessa","Sett","Aatrox","Yone","DrMundo","Tryndamere","Darius","Camille","Chogath","Singed"]},Sivir:{ADC:["Yunara","Zeri","Jinx","Kalista","Lucian","MissFortune","Twitch","Vayne","Xayah","Senna"]},Skarner:{Jungle:["MasterYi","Nocturne","Poppy","Skarner","Taliyah","Udyr","Volibear","Warwick","XinZhao"]},Smolder:{Mid:["Irelia","Naafiri","Diana","Velkoz","Viktor","Annie","Syndra","Orianna","Aurora","Anivia"],ADC:["Corki","Jinx","KogMaw","MissFortune","Nilah","Sivir","Tristana","Twitch","Varus","Ziggs"]},Sona:{Support:["Bard","Elise","Karma","Nami","Pantheon","Seraphine","Soraka","Thresh","Zilean","Zyra"]},Soraka:{Support:["Velkoz","Elise","Brand","Bard","Lulu","Swain","Nami","Yuumi","Senna","Morgana"]},Swain:{Top:["Vayne","Olaf","Ryze","Yorick","Camille","Jax","Pantheon","Cassiopeia","Gnar","Gwen"],Mid:["Hwei","Katarina","Yone","Viktor","Zed","Veigar","Ahri","Sylas","Lux","Malzahar"],ADC:["Corki","Draven","Hwei","Kalista","KogMaw","Lucian","Seraphine","Vayne","Viktor","Ziggs"],Support:["Nami","Pantheon","Senna","Seraphine","Yuumi","Janna","Karma","Brand","Lulu","Bard"]},Sylas:{Top:["Poppy","Vayne","Galio","Singed","Kennen","Ornn","Tryndamere","Gwen","KSante","Gragas"],Jungle:["Elise","Briar","Belveth","Shaco","Taliyah","Volibear","Naafiri","Pantheon","Evelynn","Zyra"],Mid:["Veigar","Taliyah","Cassiopeia","Malzahar","Vex","Akshan","Galio","Yasuo","Velkoz","Annie"],Support:["Taric","Velkoz","Poppy","Mel","Braum","Elise","Senna","Pantheon","Bard","Rakan"]},Syndra:{Mid:["Anivia","Annie","Fizz","Irelia","Leblanc","Orianna","Swain","Sylas","Veigar","Xerath"]},TahmKench:{Top:["Gwen","Mordekaiser","Aatrox","Volibear","Sett","Sion","Ornn","Gnar","Darius","Kayle"],Support:["Karma","Maokai","Milio","Morgana","Nami","Pyke","Rakan","Rell","Sona","Zilean"]},Taliyah:{Jungle:["Volibear","Ekko","Gwen","Khazix","Udyr","Warwick","Fiddlesticks","MasterYi","Diana","Hecarim"],Mid:["Orianna","Zed","Katarina","Xerath","Syndra","Aurora","Lux","Viktor","Ahri","Galio"]},Talon:{Jungle:["Rengar","Nunu","Nocturne","JarvanIV","Diana","Fiddlesticks","Kayn","LeeSin","Volibear","Lillia"],Mid:["Lissandra","Fizz","Orianna","Vladimir","Vex","Leblanc","Lux","Galio","Aurora","Hwei"]},Taric:{Support:["Janna","Senna","Milio","Braum","Lux","Rell","Lulu","Pyke","Karma","Nami"]},Teemo:{Top:["Malphite","Pantheon","Sion","Warwick","Yorick","Olaf","Rumble","Aurora","Quinn","Ornn"]},Thresh:{Support:["Taric","Shaco","Zilean","Alistar","Lulu","Braum","Velkoz","Morgana","Swain","Brand"]},Tristana:{Mid:["Leblanc","Talon","Smolder","Malphite","Viktor","Akshan","Annie","Xerath","Syndra","Vladimir"],ADC:["Aphelios","Smolder","Draven","Jinx","KogMaw","Lucian","Nilah","Sivir","Twitch","Vayne"]},Trundle:{Top:["Riven","Kayle","Gragas","Malphite","Jax","Gnar","Urgot","Mordekaiser","Aatrox","Camille"]},Tryndamere:{Top:["Volibear","Teemo","Riven","Warwick","Malphite","Camille","TahmKench","Ornn","Gragas","Aatrox"]},TwistedFate:{Mid:["Galio","Yasuo","Ahri","Leblanc","Viktor","Xerath","Katarina","Zed","Fizz","Lux"]},Twitch:{ADC:["Corki","KogMaw","MissFortune","Nilah","Smolder","Sivir","Tristana","Vayne","Xayah","Ezral"]},Udyr:{Top:["Kennen","Teemo","Mordekaiser","Riven","Renekton","Chogath","Ambessa","Yone","Gnar","Kayle"],Jungle:["Volibear","Fiddlesticks","Wukong","Nunu","Diana","Rengar","MasterYi","Evelynn","Nocturne","JarvanIV"]},Urgot:{Top:["Kayle","DrMundo","Riven","Chogath","Mordekaiser","Sett","Tryndamere","Olaf","Sion","Ambessa"]},Varus:{ADC:["Jinx","Kaisa","Jhin","MissFortune","Nilah","Sivir","Twitch","Vayne","Zeri","Ziggs"]},Vayne:{Top:["Aurora","Kayle","Malphite","Jayce","Teemo","Vladimir","Quinn","Warwick","Jax","Yasuo"],ADC:["Aphelios","Samira","Sivir","Jinx","KogMaw","MissFortune","Zeri","Ziggs","Twitch","Xayah"]},Veigar:{Mid:["Anivia","AurelionSol","Cassiopeia","Fizz","Hwei","Lux","TwistedFate","Velkoz","Vladimir","Xerath"]},Velkoz:{Mid:["Ahri","Akali","Aurora","Katarina","Malzahar","Syndra","Xerath","Yasuo","Yone","Zed"],Support:["Sona","Milio","Nami","Xerath","Blitzcrank","Braum","Senna","Maokai","Alistar","Janna"]},Vex:{Mid:["Vladimir","Lissandra","Veigar","Malzahar","Hwei","Syndra","Mel","Ahri","Orianna","Xerath"]},Vi:{Jungle:["Belveth","Diana","Ivern","JarvanIV","Kayn","Khazix","Nocturne","Warwick","Wukong","Zyra"]},Viego:{Jungle:["Amumu","Gwen","JarvanIV","MasterYi","Nocturne","Nunu","Rammus","Udyr","Volibear","Warwick"]},Viktor:{Mid:["Ahri","Akali","Anivia","Ekko","Kassasin","Lux","Sylas","Syndra","Taliyah","Xerath"],ADC:["Ashe","Caitlyn","Corki","Draven","Hwei","Jinx","Kaisa","Kalista","Lucian","Vayne"]},Vladimir:{Top:["Chogath","Aatrox","Yorick","Malphite","Pantheon","Warwick","Nasus","Sion","Teemo","Riven"],Mid:["Ryze","Malzahar","Zoe","Hwei","Ekko","TwistedFate","Orianna","Viktor","Swain","Fizz"]},Volibear:{Top:["Teemo","Gnar","Kayle","Gragas","Urgot","DrMundo","Jax","Warwick","Shen","Yorick"],Jungle:["JarvanIV","Warwick","Amumu","Kayn","Viego","Lillia","Kindred","Nocturne","Diana","Skarner"]},Warwick:{Jungle:["Rammus","JarvanIV","Udyr","Amumu","Pantheon","Nocturne","Lillia","Khazix","Shaco","Diana"]},Wukong:{Top:["Aatrox","Chogath","Illaoi","Kennen","Malphite","Maokai","Mordekaiser","Olaf","Poppy","Rumble"],Jungle:["Amumu","Diana","Gwen","Lillia","Nocturne","Nunu","Pantheon","Shaco","Shyvana","Warwick"]},Xayah:{ADC:["Senna","Jinx","Kogmaw","Lucian","MissFortune","Nilah","Samira","Twitch","Draven","Zeri"]},Xerath:{Mid:["Akali","Vex","Katarina","Akshan","Yasuo","Lux","Irelia","Ahri","Velkoz","Leblanc"],Support:["Zilean","TahmKench","Yuumi","Maokai","Soraka","Blitzcrank","Sona","Morgana","Rell","Lulu"]},XinZhao:{Jungle:["Udyr","JarvanIV","Sejuani","Lillia","Khazix","Volibear","Warwick","MasterYi","Kayn","Zac"]},Yasuo:{Top:["Nasus","Cassiopeia","Darius","Riven","Warwick","Shen","Akali","Pantheon","Poppy","Garen"],Mid:["Kayle","Annie","Taliyah","Malzahar","Cassiopeia","Lissandra","Vex","AurelionSol","Vladimir","Syndra"],ADC:["Aphelios","Kalista","KogMaw","MissFortune","Samira","Sivir","Twitch","Vayne","Xayah","Ziggs"]},Yone:{Top:["Kennen","Warwick","Riven","Sett","Urgot","Irelia","Renekton","Volibear","Trundle","Fiora"],Mid:["Vex","Taliyah","Leblanc","Vladimir","Ekko","Ryze","Katarina","Irelia","Fizz","Cassiopeia"]},Yorick:{Top:["Urgot","Warwick","Sett","Trundle","Teemo","Fiora","Renekton","Pantheon","Chogath","Malphite"]},Yunara:{ADC:["Ziggs","KogMaw","Nilah","Zeri","Twitch","Vayne","Smolder","Tristana","MissFortune","Lucian"]},Yuumi:{Support:["Rell","Braum","Taric","Leona","Velkoz","Elise","Zilean","Lulu","Rakan","TahmKench"]},Zaahen:{Top:["Vayne","Singed","Pantheon","Urgot","Jax","Kayle","Shen","Fiora","Gwen","Gnar"],Jungle:["Ivern","Rammus","Malphite","Elise","Jax","Kindred","Zed","Shaco","Lillia","Briar"]},Zac:{Top:["Riven","Yasuo","Ornn","Volibear","Vayne","Rumble","Darius","Olaf","Fiora","Urgot"],Jungle:["Warwick","Lillia","Volibear","Briar","Nocturne","Diana","Kayn","MasterYi","JarvanIV","Nunu"]},Zed:{Jungle:["Rengar","Nunu","Fiddlesticks","Sejuani","Karthus","Vi","Viego","Warwick","MasterYi","RekSai"],Mid:["Anivia","Qiyana","Annie","Ekko","Malzahar","Akshan","Vex","Xerath","Veigar","Zoe"]},Zeri:{ADC:["Tristana","Corki","Jinx","KogMaw","MissFortune","Nilah","Sivir","Twitch","Vayne","Xayah"]},Ziggs:{Mid:["Kassadin","Kayle","Xerath","Cassiopeia","Qiyana","Aurora","Annie","Anivia","Talon","Velkoz"],ADC:["Caitlyn","Corki","Ezreal","Jhin","Jinx","Kaisa","Lucian","MissFortune","Twitch","Vayne"]},Zilean:{Support:["Bard","Zyra","Karma","Rell","Janna","Alistar","Morgana","Sona","Nami","Lulu"]},Zoe:{Mid:["Cassiopeia","Fizz","Galio","Irelia","Leblanc","Malzahar","Mel","Syndra","Veigar","Vex"],Support:["Poppy","Pantheon","Sona","Nami","Morgana","Velkoz","Lulu","Rakan","Yuumi","Rell"]},Zyra:{Jungle:["Diana","Nocturne","MasterYi","Amumu","Lillia","Shaco","Skarner","Hecarim","JarvanIV","XinZhao"],Support:["Xerath","Pantheon","Renata","Yuumi","Velkoz","Janna","Nami","Nautilus","Poppy","Lulu"]}};

const META={Top:{S:[{id:"Mordekaiser",wr:53.1},{id:"Ambessa",wr:53.0},{id:"Nasus",wr:52.8},{id:"Yone",wr:52.7},{id:"Malphite",wr:52.7},{id:"Aatrox",wr:52.6},{id:"Sion",wr:52.0},{id:"Illaoi",wr:52.0},{id:"Yorick",wr:51.9},{id:"Volibear",wr:51.7}],A:[{id:"Singed",wr:54.6},{id:"Olaf",wr:53.8},{id:"Gnar",wr:53.7},{id:"Shen",wr:53.5},{id:"Kayle",wr:52.8},{id:"Garen",wr:51.0},{id:"Riven",wr:50.4},{id:"Fiora",wr:50.1},{id:"Darius",wr:50.5},{id:"Camille",wr:50.2}],B:[{id:"Aurora",wr:49.9},{id:"Renekton",wr:50.0},{id:"Jax",wr:49.8},{id:"Sett",wr:49.7},{id:"Irelia",wr:49.6},{id:"Gangplank",wr:49.5},{id:"Tryndamere",wr:49.3},{id:"Ornn",wr:49.2},{id:"Urgot",wr:49.1},{id:"Poppy",wr:49.0},{id:"Wukong",wr:48.9}],C:[{id:"Zaahen",wr:48.6},{id:"Teemo",wr:49.0},{id:"Kennen",wr:48.8},{id:"Jayce",wr:48.7},{id:"Quinn",wr:48.5},{id:"Vayne",wr:48.2},{id:"Heimerdinger",wr:47.9},{id:"KSante",wr:47.8},{id:"Akali",wr:47.5}]},Jungle:{S:[{id:"Ivern",wr:54.6},{id:"Briar",wr:52.9},{id:"Amumu",wr:52.5},{id:"Vi",wr:52.3},{id:"Warwick",wr:52.1},{id:"Nocturne",wr:51.9},{id:"Volibear",wr:51.8},{id:"Rammus",wr:51.6},{id:"Shyvana",wr:51.5},{id:"Sejuani",wr:51.4}],A:[{id:"Ekko",wr:51.4},{id:"Diana",wr:51.2},{id:"JarvanIV",wr:51.0},{id:"Hecarim",wr:50.9},{id:"Viego",wr:50.6},{id:"Graves",wr:50.5},{id:"LeeSin",wr:50.2},{id:"Elise",wr:50.1},{id:"XinZhao",wr:50.0},{id:"Trundle",wr:49.9}],B:[{id:"Skarner",wr:50.1},{id:"Kindred",wr:50.0},{id:"Rengar",wr:49.6},{id:"Nidalee",wr:49.4},{id:"MasterYi",wr:49.2},{id:"Kayn",wr:49.1},{id:"Poppy",wr:48.9},{id:"Lillia",wr:48.8},{id:"Zac",wr:48.7}],C:[{id:"Udyr",wr:48.5},{id:"Karthus",wr:48.2},{id:"Olaf",wr:47.6},{id:"Sylas",wr:47.4},{id:"Talon",wr:47.2}]},Mid:{S:[{id:"Ahri",wr:52.8},{id:"Syndra",wr:52.5},{id:"Viktor",wr:52.3},{id:"Malzahar",wr:52.2},{id:"Veigar",wr:52.0},{id:"Galio",wr:51.8},{id:"Lux",wr:51.7},{id:"Anivia",wr:51.6},{id:"Swain",wr:51.5},{id:"Xerath",wr:51.4}],A:[{id:"Hwei",wr:51.5},{id:"Vex",wr:51.4},{id:"Ekko",wr:51.3},{id:"Cassiopeia",wr:51.0},{id:"Diana",wr:50.8},{id:"Katarina",wr:50.7},{id:"Fizz",wr:50.5},{id:"Zed",wr:50.3},{id:"Talon",wr:50.2},{id:"Orianna",wr:50.1},{id:"Leblanc",wr:50.0},{id:"Annie",wr:49.9}],B:[{id:"Aurora",wr:49.9},{id:"Mel",wr:49.8},{id:"Yasuo",wr:49.8},{id:"Yone",wr:49.7},{id:"Akali",wr:49.5},{id:"Kassadin",wr:49.4},{id:"Irelia",wr:49.2},{id:"Sylas",wr:49.0},{id:"Lissandra",wr:48.8},{id:"Azir",wr:48.5},{id:"Vladimir",wr:48.3},{id:"Corki",wr:48.1}],C:[{id:"Naafiri",wr:48.2},{id:"TwistedFate",wr:48.0},{id:"Qiyana",wr:47.8},{id:"AurelionSol",wr:47.5},{id:"Pantheon",wr:47.3},{id:"Malphite",wr:47.0}]},ADC:{S:[{id:"Jinx",wr:53.0},{id:"KogMaw",wr:53.0},{id:"Jhin",wr:52.5},{id:"MissFortune",wr:52.3},{id:"Ashe",wr:52.0},{id:"Caitlyn",wr:51.8},{id:"Smolder",wr:51.6},{id:"Sivir",wr:51.4},{id:"Tristana",wr:51.2},{id:"Draven",wr:51.0}],A:[{id:"Yunara",wr:51.0},{id:"Kaisa",wr:50.8},{id:"Vayne",wr:50.6},{id:"Ezreal",wr:50.4},{id:"Twitch",wr:50.2},{id:"Xayah",wr:50.0},{id:"Samira",wr:49.8},{id:"Lucian",wr:49.6},{id:"Varus",wr:49.4},{id:"Aphelios",wr:49.2}],B:[{id:"Nilah",wr:49.5},{id:"Kalista",wr:49.3},{id:"Senna",wr:49.0},{id:"Zeri",wr:48.5},{id:"Corki",wr:48.2}]},Support:{S:[{id:"Nami",wr:53.2},{id:"Sett",wr:53.6},{id:"Blitzcrank",wr:52.7},{id:"Thresh",wr:52.4},{id:"Leona",wr:52.2},{id:"Nautilus",wr:52.0},{id:"Soraka",wr:51.8},{id:"Janna",wr:51.5},{id:"Lulu",wr:51.3},{id:"Zyra",wr:51.2}],A:[{id:"Brand",wr:51.0},{id:"Morgana",wr:50.8},{id:"Alistar",wr:50.5},{id:"Rakan",wr:50.3},{id:"Senna",wr:50.0},{id:"Pyke",wr:49.8},{id:"Karma",wr:49.7},{id:"Braum",wr:49.5},{id:"Xerath",wr:49.3},{id:"Bard",wr:49.2}],B:[{id:"Lux",wr:49.0},{id:"Seraphine",wr:48.8},{id:"Sona",wr:48.7},{id:"TahmKench",wr:48.4},{id:"Swain",wr:48.2},{id:"Yuumi",wr:48.0},{id:"Annie",wr:47.8}]}};

async function store(k,v){try{await window.storage.set(k,JSON.stringify(v))}catch(e){console.error(e)}}
async function load(k,fb){try{const r=await window.storage.get(k);return r?JSON.parse(r.value):fb}catch{return fb}}
function fileToB64(f){return new Promise((r,j)=>{const a=new FileReader();a.onload=()=>r(a.result);a.onerror=j;a.readAsDataURL(f)})}
// Compress image to max 800px wide, JPEG 0.6 quality (~50-100KB)
function compressImg(f,maxW=800,quality=0.6){return new Promise((res,rej)=>{const img=new Image();img.onload=()=>{const scale=Math.min(1,maxW/img.width);const canvas=document.createElement("canvas");canvas.width=img.width*scale;canvas.height=img.height*scale;const ctx=canvas.getContext("2d");ctx.drawImage(img,0,0,canvas.width,canvas.height);res(canvas.toDataURL("image/jpeg",quality))};img.onerror=rej;img.src=URL.createObjectURL(f)})}

function RankSelect({value,onChange}){
  const parts=(value||"").split(" ");const tier=RANK_LIST.includes(parts[0])?parts[0]:"";const div=parts[1]||"";const lp=parts[2]||"";
  const isMasterPlus=["Master","Grandmaster","Challenger"].includes(tier);
  const setR=(t,d,l)=>{const r=isMasterPlus||["Master","Grandmaster","Challenger"].includes(t)?`${t}${l?` ${l} LP`:""}`:d?`${t} ${d}`:t;onChange(r.trim())};
  return<div style={{display:"flex",gap:4,alignItems:"center"}}>
    <select value={tier} onChange={e=>setR(e.target.value,div,lp)} style={{...I,width:110,padding:"6px 8px",fontSize:12,background:tier?RANK_CLR[tier]+"22":"#0c0c16",color:tier?RANK_CLR[tier]:"#888",borderColor:tier?RANK_CLR[tier]+"44":"#1e1e32",fontWeight:700}}>
      <option value="">Rank</option>{RANK_LIST.map(r=><option key={r} value={r}>{r}</option>)}
    </select>
    {tier&&!["Master","Grandmaster","Challenger"].includes(tier)&&<select value={div} onChange={e=>setR(tier,e.target.value,lp)} style={{...I,width:60,padding:"6px 8px",fontSize:12}}>
      {RANK_DIVS.map(d=><option key={d} value={d}>{d}</option>)}
    </select>}
    {["Master","Grandmaster","Challenger"].includes(tier)&&<input style={{...I,width:70,padding:"6px 8px",fontSize:12}} placeholder="LP" type="number" value={lp.replace(" LP","")} onChange={e=>setR(tier,"",e.target.value)}/>}
  </div>;
}
function rankBg(r){if(!r)return"";const t=r.split(" ")[0];return RANK_CLR[t]||""}

const GUIDE_PRESETS=[
  {id:"ct",title:"League Coaching Tool",category:"Getting Started",bg:"linear-gradient(135deg,#e85d5d,#991b1b)",textColor:"#fff",content:"Welcome to Crimson's Coaching Tool v"+VER+"!\n\n🔍 Scout — Profile enemies\n⚔️ Draft — Fearless/Normal/Ironman\n🏆 Meta — Patch "+PATCH+" tier lists\n🎯 Counters — Full counter reference\n🏗️ Builder — Team comp builder\n📋 Tiers — Champion tier lists\n🎬 Videos — Homework\n📅 Schedule — Calendar\n\nDiscord: xCrimsonLoL"},
  {id:"cd",title:"League Coaching Doc",category:"Getting Started",bg:"linear-gradient(135deg,#e85d5d,#7f1d1d)",textColor:"#fff",content:"Paste your coaching doc here via EDIT.\n\nDiscord: xCrimsonLoL"},
  {id:"top",title:"Top Lane Cheat Sheet",category:"Role Guides",bg:"linear-gradient(135deg,#f97316,#9a3412)",textColor:"#fff",content:"Paste your Top guide here via EDIT."},
  {id:"jg",title:"Jungle Cheat Sheet",category:"Role Guides",bg:"linear-gradient(135deg,#8b5cf6,#4c1d95)",textColor:"#fff",content:"Paste your JG guide here via EDIT."},
  {id:"mid",title:"Mid Lane Cheat Sheet",category:"Role Guides",bg:"linear-gradient(135deg,#22c55e,#14532d)",textColor:"#fff",content:"Paste your Mid guide here via EDIT."},
  {id:"adc",title:"ADC Cheat Sheet",category:"Role Guides",bg:"linear-gradient(135deg,#3b82f6,#1e3a5f)",textColor:"#fff",content:"Paste your ADC guide here via EDIT."},
  {id:"sup",title:"Support Cheat Sheet",category:"Role Guides",bg:"linear-gradient(135deg,#eab308,#78350f)",textColor:"#fff",content:"Paste your Support guide here via EDIT."},
  {id:"com",title:"Comms Handbook",category:"Competitive",bg:"linear-gradient(135deg,#22c55e,#052e16)",textColor:"#fff",content:"Paste your Comms guide here via EDIT."},
  {id:"web",title:"Websites & Apps To Use",category:"Resources",bg:"linear-gradient(135deg,#3b82f6,#1e3a5f)",textColor:"#fff",content:"# Websites & Apps Every Player Should Use\n\n## Scouting & Profiles\n• **OP.GG** — op.gg — Player profiles, match history, multi-search\n• **U.GG** — u.gg — Builds, runes, tier lists, counters\n• **XDX.GG** — xdx.gg — Detailed player analytics\n\n## Builds & Runes\n• **U.GG** — Best builds, runes, items per patch\n• **OP.GG** — Champion builds & win rates\n• **Mobalytics** — mobalytics.gg — Builds + coaching tips\n• **LoLalytics** — lolalytics.com — Deep statistics\n• **ProBuilds** — probuildstats.com — What pros are building\n\n## Counters\n• **CounterStats** — counterstats.net — Counter matchup data\n• **U.GG Counters** — u.gg/lol/champions/[champ]/counter\n• **ChampionCounter** — championcounter.com\n\n## VOD Review & Improvement\n• **YouTube** — Pro VODs, educational content\n• **Twitch** — Watch high elo players live\n• **League of Graphs** — leagueofgraphs.com — Deep stats & trends\n\n## Team Tools\n• **Crimson's Tool** — You're using it!\n• **Drafter.lol** — Draft practice\n• **ProComps.gg** — Team comp analysis\n\nDiscord: xCrimsonLoL"},
  {id:"fund",title:"Fundamentals of the Game",category:"Resources",bg:"linear-gradient(135deg,#ef4444,#7f1d1d)",textColor:"#fff",content:"# Fundamentals of League of Legends\n\n## Laning Phase\n• **CS** — Aim for 8-10 CS/min. Every 15 CS = 1 kill worth of gold\n• **Trading** — Trade when enemy uses abilities on minions\n• **Wave Management** — Freeze, slow push, fast push. Know when to use each\n• **Vision** — Ward river at 2:30 for first gank timing\n• **Recall Timing** — Push wave before recalling. Never recall with a big wave crashing\n\n## Macro\n• **Objectives** — Dragon > Rift Herald > Baron. Always play for objectives\n• **Rotations** — After taking tower, rotate to help other lanes\n• **Split Pushing** — Only split if you have TP or team can hold 4v5\n• **Vision Control** — Sweep before objectives. Pink wards win games\n\n## Teamfighting\n• **Positioning** — ADC/Mage: stay behind frontline. Assassin: flank\n• **Target Selection** — Focus whoever is closest and safest to hit\n• **Cooldowns** — Track enemy summoner spells and ultimates\n• **Engage** — Don't force fights without numbers advantage or item spikes\n\n## Mentality\n• **Don't tilt** — Mute if needed, focus on your own play\n• **Review deaths** — Every death is a learning opportunity\n• **Play to improve** — Focus on 1-2 things per game, not just winning\n• **Communicate** — Pings > typing. Call plays, not mistakes\n\nDiscord: xCrimsonLoL"},
];

const css=`@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}html{font-size:16px}body{background:#080810}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:#080810}::-webkit-scrollbar-thumb{background:#1e1e32;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#2a2a44}input,select,textarea,button{font-family:inherit}a{color:#60a5fa;text-decoration:none}a:hover{text-decoration:underline}img{-webkit-user-drag:none}
.card-hover{transition:border-color .2s,box-shadow .2s,transform .15s}.card-hover:hover{border-color:#2a2a44;box-shadow:0 4px 20px #0004;transform:translateY(-1px)}
.glow-red{box-shadow:0 0 20px #ef444422}.glow-blue{box-shadow:0 0 20px #3b82f622}.glow-gold{box-shadow:0 0 20px #c89b3c22}
.fade-in{animation:fadeIn .3s ease}@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.pulse{animation:pulse 2s infinite}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
.rank-badge{padding:3px 10px;border-radius:4px;font-size:11px;font-weight:700;letter-spacing:.5px}
.rank-iron{background:#8b6914;color:#fff}.rank-bronze{background:#8b5e3c;color:#fff}.rank-silver{background:#7c8b9a;color:#fff}.rank-gold{background:#c89b3c;color:#000}.rank-platinum{background:#25c49a;color:#000}.rank-emerald{background:#149b6a;color:#fff}.rank-diamond{background:#576cce;color:#fff}.rank-master{background:#9d48e0;color:#fff}.rank-grandmaster{background:#ef4444;color:#fff}.rank-challenger{background:#f0c060;color:#000}
.wr-bar{height:4px;border-radius:2px;margin-top:3px;overflow:hidden;background:#1e1e32}.wr-fill{height:100%;border-radius:2px;transition:width .5s ease}
`;
const C={background:"#12121e",border:"1px solid #1e1e32",borderRadius:10,padding:18,marginBottom:14};
const CT={fontSize:13,letterSpacing:2.5,textTransform:"uppercase",color:"#888",fontWeight:700,marginBottom:14,display:"flex",alignItems:"center",gap:10};
const I={background:"#0c0c16",border:"1px solid #1e1e32",color:"#e4e4e8",fontSize:14,outline:"none",borderRadius:6,padding:"10px 14px",width:"100%",fontFamily:"inherit"};
const B=(v)=>{const b={border:"1px solid #2a2a40",fontSize:12,letterSpacing:1.2,textTransform:"uppercase",fontWeight:700,padding:"10px 20px",borderRadius:6,cursor:"pointer",transition:"all .15s",fontFamily:"inherit"};return v==="p"?{...b,background:"linear-gradient(135deg,#ef4444,#991b1b)",borderColor:"#ef4444",color:"#fff"}:v==="g"?{...b,background:"transparent",borderColor:"#1e1e32",color:"#666"}:v==="gold"?{...b,background:"#c89b3c22",borderColor:"#c89b3c",color:"#f0c060"}:v==="blue"?{...b,background:"#3b82f622",borderColor:"#3b82f6",color:"#60a5fa"}:v==="red"?{...b,background:"#dc262622",borderColor:"#dc2626",color:"#f87171"}:{...b,background:"#1a1a2e",color:"#aaa"}};
const CI=(s=44)=>({width:s,height:s,objectFit:"cover",borderRadius:5,border:"2px solid #1e1e32",display:"block"});
const R={display:"flex",alignItems:"center",gap:10};
const NB=(a)=>({background:a?"#ef444412":"transparent",border:"none",color:a?"#ef4444":"#555",fontSize:13,fontWeight:700,letterSpacing:1.5,padding:"12px 20px",cursor:"pointer",borderBottom:a?"2px solid #ef4444":"2px solid transparent",fontFamily:"Rajdhani,sans-serif"});
const RB=(a)=>({padding:"9px 18px",borderRadius:6,border:`1px solid ${a?"#ef444444":"#1e1e32"}`,background:a?"#ef444418":"#12121e",color:a?"#ef4444":"#555",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flex:1,textAlign:"center"});
const BD={width:10,height:10,borderRadius:"50%",background:"#eab308",position:"absolute",top:-3,right:-3,border:"2px solid #12121e",zIndex:5};

export default function App(){
  const[auth,setAuth]=useState(null);const[ch,setCh]=useState([]);const[ver,setVer]=useState("");const[tab,setTab]=useState("scout");const[cfg,setCfg]=useState({coachPass:"crimson",teams:[],studentCode:"learn"});const[ld,setLd]=useState(true);
  useEffect(()=>{const s=document.createElement("style");s.textContent=css;document.head.appendChild(s);return()=>document.head.removeChild(s)},[]);
  useEffect(()=>{(async()=>{try{const v=(await(await fetch(`${DD}/api/versions.json`)).json())[0];setVer(v);setCh(Object.values((await(await fetch(`${DD}/cdn/${v}/data/en_US/champion.json`)).json()).data).map(c=>({id:c.id,name:c.name,key:c.key,image:c.image.full,tags:c.tags,title:c.title})).sort((a,b)=>a.name.localeCompare(b.name)))}catch(e){console.error(e)}})()},[]);
  useEffect(()=>{(async()=>{const c=await load("crimson-cfg",null);if(c)setCfg(c);setLd(false)})()},[]);
  const sC=useCallback(async c=>{setCfg(c);await store("crimson-cfg",c)},[]);
  const img=useCallback(id=>ver?`${DD}/cdn/${ver}/img/champion/${id}.png`:"",[ver]);
  const gc=useCallback(id=>ch.find(c=>c.id===id),[ch]);

  if(ld)return<div style={{background:"#080810",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Rajdhani,sans-serif"}}><div style={{textAlign:"center"}}><div style={{width:72,height:72,background:"linear-gradient(135deg,#ef4444,#991b1b)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:800,color:"#fff",margin:"0 auto 20px",boxShadow:"0 0 60px #ef444444"}}>C</div><div style={{fontSize:20,letterSpacing:6,fontWeight:700,color:"#ef4444"}}>CRIMSON</div><div style={{fontSize:12,color:"#444",letterSpacing:4,marginTop:4}}>LOADING v{VER}...</div></div></div>;
  if(!auth)return<Login cfg={cfg} onAuth={setAuth}/>;
  // Tekken Codex — full-page iframe
  if(auth.role==="tekken")return<div style={{height:"100vh",display:"flex",flexDirection:"column",background:"#0a0a10"}}>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:"8px 16px",background:"#12121e",borderBottom:"1px solid #1e1e32"}}>
      <div style={{fontSize:16,fontWeight:800,color:"#e63946",letterSpacing:2}}>🎮 TEKKEN CODEX</div>
      <div style={{flex:1}}/>
      <span style={{fontSize:11,color:"#555"}}>v{VER}</span>
      <button style={{...B("g"),padding:"5px 14px",fontSize:10}} onClick={()=>setAuth(null)}>LOGOUT</button>
    </div>
    <iframe src="/tekken/index.html" style={{flex:1,border:"none",width:"100%"}} title="Tekken Codex"/>
  </div>;

  // STUDENT now sees: draft, meta, counters, videos, guides
  const tabs=auth.role==="student"
    ?[{id:"draft",l:"⚔️ Draft"},{id:"meta",l:"🏆 Meta"},{id:"counters",l:"🎯 Counters"},{id:"videos",l:"🎬 Videos"},{id:"deaths",l:"💀 Deaths"},{id:"guides",l:"📖 Guides"}]
    :auth.role==="coach"
    ?[{id:"scout",l:"🔍 Scout"},{id:"draft",l:"⚔️ Draft"},{id:"meta",l:"🏆 Meta"},{id:"counters",l:"🎯 Counters"},{id:"builder",l:"🏗️ Builder"},{id:"tierlist",l:"📋 Tiers"},{id:"videos",l:"🎬 Videos"},{id:"schedule",l:"📅 Schedule"},{id:"deaths",l:"💀 Deaths"},{id:"notes",l:"📝 Notes"},{id:"guides",l:"📖 Guides"},{id:"teams",l:"⚙️ Teams"}]
    :auth.role==="teamcoach"
    ?[{id:"scout",l:"🔍 Scout"},{id:"draft",l:"⚔️ Draft"},{id:"meta",l:"🏆 Meta"},{id:"counters",l:"🎯 Counters"},{id:"builder",l:"🏗️ Builder"},{id:"tierlist",l:"📋 Tiers"},{id:"videos",l:"🎬 Videos"},{id:"schedule",l:"📅 Schedule"},{id:"deaths",l:"💀 Deaths"},{id:"notes",l:"📝 Notes"},{id:"guides",l:"📖 Guides"}]
    :[{id:"scout",l:"🔍 Scout"},{id:"draft",l:"⚔️ Draft"},{id:"meta",l:"🏆 Meta"},{id:"counters",l:"🎯 Counters"},{id:"builder",l:"🏗️ Builder"},{id:"tierlist",l:"📋 Tiers"},{id:"videos",l:"🎬 Videos"},{id:"schedule",l:"📅 Schedule"},{id:"deaths",l:"💀 Deaths"},{id:"guides",l:"📖 Guides"}];

  return<div style={{background:"#080810",color:"#e4e4e8",fontFamily:"Inter,Rajdhani,sans-serif",minHeight:"100vh",fontSize:15,paddingBottom:32}}>
    <header style={{background:"linear-gradient(180deg,#0a0a14,#080810)",borderBottom:"1px solid #ef444433",padding:"0 28px",height:58,display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(16px)"}}>
      <div style={R}><div style={{width:38,height:38,background:"linear-gradient(135deg,#ef4444,#991b1b)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:800,color:"#fff",boxShadow:"0 0 20px #ef444422"}}>C</div><div><div style={{fontSize:17,fontWeight:700,letterSpacing:3,color:"#fff",lineHeight:1}}>CRIMSON<span style={{color:"#ef4444"}}>'S</span> <span style={{fontSize:11,color:"#444"}}>v{VER}</span></div><div style={{fontSize:10,letterSpacing:2,color:"#555"}}>COACHING DRAFT TOOL · PATCH {PATCH}</div></div></div>
      <nav style={{display:"flex",gap:0,overflowX:"auto",maxWidth:"60vw"}}>{tabs.map(t=><button key={t.id} style={NB(tab===t.id)} onClick={()=>setTab(t.id)}>{t.l}</button>)}</nav>
      <div style={{...R,fontSize:12,flexShrink:0}}><span style={{color:auth.role==="coach"?"#ef4444":auth.role==="teamcoach"?"#f97316":auth.role==="player"?"#3b82f6":"#22c55e",fontWeight:600}}>{auth.role==="coach"?"◆ HEAD COACH":auth.role==="teamcoach"?`◆ COACH · ${auth.team}`:auth.role==="player"?`◆ ${auth.team}`:"◆ STUDENT"}</span><button style={{...B("g"),padding:"5px 14px",fontSize:10}} onClick={()=>setAuth(null)}>LOGOUT</button></div>
    </header>
    <div style={{padding:24,maxWidth:1800,margin:"0 auto"}}>
      {tab==="scout"&&<ScoutPage ch={ch} img={img} gc={gc} auth={auth}/>}
      {tab==="draft"&&<DraftPage ch={ch} img={img} gc={gc} auth={auth} cfg={cfg}/>}
      {tab==="meta"&&<MetaPage ch={ch} img={img} gc={gc}/>}
      {tab==="counters"&&<CountersPage ch={ch} img={img} gc={gc}/>}
      {tab==="builder"&&<BuilderPage ch={ch} img={img} gc={gc} auth={auth}/>}
      {tab==="tierlist"&&<TierListPage ch={ch} img={img} gc={gc} auth={auth} cfg={cfg}/>}
      {tab==="videos"&&<VideosPage auth={auth}/>}
      {tab==="schedule"&&<SchedulePage auth={auth}/>}
      {tab==="deaths"&&<DeathReviewPage auth={auth} ch={ch} img={img} gc={gc}/>}
      {tab==="notes"&&(auth.role==="coach"||auth.role==="teamcoach")&&<CoachNotesPage auth={auth} ch={ch} img={img} gc={gc}/>}
      {tab==="guides"&&<GuidesPage auth={auth}/>}
      {tab==="teams"&&auth.role==="coach"&&<TeamsPage cfg={cfg} sC={sC}/>}
    </div>
    <div style={{position:"fixed",bottom:0,left:0,right:0,height:26,background:"#0a0a14",borderTop:"1px solid #1a1a2e",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",fontSize:10,color:"#333",zIndex:50}}><span>Crimson's Coaching Draft Tool v{VER}</span><span>Patch {PATCH} · {ch.length} Champions</span><span>Discord: xCrimsonLoL</span></div>
  </div>;
}

function Login({cfg,onAuth}){const[p,setP]=useState("");const[e,setE]=useState("");const[m,setM]=useState("coach");
  const go=()=>{setE("");if(m==="coach"){if(p.toLowerCase()===(cfg.coachPass||"crimson").toLowerCase())onAuth({role:"coach"});else setE("Invalid")}else if(m==="teamcoach"){const t=(cfg.teams||[]).find(t=>t.coachPass?.toLowerCase()===p.toLowerCase());if(t)onAuth({role:"teamcoach",team:t.name});else setE("Invalid team coach password")}else if(m==="player"){const t=(cfg.teams||[]).find(t=>t.playerPass?.toLowerCase()===p.toLowerCase());if(t)onAuth({role:"player",team:t.name});else setE("Invalid")}else if(m==="tekken"){if(p.toLowerCase()==="tekken")onAuth({role:"tekken"});else setE("Invalid")}else{if(p.toLowerCase()===(cfg.studentCode||"learn").toLowerCase())onAuth({role:"student"});else setE("Invalid")}};
  return<div style={{background:"linear-gradient(160deg,#080810,#150a0a,#080810)",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter,Rajdhani,sans-serif"}}><div style={{textAlign:"center",width:420}}>
    <div style={{marginBottom:40}}><div style={{width:80,height:80,background:"linear-gradient(135deg,#ef4444,#991b1b)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,fontWeight:800,color:"#fff",margin:"0 auto 20px",boxShadow:"0 0 80px #ef444433"}}>C</div><div style={{fontSize:28,fontWeight:800,letterSpacing:6,color:"#fff"}}>CRIMSON<span style={{color:"#ef4444"}}>'S</span></div><div style={{fontSize:13,letterSpacing:4,color:"#555",marginTop:6}}>COACHING DRAFT TOOL</div><div style={{fontSize:11,color:"#333",marginTop:4}}>v{VER} · Patch {PATCH}</div></div>
    <div style={{display:"flex",gap:6,marginBottom:24,justifyContent:"center",flexWrap:"wrap"}}>{[["coach","🔴 Head Coach"],["teamcoach","🟠 Team Coach"],["player","🔵 Player"],["student","🟢 Student"],["tekken","🎮 Tekken"]].map(([k,l])=><button key={k} onClick={()=>{setM(k);setE("");setP("")}} style={{...B(m===k?"p":"g"),padding:"10px 20px",fontSize:12}}>{l}</button>)}</div>
    <input type="password" placeholder={m==="coach"?"Head Coach Password":m==="teamcoach"?"Team Coach Password":m==="player"?"Team Password":m==="tekken"?"Tekken Password":"Access Code"} value={p} onChange={ev=>setP(ev.target.value)} onKeyDown={ev=>ev.key==="Enter"&&go()} style={{...I,textAlign:"center",fontSize:17,letterSpacing:3,fontFamily:"monospace"}} autoFocus/>
    {e&&<div style={{color:"#ef4444",fontSize:13,marginTop:8,fontWeight:600}}>{e}</div>}
    <button onClick={go} style={{...B("p"),width:"100%",marginTop:20,padding:"14px 0",fontSize:16,letterSpacing:3}}>ENTER</button>
  </div></div>;
}

// ═══ SCOUT ═══════════════════════════════════════════════════════════════════
function ScoutPage({ch,img,gc,auth}){const[teams,setTeams]=useState([]);const[act,setAct]=useState(null);
  useEffect(()=>{(async()=>{const t=await load("crimson-enemies",[]);setTeams(t);if(t.length>0)setAct(0)})()},[]);
  const sv=async t=>{setTeams(t);await store("crimson-enemies",t)};
  const team=act!==null?teams[act]:null;
  return<div><div style={{...R,marginBottom:18,flexWrap:"wrap",gap:8}}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>🔍 ENEMY SCOUTING</div><div style={{flex:1}}/>{teams.map((t,i)=><button key={i} onClick={()=>setAct(i)} style={RB(act===i)}>{t.name}</button>)}<button style={B("p")} onClick={()=>{const n=[...teams,{name:`Enemy ${teams.length+1}`,players:ALL_ROLES.slice(0,5).map(r=>({name:"",role:r,riotId:"",region:"na1",champPool:[],rank:"",winRate:0,games:0,notes:""}))}];sv(n);setAct(n.length-1)}}>+ NEW</button></div>
    {!team?<div style={{...C,textAlign:"center",padding:60,color:"#444"}}>No enemies scouted<br/><button style={{...B("p"),marginTop:14}} onClick={()=>{const n=[{name:"Enemy 1",players:ROLES.map(r=>({name:"",role:r,riotId:"",region:"na1",champPool:[],rank:"",winRate:0,games:0,notes:""}))}];sv(n);setAct(0)}}>+ Create</button></div>
    :<div><div style={{...C,...R}}><input style={{...I,maxWidth:300,fontWeight:700,fontSize:17,background:"transparent",border:"none",borderBottom:"1px solid #1e1e32",borderRadius:0}} value={team.name} onChange={e=>{const t=[...teams];t[act]={...t[act],name:e.target.value};sv(t)}}/>
        {/* Multi.gg link */}
        {team.players.filter(p=>p.riotId).length>0&&<a href={`https://www.op.gg/multisearch/na?summoners=${team.players.filter(p=>p.riotId).map(p=>encodeURIComponent(p.riotId)).join(",")}`} target="_blank" rel="noopener" style={{background:"#3b82f611",border:"1px solid #3b82f633",color:"#3b82f6",fontSize:10,fontWeight:700,padding:"5px 12px",borderRadius:4}}>OP.GG Multi →</a>}
        <div style={{flex:1}}/><button style={{...B("g"),color:"#ef4444"}} onClick={()=>{const t=teams.filter((_,j)=>j!==act);sv(t);setAct(t.length>0?0:null)}}>DEL</button></div>
      {/* Scouting Legend */}
      <div style={{...C,padding:10,display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
        <span style={{fontSize:11,color:"#555",fontWeight:700,letterSpacing:1}}>LEGEND:</span>
        {[["best","Best/OTP","#ef4444"],["great","Great","#f97316"],["decent","Decent","#eab308"],["questionable","Questionable","#22c55e"],["stretch","Stretch","#3b82f6"]].map(([k,l,c])=><div key={k} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:"50%",background:c}}/><span style={{fontSize:11,color:"#888"}}>{l}</span></div>)}
        <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:"50%",background:"#eab308",border:"2px solid #12121e"}}/><span style={{fontSize:11,color:"#888"}}>Blind Pickable</span></div>
      </div>
      {team.players.map((p,i)=><PCard key={i} p={p} ch={ch} img={img} gc={gc} onChange={v=>{const t=[...teams];t[act].players[i]=v;sv(t)}}/>)}
      <button style={{...B("g"),width:"100%",borderStyle:"dashed"}} onClick={()=>{const t=[...teams];t[act].players.push({name:"",role:"Sub",riotId:"",region:"na1",champPool:[],rank:"",winRate:0,games:0,notes:""});sv(t)}}>+ ADD PLAYER</button>
    </div>}
  </div>;
}
function PCard({p,ch,img,gc,onChange}){const[exp,setExp]=useState(true);const[sa,setSa]=useState(false);const[cs,setCs]=useState("");
  const fl=ch.filter(c=>fuzzy(cs,c.name)&&!p.champPool.some(x=>x.id===c.id));
  const topChamp=p.champPool.length>0?p.champPool[0]:null;
  const splashBg=topChamp?`${DD}/cdn/img/champion/splash/${topChamp.id}_0.jpg`:"";
  return<div className="card-hover fade-in" style={{...C,overflow:"hidden",position:"relative"}}>
    {/* Splash background */}
    {splashBg&&exp&&<div style={{position:"absolute",top:0,left:0,right:0,height:80,background:`linear-gradient(180deg,rgba(8,8,16,0.2) 0%,#12121e 100%)`,overflow:"hidden",pointerEvents:"none"}}><img src={splashBg} style={{width:"100%",height:80,objectFit:"cover",opacity:.15}}/></div>}
    {/* Header */}
    <div style={{...R,cursor:"pointer",position:"relative",zIndex:2}} onClick={()=>setExp(!exp)}>
      <div style={{width:44,height:44,borderRadius:8,background:"linear-gradient(135deg,#1e1e32,#12121e)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid #2a2a40"}}>
        <RIcon role={p.role||"Top"} size={22} color={exp?"#ef4444":"#555"}/>
      </div>
      <select value={p.role||"Top"} onClick={e=>e.stopPropagation()} onChange={e=>onChange({...p,role:e.target.value})} style={{...I,width:100,padding:"6px 8px",fontSize:12,background:"#0c0c16"}}>{ALL_ROLES.map(r=><option key={r} value={r}>{r}</option>)}</select>
      <div style={{flex:1}}>
        <div style={R}><input style={{...I,fontWeight:700,fontSize:16,padding:"4px 8px",maxWidth:240,background:"transparent",border:"none"}} value={p.name} placeholder="Player Name" onClick={e=>e.stopPropagation()} onChange={e=>onChange({...p,name:e.target.value})}/>
          {p.rank&&<span style={{padding:"3px 10px",borderRadius:4,fontSize:11,fontWeight:700,background:(rankBg(p.rank)||"#333")+"22",color:rankBg(p.rank)||"#888",border:`1px solid ${rankBg(p.rank)||"#333"}44`}}>{p.rank}</span>}
        </div>
        <div style={{display:"flex",gap:14,fontSize:12,color:"#555",marginTop:3,alignItems:"center"}}>
          {p.riotId&&<span style={{color:"#888"}}>{p.riotId}</span>}
          {p.games>0&&<span>{p.games} games</span>}
          {p.winRate>0&&<><span style={{color:p.winRate>=55?"#22c55e":p.winRate>=50?"#eab308":"#ef4444",fontWeight:700}}>{p.winRate}% WR</span>
            <div className="wr-bar" style={{width:60}}><div className="wr-fill" style={{width:`${p.winRate}%`,background:p.winRate>=55?"#22c55e":p.winRate>=50?"#eab308":"#ef4444"}}/></div></>}
          <span style={{fontSize:10,color:"#333"}}>{p.champPool.length} champs</span>
        </div>
      </div>
      {p.riotId&&<div style={{...R,gap:5}}>{[["OP.GG","#3b82f6",`https://www.op.gg/summoners/${p.region||"na"}/${encodeURIComponent(p.riotId.replace("#","-"))}`],["U.GG","#22c55e",`https://u.gg/lol/profile/${p.region||"na1"}/${encodeURIComponent(p.riotId.replace("#","-"))}/overview`],["XDX","#f97316",`https://xdx.gg/${encodeURIComponent(p.riotId.replace("#","-").toLowerCase())}`]].map(([l,c,u])=><a key={l} href={u} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} style={{background:`${c}11`,border:`1px solid ${c}33`,color:c,fontSize:10,fontWeight:700,padding:"5px 12px",borderRadius:4,transition:"all .15s"}}>{l}</a>)}</div>}
      <span style={{color:"#333",fontSize:16,transition:"transform .2s",transform:exp?"rotate(0)":"rotate(-90deg)"}}>{exp?"▾":"▸"}</span>
    </div>
    {/* Expanded content */}
    {exp&&<div className="fade-in" style={{marginTop:14,position:"relative",zIndex:2}}>
      <div style={{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"}}><input style={{...I,maxWidth:220}} placeholder="Riot ID (Name#TAG)" value={p.riotId||""} onChange={e=>onChange({...p,riotId:e.target.value})}/><RankSelect value={p.rank} onChange={v=>onChange({...p,rank:v})}/><input style={{...I,maxWidth:90}} placeholder="Games" type="number" value={p.games||""} onChange={e=>onChange({...p,games:parseInt(e.target.value)||0})}/><input style={{...I,maxWidth:90}} placeholder="WR%" type="number" value={p.winRate||""} onChange={e=>onChange({...p,winRate:parseInt(e.target.value)||0})}/><select style={{...I,maxWidth:100}} value={p.region||"na1"} onChange={e=>onChange({...p,region:e.target.value})}><option value="na1">NA</option><option value="euw1">EUW</option><option value="kr">KR</option><option value="br1">BR</option><option value="oc1">OCE</option></select></div>
      <div style={R}><span style={{fontSize:12,letterSpacing:2,color:"#555",fontWeight:700}}>CHAMPION POOL ({p.champPool.length})</span><div style={{flex:1}}/><button style={{...B("g"),padding:"5px 14px",fontSize:10}} onClick={()=>setSa(!sa)}>{sa?"CLOSE":"+ ADD"}</button></div>
      {sa&&<div className="fade-in" style={{margin:"8px 0",background:"#0c0c16",borderRadius:8,padding:12,border:"1px solid #1e1e32"}}><input style={{...I,marginBottom:8}} placeholder="Search champion..." value={cs} onChange={e=>setCs(e.target.value)} autoFocus/><div style={{display:"flex",flexWrap:"wrap",gap:4,maxHeight:130,overflowY:"auto"}}>{fl.slice(0,60).map(c=><img key={c.id} src={img(c.id)} title={c.name} style={{...CI(36),cursor:"pointer",opacity:.5,transition:"all .15s"}} onClick={()=>{onChange({...p,champPool:[...p.champPool,{id:c.id,tag:"",blind:false,games:0}]});setCs("")}} onMouseOver={e=>{e.target.style.opacity=1;e.target.style.transform="scale(1.1)"}} onMouseOut={e=>{e.target.style.opacity=.5;e.target.style.transform="scale(1)"}}/>)}</div></div>}
      {p.champPool.length===0?<div style={{padding:24,textAlign:"center",border:"2px dashed #1e1e32",borderRadius:8,marginTop:10,color:"#333"}}><div style={{fontSize:24,marginBottom:4}}>🎮</div>No champions scouted — click + ADD above</div>
      :<div style={{display:"flex",flexWrap:"wrap",gap:10,marginTop:10}}>{p.champPool.sort((a,b)=>{const o={best:0,great:1,decent:2,questionable:3,stretch:4,"":5};return(o[a.tag]??5)-(o[b.tag]??5)}).map(cp=>{const c=gc(cp.id);if(!c)return null;return<div key={cp.id} className="card-hover" style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:4,borderRadius:6,background:"#0c0c16",border:`1px solid ${TGC[cp.tag]||"#1e1e32"}22`}}>
        <div style={{position:"relative"}}><img src={img(c.id)} style={{...CI(54),borderColor:TGC[cp.tag]||"#1e1e32",transition:"transform .15s"}} onMouseOver={e=>e.target.style.transform="scale(1.05)"} onMouseOut={e=>e.target.style.transform="scale(1)"}/>{cp.blind&&<div style={BD}/>}<button onClick={()=>onChange({...p,champPool:p.champPool.filter(x=>x.id!==cp.id)})} style={{position:"absolute",top:-5,right:-5,width:16,height:16,background:"#12121e",border:"1px solid #555",borderRadius:"50%",color:"#ccc",fontSize:9,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0,zIndex:10}}>×</button></div>
        <div style={{fontSize:10,color:"#aaa",maxWidth:54,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:500}}>{c.name}</div>
        {cp.tag&&<div style={{fontSize:8,color:TGC[cp.tag],fontWeight:700,letterSpacing:.5,textTransform:"uppercase"}}>{cp.tag}</div>}
        <input type="number" value={cp.games||""} placeholder="G" onChange={e=>onChange({...p,champPool:p.champPool.map(x=>x.id===cp.id?{...x,games:parseInt(e.target.value)||0}:x)})} style={{width:36,background:"#0c0c16",border:"1px solid #1e1e32",color:"#888",fontSize:9,textAlign:"center",borderRadius:3,padding:"1px 2px",fontFamily:"inherit"}} title="Games played"/>
        <div style={{display:"flex",gap:3}}>{["best","great","decent","questionable","stretch"].map(t=><div key={t} onClick={()=>onChange({...p,champPool:p.champPool.map(x=>x.id===cp.id?{...x,tag:x.tag===t?"":t}:x)})} style={{width:8,height:8,borderRadius:"50%",background:TGC[t],cursor:"pointer",opacity:cp.tag===t?1:.15,transition:"opacity .15s"}}/>)}<div onClick={()=>onChange({...p,champPool:p.champPool.map(x=>x.id===cp.id?{...x,blind:!x.blind}:x)})} style={{width:8,height:8,borderRadius:"50%",background:"#eab308",cursor:"pointer",opacity:cp.blind?1:.15,marginLeft:3}} title="Blind pickable"/></div>
      </div>})}</div>}
      <textarea style={{...I,marginTop:12,minHeight:44,resize:"vertical",fontSize:12}} placeholder="Scouting notes, tendencies, playstyle..." value={p.notes||""} onChange={e=>onChange({...p,notes:e.target.value})}/>
    </div>}
  </div>;
}

// ═══ DRAFT (with labels, notes, team assignment, live counter suggestions) ═══
function DraftPage({ch,img,gc,auth,cfg}){
  const[ph,setPh]=useState("setup");const[mode,setMode]=useState("normal");const[slots,setSlots]=useState(Array(20).fill(null));const[cur,setCur]=useState(0);const[se,setSe]=useState("");const[stg,setStg]=useState(null);const[cR,setCR]=useState("Mid");const[bN,setBN]=useState("BLUE");const[rN,setRN]=useState("RED");const[dis,setDis]=useState([]);const[fear,setFear]=useState([]);const[gn,setGn]=useState(1);const[fmt,setFmt]=useState(3);const[hist,setHist]=useState([]);const[showH,setShowH]=useState(false);const[dS,setDS]=useState("");const[showD,setShowD]=useState(false);const[showCt,setShowCt]=useState(true);const[ssFile,setSsFile]=useState(null);
  // NEW: label, notes, team assignment, visibility
  const[label,setLabel]=useState("Scrim");const[dNotes,setDNotes]=useState("");const[assignTeam,setAssignTeam]=useState("General");const[visibility,setVisibility]=useState("general");
  const[draftTls,setDraftTls]=useState({});const[draftTlKey,setDraftTlKey]=useState("");
  useEffect(()=>{(async()=>{setHist(await load("crimson-draft-history",[]))})()},[]);
  useEffect(()=>{(async()=>{
    const keys=auth.role==="coach"?["crimson-tl-coach",...(cfg?.teams||[]).map(t=>`crimson-tl-${t.name}`)]:[auth.team?`crimson-tl-${auth.team}`:"crimson-tl-coach"];
    const merged={};for(const sk of keys){const t=await load(sk,{});Object.entries(t).forEach(([k,v])=>{const label=sk==="crimson-tl-coach"?"Coach":sk.replace("crimson-tl-","");merged[`${label} · ${k}`]=v})}
    setDraftTls(merged);const dk=Object.keys(merged);if(dk.length>0)setDraftTlKey(dk[0]);
  })()},[auth]);
  const draftTlNames=Object.keys(draftTls);const draftTl=draftTlKey?draftTls[draftTlKey]:null;
  // Series tracking
  const seriesGames=hist.filter(d=>d.blue===bN&&d.red===rN&&d.format===fmt).slice(0,fmt);
  const bWins=seriesGames.filter(d=>d.winner===bN).length;
  const rWins=seriesGames.filter(d=>d.winner===rN).length;
  const seriesOver=bWins>fmt/2||rWins>fmt/2;
  const used=slots.filter(Boolean);const step=DS[cur];const live=ph==="drafting"&&cur<20;const allB=[...dis,...fear,...used];
  const lock=id=>{if(!live||used.includes(id))return;const ns=[...slots];ns[cur]=id;setSlots(ns);setCur(cur+1);setStg(null);if(cur+1>=20)setPh("complete")};
  const skip=()=>{if(!live||step?.a!=="ban")return;const ns=[...slots];ns[cur]="NONE";setSlots(ns);setCur(cur+1);setStg(null);if(cur+1>=20)setPh("complete")};
  const undo=()=>{if(cur<=0)return;const ns=[...slots];ns[cur-1]=null;setSlots(ns);setCur(cur-1);setStg(null);if(ph==="complete")setPh("drafting")};
  const reset=()=>{setPh("setup");setSlots(Array(20).fill(null));setCur(0);setStg(null);setSsFile(null);setDNotes("")};
  const handleSS=async e=>{const f=e.target.files?.[0];if(f){setSsFile(await fileToB64(f))}};

  const saveDraft=async(winner)=>{const d={id:Date.now(),patch:PATCH,date:new Date().toISOString(),blue:bN,red:rN,mode,game:gn,format:fmt,slots:[...slots],winner,fearless:[...fear],disabled:[...dis],screenshot:ssFile,label,notes:dNotes,team:assignTeam,visibility};const nh=[d,...hist];setHist(nh);await store("crimson-draft-history",nh);if(mode==="fearless"){const pks=slots.filter((s,i)=>s&&s!=="NONE"&&DS[i].a==="pick");setFear(f=>[...f,...pks])}setGn(g=>g+1);setSlots(Array(20).fill(null));setCur(0);setStg(null);setPh("drafting");setSsFile(null);setDNotes("")};
  const startD=()=>{setPh("drafting");setCur(0);setSlots(Array(20).fill(null));setStg(null);if(mode!=="fearless")setFear([])};
  const filt=ch.filter(c=>fuzzy(se,c.name)&&!allB.includes(c.id)&&c.id!=="NONE");
  const bPS=[6,9,10,17,18],rPS=[7,8,11,16,19];
  const bP=bPS.map(i=>slots[i]).filter(s=>s&&s!=="NONE"),rP=rPS.map(i=>slots[i]).filter(s=>s&&s!=="NONE");

  // LIVE COUNTER SUGGESTIONS: show counters for last picked enemy champ
  const lastPick=cur>0?slots[cur-1]:null;const lastPickIsEnemy=lastPick&&lastPick!=="NONE"&&cur>0&&DS[cur-1]?.a==="pick";
  const liveCtrRole=DS[cur]?.t==="blue"?"Mid":"Mid"; // default, user can change via cR
  const liveCtrs=lastPickIsEnemy?(COUNTERS[lastPick]?.[cR]||[]):[];

  // Filter drafts by team visibility
  const visibleHist=hist.filter(d=>{
    if(auth.role==="coach")return true;
    if(d.visibility==="general")return true;
    if(auth.team&&d.team===auth.team)return true;
    return false;
  });

  if(showH)return<DraftHist hist={visibleHist} setHist={setHist} fullHist={hist} img={img} gc={gc} onBack={()=>setShowH(false)} auth={auth}/>;

  if(ph==="setup")return<div style={{textAlign:"center",padding:50}}>
    <div style={{fontSize:22,letterSpacing:6,fontWeight:800,color:"#ef4444",marginBottom:10}}>⚔️ DRAFT TOOL</div>
    <div style={{fontSize:12,color:"#555",marginBottom:28}}>Patch {PATCH} · v{VER}</div>
    <div style={{display:"flex",gap:18,justifyContent:"center",marginBottom:28}}><input style={{...I,maxWidth:200,textAlign:"center",fontWeight:700,fontSize:15}} placeholder="Blue Team" value={bN} onChange={e=>setBN(e.target.value)}/><span style={{color:"#333",fontSize:20,alignSelf:"center"}}>VS</span><input style={{...I,maxWidth:200,textAlign:"center",fontWeight:700,fontSize:15}} placeholder="Red Team" value={rN} onChange={e=>setRN(e.target.value)}/></div>
    {/* Label + Mode + Format */}
    <div style={{display:"flex",gap:20,justifyContent:"center",marginBottom:22,flexWrap:"wrap"}}>
      <div><div style={{...CT,justifyContent:"center",marginBottom:6}}>LABEL</div><div style={{display:"flex",gap:6}}>{DRAFT_LABELS.map(l=><button key={l} onClick={()=>setLabel(l)} style={RB(label===l)}>{l}</button>)}</div></div>
      <div><div style={{...CT,justifyContent:"center",marginBottom:6}}>MODE</div><div style={{display:"flex",gap:6}}>{[["normal","Normal"],["fearless","Fearless"],["ironman","Ironman"]].map(([k,l])=><button key={k} onClick={()=>setMode(k)} style={RB(mode===k)}>{l}</button>)}</div></div>
      <div><div style={{...CT,justifyContent:"center",marginBottom:6}}>FORMAT</div><div style={{display:"flex",gap:6}}>{[1,3,5].map(f=><button key={f} onClick={()=>setFmt(f)} style={{...B(fmt===f?"gold":"g"),padding:"9px 28px",fontSize:14}}>BO{f}</button>)}</div></div>
    </div>
    {/* Team assignment + visibility */}
    <div style={{...C,maxWidth:540,margin:"0 auto",textAlign:"left"}}>
      <div style={{display:"flex",gap:12,marginBottom:12}}>
        <div style={{flex:1}}><label style={{fontSize:11,color:"#555",fontWeight:700}}>ASSIGN TO TEAM</label><select style={I} value={assignTeam} onChange={e=>setAssignTeam(e.target.value)}><option value="General">General (all)</option>{(cfg.teams||[]).map(t=><option key={t.name} value={t.name}>{t.name}</option>)}</select></div>
        <div style={{flex:1}}><label style={{fontSize:11,color:"#555",fontWeight:700}}>VISIBILITY</label><select style={I} value={visibility} onChange={e=>setVisibility(e.target.value)}><option value="general">Everyone can see</option><option value="team-only">Team only</option></select></div>
      </div>
      <div style={{...R}}><span style={{...CT,margin:0}}>DISABLED ({dis.length})</span><div style={{flex:1}}/><button style={{...B("g"),fontSize:10,padding:"4px 12px"}} onClick={()=>setShowD(!showD)}>{showD?"CLOSE":"+ DISABLE"}</button></div>
      {showD&&<div style={{marginTop:8}}><input style={{...I,marginBottom:8}} placeholder="Search..." value={dS} onChange={e=>setDS(e.target.value)}/><div style={{display:"flex",flexWrap:"wrap",gap:4,maxHeight:120,overflowY:"auto"}}>{ch.filter(c=>fuzzy(dS,c.name)&&!dis.includes(c.id)).slice(0,50).map(c=><img key={c.id} src={img(c.id)} title={c.name} style={{...CI(32),cursor:"pointer",opacity:.6}} onClick={()=>setDis(d=>[...d,c.id])} onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=.6}/>)}</div></div>}
      <div style={{display:"flex",flexWrap:"wrap",gap:4,marginTop:8}}>{dis.map(id=><img key={id} src={img(id)} style={{...CI(32),filter:"grayscale(1)",opacity:.5,cursor:"pointer"}} onClick={()=>setDis(d=>d.filter(x=>x!==id))}/>)}</div>
    </div>
    <div style={{display:"flex",gap:14,justifyContent:"center",marginTop:28}}><button style={{...B("p"),padding:"16px 48px",fontSize:15}} onClick={startD}>START DRAFT</button><button style={B("g")} onClick={()=>setShowH(true)}>📜 HISTORY</button></div>
  </div>;

  // ── Active Draft ──
  return<div style={{display:"flex",gap:0,height:"calc(100vh - 110px)",overflow:"hidden"}}>
    {/* Blue Picks */}
    <div style={{width:100,flexShrink:0,background:"#0a0a14",borderRight:"1px solid #3b82f622",display:"flex",flexDirection:"column",padding:8,gap:5}}>
      <div style={{fontSize:11,fontWeight:800,color:"#3b82f6",letterSpacing:2,textAlign:"center",padding:"6px 0"}}>{bN}</div>
      {bPS.map((si,i)=>{const id=slots[si];const c=id&&id!=="NONE"?gc(id):null;const ic=cur===si;return<div key={si} style={{border:`2px solid ${ic?"#c89b3c":"#3b82f633"}`,borderRadius:6,background:ic?"#c89b3c08":"#0c0c16",height:74,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>{c?<><img src={img(c.id)} style={{width:56,height:56,objectFit:"cover",borderRadius:4}}/><div style={{fontSize:9,color:"#3b82f6",fontWeight:600}}>{c.name}</div></>:ic?<span style={{fontSize:18,color:"#c89b3c"}}>?</span>:<div style={{fontSize:13,color:"#3b82f644",fontWeight:800}}>B{i+1}</div>}</div>})}
    </div>
    {/* Center */}
    <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 14px",background:"#0a0a0f",borderBottom:"1px solid #1a1a2e",flexShrink:0}}>
        <span style={{fontSize:12,color:"#555"}}>G{gn} · {label} · {mode.toUpperCase()} · BO{fmt}</span>
        {/* Series score */}
        {fmt>1&&<div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:14,fontWeight:800,color:"#3b82f6"}}>{bWins}</span><span style={{fontSize:10,color:"#333"}}>—</span><span style={{fontSize:14,fontWeight:800,color:"#ef4444"}}>{rWins}</span>{seriesOver&&<span style={{fontSize:10,color:"#c89b3c",fontWeight:700}}>SERIES OVER</span>}</div>}
        {live&&<span style={{fontSize:13,fontWeight:700,color:step.t==="blue"?"#3b82f6":"#ef4444",letterSpacing:2}}>{(step.t==="blue"?bN:rN)} {step.a==="ban"?"BAN":"PICK"}</span>}
        {ph==="complete"&&<span style={{fontSize:14,fontWeight:800,color:"#c89b3c"}}>COMPLETE</span>}
        <div style={{display:"flex",gap:5}}><button style={{...B("g"),padding:"4px 10px",fontSize:10}} onClick={undo}>UNDO</button><button style={{...B("g"),padding:"4px 10px",fontSize:10}} onClick={reset}>RESET</button><button style={{...B("g"),padding:"4px 10px",fontSize:10}} onClick={()=>setShowH(true)}>📜</button><button style={{...B("g"),padding:"4px 10px",fontSize:10}} onClick={()=>setShowCt(!showCt)}>🎯</button></div>
      </div>
      {/* Bans */}
      <div style={{display:"flex",justifyContent:"space-between",padding:"6px 14px",background:"#08080c",borderBottom:"1px solid #1a1a2e",flexShrink:0}}>
        <div style={{display:"flex",gap:4}}>{[0,2,4,13,15].map(si=><DS2 key={si} id={slots[si]} img={img} gc={gc} isCur={cur===si} ban t="blue" s={36}/>)}</div>
        <div style={{display:"flex",gap:4}}>{[1,3,5,12,14].map(si=><DS2 key={si} id={slots[si]} img={img} gc={gc} isCur={cur===si} ban t="red" s={36}/>)}</div>
      </div>
      {mode==="fearless"&&fear.length>0&&<div style={{display:"flex",gap:3,alignItems:"center",padding:"4px 14px",background:"#ef444408",borderBottom:"1px solid #ef444422",flexShrink:0,flexWrap:"wrap"}}><span style={{fontSize:9,color:"#ef4444",fontWeight:700}}>FEARLESS:</span>{fear.map(id=>{const c=gc(id);return c?<img key={id} src={img(id)} style={{width:22,height:22,borderRadius:3,filter:"grayscale(1)",opacity:.4}}/>:null})}</div>}
      {/* Live counter suggestion banner */}
      {live&&lastPickIsEnemy&&liveCtrs.length>0&&<div style={{display:"flex",gap:6,alignItems:"center",padding:"6px 14px",background:"#22c55e08",borderBottom:"1px solid #22c55e22",flexShrink:0,overflowX:"auto"}}>
        <span style={{fontSize:10,color:"#22c55e",fontWeight:700,flexShrink:0}}>COUNTER {gc(lastPick)?.name?.toUpperCase()} ({cR}):</span>
        {[...liveCtrs].sort((a,b)=>a.localeCompare(b)).filter(id=>!allB.includes(id)).slice(0,6).map(id=>{const c=gc(id);return c?<div key={id} style={{display:"flex",alignItems:"center",gap:3,flexShrink:0}}><img src={img(c.id)} style={CI(24)}/><span style={{fontSize:10,color:"#ccc"}}>{c.name}</span></div>:null})}
        <a href={`https://u.gg/lol/champions/${lastPick.toLowerCase()}/counter`} target="_blank" rel="noopener" style={{fontSize:9,color:"#22c55e",flexShrink:0,marginLeft:"auto"}}>U.GG →</a>
      </div>}
      {stg&&<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:10,background:"#c89b3c11",borderBottom:"1px solid #c89b3c44",flexShrink:0}}><img src={img(stg)} style={CI(44)}/><span style={{fontSize:16,fontWeight:800,color:"#c89b3c",letterSpacing:3}}>{gc(stg)?.name?.toUpperCase()}</span><button style={B("gold")} onClick={()=>lock(stg)}>LOCK IN</button>{step?.a==="ban"&&<button style={{...B("g"),padding:"6px 14px"}} onClick={skip}>⊘ NO BAN</button>}<button style={{...B("g"),padding:"6px 14px"}} onClick={()=>setStg(null)}>✕</button></div>}
      {live&&<div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",padding:"8px 10px"}}>
        <div style={R}><input style={{...I,flex:1}} placeholder="Search champion..." value={se} onChange={e=>setSe(e.target.value)} autoFocus/>{step?.a==="ban"&&!stg&&<button style={{...B("g"),whiteSpace:"nowrap"}} onClick={skip}>⊘ NO BAN</button>}</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(52px,1fr))",gap:3,overflowY:"auto",flex:1,alignContent:"start",padding:"6px 0"}}>{filt.map(c=><div key={c.id} style={{cursor:"pointer"}} onClick={()=>setStg(c.id)}><img src={img(c.id)} title={c.name} style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:4,border:`2px solid ${stg===c.id?"#c89b3c":"#111"}`,display:"block"}}/></div>)}</div>
      </div>}
      {/* Draft Complete */}
      {ph==="complete"&&<div style={{flex:1,overflowY:"auto",padding:24}}>
        <div style={{textAlign:"center",marginBottom:20}}><div style={{fontSize:18,fontWeight:800,color:"#c89b3c",letterSpacing:3}}>DRAFT COMPLETE</div><div style={{fontSize:13,color:"#888",marginTop:6}}>Who won?</div>
          <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:10}}><button style={B("blue")} onClick={()=>saveDraft(bN)}>🔵 {bN}</button><button style={B("red")} onClick={()=>saveDraft(rN)}>🔴 {rN}</button><button style={B("g")} onClick={()=>saveDraft(null)}>SKIP</button></div>
        </div>
        <div style={{maxWidth:500,margin:"0 auto"}}>
          <div style={{fontSize:11,color:"#555",fontWeight:700,marginBottom:6}}>📸 UPLOAD SCREENSHOT</div>
          <input type="file" accept="image/*" onChange={handleSS} style={{fontSize:12,color:"#888",marginBottom:8}}/>
          {ssFile&&<img src={ssFile} style={{width:"100%",borderRadius:8,marginBottom:12,border:"1px solid #1e1e32",maxHeight:300,objectFit:"contain"}}/>}
          <div style={{fontSize:11,color:"#555",fontWeight:700,marginBottom:6}}>📝 COACH NOTES / FEEDBACK</div>
          <textarea style={{...I,minHeight:80,resize:"vertical"}} placeholder="Draft analysis, feedback, things to work on..." value={dNotes} onChange={e=>setDNotes(e.target.value)}/>
        </div>
      </div>}
    </div>
    {/* Red Picks */}
    <div style={{width:100,flexShrink:0,background:"#0a0a14",borderLeft:"1px solid #ef444422",display:"flex",flexDirection:"column",padding:8,gap:5}}>
      <div style={{fontSize:11,fontWeight:800,color:"#ef4444",letterSpacing:2,textAlign:"center",padding:"6px 0"}}>{rN}</div>
      {rPS.map((si,i)=>{const id=slots[si];const c=id&&id!=="NONE"?gc(id):null;const ic=cur===si;return<div key={si} style={{border:`2px solid ${ic?"#c89b3c":"#ef444433"}`,borderRadius:6,background:ic?"#c89b3c08":"#0c0c16",height:74,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>{c?<><img src={img(c.id)} style={{width:56,height:56,objectFit:"cover",borderRadius:4}}/><div style={{fontSize:9,color:"#ef4444",fontWeight:600}}>{c.name}</div></>:ic?<span style={{fontSize:18,color:"#c89b3c"}}>?</span>:<div style={{fontSize:13,color:"#ef444444",fontWeight:800}}>R{i+1}</div>}</div>})}
    </div>
    {/* Counter sidebar */}
    {showCt&&<div style={{width:260,flexShrink:0,background:"#0a0a0f",borderLeft:"1px solid #1a1a2e",padding:10,overflowY:"auto"}}>
      <div style={{fontSize:11,fontWeight:700,color:"#ef4444",marginBottom:8}}>🎯 COUNTERS</div>
      <div style={{display:"flex",gap:3,marginBottom:8,flexWrap:"wrap"}}>{ROLES.map(r=><button key={r} onClick={()=>setCR(r)} style={{background:cR===r?"#ef444418":"transparent",border:`1px solid ${cR===r?"#ef444444":"#1e1e32"}`,color:cR===r?"#ef4444":"#444",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:4,cursor:"pointer",fontFamily:"inherit"}}>{r}</button>)}</div>

      {/* Show counters for EVERY picked champion */}
      {[...bP,...rP].map(champId=>{if(!champId)return null;const c=gc(champId);if(!c)return null;
        const ctrs=(COUNTERS[champId]?.[cR]||[]).slice().sort((a,b)=>a.localeCompare(b)).filter(id=>!allB.includes(id));
        if(ctrs.length===0)return null;
        return<div key={champId} style={{background:"#12121e",border:"1px solid #1e1e32",borderRadius:6,padding:8,marginBottom:6}}>
          <div style={{...R,marginBottom:4}}><img src={img(champId)} style={CI(22)}/><span style={{fontSize:11,fontWeight:700,color:"#fff"}}>{c.name}</span><span style={{fontSize:9,color:"#555",marginLeft:"auto"}}>{cR}</span></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:3}}>{ctrs.slice(0,8).map(id=>{const x=gc(id);return x?<div key={id} style={{display:"flex",alignItems:"center",gap:3,padding:"2px 4px",background:"#0c0c16",borderRadius:3,border:"1px solid #1e1e32"}}><img src={img(x.id)} style={CI(18)}/><span style={{fontSize:9,color:"#ccc"}}>{x.name}</span></div>:null})}</div>
          <a href={`https://u.gg/lol/champions/${champId.toLowerCase()}/counter?role=${cR.toLowerCase()}`} target="_blank" rel="noopener" style={{fontSize:8,color:"#22c55e",display:"block",marginTop:4}}>Full counters on U.GG →</a>
        </div>})}

      {/* Builds for all picked champs */}
      <div style={{borderTop:"1px solid #1e1e32",paddingTop:8,marginTop:4}}><div style={{fontSize:10,fontWeight:700,color:"#22c55e",marginBottom:6}}>🔗 BUILDS</div>{[...bP,...rP].map(id=>{const c=gc(id);if(!c)return null;return<div key={id} style={{marginBottom:5}}>
        <div style={{...R,marginBottom:2}}><img src={img(id)} style={CI(18)}/><span style={{fontSize:11,fontWeight:600,flex:1}}>{c.name}</span></div>
        <div style={{display:"flex",gap:3,flexWrap:"wrap",paddingLeft:28}}>{[["U.GG","#22c55e",`https://u.gg/lol/champions/${c.id.toLowerCase()}/build`],["OP.GG","#3b82f6",`https://www.op.gg/champions/${c.id.toLowerCase()}`],["Moba","#8b5cf6",`https://mobalytics.gg/lol/champions/${c.id.toLowerCase()}/build`],["CS","#f97316",`https://www.counterstats.net/league-of-legends/${c.name.toLowerCase().replace(/['\s]/g,"-")}`]].map(([l,cl,u])=><a key={l} href={u} target="_blank" rel="noopener" style={{fontSize:8,color:cl,fontWeight:700,padding:"1px 4px",background:`${cl}11`,borderRadius:2}}>{l}</a>)}</div>
      </div>})}</div>

      {/* Cycling Tier List Reference */}
      {draftTlNames.length>0&&<div style={{borderTop:"1px solid #1e1e32",paddingTop:8,marginTop:8}}>
        <div style={{marginBottom:6}}>
          <select value={draftTlKey} onChange={e=>setDraftTlKey(e.target.value)} style={{...I,padding:"4px 6px",fontSize:10,width:"100%"}}>
            {draftTlNames.map(n=><option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        {draftTl&&Object.keys(draftTl.tiers||{}).map(tier=>{const ids=(draftTl.tiers[tier]||[]);return ids.length>0?<div key={tier} style={{display:"flex",gap:2,alignItems:"center",marginBottom:3,flexWrap:"wrap"}}><span style={{fontSize:9,fontWeight:800,color:TC[tier]||"#8b5cf6",width:20,flexShrink:0}}>{tier.length>3?tier.slice(0,3):tier}</span><div style={{display:"flex",gap:1,flexWrap:"wrap"}}>{ids.map(id=>{const c=gc(id);return c?<img key={id} src={img(c.id)} style={CI(16)} title={c.name}/>:null})}</div></div>:null})}
      </div>}
    </div>}
  </div>;
}
function DS2(props) {
  const {id, img, gc, isCur, ban, t, s} = props;
  const sz = s || 40;
  const ch = id && id !== "NONE" ? gc(id) : null;
  const none = id === "NONE";
  const bc = isCur ? "#c89b3c" : t === "blue" ? "#3b82f644" : "#ef444444";
  return <div style={{width:sz,height:sz,border:`2px solid ${bc}`,borderRadius:4,background:isCur?"#c89b3c08":"#0c0c16",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",flexShrink:0}}>
    {ch ? <>
      <img src={img(ch.id)} style={{width:"100%",height:"100%",objectFit:"cover",filter:ban?"grayscale(1) brightness(.4)":""}}/>
      {ban && <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:sz>32?14:10,color:"#ef4444"}}>✕</div>}
    </> : none ? <span style={{fontSize:8,color:"#555"}}>⊘</span>
    : isCur ? <span style={{fontSize:12,color:"#c89b3c"}}>?</span>
    : <span style={{color:"#111"}}>+</span>}
  </div>;
}

// ═══ DRAFT HISTORY (bans shown, screenshot upload for past drafts) ═══════════
function DraftHist({hist,setHist,fullHist,img,gc,onBack,auth}){const[exp,setExp]=useState(null);const[noteEdit,setNoteEdit]=useState({});
  const del=async i=>{const id=hist[i]?.id;const n=fullHist.filter(d=>d.id!==id);setHist(n);await store("crimson-draft-history",n)};
  const updateNote=async(i,note)=>{const id=hist[i]?.id;const n=fullHist.map(d=>d.id===id?{...d,notes:note}:d);setHist(n);await store("crimson-draft-history",n)};
  const uploadSS=async(i,e)=>{const f=e.target.files?.[0];if(!f)return;const b64=await fileToB64(f);const id=hist[i]?.id;const n=fullHist.map(d=>d.id===id?{...d,screenshot:b64}:d);setHist(n);await store("crimson-draft-history",n)};
  return<div><div style={R}><button style={B("g")} onClick={onBack}>← BACK</button><div style={{...CT,margin:0,color:"#c89b3c",fontSize:15,marginLeft:10}}>📜 DRAFT HISTORY ({hist.length})</div></div>
    {hist.length===0?<div style={{...C,textAlign:"center",padding:50,color:"#444"}}>No drafts visible</div>
    :hist.map((d,i)=><div key={d.id} className="card-hover fade-in" style={{...C,borderLeft:`4px solid ${d.winner===d.blue?"#3b82f6":d.winner===d.red?"#ef4444":"#333"}`}}>
      <div style={{...R,cursor:"pointer",flexWrap:"wrap"}} onClick={()=>setExp(exp===i?null:i)}>
        <span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:3,background:d.label==="Scrim"?"#3b82f611":d.label==="Game"?"#ef444411":d.label==="Practice"?"#22c55e11":"#8b5cf611",color:d.label==="Scrim"?"#3b82f6":d.label==="Game"?"#ef4444":d.label==="Practice"?"#22c55e":"#8b5cf6",border:`1px solid ${d.label==="Scrim"?"#3b82f633":d.label==="Game"?"#ef444433":d.label==="Practice"?"#22c55e33":"#8b5cf633"}`}}>{d.label||"Draft"}</span>
        <span style={{fontSize:13,fontWeight:700,color:"#3b82f6"}}>{d.blue}</span><span style={{color:"#333"}}>vs</span><span style={{fontSize:13,fontWeight:700,color:"#ef4444"}}>{d.red}</span>
        <span style={{fontSize:11,color:"#555"}}>G{d.game} · {d.mode?.toUpperCase()}</span>
        {d.team&&d.team!=="General"&&<span style={{fontSize:10,color:"#8b5cf6"}}>👥 {d.team}</span>}
        {d.winner&&<span style={{fontSize:11,fontWeight:700,color:"#c89b3c",background:"#c89b3c11",padding:"2px 10px",borderRadius:4}}>🏆 {d.winner}</span>}
        {d.screenshot&&<span style={{fontSize:10,color:"#22c55e"}}>📸</span>}
        <span style={{fontSize:10,color:"#444"}}>{new Date(d.date).toLocaleDateString()}</span>
        <div style={{flex:1}}/><span style={{color:"#333"}}>{exp===i?"▾":"▸"}</span>
      </div>
      {/* BANS — always visible */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:6,padding:"4px 0"}}>
        <div style={{display:"flex",gap:3,alignItems:"center"}}><span style={{fontSize:8,color:"#3b82f644",fontWeight:700}}>BAN</span>{[0,2,4,13,15].map(si=>{const id=d.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return c?<img key={si} src={img(c.id)} style={{...CI(22),filter:"grayscale(1)",opacity:.5}} title={c.name}/>:id==="NONE"?<span key={si} style={{fontSize:8,color:"#333"}}>⊘</span>:<div key={si} style={{width:22,height:22,background:"#0c0c16",borderRadius:3,border:"1px solid #1e1e32"}}/>})}</div>
        <div style={{display:"flex",gap:3,alignItems:"center"}}>{[1,3,5,12,14].map(si=>{const id=d.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return c?<img key={si} src={img(c.id)} style={{...CI(22),filter:"grayscale(1)",opacity:.5}} title={c.name}/>:id==="NONE"?<span key={si} style={{fontSize:8,color:"#333"}}>⊘</span>:<div key={si} style={{width:22,height:22,background:"#0c0c16",borderRadius:3,border:"1px solid #1e1e32"}}/>})}<span style={{fontSize:8,color:"#ef444444",fontWeight:700}}>BAN</span></div>
      </div>
      {/* PICKS with B1-B5 / R1-R5 */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
        <div style={{display:"flex",gap:4,alignItems:"center"}}><span style={{fontSize:9,color:"#3b82f644"}}>BLUE</span>{[6,9,10,17,18].map((si,j)=>{const id=d.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return<div key={si} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>{c?<img src={img(c.id)} style={CI(34)} title={c.name}/>:<div style={{width:34,height:34,background:"#0c0c16",borderRadius:4,border:"1px solid #1e1e32"}}/>}<div style={{fontSize:8,color:"#3b82f644",fontWeight:700}}>B{j+1}</div></div>})}</div>
        <div style={{display:"flex",gap:4,alignItems:"center"}}>{[7,8,11,16,19].map((si,j)=>{const id=d.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return<div key={si} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>{c?<img src={img(c.id)} style={CI(34)} title={c.name}/>:<div style={{width:34,height:34,background:"#0c0c16",borderRadius:4,border:"1px solid #1e1e32"}}/>}<div style={{fontSize:8,color:"#ef444444",fontWeight:700}}>R{j+1}</div></div>})}<span style={{fontSize:9,color:"#ef444444"}}>RED</span></div>
      </div>
      {/* Pick order */}
      <div style={{display:"flex",gap:3,marginTop:6,flexWrap:"wrap"}}><span style={{fontSize:9,color:"#444"}}>Order:</span>{[{si:6,l:"B1"},{si:7,l:"R1"},{si:8,l:"R2"},{si:9,l:"B2"},{si:10,l:"B3"},{si:11,l:"R3"},{si:16,l:"R4"},{si:17,l:"B4"},{si:18,l:"B5"},{si:19,l:"R5"}].map(({si,l})=>{const id=d.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return c?<span key={si} style={{fontSize:9,color:l.startsWith("B")?"#3b82f6":"#ef4444",background:l.startsWith("B")?"#3b82f611":"#ef444411",padding:"1px 5px",borderRadius:3,fontWeight:600}}>{l} {c.name}</span>:null})}</div>
      {/* Expanded: screenshot, upload, notes */}
      {exp===i&&<div style={{borderTop:"1px solid #1e1e32",paddingTop:10,marginTop:10}}>
        {d.screenshot&&<div style={{marginBottom:10}}><div style={{fontSize:10,color:"#555",marginBottom:4}}>📸 Result Screenshot:</div><img src={d.screenshot} style={{maxWidth:"100%",maxHeight:400,borderRadius:8,border:"1px solid #1e1e32"}}/></div>}
        {/* Upload screenshot for past drafts */}
        {(auth?.role==="coach"||auth?.role==="teamcoach")&&<div style={{marginBottom:10}}>
          <div style={{fontSize:10,color:"#555",fontWeight:700,marginBottom:4}}>{d.screenshot?"📸 REPLACE":"📸 ADD"} SCREENSHOT</div>
          <input type="file" accept="image/*" onChange={e=>uploadSS(i,e)} style={{fontSize:12,color:"#888"}}/>
        </div>}
        <div style={{marginBottom:10}}>
          <div style={{fontSize:10,color:"#555",fontWeight:700,marginBottom:4}}>📝 NOTES / FEEDBACK:</div>
          {(auth?.role==="coach"||auth?.role==="teamcoach")?<textarea style={{...I,minHeight:60,resize:"vertical",fontSize:12}} value={noteEdit[d.id]!==undefined?noteEdit[d.id]:(d.notes||"")} onChange={e=>setNoteEdit({...noteEdit,[d.id]:e.target.value})} onBlur={()=>{if(noteEdit[d.id]!==undefined)updateNote(i,noteEdit[d.id])}} placeholder="Add coaching feedback..."/>
          :d.notes?<div style={{fontSize:12,color:"#ccc",background:"#0c0c16",padding:10,borderRadius:6,lineHeight:1.6,border:"1px solid #1e1e32"}}>{d.notes}</div>
          :<div style={{fontSize:12,color:"#444"}}>No notes</div>}
        </div>
        {auth?.role==="coach"&&<button style={{...B("g"),color:"#ef4444",fontSize:10,padding:"4px 10px"}} onClick={()=>del(i)}>DELETE</button>}
      </div>}
    </div>)}
  </div>;
}

// ═══ META (ALL champions per role, curated tiers + full roster) ═══════════════
function MetaPage({ch,img,gc}){const[role,setRole]=useState("Top");const[sel,setSel]=useState(null);const[se,setSe]=useState("");const data=META[role]||{};
  const tierMeta=["S","A","B","C"];const tierC={S:"#ef4444",A:"#f97316",B:"#3b82f6",C:"#6b7280"};const tierBg={S:"#ef444412",A:"#f9731612",B:"#3b82f612",C:"#6b728012"};
  // All champions in curated tiers
  const tiered=new Set();tierMeta.forEach(t=>(data[t]||[]).forEach(x=>tiered.add(x.id)));
  // Role tag mapping from Data Dragon
  const roleMap={Top:["Fighter","Tank"],Jungle:["Fighter","Tank","Assassin"],Mid:["Mage","Assassin"],ADC:["Marksman"],Support:["Support"]};
  const allForRole=ch.filter(c=>c.tags?.some(t=>(roleMap[role]||[]).includes(t))&&!tiered.has(c.id)&&fuzzy(se,c.name));
  return<div><div style={{...CT,color:"#c89b3c",fontSize:15}}>🏆 META — PATCH {PATCH} · ALL CHAMPIONS ({role})</div>
    <div style={{...R,gap:10,marginBottom:10,flexWrap:"wrap"}}><div style={{fontSize:11,color:"#555"}}>Live data from:</div>{["U.GG Tier List","OP.GG","LoLalytics"].map((l,i)=>{const u=["https://u.gg/lol/tier-list","https://www.op.gg/champions","https://lolalytics.com/lol/tierlist/"];const c=["#22c55e","#3b82f6","#f97316"];return<a key={l} href={u[i]} target="_blank" rel="noopener" style={{background:`${c[i]}11`,border:`1px solid ${c[i]}33`,color:c[i],fontSize:11,fontWeight:700,padding:"6px 14px",borderRadius:4}}>{l} →</a>})}</div>
    <div style={{display:"flex",gap:6,marginBottom:18}}>{ROLES.map(r=><button key={r} onClick={()=>{setRole(r);setSel(null);setSe("")}} style={RB(role===r)}><RIcon role={r} size={16} color={role===r?"#ef4444":"#555"}/> {r}</button>)}</div>
    <div style={{display:"flex",gap:18}}>
      <div style={{flex:1}}>
        {/* Curated tiers */}
        {tierMeta.map(tier=>{const list=data[tier]||[];return list.length>0&&<div key={tier} style={{...C,padding:0,overflow:"hidden",border:`1px solid ${tierC[tier]}22`,marginBottom:6}}>
          <div style={{display:"flex"}}><div style={{width:50,background:tierBg[tier],display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:800,color:tierC[tier],flexShrink:0}}>{tier}</div>
          <div style={{flex:1,padding:8,display:"flex",flexWrap:"wrap",gap:6}}>{list.map(x=>{const c=gc(x.id);if(!c)return null;return<div key={x.id} onClick={()=>setSel(sel===x.id?null:x.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",padding:4,borderRadius:6,background:sel===x.id?"#c89b3c18":"transparent",minWidth:58}}>
            <img src={img(c.id)} style={CI(40)}/><div style={{fontSize:9,color:"#aaa",marginTop:2,fontWeight:600,maxWidth:58,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"}}>{c.name}</div>
          </div>})}</div></div></div>})}
        {/* All other champions for this role */}
        <div style={{...C,marginTop:4}}>
          <div style={R}><span style={{...CT,margin:0}}>ALL {role.toUpperCase()} CHAMPIONS ({allForRole.length})</span><div style={{flex:1}}/><input style={{...I,maxWidth:200,padding:"6px 10px"}} placeholder="Search..." value={se} onChange={e=>setSe(e.target.value)}/></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:8}}>{allForRole.map(c=><div key={c.id} onClick={()=>setSel(sel===c.id?null:c.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",padding:4,borderRadius:6,background:sel===c.id?"#c89b3c18":"transparent",minWidth:58}}>
            <img src={img(c.id)} style={CI(36)}/><div style={{fontSize:9,color:"#666",marginTop:2,maxWidth:58,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.name}</div>
          </div>)}</div>
        </div>
      </div>
      {/* Detail panel */}
      <div style={{width:300,flexShrink:0}}>
        {sel?<div style={C}>
          <div style={{...R,marginBottom:12}}><img src={img(sel)} style={CI(48)}/><div><div style={{fontSize:16,fontWeight:700,color:"#fff"}}>{gc(sel)?.name}</div><div style={{fontSize:11,color:"#555"}}>{gc(sel)?.title}</div></div></div>
          {[["U.GG Build",`https://u.gg/lol/champions/${sel.toLowerCase()}/build?role=${role.toLowerCase()}`,"#22c55e"],["U.GG Runes",`https://u.gg/lol/champions/${sel.toLowerCase()}/runes?role=${role.toLowerCase()}`,"#22c55e"],["U.GG Counters",`https://u.gg/lol/champions/${sel.toLowerCase()}/counter?role=${role.toLowerCase()}`,"#ef4444"],["OP.GG",`https://www.op.gg/champions/${sel.toLowerCase()}/${role.toLowerCase()}/build`,"#3b82f6"],["LoLalytics",`https://lolalytics.com/lol/${sel.toLowerCase()}/build/?lane=${role.toLowerCase()}`,"#f97316"],["CounterStats",`https://www.counterstats.net/league-of-legends/${gc(sel)?.name?.toLowerCase().replace(/['\s]/g,"-")}`,"#8b5cf6"]].map(([l,u,c])=><a key={l} href={u} target="_blank" rel="noopener" style={{display:"block",padding:8,background:`${c}08`,border:`1px solid ${c}22`,borderRadius:6,color:c,fontSize:12,fontWeight:600,marginBottom:5}}>{l} →</a>)}
          {COUNTERS[sel]?.[role]&&<div style={{marginTop:8,borderTop:"1px solid #1e1e32",paddingTop:8}}>
            <div style={{fontSize:11,color:"#ef4444",fontWeight:700,marginBottom:6}}>COUNTERS ({role}) — <a href={`https://u.gg/lol/champions/${sel.toLowerCase()}/counter?role=${role.toLowerCase()}`} target="_blank" rel="noopener" style={{color:"#22c55e",fontSize:10}}>Full list on U.GG →</a></div>
            <div style={{display:"flex",flexWrap:"wrap",gap:4}}>{(COUNTERS[sel]?.[role]||[]).slice(0,8).map(id=>{const c=gc(id);return c?<div key={id} style={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src={img(c.id)} style={CI(28)} title={c.name}/><div style={{fontSize:8,color:"#888"}}>{c.name}</div></div>:null})}</div>
          </div>}
        </div>:<div style={{...C,textAlign:"center",padding:40}}><div style={{fontSize:40,marginBottom:8,opacity:.15}}>🏆</div><div style={{color:"#444",fontSize:13}}>Click a champion for builds, runes & counters on U.GG</div></div>}
      </div>
    </div>
  </div>;
}

// ═══ COUNTERS (ALL champions, role-filtered, links to U.GG for full data) ════
function CountersPage({ch,img,gc}){const[role,setRole]=useState("Mid");const[se,setSe]=useState("");
  // Show ALL champs, sorted: those with counter data first, then others
  const withData=ch.filter(c=>COUNTERS[c.id]?.[role]&&fuzzy(se,c.name));
  const withoutData=ch.filter(c=>!COUNTERS[c.id]?.[role]&&fuzzy(se,c.name));
  return<div><div style={{...CT,color:"#ef4444",fontSize:15}}>🎯 COUNTER LIST — ALL CHAMPIONS</div>
    <div style={{...R,gap:10,marginBottom:10}}>{["U.GG Counters","CounterStats"].map((l,i)=>{const u=["https://u.gg/lol/tier-list","https://www.counterstats.net/"];const c=["#22c55e","#f97316"];return<a key={l} href={u[i]} target="_blank" rel="noopener" style={{background:`${c[i]}11`,border:`1px solid ${c[i]}33`,color:c[i],fontSize:11,fontWeight:700,padding:"6px 14px",borderRadius:4}}>{l} →</a>})}</div>
    <div style={{display:"flex",gap:6,marginBottom:14}}>{ROLES.map(r=><button key={r} onClick={()=>setRole(r)} style={RB(role===r)}><RIcon role={r} size={14} color={role===r?"#ef4444":"#555"}/> {r}</button>)}</div>
    <input style={{...I,maxWidth:400,marginBottom:14}} placeholder="Search any champion..." value={se} onChange={e=>setSe(e.target.value)}/>
    <div style={{fontSize:12,color:"#555",marginBottom:10}}>{withData.length} champions with counter data · {withoutData.length} link to U.GG</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:10}}>
      {withData.map(c=>{const ct=[...COUNTERS[c.id]?.[role]||[]].sort((a,b)=>a.localeCompare(b));return<div key={c.id} className="card-hover" style={{...C,padding:12}}>
        <div style={{...R,marginBottom:8}}><img src={img(c.id)} style={CI(40)}/><div style={{flex:1}}><div style={{fontSize:15,fontWeight:700}}>{c.name}</div><div style={{fontSize:10,color:"#555"}}>{role} · {ct.length} counters</div></div><a href={`https://u.gg/lol/champions/${c.id.toLowerCase()}/counter`} target="_blank" rel="noopener" style={{background:"#22c55e11",border:"1px solid #22c55e33",color:"#22c55e",fontSize:10,fontWeight:700,padding:"5px 10px",borderRadius:4}}>U.GG</a><a href={`https://www.counterstats.net/league-of-legends/${c.name.toLowerCase().replace(/['\s]/g,"-")}`} target="_blank" rel="noopener" style={{background:"#f9731611",border:"1px solid #f9731633",color:"#f97316",fontSize:10,fontWeight:700,padding:"5px 10px",borderRadius:4}}>CS</a></div>
        <div style={{display:"flex",flexWrap:"wrap",gap:4}}>{ct.map(id=>{const x=gc(id);return x?<div key={id} style={{display:"flex",flexDirection:"column",alignItems:"center",padding:2}}><img src={img(x.id)} style={CI(34)}/><div style={{fontSize:8,color:"#aaa",marginTop:1,maxWidth:36,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"}}>{x.name}</div></div>:null})}</div>
      </div>})}
      {/* Champions without local data — show with U.GG link */}
      {withoutData.length>0&&<div style={{gridColumn:"1/-1",borderTop:"1px solid #1e1e32",paddingTop:14,marginTop:6}}>
        <div style={{fontSize:12,color:"#555",marginBottom:10}}>Champions without local data — click to view on U.GG:</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{withoutData.map(c=><a key={c.id} href={`https://u.gg/lol/champions/${c.id.toLowerCase()}/counter?role=${role.toLowerCase()}`} target="_blank" rel="noopener" style={{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",background:"#12121e",border:"1px solid #1e1e32",borderRadius:6,textDecoration:"none"}}><img src={img(c.id)} style={CI(28)}/><span style={{fontSize:12,color:"#888"}}>{c.name}</span><span style={{fontSize:9,color:"#22c55e"}}>→</span></a>)}</div>
      </div>}
    </div>
  </div>;
}

// ═══ BUILDER (visual upgrade — splash backgrounds, role headers, labels) ═════
function BuilderPage({ch,img,gc,auth}){const[comps,setComps]=useState([]);const[se,setSe]=useState("");const[bans,setBans]=useState([]);const[drag,setDrag]=useState(null);
  const sk=auth.team?`crimson-build-${auth.team}`:"crimson-build-coach";
  useEffect(()=>{(async()=>{const d=await load(sk,{comps:[{name:"Comp 1",slots:[[],[],[],[],[]]}],bans:[]});setComps(d.comps||[]);setBans(d.bans||[])})()},[sk]);
  const sv=async(c,b)=>await store(sk,{comps:c,bans:b});const filt=ch.filter(c=>fuzzy(se,c.name));
  const roleColors=["#f97316","#22c55e","#8b5cf6","#3b82f6","#eab308"];
  return<div style={{display:"flex",gap:14,height:"calc(100vh - 130px)"}}>
    <div style={{width:230,flexShrink:0,...C,display:"flex",flexDirection:"column"}}><div style={{...CT,color:"#ef4444"}}>CHAMPIONS</div><input style={{...I,marginBottom:8}} placeholder="Search..." value={se} onChange={e=>setSe(e.target.value)}/><div style={{fontSize:10,color:"#444",marginBottom:4}}>Right-click to ban</div><div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:3,overflowY:"auto",flex:1,alignContent:"start"}}>{filt.map(c=><div key={c.id} style={{cursor:"grab",opacity:bans.includes(c.id)?.2:1,position:"relative"}} draggable onDragStart={()=>setDrag(c.id)} onDragEnd={()=>setDrag(null)} onContextMenu={e=>{e.preventDefault();const nb=bans.includes(c.id)?bans.filter(x=>x!==c.id):[...bans,c.id];setBans(nb);sv(comps,nb)}}><img src={img(c.id)} title={c.name} style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:4,border:`2px solid ${bans.includes(c.id)?"#ef444444":"#1e1e32"}`,display:"block"}}/></div>)}</div>
      {bans.length>0&&<div style={{marginTop:8,borderTop:"1px solid #1e1e32",paddingTop:8}}><div style={{fontSize:10,color:"#ef4444",marginBottom:4}}>BANNED ({bans.length})</div><div style={{display:"flex",flexWrap:"wrap",gap:3}}>{bans.map(id=><img key={id} src={img(id)} style={{...CI(24),filter:"grayscale(1)",opacity:.4,cursor:"pointer"}} onClick={()=>{const nb=bans.filter(x=>x!==id);setBans(nb);sv(comps,nb)}} title="Click to unban"/>)}</div></div>}
    </div>
    <div style={{flex:1,overflowY:"auto"}}>{comps.map((comp,ci)=><div key={ci} style={{...C,padding:0,overflow:"hidden"}}>
      {/* Comp header with gradient */}
      <div style={{background:"linear-gradient(135deg,#1e1e32,#12121e)",padding:"14px 18px",...R}}>
        <input style={{...I,fontWeight:700,fontSize:16,maxWidth:280,background:"transparent",border:"none",borderBottom:"1px solid #2a2a40",borderRadius:0,color:"#fff"}} value={comp.name} onChange={e=>{const n=[...comps];n[ci].name=e.target.value;setComps(n);sv(n,bans)}}/>
        <div style={{flex:1}}/>
        {comps.length>1&&<button style={{...B("g"),color:"#ef4444",padding:"4px 12px",fontSize:10}} onClick={()=>{const n=comps.filter((_,j)=>j!==ci);setComps(n);sv(n,bans)}}>DELETE</button>}
      </div>
      {/* Role columns with colored headers */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:0,padding:0}}>
        {ROLES.map((r,ri)=><div key={ri}
          onDragOver={e=>{e.preventDefault();e.currentTarget.style.background="#1e1e32"}}
          onDragLeave={e=>{e.currentTarget.style.background="transparent"}}
          onDrop={e=>{e.preventDefault();e.currentTarget.style.background="transparent";if(drag){const n=JSON.parse(JSON.stringify(comps));if(!n[ci].slots[ri].includes(drag)){n[ci].slots[ri].push(drag);setComps(n);sv(n,bans)}}}}
          style={{borderRight:ri<4?"1px solid #1e1e32":"none",padding:10,minHeight:120,transition:"background .15s"}}>
          {/* Role header */}
          <div style={{textAlign:"center",marginBottom:8}}><RIcon role={r} size={20} color={roleColors[ri]}/><div style={{fontSize:12,fontWeight:800,color:roleColors[ri],letterSpacing:1,marginTop:2}}>{r.toUpperCase()}</div><div style={{width:30,height:2,background:roleColors[ri],margin:"4px auto",borderRadius:1,opacity:.5}}/></div>
          {/* Champion cards */}
          <div style={{display:"flex",flexDirection:"column",gap:6,alignItems:"center"}}>
            {(comp.slots[ri]||[]).map(id=>{const x=gc(id);return x?<div key={id} style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",background:"#0c0c16",borderRadius:8,padding:6,border:`1px solid ${bans.includes(id)?"#ef444444":"#1e1e32"}`,width:"100%",maxWidth:90,opacity:bans.includes(id)?.3:1}}>
              <img src={img(id)} style={{...CI(48),borderColor:roleColors[ri]+"66"}}/>
              <div style={{fontSize:10,color:"#ccc",marginTop:3,fontWeight:600,textAlign:"center"}}>{x.name}</div>
              <button onClick={()=>{const n=JSON.parse(JSON.stringify(comps));n[ci].slots[ri]=n[ci].slots[ri].filter(x=>x!==id);setComps(n);sv(n,bans)}} style={{position:"absolute",top:2,right:2,width:16,height:16,background:"#12121e",border:"1px solid #555",borderRadius:"50%",color:"#ccc",fontSize:9,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}}>×</button>
            </div>:null})}
            {(comp.slots[ri]||[]).length===0&&<div style={{padding:20,border:"2px dashed #1e1e32",borderRadius:8,width:"100%",textAlign:"center"}}><span style={{fontSize:24,color:"#1e1e32"}}>+</span><div style={{fontSize:9,color:"#333",marginTop:2}}>Drop here</div></div>}
          </div>
        </div>)}
      </div>
    </div>)}<button style={{...B("g"),width:"100%",padding:16,borderStyle:"dashed",fontSize:13}} onClick={()=>{const n=[...comps,{name:`Comp ${comps.length+1}`,slots:[[],[],[],[],[]]}];setComps(n);sv(n,bans)}}>+ ADD COMP</button></div>
  </div>;
}

// ═══ TIER LIST (unlimited, rename, head coach sees all teams) ════════════════
function TierListPage({ch,img,gc,auth,cfg}){
  const[allTls,setAllTls]=useState({});const[act,setAct]=useState(null);const[se,setSe]=useState("");const[drag,setDrag]=useState(null);const[tlN,setTlN]=useState("");const[rf,setRf]=useState("All");const[newTier,setNewTier]=useState("");const[renaming,setRenaming]=useState(null);const[renameVal,setRenameVal]=useState("");
  // Head coach loads all teams' tier lists + their own
  const storageKeys=auth.role==="coach"?["crimson-tl-coach",...(cfg?.teams||[]).map(t=>`crimson-tl-${t.name}`)]:[auth.team?`crimson-tl-${auth.team}`:"crimson-tl-coach"];
  useEffect(()=>{(async()=>{const merged={};for(const sk of storageKeys){const t=await load(sk,{});Object.entries(t).forEach(([k,v])=>{merged[`${sk==="crimson-tl-coach"?"Coach":sk.replace("crimson-tl-","")} · ${k}`]={...v,_sk:sk,_origKey:k}})}setAllTls(merged);const k=Object.keys(merged);if(k.length>0)setAct(k[0])})()},[]);
  const sv=async(newTls)=>{setAllTls(newTls);const byKey={};Object.entries(newTls).forEach(([k,v])=>{const sk=v._sk||"crimson-tl-coach";const ok=v._origKey||k;if(!byKey[sk])byKey[sk]={};byKey[sk][ok]=v});for(const[sk,data]of Object.entries(byKey)){const clean={};Object.entries(data).forEach(([k,v])=>{const{_sk,_origKey,...rest}=v;clean[k]=rest});await store(sk,clean)}};
  const cur=act?allTls[act]:null;
  const rm={Assassin:["Mid","Jungle"],Fighter:["Top","Jungle"],Mage:["Mid"],Marksman:["ADC"],Support:["Support"],Tank:["Top","Jungle"]};
  const all=ch.filter(c=>{if(!fuzzy(se,c.name))return false;if(rf==="All")return true;return c.tags?.some(t=>(rm[t]||[]).includes(rf))});
  const tierNames=cur?Object.keys(cur.tiers||{}):TIERS;
  const tierColor=(t)=>TC[t]||"#8b5cf6";const tierBg2=(t)=>(TC[t]||"#8b5cf6")+"18";
  const mySk=auth.team?`crimson-tl-${auth.team}`:"crimson-tl-coach";
  const create=()=>{const n=tlN.trim()||`List ${Object.keys(allTls).length+1}`;const label=auth.team||"Coach";const fullKey=`${label} · ${n}`;const nt={...allTls,[fullKey]:{tiers:Object.fromEntries(TIERS.map(t=>[t,[]])),blindPicks:[],_sk:mySk,_origKey:n}};sv(nt);setAct(fullKey);setTlN("")};
  const rename=()=>{if(!renameVal.trim()||!renaming)return;const old=allTls[renaming];const label=renaming.split(" · ")[0];const newKey=`${label} · ${renameVal.trim()}`;const nt={};Object.entries(allTls).forEach(([k,v])=>{nt[k===renaming?newKey:k]=k===renaming?{...v,_origKey:renameVal.trim()}:v});sv(nt);setAct(newKey);setRenaming(null);setRenameVal("")};
  const addCustomTier=()=>{if(!newTier.trim()||!cur)return;const t=JSON.parse(JSON.stringify(allTls));t[act].tiers[newTier.trim()]=[];sv(t);setNewTier("")};
  const delTier=(tier)=>{if(TIERS.includes(tier)||!cur)return;const t=JSON.parse(JSON.stringify(allTls));delete t[act].tiers[tier];sv(t)};
  const[showImport,setShowImport]=useState(false);const[importText,setImportText]=useState("");const[importImg,setImportImg]=useState(null);const[importErr,setImportErr]=useState("");
  // Text-based import: parse "S: Aatrox, Ahri\nA: Akali, Amumu" format
  const doImport=()=>{
    if(!importText.trim()){setImportErr("Paste champion names per tier");return}
    const tiers={};TIERS.forEach(t=>tiers[t]=[]);
    const lines=importText.split("\n").filter(l=>l.trim());
    const tierMap={"S+":"Z","S":"S","A":"A","B":"B","C":"C","D":"C","F":"Never Play","Z":"Z","NEVER":"Never Play","NP":"Never Play"};
    let currentTier="S";
    for(const line of lines){
      const match=line.match(/^([A-Za-z+]+)\s*[:=-]\s*(.+)/);
      if(match){
        const tierKey=tierMap[match[1].toUpperCase()]||match[1];
        if(!tiers[tierKey])tiers[tierKey]=[];
        currentTier=tierKey;
        const names=match[2].split(/[,;\/]+/).map(n=>n.trim()).filter(Boolean);
        names.forEach(name=>{
          const found=ch.find(c=>c.name.toLowerCase()===name.toLowerCase()||c.id.toLowerCase()===name.toLowerCase()||fuzzy(name,c.name));
          if(found&&!tiers[currentTier].includes(found.id))tiers[currentTier].push(found.id);
        });
      } else {
        // No tier prefix — treat as champion names for current tier
        const names=line.split(/[,;\/]+/).map(n=>n.trim()).filter(Boolean);
        names.forEach(name=>{
          const found=ch.find(c=>c.name.toLowerCase()===name.toLowerCase()||c.id.toLowerCase()===name.toLowerCase());
          if(found&&!tiers[currentTier].includes(found.id))tiers[currentTier].push(found.id);
        });
      }
    }
    const total=Object.values(tiers).reduce((a,b)=>a+b.length,0);
    if(total===0){setImportErr("No champions recognized. Check spelling.");return}
    const label=auth.team||"Coach";const n=`Imported ${new Date().toLocaleTimeString()}`;const fullKey=`${label} · ${n}`;
    const nt={...allTls,[fullKey]:{tiers,blindPicks:[],_sk:mySk,_origKey:n}};sv(nt);setAct(fullKey);
    setImportErr(`✅ Imported ${total} champions`);setShowImport(false);setImportText("");
  };

  return<div><div style={{...R,marginBottom:14,flexWrap:"wrap",gap:6}}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>📋 TIER LISTS</div><div style={{flex:1}}/>
    <select style={{...I,maxWidth:280,padding:"6px 10px"}} value={act||""} onChange={e=>setAct(e.target.value)}><option value="">Select tier list...</option>{Object.keys(allTls).map(n=><option key={n} value={n}>{n}</option>)}</select>
    <input style={{...I,maxWidth:140,padding:"6px 10px"}} placeholder="New list..." value={tlN} onChange={e=>setTlN(e.target.value)} onKeyDown={e=>e.key==="Enter"&&create()}/><button style={B("p")} onClick={create}>+ CREATE</button>
    <button style={B("gold")} onClick={()=>setShowImport(!showImport)}>{showImport?"CANCEL":"📋 IMPORT"}</button>
    {act&&<><button style={{...B("g"),fontSize:10}} onClick={()=>{setRenaming(act);setRenameVal(act.split(" · ").slice(1).join(" · "))}}>RENAME</button><button style={{...B("g"),color:"#ef4444",fontSize:10}} onClick={()=>{const nt={...allTls};delete nt[act];sv(nt);const k=Object.keys(nt);setAct(k.length>0?k[0]:null)}}>DEL</button></>}
  </div>
    {/* Import Panel */}
    {showImport&&<div className="fade-in" style={{...C,marginBottom:8}}>
      <div style={{...CT,color:"#c89b3c"}}>📋 IMPORT TIER LIST</div>
      <div style={{display:"flex",gap:14}}>
        <div style={{flex:1}}>
          <div style={{fontSize:12,color:"#888",marginBottom:8,lineHeight:1.6}}>
            Paste champion names per tier. Format:<br/>
            <code style={{color:"#c89b3c",background:"#0c0c16",padding:"2px 6px",borderRadius:3}}>S: Aatrox, Ahri, Akali</code><br/>
            <code style={{color:"#c89b3c",background:"#0c0c16",padding:"2px 6px",borderRadius:3}}>A: Amumu, Annie, Ashe</code><br/>
            <code style={{color:"#c89b3c",background:"#0c0c16",padding:"2px 6px",borderRadius:3}}>B: Brand, Caitlyn, Darius</code>
          </div>
          <textarea style={{...I,minHeight:180,resize:"vertical",fontSize:13,fontFamily:"monospace",lineHeight:1.8}} value={importText} onChange={e=>setImportText(e.target.value)} placeholder={"S: Aatrox, Ahri, Syndra, Viktor\nA: Akali, Amumu, Ashe, Caitlyn\nB: Brand, Darius, Diana\nC: Corki, Azir"}/>
          <div style={{...R,marginTop:10}}><button style={B("p")} onClick={doImport}>IMPORT</button><button style={B("g")} onClick={()=>{setShowImport(false);setImportText("")}}>CANCEL</button></div>
        </div>
        {/* Optional: upload image as visual reference */}
        <div style={{width:280,flexShrink:0}}>
          <div style={{fontSize:11,color:"#555",fontWeight:700,marginBottom:6}}>📷 UPLOAD IMAGE AS REFERENCE</div>
          <input type="file" accept="image/*" onChange={async e=>{const f=e.target.files?.[0];if(f)setImportImg(await fileToB64(f))}} style={{fontSize:11,color:"#888",marginBottom:8}}/>
          {importImg&&<img src={importImg} style={{width:"100%",borderRadius:8,border:"1px solid #1e1e32",maxHeight:300,objectFit:"contain"}}/>}
          {!importImg&&<div style={{padding:30,border:"2px dashed #1e1e32",borderRadius:8,textAlign:"center",color:"#333"}}><div style={{fontSize:28,marginBottom:4}}>📷</div>Upload your tier list image here as a reference while you type</div>}
        </div>
      </div>
    </div>}
    {renaming&&<div style={{...C,...R,gap:8}}><input style={{...I,flex:1}} value={renameVal} onChange={e=>setRenameVal(e.target.value)} onKeyDown={e=>e.key==="Enter"&&rename()} autoFocus/><button style={B("p")} onClick={rename}>SAVE NAME</button><button style={B("g")} onClick={()=>setRenaming(null)}>CANCEL</button></div>}
    {importErr&&<div style={{padding:10,marginBottom:8,borderRadius:6,background:importErr.startsWith("✅")?"#22c55e11":"#ef444411",border:`1px solid ${importErr.startsWith("✅")?"#22c55e33":"#ef444433"}`,color:importErr.startsWith("✅")?"#22c55e":"#ef4444",fontSize:12,fontWeight:600,...R}}><span style={{flex:1}}>{importErr}</span><button onClick={()=>setImportErr("")} style={{background:"none",border:"none",color:"#555",cursor:"pointer",fontSize:14}}>×</button></div>}
    {!cur?<div style={{...C,textAlign:"center",padding:50,color:"#444"}}>Create or select a tier list</div>
    :<div style={{display:"flex",gap:14}}><div style={{flex:1}}>
      <div style={{fontSize:11,color:"#555",marginBottom:8}}>🟡 Click = blind pick · Right-click = remove · Drag from pool →</div>
      {tierNames.map(tier=><div key={tier} onDragOver={e=>{e.preventDefault();e.currentTarget.style.background=tierBg2(tier)}} onDragLeave={e=>{e.currentTarget.style.background="transparent"}} onDrop={e=>{e.preventDefault();e.currentTarget.style.background="transparent";if(drag){const t=JSON.parse(JSON.stringify(allTls));tierNames.forEach(ti=>{t[act].tiers[ti]=(t[act].tiers[ti]||[]).filter(x=>x!==drag)});t[act].tiers[tier]=[...(t[act].tiers[tier]||[]),drag];sv(t)}}} style={{display:"flex",marginBottom:4,minHeight:52,borderRadius:6,border:`1px solid ${tierColor(tier)}22`,overflow:"hidden"}}>
        <div style={{width:68,background:tierBg2(tier),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:TIERS.includes(tier)?18:11,fontWeight:800,color:tierColor(tier),flexShrink:0,position:"relative"}}>
          {tier}{!TIERS.includes(tier)&&<button onClick={()=>delTier(tier)} style={{position:"absolute",top:2,right:2,width:12,height:12,background:"#12121e",border:"1px solid #555",borderRadius:"50%",color:"#ef4444",fontSize:8,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}}>×</button>}
        </div>
        <div style={{flex:1,display:"flex",flexWrap:"wrap",gap:3,padding:6,alignContent:"flex-start",minHeight:48}}>{(cur.tiers[tier]||[]).map(id=>{const c=gc(id);if(!c)return null;const blind=(cur.blindPicks||[]).includes(id);return<div key={id} style={{position:"relative",cursor:"pointer"}} draggable onDragStart={()=>setDrag(id)} onClick={()=>{const t=JSON.parse(JSON.stringify(allTls));const bp=t[act].blindPicks||[];t[act].blindPicks=bp.includes(id)?bp.filter(x=>x!==id):[...bp,id];sv(t)}} onContextMenu={e=>{e.preventDefault();const t=JSON.parse(JSON.stringify(allTls));t[act].tiers[tier]=t[act].tiers[tier].filter(x=>x!==id);sv(t)}}><img src={img(id)} title={`${c.name}${blind?" ★":""}`} style={{...CI(40),borderColor:tierColor(tier)+"66"}}/>{blind&&<div style={BD}/>}<div style={{fontSize:8,color:"#888",textAlign:"center",maxWidth:40,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.name}</div></div>})}</div>
      </div>)}
      <div style={{...R,marginTop:6}}><input style={{...I,maxWidth:180,padding:"6px 10px"}} placeholder="Custom tier name..." value={newTier} onChange={e=>setNewTier(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addCustomTier()}/><button style={{...B("g"),fontSize:10}} onClick={addCustomTier}>+ ADD TIER</button></div>
    </div>
    <div style={{width:280,flexShrink:0,...C,display:"flex",flexDirection:"column",maxHeight:"calc(100vh - 160px)",padding:12}}><div style={CT}>ALL ({all.length})</div><input style={{...I,marginBottom:6}} placeholder="Search (fuzzy)..." value={se} onChange={e=>setSe(e.target.value)}/><div style={{display:"flex",gap:3,marginBottom:8,flexWrap:"wrap"}}>{["All",...ROLES].map(r=><button key={r} onClick={()=>setRf(r)} style={{background:rf===r?"#ef444418":"transparent",border:`1px solid ${rf===r?"#ef444444":"#1e1e32"}`,color:rf===r?"#ef4444":"#444",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:4,cursor:"pointer",fontFamily:"inherit"}}>{r}</button>)}</div><div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:3,overflowY:"auto",flex:1,alignContent:"start"}}>{all.map(c=>{let inT=null;tierNames.forEach(t=>{if((cur.tiers[t]||[]).includes(c.id))inT=t});return<div key={c.id} style={{cursor:"grab",position:"relative"}} draggable onDragStart={()=>setDrag(c.id)} onDragEnd={()=>setDrag(null)}><img src={img(c.id)} title={`${c.name}${inT?` (${inT})`:""}`} style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:4,border:`2px solid ${inT?tierColor(inT)+"88":"#111"}`,display:"block",opacity:inT?.65:1}}/>{inT&&<div style={{position:"absolute",top:0,right:0,background:tierColor(inT),color:"#000",fontSize:7,fontWeight:800,padding:"0 3px",borderRadius:"0 4px 0 3px"}}>{inT.length>3?inT.slice(0,3):inT}</div>}</div>})}</div></div></div>}
  </div>;
}

// ═══ VIDEOS ══════════════════════════════════════════════════════════════════
function VideosPage({auth}){const[vids,setVids]=useState([]);const[ed,setEd]=useState(false);const[t,setT]=useState("");const[u,setU]=useState("");const[d,setD]=useState("");const[a,setA]=useState("");
  useEffect(()=>{(async()=>{setVids(await load("crimson-videos",[]))})()},[]);const sv=async v=>{setVids(v);await store("crimson-videos",v)};
  const add=()=>{if(!u.trim())return;const ytId=u.match(/(?:youtu\.be\/|v=)([^&\s]+)/)?.[1]||"";sv([{id:Date.now(),title:t||"Untitled",url:u.trim(),ytId,desc:d,assignedTo:a,date:new Date().toISOString()},...vids]);setT("");setU("");setD("");setA("");setEd(false)};
  return<div><div style={R}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>🎬 VIDEOS</div><div style={{flex:1}}/>{auth.role==="coach"&&<button style={B("p")} onClick={()=>setEd(!ed)}>{ed?"CANCEL":"+ ADD"}</button>}</div>
    {ed&&<div style={{...C,marginTop:14}}><input style={{...I,marginBottom:10}} placeholder="Title..." value={t} onChange={e=>setT(e.target.value)}/><input style={{...I,marginBottom:10}} placeholder="YouTube URL..." value={u} onChange={e=>setU(e.target.value)}/><input style={{...I,marginBottom:10}} placeholder="Assigned to..." value={a} onChange={e=>setA(e.target.value)}/><textarea style={{...I,minHeight:60,marginBottom:10,resize:"vertical"}} placeholder="Description..." value={d} onChange={e=>setD(e.target.value)}/><button style={B("p")} onClick={add}>ADD</button></div>}
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(360px,1fr))",gap:14,marginTop:14}}>{vids.map((v,i)=><div key={v.id} className="card-hover fade-in" style={{...C,padding:0,overflow:"hidden"}}>{v.ytId&&<div style={{position:"relative",paddingTop:"56.25%",background:"#000"}}><iframe src={`https://www.youtube.com/embed/${v.ytId}`} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}} allowFullScreen/></div>}<div style={{padding:14}}><div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:4}}>{v.title}</div>{v.assignedTo&&<div style={{fontSize:11,color:"#c89b3c",fontWeight:700,marginBottom:4}}>📋 {v.assignedTo}</div>}{v.desc&&<div style={{fontSize:12,color:"#888",lineHeight:1.6}}>{v.desc}</div>}{auth.role==="coach"&&<button style={{...B("g"),color:"#ef4444",padding:"3px 10px",fontSize:10,marginTop:6}} onClick={()=>sv(vids.filter((_,j)=>j!==i))}>DEL</button>}</div></div>)}</div>{vids.length===0&&<div style={{...C,textAlign:"center",padding:50,color:"#444",marginTop:14}}>No videos</div>}
  </div>;
}

// ═══ SCHEDULE (visual calendar + availability + Google Cal export) ════════════
function SchedulePage({auth}){
  const[evts,setEvts]=useState([]);const[avail,setAvail]=useState([]);const[ed,setEd]=useState(false);const[showAvail,setShowAvail]=useState(false);
  const[t,setT]=useState("");const[dt,setDt]=useState("");const[tm,setTm]=useState("");const[tp,setTp]=useState("practice");const[n,setN]=useState("");const[dur,setDur]=useState(120);
  const[calMonth,setCalMonth]=useState(new Date().getMonth());const[calYear,setCalYear]=useState(new Date().getFullYear());
  const[avName,setAvName]=useState("");const[avDate,setAvDate]=useState("");const[avStart,setAvStart]=useState("");const[avEnd,setAvEnd]=useState("");

  useEffect(()=>{(async()=>{setEvts(await load("crimson-schedule",[]));setAvail(await load("crimson-avail",[]))})()},[]);
  const svE=async e=>{setEvts(e);await store("crimson-schedule",e)};
  const svA=async a=>{setAvail(a);await store("crimson-avail",a)};
  const addEvt=()=>{if(!t.trim()||!dt)return;svE([...evts,{id:Date.now(),title:t,date:dt,time:tm,type:tp,notes:n,duration:dur}].sort((a,b)=>new Date(a.date)-new Date(b.date)));setT("");setDt("");setTm("");setN("");setDur(120);setEd(false)};
  const addAvail=()=>{if(!avName.trim()||!avDate)return;svA([...avail,{id:Date.now(),name:avName,date:avDate,start:avStart,end:avEnd}]);setAvDate("");setAvStart("");setAvEnd("")};

  const tC={practice:"#3b82f6",scrim:"#f97316",gameday:"#ef4444",meeting:"#8b5cf6",other:"#666"};
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  const firstDay=new Date(calYear,calMonth,1).getDay();
  const calDays=[];for(let i=0;i<firstDay;i++)calDays.push(null);for(let i=1;i<=daysInMonth;i++)calDays.push(i);

  const gcalUrl=(ev)=>{const d=ev.date.replace(/-/g,"");const st=ev.time?ev.time.replace(/:/g,"")+"00":"000000";const durMins=ev.duration||120;const stH=ev.time?parseInt(ev.time.split(":")[0]):0;const stM=ev.time?parseInt(ev.time.split(":")[1]):0;const endH=stH+Math.floor(durMins/60);const endM=stM+(durMins%60);const et=((endH%24)+"").padStart(2,"0")+((endM%60)+"").padStart(2,"0")+"00";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${d}T${st}/${d}T${et}&details=${encodeURIComponent(ev.notes||"")}`};

  return<div><div style={R}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>📅 SCHEDULE & AVAILABILITY</div><div style={{flex:1}}/>
    {auth.role==="coach"&&<button style={B("p")} onClick={()=>setEd(!ed)}>{ed?"CANCEL":"+ EVENT"}</button>}
    <button style={B("g")} onClick={()=>setShowAvail(!showAvail)}>{showAvail?"HIDE":"AVAILABILITY"}</button>
  </div>

  {/* Add event form */}
  {ed&&auth.role==="coach"&&<div style={{...C,marginTop:14}}><div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}><input style={{...I,flex:1}} placeholder="Event title..." value={t} onChange={e=>setT(e.target.value)}/><input style={{...I,maxWidth:180}} type="date" value={dt} onChange={e=>setDt(e.target.value)}/><input style={{...I,maxWidth:140}} type="time" value={tm} onChange={e=>setTm(e.target.value)}/><select style={{...I,maxWidth:130}} value={dur} onChange={e=>setDur(parseInt(e.target.value))}><option value={30}>30 min</option><option value={60}>1 hour</option><option value={90}>1.5 hours</option><option value={120}>2 hours</option><option value={180}>3 hours</option><option value={240}>4 hours</option><option value={360}>6 hours</option></select><select style={{...I,maxWidth:150}} value={tp} onChange={e=>setTp(e.target.value)}><option value="practice">Practice</option><option value="scrim">Scrim</option><option value="gameday">Game Day</option><option value="meeting">Meeting</option><option value="other">Other</option></select></div><textarea style={{...I,minHeight:40,marginBottom:10,resize:"vertical"}} placeholder="Notes..." value={n} onChange={e=>setN(e.target.value)}/><button style={B("p")} onClick={addEvt}>ADD EVENT</button></div>}

  {/* Availability submission */}
  {showAvail&&<div style={{...C,marginTop:14}}>
    <div style={CT}>📋 SUBMIT AVAILABILITY</div>
    <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
      <input style={{...I,maxWidth:160}} placeholder="Your name" value={avName} onChange={e=>setAvName(e.target.value)}/>
      <input style={{...I,maxWidth:160}} type="date" value={avDate} onChange={e=>setAvDate(e.target.value)}/>
      <input style={{...I,maxWidth:120}} type="time" placeholder="From" value={avStart} onChange={e=>setAvStart(e.target.value)}/>
      <input style={{...I,maxWidth:120}} type="time" placeholder="To" value={avEnd} onChange={e=>setAvEnd(e.target.value)}/>
      <button style={B("p")} onClick={addAvail}>SUBMIT</button>
    </div>
    {/* Show submitted availability */}
    {avail.length>0&&<div style={{marginTop:8}}>
      <div style={{fontSize:11,color:"#555",fontWeight:700,marginBottom:6}}>TEAM AVAILABILITY:</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{avail.map((a,i)=><div key={a.id} style={{padding:"6px 10px",background:"#0c0c16",border:"1px solid #1e1e32",borderRadius:6,fontSize:12}}>
        <span style={{color:"#22c55e",fontWeight:700}}>{a.name}</span> — <span style={{color:"#888"}}>{a.date} {a.start&&`${a.start}-${a.end}`}</span>
        <button onClick={()=>svA(avail.filter((_,j)=>j!==i))} style={{background:"none",border:"none",color:"#ef4444",cursor:"pointer",marginLeft:6,fontSize:10}}>×</button>
      </div>)}</div>
      {/* Suggested times: find dates where 3+ people are available */}
      {(()=>{const dateCounts={};avail.forEach(a=>{dateCounts[a.date]=(dateCounts[a.date]||0)+1});const suggested=Object.entries(dateCounts).filter(([_,c])=>c>=2).sort((a,b)=>b[1]-a[1]);
        return suggested.length>0&&<div style={{marginTop:10,padding:10,background:"#22c55e08",border:"1px solid #22c55e22",borderRadius:6}}>
          <div style={{fontSize:11,color:"#22c55e",fontWeight:700,marginBottom:4}}>💡 SUGGESTED TIMES (2+ available):</div>
          {suggested.map(([date,count])=><div key={date} style={{fontSize:12,color:"#ccc"}}>{date} — <span style={{color:"#22c55e",fontWeight:600}}>{count} players available</span></div>)}
        </div>;
      })()}
    </div>}
  </div>}

  <div style={{display:"flex",gap:16,marginTop:16}}>
    {/* Visual Calendar */}
    <div style={{flex:1,...C}}>
      <div style={{...R,justifyContent:"space-between",marginBottom:14}}>
        <button style={{...B("g"),padding:"6px 12px"}} onClick={()=>{if(calMonth===0){setCalMonth(11);setCalYear(calYear-1)}else setCalMonth(calMonth-1)}}>◂</button>
        <div style={{fontSize:16,fontWeight:700,color:"#fff",letterSpacing:2}}>{months[calMonth]} {calYear}</div>
        <button style={{...B("g"),padding:"6px 12px"}} onClick={()=>{if(calMonth===11){setCalMonth(0);setCalYear(calYear+1)}else setCalMonth(calMonth+1)}}>▸</button>
      </div>
      {/* Day headers */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,marginBottom:4}}>
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=><div key={d} style={{textAlign:"center",fontSize:10,color:"#555",fontWeight:700,padding:4}}>{d}</div>)}
      </div>
      {/* Calendar grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
        {calDays.map((day,i)=>{
          if(day===null)return<div key={`e${i}`} style={{height:70}}/>;
          const dateStr=`${calYear}-${String(calMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
          const dayEvts=evts.filter(e=>e.date===dateStr);
          const dayAvail=avail.filter(a=>a.date===dateStr);
          const isToday=dateStr===new Date().toISOString().split("T")[0];
          return<div key={i} style={{height:70,background:isToday?"#ef444412":"#0c0c16",border:`1px solid ${isToday?"#ef444433":"#1e1e32"}`,borderRadius:6,padding:4,overflow:"hidden"}}>
            <div style={{fontSize:11,fontWeight:isToday?800:400,color:isToday?"#ef4444":"#888",marginBottom:2}}>{day}</div>
            {dayEvts.map(e=><div key={e.id} style={{fontSize:8,padding:"1px 3px",background:`${tC[e.type]||"#666"}22`,color:tC[e.type],borderRadius:2,marginBottom:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:700}}>{e.title}</div>)}
            {dayAvail.length>0&&<div style={{fontSize:8,color:"#22c55e"}}>{dayAvail.length}👤</div>}
          </div>;
        })}
      </div>
    </div>

    {/* Event list */}
    <div style={{width:360,flexShrink:0}}>
      <div style={CT}>UPCOMING EVENTS</div>
      {evts.length===0&&<div style={{...C,textAlign:"center",padding:30,color:"#444"}}>No events</div>}
      {evts.map((ev,i)=>{const past=new Date(ev.date)<new Date();return<div key={ev.id} style={{...C,padding:12,opacity:past?.5:1,borderLeft:`4px solid ${tC[ev.type]||"#666"}`}}>
        <div style={R}><span style={{fontSize:11,fontWeight:700,color:tC[ev.type],textTransform:"uppercase"}}>{ev.type}</span><span style={{fontSize:13,fontWeight:700,color:"#fff",flex:1}}>{ev.title}</span></div>
        <div style={{fontSize:12,color:"#888",marginTop:4,fontFamily:"monospace"}}>{ev.date}{ev.time&&` @ ${ev.time}`}</div>
        {ev.notes&&<div style={{fontSize:11,color:"#666",marginTop:4}}>{ev.notes}</div>}
        <div style={{...R,marginTop:6,gap:4}}>
          <a href={gcalUrl(ev)} target="_blank" rel="noopener" style={{background:"#3b82f611",border:"1px solid #3b82f633",color:"#3b82f6",fontSize:9,fontWeight:700,padding:"3px 8px",borderRadius:3}}>📅 Google Cal</a>
          {auth.role==="coach"&&<button style={{...B("g"),color:"#ef4444",padding:"2px 8px",fontSize:9}} onClick={()=>svE(evts.filter((_,j)=>j!==i))}>DEL</button>}
        </div>
      </div>})}
    </div>
  </div>
  </div>;
}

// ═══ GUIDES (titles-only sidebar with customizable colors, photo upload, formatting) ═
function GuidesPage({auth}){const[guides,setGuides]=useState([]);const[act,setAct]=useState(null);const[ed,setEd]=useState(false);const[eT,setET]=useState("");const[eC,setEC]=useState("");const[eCat,setECat]=useState("");const[eBg,setEBg]=useState("");const[eTc,setETc]=useState("#fff");const[newCat,setNewCat]=useState("");const[eImg,setEImg]=useState(null);const[eBodyImgs,setEBodyImgs]=useState([]);
  useEffect(()=>{(async()=>{let g=await load("crimson-guides",[]);if(g.length===0){g=GUIDE_PRESETS.map(p=>({...p,createdAt:new Date().toISOString()}));await store("crimson-guides",g)}setGuides(g)})()},[]);
  const sv=async g=>{setGuides(g);await store("crimson-guides",g)};
  const add=(cat)=>{const g=[...guides,{id:Date.now(),title:"New Guide",category:cat||"General",content:"",bg:"linear-gradient(135deg,#ef4444,#991b1b)",textColor:"#fff",headerImg:null,images:[],createdAt:new Date().toISOString()}];sv(g);setAct(g.length-1);setEd(true);setET("New Guide");setEC("");setECat(cat||"General");setEBg("linear-gradient(135deg,#ef4444,#991b1b)");setETc("#fff");setEImg(null);setEBodyImgs([])};
  const saveE=()=>{const g=[...guides];g[act]={...g[act],title:eT,content:eC,category:eCat,bg:eBg,textColor:eTc,headerImg:eImg||g[act].headerImg,images:eBodyImgs};sv(g);setEd(false);setEBodyImgs([])};
  const del=i=>{sv(guides.filter((_,j)=>j!==i));setAct(guides.length>1?Math.min(i,guides.length-2):null);setEd(false)};
  const handleImg=async e=>{const f=e.target.files?.[0];if(f)setEImg(await compressImg(f,1200,0.7))};
  const addBodyImg=async e=>{const f=e.target.files?.[0];if(!f)return;const compressed=await compressImg(f,900,0.65);const imgId="img_"+Date.now();setEBodyImgs(p=>[...p,{id:imgId,data:compressed}]);const ta=document.getElementById("ge");const pos=ta?ta.selectionStart:eC.length;setEC(eC.slice(0,pos)+"\n[IMG:"+imgId+"]\n"+eC.slice(pos))};
  const guide=act!==null?guides[act]:null;
  const cats=[...new Set(guides.map(g=>g.category||"General"))];
  const catOrd={"Getting Started":0,"Role Guides":1,"Competitive":2};
  const sortCats=[...cats].sort((a,b)=>(catOrd[a]??99)-(catOrd[b]??99));

  // Color presets for quick selection
  const colorPresets=["linear-gradient(135deg,#ef4444,#991b1b)","linear-gradient(135deg,#f97316,#9a3412)","linear-gradient(135deg,#eab308,#78350f)","linear-gradient(135deg,#22c55e,#14532d)","linear-gradient(135deg,#3b82f6,#1e3a5f)","linear-gradient(135deg,#8b5cf6,#4c1d95)","linear-gradient(135deg,#ec4899,#831843)","#1e1e32","#2a2a40","#333"];

  return<div><div style={R}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>📖 GUIDES</div><div style={{flex:1}}/>
    {auth.role==="coach"&&<><select style={{...I,maxWidth:160,padding:"6px 10px"}} value={newCat} onChange={e=>setNewCat(e.target.value)}><option value="">Add to...</option>{sortCats.map(c=><option key={c} value={c}>{c}</option>)}<option value="__new">+ New Category</option></select><button style={B("p")} onClick={()=>{if(newCat==="__new"){const n=prompt("Category name:");if(n)add(n)}else add(newCat||"General")}}>+ NEW</button></>}
  </div>
    <div style={{display:"flex",gap:14,marginTop:14}}>
      {/* Sidebar: titles only with color strips */}
      <div style={{width:280,flexShrink:0}}>{sortCats.map(cat=><div key={cat} style={{marginBottom:16}}>
        <div style={{fontSize:11,letterSpacing:2,color:"#555",fontWeight:700,marginBottom:6,paddingLeft:4}}>{cat.toUpperCase()}</div>
        {guides.filter(g=>(g.category||"General")===cat).map(g=>{const ri=guides.indexOf(g);const isAct=act===ri;
          return<div key={g.id||ri} onClick={()=>{setAct(ri);setEd(false)}} style={{background:g.bg||"#1e1e32",borderRadius:8,padding:"10px 14px",marginBottom:5,cursor:"pointer",border:`2px solid ${isAct?"#fff3":"transparent"}`,transition:"all .15s"}}>
            <div style={{fontSize:13,fontWeight:700,color:g.textColor||"#fff",textShadow:"0 1px 3px #0008"}}>{g.title}</div>
          </div>})}
      </div>)}</div>
      {/* Content */}
      <div style={{flex:1}}>{guide?(ed&&auth.role==="coach"?<div style={C}>
        <div style={{...R,marginBottom:14,flexWrap:"wrap",gap:10}}><input style={{...I,fontWeight:700,fontSize:17,flex:1}} value={eT} onChange={e=>setET(e.target.value)} placeholder="Title..."/>
          <select style={{...I,maxWidth:180}} value={eCat} onChange={e=>setECat(e.target.value)}>{sortCats.map(c=><option key={c}>{c}</option>)}</select></div>
        {/* Color/style options */}
        <div style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#555",fontWeight:700,marginBottom:6}}>SIDEBAR STYLE</div>
          <div style={{...R,flexWrap:"wrap",gap:4,marginBottom:8}}>
            {colorPresets.map((bg,i)=><div key={i} onClick={()=>setEBg(bg)} style={{width:28,height:28,borderRadius:6,background:bg,cursor:"pointer",border:`2px solid ${eBg===bg?"#fff":"transparent"}`}}/>)}
          </div>
          <div style={R}><label style={{fontSize:11,color:"#555",fontWeight:700}}>Custom BG:</label><input style={{...I,maxWidth:280,fontSize:12}} value={eBg} onChange={e=>setEBg(e.target.value)} placeholder="CSS gradient or color..."/></div>
          <div style={{...R,marginTop:6}}><label style={{fontSize:11,color:"#555",fontWeight:700}}>Text Color:</label><input type="color" value={eTc} onChange={e=>setETc(e.target.value)} style={{width:32,height:32,border:"none",background:"none",cursor:"pointer"}}/><input style={{...I,maxWidth:120,fontSize:12}} value={eTc} onChange={e=>setETc(e.target.value)}/></div>
        </div>
        {/* Header image upload */}
        <div style={{marginBottom:14}}><div style={{fontSize:11,color:"#555",fontWeight:700,marginBottom:6}}>HEADER IMAGE (optional)</div><input type="file" accept="image/*" onChange={handleImg} style={{fontSize:12,color:"#888"}}/>{(eImg||guide.headerImg)&&<img src={eImg||guide.headerImg} style={{width:"100%",maxHeight:120,objectFit:"cover",borderRadius:8,marginTop:8,border:"1px solid #1e1e32"}}/>}</div>
        {/* Toolbar */}
        <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8}}>{[["B","**","**","Bold"],["H1","# ","","Heading"],["H2","## ","","Sub"],["•","• ","","Bullet"],["───","───","","Divider"],["🔗","[","](url)","Link"]].map(([label,pre,suf,title])=><button key={label} title={title} onClick={()=>{const ta=document.getElementById("ge");if(!ta)return;const s=ta.selectionStart,e=ta.selectionEnd,sel=eC.slice(s,e)||title;const ins=label==="H1"||label==="H2"||label==="•"||label==="───"?"\n"+pre+(label==="───"?"":sel)+suf+"\n":pre+sel+suf;setEC(eC.slice(0,s)+ins+eC.slice(e))}} style={{background:"#0c0c16",border:"1px solid #1e1e32",color:"#888",fontSize:11,fontWeight:700,padding:"6px 12px",cursor:"pointer",fontFamily:"inherit",borderRadius:4}}>{label}</button>)}</div>
        {/* Image upload */}
        <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}><span style={{fontSize:11,color:"#555",fontWeight:700}}>📷 Add Image:</span><input type="file" accept="image/*" onChange={addBodyImg} style={{fontSize:11,color:"#888"}}/>{eBodyImgs.length>0&&<span style={{fontSize:10,color:"#22c55e"}}>({eBodyImgs.length} uploaded)</span>}</div>
        {eBodyImgs.length>0&&<div style={{display:"flex",gap:6,marginBottom:8,overflowX:"auto"}}>{eBodyImgs.map(im=><div key={im.id} style={{position:"relative",flexShrink:0}}><img src={im.data} style={{height:60,borderRadius:4,border:"1px solid #1e1e32"}}/><button onClick={()=>{setEBodyImgs(eBodyImgs.filter(x=>x.id!==im.id));setEC(eC.replace("[IMG:"+im.id+"]",""))}} style={{position:"absolute",top:-4,right:-4,width:16,height:16,borderRadius:"50%",background:"#ef4444",border:"none",color:"#fff",fontSize:10,cursor:"pointer",padding:0}}>{"×"}</button></div>)}</div>}
        <textarea id="ge" style={{...I,minHeight:480,resize:"vertical",lineHeight:1.8,fontSize:14}} value={eC} onChange={e=>setEC(e.target.value)} placeholder="Write your guide content here..."/>
        <div style={{fontSize:10,color:"#444",marginTop:6}}>{"**bold** · # Header · ## Sub · • Bullet · ─── Divider · [text](url) · 📷 images via button above"}</div>
        <div style={{...R,marginTop:14}}><button style={B("p")} onClick={saveE}>SAVE</button><button style={B("g")} onClick={()=>setEd(false)}>CANCEL</button><div style={{flex:1}}/><button style={{...B("g"),color:"#ef4444"}} onClick={()=>del(act)}>DELETE</button></div>
      </div>:<div style={{...C,padding:0,overflow:"hidden"}}>
        {/* Header: image or gradient */}
        {guide.headerImg?<img src={guide.headerImg} style={{width:"100%",maxHeight:160,objectFit:"cover",display:"block"}} onError={e=>e.target.style.display="none"}/>
        :<div style={{background:guide.bg||"#1e1e32",padding:"28px 32px"}}><div style={{fontSize:11,color:guide.textColor||"#fff",opacity:.6,letterSpacing:2}}>CRIMSON'S</div><div style={{fontSize:26,fontWeight:800,color:guide.textColor||"#fff",letterSpacing:2}}>{guide.title.toUpperCase()}</div></div>}
        <div style={{padding:"18px 24px"}}>
          <div style={{...R,marginBottom:14}}><div style={{fontSize:11,color:"#555"}}>{guide.category} · {new Date(guide.createdAt).toLocaleDateString()}</div><div style={{flex:1}}/>{auth.role==="coach"&&<button style={B("g")} onClick={()=>{setEd(true);setET(guide.title);setEC(guide.content);setECat(guide.category||"General");setEBg(guide.bg||"");setETc(guide.textColor||"#fff");setEImg(null);setEBodyImgs(guide.images||[])}}>EDIT</button>}</div>
          <GuideText text={guide.content} images={guide.images}/>
        </div>
      </div>):<div style={{...C,textAlign:"center",padding:60}}><div style={{fontSize:48,marginBottom:10,opacity:.2}}>📖</div><div style={{color:"#444"}}>Select a guide</div></div>}</div>
    </div>
  </div>;
}

// ═══ DEATH REVIEW (per-player death tracking per game) ═══════════════════════
function DeathReviewPage({auth,ch,img,gc}){
  const[reviews,setReviews]=useState([]);const[ed,setEd]=useState(false);const[se,setSe]=useState("");
  const sk=auth.team?`crimson-deaths-${auth.team}`:"crimson-deaths";
  useEffect(()=>{(async()=>{setReviews(await load(sk,[]))})()},[sk]);
  const sv=async r=>{setReviews(r);await store(sk,r)};
  const addGame=()=>{sv([{id:Date.now(),player:auth.team||"Player",date:new Date().toISOString().split("T")[0],champion:"",vsChamp:"",score:"",result:"",deaths:[{time:"",cause:"",avoidable:true,lesson:""}],notes:""},...reviews])};
  const update=(i,k,v)=>{const r=[...reviews];r[i]={...r[i],[k]:v};sv(r)};
  const addDeath=(i)=>{const r=[...reviews];r[i].deaths=[...r[i].deaths,{time:"",cause:"",avoidable:true,lesson:""}];sv(r)};
  const updateDeath=(gi,di,k,v)=>{const r=[...reviews];r[gi].deaths[di]={...r[gi].deaths[di],[k]:v};sv(r)};
  const del=i=>sv(reviews.filter((_,j)=>j!==i));

  return<div><div style={R}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>💀 DEATH REVIEWS</div><div style={{flex:1}}/><button style={B("p")} onClick={addGame}>+ NEW GAME REVIEW</button></div>
    <div style={{fontSize:12,color:"#555",marginBottom:14}}>Track your deaths per game to identify patterns and improve. Be honest about what you could have done differently.</div>
    {reviews.length===0&&<div style={{...C,textAlign:"center",padding:50,color:"#444"}}><div style={{fontSize:40,marginBottom:8,opacity:.2}}>💀</div>No death reviews yet. Start reviewing your games to improve!</div>}
    {reviews.map((g,gi)=><div key={g.id} className="fade-in" style={{...C,borderLeft:"4px solid #ef4444"}}>
      <div style={{display:"flex",gap:10,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
        <input style={{...I,maxWidth:140,fontWeight:700}} placeholder="Player" value={g.player||""} onChange={e=>update(gi,"player",e.target.value)}/>
        <input style={{...I,maxWidth:140}} type="date" value={g.date||""} onChange={e=>update(gi,"date",e.target.value)}/>
        <input style={{...I,maxWidth:130}} placeholder="Your champ" value={g.champion||""} onChange={e=>update(gi,"champion",e.target.value)}/>
        <input style={{...I,maxWidth:130}} placeholder="VS champ" value={g.vsChamp||""} onChange={e=>update(gi,"vsChamp",e.target.value)}/>
        <input style={{...I,maxWidth:90}} placeholder="Score (K/D/A)" value={g.score||""} onChange={e=>update(gi,"score",e.target.value)}/>
        <select style={{...I,maxWidth:100}} value={g.result||""} onChange={e=>update(gi,"result",e.target.value)}><option value="">Result</option><option value="Win">Win</option><option value="Loss">Loss</option></select>
        <div style={{flex:1}}/><button style={{...B("g"),color:"#ef4444",fontSize:10,padding:"4px 10px"}} onClick={()=>del(gi)}>DEL</button>
      </div>
      {/* Deaths table */}
      <div style={{fontSize:10,color:"#555",fontWeight:700,marginBottom:6}}>DEATHS ({g.deaths.length})</div>
      {g.deaths.map((d,di)=><div key={di} style={{display:"flex",gap:8,marginBottom:6,padding:8,background:"#0c0c16",borderRadius:6,border:"1px solid #1e1e32",flexWrap:"wrap"}}>
        <span style={{fontSize:12,color:"#ef4444",fontWeight:800,width:20}}>#{di+1}</span>
        <input style={{...I,maxWidth:70,padding:"4px 8px",fontSize:12}} placeholder="Time" value={d.time||""} onChange={e=>updateDeath(gi,di,"time",e.target.value)}/>
        <input style={{...I,flex:1,padding:"4px 8px",fontSize:12,minWidth:120}} placeholder="What happened? Why did you die?" value={d.cause||""} onChange={e=>updateDeath(gi,di,"cause",e.target.value)}/>
        <select style={{...I,maxWidth:100,padding:"4px 8px",fontSize:12}} value={d.avoidable?"yes":"no"} onChange={e=>updateDeath(gi,di,"avoidable",e.target.value==="yes")}><option value="yes">Avoidable</option><option value="no">Unavoidable</option></select>
        <input style={{...I,flex:1,padding:"4px 8px",fontSize:12,minWidth:120}} placeholder="Lesson / What to do instead" value={d.lesson||""} onChange={e=>updateDeath(gi,di,"lesson",e.target.value)}/>
      </div>)}
      <button style={{...B("g"),fontSize:10,padding:"4px 12px",marginTop:4}} onClick={()=>addDeath(gi)}>+ ADD DEATH</button>
      <textarea style={{...I,marginTop:8,minHeight:36,fontSize:12,resize:"vertical"}} placeholder="Working on? Rules for this matchup?" value={g.notes||""} onChange={e=>update(gi,"notes",e.target.value)}/>
    </div>)}
  </div>;
}

// ═══ COACH NOTES (standalone + linked to drafts) ════════════════════════════
function CoachNotesPage({auth,ch,img,gc}){
  const[notes,setNotes]=useState([]);const[drafts,setDrafts]=useState([]);const[ed,setEd]=useState(false);const[eTitle,setETitle]=useState("");const[eContent,setEContent]=useState("");const[eDraft,setEDraft]=useState("");const[eTag,setETag]=useState("general");
  useEffect(()=>{(async()=>{setNotes(await load("crimson-coach-notes",[]));setDrafts(await load("crimson-draft-history",[]))})()},[]);
  const sv=async n=>{setNotes(n);await store("crimson-coach-notes",n)};
  const add=()=>{if(!eTitle.trim())return;sv([{id:Date.now(),title:eTitle,content:eContent,draftId:eDraft||null,tag:eTag,date:new Date().toISOString(),author:auth.team||"Head Coach"},...notes]);setETitle("");setEContent("");setEDraft("");setEd(false)};
  const del=i=>sv(notes.filter((_,j)=>j!==i));
  const tags=["general","draft-review","player-feedback","strategy","improvement","vod-review"];
  const tagC={general:"#888","draft-review":"#3b82f6","player-feedback":"#f97316",strategy:"#8b5cf6",improvement:"#22c55e","vod-review":"#ef4444"};

  return<div><div style={R}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>📝 COACH NOTES</div><div style={{flex:1}}/><button style={B("p")} onClick={()=>setEd(!ed)}>{ed?"CANCEL":"+ NEW NOTE"}</button></div>
    {ed&&<div className="fade-in" style={{...C,marginTop:14}}>
      <input style={{...I,marginBottom:10,fontWeight:700,fontSize:15}} placeholder="Note title..." value={eTitle} onChange={e=>setETitle(e.target.value)}/>
      <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
        <select style={{...I,maxWidth:180}} value={eTag} onChange={e=>setETag(e.target.value)}>{tags.map(t=><option key={t} value={t}>{t.replace(/-/g," ").toUpperCase()}</option>)}</select>
        <select style={{...I,maxWidth:280}} value={eDraft} onChange={e=>setEDraft(e.target.value)}>
          <option value="">Link to draft (optional)</option>
          {drafts.slice(0,20).map(d=><option key={d.id} value={d.id}>G{d.game} {d.blue} vs {d.red} — {new Date(d.date).toLocaleDateString()}</option>)}
        </select>
      </div>
      <textarea style={{...I,minHeight:200,resize:"vertical",lineHeight:1.8}} placeholder="Write your coaching notes, feedback, analysis..." value={eContent} onChange={e=>setEContent(e.target.value)}/>
      <div style={{fontSize:10,color:"#444",marginTop:4}}>{"Formatting: **bold** · # Header · ## Subheader · • Bullets · ═══ Dividers"}</div>
      <button style={{...B("p"),marginTop:10}} onClick={add}>SAVE NOTE</button>
    </div>}
    <div style={{display:"flex",flexDirection:"column",gap:10,marginTop:14}}>
      {notes.length===0&&<div style={{...C,textAlign:"center",padding:50,color:"#444"}}><div style={{fontSize:40,marginBottom:8,opacity:.2}}>📝</div>No coaching notes yet. Create one to get started.</div>}
      {notes.map((n,i)=>{
        const linked=n.draftId?drafts.find(d=>d.id===parseInt(n.draftId)):null;
        return<div key={n.id} className="card-hover fade-in" style={{...C,borderLeft:`4px solid ${tagC[n.tag]||"#888"}`}}>
          <div style={R}>
            <span style={{fontSize:10,fontWeight:700,color:tagC[n.tag],background:`${tagC[n.tag]}11`,padding:"2px 8px",borderRadius:3,textTransform:"uppercase"}}>{n.tag?.replace(/-/g," ")}</span>
            <span style={{fontSize:15,fontWeight:700,color:"#fff",flex:1}}>{n.title}</span>
            <span style={{fontSize:11,color:"#444"}}>{new Date(n.date).toLocaleDateString()}</span>
            <span style={{fontSize:10,color:"#555"}}>{n.author}</span>
            <button style={{...B("g"),color:"#ef4444",padding:"2px 8px",fontSize:9}} onClick={()=>del(i)}>DEL</button>
          </div>
          {linked&&<div style={{...R,marginTop:6,padding:6,background:"#3b82f608",borderRadius:4,border:"1px solid #3b82f622"}}>
            <span style={{fontSize:10,color:"#3b82f6"}}>📎 Linked: G{linked.game} {linked.blue} vs {linked.red}</span>
            <div style={{display:"flex",gap:2}}>{[6,9,10,17,18].map(si=>{const id=linked.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return c?<img key={si} src={img(c.id)} style={CI(18)}/>:null})}<span style={{color:"#333",fontSize:10}}>vs</span>{[7,8,11,16,19].map(si=>{const id=linked.slots?.[si];const c=id&&id!=="NONE"?gc(id):null;return c?<img key={si} src={img(c.id)} style={CI(18)}/>:null})}</div>
          </div>}
          <div style={{marginTop:8}}><GuideText text={n.content}/></div>
        </div>})}
    </div>
  </div>;
}

// ═══ TEAMS ═══════════════════════════════════════════════════════════════════
function TeamsPage({cfg,sC}){return<div><div style={R}><div style={{...CT,margin:0,color:"#ef4444",fontSize:15}}>⚙️ TEAMS</div><div style={{flex:1}}/><button style={B("p")} onClick={()=>sC({...cfg,teams:[...cfg.teams,{name:`Team ${cfg.teams.length+1}`,playerPass:`team${cfg.teams.length+1}`,coachPass:`coach${cfg.teams.length+1}`,players:ROLES.map(r=>({name:"",role:r}))}]})}>+ ADD</button></div>
  <div style={{...C,marginTop:14}}><div style={CT}>🔐 ACCESS CODES</div><div style={{display:"flex",gap:18,flexWrap:"wrap"}}><div><label style={{fontSize:11,color:"#555",fontWeight:700}}>HEAD COACH PASS</label><input style={{...I,maxWidth:220}} value={cfg.coachPass||""} onChange={e=>sC({...cfg,coachPass:e.target.value})}/></div><div><label style={{fontSize:11,color:"#555",fontWeight:700}}>STUDENT CODE</label><input style={{...I,maxWidth:220}} value={cfg.studentCode||""} onChange={e=>sC({...cfg,studentCode:e.target.value})}/></div></div></div>
  {cfg.teams.map((team,i)=><div key={i} style={C}>
    <div style={{...R,marginBottom:14,flexWrap:"wrap",gap:8}}>
      <input style={{...I,fontWeight:700,fontSize:16,maxWidth:260}} value={team.name} onChange={e=>{const ts=[...cfg.teams];ts[i]={...ts[i],name:e.target.value};sC({...cfg,teams:ts})}}/>
      <div><label style={{fontSize:9,color:"#555"}}>PLAYER PASS</label><input style={{...I,maxWidth:150,fontFamily:"monospace",padding:"6px 10px"}} value={team.playerPass||""} onChange={e=>{const ts=[...cfg.teams];ts[i]={...ts[i],playerPass:e.target.value};sC({...cfg,teams:ts})}}/></div>
      <div><label style={{fontSize:9,color:"#f97316"}}>COACH PASS</label><input style={{...I,maxWidth:150,fontFamily:"monospace",padding:"6px 10px",borderColor:"#f9731644"}} value={team.coachPass||""} onChange={e=>{const ts=[...cfg.teams];ts[i]={...ts[i],coachPass:e.target.value};sC({...cfg,teams:ts})}}/></div>
      <div style={{flex:1}}/><button style={{...B("g"),color:"#ef4444"}} onClick={()=>sC({...cfg,teams:cfg.teams.filter((_,j)=>j!==i)})}>DEL</button>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10}}>{(team.players||[]).map((p,j)=><div key={j} style={{textAlign:"center"}}><div style={{fontSize:11,color:"#555",marginBottom:6,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><RIcon role={ROLES[j]} size={14} color="#555"/>{ROLES[j]}</div><input style={{...I,textAlign:"center"}} value={p.name||""} placeholder="Player" onChange={e=>{const ts=[...cfg.teams];ts[i].players[j]={...ts[i].players[j],name:e.target.value};sC({...cfg,teams:ts})}}/></div>)}</div>
  </div>)}
  {cfg.teams.length===0&&<div style={{...C,textAlign:"center",padding:50,color:"#444",marginTop:14}}>No teams</div>}
</div>}
