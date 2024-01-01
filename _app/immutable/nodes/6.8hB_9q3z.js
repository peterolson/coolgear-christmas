import{s as l,n}from"../chunks/scheduler.k-kUyWhY.js";import{S as s,i as r,g as h,h as u,y as d,a as c,f as p}from"../chunks/index.5XCitCbI.js";function y(t){let e,a=`Santa has consulted <b>Cool</b><i>Gear</i> to help him with expanding his operations to China, due to the large number of children living there who do not currently receive his gifts.

However, Santa has run into a problem: he does not know how to speak Chinese, and this thwarts his efforts to determine who is naughty and who is nice.

To start gently, let&#39;s help Santa understand the basic phonotactics of Mandarin Chinese.

In Hanyu Pinyin, there are 22 possible syllable initials:

b, p, m, f
d, t, n, l
g, k, h
j, q, x
zh, ch, sh, r
z, c, s
∅ (null initial)

and 35 possible syllable finals:

Group a: a,e,ai,ei,ao,ou,an,en,ang,eng,ong,u
Group i: ia,ie,iao,iu,ian,in,iang,ing,iong
Group u: ua,uo,uai,ui,uan,un,uang
Group ü: ü,üe,üan,ün
Misfits: i, o, er

Syllables can be formed by combining an initial with a final. However, not all possible combinations are phonotactically valid.

The rules below form a simplified approximation of the rules of Mandarin Chinese phonotactics and pinyin spelling:
<ol><li>∅ (the null initial) can be combined with any of the finals. However, some finals are written differently in a syllable with a null initial. 
Namely:
<table>
    <tr>
        <td class="svelte-1fumn3">∅+i=yi
∅+ia=ya
∅+iao=yao
∅+ie=ye
∅+iu=you
∅+ian=yan
∅+in=yin
∅+iang=yang
∅+ing=ying
∅+iong=yong</td>
        <td class="svelte-1fumn3">∅+u=wu
∅+ua=wa
∅+uo=wo
∅+uai=wai
∅+ui=wei
∅+uan=wan
∅+un=wen
∅+uang=wang</td>
        <td class="svelte-1fumn3">∅+ü=yu
∅+üe=yue
∅+üan=yuan
∅+ün=yun</td>
    </tr>
</table>
</li><li>&quot;Group a&quot; finals can be paired with any initial except j,q,x</li>
<li>&quot;Group i&quot; finals can only be paired with ∅,b,p,m,d,t,n,l,j,q,x </li>
<li>&quot;Group u&quot; finals can only be paired with ∅,d,t,n,l,g,k,h,zh,ch,sh,r,z,c,s</li>
<li>&quot;Group ü&quot; finals can only be paired with ∅,n,l,j,q,x. 
When j,q,x are paired with ü, the diacritics are dropped. E.g. jü ⇛ ju</li>
<li>&quot;i&quot; can be paired with any initial except g,k,h</li>
<li>&quot;o&quot; can only be paired with ∅,b,p,m,f,l</li>
<li>&quot;er&quot; can only be paired with ∅</li></ol>
<h3>Problem 1</h3>According to the rules above, how many possible syllables are there in Hanyu Pinyin?
<h3>Problem 2</h3>Some words in English can be reanalyzed as a sequence of pinyin syllables. 

For example, &quot;enchilada&quot; can be divided into valid pinyin syllables en-chi-la-da.

However, some English words have combinations of letters that cannot be divided into valid pinyin syllables, such as &quot;chocolate&quot;.

What is the longest word in the English language (according to <a href="https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt">this wordlist</a>) that can be reanalyzed as a series of pinyin syllables?
`;return{c(){e=h("pre"),e.innerHTML=a},l(i){e=u(i,"PRE",{"data-svelte-h":!0}),d(e)!=="svelte-1dnck60"&&(e.innerHTML=a)},m(i,o){c(i,e,o)},p:n,i:n,o:n,d(i){i&&p(e)}}}class w extends s{constructor(e){super(),r(this,e,null,y,l,{})}}export{w as component};