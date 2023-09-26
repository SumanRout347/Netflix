import OpenAI from 'openai'
import React from 'react'

const openAi = new OpenAI({
    apiKey: process.env.REACT_APP_KEY,
    dangerouslyAllowBrowser: true 
})
export default openAi