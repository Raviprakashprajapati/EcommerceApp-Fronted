import React, { useEffect, useState } from "react";
import ProductCardHome from "./ProductCardHome";
import logoRemove from "../assets/image/logoRemove.png";

function ProductDetailDesign() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div class="bg-white">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div class="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Men
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Clothing
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li class="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  class="font-medium text-gray-500 hover:text-gray-600"
                >
                  Basic Tee 6-Pack
                </a>
              </li>
            </ol>
          </nav>

          {/* <!-- Image gallery --> */}

          {windowSize > 700 ? (
            // LAPTOP
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
                  alt="Two each of gray, white, and black shirts laying flat."
                  class="h-50 w-72  border p-2 "
                />
              </div>
              <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70"
                  alt="Two each of gray, white, and black shirts laying flat."
                  class="h-50 w-72  border p-2 "
                />
              </div>
              <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/u/k/-original-imagqx3gs36wgjz9.jpeg?q=70"
                  alt="Two each of gray, white, and black shirts laying flat."
                  class="h-50 w-[200px]  border p-2 "
                />
              </div>
            </div>
          ) : (
            //   MOBILE
            <div class="flex mt-4 overflow-x-auto">
              <img
                class="flex-shrink-0 w-auto border h-[21rem] p-2 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg shadow-lg mx-2 "
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
                alt="Product 1"
              />
              <img
                class="flex-shrink-0 w-auto border h-[21rem] p-2 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg shadow-lg mx-2"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/a/o/-original-imagqx45b9mje5dh.jpeg?q=70"
                alt="Product 2"
              />
              <img
                class="flex-shrink-0 w-auto border h-[21rem] p-2 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg shadow-lg mx-2"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/u/k/-original-imagqx3gs36wgjz9.jpeg?q=70"
                alt="Product 3"
              />
            </div>
          )}

          {/* <!-- Product info --> */}
          <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                IPHONE
              </h1>
            </div>

            {/* <!-- Options --> */}
            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">$192</p>

              {/* <!-- Reviews --> */}
              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                  <a
                    href="#"
                    class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>

              {/* buy */}
              <button
                type="submit"
                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buy Now
              </button>

              {/* cart */}

              <button
                type="submit"
                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>

              <div className="mt-8 border p-4">
                <h3 class="text-2xl mb-3 font-medium text-gray-900">
                  Brand : <span className="font-bold">Apple</span>
                </h3>
                <hr />
                <h3 class="text-2xl mt-3 mb-3  font-medium text-gray-900">
                  Stock : <span className="font-bold">10</span>
                </h3>
                <hr />
                <h3 class="text-2xl mt-3  font-medium text-gray-900">
                  Warranty : <span className="font-bold">1</span>
                </h3>
              </div>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* <!-- Description and details --> */}
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                    The latest iPhone featuring advanced technology and stunning
                    design
                  </p>
                </div>
              </div>

              {/* FEATURES------- */}
              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Features</h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">Ultra-soft 100% cotton</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* DESCRIPTION---- */}
              <div class="mt-10">
                <h2 class="text-xxl font-bold mb-3 text-gray-900">
                  Description
                </h2>

                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <tbody>
                      <tr class="bg-slate-200   mb-2 dark:bg-gray-800  ">
                        <td class="px-2 py-2 md:text-sm rounded-lg text-black text-[0.78rem] font-medium ">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem doloribus nam, assumenda ad tempora cum.
                        </td>
                      </tr>
                      <br />
                      <tr class="bg-slate-200   mb-2 dark:bg-gray-800  ">
                        <td class="px-2 py-2 md:text-sm rounded-lg text-black text-[0.78rem] font-medium ">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem doloribus nam, assumenda ad tempora cum.
                        </td>
                      </tr>
                      <br />

                      <tr class="bg-slate-200   mb-2 dark:bg-gray-800  ">
                        <td class="px-2 py-2 md:text-sm rounded-lg text-black text-[0.78rem] font-medium ">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem doloribus nam, assumenda ad tempora cum.
                        </td>
                      </tr>
                      <br />
                      <tr class="bg-slate-200   mb-2 dark:bg-gray-800  ">
                        <td class="px-2 py-2 md:text-sm rounded-lg text-black text-[0.78rem] font-medium ">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem doloribus nam, assumenda ad tempora cum.
                        </td>
                      </tr>
                      <br />
                      <tr class="bg-slate-200   mb-2 dark:bg-gray-800  ">
                        <td class="px-2 py-2 md:text-sm rounded-lg text-black text-[0.78rem] font-medium ">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorem doloribus nam, assumenda ad tempora cum.
                        </td>
                      </tr>
                      <br />
                    </tbody>
                  </table>
                </div>
              </div>

              {/* OFFERS */}
              <div class="mt-2 space-y-6 flex flex-wrap md:float-left  justify-center items-center">
                <h4 className="font-medium m-auto md:mr-5 ">
                  Offers And Discounts
                </h4>

                <div className="border rounded-lg p-2">
                  <p class="text-sm mb-2 text-gray-600">
                    The 6-Pack includes two black, two white, lorem lorem
                  </p>
                  <p class="text-sm mb-2 text-gray-600">
                    The 6-Pack includes two black, two white, lorem lorem
                  </p>
                  <p class="text-sm mb-2 text-gray-600">
                    The 6-Pack includes two black, two white, lorem lorem
                  </p>
                  <p class="text-sm mb-2 text-gray-600">
                    The 6-Pack includes two black, two white, lorem lorem
                  </p>
                  <p class="text-sm mb-2 text-gray-600">
                    The 6-Pack includes two black, two white, lorem lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-60px] w-90 mr-4 ml-4  bg-slate-500 h-0.5"></div>

      <br />
      <ProductCardHome productHeaderName="Related Product" />

      {/* REVIEWS DIV */}
      <div className="mt-6 md:mt-12">
        {/* reviews header */}
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold text-center ">
            Product Reviews{" "}
          </h4>

          <a
            href="#"
            class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 flex justify-center "
          >
            117 reviews
          </a>
        </div>

        {/* reviews user */}
        <div className="mt-4 m-auto md:w-2/3  flex flex-col justify-center  overflow-y-auto   max-h-[400px] space-y-2   ">
          {/* per user */}

          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
          <div class="flex   rounded-lg mb-2  mr-2 ml-2  items-start gap-2.5 bg-slate-400 p-4">
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704785963~exp=1704786563~hmac=a3da490011cc04279884fd669c8fc0424faf59f2f0c141f023edd90d1ca8dc28"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">
                {" "}
                That's awesome. I think our product is really very appreciate
                and amazing features
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>

          {/* end of per user review */}
        </div>

        {/* END OF REVIEWS DIV */}
      </div>
      <br />
      <br />

      {/* Product Footer */}
      <footer class="bg-slate-200 dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src={logoRemove}
                  class="h-12 me-3 rounded-full"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Products
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Electronice
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Clothing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://raviprakashprajapati.netlify.app/"
                      class="hover:underline "
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Raviprakashprajapati"
                      class="hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                FlipMart
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ProductDetailDesign;