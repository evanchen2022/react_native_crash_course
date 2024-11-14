import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'; // Adjust the path if needed

const MessageSender = ({ onFileSelect }) => {
    const [inputText, setInputText] = useState("");
    const [fileInfo, setFileInfo] = useState(null);

    const handleSend = async () => {
        if (!inputText) return; // Prevent sending empty messages
        try {
            await addDoc(collection(db, "messages"), {
                text: inputText,
                fileName: fileInfo?.name || null,
                fileUri: fileInfo?.uri || null,
                timestamp: new Date(),
            });
            console.log("Document successfully written!");

            // Clear input and file info after sending
            setInputText("");
            setFileInfo(null);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleFileSelected = (fileUri) => {
        const fileName = fileUri.split('/').pop();
        setFileInfo({ uri: fileUri, name: fileName });
        if (onFileSelect) onFileSelect(fileUri);
    };

    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TextInput
                placeholder="Type your message"
                value={inputText}
                onChangeText={setInputText}
                style={{
                    width: '70%',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
            />
            
            <TouchableOpacity
                onPress={handleSend}
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 5,
                    width: '70%',
                    alignItems: 'center',
                    marginBottom: 10,
                }}
            >
                <Text style={{ color: 'white' }}>Send</Text>
            </TouchableOpacity>
            
            {/* Display file info if available */}
            {fileInfo && (
                <View style={{ marginTop: 10 }}>
                    <Text>File Name: {fileInfo.name}</Text>
                    <Text>File URI: {fileInfo.uri}</Text>
                </View>
            )}
        </View>
    );
};

export default MessageSender;
