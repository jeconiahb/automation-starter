
import dotenv from 'dotenv';
dotenv.config();

const resetApp = async (driver) => {
    const startActivity = async () => {
        // const appPackage = await driver.getCapabilities().get('appPackage') + '/.HomeActivity';
        await driver.execute('mobile: startActivity', { intent: process.env.APPIUM_APP_PACKAGE });
    };

    const clearApp = async () => {
        // const appPackage = await driver.getCapabilities().get('appPackage');
        await driver.execute('mobile: clearApp', { appId: process.env.APPIUM_APP_PACKAGE});
    };

    const myResetApp = async () => {
        await clearApp();
        await startActivity();
    };

    const quitDriver = async () => {
        if (driver) {
            await driver.terminateApp('');
        }
    };

    try {
        // Panggil fungsi myResetApp di sini
        await myResetApp();
    } finally {
        // Pastikan untuk mengakhiri sesi driver setelah selesai
        await quitDriver();
        await driver.pause(10000);
    }
};

export default resetApp;