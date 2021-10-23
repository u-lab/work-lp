import Image from "next/image"

export const MainDescription = () => {
  return (
    <div className="flex justify-center relative pt-4 md:pt-20 pb-20">
      <div style={{ maxWidth: 1000 }}>
        <div className="flex flex-col-reverse md:flex-row justify-center px-4 md:px-0">
          <div>
            <p className="mb-4 text-lg font-bold tracking-widest">大学や街を遊び歩く</p>
            <h2 className="mb-4 text-4xl font-bold tracking-widest">
              <div className="mb-4">地域に根差す</div>
              <div>テクノロジー集団</div>
            </h2>
            <p className="tracking-wide leading-loose">
              学生団体U-labは、宇都宮大学の学生が中心となって、デザインやテクノロジーを用いて街や大学に対して面白いことを企てる学生団体です。
              圧倒的なインプット環境、普通じゃ参加できないインターン、大規模なチームプロジェクト、定期的なゲーム会やご飯会、
              宇都宮大学で最も勢いのある学生団体を目指します。
            </p>
          </div>

          <div>
            <h1 style={{ minWidth: 320 }} className="flex justify-center">
              <div className="hidden md:block">
                <Image src="/images/ulab-touka.png" alt="学生団体U-lab" width="400" height="400" />
              </div>
              <div className="md:hidden pb-4 pl-8">
                <Image src="/images/u-lab/u-lab-copy-light.png" alt="学生団体U-lab" width="240" height="60" />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
