## React Library 개발 / 배포 (Github Package)

### 초기 설정 세팅

1. git repository에서 파일 다운로드
```zsh
$ git clone https://github.com/vcanus/react-library-starterpack.git YOUR_LIBRARY_NAME
```

2. 터미널에서 해당 폴더로 이동
```zsh
$ cd YOUR_LIBRARY_NAME
```

3. 기존 git 제거 후 초기화
```zsh
$ rm -rf .git
$ git init
```

4. node_module 설치
```zsh
$ npm install
```

5. Library 이름 설정
*"REPOSITORY_NAME"* 에 Library이름으로 교체
```
// pacakge.json
{
    ...
    "name": "@vcanus/REPOSITORY_NAME",
    ...
}
```

6. 작동 확인하기
- jest를 이용하여 component test
```zsh
$ npm run test
```

<details>
<summary>result</summary>

```zsh
> @vcanus/REPOSITORY_NAME@0.0.1 test
> jest

 PASS  src/components/ButtonExample/ButtonExample.test.tsx
  ButtonExample
    ✓ renders the Video component (11 ms)
  ButtonExample-Default
    ✓ renders the Video component (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.705 s, estimated 1 s
```

</details>

- storybook으로 component 시각화
```zsh
$ npm run storybook
```
<details>
<summary>result</summary>

```zsh
> @vcanus/REPOSITORY_NAME@0.0.1 storybook
> start-storybook -p 6006

info @storybook/react v6.5.10
info
info => Loading presets
info Addon-docs: using MDX1
info => Using implicit CSS loaders
info => Using default Webpack5 setup
<i> [webpack-dev-middleware] wait until bundle finished
10% building 0/1 entries 0/0 dependencies 0/0 modules
info => Ignoring cached manager due to change in manager config
<i> [webpack-dev-middleware] wait until bundle finished
99% done plugins webpack-hot-middlewarewebpack built preview b9bde672e0c89a3102d1 in 4907ms
assets by chunk 6.18 MiB (id hint: vendors)
  assets by status 5.96 MiB [big]
    asset vendors-node_modules_storybook_addon-actions_manager_js-node_modules_storybook_addon-backgrou-076004.manager.bundle.js 4.53 MiB [emitted] [big] (id hint: vendors)
    asset vendors-node_modules_storybook_components_dist_esm_formatter-0d5cb0eb_js.manager.bundle.js 886 KiB [emitted] [big] (id hint: vendors)
    asset vendors-node_modules_storybook_components_dist_esm_OverlayScrollbars-1355f44c_js.manager.bundle.js 295 KiB [emitted] [big] (id hint: vendors)
    asset vendors-node_modules_storybook_components_dist_esm_syntaxhighlighter-b07b042a_js.manager.bundle.js 286 KiB [emitted] [big] (id hint: vendors)
  asset vendors-node_modules_storybook_components_dist_esm_WithTooltip-167e9982_js.manager.bundle.js 126 KiB [emitted] (id hint: vendors)
  asset vendors-node_modules_storybook_components_dist_esm_Color-f953d088_js.manager.bundle.js 83.3 KiB [emitted] (id hint: vendors)
  asset vendors-node_modules_storybook_components_dist_esm_GlobalScrollAreaStyles-8793ce4a_js.manager.bundle.js 15.7 KiB [emitted] (id hint: vendors)
asset runtime~main.manager.bundle.js 14.2 KiB [emitted] (name: runtime~main)
asset index.html 5.73 KiB [emitted]
asset main.manager.bundle.js 1.54 KiB [emitted] (name: main)
asset node_modules_unfetch_dist_unfetch_js.manager.bundle.js 1.3 KiB [emitted]
Entrypoint main [big] 4.54 MiB = runtime~main.manager.bundle.js 14.2 KiB vendors-node_modules_storybook_addon-actions_manager_js-node_modules_storybook_addon-backgrou-076004.manager.bundle.js 4.53 MiB main.manager.bundle.js 1.54 KiB
orphan modules 967 KiB [orphan] 124 modules
runtime modules 8.75 KiB 15 modules
modules by path ./node_modules/ 5.5 MiB 867 modules
./util.inspect (ignored) 15 bytes [built] [code generated]
manager (webpack 5.74.0) compiled successfully in 4843 ms
╭────────────────────────────────────────────────────╮
│                                                    │
│   Storybook 6.5.10 for React started               │
│   5.25 s for manager and 5.18 s for preview        │
│                                                    │
│    Local:            http://localhost:6006/        │
│    On your network:  http://192.168.50.69:6006/    │
│                                                    │
╰────────────────────────────────────────────────────╯
<i> [webpack-dev-middleware] wait until bundle finished: /
99% done plugins webpack-hot-middlewarewebpack built preview 1c783558467953dc28c6 in 468ms

```

</details>

------

### 개발하기
- components 폴더 안에 있는 파일만 Library로 export 가능
- utill 등 외부에서 사용되지 않을 함수는 components 폴더 외부에 utils 폴더를 생성하여 파일 생성

1. compoenets폴더 안에 컴포넌트 이름의 폴더 생성 (ex. TextFieldExample)
2. 폴더안에 아래 5가지 파일 생성 (TextFieldExample 폴더 내부)
   - index.tsx 
   - TextFieldExample.tsx
   - TextFieldExample.css (불필요시 무시)
   - TextFieldExample.stories.tsx
   - TextFieldExample.test.tsx
4. 새로 생성한 TextFieldExample폴더 내의 index.tsx 수정
```tsx
// src/components/TextFieldExample/index.tsx
export {default } from "./TextFieldExample";
```

3. components폴더의 index.tsx수정 (components/index.tsx)
```tsx
// src/components/index.tsx
export {default as ButtonExample} from "./ButtonExample";
// 아랫줄 추가
export {default as TextFieldExample} from "./TextFieldExample";
```

##### 파일 구조 예시
```tree
LIBRARY_NAME
  ├── README.md
  ├── babel.config.js
  ├── jest-shim.js
  ├── jest.config.js
  ├── node_modules
  ├── package.json
  ├── rollup.config.js
  ├── src
  │   ├── components
  │   │   ├── ButtonExample
  │   │   │   ├── ButtonExample.stories.tsx
  │   │   │   ├── ButtonExample.test.tsx
  │   │   │   ├── ButtonExample.tsx
  │   │   │   ├── buttonExample.css
  │   │   │   └── index.ts
  │   │   ├── TextFieldExample
  │   │   │   ├── TextFieldExample.stories.tsx
  │   │   │   ├── TextFieldExample.test.tsx
  │   │   │   ├── TextFieldExample.tsx
  │   │   │   ├── TextFieldExample.css
  │   │   │   └── index.ts
  │   │   └── index.ts
  │   └── index.ts
  └── tsconfig.json
```

### 패키징 후 배포하기
1. npm 설정 변경
```zsh
$ open ~/.npmrc
```
- .npmrc가 없다면 아래 커맨드로 생성
```zsh
$ touch ~/.npmrc
```

- 열린 .npmrc에 아래 입력
("GITHUB_TOKEN"은 깃허브 관리자가 발급해주어야함)
```.npmrc
registry=https://registry.npmjs.org/
@vcanus:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
```

2. 패키징하여 파일 용량 줄이기
```zsh
$ npm run rollup
```
<details>
<summary>result</summary>

```zsh
> @vcanus/REPOSITORY_NAME@0.0.1 rollup
> rollup -c

src/index.ts → dist/cjs/index.js, dist/esm/index.js...
created dist/cjs/index.js, dist/esm/index.js in 1.3s

dist/esm/index.d.ts → dist/index.d.ts...
created dist/index.d.ts in 19ms
```
</details>


3. 배포
```zsh
$ npm publish
``` 

### 참고

1. 재배포시 package.json의 version을 *반드시* 올려야 한다. (안올리면 publish에서 에러남)
```
// package.json
{
  ...
  "version": "0.0.2"
  ...
}
```

2. 다른 프로젝트에서 라이브러리 사용 시
```zsh
$ npm install @vcanus/LIBRARY_NAME
```