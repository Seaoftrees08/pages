# 最初のapp routerと画像の設定
next.config.mjs
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", //追加
};

export default nextConfig;
```

page.tsx
```tsx
import Image from 'next/image'

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

    ...
    <Image
      src={`${BASE_PATH}/vercel.svg`} // 修正
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
    ...
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src={`${BASE_PATH}/next.svg`} // 修正
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
    ...
```

# build
```shell
npx next build
npx serve out
```
