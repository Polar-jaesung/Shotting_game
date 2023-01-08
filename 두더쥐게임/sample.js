// 화면: hidden
// 호출스택:
// 백그라운드 : interval(tick, 1000)
// 태스크큐:
let gopherPercent = 0.3;
let bombPercent = 0.5;
function tick() {
  holes.forEach((hole, index) => {
    if (hole) return; // 무언가 일어나고 있으면 return
    const randomValue = Math.random();
    if (randomValue < gopherPercent) {
      const $gopher = $$cells[index].querySelector(".gopher");
      holes[index] = setTimeout(() => {
        // 1초 뒤에 사라짐
        $gopher.classList.add("hidden");
        holes[index] = 0;
      }, 1000);
      $gopher.classList.remove("hidden");
    } else if (randomValue < bombPercent) {
      const $bomb = $$cells[index].querySelector(".bomb");
      holes[index] = setTimeout(() => {
        // 1초 뒤에 사라짐
        $bomb.classList.add("hidden");
        holes[index] = 0;
      }, 1000);
      $bomb.classList.remove("hidden");
    }
  });
}

$$cells.forEach(($cell, index) => {
  $cell.querySelector(".gopher").addEventListener("click", (event) => {
    if (!event.target.classList.contains("dead")) {
      score += 1;
      $score.textContent = score;
    }
    event.target.classList.add("dead");
    event.target.classList.add("hidden");
    clearTimeout(holes[index]); // 기존 내려가는 타이머 제거
    setTimeout(() => {
      holes[index] = 0;
      event.target.classList.remove("dead");
    }, 1000);
  });
  $cell.querySelector(".bomb").addEventListener("click", (event) => {
    event.target.classList.add("boom");
    event.target.classList.add("hidden");
    clearTimeout(holes[index]); // 기존 내려가는 타이머 제거
    setTimeout(() => {
      holes[index] = 0;
      event.target.classList.remove("boom");
    }, 1000);
    life--;
    $life.textContent = life;
    if (life === 0) {
      clearInterval(timerId);
      clearInterval(tickId);
      setTimeout(() => {
        alert(`게임 오버! 점수는${score}점`);
      }, 50);
    }
  });
});
