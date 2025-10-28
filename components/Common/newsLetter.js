import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const NewsLetter = ()=>{

    const [isSubmitting, setIsSubmitting]=useState(false);

    const [respObject, setRespObject]=useState({errCode:"", errDesc:""});
    /*
    useEffect(()=>{
        AOS.init();
    },[]);
    */

    useEffect(()=>{

        if (respObject.errCode==="Success" || respObject.errCode==="Error"){
            const timer=setTimeout(()=>{
                setRespObject({errCode:"", errDesc:""});

            }, 3000);
            
            return(()=>{
                    clearTimeout(timer);
            });

        }

    }, [respObject.errCode])

    return (
        <div className="newsletter bg_image_2" data-aos="fade-up" data-aos-duration="700">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <form className="newsletter_form" onSubmit={async (evt)=>{

                        evt.preventDefault();

                        setIsSubmitting(true);

                        const formData=new FormData(evt.target);

                        const subscriber=Object.fromEntries(formData.entries());

                        try {

                            const resp=await fetch(`${process.env.api_server_route}createSubscriber`, {
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify(subscriber)
                            })
                            
                            if (!resp.ok){
                                throw new Error(resp.errDesc)
                            }
                            if (resp.status!==200){
                                throw new Error(resp.errDesc)
                            }
                            const respData=await resp.json();

                            setIsSubmitting(false);

                            setRespObject({errCode:"Success", errDesc:"Successfully created subscriber"});

                            evt.target.reset();
            
                        } catch (error) {
                            setRespObject({errCode:"Error", errDesc:error.message});
                            evt.target.reset();
                            setIsSubmitting(false);
                        }

                    }}>
                        <div className="newsletter_header">
                            <p><i className="ion-email"></i>Subscribe to newsletter</p>
                            <h3>Get each & every new blogs through your e-mail</h3>
                        </div>
                        <div className="form_group">
                            
                            <input className="form-control" type="email" placeholder="Your Email Address" name="email" required="" />
                            
                            <button type="submit" className="button">
                                {!isSubmitting?"Subscribe":"Submitting..."}
                            </button>
                            
                        </div>
                    </form>
                    {respObject.errCode==="Success"||respObject.errCode==="Error"&&<p>{respObject.errDesc}</p>}
                </div>
            </div>
        </div>
        
    )
}

export default NewsLetter;