import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Head, Navbar } from '../patterns';
import { HighlightPost, Post } from '../components';
import { getAllPosts } from '../lib/api';

export default function Home({ posts }) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <>
      <Head />

      <Navbar />

      <main className="grid mt-16 w-full max-w-7xl mx-auto flex-wrap items-center gap-8 auto-cols-auto lg:grid-cols-3">
        <HighlightPost {...heroPost} />
        {morePosts.map((post) => (
          <Post {...post} />
        ))}
      </main>

      <section className="flex items-center gap-x-6 mt-16 justify-center">
        <p>Página 1 de 100</p>

        <Link href="/test">
          <div className="p-3 bg-neutral-100 dark:bg-[#111] rounded-full drop-shadow-md">
            <BsArrowRight size={20} />
          </div>
        </Link>
      </section>

      <footer className="flex flex-col items-center justify-center gap-y-6 mt-16 py-20 bg-[#e2e5ec] dark:bg-[#070707] w-full">
        <div className="flex gap-x-6">
          <Link href="/test">
            <FaFacebook size={20} />
          </Link>
          <Link href="/test">
            <FaTwitter size={20} />
          </Link>
          <Link href="/test">
            <FaInstagram size={20} />
          </Link>
        </div>

        <p className="text-sm">Blog WhatCode &copy; 2022</p>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'readTime',
  ]);

  return {
    props: {
      posts,
    },
  };
}
