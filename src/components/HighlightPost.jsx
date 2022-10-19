import React from 'react';
import Link from 'next/link';
import { AiOutlineFire } from 'react-icons/ai';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function HighlightPost({ title, date, slug, author, readTime }) {
  return (
    <Link href={`/post/${slug}`}>
      <a className="flex lg:col-span-2 h-[360px] bg-[url('/code.png')] bg-cover bg-center bg-no-repeat w-full justify-center lg:rounded-3xl lg:drop-shadow-lg lg:hover:-translate-y-2 lg:hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
        <div className="flex flex-col h-full p-6 w-full lg:px-12 lg:py-8 bg-black/40 lg:rounded-3xl">
          <div className="flex justify-between items-center">
            <div
              style={{
                backgroundImage: `url(${author.picture})`,
              }}
              className="w-10 h-10 rounded-full border-2 border-neutral-50 bg-no-repeat bg-cover bg-center drop-shadow-2xl"
            />

            <div className="flex bg-neutral-50 items-center justify-center rounded-full p-2 drop-shadow-xl">
              <AiOutlineFire size={24} className="text-neutral-800" />
            </div>
          </div>

          <div className="flex flex-col mt-4 text-neutral-50 flex-1 justify-between">
            <Link href={`/post/${slug}`}>
              <div className="mt-2 flex flex-col justify-between flex-1">
                <h2 className="text-2xl lg:text-4xl">{title}</h2>

                <div className="flex gap-x-2 text-sm">
                  <span>
                    {formatDistanceToNow(parseISO(date), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                  <span>•</span>
                  <span>{readTime} de leitura</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
}
