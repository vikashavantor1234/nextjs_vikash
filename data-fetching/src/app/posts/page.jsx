// import FetchPost from "./components/postusingfetch";
import FetchPostUsingSWR from "@/app/posts/components/postusingswrfetch";

export default  function PostsPage(){
    console.log('Post Page')
    return <>
        {/* <FetchPost/> */}
        <FetchPostUsingSWR/>
    </>
}