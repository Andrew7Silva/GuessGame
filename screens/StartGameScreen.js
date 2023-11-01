import { View, TextInput, StyleSheet } from "react-native";
import BotaoPrincipal from "../components/BotaoPrincipal";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <BotaoPrincipal>Resetar</BotaoPrincipal>
      <BotaoPrincipal>Confirmar</BotaoPrincipal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1
  },
});

export default StartGameScreen;
