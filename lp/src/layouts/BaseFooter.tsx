import Image from 'next/image'
import { VFC } from 'react'

const BaseFooter: VFC = () => {
  return (
    <div className="text-center bg-gray-50" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <a href="https://ulab-uu.com/">
        <Image
          src={`/images/u-lab/u-lab-copy-light.png`}
          width={160}
          height={40}
          alt="U-lab CopyLight"
        />
      </a>
    </div>
  )
}

export { BaseFooter }
