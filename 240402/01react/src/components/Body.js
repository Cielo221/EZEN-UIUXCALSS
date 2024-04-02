import "./Body.css";

function Body({ name, location, favorList }) {
  return (
    <div>
      <h1>
        {name}은 {location}에 살고 있습니다.
        <br />
        {name}은 {favorList.length}개의 최애 메뉴가 있습니다.
        {favorList[0]}, {favorList[1]}, {favorList[2]}를 매우 사랑합니다.
      </h1>
    </div>
  );
}

// favorList가 APP에서 안나온다면,
Body.defaultProps = {
  favorList: ["라면", "순대", "떡볶이"],
};
export default Body;
