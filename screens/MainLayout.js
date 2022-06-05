import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import LinearGradient from "react-native-linear-gradient"
import {connect} from "react-redux";
import  {setSelectedTab} from "../stores/tab/tabActions";

import  {Home, Search, CartTab, Favourite, Notification} from "../screens"
import  {COLORS, FONTS, SIZES, icons, constants, dummyData} from  "../constants"
import {Header} from "../components"

const MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {

    React.useEffect(()=> {
        setSelectedTab(constants.screens.home)
    }, [])
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor:COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            <Header containerStyle={{height:50, paddingHorizontal:SIZES.padding, marginTop:40, alignItems:"center"}} title={selectedTab.toUpperCase()}
               leftComponent={<TouchableOpacity style={{width:40, height:40, alignItems:"center", justifyContent:"center", borderWidth:1, borderColor:COLORS.gray2, borderRadius:SIZES.radius}}
               onPress={() => navigation.openDrawer()}>
                  <Image source={icons.menu}/>
               </TouchableOpacity>}
               rightComponent={<TouchableOpacity style={{borderRadius:SIZES.radius, alignItems:"center", justifyContent:"center"}}>
                   <Image source={dummyData?.myProfile?.profile_image} style={{width:40, height:40, borderRadius:SIZES.radius}}/>
               </TouchableOpacity>}
            />
            <View style={{flex:1}}>
                <Text>MainLayout</Text>

            </View>

            <View style={{height:100, justifyContent:"flex-end"}}>
                <LinearGradient start={{x:0, y:0}} end={{x:0, y:5}} colors={[COLORS.transparent, COLORS.lightGray1]} style={{position:"absolute", top:0, left:0, right:0, height:100,borderTopLeftRadius:15, borderTopRightRadius:15 }}/>
            </View>
            <View style={{flex:1, flexDirection:"row", paddingHorizontal:SIZES.radius, paddingBottom:10, borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:COLORS.white}}>

            </View>

        </Animated.View>
    )
}



function mapStateToProps(state) {
    return{
        selectedTab:state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab:(selectedTab) => { return dispatch(setSelectedTab(selectedTab))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)