/** All routes configurations */

export default [
  { path: '/',
    name: 'Home',
    component: () => import('@/containers/Home'),
  },
];
