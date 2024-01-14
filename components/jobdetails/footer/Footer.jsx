import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'


const Footer = ({url}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
        source={icons.heartOutline}
        resizeMode='contain'
        style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtn}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer