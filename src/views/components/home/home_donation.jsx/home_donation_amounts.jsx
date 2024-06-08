import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import HomeDonationInput from "./home_donation_input";
import { dynamic_clear, useDynamicSelector } from "@src/services/redux";
import { useDispatch } from "react-redux";
import { initiate_request_razorpay_payment } from "@src/helpers/functions";
import AppreciationModal from "../../custom_components/appreciation_modal/appreciation_modal";

const HomeDonationAmounts = (props) => {
  const { amount, set_amount } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [selected_amount, set_selected_amount] = useState(null);
  const [manual_amount, set_manual_amount] = useState(false);
  const [payment_response, set_payment_response] = useState("");
  const [popper_status, set_popper_status] = useState(false);
  const [appreciation_modal_open, set_appreciation_modal] = useState(false);
  const amounts = [199, 499, 999, 1999];

  const other_amount = "others";
  const payment_status = payment_response.razorpay_signature;

  const message =
    "Together, let's make an impact through your donations. Keep supporting us.";
  const subtitle = "We extend our sincere appreciation for your donation.";

  const { status: create_donation_status, order_id } =
    useDynamicSelector("create_donation");

  console.log("create_donation_status", create_donation_status);

  useEffect(() => {
    if (create_donation_status === "Success") {
      set_selected_amount(null);
      set_amount("");
    }
    dispatch(dynamic_clear("create_donation"));
  }, [create_donation_status]);

  useEffect(() => {
    if (order_id) {
      initiate_request_razorpay_payment(order_id, set_payment_response);
      dispatch(dynamic_clear("create_donation"));
    }
  }, [order_id]);

  useEffect(() => {
    if (payment_status) {
      set_appreciation_modal(true);
      set_popper_status(true);
      setTimeout(() => {
        set_appreciation_modal(false);
        set_popper_status(false);
      }, 10000);
    }
  }, [payment_status]);

  const on_click_amount = (amount) => {
    set_selected_amount(amount);
    set_amount(amount);
    if (amount !== other_amount) {
      set_manual_amount(false);
    }
  };

  return (
    <div className="home_donation_third_column_container">
      <div className="home_donation_third_column_wrapper">
        <div className="donate_amt_content_text">
          {t("make_a_small_contribution...")}
        </div>

        <div className="home_amount_wrapper">
          {manual_amount ? (
            <div className="home_donation_input_wrapper">
              <HomeDonationInput set_amount={set_amount} value={amount} />
              <Button
                className="cursor-pointer back_button"
                onClick={() => {
                  set_manual_amount(false);
                  set_selected_amount(null);
                  set_amount("");
                }}
              >
                {t("Back")}
              </Button>
            </div>
          ) : (
            <>
              {amounts.map((amount) => (
                <Button
                  key={amount}
                  className={`cursor-pointer ${
                    selected_amount === amount
                      ? "badge_selected"
                      : "badge_default"
                  }`}
                  onClick={() => on_click_amount(amount)}
                >
                  ₹{amount}
                </Button>
              ))}
            </>
          )}

          {!manual_amount && (
            <Button
              className={`cursor_pointer  ${
                selected_amount === other_amount
                  ? "badge_selected"
                  : "badge_default"
              }`}
              onClick={() => {
                set_manual_amount(!manual_amount);
                on_click_amount(other_amount);
                set_amount("");
              }}
            >
              {t("Other")}
            </Button>
          )}
        </div>

        <div className="donate_inr_text">
          {t("currently_we_accept_only_INR_donations")}
        </div>
      </div>

      <AppreciationModal
        subtitle={subtitle}
        message={message}
        popper_status={popper_status}
        appreciation_modal_open={appreciation_modal_open}
        set_appreciation_modal={set_appreciation_modal}
      />
    </div>
  );
};

export default HomeDonationAmounts;
