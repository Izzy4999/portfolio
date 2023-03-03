import React from 'react';
import { useLottie } from 'lottie-react';

type Props = {
    animationPath:any;
}
type options ={
    loop:boolean,
    autoplay:boolean,
    animationData:string
}
const GreetingLottie = ({ animationPath}:Props) => {
  const defaultOptions:options = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
  };
  const {View} = useLottie(defaultOptions)
  return (
    <div onClick={() => null}>
        {View}
    </div>
  );
};

export default GreetingLottie;
