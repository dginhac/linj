import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }: Props) {
  const glowAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 0, duration: 900, useNativeDriver: true }),
      ]),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
        Animated.timing(glowAnim, { toValue: 0, duration: 2000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const glowOpacity = glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] });

  return (
    <LinearGradient colors={['#0A0A0F', '#0D0A1A', '#0A0F1A']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background orbs */}
      <View style={[styles.orb, styles.orbTopLeft]} />
      <View style={[styles.orb, styles.orbBottomRight]} />
      <View style={[styles.orb, styles.orbCenter]} />

      <Animated.View
        style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        {/* Icon */}
        <Animated.View style={[styles.iconContainer, { opacity: glowOpacity }]}>
          <Text style={styles.iconText}>◈</Text>
        </Animated.View>

        {/* Title */}
        <Text style={styles.title}>Entrez dans{'\n'}l'œuvre</Text>

        {/* Separator */}
        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <View style={styles.separatorDot} />
          <View style={styles.separatorLine} />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Choisissez une œuvre et{'\n'}vivez une expérience immersive
        </Text>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('ArtworkSelection')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#6C3BFF', '#3B8BFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Commencer</Text>
            <Text style={styles.buttonArrow}>→</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <Text style={styles.footer}>Expérience muséale augmentée</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orb: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.12,
  },
  orbTopLeft: {
    width: 300,
    height: 300,
    backgroundColor: '#6C3BFF',
    top: -80,
    left: -80,
  },
  orbBottomRight: {
    width: 250,
    height: 250,
    backgroundColor: '#3B8BFF',
    bottom: 40,
    right: -60,
  },
  orbCenter: {
    width: 180,
    height: 180,
    backgroundColor: '#A855F7',
    top: height * 0.3,
    left: width * 0.1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    marginBottom: 24,
  },
  iconText: {
    fontSize: 56,
    color: '#A78BFA',
    textShadowColor: '#6C3BFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -0.5,
    lineHeight: 50,
    textShadowColor: 'rgba(108, 59, 255, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 12,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    width: 160,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(108, 59, 255, 0.5)',
  },
  separatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6C3BFF',
    marginHorizontal: 8,
  },
  subtitle: {
    fontSize: 17,
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 48,
    letterSpacing: 0.2,
  },
  buttonWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#6C3BFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 56,
    gap: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    bottom: 48,
    color: 'rgba(255,255,255,0.2)',
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
