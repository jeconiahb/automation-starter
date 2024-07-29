import { sendError, sendSuccess } from "../../helpers/discord"
import { getArgs } from "../../helpers/getArgs"


export const sampleTest = async (driver) => {
    const testType = 'sampleTest'
    try {
        console.log('.... Test start')
        console.log('.... Test end')
    } catch(err) {
        getArgs();
        sendError(err, testType);
    } finally {
        sendSuccess(testType);
    }
}
