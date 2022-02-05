/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
  {
    path: '/app/admin/home', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Accueil', // name that appear in Sidebar,
    permission: 'admin'
  },
  {
    path: '/app/admin/modules',
    icon: 'ModulesIcon',
    name: 'Modules',
    permission: 'admin'
  },
  {
    path: '/app/admin/session',
    icon: 'SessionsIcon',
    name: 'Sessions',
    permission: 'admin'
  },
  {
    path: '/app/admin/user',
    icon: 'UsersIcon',
    name: 'Utilisateurs',
    permission: 'admin'
  },
  {
    path: '/app/admin/s',
    icon: 'UsersIcon',
    name: 'Hello World',
    permission: 'user'
  },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
