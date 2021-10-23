import { NextSeo } from 'next-seo'

const IndexHead = () => {
  return (
    <>
      <NextSeo
        title="U-lab公式サイト 活動紹介"
        defaultTitle="U-lab公式サイト 活動紹介"
        twitter={{
          site: '@Ulab_uu',
          cardType: 'summary',
        }}
      />
    </>
  )
}

export { IndexHead }
