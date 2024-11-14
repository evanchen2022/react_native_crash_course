import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";   
import { Link } from 'expo-router';
import "../global.css";

export default function App() {
    return ( 
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Aora!</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: 'red' }}>Go to Profile, click here!</Link>
        </View>
    );
}

/* const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
}); */