// import { FixedSizeList as List } from "react-window";

function LazyLoad() {
  // // Array of 100,000 items
  // const arr = Array(100000).fill(0);
  // // Getting the props =>Index and Style from React Window
  // // eslint-disable-next-line react/prop-types
  // const Row = ({ index, style }) => (
  //   <div style={style}>
  //     <ul key={index}>
  //       <li>{index + 1}</li>
  //     </ul>
  //   </div>
  // );
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     {/* Rendering The Items */}
  //     <List height={600} itemCount={arr.length} itemSize={35} width={"100%"}>
  //       {Row}
  //     </List>
  //   </div>
  // );

  return (
    //Lazy Loading with react lazy suspense and fallback
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
      exercitationem sunt quo vel animi ut, reiciendis rerum recusandae
      cupiditate sequi non labore consectetur perferendis ex vero asperiores
      quasi consequatur fuga. Quod sed eum voluptatem veritatis obcaecati. Est
      quaerat labore architecto consequatur saepe sint et corrupti deserunt,
      praesentium unde vitae? Voluptatem fugit, hic necessitatibus blanditiis
      doloremque perferendis tempora dolor praesentium dicta!
    </div>
  );
}

export default LazyLoad;
