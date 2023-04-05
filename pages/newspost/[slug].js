import React from 'react';
import { useRouter } from 'next/router';

import {
  NewsPostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components';
import { getNewsPosts, getNewsPostDetails } from '../../services';

import { AdjacentPosts } from '../../sections';

function NewsPostDetails({ newspost }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <NewsPostDetail newspost={newspost} />
          <Author author={newspost.author} />
          <AdjacentPosts
            slug={newspost.slug}
            createdAt={newspost.createdAt}
          />
          <CommentsForm slug={newspost.slug} />
          <Comments slug={newspost.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={newspost.slug}
              categories={newspost.categories.map(
                (category) => category.slug,
              )}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsPostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getNewsPostDetails(params.slug);
  return {
    props: {
      newspost: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const newsposts = await getNewsPosts();
  return {
    paths: newsposts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
