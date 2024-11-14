import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router' //use this one for stack the index page in the front
import "../global.css";



const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown:false }} />
    </Stack>
  )
}

export default RootLayout

/* const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
}) */