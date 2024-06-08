import React from "react";
import { useTranslation } from "react-i18next";

const HomeDonationFightAgainst = () => {
  const { t } = useTranslation();

  return (
    <div className="home_donation_first_column_container">
      <div className="home_donation_first_column_wrapper">
        <div className="home_donation_fight_against_wrapper">
          <text className="donation_hash_text">#</text>
          <text className="donation_fight_against_text">
            {t("fight_against_fake_news")}
          </text>
        </div>
      </div>
    </div>
  );
};

export default HomeDonationFightAgainst;
