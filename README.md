# mobile-flash-card-app
Udacity-React-Native-Project: To build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.
@author: anderson cahet

# Mobile Flashcards - Udacity Course

Native mobile app for iOS and android, that allows users to create deck, add card, take quiz.
It uses: - React Native, Expo, Redux, React Navigation, AsyncStorage, Notifications

Link to Snack: https://snack.expo.io/@acahet/github.com-acahet-udacity-react-native-mobile-flashcards

**Landing Page**

-   Deck List with two seeded card - React - JavaScript
-   View Deck btn
    -   takes user to _deck view_
-   Second tab - Add Deck - Provided to let user add a new deck - onSubmit user lands in the newly deck view
    **Deck View**
-   Display: - Deck Title - Amount of card on deck - Add Card btn - allows user to add a new card - user lands in _add card view_ - Start Quiz - takes user to _quiz View_
    **Add Card**
-   Display: - Deck title label - question Input - Answer label - answer input - toggle that allow user to change between true/false(default) - used to save is the answer is tru or false - submit btn - disabled unless question/answer are populated - takes user back to _deck view_
    **Start Quiz**
-   Display: - deck with no cards - it show an empty message - populated decks: - actual question/total number of question - question text - _view answer_ btn -> on click it displays the answer - correct/incorrect btn - on completion: - more correct questions than incorrect -> congrats view - back to deck btn - user lands in _deck view_ - restart quiz btn - user lands in the first question of the actual deck _quiz view_
    **Dev Process**
    Developed using snack.expo.io
    Tested using snack.expo.io - web view/android/iOS
    Tested on an android device
    **Sources**
-   https://reactnative.dev
-   udacity React Native
-   udacity mentor section
