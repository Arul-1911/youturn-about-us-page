import React, { useState } from "react";
import { Button, Row } from "antd";
import { useTranslation } from "react-i18next";
import HomeDonationAmounts from "./home_donation_amounts";
import UserDetailsFormModal from "./user_details_form_modal/user_details_form_modal";
import HomeDonationFightAgainst from "./home_donation_fight_against";

const HomeDonation = () => {
  const { t } = useTranslation();
  const [amount, set_amount] = useState("");

  const [is_user_details_modal_open, set_user_details_modal_open] =
    useState(false);

  const handle_donate_click = () => {
    set_user_details_modal_open(true);
  };

  const is_donate_button_enabled =
    (amount && amount !== "others") || (amount === "others" && amount > 0);

  return (
    <>
      <Row className="home_donation_container">
        <Row className="home_donation_wrapper">
          <HomeDonationFightAgainst />
          <div className="home_donation_second_column_container">
            <div className="home_donatio_content">
              {t("donate_horizontal_content")}
            </div>
          </div>
          <HomeDonationAmounts amount={amount} set_amount={set_amount} />
          <div className="home_donation_fourth_column_container">
            <Button
              disabled={!is_donate_button_enabled}
              className={
                !is_donate_button_enabled
                  ? "home_donate_button_disabled"
                  : "home_donate_button"
              }
              onClick={handle_donate_click}
            >
              {t("donate")}
            </Button>
          </div>
        </Row>
      </Row>

      <UserDetailsFormModal
        modal_open={is_user_details_modal_open}
        on_cancel={set_user_details_modal_open}
        amount={amount}
      />
    </>
  );
};

export default HomeDonation;
