import React from 'react';
import NHead from 'next/head';

export default function Head({ title = 'WhatCode' }) {
  return (
    <NHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </NHead>
  );
}
