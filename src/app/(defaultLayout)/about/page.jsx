import About1 from '@/app/Components/About/About1';
import Brand1 from '@/app/Components/Brand/Brand1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Process2 from '@/app/Components/Process/Process2';
import Team1 from '@/app/Components/Team/Team1';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

const page = () => {
    return (
        <div>
           <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="About Us"
            ></BreadCumb>  
            <About1
                img1="/assets/img/about_img_1.webp"
                img2="/assets/img/about_img_2.webp"
                img3="/assets/img/about_img_3.webp"
                expNumber="5"
                expYers="Years"
                expTitle="Experience"
                number="(+44)7469-641922"
                subTitle="Our About"
                Title="Speedy Repairs Quality Results"
                Content="We are professional and committed to service is a statement that highlights the companys professionalism and dedication to providing"
                feature1="Express Oil Change"
                feature2="Quick Fix Tire Rotation"
                listItem={[
                    "Driving Quality, Ensuring Safety Every Car",
                    "Comprehensive Diagnostic Check",
                    "We Know Your Car Inside Out",
                ]}
                avatar="/assets/img/avatar_1.png"
                name="Gaurav Yadav"
                designation="Founder CEO"
            ></About1>
            <Testimonial2></Testimonial2>
            <Brand1></Brand1>
            <Process2></Process2>
            <Team1></Team1>                         
        </div>
    );
};

export default page;