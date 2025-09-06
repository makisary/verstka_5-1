import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.postimg.cc/gjn2LD24/711769.png" }}
            resizeMode="cover"
          />

          <View style={styles.textContainer}>
            <Text style={styles.name}>Анна Иванова</Text>
            <Text style={styles.title}>Senior Frontend Developer</Text>
            <Text style={styles.bio}>
              Люблю React Native, путешествия и кофе. Разрабатываю мобильные
              приложения уже 5 лет.
            </Text>
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>JavaScript</Text>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>UI/UX</Text>
            <Text style={styles.skill}>Team Lead</Text>
            <Text style={styles.skill}>React Native</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => console.log("Подписаться")}
          >
            <Text style={styles.buttonText}>Подписаться</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    width: "80%",
    maxWidth: 400,
    // Тень для iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Тень для Android
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    color: "#636363",
    marginBottom: 8,
    textAlign: "center",
  },
  bio: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 16,
  },
  skill: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default App;
