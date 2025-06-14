/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SignupRouteImport } from './routes/signup'
import { Route as SigninRouteImport } from './routes/signin'
import { Route as RecoverRouteImport } from './routes/recover'
import { Route as IndexRouteImport } from './routes/index'

const SignupRoute = SignupRouteImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRouteImport,
} as any)
const SigninRoute = SigninRouteImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => rootRouteImport,
} as any)
const RecoverRoute = RecoverRouteImport.update({
  id: '/recover',
  path: '/recover',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/recover': typeof RecoverRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/recover': typeof RecoverRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/recover': typeof RecoverRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/recover' | '/signin' | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/recover' | '/signin' | '/signup'
  id: '__root__' | '/' | '/recover' | '/signin' | '/signup'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RecoverRoute: typeof RecoverRoute
  SigninRoute: typeof SigninRoute
  SignupRoute: typeof SignupRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/recover': {
      id: '/recover'
      path: '/recover'
      fullPath: '/recover'
      preLoaderRoute: typeof RecoverRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RecoverRoute: RecoverRoute,
  SigninRoute: SigninRoute,
  SignupRoute: SignupRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
