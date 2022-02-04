import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('../pages/Home'))
const AdminHome = lazy(() => import('../pages/Admin/Home/index'))
const Modules = lazy(() => import('../pages/Admin/Modules'))
const NewModule = lazy(() => import('../pages/Admin/Modules/NewModules'))
const ModuleOverview = lazy(() => import('pages/Admin/Modules/Module')) 
const NewCourse = lazy(() => import('pages/Admin/Modules/Module/New')) 
const EditCourse = lazy(() => import('pages/Admin/Modules/Module/Edit')) 
// const Settings = lazy(() => import('../pages/Settings'))
// const Search = lazy(() => import('../pages/Home/Search'))
// const TeacherOverview = lazy(() => import('../pages/Home/TeacherOverview'))
// // const Buttons = lazy(() => import('../pages/Buttons'))
// const Modals = lazy(() => import('../pages/Modals'))
// const Tables = lazy(() => import('../pages/Tables'))
// const Page404 = lazy(() => import('../pages/404'))
// const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/home', // the url
    component: Home, // view rendered
  },
  {
    path: '/admin/home',
    component: AdminHome,
    roles: ['admin']
  },
  {
    path: '/admin/modules/new',
    component: NewModule,
    roles: ['admin']
  },
  {
    path: '/admin/modules',
    component: Modules,
    roles: ['admin']
  },
  {
    path: '/admin/modules/:id',
    component: ModuleOverview,
    roles: ['admin']
  },
  {
    path: '/admin/modules/:id/new',
    component: NewCourse,
    roles: ['admin']
  },
  {
    path: '/admin/modules/:id/edit/:exerciceId',
    component: EditCourse,
    roles: ['admin']
  },
  // {
  //   path: '/settings',
  //   component: Settings,
  // },
  // {
  //   path: '/home/search', // the url
  //   component: Search, // view rendered
  // },
  // {
  //   path: '/home/teacher/:id', // the url
  //   component: TeacherOverview, // view rendered
  // },
  // {
  //   path: '/buttons',
  //   component: Buttons,
  // },
  // {
  //   path: '/modals',
  //   component: Modals,
  // },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  // {
  //   path: '/404',
  //   component: Page404,
  // },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
