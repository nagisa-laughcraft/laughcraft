export const Footer = () => (
  <footer className="h-48 bg-[#F2690D] bg-opacity-95">
    <div className="flex h-full flex-col justify-center items-center gap-4">
      <div className="flex gap-2">
        <div className="size-8 pt-0.5">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 2.1904C19.6865 2.1904 15.4698 3.4695 11.8832 5.866C8.29667 8.2624 5.50128 11.6686 3.85056 15.6538C2.19985 19.639 1.76794 24.0242 2.60947 28.2548C3.451 32.4855 5.52816 36.3716 8.57829 39.4217C11.6284 42.4718 15.5145 44.549 19.7452 45.3905C23.9758 46.2321 28.361 45.8001 32.3462 44.1494C36.3314 42.4987 39.7376 39.7033 42.134 36.1167C44.5305 32.5302 45.8096 28.3135 45.8096 24L24 24L24 2.1904Z"
              fill="#FFF"
            />
          </svg>
        </div>
        <h1 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
          LaughCraft
        </h1>
      </div>
      <div className="text-white">© {new Date().getFullYear()} laughcraft.dev</div>
    </div>
  </footer>
)
