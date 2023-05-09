import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollWrapper from '../../../globals/ScrollWrapper'
import MainWrapperView from '../../../components/app/MainWrapperView'
import HeaderBack from '../../../components/app/HeaderBack'


const Notifications = () => {
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack/>
      </MainWrapperView>
    </ScrollWrapper>
  )
}

export default Notifications

const styles = StyleSheet.create({})