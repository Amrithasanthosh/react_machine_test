import React from "react";
import { tabs } from "../constants";
import "./options.css"

const Options = (props) => {
    const {
        selectedTab,
        setSelectedTab,
    } = props;

    return (
        <div className="options">
            {
                tabs?.map((tab, index) => (
                    <div
                        key={index}
                        className={
                            tab === selectedTab
                                ? "option-active"
                                : "option"
                        }
                        onClick={() => {
                            setSelectedTab(tab);
                        }}
                    >
                        {tab}
                    </div>
                ))
            }
        </div>
    );
};

export default Options;
