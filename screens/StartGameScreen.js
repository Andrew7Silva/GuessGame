import { View, TextInput, Pressable } from "react-native";
import BotaoPrincipal from "../components/BotaoPrincipal";

function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <BotaoPrincipal>Resetar</BotaoPrincipal>
      <BotaoPrincipal>Confirmar</BotaoPrincipal>
    </View>
  );
}

export default StartGameScreen;
