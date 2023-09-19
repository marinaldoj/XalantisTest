import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemon from "../screens/Pokemon";
import Mercedes from "../screens/Mercedes";
import Profile from "../screens/Profile";

export default function Routes(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Pokemon" component={Pokemon} />
            <Stack.Screen name="Mercedes" component={Mercedes} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}