import { NextPage } from "next"
import { ActivityContents } from "@/src/components/Pages/Index/Parts/ActivityContents"
import { IndexHead } from "@/src/components/Pages/Index/Parts/IndexHead"
import { MainDescription } from "@/src/components/Pages/Index/Parts/MainDescription"
import { TypicalProjects } from "@/src/components/Pages/Index/Parts/TypicalProjects"
import { BaseFooter } from "@/src/layouts/BaseFooter"

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="relative">
        <div className="right-top-rectangle" />

        <IndexHead />

        <MainDescription />

        <ActivityContents />

        <TypicalProjects />

        <BaseFooter />
      </div>
    </>

  )
}

export default IndexPage
