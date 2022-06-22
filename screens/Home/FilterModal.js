import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Modal,

} from "react-native";

import {COLORS, FONTS, SIZES, constants, icons} from "../../constants";
import {IconButton, TwoPointSlider} from "../../components";


const Section = ({containerStyle, title, children}) => {
    return(
        <View style={{marginTop:SIZES.padding, ...containerStyle}}>
            <Text style={{...FONTS.h3}}>{title}</Text>
            {children}
        </View>
    )
}

function renderDistance() {
    return(
        <Section title="Distance">
            <View style={{alignItems:"center"}}>
                <TwoPointSlider values={[3,10]} min={1} max={20} postfix="km" onValuesChange={(values) => console.log(values)}/>
            </View>
        </Section>
    )
}

const FilterModal = ({isVisible, onClose}) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current
    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)

        React.useEffect(() => {
            if(showFilterModal) {
                Animated.timing(modalAnimatedValue, {
                    toValue:1,
                    duration:500,
                    useNativeDriver:false
                }).start();
            } else {
                Animated.timing(modalAnimatedValue, {
                    toValue:0,
                    duration:500,
                    useNativeDriver:false
                }).start(() => onClose());
            }
        }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[SIZES.height, SIZES.height - 680]
    })

      return (
          <Modal animationType="fade" transparent={true} visible={isVisible}>
               <View style={{flex:1, backgroundColor:COLORS.transparentBlack7}}>
                   {/* Transparent Backorung*/}

                   <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
                     <View style={{position:"absolute", top:0, left:0, right:0, bottom:0}}></View>
                   </TouchableWithoutFeedback>
                   <Animated.View style={{position:"absolute", top:modalY, left:0, width:"100%", height:"100%", padding:SIZES.padding, borderTopRightRadius:SIZES.padding, borderTopLeftRadius:SIZES.padding, backgroundColor:COLORS.white}}>
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                       <Text style={{flex:1, ...FONTS.h3, fontSize:18}}>
                           Filter Your Search
                       </Text>

                        <IconButton containerStyle={{borderWidth:2, borderRadius:10, borderColor:COLORS.gray2}} icon={icons.cross} iconStyle={{tintColor:COLORS.gray2}} onPress={() => setShowFilterModal(false)}/>
                    </View>
                       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:250}}>
                          {/* Distance*/}
                           {renderDistance()}

                       </ScrollView>
                   </Animated.View>
               </View>
          </Modal>
      )
}

export default FilterModal;