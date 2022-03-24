import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ModulesUser = lazy(() => import("../pages/Modules"));
const ModulesUserOverview = lazy(() => import("../pages/Modules/Module"));
const BattleOverview = lazy(() => import("../pages/Modules/Battle"));
const BattleExercice = lazy(() => import("../pages/Modules/Battle/Exercice"));
const BattleAdmin = lazy(() => import('../pages/Admin/Sessions/History'))
const BattleRank = lazy(() => import("../pages/Modules/Battle/Ranking"));
const TestOverview = lazy(() => import("../pages/Modules/Test"));
const AdminHome = lazy(() => import("../pages/Admin/Home/index"));
const AdminUser = lazy(() => import("../pages/Admin/Users/index"));
const AdminUserOverview = lazy(() => import("../pages/Admin/Users/overview"));
const Modules = lazy(() => import("../pages/Admin/Modules"));
const NewModule = lazy(() => import("../pages/Admin/Modules/NewModules"));
const ModuleOverview = lazy(() => import("pages/Admin/Modules/Module"));
const NewCourse = lazy(() => import("pages/Admin/Modules/Module/New"));
const EditCourse = lazy(() => import("pages/Admin/Modules/Module/Edit"));
const Session = lazy(() => import("pages/Admin/Sessions"));

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/modules",
    component: ModulesUser,
  },
  {
    path: "/modules/battle",
    component: BattleOverview,
  },
  {
    path: "/modules/battle/:exerciceId",
    component: BattleExercice,
  },
  {
    path: "/modules/battle/old/:battleId",
    component: BattleRank,
  },
  {
    path: "/modules/:moduleId",
    component: ModulesUserOverview,
    goBack: true
  },
  {
    path: "/modules/:moduleId/:testId",
    component: TestOverview,
  },
  {
    path: "/admin/home",
    component: AdminHome,
    roles: ["admin"],
  },
  {
    path: "/admin/user",
    component: AdminUser,
    roles: ["admin"],
  },
  {
    path: "/admin/user/:userId",
    goBack: true,
    component: AdminUserOverview,
    roles: ["admin"],
  },
  {
    path: "/admin/modules/new",
    goBack: true,
    component: NewModule,
    roles: ["admin"],
  },
  {
    path: "/admin/modules",
    component: Modules,
    roles: ["admin"],
  },
  {
    path: "/admin/modules/:id",
    goBack: true,
    component: ModuleOverview,
    roles: ["admin"],
  },
  {
    path: "/admin/modules/:id/new",
    goBack: true,
    component: NewCourse,
    roles: ["admin"],
  },
  {
    path: "/admin/modules/:id/edit/:exerciceId",
    goBack: true,
    component: EditCourse,
    roles: ["admin"],
  },
  {
    path: "/admin/battle",
    component: Session,
    roles: ["admin"],
  },
  {
    path: "/admin/battle/history",
    goBack: true,
    component: BattleAdmin,
    roles: ["admin"],
  },
];

export default routes;
