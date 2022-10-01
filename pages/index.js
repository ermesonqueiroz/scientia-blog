import React from 'react';
import Link from 'next/link';
import { AiOutlineFire } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Head, Navbar } from '../src/patterns';

function Post() {
  return (
    <Link href="/test">
      <div className="flex flex-col h-[360px] w-full min-w-[220px] justify-between rounded-3xl drop-shadow-lg hover:-translate-y-2 hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
        <div className="flex items-start px-6 py-8 bg-[url('/code.png')] rounded-t-3xl bg-cover bg-center bg-no-repeat h-[220px]">
          <div className="flex justify-between items-center w-full">
            <div
              style={{
                backgroundImage:
                  "url('https://unavatar.io/instagram/willsmith')",
              }}
              className="w-10 h-10 rounded-full border-2 border-neutral-50 bg-contain drop-shadow-2xl"
            />

            <div className="flex bg-neutral-50 items-center justify-center rounded-full p-2 drop-shadow-xl">
              <AiOutlineFire size={20} className="text-neutral-800" />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-100 dark:bg-[#111] flex-1 rounded-b-3xl p-6">
          <Link href="#CleanCode">
            <p className="text-sm text-indigo-900 dark:text-indigo-400 font-semibold">
              CleanCode
            </p>
          </Link>

          <Link href="/test">
            <div className="mt-4 flex flex-col justify-between flex-1">
              <h2>Código Limpo: reflexão e prática</h2>

              <div className="flex gap-x-2 text-sm">
                <span>há 2 dias</span>
                <span>•</span>
                <span>4 min de leitura</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head />

      <Navbar />

      <div className="flex w-full h-[300px] lg:h-[480px] bg-banner bg-no-repeat bg-cover bg-center items-center justify-center">
        <div className="flex flex-col items-center text-neutral-50 max-w-7xl px-8">
          <h1 className="leading-loose text-3xl">WhatCode Blog</h1>
          <p className="max-w-2xl text-center text-base">
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus
            quis, vehicula ac nisi. Posuere libero varius. Nullam a nisl ut ante
            blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma
            uma pindureta.
          </p>
        </div>
      </div>

      <main className="grid mt-16 w-full max-w-7xl mx-auto flex-wrap items-center gap-8 auto-cols-auto lg:grid-cols-3">
        <Link href="/test">
          <div className="flex lg:col-span-2 h-[360px] bg-[url('/code.png')] bg-cover bg-center bg-no-repeat w-full justify-center lg:rounded-3xl lg:drop-shadow-lg lg:hover:-translate-y-2 lg:hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
            <div className="flex flex-col h-full p-6 w-full lg:px-12 lg:py-8 bg-black/40 lg:rounded-3xl">
              <div className="flex justify-between items-center">
                <div
                  style={{
                    backgroundImage:
                      "url('https://unavatar.io/instagram/willsmith')",
                  }}
                  className="w-10 h-10 rounded-full border-2 border-neutral-50 bg-contain drop-shadow-2xl"
                />

                <div className="flex bg-neutral-50 items-center justify-center rounded-full p-2 drop-shadow-xl">
                  <AiOutlineFire size={24} className="text-neutral-800" />
                </div>
              </div>

              <div className="flex flex-col mt-4 text-neutral-50 flex-1 justify-between">
                <Link href="#CleanCode">
                  <p className="text-lg font-semibold">CleanCode</p>
                </Link>

                <Link href="/test">
                  <div className="mt-2 flex flex-col justify-between flex-1">
                    <h2 className="text-2xl lg:text-4xl">
                      Código Limpo: reflexão e prática
                    </h2>

                    <div className="flex gap-x-2 text-sm">
                      <span>há 2 dias</span>
                      <span>•</span>
                      <span>4 min de leitura</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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
