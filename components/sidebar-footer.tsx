'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { SidebarFooter as UISidebarFooter } from '@/components/ui/sidebar'

import { FeedbackModal } from './feedback-modal'
import GuestMenu from './guest-menu'
import UserMenu from './user-menu'

interface SidebarFooterProps {
  hasUser: boolean
}

export function SidebarFooter({ hasUser }: SidebarFooterProps) {
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  return (
    <>
      <UISidebarFooter className="flex flex-col gap-2 p-2 border-t border-sidebar-border">
        <div className="flex items-center justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFeedbackOpen(true)}
            className="flex-1 justify-start"
          >
            Feedback
          </Button>
          {hasUser ? <UserMenu /> : <GuestMenu />}
        </div>
      </UISidebarFooter>

      <FeedbackModal open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </>
  )
}
