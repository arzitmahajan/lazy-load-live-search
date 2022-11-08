import React, { useEffect, useState } from 'react'
import Item from './Item';

const LiveNewsComponent = (props) => {
    const [state, setState] = useState({ art: [] });
    const [input, setinput] = useState("general");
    const [category, setcategory] = useState("general");
    const categories = ["business","science","health","sports","technology","entertainment","general"];
    const inputEvent = (e) => {
        const data = e.currentTarget.value;
        console.log("That = "+data);

        // dispatch(
        //     {type:"search",
        //      payload: data,
        // });

        // categories.forEach(x => {
        //     if(x.includes(data)){
        //         setcategory(x);
        //         return;
        //     }
        // });
        setinput(data);
    }
    useEffect(() => {
        console.log("This = "+input);
        // let url = `https://newsapi.org/v2/${input}?q=bitcoin&apiKey=133ac39712e54d8d934252d51187f32c&page=1&pageSize=${props.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b76e855f3c3c428ca00ce9037243c475&page=1&pageSize=${props.pageSize}`;
        let url =`https://newsapi.org/v2/everything?q=${input}&from=2022-11-08&sortBy=popularity&apiKey=b76e855f3c3c428ca00ce9037243c475&page=1&pageSize=${props.pageSize}`

        const getData = () => {
            fetch(url).then((response) => {
                return response.json();
            })
                .then((data) => {
                    console.log(data);
                    setState({ art: data.articles });

                })
        }
        getData();
    }, [input]);


    return (
        <div className='container'>
            <div className='d-flex justify-content-center my-5'>
                <div style={{ width: "20rem"}} className="d-block">
                    <input onChange={inputEvent} value={input} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                    <div className="d-flex my-2 justify-content-center">
                        <p style={{color:"#0B5ED7"}}>Live Search on the bases of categories</p>
                    </div>
                </div>
            </div>
            <div className='row my-5'>
                {state.art && state.art.map((data) => {
                    // console.log(data)
                    return <div key={data.url} className='col-md-3 my-5'>
                        <Item
                            title={(data.title) ? data.title.slice(0, 40) + "...." : "Unknown Author"}
                            desc={(data.description) ? data.description.slice(0, 88) : "No description"}
                            urlImage={data.urlToImage ? data.urlToImage : "assets/not-found.jpg"}
                            url={data.url}
                        />
                    </div>
                })}
            </div>
        </div>)
}

export default LiveNewsComponent;
