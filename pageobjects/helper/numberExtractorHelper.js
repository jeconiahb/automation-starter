const numberExtractorHelper = async (driver, attribute, element) => {
    const attributeValue = await element(driver).getAttribute(attribute);
    console.log('Attribute Value: ', attributeValue);

    const numbersOnly = await attributeValue.replace(/[^\d.-]/g, '');
    console.log('Numbers Only: ', numbersOnly);
    return numbersOnly;
}

export default numberExtractorHelper
