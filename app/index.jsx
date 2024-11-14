import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";      
import { Link } from 'expo-router';
import "../global.css";

import FileUploadButton from '../components/FileUploadButton';
import { useState } from 'react';

import MessageSender from '../components/MessageSender';


export default function App() {
    // State to store file information
    const [fileInfo, setFileInfo] = useState(null);

    // Callback function to handle file selection
    const handleFileSelected = (fileUri) => {
        console.log("Selected file URI:", fileUri);
        
        // Assuming we get the file name from fileUri
        const fileName = fileUri.split('/').pop(); // Extracting file name from URI for display
        
        // Update file information in state
        setFileInfo({ uri: fileUri, name: fileName });
    };
    
    return ( 
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">Aora!</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: 'red', marginBottom: 20 }}>Go to Profile, click here!</Link>

            {/* MessageSender Component */}
            <MessageSender />


            {/* Information Area */}
            <View 
                style={{
                    width: '80%',
                    backgroundColor: '#f0f0f0',
                    padding: 20,
                    borderRadius: 10,
                    marginBottom: 20,
                    minHeight: 100, // Make the area bigger as requested
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {fileInfo ? (
                    <>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Uploaded File Information:</Text>
                        <Text>File Name: {fileInfo.name}</Text>
                        <Text>File URI: {fileInfo.uri}</Text>
                    </>
                ) : (
                    <Text>No file uploaded yet.</Text>
                )}
            </View>

            {/* Input and Buttons Row */}
            <View className="flex-row items-center">
                <TextInput 
                    placeholder="Type your message"
                    className="border p-2 flex-1 rounded-lg"
                    style={{ width: '60%', marginRight: 10 }}
                />

                {/* File Upload Button */}
                <FileUploadButton onFileSelect={handleFileSelected} />

                {/* Send Button */}
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'blue', 
                        padding: 10, 
                        borderRadius: 5 
                    }}
                >
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
