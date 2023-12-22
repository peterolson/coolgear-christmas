import{s as o,n as s}from"../chunks/scheduler.k-kUyWhY.js";import{S as i,i as r,g as n,h,y as p,a as c,f as v}from"../chunks/index.5XCitCbI.js";function m(a){let e,l=`When <b>Cool</b><i>Gear</i> employees get bored, they start playing a game using whatever random objects they can find around the office.

In this two-player game, objects are arranged into several piles.

<b>Example 1</b>
<table class="svelte-11dzhp2">
    <tbody>
        <tr>
            <td class="svelte-11dzhp2">Pile 1</td><td class="svelte-11dzhp2">Pile 2</td><td class="svelte-11dzhp2">Pile 3</td>
        </tr>
        <tr>
            <td class="svelte-11dzhp2">Three staplers</td><td class="svelte-11dzhp2">Five pencils</td><td class="svelte-11dzhp2">Seven sticky notes</td>
        </tr>
    </tbody>
</table>
On their turn, a player must choose a single pile and then remove at least one object from that pile. 

It is allowed to remove the whole pile, to remove only one item from that pile, or anything between. 

It is not allowed to remove objects from multiple piles in a single turn.

Whichever player takes the last object loses the game.

A game is said to be “losing” if there is no way to win against a perfect opponent. If it is not “losing”, then it is “winning”.

<b>Example 2</b>
<table class="svelte-11dzhp2">
    <tbody>
        <tr>
            <td class="svelte-11dzhp2">Pile 1</td><td class="svelte-11dzhp2">Pile 2</td>
        </tr>
        <tr>
            <td class="svelte-11dzhp2">Two hats</td><td class="svelte-11dzhp2">Two bracelets</td>
        </tr>
    </tbody>
</table>
The game shown in Example 2 is losing: if you take one object from a pile, your opponent can take both objects from the other pile, forcing you to take the last object. If you instead take both objects from a pile, your opponent can take one object from the other pile, again leaving you with the last object.

<b>Example 3</b>
<table class="svelte-11dzhp2">
    <tbody>
        <tr>
            <td class="svelte-11dzhp2">Pile 1</td><td class="svelte-11dzhp2">Pile 2</td><td class="svelte-11dzhp2">Pile 3</td><td class="svelte-11dzhp2">Pile 4</td>
        </tr>
        <tr>
            <td class="svelte-11dzhp2">One pen</td><td class="svelte-11dzhp2">One fork</td><td class="svelte-11dzhp2">One hairpin</td><td class="svelte-11dzhp2">One plate</td>
        </tr>
    </tbody>
</table>
The game shown in Example 3 is winning.

<h3>Problem 1</h3>Is the game shown in Example 1 winning?

<h3>Problem 2</h3>Recall the Twelve Days of Christmas song:
<i>
	On the first day of Christmas my true love gave to me,
	A partridge in a pair tree.

	On the second day of Christmas, my true love gave to me,
	Two turtledoves,
	And a partridge in a pair tree.
	[etc.]
</i>
Consider the piles of objects you have accumulated after the <i>n</i>th day of receiving Christmas gifts from your true love:

<b>Day 1</b>
<table class="svelte-11dzhp2">
    <tbody>
        <tr>
            <td class="svelte-11dzhp2">Pile 1</td>
        </tr>
        <tr>
            <td class="svelte-11dzhp2">A partridge in a pair tree</td>
        </tr>
    </tbody>
</table>

<b>Day 2</b>
<table class="svelte-11dzhp2">
    <tbody>
        <tr>
            <td class="svelte-11dzhp2">Pile 1</td><td class="svelte-11dzhp2">Pile 2</td><td class="svelte-11dzhp2">Pile 3</td>
        </tr>
        <tr>
            <td class="svelte-11dzhp2">A partridge in a pair tree</td><td class="svelte-11dzhp2">Two turtledoves</td><td class="svelte-11dzhp2">A partridge in a pair tree</td>
        </tr>
    </tbody>
</table>
[etc.]

Day 1 is a losing game and day 2 is a winning game. For each day 3-12, determine whether it is a winning or losing game.
<table class="svelte-11dzhp2">
    <tr>
        <td class="svelte-11dzhp2">Day</td>
        <td class="svelte-11dzhp2">1</td>
        <td class="svelte-11dzhp2">2</td>
        <td class="svelte-11dzhp2">3</td>
        <td class="svelte-11dzhp2">4</td>
        <td class="svelte-11dzhp2">5</td>
        <td class="svelte-11dzhp2">6</td>
        <td class="svelte-11dzhp2">7</td>
        <td class="svelte-11dzhp2">8</td>
        <td class="svelte-11dzhp2">9</td>
        <td class="svelte-11dzhp2">10</td>
        <td class="svelte-11dzhp2">11</td>
        <td class="svelte-11dzhp2">12</td>
    </tr>
    <tr>
        <td class="svelte-11dzhp2">Winning or losing?</td>
        <td class="svelte-11dzhp2">L</td>
        <td class="svelte-11dzhp2">W</td>
    </tr>
</table>
									
`;return{c(){e=n("pre"),e.innerHTML=l},l(t){e=h(t,"PRE",{"data-svelte-h":!0}),p(e)!=="svelte-14ytbvz"&&(e.innerHTML=l)},m(t,d){c(t,e,d)},p:s,i:s,o:s,d(t){t&&v(e)}}}class g extends i{constructor(e){super(),r(this,e,null,m,o,{})}}export{g as component};
