import { NextPage } from "next"
import { ActivityContents } from "@/src/components/Pages/Index/Parts/ActivityContents"
import { HopeToJoin } from "@/src/components/Pages/Index/Parts/HopeToJoin"
import { IndexHead } from "@/src/components/Pages/Index/Parts/IndexHead"
import { MainDescription } from "@/src/components/Pages/Index/Parts/MainDescription"
import { TypicalProjects } from "@/src/components/Pages/Index/Parts/TypicalProjects"
import { BaseFooter } from "@/src/layouts/BaseFooter"

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden relative">
        <div className="right-top-rectangle" />

        <IndexHead />

        <MainDescription />

        <ActivityContents />

        <TypicalProjects />

        <HopeToJoin />

        <BaseFooter />
      </div>
    </>

  )
}

export default IndexPage
