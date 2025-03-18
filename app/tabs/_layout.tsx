export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions=  {{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#125297" },
        }}
      />
    </Stack>
  );
}
