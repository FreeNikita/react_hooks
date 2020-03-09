import React, {useEffect} from 'react';
import useFetch from "hooks/useFetch";
import Feed from "components/feed";


const GlobalFeed = () => {
    const URL ='/articles?limit=10&offet=0';
    const [{response, isLoading, isError}, doFetch] = useFetch(URL)

    useEffect((
        doFetch
    ), [doFetch])

    return(
        <div className='home-page'>
            <div className='banner'>
                <div className='container'>
                    <h1>Medium clone</h1>
                    <p>Medium clone</p>
                </div>
            </div>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-9'>
                        { isLoading && <div>Loading...</div>}
                        { isError && <div>Some error happened</div>}
                        {
                            !isLoading && response && (
                                <Feed articles={response.articles}/>
                            )
                        }
                    </div>
                    <div className='col-md-3'>
                        popular tags
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalFeed