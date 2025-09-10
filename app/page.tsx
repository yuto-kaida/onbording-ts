import { connection } from "next/server"; // 追加
import { fetchImage } from "./fetch-image"; // 追加
import { CatImage } from "./cat-image"; 
 
export default async function Home() {
  // (2) ビルド時にfetchImageの結果が固定されないようにする
  await connection();

  const image = await fetchImage();

  console.log("Home: 画像情報を取得しました", image);
  // return <div>猫画像予定地</div>;
  return <CatImage url={image.url} />;
}
