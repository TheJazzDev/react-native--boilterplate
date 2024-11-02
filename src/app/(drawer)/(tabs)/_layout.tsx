import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { themeColor } from '~/theme';
import { useColorScheme, useClientOnlyValue } from '~/hooks';
import { Text, View } from '~/components';
import { DrawerActions, useNavigation } from '@react-navigation/native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon({
  name,
  color,
  title,
  focused,
}: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  title: string;
  focused: boolean;
}) {
  return (
    <View className="flex flex-col items-center justify-center">
      <FontAwesome
        name={name}
        size={28}
        style={{ marginBottom: -3 }}
        color={color}
      />
      <Text
        className={`mt-[4px] ${focused ? 'font-bold' : 'font-normal'} text-xs`}
        style={{ color }}
      >
        {title}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        headerTintColor: '#fff',
        tabBarShowLabel: false,
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: themeColor[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: themeColor[colorScheme ?? 'light'].inactive,
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ paddingLeft: 15 }}
          >
            <FontAwesome name="bars" size={24} color={themeColor[colorScheme ?? 'light'].tint} />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: themeColor[colorScheme ?? 'light'].background,
        },
        tabBarStyle: {
          height: 60,
          borderTopWidth: 1,
          borderTopColor: themeColor[colorScheme ?? 'light'].border,
          backgroundColor: themeColor[colorScheme ?? 'light'].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="home"
              color={color}
              title="Home"
              focused={focused}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={themeColor[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="user"
              color={color}
              title="Profile"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="gear"
              color={color}
              title="Settings"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
