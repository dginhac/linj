import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useSettings } from "../context/SettingsContext";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }: Props) {
  const { host, port, setHost, setPort } = useSettings();
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [draftHost, setDraftHost] = useState(host);
  const [draftPort, setDraftPort] = useState(port);

  const glowAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1],
  });

  return (
    <LinearGradient
      colors={["#0A0A0F", "#0D0A1A", "#0A0F1A"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      {/* Background orbs */}
      <View style={[styles.orb, styles.orbTopLeft]} />
      <View style={[styles.orb, styles.orbBottomRight]} />
      <View style={[styles.orb, styles.orbCenter]} />

      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        {/* Icon */}
        <Animated.View style={[styles.iconContainer, { opacity: glowOpacity }]}>
          <Text style={styles.iconText}>◈</Text>
        </Animated.View>

        {/* Title */}
        <Text style={styles.title}>Entrez dans{"\n"}l'œuvre</Text>

        {/* Separator */}
        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <View style={styles.separatorDot} />
          <View style={styles.separatorLine} />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Choisissez une œuvre et{"\n"}vivez une expérience immersive
        </Text>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate("ArtworkSelection")}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#6C3BFF", "#3B8BFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Commencer</Text>
            <Text style={styles.buttonArrow}>→</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>

      {/* Settings button */}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => {
          setDraftHost(host);
          setDraftPort(port);
          setSettingsVisible(true);
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.settingsIcon}>⚙</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>Expérience muséale augmentée</Text>

      {/* Settings modal */}
      <Modal
        visible={settingsVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSettingsVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Paramètres API</Text>
            <Text style={styles.modalLabel}>
              Adresse IP du serveur hologramme
            </Text>
            <TextInput
              style={styles.modalInput}
              value={draftHost}
              onChangeText={setDraftHost}
              placeholder="192.168.1.1"
              placeholderTextColor="rgba(255,255,255,0.25)"
              keyboardType="url"
              autoCapitalize="none"
              autoCorrect={false}
              selectTextOnFocus
            />
            <Text style={[styles.modalLabel, { marginTop: 16 }]}>Port</Text>
            <TextInput
              style={styles.modalInput}
              value={draftPort}
              onChangeText={setDraftPort}
              placeholder="8000"
              placeholderTextColor="rgba(255,255,255,0.25)"
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              selectTextOnFocus
            />
            <Text style={styles.modalHint}>
              URL : http://{draftHost.trim() || "…"}:{draftPort.trim() || "…"}
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setSettingsVisible(false)}
              >
                <Text style={styles.modalCancelText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  await Promise.all([setHost(draftHost), setPort(draftPort)]);
                  setSettingsVisible(false);
                }}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={["#6C3BFF", "#3B8BFF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.modalSave}
                >
                  <Text style={styles.modalSaveText}>Enregistrer</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orb: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.12,
  },
  orbTopLeft: {
    width: 300,
    height: 300,
    backgroundColor: "#6C3BFF",
    top: -80,
    left: -80,
  },
  orbBottomRight: {
    width: 250,
    height: 250,
    backgroundColor: "#3B8BFF",
    bottom: 40,
    right: -60,
  },
  orbCenter: {
    width: 180,
    height: 180,
    backgroundColor: "#A855F7",
    top: height * 0.3,
    left: width * 0.1,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 32,
  },
  iconContainer: {
    marginBottom: 24,
  },
  iconText: {
    fontSize: 56,
    color: "#A78BFA",
    textShadowColor: "#6C3BFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: -0.5,
    lineHeight: 50,
    textShadowColor: "rgba(108, 59, 255, 0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 12,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    width: 160,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(108, 59, 255, 0.5)",
  },
  separatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#6C3BFF",
    marginHorizontal: 8,
  },
  subtitle: {
    fontSize: 17,
    color: "rgba(255,255,255,0.55)",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 48,
    letterSpacing: 0.2,
  },
  buttonWrapper: {
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#6C3BFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 56,
    gap: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  buttonArrow: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "400",
  },
  footer: {
    position: "absolute",
    bottom: 48,
    color: "rgba(255,255,255,0.2)",
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  settingsButton: {
    position: "absolute",
    top: 56,
    right: 24,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsIcon: {
    fontSize: 22,
    color: "rgba(255,255,255,0.3)",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalCard: {
    width: "100%",
    backgroundColor: "#0D0A1A",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "rgba(108,59,255,0.3)",
  },
  modalTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 24,
  },
  modalLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  modalInput: {
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(108,59,255,0.4)",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 16,
    paddingVertical: 14,
    letterSpacing: 0.5,
  },
  modalHint: {
    color: "rgba(255,255,255,0.25)",
    fontSize: 12,
    marginTop: 8,
    marginBottom: 28,
    letterSpacing: 0.3,
  },
  modalActions: {
    flexDirection: "row",
    gap: 12,
  },
  modalCancel: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  modalCancelText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 15,
    fontWeight: "600",
  },
  modalSave: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  modalSaveText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
