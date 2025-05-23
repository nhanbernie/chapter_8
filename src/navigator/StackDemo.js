import { Button, View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

function StackScreen1({ navigation, route }) {
  useEffect(() => {
    navigation.setParams({ info: "StackScreen1 loaded" });
  }, []);
  return (
    <View style={styles.screen1}>
      <Text style={styles.title}>Stack Screen 1</Text>
      <View style={styles.card}>
        <Text style={styles.label}>route.name:</Text>
        <Text style={styles.value}>{route.name}</Text>
        <Text style={styles.label}>route.key:</Text>
        <Text style={styles.value}>{route.key}</Text>
        <Text style={styles.label}>route.params:</Text>
        <Text style={styles.value}>{JSON.stringify(route.params)}</Text>
      </View>
      <Button
        title="Push Stack Screen 2"
        color="#0097e6"
        onPress={() =>
          navigation.push("StackScreen2", { from: "StackScreen1" })
        }
      />
      <View style={styles.spacer} />
      <Button
        title="Go to Stack Screen 2 (navigate)"
        color="#44bd32"
        onPress={() =>
          navigation.navigate("StackScreen2", { from: "StackScreen1" })
        }
      />
    </View>
  );
}

function StackScreen2({ navigation, route }) {
  return (
    <View style={styles.screen2}>
      <Text style={styles.title}>Stack Screen 2</Text>
      <View style={styles.card}>
        <Text style={styles.label}>route.name:</Text>
        <Text style={styles.value}>{route.name}</Text>
        <Text style={styles.label}>route.key:</Text>
        <Text style={styles.value}>{route.key}</Text>
        <Text style={styles.label}>route.params:</Text>
        <Text style={styles.value}>{JSON.stringify(route.params)}</Text>
      </View>
      <Button
        title="Go Back"
        color="#e84118"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.spacer} />
      <Button
        title="Set Params"
        color="#487eb0"
        onPress={() => navigation.setParams({ updated: Date.now() })}
      />
    </View>
  );
}

const Stack = createStackNavigator();
function StackDemo() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackScreen1"
        component={StackScreen1}
        options={{ title: "Stack 1" }}
      />
      <Stack.Screen
        name="StackScreen2"
        component={StackScreen2}
        options={{ title: "Stack 2" }}
      />
    </Stack.Navigator>
  );
}

export default StackDemo;

const styles = StyleSheet.create({
  screen1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaf6fb",
    padding: 24,
  },
  screen2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f6ff",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0097e6",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontWeight: "bold",
    color: "#487eb0",
    fontSize: 15,
    marginTop: 2,
  },
  value: {
    fontSize: 15,
    color: "#353b48",
    marginBottom: 2,
  },
  spacer: {
    height: 14,
  },
});
