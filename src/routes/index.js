import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('../pages/Home'))
const ModulesUser = lazy(() => import('../pages/Modules'))
const AdminHome = lazy(() => import('../pages/Admin/Home/index'))
const Modules = lazy(() => import('../pages/Admin/Modules'))
const NewModule = lazy(() => import('../pages/Admin/Modules/NewModules'))
const ModuleOverview = lazy(() => import('pages/Admin/Modules/Module')) 
const NewCourse = lazy(() => import('pages/Admin/Modules/Module/New')) 
const EditCourse = lazy(() => import('pages/Admin/Modules/Module/Edit')) 
const Session = lazy(() => import('pages/Admin/Sessions'))

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/modules',
    component: ModulesUser,
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
  {
    path: '/admin/session',
    component: Session,
    roles: ['admin']
  }
]

export default routes
