import HeaderBackButton from '@components/HeaderBackButton';
import Typography from '@components/Typography';
import React from 'react';
import { SafeAreaView, StyleProp, TextStyle, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

interface ScreenLayoutProps {
  children: React.ReactNode;
  safeAreaStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  backHeader?: string;
  withoutTopSafeArea?: boolean;
}

const ScreenLayout = ({
  children,
  safeAreaStyle,
  style,
  backHeader,
  withoutTopSafeArea = false,
}: ScreenLayoutProps) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles(safeAreaInsets, withoutTopSafeArea).layout, style]}>
      <SafeAreaView style={safeAreaStyle}>
        {backHeader && (
          <View
            style={{
              paddingTop: safeAreaInsets.top,
            }}>
            <View style={styles(safeAreaInsets, withoutTopSafeArea).header}>
              <HeaderBackButton />
              <View style={{ justifyContent: 'center' }}>
                <Typography
                  fontWeight="bold2"
                  fontSize="body6"
                  textAlign="center">
                  {backHeader}
                </Typography>
              </View>
            </View>
          </View>
        )}
        <View style={{ marginLeft: '5%', width: '90%' }}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default ScreenLayout;
