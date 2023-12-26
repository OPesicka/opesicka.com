'use client'

import { useEffect, useState } from 'react'

import '@rbnd/flows/flows.css'
import { init } from '@rbnd/flows/cloud'

export const CloudFlows = () => {
  const firstRender = useFirstRender()

  useEffect(() => {
    if (firstRender) return
    void init({
      customApiUrl: 'https://api.stage.flows-cloud.com',
      projectId: '0dc4b250-9a79-4a64-a50e-9fb90082e00d'
    })
  }, [firstRender])

  return null
}

export const useFirstRender = (): boolean => {
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    setFirstRender(false)
  }, [])

  return firstRender
}
