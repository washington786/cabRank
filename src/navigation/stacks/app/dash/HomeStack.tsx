import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../../screens/app/Dashboard/Dashboard';

const DashStack = createStackNavigator();

const HomeStack = () => {
  return (
    <DashStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='dashboard'>
        <DashStack.Screen name='dashboard' component={Dashboard}/>
    </DashStack.Navigator>
  )
}

export default HomeStack