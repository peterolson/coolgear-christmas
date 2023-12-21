<pre>
When <b>Cool</b><i>Gear</i> employees get bored, they start playing a game using whatever random objects they can find around the office.

In this two-player game, objects are arranged into several piles.

<b>Example 1</b>
<table>
    <tbody>
        <tr>
            <td>Pile 1</td><td>Pile 2</td><td>Pile 3</td>
        </tr>
        <tr>
            <td>Three staplers</td><td>Five pencils</td><td>Seven sticky notes</td>
        </tr>
    </tbody>
</table>
On their turn, a player must choose a single pile and then remove at least one object from that pile. 

It is allowed to remove the whole pile, to remove only one item from that pile, or anything between. 

It is not allowed to remove objects from multiple piles in a single turn.

A game is said to be “losing” if there is no way to win against a perfect opponent. If it is not “losing”, then it is “winning”.

<b>Example 2</b>
<table>
    <tbody>
        <tr>
            <td>Pile 1</td><td>Pile 2</td>
        </tr>
        <tr>
            <td>Two hats</td><td>Two bracelets</td>
        </tr>
    </tbody>
</table>
The game shown in Example 2 is losing: if you take one object from a pile, your opponent can take both objects from the other pile, forcing you to take the last object. If you instead take both objects from a pile, your opponent can take one object from the other pile, again leaving you with the last object.

<b>Example 3</b>
<table>
    <tbody>
        <tr>
            <td>Pile 1</td><td>Pile 2</td><td>Pile 3</td><td>Pile 4</td>
        </tr>
        <tr>
            <td>One pen</td><td>One fork</td><td>One hairpin</td><td>One plate</td>
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
<table>
    <tbody>
        <tr>
            <td>Pile 1</td>
        </tr>
        <tr>
            <td>A partridge in a pair tree</td>
        </tr>
    </tbody>
</table>

<b>Day 2</b>
<table>
    <tbody>
        <tr>
            <td>Pile 1</td><td>Pile 2</td><td>Pile 3</td>
        </tr>
        <tr>
            <td>A partridge in a pair tree</td><td>Two turtledoves</td><td>A partridge in a pair tree</td>
        </tr>
    </tbody>
</table>
[etc.]

Day 1 is a losing game and day 2 is a winning game. For each day 3-12, determine whether it is a winning or losing game.
<table>
    <tr>
        <td>Day</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
    </tr>
    <tr>
        <td>Winning or losing?</td>
        <td>L</td>
        <td>W</td>
    </tr>
</table>
									
</pre>

<style>
    td {
        padding: 2px 8px;
    }
    table {
        margin-left: 1rem;
        margin-top: 0.5rem;
        margin-bottom: -0.5rem;
    }
</style>