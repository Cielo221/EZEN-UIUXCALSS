const canvas = document.querySelector("canvas");

// canvas를 윈도우 전체크기 설정
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
/**getContext() : 2차원에 그림을 그려질 준비가 되게 하는 함수 */
// fillStyle = 색상을 정의하는 속성
// ctx.fillRect(10, 10, 50, 100);

let triangle = new Path2D();
//스타일을 정의할 수 있는 함수
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 180 * 360);

ctx.fillStyle = "green";
ctx.stroke(triangle);
ctx.fill(circle);
// ====곡선======
// 조절점 하나, 2차 베지에
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);

// ctx.stroke();

// 조절점 두개, 3차 베지에
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// (90, 250 = 첫번째 조절점/310, 10 = 두번째 조절점 /350, 100 = 도착지점)
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// (200, 50, 조절점 시작 x,y / 끝나는 지점 x,y)
// ctx.stroke();

// =====타원=======
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, (Math.PI / 180) * 360);
// (200, 70, 80 = 가로 반지름_x축, 50 = 세로 반지름_Y축, 0 = 각도를 안튼다, 0 = 각도시작점)
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, (Math.PI / 180) * 360);
// ctx.stroke();
// ========호========
// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

// ctx.strokeStyle = "skyblue";
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

// ======타원을 만드는 변칙적인 방법 =========
// ctx.strokeStyle = "blue";
// ctx.scale(1, 0.7);
// ctx.beginPath();
// ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 360);

// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 360, false);

// ctx.stroke();
// ctx.closePath();
// =======반원======
// ctx.fillStyle = "skyblue";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);

// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.stroke();
// ctx.closePath();

// =====원======
// ctx.fillStyle = "skyblue";
// ctx.strokeStyle = "pink";
// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// (200_x,150_y = 원의 중심점, 100 = 반지름, 0 = 첫스타트에서 시작하는 각도 , Math.PI * 2 = 각도, true = 반시계반향 )
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// =====삼각형========
// ctx.beginPath();
// 나 점 찍을꺼야~
// ctx.moveTo(50, 50);
// 좌표점 어디서 부터
// ctx.lineTo(200, 200);
// 종료지점 여기까지
// ctx.stroke();
//그려줘~

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
//끝낼꺼야~ 점 이어줘~
// ctx.lineTo(50, 50);

// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fill();

// ctx.stroke();

// ======사각형=======
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = "black";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);
//strokeStyle (정의) => strokeRect (출력) 해야만 화면에 출력된다.

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);

/** JS 세계관
 * 시간 : 1초 = 밀리초 1000
 * 각도 : 1도, deg  => Radian => 라디언 / 래디언
 *
 * 1래디언 = PI / 180
 *
 * 1래디언 = PI / 180 = 180도(우리가 알고 있는 각도) = (PI / 180) * 180 => (PI * 1)
 * 2래디언 = 360도 = (PI * 2)'
 *
 * Math.PI * 0.5 => 90도
 * Math.PI * 1 => 180도
 * Math.PI * 1.5 => 270도
 * Math.PI * 2 => 350도
 */

// const radians = (Math.PI / 180) * 180;
