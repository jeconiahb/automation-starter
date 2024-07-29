import dotenv from 'dotenv'
import { remote } from 'webdriverio'
dotenv.config()

const capabilities = {
    platformName: 'android',
    'appium:platformVersion': '11',
    'appium:deviceName': process.env.APPIUM_DEVICE_NAME,
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': process.env.APPIUM_APP_PACKAGE,
    'appium:appActivity': process.env.APPIUM_APP_ACTIVITY,
    "appium:noReset": false
}

const wdOpts = {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    loglevel: 'info',
    capabilities,
}

export const driver = await remote(wdOpts)
