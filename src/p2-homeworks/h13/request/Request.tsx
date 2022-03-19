// @flow
import * as React from 'react';
import SuperInputText from "../../h4/common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";

type PropsRequestType = {

};

function Request(props: PropsRequestType) {
    return (
        <div>
            <SuperInputText />
            <SuperCheckbox />
        </div>
    );
};


export default Request;