'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST
const isPostHogEnabled = !!(POSTHOG_KEY && POSTHOG_HOST)

export const PostHogPageView = (): JSX.Element | null => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!isPostHogEnabled) return

    posthog.init(POSTHOG_KEY!, {
      api_host: POSTHOG_HOST!,
      capture_pageview: false,
    })
  }, [])

  useEffect(() => {
    if (!isPostHogEnabled || !pathname) return

    const searchParamsObject = Object.fromEntries(searchParams.entries())
    posthog.capture('$pageview', {
      pathname,
      search: searchParamsObject,
    })
  }, [pathname, searchParams])

  return null
}

interface PHProviderProps {
  children: React.ReactNode
}

export const PHProvider = ({ children }: PHProviderProps): JSX.Element => {
  if (!isPostHogEnabled) return <>{children}</>

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
