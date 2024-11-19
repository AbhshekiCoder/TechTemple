import React, { useEffect, useState } from 'react'
import ReviewProfile from '../../../assets/ReviewProfile.png'
import ReviewProfile1 from '../../../assets/ReviewProfile1.png'
import ReviewProfile2 from '../../../assets/ReviewProfile2.png'
import ReviewProfile3 from '../../../assets/ReviewProfile3.png'
import axios from 'axios'
import url from '../../../misc/url'

export default function Review() {
    let [reviewdata, setReviewData] = useState()
    let review = async()=>{
        let result = await axios.post(`${url}review`)
        setReviewData(result.data);
        console.log(reviewdata)
     
       }
       useEffect(()=>{
        review();

       },[])
  return (
    
        <div className='w-full  bg-white mt-10 '>
            <div className='reviewHeading'>
            <div className=' mt-24  text-purple-900 font-serif font-bold' style={{fontSize:'60px'}}>
                <p>Review</p>
            </div>
            <div className='h-0'></div>
            <div className='h-0'></div>

            </div>

            <div className='reviewCards mt-10  w-full overflow-x-auto'>
                {/* Card 1 */}
                {reviewdata?reviewdata.map(Element =>(
                    <div className=' lg:p-2 rounded-lg ' style={{backgroundColor:'#EDEDED'}} >
                    <div className='flex w-fit ml-3 mt-3 '>
                        <div className='  w-24 flex items-center justify-end rounded-circle '>
                            <img src={`data:${Element.type};base64,${Element.img}`} className = 'reviewImg w-24 rounded-circle h-16' alt="" />
                        </div>
                        <div className=' w-full font-inter ' style={{color:'#7B7B7B'}}>
                            {/* Name */}
                            <div className= 'reviewCardName ' >
                                <p className=''>{Element.name}</p>
                            </div>
                            {/* Job-Title */}
                            <div className ='reviewCardSubName'>
                                <p>{Element.technology}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className ='flex text-2xl h-12  mt-3 pt-2 ml-3 mr-4 ' style={{color:'#F4D10B'}}>
                               {Array.from({length: Element.rating}).map((_, index)=>{
                                  return  <div>
                                    <i className='fa-solid fa-star mr-2'></i>
                                </div>
                                

                               })}
                               
                               
                            </div>
                    </div>

                    <div className='reviewDesc  ' >
                        <p>{Element.description}</p>
                    </div>
                </div>    

                )):''}
                
              

    
                {/* Card 1 */}
                
    
            </div>
        </div>
    
  )
}
