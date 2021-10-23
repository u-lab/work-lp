import Image from "next/image"
import { VFC } from "react"
import { LpHeader } from "@/src/components/Pages/Index/Parts/LpHeader"

export const TypicalProjects = () => {
  return (
    <div className="flex justify-center mb-20">
      <div style={{ maxWidth: 1000 }}>
        <div className="pb-4">
          <LpHeader title="代表的なプロジェクト" />
        </div>

        <div className="md:grid grid-cols-3 gap-6">
          <TypicalProject
            title="バーチャル宇都宮大学"
            description="新入生や高校生がコロナ禍で大学自体に来れない問題を感じ、仮想空間にバーチャルな宇都宮大学を作成し、高校生に向けたオープンキャンパスを行った。"
            imagePath="/images/lp-p1.png"
            href="https://2021.vr-uu.com"
          />

          <TypicalProject
            title="UU-Circles"
            description="新入生がオンラインでも宇大のサークルを見つけることができるように、最新のweb技術を用いて、企画から構築・運用までを行った。"
            imagePath="/uu-circles.png"
            href="https://uu-circles.com"
          />

          <TypicalProject
            title="uu-yell"
            description="新入生が宇都宮大学の情報を得ることが難しいという問題に対して、宇大生が中心となって、宇都宮大学生向けのメディアサイトを運営しています。"
            imagePath="/images/lp-p3.png"
            href="https://media.uu-circles.com"
          />
        </div>
      </div>
    </div>
  )
}

type Props = {
  title: string
  description: string
  imagePath: string
  href: string
}
export const TypicalProject: VFC<Props> = ({
  title,
  description,
  imagePath,
  href,
}) => {
  return (
    <div style={{ maxWidth: 320 }} className="pb-8">
      <a href={href}>
        <div className="flex justify-center">
          <Image src={imagePath} alt={title} width={250} height={250} />
        </div>

        <div className="mt-8">
          <h3 className="mb-2 text-lg font-bold tracking-wide">{title}</h3>
          <p className="text-sm tracking-wide leading-relaxed">{description}</p>
        </div>
      </a>
    </div>
  )
}
