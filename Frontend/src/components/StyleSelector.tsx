import React from 'react'
import type { ThumbnailStyle } from '../../public/assets/assets'
import { CpuIcon, ImageIcon, PenToolIcon, SparkleIcon,  SquareIcon } from 'lucide-react';

const StyleSelector = ({value,onChange,isOpen,setIsOpen} : { value : ThumbnailStyle; onChange:(style:ThumbnailStyle)=>void; isOpen:boolean; setIsOpen:(open:boolean)=>void}) => {

    const styleDescriptions : Record<ThumbnailStyle,string>={
        "Bold & Graphic": "Vibrant colors, strong contrasts, and eye-catching typography for maximum impact.",
        "Minimalist" : "Clean lines, ample white space, and a focus on simplicity to convey your message with elegance.",
        "Photorealistic" : "Highly detailed and lifelike images that create a sense of realism and immersion.",
        "Illustrated" :"Hand-drawn or digitally created artwork that adds a unique and artistic flair to your thumbnail.",
        "Tech/Futuristic" : "Sleek designs, neon colors, and futuristic elements that evoke a sense of innovation and cutting-edge technology.",
    }

      const styleIcons : Record<ThumbnailStyle, React.ReactNode>={
        "Bold & Graphic": <SparkleIcon className='h-4 w-4'/>,
        "Minimalist" :  <SquareIcon className='h-4 w-4'/>,
        "Photorealistic" :  <ImageIcon className='h-4 w-4'/>,
        "Illustrated" :  <PenToolIcon className='h-4 w-4'/>,
        "Tech/Futuristic" :  <CpuIcon className='h-4 w-4'/>,
    }


  return (
    <div className='relative space-y-3 dark'>
        <label className='block text-sm font-medium text-zinc-200'>Thumbnail Style</label>

        <button
        type='button'
        onClick={()=> setIsOpen(!isOpen)}
        className=''>
            <div className='space-y-1'>
                <div className='flex items-center gap-2 font-medium'>
                    {styleIcons[value]}
                    <span>{value}</span>
                </div>
                <p className='text-xs text-zinc-400'>{styleDescriptions[value]}</p>
            </div>
        </button>
    </div>
  )
}

export default StyleSelector