import Image from 'next/image'
import { VFC } from 'react'

const BaseFooter: VFC = () => {
  return (
    <div>
      <div>
        <div className="mb-8 text-center">
          <a href="https://ulab-uu.com/">
            <Image
              src={`/images/u-lab/u-lab-copy-light.png`}
              width={160}
              height={40}
              alt="U-lab CopyLight"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export { BaseFooter }
