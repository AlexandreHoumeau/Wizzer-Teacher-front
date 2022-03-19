import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const ModulesUser = lazy(() => import('../pages/Modules'))
const ModulesUserOverview = lazy(() => import('../pages/Modules/Module'))
const BattleOverview = lazy(() => import('../pages/Modules/Battle'))
const BattleExercice = lazy(() => import('../pages/Modules/Battle/Exercice'))
const BattleRank = lazy(() => import('../pages/Modules/Battle/Ranking'))
const TestOverview = lazy(() => import('../pages/Modules/Test'))
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
    path: '/modules/battle',
    component: BattleOverview,
  },
  {
    path: '/modules/battle/:exerciceId',
    component: BattleExercice,
  },
  {
    path: '/modules/battle/old/:battleId',
    component: BattleRank,
  },
  {
    path: '/modules/:moduleId',
    component: ModulesUserOverview,
  },
  {
    path: '/modules/:moduleId/:testId',
    component: TestOverview,
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
