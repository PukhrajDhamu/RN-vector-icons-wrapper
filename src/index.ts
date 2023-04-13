import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { ViewStyle } from 'react-native';

import AntDesignIconsName from 'react-native-vector-icons/glyphmaps/AntDesign.json';
import FontAwesomeIconsName from 'react-native-vector-icons/glyphmaps/FontAwesome.json';
import FontAwesome5IconsNameFree from 'react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import FontAwesome5IconsNameFreeMeta from 'react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json';
import FontAwesome5IconsNamePro from 'react-native-vector-icons/glyphmaps/FontAwesome5Pro.json';
import FontAwesome5IconsNameProMeta from 'react-native-vector-icons/glyphmaps/FontAwesome5Pro_meta.json';
import IoniconsIconsName from 'react-native-vector-icons/glyphmaps/Ionicons.json';
import FeatherIconsName from 'react-native-vector-icons/glyphmaps/Feather.json';
import MaterialCommunityIconsName from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
import EntypoIconsName from 'react-native-vector-icons/glyphmaps/Entypo.json';
import MaterialIconsName from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import SimpleLineIconsName from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json';
import OcticonsIconsName from 'react-native-vector-icons/glyphmaps/Octicons.json';
import FoundationIconsName from 'react-native-vector-icons/glyphmaps/Foundation.json';
import EvilIconsIconsName from 'react-native-vector-icons/glyphmaps/EvilIcons.json';



export type IIconType = "MaterialCommunityIcons" | "MaterialIcons" | "Ionicons" | "Feather" | "FontAwesome" | "FontAwesome5" | "AntDesign" | "Entypo" | "SimpleLineIcons" | "Octicons" | "Foundation" | "EvilIcons";

export type IAntDesignName = keyof typeof AntDesignIconsName
export type IFontAwesomeName = keyof typeof FontAwesomeIconsName
export type IFontAwesome5Name = keyof typeof FontAwesome5IconsNameFree | keyof typeof FontAwesome5IconsNameFreeMeta | keyof typeof FontAwesome5IconsNamePro | keyof typeof FontAwesome5IconsNameProMeta
export type IIoniconsName = keyof typeof IoniconsIconsName
export type IFeatherName = keyof typeof FeatherIconsName
export type IMaterialCommunityIconsName = keyof typeof MaterialCommunityIconsName
export type IEntypoIconsName = keyof typeof EntypoIconsName
export type IMaterialIconsName = keyof typeof MaterialIconsName
export type ISimpleLineIconsName = keyof typeof SimpleLineIconsName
export type IOcticonsName = keyof typeof OcticonsIconsName
export type IFoundationName = keyof typeof FoundationIconsName
export type IEvilIconsName = keyof typeof EvilIconsIconsName

export const Icons = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    Foundation,
    EvilIcons,
}

// filter icons names by type like user use MaterialCommunityIcons in type then return IMaterialCommunityIconsName
export interface IIconTypeName {
    [key: string]: IAntDesignName | IFontAwesomeName | IFontAwesome5Name | IIoniconsName | IFeatherName | IMaterialCommunityIconsName | IEntypoIconsName | IMaterialIconsName | ISimpleLineIconsName | IOcticonsName | IFoundationName | IEvilIconsName;
}

interface IProps {
    type: IIconType;
    name: IIconTypeName[IIconType];
    color: string;
    size?: number;
    style?: ViewStyle;
}

export const RNIcon = ({ type, name, color, size = 24, style }: IProps) => {
    return React.createElement(Icons[type], { name, color, size, style });
}