(function(){
'use strict';
document.documentElement.classList.add('js');
var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();

var nav=document.getElementById('nav');

/* scroll reveal */
var els=document.querySelectorAll('.card,.person,.plan,.col,.lead,.h2');
els.forEach(function(e){e.classList.add('rv')});
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
  els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('in')})}

/* language toggle */
var T={
en:{title:'Why every business needs a website.',sub:'Customers search online before they visit, call or buy. Here is what changes when you show up.',yes:'With a website',no:'Without a website',
y1:'Customers find you on Google, day and night.',y2:'You look trusted before anyone speaks to you.',y3:'Enquiries reach you on WhatsApp in one tap.',y4:'Prices, photos and timings are always up to date.',y5:'You reach your whole city, not just your street.',
n1:'Customers choose the competitor they can find.',n2:'People doubt a business they cannot look up.',n3:'You answer the same questions again and again.',n4:'Your business only exists during shop hours.',n5:'You depend on word of mouth to grow.'},
hi:{title:'हर बिज़नेस को वेबसाइट क्यों चाहिए।',sub:'ग्राहक आने, कॉल करने या खरीदने से पहले ऑनलाइन खोजते हैं। वेबसाइट होने पर यह बदल जाता है।',yes:'वेबसाइट होने पर',no:'वेबसाइट न होने पर',
y1:'ग्राहक आपको दिन-रात Google पर ढूंढ लेते हैं।',y2:'बात करने से पहले ही लोग आप पर भरोसा करते हैं।',y3:'पूछताछ एक टैप में आपके WhatsApp पर पहुँचती है।',y4:'दाम, फोटो और समय हमेशा अपडेट रहते हैं।',y5:'आप पूरे शहर तक पहुँचते हैं, सिर्फ अपनी गली तक नहीं।',
n1:'ग्राहक उस दुकान को चुनते हैं जो उन्हें ऑनलाइन मिलती है।',n2:'जिस बिज़नेस को खोज नहीं सकते, उस पर शक होता है।',n3:'आप वही सवाल बार-बार दोहराते रहते हैं।',n4:'आपका बिज़नेस सिर्फ दुकान खुलने के समय दिखता है।',n5:'बढ़ने के लिए आप सिर्फ मुँहज़बानी प्रचार पर निर्भर रहते हैं।'},
hg:{title:'Har business ko website kyun chahiye.',sub:'Customer aane, call karne ya kharidne se pehle online search karte hain. Website hone se ye sab badal jata hai.',yes:'Website ke saath',no:'Website ke bina',
y1:'Customer aapko Google par din-raat dhoondh lete hain.',y2:'Baat karne se pehle hi log aap par bharosa karte hain.',y3:'Enquiry ek tap mein aapke WhatsApp par aa jati hai.',y4:'Price, photos aur timing hamesha updated rehte hain.',y5:'Aap poore shehar tak pahunchte ho, sirf apni gali tak nahi.',
n1:'Customer wahi dukaan chunte hain jo online mil jaye.',n2:'Jis business ko search nahi kar sakte, us par shak hota hai.',n3:'Aap wahi sawal baar-baar dohrate rehte ho.',n4:'Aapka business sirf dukaan ke time par dikhta hai.',n5:'Grow karne ke liye sirf word of mouth par depend karna padta hai.'}};
var sec=document.getElementById('why'),btns=sec.querySelectorAll('[data-lang]'),code={en:'en',hi:'hi',hg:'en'};
function setLang(l){
  sec.classList.add('swap');
  setTimeout(function(){
    sec.querySelectorAll('[data-i]').forEach(function(n){n.textContent=T[l][n.getAttribute('data-i')]});
    sec.setAttribute('lang',code[l]);
    sec.classList.remove('swap');
  },180);
  btns.forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-lang')===l))});
  try{localStorage.setItem('lang',l)}catch(e){}
}
btns.forEach(function(b){b.addEventListener('click',function(){setLang(b.getAttribute('data-lang'))})});
try{var s=localStorage.getItem('lang');if(s&&T[s]&&s!=='en')setLang(s)}catch(e){}
})();
