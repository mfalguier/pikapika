import * as React from 'react'

interface Iprops {
    tweetData: any
}

const tweetItem: React.FunctionComponent<Iprops> = (props) => {
    const { tweetData } = props;
    return (
        <div className="tweet-item">
            <div className="row">
                <div className="col col-md-3">
                    <img src={tweetData.user.profile_image_url} alt={tweetData.user.name} className="circle responsive-img" />
                    <p className="smaller-text">{tweetData.user.name}</p>
                </div>
                <div className="col col-md-9">
                    <strong className="smaller-text">{tweetData.created_at}</strong>
                    <p className="black-text">{tweetData.text}</p>
                </div>
            </div>
        </div>
    );
}

export default tweetItem;