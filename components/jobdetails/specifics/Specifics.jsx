import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title, points}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
      {points && points.length > 0 ? points.map((item, index) => (
        <View style={styles.pointWrapper} key={item + index}>
          <View style={styles.pointDot}/>
          <Text style={styles.pointText}>{item}</Text>
        </View>
      )) : null}
      </View>
    </View>
  )
}

export default Specifics