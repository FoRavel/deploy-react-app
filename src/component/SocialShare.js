import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
} from "react-share";
import React from "react";
import "./SocialShare.css";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';


export default class SocialShare extends React.Component {

    constructor(props) {
        super(props);
        this.buttonsName = [
            FacebookShareButton,
            TwitterShareButton,
            EmailShareButton,
            WhatsappShareButton,
            LinkedinShareButton,
            InstapaperShareButton,
            PinterestShareButton,
            PocketShareButton,
            RedditShareButton,
            TelegramShareButton,
            TumblrShareButton,

        ]
        this.iconsName = [
            FacebookIcon,
            TwitterIcon,
            WhatsappIcon,
            LinkedinIcon,
            EmailIcon,
            InstapaperIcon,
            PinterestIcon,
            PocketIcon,
            RedditIcon,
            TelegramIcon,
            TumblrIcon,
            ViberIcon,
        ]
        this.sharedUrl = 'https://brake-coronavirus.com';
        this.sizeIcon = '64';
        this.isRoundIcon = false;
    }

    displayButtons = () => {
        
        return(
            
            this.buttonsName.map((name, i) => {
                var IconName = this.iconsName[i];
                var ButtonName = name;
                return(
                <li>
                    <ButtonName url={this.sharedUrl}>
                        <IconName size={this.sizeIcon} url={this.sharedUrl} />
                    </ButtonName>
                </li>
                )
                
            })
        ) 
    }

    componentDidMount() {

    }


    render() {
        return (
            <div class="social-bar">    
                <ul>
                {this.displayButtons()}
                </ul>
            </div>
        );
    }
}

