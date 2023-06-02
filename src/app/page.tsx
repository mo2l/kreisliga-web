export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4">

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Warcraft 3 Kreisliga
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                        Willkommen, zur WC3 Kreisliga, Entdecke in der WC3 Kreisliga deine Warcraft 3-Leidenschaft neu.
                        Bei uns steht Fairness und
                        Fortschritt im Mittelpunkt. Stell dein Team zusammen und stelle dich der ultimativen
                        Herausforderung!
                    </p>
                    <div className="flex justify-center">
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span
                              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Melde dich hier an
                          </span>
                        </button>

                        <a href={"https://discord.gg/tmMsmm6S"}>
                            <button type="button"
                                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                Komm auf unseren Discord Server
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
