

import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import {
    UserIcon, ChevronDownIcon, MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions(
            {
                // headerTitle: "hello"
                // hea
                headerShown: false
            }
        );
    }, []);

    // useLayoutEffect()
    return (
        <View>


            <SafeAreaView className="bg-white pt-5">

                <View className="flex-row pb-3 items-center max-4 space-x-2 px-4">

                    <Image
                        source={{
                            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450"
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"

                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now1</Text>
                        <Text className="font-bold text-xl">Current Location
                            <ChevronDownIcon size={20} color={"#00CCBB"} />
                        </Text>
                    </View>
                    <UserIcon size={35} color={"#00CCBB"} />
                </View>

                {/* Search */}

                <View className="flex-row space-x-2 items-center pb-2 mx-4" >
                    <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                        <MagnifyingGlassIcon />
                        <TextInput placeholder='Restaurant and Cusines' keyboardType='default' />

                    </View>
                    <AdjustmentsHorizontalIcon color={"#00CCBB"} />
                </View>




            </SafeAreaView>
            <ScrollView className="bg-grey-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                <Categories />
                {/* Featured */}
                <FeaturedRow title={"Featured"} discription={"Paid Placement from our Partner"} id={"testing123"}/>
                {/* Tasty discounts */}

                <FeaturedRow title={"Tasty discounts"} discription={"Everyone's been enjoying these juicy discounts!"} id={"testing123"}/>
                {/* Offers Near You */}

                <FeaturedRow title={"Offers Near You!"} discription={"Why not support your local restaurant tonight"} id={"testing123"}/>


            </ScrollView>
        </View>

    )
}

export default HomeScreen