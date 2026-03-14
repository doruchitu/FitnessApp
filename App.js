import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/Pagini/LandingPage';
import HomePage from './src/Pagini/HomePage';
import WorkoutHistoryPage from './src/Pagini/WorkoutHistoryPage';
import StepCounterPage from './src/Pagini/StepCounterPage';
import TimerPage from './src/Pagini/TimerPage';
import BMIPage from './src/Pagini/BMIPage';
import WorkoutPlanPage from './src/Pagini/WorkoutPlanPage';
import LuniPage from './src/Pagini/LuniPage';
import MartiPage from './src/Pagini/MartiPage';
import MiercuriPage from './src/Pagini/MiercuriPage';
import JoiPage from './src/Pagini/JoiPage';
import VineriPage from './src/Pagini/VineriPage';
import SambataPage from './src/Pagini/SambataPage';
import DuminicaPage from './src/Pagini/DuminicaPage';
import ProfilePage from './src/Pagini/ProfilePage';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="WorkoutHistory" component={WorkoutHistoryPage} />
        <Stack.Screen name="StepCounter" component={StepCounterPage} />
        <Stack.Screen name="Timer" component={TimerPage} />
        <Stack.Screen name="BMI" component={BMIPage} />
        <Stack.Screen name="WorkoutPlan" component={WorkoutPlanPage} />
        <Stack.Screen name="Luni" component={LuniPage} />
        <Stack.Screen name="Marti" component={MartiPage} />
        <Stack.Screen name="Miercuri" component={MiercuriPage} />
        <Stack.Screen name="Joi" component={JoiPage} />
        <Stack.Screen name="Vineri" component={VineriPage} />
        <Stack.Screen name="Sambata" component={SambataPage} />
        <Stack.Screen name="Duminica" component={DuminicaPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
