#!/usr/bin/bash

pkg install imagemagick git nodejs ffmpeg libwebp mc nano yarn
npm install
npm cache clean -f

echo "[❗] Penginstalan module sudah selesai, Selanjutnya silahkan ketik : node index.js"