import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text, StyleSheet } from "react-native";
import { StackDemo, DrawerDemo, TabsDemo } from "./src/navigator";
import { useEffect } from "react";

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setParams({ welcome: "Hello from Home!" });
  }, []);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.text}>Welcome to the main screen!</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navigation Object</Text>
        <Text style={styles.cardText}>navigate, push, goBack, setParams</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Route Object</Text>
        <Text style={styles.cardText}>name: {route?.name || "Home"}</Text>
        <Text style={styles.cardText}>key: {route?.key}</Text>
        <Text style={styles.cardText}>
          params: {JSON.stringify(route?.params)}
        </Text>
      </View>
      <Button
        title="Go to Stack Demo"
        color="#0097e6"
        onPress={() => navigation.navigate("StackDemo", { from: "Home" })}
      />
      <View style={styles.spacer} />
      <Button
        title="Go to Drawer Demo"
        color="#487eb0"
        onPress={() => navigation.navigate("DrawerDemo", { from: "Home" })}
      />
      <View style={styles.spacer} />
      <Button
        title="Go to Tabs Demo"
        color="#44bd32"
        onPress={() => navigation.navigate("TabsDemo", { from: "Home" })}
      />
    </View>
  );
}

const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chính" }}
        />
        <MainStack.Screen
          name="StackDemo"
          component={StackDemo}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="DrawerDemo"
          component={DrawerDemo}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="TabsDemo"
          component={TabsDemo}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0097e6",
    marginBottom: 10,
    letterSpacing: 1,
  },
  text: {
    fontSize: 18,
    color: "#353b48",
    marginBottom: 18,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    width: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    alignItems: "flex-start",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#487eb0",
    fontSize: 16,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: "#353b48",
    marginBottom: 2,
  },
  spacer: {
    height: 14,
  },
});
