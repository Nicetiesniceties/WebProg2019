### 完成度:90%
- - -
### 程式部分(code quality):
1. \#write有重複出現
2. h1~h6之間有太多重複且相同的屬性(如text-align:center)，可以一起定義在最一開始就好
3. th本來就是bold，且上層已經設定font-size，所以沒有必要多寫一個重複的選擇器
4. 我在html碼裡面並沒有看到你有使用\<hr>，但是CSS選擇器裡面卻有
5. 同樣，我也沒有看到thead標籤，所以CSS中也出現了無效的選擇器
6. span是屬於行內元素(inline)所以即使是在跟div同樣設定下，在換行時他的虛線也會跑掉。看起來會有點奇怪，或許可以更改你原本保留的margin大小(還是你只是想要這個呈現inline和block的差別而已?)
- - -
### 正確性
- 原則上基本要求皆有達到
- - -
### 可改進的部分:
- 文字間的間距以及排版可以注意一下，注意不要和別的部份重疊或是太接近
+ 字體建議可以套用在標題就好。不然內文讀起來很吃力，過於花俏
- - -
### 值得欣賞的部分:
- 配色得宜，整體而言還不錯
- 有看出花費了不少時間在寫CSS，很認真
