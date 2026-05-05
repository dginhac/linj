import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Experience'>;
  route: RouteProp<RootStackParamList, 'Experience'>;
};

const { width, height } = Dimensions.get('window');

const langLabels: Record<string, string> = { fr: 'FR', en: 'EN', es: 'ES' };
const speechLocales: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-GB',
  es: 'es-ES',
};

export default function ExperienceScreen({ navigation, route }: Props) {
  const { artwork, language } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }).start();
    return () => {
      Speech.stop();
    };
  }, []);

  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.08, duration: 700, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(waveAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
      ])
    ).start();
  };

  const stopPulse = () => {
    pulseAnim.stopAnimation();
    waveAnim.stopAnimation();
    Animated.timing(pulseAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    Animated.timing(waveAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start();
  };

  const handlePlayAudio = async () => {
    if (isPlaying) {
      await Speech.stop();
      setIsPlaying(false);
      stopPulse();
      return;
    }

    setIsPlaying(true);
    startPulse();

    const text = artwork.audioText[language];

    Speech.speak(text, {
      language: speechLocales[language],
      rate: 0.9,
      pitch: 1.0,
      onDone: () => {
        setIsPlaying(false);
        stopPulse();
      },
      onError: () => {
        setIsPlaying(false);
        stopPulse();
      },
    });
  };

  const waveOpacity1 = waveAnim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 0.1] });
  const waveOpacity2 = waveAnim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 0.05] });
  const waveScale1 = waveAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] });
  const waveScale2 = waveAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 2] });

  return (
    <LinearGradient colors={['#0A0A0F', '#0D0A1A']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Hero image */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: artwork.imageUrl }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(10,10,15,0.1)', 'rgba(10,10,15,0.5)', '#0A0A0F']}
          style={StyleSheet.absoluteFillObject}
        />

        {/* Top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => {
              Speech.stop();
              navigation.goBack();
            }}
            style={styles.backButton}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <View style={styles.langBadge}>
            <Text style={styles.langBadgeText}>{langLabels[language]}</Text>
          </View>
        </View>
      </View>

      <Animated.View style={[styles.contentCard, { opacity: fadeAnim }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Title */}
          <View style={[styles.colorAccent, { backgroundColor: artwork.color }]} />
          <Text style={styles.artworkTitle}>{artwork.name}</Text>
          <Text style={styles.artworkMeta}>
            {artwork.artist} · {artwork.year}
          </Text>

          {/* Audio Player */}
          <View style={styles.playerSection}>
            <TouchableOpacity
              style={styles.playButtonOuter}
              onPress={handlePlayAudio}
              activeOpacity={0.85}
            >
              {/* Sonar waves */}
              {isPlaying && (
                <>
                  <Animated.View
                    style={[
                      styles.wave,
                      { opacity: waveOpacity1, transform: [{ scale: waveScale1 }] },
                    ]}
                  />
                  <Animated.View
                    style={[
                      styles.wave,
                      styles.wave2,
                      { opacity: waveOpacity2, transform: [{ scale: waveScale2 }] },
                    ]}
                  />
                </>
              )}
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <LinearGradient
                  colors={isPlaying ? ['#FF3B8B', '#A855F7'] : ['#6C3BFF', '#3B8BFF']}
                  style={styles.playButton}
                >
                  <Text style={styles.playIcon}>{isPlaying ? '■' : '▶'}</Text>
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>

            <View style={styles.playerInfo}>
              <Text style={styles.playerTitle}>
                {isPlaying ? 'En cours de lecture...' : 'Description audio'}
              </Text>
              <Text style={styles.playerSub}>
                {isPlaying ? 'Appuyez pour arrêter' : 'Appuyez pour écouter'}
              </Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionCard}>
            <View style={styles.descriptionHeader}>
              <Text style={styles.descriptionLabel}>À propos</Text>
              <View style={styles.descriptionLine} />
            </View>
            <Text style={styles.descriptionText}>{artwork.descriptions[language]}</Text>
          </View>

          {/* Share / explore more */}
          <TouchableOpacity
            style={styles.exploreMore}
            onPress={() => {
              Speech.stop();
              navigation.navigate('ArtworkSelection');
            }}
          >
            <Text style={styles.exploreMoreText}>Explorer d'autres œuvres →</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroContainer: {
    height: height * 0.42,
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    position: 'absolute',
    top: 56,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  langBadge: {
    backgroundColor: 'rgba(108,59,255,0.8)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(108,59,255,0.6)',
  },
  langBadgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
  contentCard: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#0D0A1A',
    borderWidth: 1,
    borderColor: 'rgba(108,59,255,0.2)',
    borderBottomWidth: 0,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  colorAccent: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 12,
  },
  artworkTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
    lineHeight: 32,
  },
  artworkMeta: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.45)',
    marginTop: 4,
    marginBottom: 28,
  },
  playerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 28,
  },
  playButtonOuter: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wave: {
    position: 'absolute',
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#6C3BFF',
  },
  wave2: {
    backgroundColor: '#3B8BFF',
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6C3BFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 12,
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 22,
    marginLeft: 2,
  },
  playerInfo: {
    flex: 1,
  },
  playerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  playerSub: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
    marginTop: 4,
  },
  descriptionCard: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginBottom: 24,
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  descriptionLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  descriptionLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  descriptionText: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  exploreMore: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  exploreMoreText: {
    color: 'rgba(108,59,255,0.9)',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
