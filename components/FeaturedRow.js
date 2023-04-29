import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = ({ id, title, discription, }) => {
  return (
    <View>
          <View className="flex-row mt-4 items-center justify-between px-4">
              <Text className="flex-1 font-bold text-lg">{title}</Text>
              <ArrowRightIcon color={"#00CCBB"}/>
          </View>
          <Text>{ discription}</Text>
    </View>
  )
}

export default FeaturedRow