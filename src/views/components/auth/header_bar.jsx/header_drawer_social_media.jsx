import {
  FB_LOGO,
  INSTAGRAM_LOGO,
  LINKEDIN_LOGO,
  MENU_LOGO,
  TELEGRAM_LOGO,
  TWITTER_LOG,
  TWITTER_LOGO,
  YOUTUBE_LOGO,
} from "@src/helpers/image_constants";
import { Image } from "antd";
import React from "react";

const HeaderDrawerSocialMedia = () => {
  return (
    <>
      <div className="header_drawer_social_media_container">
        <div className="header_drawer_social_media_wrapper">
          <Image preview={false} className="drawer_menu_icon" src={FB_LOGO} />
          <Image
            preview={false}
            className="drawer_menu_icon"
            src={TWITTER_LOGO}
          />
          <Image
            preview={false}
            className="drawer_menu_icon"
            src={INSTAGRAM_LOGO}
          />
          <Image
            preview={false}
            className="drawer_menu_icon"
            src={LINKEDIN_LOGO}
          />
        </div>
      </div>

      <div className="header_drawer_social_media_container">
        <div className="header_drawer_social_small_wrapper">
          <Image
            preview={false}
            className="drawer_menu_icon"
            src={YOUTUBE_LOGO}
          />
          <Image
            preview={false}
            className="drawer_menu_icon"
            src={TELEGRAM_LOGO}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderDrawerSocialMedia;
