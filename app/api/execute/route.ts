import axios from 'axios'
import { NextResponse } from 'next/server'

const runCode = async (
  code: string,
  selectedLanguage: {
    value: string
  },
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
        status: boolean
        data: string
        executionTime: number
      }
    }
    return response
  } catch (error: any) {
    const error_ = error as unknown as {
      response: {
        data: {
          status: boolean
          data: string
        }
      }
    }
    console.log(error_.response.data.data)
    return error_.response
  }
}

export async function POST(req: Request) {
  try {
    const { code, selectedLanguage, input } = await req.json()
    const response = await runCode(code, selectedLanguage, input)
    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      data: 'Some error occurred while executing the code. Please try again.',
    })
  }
}
