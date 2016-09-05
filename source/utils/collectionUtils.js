function getNumberOfTweetsInCollection(collection) {
	var TweetUtils = require('./TweetUtils')
	var listOfCollectionTweetIds = TweetUtils.getListOfTwetIds(collection);
	return listOfCollectionTweetIds.length;
}


function isEmptyCollection(collection){
	return (getNumberOfTweetsInCollection(collection) === 0);_
}

module.exports = {
	getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
	isEmptyCollection: isEmptyCollection
}