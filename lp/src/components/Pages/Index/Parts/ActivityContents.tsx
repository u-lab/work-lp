import Image from "next/image"
import { VFC } from "react"
import { LpHeader } from "@/src/components/Pages/Index/Parts/LpHeader"

export const ActivityContents = () => {
  return (
    <div className="flex justify-center mb-20">
      <div style={{ maxWidth: 1000 }}>
        <LpHeader title="活動内容" />

        <div className="md:grid grid-cols-2 gap-6">
          <ActivityContent
            title="不定期で誰でも開催・参加することができる勉強会"
            num="01"
            description="U-labでは誰でも自由に、勉強したことや興味のあることを教え合う勉強会を開催したり、他の人の開いた勉強会に参加したりすることができます。"
            imagePath="/images/lp1.png"
          />

          <ActivityContent
            title="不定期で誰でも開催・参加することができる勉強会"
            num="02"
            description="U-labでは、チームで協力して様々な面白いことを企てるチームプロジェクトというものがあります。大会やイベントに参加することもあります。"
            imagePath="/images/lp2.png"
          />
        </div>
      </div>
    </div>
  )
}

type Props = {
  num: string
  title: string
  description: string
  imagePath: string
}
const ActivityContent: VFC<Props> = ({
  imagePath,
  num,
  title,
  description,
}) => {
  return (
    <div id={`activity_content_${num}`} style={{ maxWidth: 320 }} className="pb-8">
      <div>
        <div className="flex justify-center">
          <Image src={imagePath} alt={title} width="250" height="250" />
        </div>

        <div className="flex mt-8">
          <p className="mr-4 text-4xl font-bold">{num}</p>

          <div>
            <h3 className="mb-2 font-bold">{title}</h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
