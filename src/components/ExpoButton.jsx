import React from 'react'
import ExpoLogo from '../assets/img/expo.png'
import ExpoLogo0 from '../assets/img/expo0.png'
function ExpoButton({link,bg,text}) {
    console.log(bg);
  return (
    <div 
      className={`bg-${bg} flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer`}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={bg === 'white' ? ExpoLogo0 :ExpoLogo} alt="expo_icon" className='w-5 h-5 minmd:w-10 minmd:h-10 object-contain' />
      <div className="flex flex-col justify-start ml-4">
        <p className={`text-${text} minmd:text-lg font-normal text-xs`}>Get it on</p>
        <p className={`text-${text} minmd:text-lgfont-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  )
}

export default ExpoButton