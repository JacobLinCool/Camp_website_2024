import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-h1">營隊介紹</h1>
      <section className="about">
        <p>
          精心開發的 MMORPG 虛擬實境遊戲，綠樹公司所舉辦的 Challenger
          大賽即將震撼開幕！每五年一次的盛事，讓您體驗生存挑戰競賽，今年更在空島上舉行，絕對是您不容錯過的難得機會！更讓人振奮的是，五年前的冠亞軍，史考特和利奧拉，也將再次出現在競技場上，為爭奪冠軍而戰！趕快加入我們的行列，挑戰冠軍的頭銜，一同在遊戲中創造不朽的傳說！
        </p>
      </section>

      <h1 className="text-h1">課程介紹</h1>
      <section className="lesson">
        <div>
          <h2>Python基礎</h2>
          <p>學習Python程式語言的基礎知識，包括語法、變數、迴圈等。</p>
        </div>

        <div className="image">
          <img src={require("../image/python-base.png")} alt="base" />
        </div>
      </section>

      <section className="lesson">
        <div>
          <h2>ML教學</h2>
          <p>深入了解機器學習的基本概念，並實際應用在問題解決上。</p>
        </div>

        <div className="image">
          <img src={require("../image/machine-learning.png")} alt="machine learing" />
        </div>
      </section>

      <section className="lesson">
        <div>
          <h2>Python進階</h2>
          <p>進階Python程式設計，包括函式式程式設計、物件導向等進階主題。</p>
        </div>

        <div className="image">
          <img src={require("../image/python-advanced.png")} alt="advanced" />
        </div>
      </section>

      <section className="lesson">
        <div>
          <h2>Pygame遊戲設計</h2>
          <p>使用Pygame框架開發簡單的遊戲，學習遊戲開發的基本原理。</p>
        </div>

        <div className="image">
          <img src={require("../image/pygame.png")} alt="pygame" />
        </div>
      </section>

      <section className="lesson">
        <div>
          <h2>資訊安全</h2>
          <p>介紹資訊安全的基本概念，並學習保護系統和數據的方法。</p>
        </div>

        <div className="image">
          <img src={require("../image/information-security.png")} alt="information security" />
        </div>
      </section>
    </div>
  );
};
export default About;