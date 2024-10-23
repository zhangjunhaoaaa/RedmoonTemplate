import { SITE_EMOJI, SITE_INFO, SITE_NAME } from '@/utils/site'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = SITE_NAME
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw='flex flex-col items-center justify-center w-full h-full text-white'
        style={{
          background: 'linear-gradient(to right bottom, rgb(17, 24, 39), rgb(75, 85, 99))',
        }}>
        <h1 tw='text-8xl'>
          {SITE_EMOJI} {SITE_NAME}
        </h1>
        <h2 tw='text-4xl'>{SITE_INFO}</h2>
        <div tw='flex flex-col items-center justify-center mt-8'>
          <div tw='text-xl'>Next.js · Ethereum · Viem · Wagmi · Web3Modal · SIWE</div>
          <div tw='text-xl mt-2'>Tailwind · daisyUI · and more..</div>
        </div>
      </div>
    )
  )
}
