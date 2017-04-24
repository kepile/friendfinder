// ===============================================================================
// DATA
// Below data will hold all of the data for the friends.
// Initially  set it equal to several "dummy" customers.
// But it could be an empty array as well.
// ===============================================================================

var friendsArray = [{
   "name":"Homer Simpson",
   "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQtBQcyTsxqm2uLd9OkNz5NynQVyx2G1QPNT1OvMpAgdf5NxjVg",
   "answer":[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
 },
 {
   "name": "Minnie",
   "photo": "https://upload.wikimedia.org/wikipedia/en/6/67/Minnie_Mouse.png",
   "answer": [
   "5",
   "5",
   "5",
   "5",
   "5",
   "5",
   "5",
   "5",
   "5",
   "5"
   ]
   },
   {
   "name": "Mickey",
   "photo": "https://s-media-cache-ak0.pinimg.com/originals/8b/da/c6/8bdac6d84d7c2b7561f0dc36cc141f62.png",
   "answer": [
   "3",
   "3",
   "3",
   "3",
   "3",
   "3",
   "3",
   "3",
   "3",
   "3"
   ]
   }, 
   {
   "name": "Bugs Bunny",
   "photo": "https://www.google.com/search?q=bugs+bunny&rlz=1C1CHBF_enUS725US725&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi-ue6QmrfTAhXDSyYKHcgTBmgQ_AUIBigB&biw=1536&bih=759",
   "answer": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "1",
   "2",
   "3",
   "4",
   "5"
   ]
   },
   {
   "name": "SpongeBob",
   "photo": "https://vignette4.wikia.nocookie.net/nickelodeon/images/4/47/Spongebob.png/revision/latest?cb=20170402020121",
   "answer": [
   "5",
   "4",
   "3",
   "2",
   "1",
   "5",
   "1",
   "4",
   "2",
   "3"
   ]
}

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
