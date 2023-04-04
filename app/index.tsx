import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ContainerView, ContentView } from "../src/components";

export default function App() {
  return (
    <ContainerView>
      <ContentView>
        <Text className="text-red-500">
          Open up App.tsx to start working on your app!
        </Text>
      </ContentView>
      <StatusBar style="light" />
    </ContainerView>
  );
}
