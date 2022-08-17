// Core
import React, { useState } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.section`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
    grid-template-rows: 95% 5%;
    
    padding: 10px;
    
    div {
        display: grid;
        place-items: center;

        img {
            max-width: 300px;
            max-height: 300px;
        }
        
        h1 {
            font-size: 36px;
            color: #f73f52;
            font-family: sans-serif;
            font-weight: bold;
            
            span {
                color: #ff6723;
            }
            
            @media (max-width: 1024px) {
                font-size: 30px;
            }
        }
    }

    h2 {
        font-size: 20px;
        color: #747272;
    }
`;

// Imgages
import burstLogo from '../../assets/images/burst-logo.png';
import { useAddPostMutation, useFetchPostsQuery } from '../../bus/post/RTKQuery/posts.api';

export const HelloBurst = () => {
    const [ limit, setLimit ] = useState(10);
    const { data, isLoading, isError } = useFetchPostsQuery(limit);
    const [ addPost, { isLoading: isAddPostLoading }] = useAddPostMutation();

    const handleAddPost = async () => {
        let obj = {
            username: 'RAT:TEST2',
            text:     '333',
        };

        await addPost(obj).unwrap();
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (data) {
        return (
            <>
                <div onClick = { () => handleAddPost() }>
                    {
                        data && data.map((post: any) => (
                            <div key = { post.id }>{post.id}</div>
                        ))
                    }
                </div>
                <button onClick = { () => setLimit(5) }>limit 5</button>
                <button onClick = { () => setLimit(10) }>limit 10</button>
            </>
        );
    }

    return (
        <Container>
            <div>
                <img
                    alt = 'burst-logo'
                    src = { burstLogo }
                />
                <h1>Welcome to <span>Burst.🔥</span></h1>
            </div>
            <h2>Docs are comming soon...</h2>
        </Container>
    );
};
