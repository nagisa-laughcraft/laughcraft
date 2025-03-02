import Image from 'next/image'
import { SnsLinks } from './snsLinks'

export const Profile = () => (
  <div className="pt-4 md:flex max-w-[900px]">
    <div className="relative w-72 h-72 m-4 ease-in-animation">
      <Image src="/icon.png" alt="my Icon" fill objectFit="cover" className="rounded-full" />
    </div>
    <div className="text-slate-800 pt-4 lg:pl-12 ease-in-animation max-w-[400px]">
      <div>
        <h3 className="text-xl">nagisa | @nagisa_laughcraft</h3>
      </div>
      <div className="pt-8">
        <p>2016年に新卒でソフトウェアハウスに就職</p>
        <p>警察・消防向けのシステム開発、医療用組み込み端末の開発などを経験したのち</p>
        <p>
          Web系スタートアップベンチャー企業に転職、ECサイトの保守・開発のほか、採用、企画などを経験
        </p>
        <p>2019年10月よりフリーランスとして活動</p>
      </div>
      <div className="pt-4">
        <p>2017/12 応用情報技術者</p>
        <p>2018/05 情報セキュリティマネジメント</p>
        <p>2020/02 HTML5プロフェッショナル認定資格 レベル2</p>
      </div>
      <SnsLinks />
    </div>
  </div>
)
