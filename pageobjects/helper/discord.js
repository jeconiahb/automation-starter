import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const sendError = async (err, test) => {
    if (process.env.APP_ENV != 'production') return
    const discordUrl = process.env.DISCORD_WEBHOOK_URL
    const content =
        `❌ Automation Error on ${test} :\n\n` +
        '```' +
        `${err}` +
        '```\n <@1222015724940427367> <@245565690973519874>'

    await axios.post(discordUrl, {
        content: content,
    })
}

const sendSuccess = async (type) => {
    if (process.env.APP_ENV != 'production') return
    const discordUrl = process.env.DISCORD_WEBHOOK_URL
    const content = `✅ ${type} Test Success with no Error!\n\n <@1222015724940427367> <@245565690973519874>`

    await axios.post(discordUrl, {
        content: content,
    })
}

const sendMessage = async (content) => {
    if (process.env.APP_ENV != 'production') return
    const discordUrl = process.env.DISCORD_WEBHOOK_URL

    await axios.post(discordUrl, {
        content: content,
    })
}

export { sendError, sendMessage, sendSuccess }

