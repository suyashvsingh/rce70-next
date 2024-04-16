'use server'
import { Language } from '@/types'
import axios from 'axios'

export const executeCode = async (
  code: string,
  selectedLanguage: Language,
  input: string
) => {
  try {
    let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }
    let bodyContent = JSON.stringify({
      language: selectedLanguage.value,
      code,
      input,
    })
    let reqOptions = {
      url: `${process.env.AWS_API_GATEWAY_URL}/exe-${selectedLanguage.value}`,
      method: 'POST',
      headers: headersList,
      data: bodyContent,
    }
    let response = (await axios.request(reqOptions)) as {
      data: {
        data: string
        executionTime: number
        status: boolean
      }
    }
    return response.data
  } catch (error: any) {
    const response = error.response as {
      data: {
        data: string
        status: boolean
      }
    }
    return response.data
  }
}
