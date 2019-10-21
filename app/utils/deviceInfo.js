import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const OS = Platform.OS === 'ios' ? 'iOS' : 'Android';

export const sysVersion = DeviceInfo.getSystemVersion();
export const appName = DeviceInfo.getApplicationName();
export const brand = DeviceInfo.getBrand();
export const network = DeviceInfo.getCarrier();
export const deviceId = DeviceInfo.getDeviceId();

export const userAgent = DeviceInfo.getUserAgent();

export default {
  OS,
  sysVersion,
  appName,
  brand,
  network,
  deviceId,
};
