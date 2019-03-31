# Comment

1. 完成度
    - 100%
    - 我覺得寫得超完整。

2. coding quality
    - 100%
    - 很容易看懂，而且架構明確。把固定不變動的部分寫在html，而將動態增長的部分寫在react。

3. 正確性
    - 100%
    - 沒有出現什麼問題，加上這只是個網站的靜態雛型，所以我覺得看上去有個網站的樣子即可，各個按鈕的功能應該之後再implement就可以。

4. 值得學習的地方
    - 我覺得同學把一個網頁上靜態和動態的content分開寫是個很不錯的寫法，之前我都用react直接寫整份網頁。雖然我不知道這樣是不是best practice，但如果要搭建很大的網站，這樣應該能讓架構更明確，更容易分工和debug。我自己未來也會想要這樣寫。

5. 建議改進的地方
    - React部分的code很乾淨俐落，但index.html我覺得可以再修。大標題和footer的部分直接寫死沒問題，但feature的部分重複性極高，我個人覺得可以把那個pattern寫成component，用一個map弄出六份，再把這六個render進另一個html div（讓react針對不同的html div，render不同的內容）。這樣寫的話應該會更簡練些。

6. 其他心得
    - 我覺得React真的是很棒的工具。把網頁拆解成component based非常有利於模組化，不會整片code要一行一行去trace。