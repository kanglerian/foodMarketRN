import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Success } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessSignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Success />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button text="Find Foods" onPres={() => navigation.replace('MainApp')} />
      </View>
    </View>
  )
}

export default SuccessSignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFC'
  },
  title: {
    textAlign: 'center',
    color: '#020202',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginBottom: 6
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Reguler'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80
  }
})