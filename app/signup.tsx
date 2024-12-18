import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useRouter} from 'expo-router';
import {Button, ButtonGroup} from '@rneui/themed';
import CustomHeader from "@/components/Header";

export default function SignupScreen() {
    const router = useRouter();

    const [nickname, setNickname] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');


    const handleSignup = () => {
        // 회원가입 로직을 여기에 추가하세요
        console.log('Nickname:', nickname);
        console.log('Gender:', gender);
        console.log('Date of Birth:', dob);
    };

    const handleBack = () => {
        router.back();
    }

    const genderOptions = ['Male', 'Female', 'Other'];

    return (
        <>
            <CustomHeader title="회원가입" onPressButton={() => handleBack()}/>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nickname"
                    value={nickname}
                    onChangeText={setNickname}
                />
                <ButtonGroup
                    onPress={(index) => setGender(genderOptions[index].toLowerCase())}
                    selectedIndex={genderOptions.indexOf(gender.charAt(0).toUpperCase() + gender.slice(1))}
                    buttons={genderOptions}
                    containerStyle={styles.buttonGroup}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date of Birth (YYYY-MM-DD)"
                    value={dob}
                    onChangeText={setDob}
                />
                <Button title="Signup" onPress={handleSignup}/>
                <Button title="Go to Login" onPress={handleBack}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    buttonGroup: {
        marginBottom: 12,
    },
    link: {
        marginTop: 15,
    },
});