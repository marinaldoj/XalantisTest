import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "../screens/Pokemon";

export default function Routes(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Pokemon" component={Pokemon} />

        </Stack.Navigator>
    )
}