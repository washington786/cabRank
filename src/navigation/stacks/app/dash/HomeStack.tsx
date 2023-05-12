import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../../screens/app/Dashboard/Dashboard';
import Marshal from '../../../../screens/app/Dashboard/Marshal';

const DashStack = createStackNavigator();

const HomeStack = () => {
  return (
    <DashStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='dashboard'>
        <DashStack.Screen name='dashboard' component={Dashboard}/>
        <DashStack.Screen name='marshal' component={Marshal}/>
    </DashStack.Navigator>
  )
}

export default HomeStack