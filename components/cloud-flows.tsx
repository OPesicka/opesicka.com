'use client'

import { useEffect } from 'react'

import '@rbnd/flows/flows.css'
import { init } from '@rbnd/flows/cloud'

export const CloudFlows = () => {
  useEffect(() => {
    void init({
      customApiUrl: 'https://api.stage.flows-cloud.com',
      projectId: 'OPesicka-web'
    })
  }, [])

  return null
}
