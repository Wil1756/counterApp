
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
},
  value: {
    fontSize: 78,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 2,
    fontFamily: 'Courier New', // Custom font handling may be required
  },
  button: {
    fontSize: 32,
    paddingLeft: 12,
    paddingRight: 12,
    color: 'rgb(112, 76, 182)',
    paddingBottom: 4,
    backgroundColor: 'rgba(112, 76, 182, 0.1)',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'transparent',
    transitionProperty: 'all',
    transitionDuration: '0.15s',
    marginHorizontal: 5,
  },
  buttonActive: {
    backgroundColor: 'rgba(112, 76, 182, 0.2)',
  },
  textbox: {
    fontSize: 32,
    padding: 2,
    width: 64,
    textAlign: 'center',
    marginRight: 8,
  },
  asyncButton: {
    marginLeft: 8,
    position: 'relative',
  },
  asyncButtonAfter: {
    content: '""', // Not applicable in React Native
    backgroundColor: 'rgba(112, 76, 182, 0.15)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    opacity: 0,
    transitionProperty: 'width, opacity',
    transitionDuration: '1s, 0.5s',
    transitionTimingFunction: 'linear, ease',
    transitionDelay: '0s, 1s',
  },
  asyncButtonActiveAfter: {
    width: '0%',
    opacity: 1,
    transitionDuration: '0s',
  },
});
