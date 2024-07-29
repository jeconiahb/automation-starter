const scrollActionHelper = async (driver, centerX, startY, endY, duration) => {
    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: duration, x: centerX, y: endY },
                { type: 'pointerUp', button: 0 },
            ]
        }
    ])
}

export default scrollActionHelper
