import React from  'react';
import { Text } from 'react-native';
import { View } from 'react-native-web';

const getUserName = (firstName, secName) => {
    return firstName + " " + secName;
}

const User = () => {
    return (
        <View 
        style={{height: 60,
            borderColor: 'gray',
            borderWidth: 2}}>
            <Text>
                Hello, User: {getUserName("Evan", "Chen")}!
            </Text>
        </View>
    )
}

export default User;