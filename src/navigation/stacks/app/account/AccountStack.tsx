import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../../../screens/app/Account/Account';
import Profile from '../../../../screens/app/Account/Profile';
import Notifications from '../../../../screens/app/Account/Notifications';
import HelpCenter from '../../../../screens/app/Account/HelpCenter';
import TermsOfUse from '../../../../screens/app/Account/TermsOfUse';
import PrivacyPolicy from '../../../../screens/app/Account/PrivacyPolicy';

const AccountStacks = createStackNavigator();
const AccountStack = () => {
  return (
    <AccountStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='account'>
        <AccountStacks.Screen name='account' component={Account}/>
        <AccountStacks.Screen name='profile' component={Profile}/>
        <AccountStacks.Screen name='notifications' component={Notifications}/>
        <AccountStacks.Screen name='help' component={HelpCenter}/>
        <AccountStacks.Screen name='terms' component={TermsOfUse}/>
        <AccountStacks.Screen name='privacy' component={PrivacyPolicy}/>
    </AccountStacks.Navigator>
  )
}

export default AccountStack