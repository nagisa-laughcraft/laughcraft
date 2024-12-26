import Image from "next/image"

export const About = () => (
  <div className="py-4 md:flex">
    <div className="relative w-72 h-72 m-4">
      <Image src="./icon.png" alt="my Icon" fill objectFit="cover" className="rounded-full" />
    </div>
    <div className="text-slate-800 pt-4 md:pt-12 md:pl-12">
      <div>
        <p>2016年に新卒でソフトウェアハウスに就職</p>
        <p>警察・消防向けのシステム開発、医療用組み込み端末の開発などを経験したのち</p>
        <p>Web系スタートアップベンチャー企業に転職、ECサイトの保守・開発のほか、採用、企画などを経験</p>
      </div>
      <div className="py-4">
        <p>2019年10月よりフリーランスとして活動</p>
      </div>
      <div>
        <p className="pb-4">資格:</p>
        <p>2017/12 応用情報技術者</p>
        <p>2018/05 情報セキュリティマネジメント</p>
        <p>2020/02 HTML5プロフェッショナル認定資格 レベル2</p>
      </div>
    </div>
  </div>
)