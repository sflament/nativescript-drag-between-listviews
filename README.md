## Goal

This is a try to build a sample to drag one item from a listview and drop this item in an another listview, just after the item where we do the drop.
- The first listview contains : 1,2,d,f,5,k
- The second listview contains : a,b,c,3,4,f,g,h,i,j,6

The sample application should permit to swap items between the 2 listviews, with a drap and drop
and then obtain a correct ordered listviews, numbers on one side, letters on the other :
- 1,2,3,4,5,6
- a,b,c,d,e,f,g,h,j,k

## Status

For now, the sample application :
- septup a gridlayout with 2 listview (one on left, one on right), with a generic label above and a generic label under
- listviews are initiated with values, in xml file
- on item is added in each listview with JS, when page is loded
- a "floating" label, called dragLabel, is setup in xml to be dragged with a pan gesture
- dragLabel is changed to visible and text to moving when pan gesture began
- dragLabel is dragged with pangesture, but misplaced

To be done :
- dradLabel should appear at the same place where the pan gesture began
- dragLabel should take the text of the listview item to be moved
- when pan gesture stop on a item in second listview, item in listview one should be deleted, and same item should be added on the target listview

If the Pan Gesture is ot the good item to achieve the drag n drop between listview, felle free to try something else

# License
This is released under the MIT License, meaning you are free to include this in any type of program




