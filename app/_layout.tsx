import {useFonts} from 'expo-font';
import {Stack, useRouter} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {createTheme, ThemeProvider} from "@rneui/themed";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initialize = async () => {
            if (loaded) {
                // 인증 체크
                setIsAuthenticated(await fakeAuthCheck());

                // 로딩 완료
                setIsLoading(false);
                // 스플래시 숨기기
                await SplashScreen.hideAsync();
            }
        };
        initialize();
    }, [loaded]);

    useEffect(() => {
        // 로딩 완료 후 login 화면으로 이동
        if (!isLoading) {
            router.replace('/login');
        }
    }, [isLoading]);

    // 폰트나 리소스가 아직 로딩 안됐으면 null (로딩 화면 대신)
    if (!loaded) {
        return null;
    }

    // 로딩 중이라면 역시 아무것도 표시하지 않거나 로딩 UI를 둘 수 있음
    if (isLoading) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Stack initialRouteName={"login"}>
                <Stack.Screen name="login" options={{headerShown: false}}/>
                <Stack.Screen name="signup" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
            <StatusBar style="auto"/>
        </ThemeProvider>
    );
}


const theme = createTheme({
    lightColors: {
        primary: '#e7e7e8',
    },
    darkColors: {
        primary: '#000',
    },
});

// Fake authentication check function
const fakeAuthCheck = async (): Promise<boolean> => {
    // Simulate an async auth check
    return new Promise((resolve) => setTimeout(() => resolve(false), 1000));
};