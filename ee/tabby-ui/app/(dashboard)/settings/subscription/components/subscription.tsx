'use client'

import { SubHeader } from "@/components/sub-header"
import { LicenseTable } from "./license-table"

export default function Subscription() {


  return (
    <div className="p-4">
      <SubHeader>
        You can upload your Bytebase license to unlock pro/enterprise features.
      </SubHeader>
      <div className="flex flex-col gap-8">
        <div className="grid lg:grid-cols-3 font-bold">
          <div>
            <div className='text-muted-foreground'>Current plan</div>
            <div className="text-3xl">Enterprise</div>
          </div>
          <div>
            <div className='text-muted-foreground'>Assigned / Total Instance License</div>
            <div className="text-3xl">2 / 999</div>
          </div>
          <div>
            <div className='text-muted-foreground'>Expires at</div>
            <div className="text-3xl">09/20/2222</div>
          </div>
        </div>
        <LicenseTable />
      </div>
    </div>
  )
}