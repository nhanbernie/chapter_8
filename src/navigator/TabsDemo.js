import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function TabScreen1({ navigation, route }) {
  useEffect(() => {
    navigation.setParams({ tab: 1 });
  }, []);
  return (
    <View style={styles.screen1}>
      <Text style={styles.title}>Tab Screen 1</Text>
      <View style={styles.card}>
        <Text style={styles.label}>route.name:</Text>
        <Text style={styles.value}>{route.name}</Text>
        <Text style={styles.label}>route.key:</Text>
        <Text style={styles.value}>{route.key}</Text>
        <Text style={styles.label}>route.params:</Text>
        <Text style={styles.value}>{JSON.stringify(route.params)}</Text>
      </View>
      <Button
        title="Go to Tab 2"
        color="#0097e6"
        onPress={() =>
          navigation.navigate("TabScreen2", { from: "TabScreen1" })
        }
      />
      <View style={styles.spacer} />
      <Button
        title="Return Home"
        color="#e67e22"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

function TabScreen2({ navigation, route }) {
  return (
    <View style={styles.screen2}>
      <Text style={styles.title}>Tab Screen 2</Text>
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
        title="Return Home"
        color="#e67e22"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function TabsDemo() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabScreen1"
        component={TabScreen1}
        options={{ title: "Tab 1" }}
      />
      <Tab.Screen
        name="TabScreen2"
        component={TabScreen2}
        options={{ title: "Tab 2" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eafaf1",
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
    fontSize: 24,
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
