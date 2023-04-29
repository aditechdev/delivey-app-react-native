import { View, Text,Image , TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ imageUrl, title}) => {
  return (
      <TouchableOpacity className="relative mr-2">
          <Image source={{ uri: imageUrl }}
          
              className="h-20 w-20"
          />
          <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
      </TouchableOpacity>
  )
}
// https://links.papareact.com/gn7
export default CategoryCard