import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {

    const router = useRouter();
  
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000) 
     },[])

    return (
        <div className='not-found'>
            <h1>Ooops!</h1>
            <h2>That page not found</h2>
            <p>Go back to the page</p> <Link href='/'><a>HomePage</a></Link>
        </div>
     );
}
 
export default NotFound;