import styles from '../../styles/Post.module.css'
import  ImageUrlBuilder  from '@sanity/image-url'
import { useState, useEffect } from 'react'

export const Post = ({title, body, image}) =>{
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
           {/* <img src={imageUrl} className={styles.mainImage} /> */}
         </div>
     </div>
    
 )
}

export const getServerSideProps = async (pageContext) =>{
  const pageSlug = pageContext.query.slug;

  if (!pageSlug){
      return {
          notFound: true
      }
  }
//   const query = encodeURIComponent(`*[ _type == "post" && category == 'ReactJS']`)
  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)
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
export default Post;