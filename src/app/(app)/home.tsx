import AppButton from "@/components/button/Button";
import { useAuthStore } from "@/store";
import { Text, View } from "react-native"

const HomeScreen = () => {
    const clearToken = useAuthStore(state => state.clearToken);
    const handleSignOut = () => {
        clearToken()
    }
    return(
        <View className="flex-1 dark:bg-black">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"
            >
              Welcome to Project
            </Text>
      </View>
      <AppButton
            title="Sign out"
            buttonStyle="w-[90%] self-center mb-8"
            onPress={handleSignOut}
            />
    </View>
    )
}

export default HomeScreen;