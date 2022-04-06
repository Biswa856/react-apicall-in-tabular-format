import React from "react";
import "./style.css";

export default function App() {
  const [data, setData] = React.useState([]);
  async function getApiData() {
    let apiData = await fetch("https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json")
    apiData = await apiData.json()
    console.log(apiData);
    setData(Object.values(apiData.products))
  }
  console.log(data[0])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={getApiData}>showData</button>
      <table>
      {data.map((element,index)=>{
        return (
        <tr>
          <td>{element?.subcategory}</td>
          <td>{element?.title}</td>
          <td>{element?.price}</td>
          <td>{element?.popularity}</td>

        </tr>)
      })
      }
      </table>
      
    </div>
  );
}
