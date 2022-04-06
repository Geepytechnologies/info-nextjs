import React, {useEffect , useState} from 'react';
import sanityClient from '../../client.js'

export default function post1() {
    const [postData, setPostData] = useState('');
    useEffect(()=>{
        sanityClient
           .fetch(`*[ _type == "post"]{
               title,
               slug,
               mainImage{
                   asset->{
                       _id,
                       url
                   },
                   alt
               }
           }`)
           .then((data) => console.log(data))
           .catch(console.error)
    },[])

  return (
    <div>
        <h1></h1>
    </div>
  )
}
