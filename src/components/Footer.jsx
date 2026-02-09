import { hover } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 px-10 tracking-wide mt-auto">
      <div className="flex max-lg:flex-col items-center justify-between gap-x-6 gap-y-8">

        {/* Social Icons */}
        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100065510616728" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/ayush-verma-37ab48336/" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
                <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149z" />
                <path fill="#fff" d="M34.656 24.969c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zM27.865 83.739H41.27v-40.33H27.865z" />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/san_dh_ya_212/?hl=en" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                <linearGradient id="insta" x1="22.26" x2="129.74" y1="22.26" y2="129.74">
                  <stop offset="0" stopColor="#fae100" />
                  <stop offset=".3" stopColor="#ff7950" />
                  <stop offset=".6" stopColor="#ff1c74" />
                  <stop offset="1" stopColor="#6c1cd1" />
                </linearGradient>
                <rect width="152" height="152" rx="76" fill="url(#insta)" />
                <path fill="#fff" d="M76 55a21 21 0 1 0 21 21 21 21 0 0 0-21-21zm0 34a13 13 0 1 1 13-13 13 13 0 0 1-13 13zm26-36a5 5 0 1 1-5 5 5 5 0 0 1 5-5z" />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://x.com/062_ds41166" aria-label="X">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227">
                <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" />
                <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-base text-center text-slate-300 max-lg:order-1">
          © {new Date().getFullYear()} CareerGurudev | All rights reserved | Powered by VGI.
        </p>

        {/* Links */}
        <ul className="flex justify-center gap-x-8 gap-y-2 flex-wrap">
          <li><a href="/TermandCond/index.htm" className="text-slate-300 hover:text-white text-base hover:underline">Terms of Service</a></li>
          <li><a href="/TermandCond/Privary.htm" className="text-slate-300 hover:text-white text-base hover:underline">Privacy Policy</a></li>
          {/* <li><a href="#" className="text-slate-300 hover:text-white text-base">Contact</a></li> */}
        </ul>

      </div>
    </footer>
  );
}
