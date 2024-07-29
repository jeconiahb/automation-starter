const samplePageObject = () => {
    const textboxEmail = (driver) => {
        return driver.$(
            '//android.widget.EditText[@text="Email"]'
        )
    }

    return {
        textboxEmail,
    }
}

export default samplePageObject
