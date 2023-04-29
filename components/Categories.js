import { Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}

    // paddingTop:20

    >
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Texting"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7"  title="Texting"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7"  title="Texting"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7"  title="Texting"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7"  title="Texting"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7"  title="Texting"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7"  title="Texting"/>
    </ScrollView>
  )
}

export default Categories