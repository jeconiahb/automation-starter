const restartApp = async (driver) => {
    await console.log("Aplikasi tidak ditemukan atau terjadi kesalahan, mencoba untuk memulai ulang...");

    await driver.terminateApp('');
    await driver.activateApp('');
    await driver.pause(20000);
}

export default restartApp