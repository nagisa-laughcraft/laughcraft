import { Button } from '@/components/ui/button'

export const Contact = () => (
  <div className="py-18 ease-in-animation justify-items-center">
    <div className="text-slate-800 pt-4 md:pt-12 md:pl-12 max-w-[400px]">
      <div>
        <p>システム開発・ホームページ制作・業務ツール導入など幅広くサポートいたします。</p>
        <p className="mt-4">お困りごとがあればお気軽にご相談ください。</p>
      </div>
    </div>
    <div className="my-12">
      <Button
        asChild
        variant="outline"
        className="bg-[#F2690D] hover:bg-[#F2690D] hover:bg-opacity-50 px-6 py-6 md:px-8 md:py-6"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjbb2CjSAoplM_EeRWr57onbZooJMMpZHnQbZH0jdPY4Sthg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-white md:text-lg">お問い合わせはこちら</p>
        </a>
      </Button>
    </div>
  </div>
)
