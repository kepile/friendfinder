// ===============================================================================
// DATA
// Below data will hold all of the data for the friends.
// Initially we just set it equal to several "dummy" customers.
// But you could have it be an empty array as well.
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
   "photo": "data:image/jpeg;base64,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",
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