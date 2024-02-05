import { createBrowserRouter, Link, Navigate, RouteObject } from "react-router-dom";
import { App } from "../App";
import { DesignResponsive, HeroView, ToolsView, WhatIsView, FrameworksView } from "../views";
import { CardFramework } from "../components";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/*',
                element: <Navigate to={'/'} />,
            },
            {
                index: true,
                element: <HeroView />,
                handle: {
                    crumb: () => <Link to="/" className="text-blue-400">Home</Link>,
                },

            },
            {
                path: 'what-is',
                element: <WhatIsView />,
                handle: {
                    crumb: () => <Link to="what-is" className="text-blue-400">¿Qué es?</Link>,
                },

            },
            {

                path: 'modern-frameworks',
                element: <FrameworksView />,
                handle: {
                    crumb: () => <Link to="/modern-frameworks/" className="text-blue-400">Frameworks modernos</Link>,
                },
                children: [

                    {
                        path: 'react',
                        element: <CardFramework
                            framework="React"
                            linkDocs="https://react.dev/"
                            nameImg="react_logo_new"
                        />,

                        handle: {
                            crumb: () => <Link to="/modern-frameworks/react" className="text-blue-400">React</Link>,
                        },
                        children: [

                            {
                                index: true,
                                element: <>
                                    <dd className="text-center font-extrabold text-blue-500">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>
                                    <dd>
                                        Meta
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/react/creator" className="text-blue-400">Creador</Link>,
                                },

                            },
                            {
                                path: 'description',
                                element: <>

                                    <dd>
                                        React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Se centra en la creación de componentes declarativos que facilitan la gestión del estado y la construcción de interfaces eficientes.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/react/description" className="text-blue-400">Description</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>
                                    <dd>
                                        Facebook (obviamente), Instagram, Airbnb, Netflix.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/react/companies" className="text-blue-400">Compañias</Link>,
                                },

                            }
                        ]
                    },
                    {
                        path: 'angular',
                        element: <CardFramework
                            framework="Angular"



                            linkDocs="https://angular.dev/"
                            nameImg="angular_logo"
                        />,
                        handle: {
                            crumb: () => <Link to="/modern-frameworks/angular" className="text-blue-400">Angular</Link>,
                        },
                        children: [
                            {
                                index: true,
                                element: <>
                                    <dd className="text-center font-extrabold text-blue-500">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>

                                    <dd>
                                        Google
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/angular/creator" className="text-blue-400">Creador</Link>,
                                },

                            },

                            {
                                path: 'description',
                                element: <>

                                    <dd>
                                        Angular es un framework completo de desarrollo frontend que utiliza TypeScript. Proporciona un conjunto de herramientas para construir aplicaciones web complejas y dinámicas. Angular sigue el patrón de arquitectura MVC (Model-View-Controller).
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/angular/description" className="text-blue-400">Descripcion</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>

                                    <dd>
                                        Google, Microsoft, IBM, Microsoft Office
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/angular/companies" className="text-blue-400">Compañias</Link>,
                                },

                            }
                        ]
                    },
                    {
                        path: 'vue',
                        element: <CardFramework
                            framework="Vue JS"
                            linkDocs="https://vuejs.org/"
                            nameImg="vue_logo"
                        />,
                        handle: {
                            crumb: () => <Link to="/modern-frameworks/vue" className="text-blue-400">Vue</Link>,
                        },
                        children: [
                            {
                                index: true,
                                element: <>
                                    <dd className="text-center font-extrabold text-blue-500">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>

                                    <dd>
                                        Evan You
                                    </dd>
                                </>

                            },
                            {
                                path: 'description',
                                element: <>

                                    <dd>
                                        Vue.js es un framework progresivo de JavaScript utilizado para construir interfaces de usuario. Es fácil de integrar en proyectos existentes y ofrece un enfoque gradual para el desarrollo. Vue es conocido por su simplicidad y flexibilidad.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/vue/description" className="text-blue-400">Description</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>
                                    <dt className="font-extrabold text-[#33bbcf]">Descripcion:</dt>
                                    <dd>
                                        Alibaba, Xiaomi, Adobe, Xiaomi.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/vue/companies" className="text-blue-400">Compañias</Link>,
                                },
                            }
                        ]
                    },
                    {
                        path: 'svelte',

                        element: <CardFramework
                            framework="Svelte"
                            linkDocs="https://svelte.dev/"
                            nameImg="svelt_logo"
                        />,
                        handle: {
                            crumb: () => <Link to="/modern-frameworks/svelte" className="text-blue-400">Svelte</Link>,
                        },
                        children: [
                            {
                                index: true,
                                element: <>
                                    <dd className="text-center font-extrabold text-blue-500">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>
                                    <dd>
                                        Rich Harris
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/svelte/creator" className="text-blue-400">Creador</Link>,
                                },

                            },
                            {
                                path: 'description',
                                element: <>

                                    <dd>
                                        Svelte es un framework de construcción de interfaces que lleva a cabo la mayor parte del trabajo en tiempo de compilación en lugar de en tiempo de ejecución. Se diferencia de otros frameworks al generar código optimizado y liviano.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/svelte/description" className="text-blue-400">Descripcion</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>

                                    <dd>
                                        SvelteKit (el marco de aplicación basado en Svelte) es utilizado por empresas como Spotify, IBM, entre otras.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/svelte/companies" className="text-blue-400">Compañias</Link>,
                                },
                            }
                        ]
                    }
                ]


            },
            {
                path: 'tools',
                element: <ToolsView />,
                handle: {
                    crumb: () => <Link to="/tools" className="text-blue-400">Herramientas</Link>,
                },

            },

            {
                path: 'design-responsive',
                element: <DesignResponsive />,
                handle: {
                    crumb: () => <Link to="/responsive" className="text-blue-400">Diseño Responsivo</Link>,
                },

            },

        ]
    }
]

export const router = createBrowserRouter(routes)

