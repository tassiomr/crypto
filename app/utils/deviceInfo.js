import DeviceInfo from 'react-native-device-info';

export const OS = DeviceInfo.getBaseOs();
export const sysVersion = DeviceInfo.getSystemVersion();
export const appName = DeviceInfo.getApplicationName();
export const brand = DeviceInfo.getBrand();
export const network = DeviceInfo.getCarrier();
export const deviceId = DeviceInfo.getDeviceId();

export const userAgent = DeviceInfo.getUserAgent();
