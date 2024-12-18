import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRouter} from 'expo-router';
import {useThemeColor} from "@/hooks/useThemeColor";
import CustomHeader from "@/components/Header";
import {Button, Input} from "@rneui/themed";

export default function LoginScreen() {
    const color = useThemeColor({}, 'text');
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 로그인 로직을 여기에 추가하세요
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleSignup = () => {
        router.push('/signup');
    }

    return (
        <>
            <CustomHeader title="로그인" onPressButton={() => console.log('Button pressed!')}/>
            <View style={styles.container}>
                <Input
                    style={[styles.input, {color}]}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    style={[styles.input, {color}]}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {/*커스텀 버튼*/}
                <Button title="로그인" onPress={handleLogin}/>
                <View style={styles.link}>
                    <Button title="Go to Signup" onPress={handleSignup}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        backgroundColor: '#0a7ea4',
        color: 'white',
    },
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
    link: {
        marginTop: 15,
    },
});