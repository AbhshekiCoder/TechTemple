import React from 'react'
import CoursesBannerImg from '../../assets/CoursesBannerImg.jpeg'

export default function CoursesBanner() {
    return (
      	<div className='CoursesBannerImg bg-cover' style={{backgroundImage: `url(${CoursesBannerImg})`}}>
      	    <div className='w-full h-full pt-24 max-sm:pt-12 inset-0 bg-black bg-opacity-50'>
				<div className='w-fit m-auto '>
			  		<div className='w-fit flex max-sm:block CourseTitleHeading m-auto'>
						<p className='max-sm:text-lg max-sm:m-auto text-white font-inter w-fit'>Become A </p>
						<div><p className='pl-4 text-white font-inter m-auto w-fit'>Data Analyst</p></div>
					</div>

					<div className='w-fit flex max-sm:block md:m-auto pt-28 max-md:pt-24 max-sm:pt-16'>
						{/* No Prior Coding Experience Required */}
						<div className='flex mr-20 max-md:mr-16 max-md:text-sm text-lg max-lg:text-base  '>
							<div className='max-sm:text-base' style={{color:'#3FC700'}}>
								<i className="bg-white rounded-full fa-solid fa-circle-check"></i>
							</div>
							<div className='ml-3 max-md:ml-2 max-md:m-auto font-normal  text-white max-sm:max-w-72'>
								<p>No Prior Coding Experience Required</p>
							</div>
						</div>

						{/* 30 weeks full-time program with live classes */}
						<div className='flex text-lg max-lg:text-base max-md:text-sm  max-sm:mt-7 '>
							<div className='max-sm:text-base' style={{color:'#3FC700'}}>
								<i className="bg-white rounded-full fa-solid fa-circle-check"></i>
							</div>
							<div className='ml-3 max-md:ml-2 max-md:m-auto font-normal text-white max-sm:max-w-72'>
								<p className=''>30 weeks full-time program with live classes</p>
							</div>
						</div>
				</div>

				{/* 10 weeks Practical Working program with live Training */}
				<div className='flex m-auto w-fit pt-9 text-lg max-md:text-sm max-lg:text-base  '>
					<div className='max-sm:text-base' style={{color:'#3FC700'}}>
						<i className="bg-white rounded-full fa-solid fa-circle-check"></i>
					</div>
					<div className='ml-3 max-md:ml-2 text-white max-sm:max-w-72'>
						<p className='w-fit'>10 weeks Practical Working program with live Training</p>
					</div>
				</div>

				{/* Button Download Brochure */}
				<div className=' flex m-auto w-fit pt-16 max-sm:pt-10  '>
					<div className='font-inter w-48 max-md:w-36 '>
						<button className='w-full rounded-md max-md:text-sm max-md:h-8 max-lg:h-9 h-10 text-gray-200 hover:text-purple-200 border-2 border-gray-500 hover:border-gray-600 bg-purple-600 hover:bg-purple-800  '>Download Brochure</button>
					</div>
					<div className='font-inter w-24 max-md:w-20 ml-10 max-md:ml-6'>
						<button className='w-full rounded-md max-md:text-sm max-md:h-8 max-lg:h-9 h-10  bg-purple-400 hover:bg-purple-800 text-gray-800 hover:text-gray-300 border-2 border-stone-600' >Buy Now</button>
					</div>
				</div>
				</div>
			
			</div>
      	</div>
    )
}
