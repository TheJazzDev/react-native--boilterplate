import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  FontAwesome,
} from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { themeColor } from '~/theme';
import { useColorScheme } from '~/hooks';

const CustomDrawerContent = (props: any) => {
  const pathname = usePathname();
  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userDetailsWrapper}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john@email.com</Text>
      </View>
      <DrawerItem
        icon={() => (
          <FontAwesome
            name="home"
            size={25}
            color={themeColor[colorScheme ?? 'light'].text}
            // style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
        label={'Home'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/' ? '#fff' : '#000' },
        ]}
        style={{
          backgroundColor:
            pathname == '/' ? themeColor[colorScheme ?? 'light'].tint : '',
        }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/index');
        }}
      />
      <DrawerItem
        icon={() => (
          <FontAwesome
            name="user"
            size={25}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />
        )}
        label={'Profile'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/profile' ? '#fff' : '#000' },
        ]}
        style={{
          backgroundColor:
            pathname == '/profile'
              ? themeColor[colorScheme ?? 'light'].tint
              : themeColor[colorScheme ?? 'light'].background,
        }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/profile');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="notifications" options={{ headerShown: true }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
