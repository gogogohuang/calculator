# 說明
這個作業是`計算機modal`，判斷設備為手機版與電腦版，點擊按鈕時顯示計算機modal

- 請使用 React 開發
- 請使用 Redux 儲存計算機資料

# 規格項目
- 計算機介面請依照`ui.png`設計

- 僅需支援最新版本Chrome
- 點擊按鈕時彈出計算機
- 點擊計算機以外介面可關閉計算機

- 手機版
  - 彈出後請取固定在畫面最下方
  - 寬度為畫面100%，高度最大為畫面50%，計算機modal可scroll

- 電腦版
  - 計算機modal可在畫面上拖拉移動
  - 計算機寬度固定為480px
  - RWD
    - 當畫面小於768px時將計算機寬度改為360px
- 計算機最低僅需有加、減的功能即可

# 其他
- UI部分除計算機須依照規格設計，其餘可隨意


# Note
* make sure node version > 10
* this project is built up with nextjs/typescript/hook

# Command

## develop

``` sh
yarn install
yarn dev
```

## build files
```sh
yarn build
yarn start
```

## ts-lint
```sh
yarn tslint
```
