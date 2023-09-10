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
<h1 class="text-center mt-7 text-3xl font-Pretendard-ExtraBold tracking-tight leading-none text-black dark:text-white">인기 코스</h1>      
<div class="container my-5 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="mb-5 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-xl shadow-lg">
                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-xl shadow-lg">
                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-xl shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>
    </div>
</div>
</template>