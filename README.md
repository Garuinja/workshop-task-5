Link - https://garuinja.github.io/workshop-task-5/

### Brief Account of Experimentation
- I decided to go with a line graph because the other graphs were harder to imagine in code. I knew that to make a line graph I had to have points that would equate to their relevant values so I went and printed out the numbers of days horizontally and then I went to print out the amount values vertically. I then went on to work on making the plot points which went okay. Making the lines work were the most difficult task but after I got them working it was fine. After getting the first set of lines, I just copy and pasted and then I was just polishing it up so that it would look good. I then finally made circles for the plot points so that they were more visible.

### Problem Solving
- When making the makeLine function, I knew that after using the first xy coordinates that I had to remove them so that I can make the new line but I didn't know how to. I was searching up ways online until finding .splice(). The function was suggest by Microsoft Copilot when I was searching ".remove() javascript" on Microsoft Bing. After going to this website "https://www.w3schools.com/jsref/jsref_splice.asp" I fully understood how to use the splice function. Another problematic thing was using the fill function to colour the lines because it was also affecting the amount labels and day labels. But it wasn't too hard to fix, all I had to do was to put the lines above the labels and place a fill(0) and strokeWeight(0) in between the lines and the labels.

### Future Development
- I want to make a white grid background so that it looks like a proper math type of chart thing.
