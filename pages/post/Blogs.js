import styles from '../../styles/Post.module.css'
import  ImageUrlBuilder  from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const Blogs = ({title, body, image}) =>{
    const router = useRouter()
    const [imageUrl, setImageUrl] = useState('');
    useEffect(()=>{
       const imgBuilder = ImageUrlBuilder({
           projectId: 'c53nutjk',
           dataset: 'production'
       });
       setImageUrl(imgBuilder.image(image));
    },[image])
 return (
     <div>
         <div className={styles.main}>
           <h1>{title}</h1>
           <div className={styles.contain}>
             {imageUrl && <img src={imageUrl} className={styles.mainImage} />}
           </div>
           <button type='button' onClick={()=> router.push('/post/cryptographic-hash')}>Click me</button>
           <div className={styles.body}>
               <BlockContent
               imageOptions={{w: 320, h: 320, fit: 'max'}} 
                projectId='c53nutjk' dataset='production' blocks={body} className={styles.body}/>
           </div>
         </div>
     </div>
    
 )
}

export const getServerSideProps = async (pageContext) =>{
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug)

  /* if (!pageSlug){
      return {
          notFound: true
      }
  } */
  const react = "90a119f2-572b-4304-bd7c-e44babae9673";
  const crypto = "596663e6-996f-4e80-8446-8079638367ef"


  const query = encodeURIComponent(`*[ _type == "post" && categories[0]._ref == "${react}"]`)
//   const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)
  const url = `https://c53nutjk.api.sanity.io/v1/data/query/production?query=${query}`
//   const url = `https://c53nutjk.api.sanity.io/v1/data/query/production`

  const myResult = await fetch(url).then(res => res.json());
  const post = myResult.result[0];

  if(!post){
      return {
          notFound: true
      }
  }else {
      return {
          props : {
              body: post.body,
              title: post.title,
              image: post.mainImage
          }
      }
  }
}
export default Blogs;