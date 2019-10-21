import React, { useState, useEffect } from "react";
import {axioswithAuth} from './axioswithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axioswithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        console.log(res)
        setColorList(res.data)
      })
      .catch(err => console.log(err))
    }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
