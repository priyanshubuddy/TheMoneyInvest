/* eslint-disable no-unused-vars */
import React from 'react';
import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, BlogHeader } from '../components';
import { getNewsPosts } from '../services';
import { grpahCMSImageLoader } from '../util';
import NewsPostCard from '../components/NewsPostCard';

import FirstNewsPost from '../components/FirstNewsPost';

import LatestPost from '../components/LatestPost';

// const NewsApp = ( ) => {
//   return (
//     <div></div>
//   );
// };

// export default NewsApp;

export default function NewsApp({ newsposts }) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ width: '1250px', display: 'flex', alignItems: 'center' }}>
        <div
          className="NewsBox1"
          style={{
            height: '400px',
            width: '313px',
            float: 'left',
            backgroundSize: 'cover',
          }}
        />
        <div
          className="NewsBox2"
          style={{
            height: '400px',
            width: '624px',
            margin: '10px',
          }}
        />
        <div>
          <div
            className="NewsBox3"
            style={{
              height: '195px',
              width: '313px',
              clear: 'both',
            }}
          />
          <div
            className="NewsBox4"
            style={{
              height: '195px',
              width: '313px',
              marginTop: '10px',
            }}
          />
        </div>
      </div>

      {/* <NewsPostCard /> */}
      <div style={{ width: '1250px', display: 'flex', alignItems: 'center' }}>
        <div className="" style={{ display: 'flex' }}>
          <div className="mr-4" style={{ width: '25%' }}>
            <h1 className="border-black border-b-2 mb-2  ">Recent News</h1>
            {newsposts.map((post, index) => (
              <NewsPostCard key={index} post={post.node} />
            ))}
          </div>

          <div className="mr-4" style={{ width: '50%' }}>
            <h1 className="border-black border-b-2 mb-2">Popular News</h1>
            {/* {newsposts.map((post, index) => ( */}
            {/* ))} */}
            <div className="grid grid-cols-12 gap-2 ">
              <div className="col-span-8 ">
                second
                {/* <LatestPost /> */}
                <FirstNewsPost />
              </div>
              <div className="col-span-4 bg-red-600">first</div>
            </div>
          </div>
          <div className="" style={{ width: '25%' }}>
            <h1 className="border-black border-b-2 mb-2">Trending News</h1>
            {newsposts.map((post, index) => (
              <NewsPostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const newsposts = (await getNewsPosts()) || [];
  return {
    props: { newsposts },
  };
}
