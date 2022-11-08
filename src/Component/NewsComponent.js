import React, { useEffect, useState, lazy, Suspense, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './Item';
import './NewsComponent.css';
import Spinner from './Spinner';
//133ac39712e54d8d934252d51187f32c
const NewsComponent = (props) => {
    const [state, setState] = useState({ art: [] ,totalResult:0});
    const [pageSize, setpageSize] = useState(props.pageSize);
    const [loading, setLoadng] = useState(true);
    // const [totalArt, settotalArt] = useState(0);
    const [page, setpage] = useState(1);
    let check = pageSize;
    const triggerRef = useRef(null);
    // const onGrabData = useRef(currePage)=>{}
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=862f8e4f91a246a5850ae86e852dcd41&page=${page}&pageSize=${pageSize}`;

        const getData = async () => {
            setLoadng(true);
            fetch(url).then((response) => {
                return response.json();
            })
                .then((data) => {
                          console.log(data.totalResults);
                    //settotalArt(data.totalResults);
                    // setState({ art: data.articles });
                    setState({ art: state.art.concat(data.articles), totalResult:(data.totalResults)});
                    setLoadng(false);
                })
        }
        getData();
    }, [page])
    const fetchMore = () => {
        console.log("I am at bottom");
        setTimeout(()=>{
            setpage(page + 1);
        },800);
    }
    window.addEventListener('scroll',()=>{
        const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
        if(scrollTop+clientHeight>=scrollHeight){
            console.log("I am at bottom");
            check +=pageSize
            fetchMore();

        }
    })
    return (


       <>
            {loading && <Spinner />}
            {console.log(state.art.length + "=>" + state.totalResult)}
           {/* <InfiniteScroll
                dataLength={state.art.length}
                next={fetchMore}
                hasmore={state.art.length !== state.totalResult}
                loader={loading &&<Spinner/>}
                
            > */}
                 <div className='container'>
                    <div className='row my-5'>
                        {state.art&&state.art.map((data) => {
                            return <div key={data.id} className='col-md-3 my-5'>
                                <Item
                                    title={(data.title) ? data.title.slice(0, 40) + "...." : "Unknown Author"}
                                    desc={(data.description) ? data.description.slice(0, 88) : "No description"}
                                    urlImage={data.urlToImage ? data.urlToImage : "assets/not-found.jpg"}
                                    url={data.url}
                                />
                            </div>
                        })}
                    </div>
                </div>
            {/* </InfiniteScroll> */}
        </>

    )
}

export default NewsComponent;

