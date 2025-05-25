# MyTripMap

## 概要
MyTripMapは、海外旅行の計画を地図上で可視化し、日程ごとに旅のスケジュールを整理できるアプリです。  
直感的なUIで行き先のピン留めやメモ追加ができ、Googleログインでマイプランを管理します。

## 想定ユーザー
- 海外旅行を予定している人
- 地図を使って旅行先を計画・管理したい人
- 日程ごとに旅程をわかりやすく整理したい人

## 技術スタック
- React, TailwindCSS
- Node.js (Express)
- Google Maps API または Leaflet.js
- Firebase Authentication (Googleログイン)
- Firebase Firestore または Supabase
- Docker (開発環境)
- Vercel, Render (デプロイ予定)
- react-i18next (多言語対応)

## MVP機能
- Googleアカウントでログイン
- 旅行プランの作成（タイトル・期間）
- 地図上に行き先ピンを追加・削除
- 日別のスケジュール表示とメモ管理
- 日本語・英語の多言語対応

## 画面構成
1. ログイン画面  
2. ダッシュボード（プラン一覧）  
3. プラン作成ページ（タイトル・期間入力＋地図）  
4. 旅程編集ページ（地図＋日程リスト）  
5. プラン詳細表示（共有用URLは将来的に）

## 開発環境構築
Dockerを使いNode.jsのバックエンドを構築予定。
