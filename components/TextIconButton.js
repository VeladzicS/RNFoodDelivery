import React from "react";
import {
    TouchableOpacity,
    Text,
    Image

} from "react-native";

import {COLORS,FONTS } from "../constants";

const TextIconButton = ({label, labelStyle, containerStyle, icon, iconStyle, onPress}) => {
    return(
        <TouchableOpacity style={{alignItems:"center", justifyContent:"center", flexDirection:"row", ...containerStyle}} onPress={onPress}>
            <Text style={{...FONTS.body3, ...labelStyle}}>
                {label}
            </Text>
            <Image source={icon} style={{marginLeft:5, width:15, height:15, tintColor:COLORS.black, ...iconStyle}}/>
        </TouchableOpacity>
    )
}

export default TextIconButton;