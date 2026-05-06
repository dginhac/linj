# Louise — Application mobile d'expérience artistique

Application React Native / Expo qui guide les visiteurs de musée à travers une expérience audio multilingue autour d'œuvres d'art.

## Tech stack

- **React Native 0.81.5** + **Expo ~54.0.33** (nouvelle architecture activée)
- **React 19.1.0** + **TypeScript ~5.9.2** (strict mode)
- **@react-navigation/native-stack v7** — navigation entre les 4 écrans
- **expo-speech** — synthèse vocale pour les descriptions audio
- **expo-linear-gradient** — dégradés décoratifs
- **Animated API** (React Native built-in) — toutes les animations

## Structure du projet

```
src/
├── navigation/AppNavigator.tsx   # Stack de navigation typé (RootStackParamList)
├── screens/
│   ├── HomeScreen.tsx            # Écran d'accueil animé
│   ├── ArtworkSelectionScreen.tsx # Grille de sélection des œuvres
│   ├── LanguageSelectionScreen.tsx # Choix de la langue (FR/EN/ES)
│   └── ExperienceScreen.tsx       # Lecteur audio + description de l'œuvre
└── data/artworks.ts              # Données statiques typées (Artwork, Language)
```

## Commandes

```bash
npm start          # Lance Expo en mode dev
npm run ios        # Build et lance sur iOS
npm run android    # Build et lance sur Android
npm run web        # Aperçu web
```

## Conventions de code

- Composants fonctionnels uniquement (pas de classes)
- Navigation typée : `NativeStackNavigationProp<RootStackParamList>`
- Styles via `StyleSheet.create()` — pas de Tailwind ni de lib externe
- Propriétés dynamiques (animations, conditions) en inline styles
- Animations : `Animated.Value` + `useNativeDriver: true` pour les performances
- État local uniquement (useState/useRef) — pas de Redux/Zustand
- Données multilingues : `Record<Language, string>` par œuvre

## Palette de couleurs

| Rôle | Valeur |
|------|--------|
| Fond principal | `#0A0A0F` |
| Fond secondaire | `#0D0A1A` |
| Accent violet | `#6C3BFF` |
| Accent bleu | `#3B8BFF` |
| Texte | `#FFFFFF` + variantes rgba |

## Données

Les œuvres sont définies statiquement dans `src/data/artworks.ts`. Chaque œuvre contient :
- Métadonnées (titre, artiste, année, couleur accent)
- Descriptions et textes audio en FR, EN et ES
- Référence vers l'image (assets ou URL)

Pas d'appels API — application 100 % offline.

## Points d'attention

- Nettoyer `Speech.stop()` dans le `useEffect` de `ExperienceScreen` pour éviter les fuites
- Les paramètres de route (`artwork`, `language`) sont typés dans `RootStackParamList` — ne pas contourner ce typage
- `newArchEnabled: true` dans `app.json` — rester compatible avec la nouvelle architecture React Native
