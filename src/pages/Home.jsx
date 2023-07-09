import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
      let res=await fetch(API_URL);
      let data=await res.json();
      setPosts(data);
    }
    catch(err){
      console.log("erroe agya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])
  return (
  <div className="w-full h-full">
    {
      loading ? (<Spinner className="w-full h-full"/>) : 
      (
        posts.length > 0 ?(
          <div className="min-h-[80vh] grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 max-w-6xl mx-auto p-2">
          {
            posts.map((post)=>(<Product key={post.id} post={post}/>))
          }
          </div>

        ): (<p> NO data found</p>)
      )
    }
  </div>);
};

export default Home;
