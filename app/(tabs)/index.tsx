import { View,Text } from 'react-native-ui-lib';
import {Colors} from 'react-native-ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#00CD8B',
  text: '#20303C'
});
export default function HomeScreen() {
  return (
    <View center>
      <Text success>firssadt</Text>
    </View>
  );
}
