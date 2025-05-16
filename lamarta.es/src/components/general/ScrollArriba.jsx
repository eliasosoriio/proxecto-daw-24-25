import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollArriba() {
  const { ruta } = useLocation();

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   }, [ruta]);

   return null;
}

export default ScrollArriba
