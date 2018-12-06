const Twitter = require('twitter');

module.exports = (app, io) => {
    let twitter = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    let socketConnection;
    let twitterStream = null;


    const stream = (search) => {
        console.log("search text", search);
        twitter.stream('statuses/filter', { track: search }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });
            stream.on('error', (error) => {
                console.log(error);
            });
            twitterStream = stream;
        });
    }
    

    //socket connection.
    io.on("connection", socket => {
        socketConnection = socket;
        socketConnection.on("search", (search)=>{
            if(twitterStream)
                twitterStream.destroy();
            stream(search);
        })
    });

    /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {
        if (msg.text.includes('RT')) {
            return;
        }
        socketConnection.emit("tweets", msg);
    }
};