import Reac, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { storage } from '../firebaseConfig'; // Import Firebase storage
import { ref, uploadBytes } from "firebase/storage";

const FileUploadButton = ({ onFileSelect }) => {
    const [fileUri, setFileUri] = useState(null);
    
    // Function to handle file selection
    const handlePress = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            console.log("Selected file URI:", result.uri);
            setFileUri(result.uri);

            // Fetch the file blob and upload to Firebase Storage
            const response = await fetch(result.uri);
            const blob = await response.blob();

            // Create a reference in Firebase Storage and upload the blob
            const storageRef = ref(storage, `uploads/${result.name}`);
            uploadBytes(storageRef, blob)
                .then((snapshot) => {
                    console.log('File uploaded successfully!');
                })
                .catch((error) => {
                    console.error('File upload failed:', error);
                });
        }
    };

    return (
        <View>
            <TouchableOpacity 
                onPress={handlePress}
                style={{
                    backgroundColor: '#d9d9d9', 
                    paddingVertical: 10, 
                    paddingHorizontal: 15, 
                    borderRadius: 5,
                    marginHorizontal: 5,
                }}
            >
                <Text>Upload</Text>
            </TouchableOpacity>
            {fileUri && (
                <View style={{ marginTop: 10 }}>
                    <Text>Selected File: {fileUri}</Text>
                </View>
            )}
        </View>
    );
};

export default FileUploadButton;
