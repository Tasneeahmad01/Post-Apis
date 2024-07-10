let gameSeq = [];
    let userSeq = [];

    let btns = ["red", "green", "blue", "yellow"];

    let started = false;
    let level = 0;

    let h2 = document.querySelector("h2");

    document.addEventListener("keypress", function () {
      if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
      }
    });
 function btnFlash(btn) {
      btn.classList.add("flash");
      setTimeout(function () {
        btn.classList.remove("flash");
      }, 250);
    }

    function gameFlash(btn) {
      btn.classList.add("flash");
      setTimeout(function () {
        btn.classList.remove("flash");
      }, 250);
    }

    function levelUp() {
      userSeq = [];
      level++;
      h2.innerText = `Level ${level}`;

      let randIdx = Math.floor(Math.random() * 4);
      let randColor = btns[randIdx];
      let randBtn = document.querySelector(`.${randColor}`);
    //   console.log(randBtn)
      gameSeq.push(randColor);
      console.log(gameSeq);
      gameFlash(randBtn);
    }

    function checkAns(idx) {
      if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
          setTimeout(levelUp, 1000);
        }
      } else {
        h2.innerText = `Game Over! Your score was <b>${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {

        }, 1000);
        startOver();
      }
    }

    function startOver() {
      level = 0;
      gameSeq = [];
      started = false;
    }
    document.querySelectorAll('.btn').forEach((button) => {
      button.addEventListener('click', function () {
        let userChosenColor = this.classList[1];
        userSeq.push(userChosenColor);
        btnFlash(this);
        checkAns(userSeq.length - 1);
      });
    });