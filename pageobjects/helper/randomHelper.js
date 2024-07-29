import { faker } from '@faker-js/faker';

const randomHelper = () => {
    const randomName = faker.person.fullName(); 
    const randomEmail = faker.internet.email(); 
    const randomText = faker.lorem.text();
    const randomParagraph = faker.lorem.paragraphs(5);
    return {
        randomName,
        randomEmail,
        randomText,
        randomParagraph
    }
}

export default randomHelper
