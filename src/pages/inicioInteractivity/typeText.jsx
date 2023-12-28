import React, { useEffect, useRef } from 'react';

export const typeText = function(){
    const subtitleRef = useRef('');
  
    let fullSubtitle;
    const addLetters = async function(){
        for (const letter of fullSubtitle) {
          subtitleRef.current.textContent += letter;
          await new Promise ((resolve) => setTimeout(resolve,100))
        }
      }
    const cleanText = () => subtitleRef.current.textContent = '';
}