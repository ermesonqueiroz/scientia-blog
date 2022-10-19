import React from 'react';
import Link from 'next/link';
import { AiOutlineFire } from 'react-icons/ai';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Post({ title, date, slug, author, readTime }) {
  return (
    <Link href={`/post/${slug}`}>
      <a className="flex flex-col h-[360px] w-full min-w-[220px] justify-between rounded-3xl drop-shadow-lg hover:-translate-y-2 hover:drop-shadow-2xl transition-all duration-200 ease-in-out">
        <div className="flex items-start px-6 py-8 bg-[url('/code.png')] rounded-t-3xl bg-cover bg-center bg-no-repeat h-[220px]">
          <div className="flex justify-between items-center w-full">
            <div
              style={{
                backgroundImage: `url(${author.picture})`,
              }}
              className="w-10 h-10 rounded-full border-2 border-neutral-50 bg-contain drop-shadow-2xl"
            />

            <div className="flex bg-neutral-50 items-center justify-center rounded-full p-2 drop-shadow-xl">
              <AiOutlineFire size={20} className="text-neutral-800" />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-100 dark:bg-[#111] flex-1 rounded-b-3xl p-6">
          <Link href={`/post/${slug}`}>
            <div className="mt-4 flex flex-col justify-between flex-1">
              <h2>{title}</h2>

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
      </a>
    </Link>
  );
}
