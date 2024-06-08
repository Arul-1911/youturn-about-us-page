import React from "react";
import { Image, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SEARCH_LOGO } from "@src/helpers/image_constants";

const HeaderSearch = () => {
  return (
    <div className="user_layout_search_container">
      <Input
        className="user_layout_search_input non-mobile_screen"
        allowClear
        prefix={
          <Space>
            <SearchOutlined className="header_search_icon" />
          </Space>
        }
      />
      <Image
        preview={false}
        className="search_mobile_icon mobile_screen"
        src={SEARCH_LOGO}
      />
    </div>
  );
};

export default HeaderSearch;
