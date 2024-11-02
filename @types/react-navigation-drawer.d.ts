// @types/react-navigation-drawer.d.ts
declare module '@react-navigation/drawer' {
  import {
    DrawerNavigationProp as RNDrawerNavigationProp,
    DrawerScreenProps as RNDrawerScreenProps,
  } from '@react-navigation/native';
  import * as React from 'react';
  import { ViewStyle, StyleProp, TextStyle } from 'react-native';

  export interface DrawerToggleButtonProps {
    tintColor?: string;
    onPress?: () => void;
  }

  export const DrawerToggleButton: React.FC<DrawerToggleButtonProps>;

  // Types for Drawer Navigator
  export interface DrawerNavigatorProps {
    initialRouteName?: string;
    backBehavior?: 'initialRoute' | 'order' | 'history' | 'none';
    screenOptions?: DrawerScreenOptions;
    drawerContent?: (props: DrawerContentComponentProps) => React.ReactNode;
  }

  export function createDrawerNavigator(): {
    Navigator: React.ComponentType<DrawerNavigatorProps>;
    Screen: React.ComponentType<DrawerScreenProps>;
  };

  export type DrawerNavigationProp<
    ParamList extends Record<string, object | undefined>,
    RouteName extends keyof ParamList = string,
  > = RNDrawerNavigationProp<ParamList, RouteName>;

  export type DrawerScreenProps<
    ParamList extends Record<string, object | undefined>,
    RouteName extends keyof ParamList = string,
  > = RNDrawerScreenProps<ParamList, RouteName>;

  export interface DrawerScreenOptions {
    title?: string;
    drawerLabel?:
      | string
      | ((props: { focused: boolean; color: string }) => React.ReactNode);
    drawerIcon?: (props: {
      focused: boolean;
      color: string;
      size: number;
    }) => React.ReactNode;
    drawerStyle?: StyleProp<ViewStyle>;
    drawerLabelStyle?: StyleProp<TextStyle>;
    drawerActiveTintColor?: string;
    drawerInactiveTintColor?: string;
  }

  export interface DrawerContentComponentProps {
    state: any;
    navigation: any;
    descriptors: any;
  }

  export const DrawerContentScrollView: React.FC<any>;
  export const DrawerItem: React.FC<any>;
}
