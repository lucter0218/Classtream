<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="." class="flex items-center">
        <img src="./assets/image.png" class="h-6 mr-3" alt="Classtream Logo" />
    </a>
  </div>
</nav>
<nav class="bg-gray-200 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class="font-Pretendard-SemiBold text-gray-900 dark:text-white hover:underline" aria-current="page">홈</a>
                </li>
                <li>
                    <a href="#" class="font-Pretendard-SemiBold text-gray-900 dark:text-white hover:underline">코스</a>
                </li>
                <li>
                    <a href="#" class="font-Pretendard-SemiBold text-gray-900 dark:text-white hover:underline">오리지널 코스</a>
                </li>
                <li>
                    <a href="#" class="font-Pretendard-SemiBold text-gray-900 dark:text-white hover:underline">공지 사항</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<section class="bg-center bg-no-repeat bg-[url('./assets/study.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mt-2 mb-1 text-5xl font-Pretendard-SemiBold tracking-tight leading-none text-white dark:text-white">그 누구도 아닌</h1>
        <h1 class="mb-10 text-5xl font-Pretendard-ExtraBold tracking-tight leading-none text-white dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded">나를 위한</mark> 코스</h1>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-Pretendard-SemiBold text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-black dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                코스 찾아보기
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-Pretendard-SemiBold text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-black dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                오리지널 코스 지원하기
            </a>  
        </div>
    </div>
</section>
<div>
    <h1 class="text-center mt-7 text-3xl font-Pretendard-ExtraBold tracking-tight leading-none text-black dark:text-white">인기 코스</h1>
    <h1 class="text-center mt-3 text-xl font-Pretendard-Regular tracking-tight leading-none text-slate-500 dark:text-white">추후 공개 예정</h1>
</div>
<footer class="bg-white rounded-xl m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Classtream</a>. All Rights Reserved.
    </span>
    </div>
</footer>
</template>