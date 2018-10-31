# rn-inspector-bug-demo

MCVE for a bug in the React Native element inspector.

## Steps to reproduce

1. Install Expo: `npm install -g expo-cli`
1. `npm install`
1. `npm start`
1. Open in (iOS) simulator
1. Control+Cmd+Z to open Expo menu
1. **Toggle Element Inspector**
1. Tap on any of the green rectangles
1. Observe warning, stacktrace:

```
[09:33:22] Warning: Failed prop type: Invalid prop `borderTopWidth` of type `string` supplied to `View`, expected `number`.
Bad object: {
  "borderTopWidth": "1%",
  "borderBottomWidth": "1%",
  "borderLeftWidth": 0,
  "borderRightWidth": 0,
  "borderColor": "rgba(255, 132, 0, 0.3)"
}
    in View (at BorderBox.js:28)
    in BorderBox (at ElementBox.js:46)
    in RCTView (at View.js:60)
    in View (at ElementBox.js:45)
    in ElementBox (at InspectorOverlay.js:60)
    in RCTView (at View.js:60)
    in View (at InspectorOverlay.js:64)
    in InspectorOverlay (at Inspector.js:243)
    in RCTView (at View.js:60)
    in View (at Inspector.js:241)
    in Inspector (at AppContainer.js:65)
    in RCTView (at View.js:60)
    in View (at AppContainer.js:122)
    in AppContainer (at renderApplication.js:32)
- node_modules/prop-types/checkPropTypes.js:19:20 in printWarning
- ... 21 more stack frames from framework internals
```
