import { Button, View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function DrawerScreen1({ navigation, route }) {
  return (
    <View style={styles.screen1}>
      <Text style={styles.title}>Drawer Screen 1</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Welcome to the main screen!</Text>
      </View>
      <Button
        title="Open Drawer"
        color="#e67e22"
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.spacer} />
      <Button
        title="Go to Drawer Screen 2"
        color="#0097e6"
        onPress={() => navigation.navigate("DrawerScreen2")}
      />
      <View style={styles.spacer} />
      <Button
        title="Return Home"
        color="#44bd32"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
function DrawerScreen2({ navigation, route }) {
  return (
    <View style={styles.screen2}>
      <Text style={styles.title}>Drawer Screen 2</Text>
      <View style={styles.card}>
        <Text style={styles.label}>This is the profile/info screen.</Text>
      </View>
      <Button
        title="Open Drawer"
        color="#e67e22"
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.spacer} />
      <Button
        title="Go back"
        color="#0097e6"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.spacer} />
      <Button
        title="Return Home"
        color="#44bd32"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
const Drawer = createDrawerNavigator();
export default function DrawerDemo() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerScreen1"
        component={DrawerScreen1}
        options={{ title: "Drawer 1" }}
      />
      <Drawer.Screen
        name="DrawerScreen2"
        component={DrawerScreen2}
        options={{ title: "Drawer 2" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffbe6",
    padding: 24,
  },
  screen2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffe5b4",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e67e22",
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
  spacer: {
    height: 14,
  },
});
