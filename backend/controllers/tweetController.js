const {postTweet, getUserTimeline} = require('../services/tweetService')

const createTweet = async (req, res) => {
  try {
    const {text} = req.body
    const tweet = await postTweet(req.user.id, text)
    res.json(tweet)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const fetchUserTimeline = async (req, res) => {
  try {
    const tweets = await getUserTimeline(req.params.userId)
    res.json(tweets)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {createTweet, fetchUserTimeline}
