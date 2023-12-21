<pre>
Due to budgetary constraints, Santa has been compelled to shut down his gift delivery office and sub-contract the coordination of gift delivery to <b>Cool</b><i>Gear</i>.

One of the hidden secrets of Santa's operation is that he delegates most of the gift delivery to his elves, who are responsible for ensuring that gifts appear under the Christmas tree on Christmas morning. 

At the start, the gifts (🎁) and elves (🧑‍🎄) are scattered around randomly around a Christmas tree (🎄), which is represented as a 2D grid, as shown below.

🧑‍🎄⬜⬜🧑‍🎄
⬜⬜🎁⬜
⬜⬜⬜⬜
⬜⬜🎄⬜

The elves are able to skate east-west or north-south across the grid, but not diagonally. 
When they start to skate, they continue moving in the same direction until they reach the edge of the map or another object.

For example, the elf at the top can skate to the east until he reaches the other elf.

⬜⬜🧑‍🎄🧑‍🎄
⬜⬜🎁⬜
⬜⬜⬜⬜
⬜⬜🎄⬜

In addition to skating, when elves are adjacent to a gift, they can push the gift away from themselves. 
Once a gift is pushed, it will continue to slide in the same direction until it reaches the edge of the map or another object.

For example, the elf can now push the gift southwards into the Christmas tree, fulfilling his duty.

⬜⬜🧑‍🎄🧑‍🎄
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜🎄⬜

Elves are not strong enough to push multiple gifts at once, so if there are multiple gifts in a row next to an elf, they cannot push any of them.

🧑‍🎄🎁🎁🎄

<h3>Problem 1</h3>What is the minimum number of moves required for the elves in the map below to deliver all the gifts to the Christmas tree?

⬜⬜⬜🧑‍🎄⬜
🧑‍🎄🎄⬜🎁⬜
⬜⬜⬜🎁⬜
⬜🎁⬜⬜⬜
⬜⬜🧑‍🎄⬜⬜

<h3>Problem 2</h3>Consider all of the 3x7 maps with a tree in a corner square, up to 3 elves, and up to 5 gifts. Among these maps, what is the maximum possible number of moves necessary to deliver all the gifts to the tree?


</pre>