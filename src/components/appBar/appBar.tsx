import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { AppBarTab } from '@/components/appBar/appBarTab';
import Constants from 'expo-constants';
import theme from '@/theme';
export function AppBar() {
  return (
    <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
          <AppBarTab href='/' title='Repositories'/>
          <AppBarTab href='/login' title='Login'/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:Constants.statusBarHeight + 25,
    backgroundColor:theme.colors.textPrimary,
    padding:theme.padding.lg
  },
  scrollView:{
    flexDirection:'row'
  }
})
