import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Language } from '../data/artworks';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LanguageSelection'>;
  route: RouteProp<RootStackParamList, 'LanguageSelection'>;
};

const languages: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'fr', label: 'Français', nativeLabel: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', nativeLabel: 'Español', flag: '🇪🇸' },
];

export default function LanguageSelectionScreen({ navigation, route }: Props) {
  const { artwork } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <LinearGradient colors={['#0A0A0F', '#0D0A1A', '#0A0F1A']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background orb */}
      <View style={styles.orb} />

      <Animated.View
        style={[styles.inner, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        {/* Back */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Artwork preview */}
        <View style={styles.artworkPreview}>
          <Image
            source={{ uri: artwork.imageUrl }}
            style={styles.artworkThumb}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(10,10,15,0.9)']}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={[styles.artworkColorBar, { backgroundColor: artwork.color }]} />
        </View>

        <Text style={styles.artworkName}>{artwork.name.fr}</Text>
        <Text style={styles.artworkArtist}>
          {artwork.artist} · {artwork.year.fr}
        </Text>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Choisissez votre langue</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Language buttons */}
        <View style={styles.languageList}>
          {languages.map((lang, idx) => (
            <Animated.View
              key={lang.code}
              style={{
                opacity: fadeAnim,
                transform: [
                  {
                    translateX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [idx % 2 === 0 ? -30 : 30, 0],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                style={styles.langButton}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Experience', { artwork, language: lang.code })
                }
              >
                <LinearGradient
                  colors={['rgba(108,59,255,0.15)', 'rgba(59,139,255,0.1)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.langGradient}
                >
                  <Text style={styles.langFlag}>{lang.flag}</Text>
                  <View style={styles.langTextGroup}>
                    <Text style={styles.langLabel}>{lang.label}</Text>
                    <Text style={styles.langNative}>{lang.nativeLabel}</Text>
                  </View>
                  <Text style={styles.langArrow}>›</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orb: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#3B8BFF',
    opacity: 0.07,
    top: -60,
    right: -60,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    marginBottom: 28,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  artworkPreview: {
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(108,59,255,0.3)',
  },
  artworkThumb: {
    width: '100%',
    height: '100%',
  },
  artworkColorBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    opacity: 0.8,
  },
  artworkName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  artworkArtist: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.45)',
    marginTop: 4,
    marginBottom: 32,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  dividerText: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  languageList: {
    gap: 12,
  },
  langButton: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(108,59,255,0.25)',
  },
  langGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    gap: 16,
  },
  langFlag: {
    fontSize: 32,
  },
  langTextGroup: {
    flex: 1,
  },
  langLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  langNative: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
    marginTop: 2,
  },
  langArrow: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 24,
    fontWeight: '300',
  },
});
